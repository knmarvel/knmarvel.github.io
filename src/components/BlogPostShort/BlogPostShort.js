function BlogPostShort(props){
    const blog = props.blog
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
            <p>
                { blog.content.slice(0, 100)} <a href={`/blog/${props.id}`}>[...Read More]</a>
            </p>
            <div className="blog-tags">
                <h4>Tagged: </h4>
                <ul>
                    {blog.tags.map(tag => {
                        return (
                            <ul>
                                { tag }
                            </ul>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default BlogPostShort