import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
    html {
        font-family: sans-serif;
        color: rgba(0, 0, 0, 0.6);
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        padding: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: rgba(0, 0, 0, 0.8);
    }

`;

function MyApp({ Component, pageProps }) {
    return (
        <AppLayout>
            <GlobalStyle />
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            <LeftColumn>
                <Name>
                    <span>Evan</span>
                    <span>Freeze</span>
                </Name>
                <Footer>
                    <span>Copyright © 2021 • Evan Freeze</span>
                </Footer>
            </LeftColumn>
            <CenterColumn>
                <Component {...pageProps} />
            </CenterColumn>
        </AppLayout>
    );
}

const AppLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 680px 1fr;
    height: 100vh;
`;

const CenterColumn = styled.main`
    grid-column-start: 2;
    overflow: auto;
    padding: 0 20px;
`;

const LeftColumn = styled.aside`
    grid-column-start: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Name = styled.h1`
    margin: 0;
    font-size: 3.5rem;
    font-style: italic;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    line-height: 0.9;
`;

const Footer = styled.footer`
    font-size: 0.7rem;
    color: rgba(0, 0, 0, 0.4);
`;

export default MyApp;
