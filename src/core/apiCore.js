import {API} from "../config";
import queryString from 'query-string';


export const getProject = () => {
    return fetch(`${API}/project/listProject?order=desc&limit=3`, {method: "GET"}).then(response => {
        return response.json();
    }).catch(err => console.log(err));
};


export const getProductPayment = (paymentId) => {

    return fetch(`${API}/payment/project/${paymentId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"

        }
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    });
};


export const getBlogFrontEnd = () => {

    return fetch(`${API}/blog/listblog?order=desc&limit=3`, {method: "GET"}).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    });
};



export const paystackInti = (data) => {
  return fetch(`${API}/payment/project/create`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getBlogs = () => {

    return fetch(`${API}/blog/listblog?order=desc`, {method: "GET"}).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    });
};


export const getSingleBlog = (blogId) => {

    return fetch(`${API}/blog/read/${blogId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    });
};


export const updateBlogLikes = (blogId) => {
    return fetch(`${API}/blog/likes/now/${blogId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"

        }
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    });
};


export const getBlogLikes = (blogId) => {

    return fetch(`${API}/blog/related/${blogId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    });
};


export const contactForm = contact => {

    return fetch(`${API}/contact`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    });
};


export const getPayment = () => {

    return fetch(`${API}/payments`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    });
};


export const getUserCount = () => {

    return fetch(`${API}/users/frontend/list`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    });
};

