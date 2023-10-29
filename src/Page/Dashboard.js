import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import CustomSpinner from '../Components/CustomSpinner';

const Dashboard = () => {
  const [cardData, setCardData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
      const data = await response.json();
      setIsLoading(false);
      console.log(data);
      setData(data);
      setCardData(data.tickets);
      setUserData(data.users);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="Dashboard-Container">
            {isLoading ? <CustomSpinner /> : null}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
