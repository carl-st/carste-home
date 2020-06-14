// @ts-nocheck
import { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout';
import { usePosts } from '../../graphql/api'

const getPosts = data => {
  return data ? data.posts.data.reverse() : [];
};

const Blog = () => {
  const { data, errorMessage } = usePosts();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!posts.length) {
      setPosts(getPosts(data))
    }
  }, [data, posts.length])

  return (
  <Layout>
      <h1>Wkrótce!</h1>
      {`GQL: ${process.env.NEXT_PUBLIC_FAUNADB_GRAPHQL_ENDPOINT}`}
      <div>
        {errorMessage ? (
          <p>{errorMessage}</p>
        ) : !data ? (
          <p>Loading posts...</p>
        ) : (
          posts.map((post, index, allPosts) => {
            const date = new Date(post._ts / 1000)
            return (
              <div key={post._id}>
                {post.title}
                {post.author?.name}
                {post.body}
                {index < allPosts.length - 1 && "----"}
              </div>
            )
          })
        )}
      </div>
    </Layout>
  );
};

export default Blog;
