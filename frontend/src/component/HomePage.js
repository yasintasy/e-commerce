import { Provider } from "./Context";
import Navbar from "./Navbar";
import Banner from "./Banner";
import CategoryCard from "./CategoryCard";
import Product from "./Product";

const HomePage = () => {
    return (
        <>
            <Provider>
                <Navbar />
                <Banner />
                <CategoryCard />
                <Product />
            </Provider>
        </>
    );
};

export default HomePage;