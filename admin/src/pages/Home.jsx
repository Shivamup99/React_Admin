import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import '../styles/home.scss'
import HomeWid from '../components/HomeWid'
import FeatureChart from '../components/FeatureChart'
import Charts from '../components/Charts'
import TableData from '../components/TableData'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="home-container">
          <Navbar/>
          <div className="home-wid">
            <HomeWid type="user"/>
            <HomeWid type="order"/>
            <HomeWid type="earning"/>
            <HomeWid type="balance"/>
          </div>
          <div className="charts">
            <FeatureChart/>
            <Charts aspect={2/1} title={'Last 6 Monts Revenu'}/>
          </div>
          <div className="list-container">
            <div className="lTitle">
              Latest Transactions
            </div>
            <TableData/>
          </div>
        </div>
        
    </div>
  )
}

export default Home