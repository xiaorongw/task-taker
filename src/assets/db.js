import moment from 'moment';

const TODO = [
    {
        id: 1,
        task: "Learn React",
        due: moment(new Date()).format('MMM Do YYYY, h:mm:ss a'),
        completed: false
    },
    {
        id: 2,
        task: "Buy chips",
        due: moment().format('DD MMM YYYY'),
        completed: false
    },
    {
        id: 3,
        task: "Learn CSS properly",
        due: '',
        completed: false
    }
]

export default TODO;

