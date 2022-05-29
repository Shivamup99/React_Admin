import React,{useContext} from 'react'
import { ChatBubbleOutline, DarkModeOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined, Search } from '@mui/icons-material'
import '../styles/navbar.scss'
import { Avatar } from '@mui/material'
import { DarkModeContext } from '../context/modeContext';
const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Serach.....' />
          <Search/>
        </div>
        <div className="items">
          <div className="item">
           <LanguageOutlined/>
           <span>English</span>
          </div>
          <div className="item">
          <DarkModeOutlined onClick={()=>dispatch({type:'TOGGLE'})}/> 
          </div>
          <div className="item">
            <NotificationsNoneOutlined/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutline/>
            <div className="counter">3</div>
          </div>
          <div className="item">
            <ListOutlined/>
          </div>
          <div className="item">
            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFqCCPaO3bPD5f7gbTyZ5MBb9Q1wFuQDxdhA&usqp=CAU'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar