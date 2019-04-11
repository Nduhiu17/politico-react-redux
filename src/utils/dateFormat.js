import * as moment from "moment";


const dateFormat = (dateString, format='MMMM Do YYYY') => {
    return moment(dateString).format(format);
};

export default dateFormat;