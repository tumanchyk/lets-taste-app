import React from 'react';
import food from '../../images/Fast-food-design-Premium-vector-PNG.png';
import { RestLink, ImgBg } from './Home.styled';
import { PageContainer } from '../../components/commonStyleElem/commonStyles';
const Home: React.FC = () => {
  
  return <PageContainer style={{flexDirection: 'column'}}>
      <ImgBg src={food} alt="main background" />
      <RestLink to="/rest/1234">
        Choose restaurant
      </RestLink>
    </PageContainer>
}

export default Home
