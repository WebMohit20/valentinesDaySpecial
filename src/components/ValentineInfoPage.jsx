import React, { useState ,useRef} from 'react'
// import axios from "axios";
import {useSelector,useDispatch} from "react-redux"
import {addUser} from "../redux/feature/user/userSlice.js" 
import { useNavigate } from 'react-router-dom'
import "../style/valentinePage.css"

const ValentineInfoPage = ()=>{

    const dispatch = useDispatch();

    const user = useSelector(state=>state.user);

    const [data,setData] = useState(user);
    
    const userImgRef = useRef(null);
    const valentineImgRef = useRef(null);

    const navigate = useNavigate();
    const handleFileClick = (e)=>{
        const name = e.target.name;
        
        if(name === "userImg"){
            userImgRef.current.click()
            return ;
        }
        valentineImgRef.current.click();
    }
    function handleInput(e){
        const name = e.target.name;
        let value = e.target.value;
        if(name === "userImg" || name === "valentineImg"){
            
            value = URL.createObjectURL(e.target?.files[0]);
            console.log(name,value)
        }
        else{
            value = e.target.value;
        }
        setData({
            ...data,[name]:value
        })
    }
    
    // async function forwardData(){
        
    //     try {
    //         let response = await axios.post("http://localhost:3005/userData",data,{
    //         headers:{
    //             "Content-Type":"application/json"}
    //         })
    //         console.log(response.data);

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    function handleSubmit(e){
        e.preventDefault();
        if(!data.userImg||!data.userImg){
            alert("Please upload images");
            return ;
        }
        console.log(data)
        dispatch(addUser(data));
        setData(user);
        navigate("/greetings");
        // forwardData()
    }
    return (
        <div className="valentine-container">
            <h2>💕 Celebrate Love 💕</h2>
            <p>Fill out this form and make your Valentine's Day special!</p>

            <form onSubmit={handleSubmit} className="valentine-form">
                <input 
                    type='text' 
                    name="userName" 
                    placeholder='Your Name' 
                    onChange={handleInput}
                    value={data.userName}
                    required
                    autoComplete={"off"}
                />
                <input 
                    type='text' 
                    name="valentineName" 
                    placeholder="Your Valentine's Name" 
                    onChange={handleInput}
                    value={data.valentineName}
                    required
                    autoComplete={"off"}
                />
                
                <div className="gender-section">
                    Your Gender
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={data.gender === "male"}
                            onChange={handleInput}
                            required
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={data.gender === "female"}
                            onChange={handleInput}
                            required
                        />
                        Female
                    </label>
                </div>
                <button
                    type='button'
                    name='userImg'
                    onClick={handleFileClick}
                    className="custom-file-btn"
                >
                    Upload Your Image
                </button>

                <input 
                    type="file" 
                    name="userImg"
                    ref={userImgRef}
                    onChange={handleInput}
                    style={{display:"none"}}
                    
                />

                <button
                    type='button'
                    onClick={handleFileClick}
                    className='custom-file-btn'
                >
                    Upload Your 💞 Valentine's 💞 Image 
                </button>
                <input 
                    type="file" 
                    name="valentineImg"
                    ref={valentineImgRef}
                    style={{display:"none"}}
                    onChange={handleInput}
                    
                />

                <button type="submit">💌 Submit</button>
            </form>

    
        </div>
    )
}

export default ValentineInfoPage;
