// Creating the (React) template
import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'graphql'
// import '../css/blog-post.css' // make it pretty
export default function Template({
  data, // this prop will be injected by the GraphQL query we'll writye in a bit
}) {
     const { markdownRemark: post } = data // data.markdownRemark holds our post data
     return (
       <div className="blog-post-container">
         <Helmet title={`Moody Blogs - ${post.formatter.title}`} />
         <div className="blog-post">
           <h1>{post.formatter.title}</h1>
           <div
             className="blog-post-content"
             dangerouslySetInnerHTML={{ __html: post.html }}
           />
         </div>
       </div>
     )
   }
   // Writing the GraphQL query
   export const pageQuery = graphql`
    query BlogPostByPath($ath: String!) {
      markdownRemark(frontmatter: { path: { eq: $path   } }) {
        html
        frontmatter {
          date(formatString: 'MMMM DD, YYYY')
          path
          title
        }
      }
    }
   `