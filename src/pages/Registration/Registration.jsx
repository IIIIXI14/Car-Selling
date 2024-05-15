import './Registration.css'
 import React,{useState} from 'react'
 import axios from 'axios'
 import { useNavigate } from 'react-router-dom'
function Registration() {
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [rePassword,setrePassword]=useState("")
  const [phone,setPhone]=useState("")
  const [country,setCountry]=useState("")
  const [success,setsuccess]=useState("")
  const [error,seterror]=useState("")

const navigate=useNavigate()
  const onsubmit=async(e) =>{
      e.preventDefault();
      try {     
      const res=await axios.post("http://www.localhost:4000/register",{
      username:username,
      email:email,
      password:password,
      rePassword:rePassword,
      phone:phone,
      country:country
  })
setsuccess(res.data)
  setTimeout(() => {
    navigate('/login')
  }, 2000);

}
 catch (error) {
  seterror(error.response.data)

}}
const googleauth=()=>{
window.open("http://www.localhost:4000/auth/google/callback","_self")
}
  return (
    <>
    <div className='divforimg'>
  <div className="form">
      <ul className="tab-group">
        <li className="tab active">
          <a href="#signup">Sign Up</a>
        </li>
        <li className="tab">
          <a href="/login">Log In</a>
        </li>
      </ul>
      {success && <p className='p2'>{success }</p>}
         {error && <p className='p2'>{error}</p>}
      <div className="tab-content">
        <div id="signup">
          {/* <h1>Sign Up for Free</h1> */}
          <form onSubmit={onsubmit}>
            <div className="top-row">
            <div className="field-wrap">
                {/* <label>
                  First Name<span className="req">*</span>
                </label> */}
                <input type="text"onChange={(e)=>setUsername(e.target.value)} placeholder='Username' required autoComplete="off" />
              </div>
              {/* <div className="field-wrap"> */}
                {/* <label>
                  First Name<span className="req">*</span>
                </label> */}
                {/* <input type="text" placeholder='First Name' required="" autoComplete="off" />
              </div> */}
              {/* <div className="field-wrap">
                {/* <label>
                  Last Name<span className="req">*</span>
                </label> */}
                {/* <input type="text" required="" autoComplete="off" />
              </div>  */}
            </div>
            <div className="field-wrap">
              {/* <label>
                Email Address<span className="req">*</span>
              </label> */}
              <br/>
              <input placeholder='enter the email'onChange={(e)=>setEmail(e.target.value)} type="email" required autoComplete="off" />
            </div>
            <div className="field-wrap">
              {/* <label>
                Set A Password<span className="req">*</span>
              </label> */}
              <input placeholder='Enter the password' onChange={(e)=>setPassword(e.target.value)} type="password"  autoComplete="off" />
            </div>
            <div className="field-wrap">
              {/* <label>
              Confirm Password<span className="req">*</span>
              </label> */}
              <input placeholder='Confirm Password'onChange={(e)=>setrePassword(e.target.value)} type="password"  autoComplete="off" />
            </div>
            <div className="field-wrap">
                {/* <label>
                  First Name<span className="req">*</span>
                </label> */}
                <input type="text" placeholder='Phone'onChange={(e)=>setPhone(e.target.value)}  autoComplete="off" />
              </div> <div className="field-wrap">
                {/* <label>
                  First Name<span className="req">*</span>
                </label> */}
                <input type="text" placeholder='Country'onChange={(e)=>setCountry(e.target.value)}  autoComplete="off" />
              </div>
            <button type="submit" className="button button-block">
              Submit
            </button>
          </form>
        </div>
        <div id="login">
          <h1>Welcome Back!</h1>
          <form action="/" method="post">
            <div className="field-wrap">
              <label>
                Email Address<span className="req">*</span>
              </label>
              <input type="email" required="" autoComplete="off" />
            </div>
            <div className="field-wrap">
              <label>
                Password<span className="req">*</span>
              </label>
              <input type="password" required="" autoComplete="off" />
            </div>
            <p className="forgot">
              <a href="#">Forgot Password?</a>
            </p>
            <a href='/login'>
            <button className="button button-block">Log In</button></a>
          </form>
        </div>
      </div>
      {/* tab-content */}
    </div>
    {/* /form */}
         
         </div>
         
         </>
  )
}

export default Registration