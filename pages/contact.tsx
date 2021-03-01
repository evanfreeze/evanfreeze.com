import React from 'react';
import Head from 'next/head';

function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <h1>Contact</h1>
            <p>
                I could have a form here, but it's easier to just email me:{' '}
                <a href="mailto:freeze@hey.com">freeze@hey.com</a>
            </p>
        </>
    );
}

export default Contact;
