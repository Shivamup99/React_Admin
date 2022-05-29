import React from 'react'
import '../styles/featureChart.scss'
import {KeyboardArrowDownSharp, MoreVert} from '@mui/icons-material'
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
const FeatureChart = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVert fontSize='small'/>
        </div>
        <div className="bottom">
            <div className="featureChart">
             <CircularProgressbar value={70} text={"70%"} strokeWidth={4} />
            </div>
            <p className="title">Total Sales made today</p>
            <p className="amount">$ 420</p>
             <p className="desc">Previous transaction processing Last payments may not be include</p>
        </div>
        <div className="summary">
            <div className="item">
                <div className="iTitle">Today</div>
                <div className="iResult positive">
                    <KeyboardArrowDownSharp fontSize='14px'/>
                    <div className="rAmount">$ 12.4k</div>
                </div>
            </div>
            <div className="item">
                <div className="iTitle">Last Week</div>
                <div className="iResult negative">
                    <KeyboardArrowDownSharp fontSize='14px'/>
                    <div className="rAmount">$ 10.4k</div>
                </div>
            </div>
            <div className="item">
                <div className="iTitle">Last Month</div>
                <div className="iResult negative">
                    <KeyboardArrowDownSharp fontSize='14px'/>
                    <div className="rAmount">$ 9.4k</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureChart