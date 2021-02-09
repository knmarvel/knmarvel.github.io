import {
    BlogPostShort
} from "../"
import blogs from "../../assets/blogs/blogs.json"


export default function BlogLanding(){
    return(<>
     My blog will go here
            {blogs && 
                <div>
                   
                    {blogs.blogs.map((blog, key) => <BlogPostShort key={key} id={key + 1} blog={blog}/>)}
                </div>
            }
            </>
    )
}