import React from 'react';
import { Context } from './Context';
import { useContext } from 'react';

const CategoryCard = () => {
    const { category } = useContext(Context);
    console.log(category);
    return (
        <div className='container category my-5'>
            <div className='title--wrapper'>
                <p className='text-center'>Product Category</p>
            </div>

            <div className='row my-4'>
                {category.map((c) => {
                    return (
                        <div key={c.id} className='col-lg-2 col-md-3 col-6 position-relative'>
                            <div className='card--category w-100 text-center my-2 my-md-1'>
                                <img src={c.image} className='w-100' />
                                <div className='category--label fw-semibold position-absolute bottom-0 w-100'>
                                    {c.description}
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
            {/* {category.map((c) => {
                return (
                    <p key={c.id}>{c.description}</p>
                );
            })} */}
        </div>
    );
};

export default CategoryCard;