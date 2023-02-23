import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../../Reduxstore/authaction";

import { connect } from "react-redux";

import { login, signup } from "../services";
import style from './login.module.css'

const incorrectIcon =  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVNYx0dZM9w0q1ABNd0wfC4mECJzgYi5cSlw&usqp=CAU';
const corrrectIcon = 'https://cdn-icons-png.flaticon.com/512/5290/5290075.png';


const LoginPage = (props) => {

  console.log(props);

  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState('');
  const [isEmailSubmitted, submitEmail] = useState(null);
  const [isLoginAccount , setLoginAccount] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernamelast, setUsernamelast] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [userEmailError, setEmailError] = useState(false);
  const [usernamelastError, setUsernamelastError] = useState(false);

  useEffect(() => {

    const email = localStorage.getItem('email');
    if(email) {
      setUserEmail(email);
      submitEmail(true);
    }
    
    if (userEmail.length > 0) {
      setEmailError(false);
    }
    if (username.length > 0) {
      setUsernameError(false);
    }
    if (usernamelast.length > 0) {
      setUsernamelastError(false);
    }
    if (password.length > 0) {
      setPasswordError(false);
    }
  }, [userEmail, username, usernamelast, password])


  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.length === 0) {
      setUsernameError(true);
    }

    if (username.length === 0) {
      setUsernamelastError(true);
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d|\W)[a-zA-Z\d\W]{8,100}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('true');
    }

    signup(userEmail, password)
    .then((response) => {
      localStorage.clear();
      dispatch(authAction.loginusername(username));
      dispatch(authAction.setToken(response.idToken));

      dispatch(authAction.login(true))
      //redirect to home page
      window.location.href = '/';
    })
  }

  const changeEmailHandler = () => {
    localStorage.clear();
    submitEmail(false);
    setUserEmail('');
  }
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const submitEmailHandler = (value) => {
    if(userEmail.length === 0 || !validateEmail(userEmail)) {
      setEmailError(true);
      return  
    }
    login(userEmail, '123').then((response) => {
      if(response !== -1){
        setLoginAccount(true);
        return 
      }
      localStorage.setItem('email', userEmail);
      submitEmail(true);
    })
  }

  const submitLoginHandler = () => {
      login(userEmail, password)
      .then((response) => {
        console.log(response, 'error');
        if(response === -2) {
          setPasswordError(true); 
          return;
        }
        else {
          //clear local storage
          localStorage.clear();
          dispatch(authAction.setToken(response.idToken));
          dispatch(authAction.login(true))

          //redirect to home page
          window.location.href = '/';
        }
      })
  }


  const headerText = isEmailSubmitted ? 'Create your Walmart Account' : 'Enter your email to sign in or create an account';

  return (
    <div>
      <header  className={style.headerPart}>
        <img className = {style.loginlogo} alt={'logo'} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH4yv8mubtNLpxKOU1eFyQqREm8BLmHU8bGA&usqp=CAU'} />
        <h1 className={style.heading}> {headerText}</h1>
      </header>
      {isEmailSubmitted ?
      (<form onSubmit={handleSubmit} className={style.loginForm}>
        <div className={style.showEmail}>
          <p>Email address:</p>
          <p>{userEmail}</p>
        </div>
        <label className={style.inputLabel}>
          First name
          <input className={style.loginInput} type="text" name="username" value={username} onChange={(event) => { setUsername(event.target.value) }} />
          {usernameError && <span className={style.errorMessage}>first name is required</span>}
        </label>
        <label className={style.inputLabel}>
          Last name
          <input className={style.loginInput} type="text" name="username" value={usernamelast} onChange={(event) => setUsernamelast(event.target.value)} />
          {usernamelastError && <span className={style.errorMessage}>last name is required</span>}
        </label>
        <label className={style.inputLabel}>
          Create a password

          <input className={style.loginInput} type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          {passwordError && <span className={style.errorMessage}>write valid password</span>}
        </label>
        <div className={style.validation}>
          <p className={style.passwordError}>Your password must include the following:</p>
          <div className={style.row}>
            {!password ? <img className={style.valid} src={incorrectIcon} /> : <img className={style.valid} src={corrrectIcon}></img>}
            <p className={`${style.passwordError} ${style.checker}`}>8-100 Characters.</p>

          </div>
          <div className={style.row}>

            {!password ? <img className={style.valid} src={incorrectIcon} /> : <img className={style.valid} src={corrrectIcon}></img>}
            <p className={`${style.passwordError} ${style.checker}`}>Upper & lowercase letters.</p>
          </div>
          <div className={style.row}>

            {!password ? <img className={style.valid} src={incorrectIcon} /> : <img className={style.valid} src={corrrectIcon}></img>}
            <p className={`${style.passwordError} ${style.checker}`}>At least one number or special character</p>
          </div>

        </div>

        <button className={style.loginButton} type="submit" >
          Create Account
        </button>
      </form>) : !isLoginAccount ?
      (<div className={style.loginForm}>
         <label className={style.inputLabel}>
          Email Address <span style={{cursor: 'pointer'}} onClick={changeEmailHandler}>Change</span>
          <input className={style.loginInput} type="text"  value={userEmail} onChange={(event) => { setUserEmail(event.target.value) }} />
          {userEmailError && <span className={style.errorMessage}>Email is required</span>}
        </label>
        <button className={style.loginButton} onClick={submitEmailHandler}>
          Continue
        </button>
      </div>) : (
        (<div className={style.loginForm}>
          <label className={style.inputLabel}>
          Enter your password
           <input className={style.loginInput} type="text"  value={password} onChange={(event) => { setPassword(event.target.value) }} />
           {passwordError && <span className={style.errorMessage}>Invalid password</span>}
         </label>
         <button className={style.loginButton} onClick={submitLoginHandler}>
           Sign In
         </button>
       </div>)
      )
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.login,
    token: state.auth.token
  }
}

export default connect(mapStateToProps)(LoginPage);

