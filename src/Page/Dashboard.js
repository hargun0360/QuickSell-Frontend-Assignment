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
  const [ordering, setOrdering] = useState("priority");
  const statusKeys = ["Backlog","Todo","In progress" , "Done" , "Canceled"];

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

    statusKeys.forEach(key => {
      if (!grouped[key]) {
        grouped[key] = [];
      }
    });

    if (ordering === "priority") {
      for (let key in grouped) {
        grouped[key].sort((a, b) => b.priority - a.priority);
      }
    }
    return {
      Keys: statusKeys,
      ...grouped,
    };
};

  const groupByPriority = (tickets) => {
    const priorityObject = tickets.reduce((acc, ticket) => {
      if (!acc[ticket.priority]) {
        acc[ticket.priority] = [];
      }
      acc[ticket.priority].push(ticket);
      return acc;
    }, {});
    return {
      Keys: Object.keys(priorityObject),
      ...priorityObject,
    };
  };

  console.log(status);

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
                      <div className="icon-text">
                        {item == "Todo" ? (
                          <i className="bx bx-circle" id="todo"></i>
                        ) : item == "In progress" ? (
                          <i className="bx bx-adjust" id="progress"></i>
                        ) : item == "Backlog" ? (
                          <i className="bx bx-task-x" id="backlog"></i>
                        ) : item == "Done" ? (
                          <i className="bx bxs-check-circle" id="done"></i>
                        ) : (
                          <i className="bx bxs-x-circle" id="cancel"></i>
                        )}
                        <span className="text">
                          {item == "In progress" ? "In Progress" : item}
                        </span>
                        <span>{status[item]?.length}</span>
                      </div>
                      <div className="actions">
                        <i className="bx bx-plus" id="plus"></i>
                        <i
                          className="bx bx-dots-horizontal-rounded"
                          id="dots"
                        ></i>
                      </div>
                    </div>
                    {status[item] && status[item].map((value) => {
                      return (
                        <Card
                          id={value.id}
                          title={value.title}
                          tag={value.tag}
                          userId={value.userId}
                          userData={userData}
                          priority={value.priority}
                          key={value.id}
                        />
                      );
                    })}
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
          <Navbar
            grouping={grouping}
            setGrouping={setGrouping}
            ordering={ordering}
            setOrdering={setOrdering}
          />
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
