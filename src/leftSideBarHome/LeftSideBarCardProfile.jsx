// Will need to import the link to profile later
// import { Link } from "react-router-dom"; 
import "../CssStyles/LeftSideBarCardProfile.css"

const LeftSideBarCardProfile = () => {
  return (
    <>
      <section className="home-my-profile-card mt-3">
        <div className="hero"></div>
        {/* Link to Profile with a Link to profile/me */}
        <img
          className="avatar rounded-circle"
          src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
          alt=""
        />
        

        <h6 className="text-center my-name">{/*Name & UserName here and also link to profile/me */}</h6>

        <p className="text-center my-title border-bottom pb-3">Title</p>
        <div className="views d-flex flex-column px-3 border-bottom">
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
