

const getEndpoint = (str) => `https://bc-hackathon-dob.herokuapp.com/api/${str}`
const getJson = (res) => res.json();

const fetchConfig = {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
       "Content-Type": "application/json",
       // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    //body: JSON.stringify(data), // body data type must match "Content-Type" header
}

export const fetchScores = () => {
    fetch(getEndpoint('scores'), fetchConfig)
        .then( getJson )
        .then((json) => console.log(json)) 
}

export const fetchOrders = () => {
    fetch(getEndpoint('orders'), fetchConfig)
        .then( getJson )
}