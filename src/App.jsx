import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
// import Landing from "./pages/Landing";
import Landing from "pages/Landing";
import GlobalStyles from "./styles/GlobalStyle";
import { theme } from "./styles/Themes";

const Container = styled.div`
  width: 300px;
  height: 400px;
  background-color: ${(props) => props.background};
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
`;

function App() {
  return (
    <>
      {/* <ThemeProvider theme={theme}>
        <GlobalStyles /> */}

      <Container background="cornflowerblue">start with JS...</Container>
      <Landing />
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
