import SinglePost from "./SinglePost";

const ExistingPosts = ({ posts }) => {
  return (
    <div>
      {posts.map((element) => (<SinglePost element={element} key={element._id} />))}
    </div>
  );
};

export default ExistingPosts;
