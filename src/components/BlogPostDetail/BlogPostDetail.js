import ReactMarkdown from 'react-markdown'
import blogs from "../../assets/blogs/blogs.json"
import { v4 as uuidv4 } from 'uuid';

// This {match} idea from https://dev.to/dsckiitdev/dynamic-pages-using-react-router-2pm

const BlogPostDetail = ({ match }) => {
    const blog = blogs.blogs[match.params.blogid - 1]

    return(
        <div className="blog-post-short">
            <h3 className="blog-post-short-title">
                { blog.title }
            </h3>
            <h4 className="blog-post-short-date">
                { blog.date }
            </h4>
            <h4 className="blog-post-listening">
                <a href={ blog["listening"]["link"] }>
                    { blog["listening"]["title"]}
                </a>
            </h4>
                <ReactMarkdown>
                    { blog.content }
                </ReactMarkdown>
            <div className="blog-tags">
                <h4>Tagged: </h4>
                <ul>
                    {blog.tags.map(tag => {
                        return (
                            <ul key={uuidv4()}>
                                { tag }
                            </ul>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default BlogPostDetail