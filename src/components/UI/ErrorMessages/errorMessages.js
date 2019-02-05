import React from 'react';
import classes from './errorMessage.css';

const errorMessage = (props) => {
    let message = null;
    switch (props.error.message) {
        // Signup error messages:
        case 'EMAIL_EXISTS': message ='The email address is already in use by another account'; break;
        case 'OPERATION_NOT_ALLOWE': message ='Password sign-in is disabled for this project.'; break;
        case 'TOO_MANY_ATTEMPTS_TRY_LATER : Too many unsuccessful login attempts.  Please include reCaptcha verification or try again later': message ='We have blocked all requests from this device due to unusual activity. Try again later.'; break;

        // Signin error messages:
        case 'EMAIL_NOT_FOUND': message ='There is no user record corresponding to this identifier. The user may have been deleted.'; break;
        case 'INVALID_PASSWORD': message ='The password is invalid or the user does not have a password.'; break;
        case 'USER_DISABLED': message ='The user account has been disabled by an administrator.'; break;
        case 'MISSING_PASSWORD': message ='You need to provide a password.'; break;
        case 'WEAK_PASSWORD : Password should be at least 6 characters': message ='Password should be at least 6 characters.'; break;

        // Fetch providers for email:
        case 'INVALID_EMAIL': message ='The email address is badly formatted'; break;
        default: 
            message ='Error unknown';
    }

    return <div className={classes.ErrorMessage}>{message}</div>
}

export default errorMessage;
