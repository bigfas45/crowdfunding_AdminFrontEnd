import React from 'react';
import {API} from '../config';
import '../styles.css';


const ShowImage = ({item , url}) => (

    <img className="img-fluid" src={`${API}/${url}/image/${item._id}`} alt={item.name}  />
);


export default ShowImage;