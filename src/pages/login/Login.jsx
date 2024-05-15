
import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { AiFillFacebook,AiFillGoogleCircle,AiFillGithub } from 'react-icons/ai';
import './main.css'
import './util.css'
const Login = () => {
    const navigate=useNavigate()
  const [username,setusername]=useState("")
  const [password,setPassword]=useState("")
  const [success,setsuccess]=useState("")
  const [error,seterror]=useState("")
   const handlesubmit=async(e)=>{
    e.preventDefault()
    try {
      const res=await axios.post("http://www.localhost:4000/login",{
          username:username,
          password:password})
      setsuccess(res.data)
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      seterror(error.response.data)
    }
    }
    const googleauth=()=>{
    window.open("http://www.localhost:4000/auth/google/callback","_self")
    }
    const facebookauth=()=>{
      window.open("http://www.localhost:4000/auth/facebook/callback","_self")
      }
    const githubauth=()=>{
      window.open("http://www.localhost:4000/auth/github/callback","_self")
      }
  return (
    <div>
      <div className="limiter">
  <div
    className="container-login100"
    // style={{ backgroundImage: 'url("bg-01.jpg")' }}
  >
    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
      <form className="login100-form validate-form" onSubmit={handlesubmit}>
        <span className="login100-form-title p-b-49">Login</span>
        {success && <p className='p1'>{success }</p>}
         {error && <p className='p1'>{error}</p>}
        <div
          className="wrap-input100 validate-input m-b-23"
          data-validate="Username is reauired"
        >
          <span className="label-input100">Username</span>
          <input className="input100" type="text" required id='username'onChange={(e)=>{setusername(e.target.value)}} placeholder='Enter the username'/>

          <span className="focus-input100" data-symbol="" />
        </div>
        <div
          className="wrap-input100 validate-input"
          data-validate="Password is required"
        >
          <span className="label-input100">Password</span>
               <input className='input100' type="password" required id='password' onChange={(e)=>{setPassword(e.target.value)}}  placeholder='Enter the password'/>

          <span className="focus-input100" data-symbol="" />
        </div>
        <br/><br/>
        {/* <div className="text-right p-t-8 p-b-31">
          <a href="#">Forgot password?</a>
        </div> */}
        <div className="container-login100-form-btn">
          <div className="wrap-login100-form-btn">
            <div className="login100-form-bgbtn" />
            <button type='submit' className="login100-form-btn">Login</button>
          </div>
        </div>
        <br />
        <span className="txt1 p-b-17">Or Sign Up Using </span>
          <a href="/registration" className="txt2">
            Sign Up
          </a>
        <div className="txt1 text-center p-t-54 p-b-20">
          <span>Or Sign Up Using</span>
        </div>
        <div className="flex-c-m">
        <a href="#" className="login100-social-item bg3">
            <i className="fa fa-google" />
            <AiFillGoogleCircle onClick={googleauth}/>
            {/* //         <button onClick={googleauth}>Continue with google</button> */}

          </a>
        <a href="#" className="login100-social-item bg2">
            <i className="fa fa-twitter" />
            <AiFillGithub onClick={githubauth}/>
          </a>
          <a href="#" className="login100-social-item bg1">
            <i className="fa fa-facebook" />
            <AiFillFacebook onClick={facebookauth}/>
          </a>
        </div>
        {/* <div className="flex-col-c p-t-155"> */}
          
        {/* </div> */}
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login












// import axios from 'axios'
// import React,{useState} from 'react'
// import { useNavigate } from 'react-router-dom'

// function Login() {

//   const navigate=useNavigate()
//   const [username,setusername]=useState("")
//   const [password,setPassword]=useState("")
//   const [success,setsuccess]=useState("")
//   const [error,seterror]=useState("")
//   const googleauth=()=>{
//     window.open("http://www.localhost:4000/auth/google/callback","_self")
//     }
//     const facebookauth=()=>{
//       window.open("http://www.localhost:4000/auth/facebook/callback","_self")
//       }
//     const instagramauth=()=>{
//       window.open("http://www.localhost:4000/auth/github/callback","_self")
//       }
// const handlesubmit=async(e)=>{
// e.preventDefault()
// try {
//   const res=await axios.post("http://www.localhost:4000/login",{
//       username:username,
//       password:password})
//   setsuccess(res.data)
//   setTimeout(() => {
//     navigate("/");
//   }, 2000);
// } catch (error) {
//   seterror(error.response.data)
// }
// }

//   return (
//     <>
//      <div className='background'></div>
//          <div className='shape'></div>
//          <div className='shape'></div>
//          <form onSubmit={handlesubmit}>
//         <h1>Login</h1>
//         {success && <p>{success }</p>}
//         {error && <p>{error}</p>}
//           <label htmlFor='username'>Username</label>
//         <input type="text" required id='username'onChange={(e)=>{setusername(e.target.value)}} placeholder='Enter the username'/>

//         <label htmlFor='password'>Password</label>
//         <input type="password" required id='password' onChange={(e)=>{setPassword(e.target.value)}}  placeholder='Enter the password'/>


//         <button type='submit' >Login</button>
//         <button onClick={googleauth}>Continue with google</button>
//         <button onClick={facebookauth}>Continue with facebook</button>
//         <button onClick={instagramauth}>Continue with Github</button>

//         <div className='social'>


//         </div>
//          </form>
         
         
         
         
//          </>
//     )
// }

// export default Login
