import "./Date.css"
import { useState } from "react";
import DateDisplay from "./DateDisplay";
const DateContainer = () => {
    const [date, SetDate] = useState(Date.now());
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       document.title = `You choose ${date}`;
    //     }, 1000);
    //     return () => clearTimeout(timer);
    //   }, [date]);
    return ( 
        <>
            <h1>This is my container</h1>
            <input  type="date"  className="form-control" onChange={(e)=> SetDate(e.target.value)}/>
            <DateDisplay date={date} />
        </>
     );
}
 
export default DateContainer;