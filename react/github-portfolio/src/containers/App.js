import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header/Header";
import Profile from "./Profile";
import logo from "../logo.svg";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystem-Font, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Header logo={logo} />
        <Profile />
      </AppWrapper>
    </>
  );
}

export default App;
