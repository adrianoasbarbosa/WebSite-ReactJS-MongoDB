import styled from "styled-components";

export const HeaderContainer = styled.header`
position: fixed;
top: 0;
left: 0;
width: 100%;
padding: 20px 10%;
background: saddlebrown;
display: flex;
justify-content: space-between;
align-items: center;
z-index: 100;
 a{
    text-decoration: none;
 }
`

export const Logo = styled.a`
font-size: 32px;
color: #fff;
font-weight: 700;
`

export const ItensContainer = styled.a`
position: relative;
font-size: 18px;
color: #ff1;
font-weight: 500;
margin-left: 40px;
`