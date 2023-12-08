import Head from 'next/head';
import { FaGithub, FaInstagram, FaLinkedinIn, FaMastodon } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';
import styled from 'styled-components';

import ColorBar from '../components/ColorBar';

const socialLinks = [
    {
        icon: <FaMastodon />,
        href: 'https://mastodon.social/@evanfreeze',
        rel: 'me'
    },
    {
        icon: <FaThreads />,
        href: 'https://www.threads.net/evanfreeze'
    },
    {
        icon: <FaInstagram />,
        href: 'https://www.instagram.com/evanfreeze/'
    },
    {
        icon: <FaGithub />,
        href: 'https://github.com/evanfreeze'
    },
    {
        icon: <FaLinkedinIn />,
        href: 'https://www.linkedin.com/in/evanfreeze/'
    }
];

function HomePage() {
    return (
        <div>
            <Head>
                <title>Evan Freeze</title>
            </Head>
            <LandingBox>
                <Title>Evan Freeze</Title>
                <Subtitle>Software Engineer • Nashville, TN</Subtitle>
                <ColorBar />
                <SocialLinks>
                    {socialLinks.map(link => (
                        <SocialIconLink
                            href={link.href}
                            key={link.href}
                            target="_blank"
                            rel={link.rel ?? 'noopener noreferrer'}
                        >
                            {link.icon}
                        </SocialIconLink>
                    ))}
                </SocialLinks>
            </LandingBox>
        </div>
    );
}

const LandingBox = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 60vh;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 0.3rem;
`;

const Subtitle = styled.h2`
    font-size: 0.9rem;
    margin: 0;
    color: var(--text-secondary-light);

    @media (prefers-color-scheme: dark) {
        color: var(--text-secondary-dark);
    }
`;

const SocialIconLink = styled.a`
    text-decoration: none;
    color: var(--text-tertiary-light);
    margin: 0 0.5rem;

    svg {
        fill: var(--text-tertiary-light);

        :hover {
            fill: var(--text-primary-light);
        }
    }

    :visited {
        color: var(--text-tertiary-light)
    }

    :hover {
        color: var(--text-primary-light);
    }

    :first-of-type {
        margin-left: 0;
    }

    :last-of-type {
        margin-right: 0;
    }

    i {
        color: inherit;
        transition: color 0.5s ease-in-out;
    }

    @media (prefers-color-scheme: dark) {
        color: var(--text-secondary-dark);

        :visited {
            var(--text-secondary-dark);
        }

        :hover {
            color: var(--text-primary-light);
        }

        svg {
            fill: var(--text-tertiary-dark);
    
            :hover {
                fill: var(--text-primary-dark);
            }
        }
    }
`;

const SocialLinks = styled.ul`
    margin: 0;
    text-align: center;
    padding: 0;
    transition: all 0.5s ease-in;
`;

export default HomePage;
