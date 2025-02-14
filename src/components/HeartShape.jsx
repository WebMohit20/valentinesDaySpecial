

const HeartShape = ({ userImg, valentineImg }) => {
    return (
      <div className="heart-wrapper">
        <div className="heart-container">
          <img src={userImg} alt="User" className="heart-img left-img" />
          <img src={valentineImg} alt="Valentine" className="heart-img right-img" />
        </div>
      </div>
    );
  };
  
  export default HeartShape;

