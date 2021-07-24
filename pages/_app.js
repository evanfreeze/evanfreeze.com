import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navigation from '../components/Navigation';

const lightBg = 'hsl(0, 100%, 100%)';
const darkBg = 'hsl(220, 20%, 20%)';

const GlobalStyle = createGlobalStyle`
    :root {
        --text-primary-light: hsl(220, 20%, 10%);
        --text-secondary-light: hsl(220, 20%, 40%);
        --text-tertiary-light: hsl(220, 20%, 50%);
        --text-primary-dark: hsl(220, 10%, 90%);
        --text-secondary-dark: hsl(220, 10%, 60%);
        --text-tertiary-dark: hsl(220, 10%, 50%);
        --tint-color: #ff00bf;
    }

    html {
        font-family: sans-serif;
        color: var(--text-primary-light);
        margin: 0;
        padding: 0;
        background-color: ${lightBg};
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
        color: var(--text-primary-light);
    }

    a {
        color: var(--text-secondary-light);
        text-decoration: none;
    }

    @media (prefers-color-scheme: dark) {
        html {
            background-color: ${darkBg};   
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            color: var(--text-primary-dark);
        }

        footer * {
            color: var(--text-tertiary-dark);
        }
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
                <meta name="theme-color" content={lightBg} media="(prefers-color-scheme: light)" />
                <meta name="theme-color" content={darkBg} media="(prefers-color-scheme: dark)" />
                <script
                    data-goatcounter="https://evanfreeze.goatcounter.com/count"
                    async
                    src="//gc.zgo.at/count.js"
                ></script>
            </Head>
            {router.asPath !== '/' && (
                <NavContainer>
                    <Name>EF</Name>
                    <Navigation />
                </NavContainer>
            )}
            <MainContent>
                <Component {...pageProps} />
                <Footer>
                    <span>Copyright © 2019 – {new Date().getFullYear()} • Evan Freeze</span>
                </Footer>
            </MainContent>
        </AppLayout>
    );
}

const AppLayout = styled.div``;

const MainContent = styled.main`
    grid-column-start: 2;
    overflow: auto;
    padding: 2rem;
    color: var(--text-primary-light);

    a {
        color: var(--text-secondary-light);

        :visited: {
            var(--text-secondary-light);
        }

        :hover {
            var(--text-primary-light);
            text-decoration: underline;
        }
    }

    @media (prefers-color-scheme: dark) {
        color: var(--text-secondary-dark);

        a {
            color: var(--text-tertiary-dark);

            :visited {
                var(--text-tertiary-dark);
            }

            :hover {
                var(--text-primary-dark);
                text-decoration: underline;
            }
        }
    }
`;

const NavContainer = styled.header`
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Name = styled.h1`
    margin: 0;
    font-size: 2rem;
`;

const Footer = styled.footer`
    position: fixed;
    bottom: 1rem;
    font-size: 0.7rem;
    color: var(--text-tertiary-light);
`;

export default MyApp;
