import styled from "@emotion/styled";
import { mediaQueries } from "../../helpers/mediaQueries";

const Container = styled.main`
padding: 0 20px;
margin: 0 auto;
margin-top: 100px;
@media (min-width: ${mediaQueries.tablet}) {
	width: 768px;
}
@media (min-width: ${mediaQueries.desktop}) {
    width: 1260px;
}

`

export {Container}
