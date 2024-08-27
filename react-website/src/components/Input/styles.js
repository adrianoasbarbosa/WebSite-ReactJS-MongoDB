import styled from "styled-components";

export const InputCustom = styled.input`
color: #fff;
font-size: 20px;
background-color: transparent;
border: 2px solid #6a6a6a;
border-radius: 8px;
box-shadow: 0 40px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
padding: 16px 20px;
width: 100%;

input::placeholder {
    color: #fff;
    font-size: 12px;
    opacity: 0.7;
}
`