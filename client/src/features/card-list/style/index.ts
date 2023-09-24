import styled from "styled-components";

export const Style = styled.div`
    margin-top: 20px;
    @media (min-width: 375px) {
        grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
    }

    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));

    display: grid;
    gap: 24px;
    max-width: 1152px;
`;
