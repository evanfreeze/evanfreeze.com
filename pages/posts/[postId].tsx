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
    color: rgba(0, 0, 0, 0.6);
    font-weight: 300;
    margin-bottom: 2rem;
`;

const Article = styled.article`
    padding-bottom: 6rem;

    p {
        line-height: 1.7;
        letter-spacing: 0.02rem;
    }

    pre {
        padding: 1rem;
        background: rgba(80, 50, 50, 0.1);
        border-radius: 0.5rem;
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
