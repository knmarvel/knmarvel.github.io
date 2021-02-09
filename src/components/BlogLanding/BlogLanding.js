import {
    BlogPostShort
} from "../"
import "./BlogLanding.css"
import { css } from "@emotion/core";
import blogs from "../../assets/blogs/blogs.json"
import MoonLoader from "react-spinners/MoonLoader";
import { v4 as uuidv4 } from 'uuid';


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function BlogLanding(){
    return(<>
            {blogs && 
                <div>
                    {blogs.blogs.map((blog, key) => <BlogPostShort key={uuidv4()} id={key + 1} blog={blog}/>)}
                </div>
            }
            <MoonLoader color="#FFFFFF" css={override} loading={!blogs}/>

            </>
    )
}