import styled from "@emotion/styled";

export const AppBarSheet = styled.header`
    padding: 5px;

    display: flex;
    align-items: center;
    gap: 20px;

    background-color: orange;
    color: #000;

    a {
        padding: 15px 20px;
        color: #000;
        background-color: #fff;

        border-radius: 10px;

        transition: color 250ms linear, background-color 250ms linear;

        &:hover, &:focus {
            color: #fff;
            background-color: #000;
        }
    }
`