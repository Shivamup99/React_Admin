import React from 'react'
import '../styles/single.scss'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Charts from '../components/Charts'
import TableData from '../components/TableData'
const SingleUser = () => {
  return (
    <div className='sUser'>
        <Sidebar/>
    <div className="sUser-container">
        <Navbar/>
        <div className="top">
            <div className="left">
                <h1 className="title">Information</h1>
                <div className="editBtn">Edit</div>
                <div className="item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ6PMEvxO_4DFLlVkV6gDqe34JB5w8tuDcUw&usqp=CAU" 
                     alt="udyy" className="itemImg"/>
                     <div className="details">
                         <h1 className="itemTitle">Shivam Upadhyay</h1>
                         <div className="detailItem">
                             <span className="itemKey">Email:</span>
                             <span className="itemValue">shivam@gmail.com</span>
                         </div>
                         <div className="detailItem">
                             <span className="itemKey">Phone:</span>
                             <span className="itemValue">+91 9198452017</span>
                         </div>
                         <div className="detailItem">
                             <span className="itemKey">Address:</span>
                             <span className="itemValue">Navi Mumbai</span>
                         </div>
                         <div className="detailItem">
                             <span className="itemKey">Country:</span>
                             <span className="itemValue">India</span>
                         </div>
                     </div>
                </div>
            </div>
            <div className="right">
                <Charts aspect={3/1} title={'User Spend Last 6 Monts'}/>
            </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transaction</h1>
            <TableData/>
        </div>
    </div>
    </div>
  )
}

export default SingleUser