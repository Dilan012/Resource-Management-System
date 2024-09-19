import {  Bar, BarChart, Legend, Pie, PieChart, ReferenceArea, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import './home.css'
import revenue from '../../../images/revenue.png'
import delivery from '../../../images/delivery.png'
import customer from '../../../images/customer.png'
import station from '../../../images/station.png'
import staff from '../../../images/employee.png'
import device from '../../../images/device.png'
import {DayPicker} from 'react-day-picker'
import { useState } from "react"
import 'react-day-picker/dist/style.css';

export const Home = ()=>{
   
    return(
      <div  className="home">
        <div className="heading">
          <h1>Welcome Back .. </h1>
        </div>
        <div className="quick-overview-container">
          <QuickOverView title="Total Revenue" img={revenue} data="111500"/>
          <QuickOverView title="Total Order" img={delivery} data={763}/>
          <QuickOverView title="Total Customers" img={customer} data={2953}/>
          <QuickOverView title="Average Order Value" img={customer} data={560}/>
        </div>
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
        </div>
      </div>
      
    )
}

const Revenue = ()=>{
  const data = [
    {day: "mon",revenue: 4000, },
    {day: "tue",revenue: 3000,},
    {day: "wed",revenue: 2000,},
    {day: "thu",revenue: 2780,},
    {day: "fri",revenue: 1890, },
    {day: "sat",revenue: 2390 },
    {day: "sun",revenue: 3490,},
  ];
  
  return(
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
        tickMargin={0} />
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
  const data = [{station:"Colombo", value:60000},{station:"Matara", value:3600}, {station:"Nuwara", value:15000}, {station:"Kegalle", value:14300},{station:"Hambamthota", value:12000}]
  let start = 0
  return(
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
                  <td>{value.value}</td>
                </tr>
            )
          })}
        </table>
    </div>
  )
}
const RecentActivity = ()=>{
  const data =[
    {message:"New Employee has onborded by Dilan", type:"employee", at:"24 Aug 2024" ,time:"09.25"},
    {message:"New Employee has onborded by Raveen", type:"device", at:"20 Aug 2024" ,time:"13.26"},
    {message:"New Device Has Installed by Dilan", type:"device", at:"24 Aug 2024" ,time:"14.59"},
    {message:"New Device Has Installed by Kaveen", type:"employee", at:"24 Aug 2024" ,time:"15.15"},
    {message:"New Employee has Onborded by New", type:"employee", at:"24 Aug 2024" ,time:"19.25"}
  ]
  return(
    <div className="recent-activity">
      {data.map((value, index)=>{
        return(
          <div>
            <div className="description">
              <img src={value.type=="employee" ? staff : device}></img>
              <span >{value.message}</span>
            </div>
            <span className="time">{value.at + " at " + value.time }</span>
          </div>
        )
      })}
    </div>
  )
}

const Users = ()=>{
  
  const data = [
    { name: 'App users', value: 400 },
    { name: 'Group B', value: 100 },
    
   
  ]
  const label = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, value, name }) => {
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
          {name}
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

