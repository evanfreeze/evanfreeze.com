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
    gap: 1rem;

    a {
        text-decoration: none;
        color: var(--text-secondary-light);
        font-size: 0.85rem;
        font-weight: bold;
        text-transform: uppercase;
        padding: 0.5rem 0.75rem;

        :visited {
            color: var(--text-secondary-light);
        }

        :hover {
            border-radius: 0.5rem;
            text-decoration-color: var(--tint-color);
            background: hsla(0, 0%, 0%, 0.1);
        }

        @media (prefers-color-scheme: dark) {
            color: var(--text-secondary-dark);
    
            :visited {
                color: var(--text-secondary-dark);
            }
    
            :hover {
                color: var(--text-primary-dark);
                background: hsla(0, 0%, 100%, 0.1);
            }
        }
    }
`;

export default Navigation;
