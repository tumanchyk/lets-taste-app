import React from 'react';
import { Container } from './Home.styled'
import { Link } from 'react-router-dom';

const Home: React.FC = () => {


    return <Container>
       <Link to="/rest/1234">
            Choose restaurant
          </Link>
    </Container>
}

export default Home
