import {
    BlogPostShort
} from "../"
import "./BlogLanding.css"
import blogs from "../../assets/blogs/blogs.json"


export default function BlogLanding(){
    return(<>
            {blogs && 
                <div>
                   
                    {blogs.blogs.map((blog, key) => <BlogPostShort key={key} id={key + 1} blog={blog}/>)}
                </div>
            }
            
            </>
    )
}