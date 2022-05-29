import React from 'react'
import Datatable from '../components/Datatable'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/list.scss'
const Lists = () => {
  return (
    <div className='list'>
        <Sidebar/>
        <div className="list-container">
            <Navbar/>
            <Datatable/>
        </div>
    </div>
  )
}

export default Lists