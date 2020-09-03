import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { FaTwitter, FaInstagram, FaGithub, FaDev, FaLinkedinIn } from 'react-icons/fa';
import { getRandomColor } from '../helpers';

function HomePage() {
    const [color, setColor] = useState('#ff00bf');
    useEffect(() => {
        const colorInterval = setInterval(() => {
            const nextColor = getRandomColor(color);
            setColor(nextColor);
        }, 2000);
        return () => clearInterval(colorInterval);
    }, []);

    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <title>Evan Freeze</title>
            </Head>
            <main>
                <h1>Evan Freeze</h1>
                <h2>Software Engineer • Nashville, TN</h2>
                <div className="color-bar" style={{ background: color }} />
                <ul>
                    <a href="https://twitter.com/evanfreeze" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/evanfreeze/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://github.com/evanfreeze" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://dev.to/evanfreeze" target="_blank" rel="noopener noreferrer">
                        <FaDev />
                    </a>
                    <a href="https://www.linkedin.com/in/evanfreeze/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                </ul>
            </main>
        </div>
    );
}

export default HomePage;
