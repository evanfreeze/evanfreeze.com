import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { FaTwitter, FaInstagram, FaGithub, FaDev, FaLinkedinIn } from 'react-icons/fa';

import ColorBar from '../components/ColorBar';
import { getRandomColor } from '../helpers';

const socialLinks = [
    {
        icon: <FaTwitter />,
        href: 'https://twitter.com/evanfreeze'
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
                        <SocialIconLink href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">
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
    height: 80vh;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 0.3rem;
`;

const Subtitle = styled.h2`
    font-size: 0.9rem;
    margin: 0;
    opacity: 0.45;
`;

const SocialIconLink = styled.a`
    text-decoration: none;
    color: rgba(0, 0, 0, 0.35);
    margin: 0 0.5rem;

    :visited {
        color: rgba(0, 0, 0, 0.35);
    }

    :hover {
        color: black;
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
`;

const SocialLinks = styled.ul`
    margin: 0;
    text-align: center;
    padding: 0;
    transition: all 0.5s ease-in;
`;

export default HomePage;
