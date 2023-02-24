export const signup = async (email, password) => {
    const res  = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBnIbYcA_GG_Iu1NtrDE6p_HMt8L2YdzGY',{
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const resData = await res.json();
    console.log(resData);
    if(!res.ok) {
        const errorId = resData.error.message;
        let message = 'Something went wrong!';
        if(errorId === 'EMAIL_EXISTS') {
            message = 'This email exists already!';
        }
        console.log(message);
        return false
    }
    return resData;

};

export const login = async (email, password) => {
    console.log(email, password, 'email and password')
    const res  = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBnIbYcA_GG_Iu1NtrDE6p_HMt8L2YdzGY',{
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const resData = await res.json();
    console.log(resData);
    if(!res.ok) {
        const errorId = resData.error.message;
        let message = 'Something went wrong!';
        if(errorId === 'EMAIL_NOT_FOUND') {
            return(-1);
        } else if(errorId === 'INVALID_PASSWORD') {
            return(-2)
        }
        console.log(message);
        return -2;
    }
    return 1;
}
