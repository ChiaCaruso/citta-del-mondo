
const url = "https://api.musement.com/api/v3/cities.json";

const http = (resource) => fetch(url + resource)
    .then((response) => response.json());


const arrayGenerator = (numOfElements) => {
    return [...Array(numOfElements).keys()];
};

export { http, arrayGenerator }