import React from 'react';
import Link from 'next/link';

function Navigation() {
    return (
        <nav>
            <Link href="/posts">Posts</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    );
}
