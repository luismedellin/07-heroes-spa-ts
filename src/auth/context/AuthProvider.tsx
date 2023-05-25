import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return {
    logged: !!user,
    user: user
  }
}

export const AuthProvider = ({children}: any) => {
  const [ authState, dispatch ] = useReducer(authReducer, {}, init);

  const login = (name = '') => {
    const user = { id: 'ABC', name: name };
    const action = { type: types.Login, payload: user };

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action)
  }

  const logout = () => {
    localStorage.removeItem('user');
    dispatch({ type: types.Logout })
  }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
      logout
    }}>
        {children}
    </AuthContext.Provider>
  )
}
