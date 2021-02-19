import "./BlogPostShort.css"
import * as blogContents from "../../assets"


function BlogPostShort(props){
    const blog = props.blog

    return(
        <div className="blog-post-short">
            <div className="blog-post-short-header">
                <h3 className="blog-post-short-title">
                    { blog.title }
                </h3>
                <h4 className="blog-post-short-date">
                    { blog.date }
                </h4>
                <h4 className="blog-post-listening">
                    <p>Now listening: <a href={ blog["listening"]["link"] }>{ blog["listening"]["title"]}</a></p>
                </h4>
            </div>
            <p className="blog-post-content">
                { blogContents[blog.content].replace("#", "").slice(0, 100)} <a href={`/blog/${props.id}`}>[...Read More]</a>
            </p>
            <div className="blog-tags">
                <h4>Tagged: </h4>
                    {blog.tags.join(", ")}
            </div>
        </div>
    )
}

export default BlogPostShort