import React, { useContext } from 'react';
import { Context } from './Context';

const Banner = () => {
    const { banner } = useContext(Context);
    return (
        <div className="container">
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-inner">
                    {banner.map((b, index) => {
                        return (
                            <div key={index} className={index === 0 ? 'carousel-item active' : 'carousel-item'}>
                                <img src={b.image} className="d-block w-100" alt="..." />
                            </div>
                        );
                    })}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <i className="bi bi-arrow-left-circle-fill" aria-hidden="true"></i>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <i className="bi bi-arrow-right-circle-fill" aria-hidden="true"></i>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;