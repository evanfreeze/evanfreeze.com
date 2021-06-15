import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

function Navigation() {
    const router = useRouter();

    return (
        <Nav>
            <Link href="/posts">Posts</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </Nav>
    );
}

const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    gap: 2rem;

    a {
        text-decoration: none;
        color: var(--text-secondary-light);
        font-size: 1.1rem;

        :visited {
            color: var(--text-secondary-light);
        }

        :hover {
            text-decoration: underline;
        }

        @media (prefers-color-scheme: dark) {
            color: var(--text-secondary-dark);
    
            :visited {
                color: var(--text-secondary-dark);
            }
    
            :hover {
                text-decoration: underline;
                color: var(--text-primary-dark);
            }
        }
    }
`;

export default Navigation;
