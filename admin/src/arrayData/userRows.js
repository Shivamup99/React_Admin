export const column =[
  {field: 'id', headerName: 'ID', width: 70 },
  {
    field:'name',headerName:"User",width:230,
    renderCell:(params)=>{
      return(
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt='avr'/>
          <span>{params.row.name}</span>
        </div>
      )
    }
  },
  {field: 'email', headerName: 'Email', width: 230 },
  {field: 'age', headerName: 'Age', width: 100 },
  {field: 'status', headerName: 'Status', width: 130,
  renderCell:(params)=>{
    return <div className={`cellWithStatus ${params.row.stats}`}>{params.row.stats}</div>
  }
  },
]

export const rows = [
   { id: 1, name: "Shivam Upadhyay",email:'shivam@gmail.com', age: 24,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwwcj5qcBvL-wXtrBvRUmfcFC7NVWoo3FYA&usqp=CAU', stats:'passive' },
    { id: 2, name: "Jon Snow",email:'snow@gmail.com', age: 35,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ24sk8gYDCX3n31OUwNA23xkCB7T3Sp1QXDv_RGu11PiY5wzliJczCBaUMhZId4eJPOo&usqp=CAU', stats:'active' },
    { id: 3, name: "Lannister Cersei",email:'cersei@gmail.com', age: 42 ,img:'https://www.slazzer.com/static/images/home-page/banner-orignal-image.jpg',stats:'active' },
    { id: 4, name: "Jaime Lannister",email:'jaime@gmail.com', age: 45 ,img:'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg',stats:'active' },
    { id: 5, name: "Arya Stark",email:'arya@gmail.com', age: 16 ,img:'https://i.pinimg.com/564x/8b/30/de/8b30dead52fb583f2561eee302f6a672.jpg',stats:'active'},
    { id: 6, name: "Daenerys Targaryen",email:'tay@gmail.com', age: 67 ,img:'https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg',stats:'passive'},
    { id: 7, name: "Melisandre",email:'mali@gmail.com', age: 50 ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4biKa-n8yfoIIeJL9F9xk2YdnoEOCGjuchSzkPE0ta46MscVXqNhXHJEAoEvGa0-W1s8&usqp=CAU',stats:'passive'},
    { id: 8, name: "Ferrara Clifford",email:'ferra@gmail.com', age: 44 ,img:'https://i.pinimg.com/736x/6f/8b/07/6f8b07fb115ff4cfa2160a3b02f98dd1.jpg',stats:'active'},
    { id: 9, name: "Rossini Frances",email:'rossi@gmail.com', age: 36 ,img:'https://www.esafety.gov.au/sites/default/files/styles/large/public/2019-08/Remove%20images%20and%20video.jpg?itok=3qdxvCbN',stats:'active'},
    { id: 10, name: "Harvey Roxie",email:'roxi@gmail.com', age: 65 ,img:'https://media.istockphoto.com/photos/and-then-you-came-along-and-turned-my-life-around-picture-id1300273437?k=20&m=1300273437&s=170667a&w=0&h=Ux0Vmzx7wmg47KaHsOIyCU9nR4WzVXeUIm2JPiTi0Mo=',stats:'passive'},
    { id: 11, name: "Vipin Upadhyay",email:'vipin@gmail.com', age: 29,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGB8hL92pHixnkA7yY-IrWBfJNDSl3FTe8w&usqp=CAU', stats:'active' },
  ];