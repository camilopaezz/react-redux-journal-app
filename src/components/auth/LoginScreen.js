import React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import {useForm} from '../../hooks/useForm';
import {loginWithEmail, loginWithGoogle} from '../../actions/actions';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const {formData, handleInputChange} = useForm();

  const handleEmailAndPasswordLogin = (e) => {
    e.preventDefault();
    dispatch(
        loginWithEmail(formData.email, formData.password),
    );
  };

  const handleGoogleLogin = () => {
    dispatch(
        loginWithGoogle(),
    );
  };

  return (
    <>
      <h3 className='auth__title'>Login</h3>

      <form onSubmit={handleEmailAndPasswordLogin}>
        <input
          onChange={handleInputChange}
          type='text'
          placeholder='Email'
          name='email'
          className='auth__input'
          autoComplete='off'
        />

        <input
          onChange={handleInputChange}
          type='password'
          placeholder='Password'
          name='password'
          className='auth__input'
        />

        <button type='submit' className='btn btn-primary btn-block'>
          Login
        </button>

        <div className='auth__social-networks'>
          <p>Login with social networks</p>

          <div className='google-btn' onClick={handleGoogleLogin}>
            <div className='google-icon-wrapper'>
              <img
                className='google-icon'
                src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                alt='google button'
              />
            </div>
            <p className='btn-text'>
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to='/auth/register' className='link'>
          Create new account
        </Link>
      </form>
    </>
  );
};
