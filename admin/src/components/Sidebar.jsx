import React, { useContext } from 'react'
import '../styles/sidebar.scss'
import {AccountBoxOutlined, Dashboard, Equalizer, ExitToAppOutlined, FilterDrama, Inventory, LocalShippingOutlined, Notifications, Person, Psychology, Settings} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../context/modeContext';
const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to='/'>
            <img src='https://t3.ftcdn.net/jpg/00/07/32/48/360_F_7324855_mx4CEBWTr81XLOrlQccCROtP2uNR7xbk.jpg' 
            alt='ssddf' className='sidebar-logo'/>
            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">Main</p>
                <Link to='/'>
                <li>
                    <Dashboard/>
                   <span>Dasboard</span>  
                </li>
                </Link>
                <p className="title">Lists</p>
                <Link to='/users'>
                <li>
                <Person/>
                <span>Users</span>
                </li> 
                </Link>
                <Link to='/products'>
                <li>
                    <Inventory/>
                    <span>Products</span>
                </li>
                </Link>
                <li>
                    <LocalShippingOutlined/>
                    <span>Delivery</span>
                </li>
                <p className="title">Usefull</p>
                <li>
                    <Equalizer/>
                    <span>Stats</span>
                </li>
                <li>
                    <Notifications/>
                    <span>Notifications</span>
                </li>
                <p className="title">Services</p>
                <li>
                    <FilterDrama/>
                    <span>System Helth</span>
                </li>
                <li>
                    <Psychology/>
                    <span>Logs</span>
                </li>
                <li>
                    <Settings/>
                    <span>Settings</span>
                </li>
                <p className="title">Profile</p>
                <li>
                    <AccountBoxOutlined/>
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppOutlined/>
                    <span>Logout</span>
                </li>

            </ul>
        </div>
        <div className="bottom">
            <div className="colorOpt" onClick={()=>dispatch({type:'LIGHT'})}></div>
            <div className="colorOpt"  onClick={()=>dispatch({type:'DARK'})}></div>
            {/* <div className="colorOpt"></div>
            <div className="colorOpt"></div> */}
        </div>
    </div>
  )
}

export default Sidebar