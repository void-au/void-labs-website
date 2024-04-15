

// const fs = require('fs');
// const path = require('path');
// let blog = null;

import { get_blog_by_slug, get_blogs } from "@/utils/blogs";
import path from "path";
import fs from "fs"
import matter from "gray-matter";
import { remark } from "remark";
import html from 'remark-html';
import { Subscribe } from "@/comps/Subscribe";

export async function generateStaticParams() {
    const blogs = await get_blogs();

    return blogs.map(blog => {
        return {
            slug: blog.slug
        }
    })
}

const load_markdown_blog_post = async (slug: string) => {
    // Load the markdown file
    const blog_data = await get_blog_by_slug(slug);

    if (!blog_data) {
        return null;
    }

    const file_path = path.join(process.cwd(), blog_data.blog_path);
    const temp = fs.readFileSync(file_path, 'utf-8');

    const matter_result = matter(temp);
    const parsed = await remark()
        .use(html, { sanitize: false }) // allow all HTML at your own risk
        .process(matter_result.content);

    return {
        content: parsed.toString(),
        meta: blog_data
    }
}



export interface Params {
    slug: string;
}

export default async function BlogPost({ params }: { params: Params }) {
    // Here we can load the markdown file
    const blog = await load_markdown_blog_post(params.slug);

    // Set the page title
    // If no blog returned then we can return a 404
    if (!blog) {
        return <div style={
            {
                marginTop: "100px",
                width: "100%",
                textAlign: "center"
            }
        }>Not Found.</div>
    }

    return (
        <div className="blog-post-page">

            <div className="blog-post-header" style={{
                backgroundImage: `url("${blog?.meta?.header_image}")`
            }}>
                <h1>{blog?.meta?.title}</h1>
                <h2>{blog?.meta?.subtitle}</h2>
            </div>
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog?.content || '' }} />

            <br />
            <br />
            <Subscribe />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        </div >
    )
}

// or Dynamic metadata
export async function generateMetadata({ params }: { params: Params }) {
    const blog = await load_markdown_blog_post(params.slug);

    return {
        title: blog?.meta?.title || "the_void | Blog Post",
        description: blog?.meta?.subtitle || "the_void | Blog Post",
        openGraph: {
            images: [blog?.meta?.header_image || ''],
        },
    }
}