import './Styles/App.css'
import { useState } from 'react'
import "./Styles/SignUp.css"

function App() {
  const [isSignup, setSignup] = useState(true)

  return (
    <>
      <h1 style={{}} >Instagram</h1>
      {isSignup ?
        <>
          <form action="" className="Signup">
            <input type="text" name="email" id="email" placeholder="Email" autoComplete="off" />
            <input type="text" name="fullname" id="fullname" placeholder="Fullname" autoComplete="off" />
            <input type="text" name="username" id="username" placeholder="Username" autoComplete="off" />
            <input type="password" name="password" id="password" placeholder="Password" autoComplete="off" />
            <button type="submit" name="signup">Sign Up</button>
          </form>
          <div className="details">
            <p>have an account?</p>
            <button onClick={() => setSignup(false)} className='click'>Sign In</button>
          </div>
        </> :
        <>
          <form action="" className='signin'>
            <input type="text" name="username" id="username" placeholder="Username" autoComplete="off" />
            <input type="password" name="password" id="password" placeholder="Password" autoComplete="off" />
            <button>Sign Up</button>
          </form>
          <div className="details">
            <p> Do not have account?</p>
            <button onClick={() => setSignup(true)} className='click'>Sign Up</button>
          </div>
        </>}
    </>
  )
}

export default App
