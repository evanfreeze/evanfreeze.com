import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navigation from '../components/Navigation';

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

    a {
        color: #0f7abc;
        text-decoration: none;
    }

`;

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    return (
        <AppLayout>
            <GlobalStyle />
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
                <meta name="msapplication-TileColor" content="#000000" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            {router.asPath !== '/' && (
                <LeftColumn>
                    <Name>EF</Name>
                    <Navigation />
                    <Footer>
                        <span>Copyright © 2019 – 2021 • Evan Freeze</span>
                    </Footer>
                </LeftColumn>
            )}
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
    padding: 2rem;
`;

const LeftColumn = styled.aside`
    grid-column-start: 1;
    padding: 2rem;
    display: grid;
    grid-template-rows: auto 1fr auto;
`;

const Name = styled.h1`
    margin: 0;
    font-size: 3.5rem;
`;

const Footer = styled.footer`
    font-size: 0.7rem;
    color: rgba(0, 0, 0, 0.4);
`;

export default MyApp;
