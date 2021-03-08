import React from 'react';


const CategoryDetail = (props) => {
    const {name} = props.product;
   
    return (
        <div>
            <h4>This is your category detail</h4>
            <h5>Selected Product: {name}</h5>
        </div>
    );
};

export default CategoryDetail;