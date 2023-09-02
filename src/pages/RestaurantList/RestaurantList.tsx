import React, {useEffect} from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { fetchAllRestaurants, fetchRestaurantById } from '../../redux/restaurants/restaurantsOperation';
import { PageContainer } from '../../components/commonStyleElem/commonStyles';
import ShopMenu from '../../components/ShopMenu/ShopMenu';
import DishList from '../../components/DishList/DishList';


const RestaurantList: React.FC = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchRestaurantById(id))
    }, [dispatch, id])

    useEffect(() => {
        dispatch(fetchAllRestaurants())
    }, [dispatch])

    const location = useLocation();


    return <PageContainer state={{from: location}} >
            <ShopMenu />
            <DishList/>
        </PageContainer>
}

export default RestaurantList