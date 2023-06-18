/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { createContext, useEffect, useReducer, useState } from 'react';
import AuthReducer from './AuthReducer';
import { setCookie, getCookie } from '../../utils/cookieUtils'; // Custom utility functions for handling cookies

const INITIAL_STATE = {
  user:{
    _id: '',
    username: '',
  },
  isFetching: false,
  error: false,
  dispatch: () => {},
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const [userCookie, setUserCookie] = useState(getCookie('user'));

  useEffect(() => {
    if (userCookie) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: JSON.parse(userCookie) });
    }
  }, [userCookie]);

  useEffect(() => {
    if (state.user) {
      setCookie('user', JSON.stringify(state.user)); // Store user data in a cookie
    } else {
      setCookie('user', '', { expires: -1 }); // Remove the user cookie when user is null
    }
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
