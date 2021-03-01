import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import matter from 'gray-matter';
import styled from 'styled-components';

import Title from '../../components/Title';

function PostListItem({ title, subtitle, date, path }) {
    return (
        <StyledPostLink>
            <Link href={path}>
                <a>
                    <h3>{title}</h3>
                </a>
            </Link>
            <p>{subtitle}</p>
            <span>{date}</span>
        </StyledPostLink>
    );
}

const StyledPostLink = styled.li`
    display: block;
    margin: 3rem 0;

    a:hover {
        text-decoration: underline;
    }

    h3 {
        margin: 0;
    }

    p {
        margin: 0;
        margin-top: 0.3rem;
        font-size: 0.95rem;
        color: rgba(0, 0, 0, 0.6);
    }

    span {
        display: block;
        margin-top: 1rem;
        font-size: 0.8rem;
        color: rgba(0, 0, 0, 0.6);
        font-weight: 300;
    }
`;

function PostList({ postList }) {
    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <Title>Posts</Title>
            {postList.map(post => (
                <PostListItem
                    key={post.path}
                    title={post.title}
                    date={post.date}
                    path={post.path}
                    subtitle={post.subtitle}
                />
            ))}
        </>
    );
}

export async function getStaticProps() {
    const postsPaths = (context => {
        const keys = context.keys();
        const data = keys.map(key => {
            const returnVal = key.replace(/^.*[\\\/]/, '').slice(0, -3);
            return returnVal;
        });
        return data;
        // @ts-ignore
    })(require.context('../../posts', true, /\.md$/));

    const promises = postsPaths.map(async (path: string) => {
        const post = await import(`../../posts/${path}.md`);
        const metadata = matter(post.default);

        return {
            path: `/posts/${path}`,
            title: metadata.data.title,
            subtitle: metadata.data.subtitle ?? '',
            date: metadata.data.date
        };
    });

    const postList = await Promise.all(promises);

    return {
        props: {
            postList
        }
    };
}

export default PostList;
