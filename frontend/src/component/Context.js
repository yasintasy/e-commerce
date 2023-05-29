import { createContext, useEffect, useState } from "react";
import axios from "axios";

const Context = createContext(null);

const Provider = ({ children }) => {
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const [banner, setBanner] = useState([]);

    const getDataProduct = async () => {
        const response = await axios.get('https://api.creativeacademyid.com/product');
        setProduct(response.data);
    };

    const getDataCategory = async () => {
        const response = await axios.get('https://api.creativeacademyid.com/category');
        setCategory(response.data);
    };

    const getDataBanner = async () => {
        const response = await axios.get('https://api.creativeacademyid.com/banner');
        setBanner(response.data);
    };

    useEffect(() => {
        getDataProduct();
        getDataCategory();
        getDataBanner();
    }, []);

    return (
        <Context.Provider value={{ product, category, banner }}>
            {children}
        </Context.Provider>
    );
};

export { Context, Provider };