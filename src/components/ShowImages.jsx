import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeartShape from "./HeartShape";
import "../style/showPage.css";
const ShowImages = ()=>{
    const userData = useSelector(state =>state.user);
    
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(!userData.userImg||!userData.valentineImg){
            navigate("/");
        }
    },[])
    function title(name){
      name = name.split(" ");
      name = name[0][0].toUpperCase()+name[0].slice(1).toLowerCase();
      return name;
    }
    return (
        <div className="result-container">
        <h2>💖 {title(userData.userName)} & {title(userData.valentineName)} 💖</h2>
        <HeartShape userImg={userData.userImg} valentineImg={userData.valentineImg}/>
        {/* <button onClick={() => navigate("/")} className="back-btn">Go Back</button> */}
      </div>
    )
}

export default ShowImages;