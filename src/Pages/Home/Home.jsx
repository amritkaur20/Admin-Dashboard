import Chart from "../../Components/Chart/Chart"
import Feature from "../../Components/Feature/Feature"
import "./Home.css"
import {userData} from "../../DummyData"
import WidgetSm  from "../../Components/Widgetsm/WidgetSm"
import WidgetLm from "../../Components/Widgetlm/WidgetLm"



const Home=()=>{
    return(
        <div className="home">
        <Feature/>
       <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
       <div className="homeWidgets">
       <WidgetSm/>
       <WidgetLm/>
       </div>
        </div>
    )
}
export default Home