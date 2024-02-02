

// const fs = require('fs');
// const path = require('path');
// let blog = null;

import { get_blog_by_slug } from "@/utils/blogs";
import path from "path";
import fs from "fs"
import matter from "gray-matter";
import { remark } from "remark";
import html from 'remark-html';


// try {
//     blog = await get_blog_by_slug(params?.slug);

//     if (!blog) {
//         return {
//             notFound: true,
//         };
//     }

//     // Get the file path
//     const file_path = path.join(process.cwd(), blog.post_path);
//     const temp = fs.readFileSync(file_path, 'utf-8');

//     const matter_result = matter(temp);
//     const parsed = await remark()
//         .use(prism as any)
//         .use(html, { sanitize: false }) // allow all HTML at your own risk
//         .process(matter_result.content);

//     blog.content = parsed.toString();
// } catch (err) {
//     console.error('Failed to load the file.', err);
// }

// return {
//     props: {
//         blog: blog,
//         revalidate: 60000,
//     },
// };

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

export const BlogPost = async ({ params }: { params: Params }) => {
    // Here we can load the markdown file
    const blog = await load_markdown_blog_post(params.slug);

    // If no blog returned then we can return a 404
    if (!blog) {
        return {
            notFound: true,
        };
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
        </div >
    );
};


export default BlogPost;