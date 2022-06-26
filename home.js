import React from 'react';
import './fav.css';
 const Connect = (props)=>{
   
  const {email,setEmail,password, setPassword,handlelogin,handlesignup,hasaccount,sethasaccount,emailerror,passworderror   }=props;
  
return (
  
    <section className="login">
  
  
    <div className="loginContainer">
         <input type="email"   placeholder="username" value={email} onChange={(e)=>setEmail(e.target.value)} />
              <p className="errMsg">{emailerror}</p>
              
              
              <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)}  />
              <p className="errMsg">{passworderror  }</p>
              <div className="btnContainer">
              {
                hasaccount ? (
                  <> 
                  <button onClick={handlelogin}>Sign in </button>
                  <p>don't have an account ?
                  <span onClick={()=> sethasaccount(!hasaccount)}>sign up </span></p>
                  </>
                ):(
                  <> 
                  <button onClick={handlesignup }>Sign up </button>
                  <p> has  an account <span>sign in </span></p>
                  </>
                )
              }
            </div>
     </div>
     </section>
   
)
 }
 
export default Connect