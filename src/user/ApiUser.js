import { API } from "../config";





export const getProjectAll = () => {
    return fetch (`${API}/project/listProject?order=desc&limit=6`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};


export const getCategories = () => {
    return fetch (`${API}/categories`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};


export const getFilteredProduct = (skip, limit, filters = {}) => {
    const data = {
        limit, skip, filters
    }
    return  fetch(`${API}/project/by/search`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
            });
};
    

export const paystacck = ({projectId, amount, status}) => {
  return fetch(`${API}/payment/create/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: {projectId,
    amount,
    status,}
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};



    export const getFilteredBlog = (skip, limit, filters = {}) => {
        const data = {
            limit, skip, filters
        }
        return  fetch(`${API}/blog/by/search`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    return response.json();
                })
                .catch(err => {
                    console.log(err);
                });
        };
    



 

    export const getProject = (projectId) => {
        return fetch (`${API}/project/read/${projectId}`, {
            method: "GET"
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
    };


    export const getProjectGallery = (projectId) => {
        return fetch (`${API}/gallery/related/${projectId}`, {
            method: "GET"
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
    };


    export const getProjectRelatedCategory = projectCatId => {
        return fetch (`${API}/projects/related/${projectCatId}`, {
            method: "GET"
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
    };