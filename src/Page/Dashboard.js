import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import CustomSpinner from "../Components/CustomSpinner";

const Dashboard = () => {
  const [cardData, setCardData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState({});
  const [priority, setPriority] = useState({});
  const [grouping, setGrouping] = useState("status");

  useEffect(() => {
    getData();
  }, []);

  const groupByStatus = (tickets) => {
    const grouped = tickets.reduce((acc, ticket) => {
        if (!acc[ticket.status]) {
            acc[ticket.status] = [];
        }
        acc[ticket.status].push(ticket);
        return acc;
    }, {});

    return {
        Keys: Object.keys(grouped),
        ...grouped
    };
}

  const groupByPriority = (tickets) => {
    const priorityObject =  tickets.reduce((acc, ticket) => {
      if (!acc[ticket.priority]) {
        acc[ticket.priority] = [];
      }
      acc[ticket.priority].push(ticket);
      return acc;
    }, {});
    return {
        Keys: Object.keys(priorityObject),
        ...priorityObject
    };
  };

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const data = await response.json();
      setIsLoading(false);
      setData(data);
      setCardData(data.tickets);
      setUserData(data.users);
      setStatus(groupByStatus(data.tickets));
      setPriority(groupByPriority(data.tickets));
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  if (grouping === "status") {
    return (
      <>
        <div>
          <Navbar grouping={grouping} setGrouping={setGrouping} />
          <div className="Dashboard-Container">
            {isLoading ? (
              <CustomSpinner />
            ) : (
              <>
                {status.Keys.map((item, index) => (
                  <div className="column" key={index}>
                    <div className="Header">
                      <span>{item}</span>
                      <span>{status[item]?.length}</span>
                    </div>
                    {
                        status[item].map((value) => {
                           return ( <Card {...value} />);
                        })
                    }
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </>
    );
  } else if (grouping === "user") {
    return (
      <>
        <div>
          <Navbar grouping={grouping} setGrouping={setGrouping} />
          <div className="Dashboard-Container">
            {isLoading ? <CustomSpinner /> : <></>}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <Navbar grouping={grouping} setGrouping={setGrouping} />
          <div className="Dashboard-Container">
            {isLoading ? <CustomSpinner /> : <></>}
          </div>
        </div>
      </>
    );
  }
};

export default Dashboard;
