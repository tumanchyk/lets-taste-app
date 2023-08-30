import React from 'react';
import { Container, RestLink, ImgBg } from './Home.styled'
import food from '../../images/Fast-food-design-Premium-vector-PNG.png'
const Home: React.FC = () => {


  return <Container style={{flexDirection: 'column'}}>
      <ImgBg src={food} alt="main background" />
       <RestLink to="/rest/1234">
            Choose restaurant
          </RestLink>
    </Container>
}

export default Home
