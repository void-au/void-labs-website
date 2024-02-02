"use client";

import { Blog } from "@/utils/blogs";

interface Props {
    blog: Blog;
}

export const BlogItem = ({ blog }: { blog: Blog }) => {

    const go_to = (slug: string) => {
        window.location.href = `/the_void/${slug}`
    }

    return (
        <div key={blog.id} className="blog-item" onClick={() => go_to(blog.slug || "")} >
            <div className="blog-image" style={{
                backgroundImage: `url("${blog.header_image}")`
            }} />
            <h2>{blog.title}</h2>
            <p>{blog.subtitle}</p>
        </div>
    )
}