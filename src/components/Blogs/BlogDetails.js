import { useParams } from "react-router-dom";
import { blogs } from './Blogs';

function BlogDetails() {
    const { id } = useParams();

    const blog = blogs.find((blog) => blog.id === parseInt(id));

    if (!blog) {
        return <p>Blog not found</p>;
    }

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold text-gray-800">{blog.title}</h1>
            <p className="text-gray-500">{blog.date} | {blog.readTime}</p>
            <img
                src={blog.image}
                alt={blog.title}
                className="rounded-lg my-6 w-full h-80 object-cover"
            />
            <p>{blog.description}</p>
            <p className="mt-6 text-lg">
                This is where the full blog content will go. You can add more details, images, or videos here.
            </p>
        </div>
    );
}

export default BlogDetails;
