import ReactMarkdown from 'react-markdown'

function BlogPostShort(blog){
    return(
        <div className="blog-post-short">
            <h3 className="blog-post-short-title">
                { blog.title }
            </h3>
            <h4 className="blog-post-short-date">
                { blog.date }
            </h4>
            <h4 className="blog-post-listening">
                <a href={ blog.listening.link }>
                    { blog.listening.title }
                </a>
            </h4>
            <ReactMarkdown>
                { blog.content }
            </ReactMarkdown>
        </div>
    )
}