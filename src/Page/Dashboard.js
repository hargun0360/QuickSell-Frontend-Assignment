import React from 'react'
import Card from '../Components/Card';
import Navbar from '../Components/Navbar';

const Dashboard = () => {
  return (<>
    <div>
        <Navbar />
        <div className='Card-Container'>
        <Card />
        </div>

    </div>
    </>);
}

export default Dashboard