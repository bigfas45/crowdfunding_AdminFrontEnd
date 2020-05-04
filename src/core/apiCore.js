import { API } from "../config";
import queryString from 'query-string';



export const getProject = () => {
    return fetch (`${API}/project/listProject?order=desc&limit=3`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};


export const getProductPayment = (paymentId) => {
   
    return  fetch(`${API}/payment/project/${paymentId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              
            },
        })
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
            });
    };









