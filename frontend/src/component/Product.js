import React from 'react';
import { useContext } from 'react';
import { Context } from './Context';

const Product = () => {
    const { product } = useContext(Context);
    return (
        <div className='container'>
            {/* search */}
            <div className='row justify-content-center mb-3'>
                <div className='col-8'>
                    <h2 className='text-center tagline mb-4 mt-2'>All Product</h2>
                    <div className='input--group'>
                        <form className='d-flex w-100'>
                            <input placeholder='search something...' className='search--input' />
                            <button className='primary--button'>Search</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* product card */}
            <div className='row'>
                {product.map((p) => {
                    return (
                        <div className='col-3 my-3' key={p.id}>
                            <div className='product--card'>
                                <div className='image--wrapper'>
                                    <img src={p.image} className='w-100' />
                                </div>
                                <div>
                                    <span className='title--category mt-2'>{p.category}</span>
                                    <span className='title--brand'>{p.brand}</span>
                                    <span className='title--description mt-2 mb-3'>{p.description}</span>
                                </div>
                                <div className='price--wrapper d-flex justify-content-between align-items-center'>
                                    <span className='title--price'>{p.price}</span>
                                    <button className='sm-primary--button'>Buy <i className="bi bi-bag-plus"></i></button>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
};

export default Product;