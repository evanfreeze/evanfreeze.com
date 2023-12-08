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
                I'm a Software Engineer based in Nashville, TN. By day, I do frontend work for{' '}
                <a href="https://joinforage.com">Forage</a> to help enable EBT & SNAP benefits thorugh online merchants.
                Previously, I built web apps for the Support team at <a href="https://www.lyft.com">Lyft</a>, led
                development for the video Travel Course platform <a href="https://www.brighttrip.com">Bright Trip</a>,
                and built some cool stuff at <a href="https://www.marmalade.co">Marmalade</a>.
            </p>
            <p>
                Most of the stuff I build is with a combination of React, TypeScript, Node.js, with various
                meta-framework flavors on top of that. I'm also dabbling in iOS development, but it's a work in
                progress.
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
