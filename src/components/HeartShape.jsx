

const HeartShape = ({ userImg, valentineImg }) => {
    return (
      <div className="heart-container">
        <div className="image-container">
          <img src={userImg} alt="User" className="heart-img" />
          <img src={valentineImg} alt="Valentine" className="heart-img" />
        </div>
        <h3>Love is not just about finding the right person, but creating a beautiful journey together—and you both are living proof of that. 💞💞💞💞</h3>
      </div>
    );
  };
  
  export default HeartShape;

