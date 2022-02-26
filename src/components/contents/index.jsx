import { Routes, Route } from 'react-router-dom';
import CategoryProd from '../categoryProd';
import HomePageProd from "../homePageProd";

export default function Contents() {
    return (
        <>
            <div className="product">
                <Routes>
                    <Route path='/' element={<HomePageProd />} />
                    <Route path='/product-category' element={<CategoryProd />} />
                </Routes>
            </div>
        </>
    );
}