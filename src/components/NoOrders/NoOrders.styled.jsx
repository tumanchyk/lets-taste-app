import styled from "@emotion/styled";
import { mediaQueries } from "../../helpers/mediaQueries";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
`
export const EmptyCartImg = styled.img`
width: 350px;
height: auto;
@media (min-width: ${mediaQueries.desktop}) {
    height: 700px;
}
`
