import { createGlobalStyle } from "styled-components";

const myGlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    width: 100vw;
    height: 100vh;
    font-family: 'Poppins', sans-serif;
}
`

export default myGlobalStyles;