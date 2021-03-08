import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h1>this is shipment</h1>
            <button onClick = {()=> setCategory(category + 1)}>Increment From Shipment</button>
        </div>
    );
};

export default Shipment;