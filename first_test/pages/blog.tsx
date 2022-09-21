import type  {NextPage} from "next"
import Link from 'next/link'

const Blog:NextPage = () => {
  return(
    <ul>
      <li>
        <Link href="index">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a>Blog Post</a>
        </Link>
      </li>
    </ul>


   
  );


};

export default Blog;