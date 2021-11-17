import SinglePost from "./SinglePost";

const ExistingPosts = ({ posts , fetchPosts , user }) => {
  return (
    <div>
      {posts.map((element) => (<SinglePost user={user} fetchPosts={fetchPosts} element={element} key={element._id} />))}
    </div>
  );
};

export default ExistingPosts;
