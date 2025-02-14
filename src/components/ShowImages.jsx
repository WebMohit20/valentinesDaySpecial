import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeartShape from "./HeartShape";
import "../style/showPage.css";
const ShowImages = ()=>{
    const userData = useSelector(state =>state.user);
    
    const navigate = useNavigate();
    
    if(userData?.userImg){
      localStorage.setItem("images",JSON.stringify({"userImg":userData.userImg,"valentineImg":userData.valentineImg}));
    }
    let localImg = localStorage.getItem("images")?JSON.parse(localStorage.getItem("images")):null;
   
    useEffect(()=>{
        if(!localImg){
            navigate("/");
            
        }
        
    },[])
    function title(name){
      if(!name){
        return ;
      }
      name = name.split(" ");
      name = name[0][0]?.toUpperCase()+name[0]?.slice(1).toLowerCase();
      return name;
    }
    useEffect(() => {
      const numPetals = 30; 
      const container = document.querySelector(".blossom-container");
  
      for (let i = 0; i < numPetals; i++) {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.animationDuration = `${3 + Math.random() * 5}s`;
        petal.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(petal);
      }
    }, []);
    return (
        <div className="result-container">
          <div className="blossom-container"></div>
          <h1 className="greetings">Happy Valentines Day</h1>
          <h2 className="title">💖 {title(userData.userName)} & {title(userData.valentineName)} 💖</h2>
          <HeartShape userImg={localImg?.userImg} valentineImg={localImg?.valentineImg}/>
          <h3 className="message">
            {
              userData.gender ===  "male"
              ? "Your soulmate is beautiful, kind, and the most precious part of your life. Cherish her always! 💖"
              : "Your soulmate is handsome, strong, and your greatest protector. Treasure him forever! 💙"
            }
          </h3>
        </div>
    )
}

export default ShowImages;