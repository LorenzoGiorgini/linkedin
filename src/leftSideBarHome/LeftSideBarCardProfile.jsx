const LeftSideBarCardProfile = () => {
  return (
    <>
      <section className="feed-my-profile">
        <div className="hero"></div>
        {/* Link to Profile with a Link tag here START */}
        <img
          className="avatar rounded-circle"
          src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
          alt=""
        />
        {/* Link to Profile with a Link tag here END */}
        
        <h6 className="text-center my-name">{/* Link to profile */}</h6>

        <p className="text-center my-title border-bottom pb-3">Title</p>
        <div className="d-flex flex-column px-3 views border-bottom">
          <div className="d-flex justify-content-between mt-3">
            <p>Who viewed your profile</p>
            <span>62</span>
          </div>
          <div className="d-flex justify-content-between pb-3">
            <p>Views of your post</p>
            <span>108</span>
          </div>
        </div>
        <p className="p-3 my-items">
          <i className="fas fa-bookmark mr-2"></i>
          My Items
        </p>
      </section>
    </>
  );
};

export default LeftSideBarCardProfile;
