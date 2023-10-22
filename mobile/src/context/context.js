import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({ name: null, email: null, token: null })
  const [isAuth, setIsAuth] = useState(false)
  const [eventData, setEventData] = useState({})

  return <Context.Provider
    value={{
      loading,
      setLoading,
      user,
      setUser,
      isAuth,
      setIsAuth,
      eventData,
      setEventData
    }}
  >
    {children}
  </Context.Provider>;
};

ContextProvider.propTypes = { children: PropTypes.any };

export { Context, ContextProvider };
