import React, {useState, useEffect, Fragment} from 'react';


const Checkbox = ({categories, handleFilters}) => {

    const [checked, setCheked] = useState([])

    const handleToggle = c => () => {
// return the first index or -1

        const currentCategoryId = checked.indexOf(c) 
        const newCheckedCategoryId = [...checked]
        // if currently checked was not already in checked state > push
        //else pull/take off

        if(currentCategoryId === -1 ) {
            newCheckedCategoryId.push(c);
        }else{
            newCheckedCategoryId.splice(currentCategoryId, 1);
        }

       // console.log(newCheckedCategoryId);
        setCheked(newCheckedCategoryId);
       handleFilters(newCheckedCategoryId);

    };


    return categories.map((c, i) => (
       
 <div class="collapse show" id="status-property">
              <ul class="list-unstyled mb-0 pt-3">
        <li><a href="#"><p>{c.name}</p><span class="ml-auto"><input onChange={handleToggle(c._id)} value={checked.indexOf(c._id === -1)} type="checkbox"/></span></a></li>
        </ul>
</div>

        
    ))
}

export default Checkbox;
