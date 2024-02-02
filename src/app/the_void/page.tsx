
import { BlogItem } from "@/comps/BlogItem";
import { Blog, get_blogs } from "@/utils/blogs";


const load_blogs = async () => {
    const blogs = await get_blogs();
    return blogs;

}


const TheVoidPage = async () => {
    const blogs = await load_blogs();

    if (!blogs) return <></>

    return (
        <div className="the-void-page">
            <div className="header_the_void">
                <h1>Get the Latest</h1>
                <p>Sensors | IoT | Design | Tech & Software Trends | News | Updates</p>
            </div>

            <div className="blog-list">{blogs && blogs.map((blog) => <BlogItem blog={blog} />)}</div>

        </div>
    )
}



export default TheVoidPage;