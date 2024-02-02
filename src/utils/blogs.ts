import path from "path";
import fs from 'fs';
import blogs from "../blogs.json";


export interface Blog {
    id: number;
    slug: string;
    title: string;
    subtitle: string;
    header_image: string;
    blog_path: string;
}

/**
 * Get the blogs from the JSON file
 */
export const get_blogs = async (): Promise<Blog[]> => {
    return blogs;
}


/**
 * Gets the blog with the given id
 */
export const get_blog = async (id: string): Promise<Blog | null> => {
    try {
        const blogs = await get_blogs();
        return blogs.find((blog) => Number(blog.id) === Number(id)) || null;
    } catch (err) {
        return null;
    }
}

/**
 * Get a blog via it's slug 
 */
export const get_blog_by_slug = async (slug: string): Promise<Blog | null> => {
    try {
        const blogs = await get_blogs();
        return blogs.find((blog) => blog.slug === slug) || null;
    } catch (err) {
        return null;
    }
}