import {  Bar, BarChart, Legend, ReferenceArea, Tooltip, XAxis, YAxis } from "recharts"
import './home.css'
import revenue from '../../../images/revenue.png'
import delivery from '../../../images/delivery.png'
import customer from '../../../images/customer.png'
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
          <QuickOverView/>
        </div>
        <Revenue/>
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
    <div style={{backgroundColor:"#ffffff", fontSize:"0.7rem"}}>
      
      <BarChart width={600} height={300} data={data} barGap={2}>
        <XAxis   
        axisLine={false}
        tickMargin={10}
        tickLine={false} 
        angle={0} 
        dataKey="day" >

        </XAxis>
        <YAxis 
        axisLine={false}   
        tickLine={false} />
        <Tooltip />
        <Legend />
        <Bar 
        radius={[5, 5, 5, 5]} 
        dataKey="revenue" 
        fill="#87fa7a" 
        barSize={25} />
        <ReferenceArea  stroke="red" strokeOpacity={0.3} />
      </BarChart> 
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

