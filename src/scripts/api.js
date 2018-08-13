

const getEndpoint = (str) => `https://bc-hackathon-dob.herokuapp.com/api/${str}`
const getJson = (res) => res.json();

export const fetchScores = () => {
    fetch(getEndpoint('scores'))
        .then( getJson )
        .then(console.log('scores')) 
}

export const fetchOrders = () => {
    fetch(getEndpoint('orders'))
        .then( getJson )
}