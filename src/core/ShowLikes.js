import React, {useState, useEffect, Fragment} from 'react';
import {Link, Redirect} from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from 'moment';
import {getBlogLikes} from "./apiCore";


const ShowLikes = ({blog}) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    let like = 0

    const init = () => {
        getBlogLikes(blog._id).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setData(data);
            }
        });
    };
    const lik = () => {
        data.map(() => {
            like++
        })
    }
    useEffect(() => {
        init();
    }, []);

    return (

        <Fragment> {
            lik()
        }
            ({like})
        </Fragment>

    );
};

export default ShowLikes;
