import styled from "@emotion/styled";
import { mediaQueries } from "../../helpers/mediaQueries";

export const Title = styled.h2`
color: var(--text-color);
text-align: center;
margin-bottom: 30px;

`
export const PageContainer = styled.div`
padding: 50px 0;
@media (min-width: ${mediaQueries.tablet}) {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
}

`