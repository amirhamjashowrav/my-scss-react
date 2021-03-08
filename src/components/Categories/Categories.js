import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProducts = [{name: 'Lenovo', category: 'laptop'}, {name: 'Asus', category: 'laptop'}, {name: 'HP', category: 'laptop'},
                {name: 'Iphone', category: 'mobile'}, {name: 'Samsung', category: 'mobile'}, {name: 'Xiaomi', category: 'mobile'},
                {name: 'Canon', category: 'camera'}, {name: 'Sony', category: 'camera'}, {name: 'Nikkon', category: 'camera'},]

const Categories = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const matchedProducts = allProducts.filter(product => product.category === category);
        setProducts(matchedProducts); 
    },[category])
    return (
        <div>
            <h2>select your category: {category}</h2>
            {
                products.map(product => <CategoryDetail product = {product}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;