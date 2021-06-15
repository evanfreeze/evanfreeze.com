import React from 'react';
import Head from 'next/head';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import Link from 'next/link';

import Title from '../../components/Title';

function Post({ post }) {
    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <Title>{post.title}</Title>
            <Date>{post.date}</Date>
            <Article>
                <ReactMarkdown source={post.body} />
            </Article>
            <Link href="/posts">← All Posts</Link>
        </>
    );
}

const Date = styled.h2`
    font-size: 0.85rem;
    color: var(--text-tertiary-light);
    font-weight: 300;
    margin-bottom: 2rem;

    @media (prefers-color-scheme: dark) {
        color: var(--text-tertiary-dark);
    }
`;

const Article = styled.article`
    padding-bottom: 6rem;

    p {
        line-height: 1.7;
        letter-spacing: 0.02rem;

        @media (prefers-color-scheme: dark) {
            color: var(--text-secondary-dark);
        }
    }

    pre {
        padding: 1rem;
        background: rgba(80, 50, 50, 0.1);
        border-radius: 0.5rem;
    }

    a {
        color: var(--text-secondary-light);

        :visited {
            color: var(--text-secondary-light);
        }
        :hover {
            text-decoration: underline;
            color: var(--text-primary-light);
        }

        @media (prefers-color-scheme: dark) {
            color: var(--text-tertiary-dark);

            :visited {
                color: var(--text-tertiary-dark);
            }
            :hover {
                text-decoration: underline;
                color: var(--text-primary-dark);
            }
        }
    }
`;

export async function getStaticProps(context) {
    const { postId } = context.params;
    const articleMarkdown = await import(`../../posts/${postId}.md`);
    const articleData = matter(articleMarkdown.default);

    return {
        props: {
            post: {
                title: articleData.data.title,
                date: articleData.data.date,
                body: articleData.content
            }
        }
    };
}

export async function getStaticPaths() {
    const postIds = (context => {
        const keys = context.keys();
        const data = keys.map(key => {
            const returnVal = key.replace(/^.*[\\\/]/, '').slice(0, -3);
            return returnVal;
        });
        return data;
        // @ts-ignore
    })(require.context('../../posts', true, /\.md$/));

    const paths = postIds.map(postId => ({
        params: {
            postId
        }
    }));

    return {
        paths,
        fallback: false
    };
}

export default Post;
