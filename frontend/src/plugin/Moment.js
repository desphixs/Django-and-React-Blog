import moment from "moment";

function Moment(date) {
    return moment(date).format("DD MMM, YYYY.");
}
export default Moment;
