import React from 'react';
import Head from 'next/head';

function About() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <h1>About</h1>
            <p>Oh hey 👋🏻</p>
            <p>
                I'm a Software Engineer based in Nashville, TN. By day, I build web apps for the Support team at{' '}
                <a href="https://www.lyft.com">Lyft</a>. I'm also one-half of the dev team behind the new version of{' '}
                <a href="https://www.brighttrip.com">Bright Trip</a>, which I'm super excited about.
            </p>
            <p>
                Most of the stuff I build is with a combination of React, TypeScript, Node.js, and a bit of Next.js. I'm
                also dabbling in iOS development with SwiftUI, but it's a work in progress.
            </p>
            <p>
                I'd love to hear from you and chat — feel free to reach out at{' '}
                <a href="mailto:hello@evanfreeze.com">hello@evanfreeze.com</a>.
            </p>
            <p>Evan</p>
        </>
    );
}

export default About;
