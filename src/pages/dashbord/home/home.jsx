import {  Bar, BarChart, Legend, Pie, PieChart, ReferenceArea, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import './home.css'
import revenue from '../../../images/revenue.png'
import delivery from '../../../images/delivery.png'
import customer from '../../../images/customer.png'
import station from '../../../images/station.png'
import staff from '../../../images/employee.png'
import device from '../../../images/device.png'
import {DayPicker} from 'react-day-picker'
import { useEffect, useState } from "react"
import 'react-day-picker/dist/style.css';
import axios from "axios"
import { Loading } from "../../../components/loading"
import { LoadError } from "../addDevice"

export const Home = ()=>{
   
  /* fetching quick overview */
  const [dataFetched, setDataFetched] = useState(false);
  const [localError, setLocalError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(()=>{
   setTimeout(()=>{
    fetchData()
   },500)
  },[])

  const fetchData = ()=>{
    axios.get('/summary/quicks')
    .then((response)=>{
      console.log(response.data)
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
      <div  className="home">
        <div className="heading">
          <div>
            <span>Welcome Dilan ... </span>
            <div className="heading-links">
              <span>Last Update : 12 Aug 2024  09:35</span>
            </div>
          </div>
        </div>
        {dataFetched && data ?
        <div className="quick-overview-container">
          <QuickOverView title="Total Revenue" img={revenue} data={data.revenue}/>
          <QuickOverView title="Total Deliveries" img={delivery} data={data.orders}/>
          <QuickOverView title="Total Customers" img={customer} data={data.users}/>
          <QuickOverView title="Average Order Value" img={customer} data={data.average}/>
          
        </div>
        : dataFetched && localError ? <LoadError errorMessage="Loading Failed"/>
        : <Loading/> 
        }
        <div className="body-container">
          <div className="revenue">
                <span className="title">Revenue Overview</span>
              
                <Revenue/>
             
          </div>
          <div className="top-station-container">
            <span className="title">Top stations</span>
            <TopStation/>
          </div>
          <div className="recent-activity-container">
            <span className="title">Recent Activities</span>
            <RecentActivity/>
          </div> 
          <div className="user-percentage-container">
            <span className="title">User Engagement</span>
            <Users/>
          </div>
          <div className="deliveries-container">
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
     axios.get('/summary/revenue')
     .then((response)=>{
       console.log(response.data)
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
        domain={[0, 3000]}/>
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
const QuickOverView = ({img, title, data})=>{

  return(
    
  <div className="quick-overview">
      <div className="title">
        <span>{title}</span>
        <img src={img} style={{width:"1.5rem"}}/>
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

  useEffect(()=>{
   setTimeout(()=>{
    fetchData()
   },700)
  },[])

  const fetchData = ()=>{
    axios.get('/summary/stations')
    .then((response)=>{
      console.log(response.data)
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
          <td><img src={station} /></td>
          <td><img src={revenue} /></td>
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
  
    useEffect(()=>{
     setTimeout(()=>{
      fetchData()
     },700)
    },[])
  
    const fetchData = ()=>{
      axios.get('/summary/recentactivity')
      .then((response)=>{
        console.log(response.data)
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
              <img src={value.type=="staff" ? staff : device}></img>
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

    useEffect(()=>{
    setTimeout(()=>{
      fetchData()
    },700)
    },[])

    const fetchData = ()=>{
      axios.get('/summary/usertypes')
      .then((response)=>{
        console.log(response.data)
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
          fill="#333"
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
       
        <PieChart width={600} height={200} >
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="70%"
            outerRadius={130}
            innerRadius={80}
            fill="#87ea7a" 
            label={label} 
            labelLine={false}
          />
        </PieChart>
      
    
    </div>
  )
}

const Deliveries = ()=>{
  return(
    <div className="deliveries">
      <span>Total  Completed Deliveries for Current Week : 760</span>
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

