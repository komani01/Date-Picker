import "./Date.css";
import moment from "moment";
const DateDisplay = (props) => {
    const {date} = props;
    return ( <>
            <section className="date-display">You choose: {moment(date).format('LL')}</section>
    </> 
    );
}
 
export default DateDisplay;