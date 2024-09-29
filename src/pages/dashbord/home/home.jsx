import {  Bar, BarChart, Legend, Pie, PieChart, ReferenceArea, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import './home.css'
import revenue from '../../../images/revenue.png'
import delivery from '../../../images/delivery.png'
import customer from '../../../images/customer.png'
import station from '../../../images/station.png'
import staff from '../../../images/employee.png'
import device from '../../../images/device.png'
import ongoing_img from '../../../images/ongoing (2).png'
import completed_img from '../../../images/completed.png'
import cancelled_img from '../../../images/cancelled.png'
import total from '../../../images/total.png'
import dark from '../../../images/dark.png'
import light from '../../../images/light.png'
import menu_icon from '../../../images/hamburger.png'
import {DayPicker} from 'react-day-picker'
import { useContext, useEffect, useState } from "react"
import 'react-day-picker/dist/style.css';
import { Loading } from "../../../components/loading"
import { LoadError } from "../addDevice"
import { axiosInstance } from "../../../config/axios"
import { useAuth } from "../../../authProvider"
import { NavBarContext } from "../../dashbord"
export const Home = ()=>{
   const {user} = useAuth()
   const {hide,setHide,darkTheme, setDarkTheme} = useContext(NavBarContext)
  /* fetching quick overview */
  const [dataFetched, setDataFetched] = useState(false);
  const [localError, setLocalError] = useState(null);
  const [data, setData] = useState(null);


  const handleHide = (e)=>{
      setHide(!hide)
  }
  const changeTheme = (e)=>{
    setDarkTheme(!darkTheme)
  }
  useEffect(()=>{
   setTimeout(()=>{
    fetchData()
   },500)
  },[])

  const fetchData = ()=>{
    axiosInstance.get('/summary/quicks')
    .then((response)=>{
      setData(response.data);
      console.log(response.data)
      setDataFetched(true);
      setLocalError(false);
    })
    .catch((err)=>{
      setDataFetched(true);
      setData(null)
      setLocalError(err)
    })
  }



    return(
      <div  className={darkTheme ? "home dark-back" : "home light-back"}>
        <div className="heading">
          <div>
            <img src={menu_icon} className={darkTheme ? "dark-img" : ""} onClick={handleHide}/>
            <span className={darkTheme ? "dark-text" : ""}>Welcome {data ? user.fname+"...": ""} </span>
            <div className="heading-links">
              <span  className={darkTheme ? "dark-text" : ""}> {data ? "Last Update : "+ data.time :"Loading..."}</span>
            </div>
            {darkTheme ? <img src={light} onClick={changeTheme} className="theme-toggle dark-img"/> : <img src={dark} onClick={changeTheme} className="theme-toggle"/>}
          </div>
        </div>
        {dataFetched && data ?
        <div className="quick-overview-container">
          <QuickOverView title="Total Revenue" img={revenue} data={data.revenue} theme={darkTheme}/>
          <QuickOverView title="Total Deliveries" img={delivery} data={data.orders} theme={darkTheme}/>
          <QuickOverView title="Total Customers" img={customer} data={data.users} theme={darkTheme}/>
          <QuickOverView title="Average Order Value" img={customer} data={data.average} theme={darkTheme}/>
          
        </div>
        : dataFetched && localError ? <LoadError errorMessage="Loading Failed"/>
        : <Loading/> 
        }
        <div className="body-container">
          <div className={darkTheme ? "revenue dark" : "revenue light"}>
                <span className="title">Revenue Overview</span>
              
                <Revenue/>
             
          </div>
          <div className={darkTheme ? "top-station-container dark" : "top-station-container light"}>
            <span className="title">Top stations</span>
            <TopStation/>
          </div>
          <div className={darkTheme ? "recent-activity-container dark" : "recent-activity-container light"}>
            <span className="title">Recent Activities</span>
            <RecentActivity/>
          </div> 
          <div className={darkTheme ? "user-percentage-container dark" : "user-percentage-container light"}>
            <span className="title">User Engagement</span>
            <Users/>
          </div>
          <div className={darkTheme ? "deliveries-container dark" : "deliveries-container light"}>
            <span className="title">Deliveries</span>
            <Deliveries/>
          </div> 
        </div>
      </div>
      
    )
}

const Revenue = ()=>{
   /* fetching revenue */
   const [dataFetched, setDataFetched] = useState(false);
   const [localError, setLocalError] = useState(null);
   const [data, setData] = useState(null);
 
   useEffect(()=>{
    setTimeout(()=>{
     fetchData()
    },700)
   },[])
 
   const fetchData = ()=>{
    axiosInstance.get('/summary/revenue')
     .then((response)=>{
       setData(response.data);
       setDataFetched(true);
       setLocalError(false);
     })
     .catch((err)=>{
       setDataFetched(true);
       setData(null)
       setLocalError(err)
     })
   }
 
 
  
  return(
    
    dataFetched && data ?
    <div style={{ fontSize:"0.7rem"}}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart  data={data} barGap={2} margin={{ top: 10, right: 0, left: 0, bottom: 0 }} > 
        <XAxis   
        axisLine={false}
        tickMargin={7}
        tickLine={false} 
        angle={0} 
        dataKey="day" >

        </XAxis>
        <YAxis 
        axisLine={false}   
        tickLine={false}
        tickMargin={0} 
        domain={[0, Math.max(...data.map(item => item.revenue))]}/>
        <Tooltip />
        <Legend />
        <Bar 
        radius={[5, 5, 5, 5]} 
        dataKey="revenue" 
        fill="#87fa7a" 
        barSize={30} />
        <ReferenceArea  stroke="red" strokeOpacity={0.3} />
      </BarChart> 
</ResponsiveContainer>
    </div>
    : dataFetched && localError 
    ? <LoadError errorMessage="Loading Failed"/>
    : <Loading/>
    
)
}
const QuickOverView = ({img, title, data, theme})=>{

  return(
    
  <div className={theme ? "quick-overview dark" : "quick-overview light"}>
      <div className="title">
        <span>{title}</span>
        <img src={img} className={theme ? "dark-img" :""} style={{width:"1.5rem"}}/>
      </div>
      <span className="data">{data}</span>
  </div>
  )
}

const TopStation = ()=>{
  /* fetching top staions */
  const [dataFetched, setDataFetched] = useState(false);
  const [localError, setLocalError] = useState(null);
  const [data, setData] = useState(null);
  const {darkTheme} = useContext(NavBarContext)

  useEffect(()=>{
   setTimeout(()=>{
    fetchData()
   },700)
  },[])

  const fetchData = ()=>{
    axiosInstance.get('/summary/stations')
    .then((response)=>{
      setData(response.data);
      setDataFetched(true);
      setLocalError(false);
    })
    .catch((err)=>{
      setDataFetched(true);
      setData(null)
      setLocalError(err)
    })
  }
  let start = 0
  return(

    dataFetched && data ?
    <div className="top-station">
      <table>
        <tr>
          <td></td>
          <td><img src={station} className={darkTheme ? "dark-img" : ""} /></td>
          <td><img src={revenue} className={darkTheme ? "dark-img" : ""} /></td>
        </tr>
          {data.map((value, index)=>{
            {start+=1}
            return(
              
                <tr>
                  <td>{start}</td>
                  <td>{value.station}</td>
                  <td>{value.price}</td>
                </tr>
            )
          })}
        </table>
    </div>
    : dataFetched && localError
    ? <LoadError errorMessage="Loading Failed"/>
    : <Loading/>
  )
}
const RecentActivity = ()=>{

    /* fetching top recent activities */
    const [dataFetched, setDataFetched] = useState(false);
    const [localError, setLocalError] = useState(null);
    const [data, setData] = useState(null);
    const {darkTheme} = useContext(NavBarContext)

  
    useEffect(()=>{
     setTimeout(()=>{
      fetchData()
     },700)
    },[])
  
    const fetchData = ()=>{
      axiosInstance.get('/summary/recentactivity')
      .then((response)=>{
        setData(response.data);
        setDataFetched(true);
        setLocalError(false);
      })
      .catch((err)=>{
        setDataFetched(true);
        setData(null)
        setLocalError(err)
      })
    }

    const mstaff = "New Employee has onborded by"
    const mdevice = "New Device Has Installed by"

  return(
    
    dataFetched && data ? 
    <div className="recent-activity">
      {data.map((value, index)=>{
        return(
          <div>
            <div className="description">
              <img src={value.type=="staff" ? staff : device} className={darkTheme ? "dark-img" : ""}></img>
              <span >{value.type == "staff" ? mstaff + " " + value.ref: mdevice + " " + value.ref}</span>
            </div>
            <span className="time">{ value.date + " at " + value.time  }</span>
          </div>
        )
      })}
    </div>
    : dataFetched && localError 
    ? <LoadError errorMessage="Loading Failed"/>
    : <Loading/>
  )
}

const Users = ()=>{
  
    /* fetching top recent activities */
    const [dataFetched, setDataFetched] = useState(false);
    const [localError, setLocalError] = useState(null);
    const [data, setData] = useState(null);
    const {darkTheme} = useContext(NavBarContext)


    useEffect(()=>{
    setTimeout(()=>{
      fetchData()
    },700)
    },[])

    const fetchData = ()=>{
      axiosInstance.get('/summary/usertypes')
      .then((response)=>{
        setData(response.data);
        setDataFetched(true);
        setLocalError(false);
      })
      .catch((err)=>{
        setDataFetched(true);
        setData(null)
        setLocalError(err)
      })
    }


  const label = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, value, type }) => {
    
    const radius = innerRadius + (outerRadius - innerRadius) / 2; 
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
  
    return (
      <g>
        {/* This uses the default built-in label position for the description */}
        <text
        
          x={cx + (outerRadius + 10) * Math.cos(-midAngle * Math.PI / 180)}
          y={cy + (outerRadius + 10) * Math.sin(-midAngle * Math.PI / 180)}
          fill={darkTheme ? "#b8b8b8" : "000000"}
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
        >
          {type}
        </text>
  
        {/* Custom position for the value inside the pie slice */}
        <text x={x} y={y} fill="#fff" textAnchor="middle" dominantBaseline="central">
          {value} 
        </text>
      </g>
    );
  };
  
  return(
    <div className="user-percentage">
             
      <ResponsiveContainer 
      width="100%"
      height="100%"
      >
        <PieChart  >
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius="90%"
            innerRadius="50%"
            fill="#87ea7a" 
            label={label} 
            labelLine={false}
          />
        </PieChart>
      </ResponsiveContainer>
    
    </div>
  )
}

const Deliveries = ()=>{

   /* fetching deliveries */
   const [dataFetched, setDataFetched] = useState(false);
   const [localError, setLocalError] = useState(null);
   const [data, setData] = useState(null);
   const {darkTheme} = useContext(NavBarContext)

 
   useEffect(()=>{
    setTimeout(()=>{
     fetchData()
     if(data){
     }
    },700)
   },[])
 
   const fetchData = ()=>{
     axiosInstance.get('/summary/deliveries')
     .then((response)=>{
       setData(response.data);
       console.log(response.data)
       setDataFetched(true);
       setLocalError(false);
     })
     .catch((err)=>{
       setDataFetched(true);
       setData(null)
       setLocalError(err)
     })
   }

  return(
    <div className="deliveries">
      {data ? 
      <>
      <div>
        <div className="data-delivery">
          <div>
            <img alt="delivery" src={completed_img}></img >
            <span className="description">Completed</span>
          </div>
          <span className="value">{data.completed ? data.completed : "0"}</span>
        </div>
        <div className="data-delivery">
          <div>
            <img alt="delivery" src={cancelled_img}></img >
            <span className="description">Cancelled</span>
          </div>
          <span className="value">{data.cancelled ? data.cancelled : "0"}</span>
        </div>
        <div className="data-delivery">
          <div>
            <img alt="delivery" className={darkTheme ? "dark-img" : ""}  src={ongoing_img}></img >
            <span className="description">Ongoing</span>
          </div>
          <span className="value">{data.ongoing ? data.ongoing : "0"}</span>
        </div>
        <div className="data-delivery">
          <div>
            <img alt="delivery" className={darkTheme ? "dark-img" : ""} src={total}></img >
            <span className="description">Total Orders</span>
          </div>
          <span className="value">{data.cancelled + data.completed + data.ongoing}</span>
        </div>
      </div>
      <div>
        <div className="top-values">
          <span>Top Destinations</span>
         <table>
          <tbody>
            {data.destination.map((value, index)=>{
              return(
                <tr>
                  <td>{value.station}</td>
                  <td>{value.value}</td>
                </tr>
              )
            })}
          </tbody>
         </table>
        </div>
        <div className="top-values">
          <span>Top Dispatch</span>
         <table>
          <tbody>
            {data.departure.map((value, index)=>{
              return(
                <tr>
                  <td>{value.station}</td>
                  <td>{value.value}</td>
                </tr>
              )
            })}
          </tbody>
         </table>
        </div>
        <div className="rate">
          <span>Success Rate</span>
          <span>{data.success_rate ? data.success_rate[0].ratio: ""}%</span>
        </div>
        <div className="rate">
          <span>Customer Retention</span>
          <span>{data.retention ? data.retention.retention_rate : ""}%</span>
        </div>
      </div>
      </>
             :<Loading/> }
    </div>
  )
}




   
 

 const DatePicker = ()=>{
  const [selected, setSelected] = useState();

 
  return(
    <div>
    <DayPicker
      mode="week"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      }
    />
  </div>
  )
}

