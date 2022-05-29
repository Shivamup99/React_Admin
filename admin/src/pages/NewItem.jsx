import { DriveFolderUploadOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/new.scss'
const NewItem = ({inputs,title}) => {
    const [file,setFile] = useState('');
    
  return (
    <div className='new'>
        <Sidebar/>
        <div className="new-container">
            <Navbar/>
            <div className="top">
                <h1>{title}</h1>
            </div>
            <div className="bottom">
                <div className="left">
                    <img src={file ? URL.createObjectURL(file):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH4d1ldfiI0npUaDbUXnRHjumUJmSpIaKErA&usqp=CAU"}
                     alt="hih" className='leftImg' />
                </div>
                <div className="right">
                    <form>
                        <div className="formInput">
                            <label htmlFor='file'>  Image:
                                <DriveFolderUploadOutlined className='icon'/>
                                </label>
                            <input type="file" id='file' 
                            onChange={(e)=>setFile(e.target.files[0])}
                            style={{display:'none'}}/>
                            </div>
                            {inputs.map((input)=>(
                              <div className="formInput" key={input.id}>
                              <label>{input.label}</label>
                              <input type={input.text} placeholder={input.placeholder}/>
                              </div>
                            ))}
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewItem