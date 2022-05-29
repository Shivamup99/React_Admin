import { AccountBalanceWalletOutlined, KeyboardArrowUp, MonetizationOn, PersonOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import '../styles/homeWid.scss'
const HomeWid = ({type}) => {
    let data;
    let amount=19933;
    let diff = 45;
    switch (type) {
        case 'user':
            data={
                type:'USERS',
                isMoney:false,
                link:'See all users',
                icon:<PersonOutlined style={{color:'crimson',backgroundColor:'rgba(255,0,0,0.2)',borderRadius:'5px'}}/>
            }
            break;
            case 'order':
            data={
                type:'ORDERS',
                isMoney:false,
                link:'View all orders',
                icon:<ShoppingCartOutlined style={{color:'goldenrod',padding:'1px',backgroundColor:'rgba(2515,165,32,0.2)',borderRadius:'5px'}}/>
            }
            break;
            case 'earning':
                data={
                    type:'EARNING',
                    isMoney:true,
                    link:'View all earnings',
                    icon:<MonetizationOn style={{color:'green',backgroundColor:'rgba(0,120,0,0.2)',borderRadius:'5px'}}/>
                }
                break;
                case 'balance':
                    data={
                        type:'BALANCE',
                        isMoney:true,
                        link:'See all balance',
                        icon:<AccountBalanceWalletOutlined style={{color:'purple',backgroundColor:'rgba(120,0,120,0.2)',borderRadius:'5px',padding:'1px'}}/>
                    }
                    break;
    
        default:
            break;
    }
  return (
    <div className='wid-item'>
        <div className="left">
            <span className="title">{data.type}</span>
            <span className="counter">{data.isMoney && '$'} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
            <KeyboardArrowUp/>
            {diff}%
            </div>
            <div className="icon">
            {data.icon}
            </div>
        </div>
    </div>
  )
}

export default HomeWid