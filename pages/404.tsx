import React from 'react';
import Head from 'next/head';

function NotFound() {
    return (
        <>
            <Head>
                <title>Not Found</title>
            </Head>
            <h1>Whoops</h1>
            <p>There's not a page at this address 🤔</p>
            <p>
                If you came here from a link, <a href="mailto:freeze@hey.com">let me know</a> and I'll try to get it
                fixed.
            </p>
        </>
    );
}

export default NotFound;
