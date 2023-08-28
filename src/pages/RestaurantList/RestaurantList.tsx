import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { fetchAllRestaurants, fetchRestaurantById } from '../../redux/restaurants/restaurantsOperation';
import { Container } from '../Home/Home.styled';
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

    return <Container>
            <ShopMenu />
            <DishList />
        </Container>
}

export default RestaurantList