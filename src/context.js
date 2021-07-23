import React, { useState, createContext } from 'react';

export const Context = createContext();

const UserProvider = ({ children }) => {
    const [state, setstate] = useState(undefined);

    return(
        <Context.Provider value={[state, setstate]}>
            {children}
        </Context.Provider>
    )
};

export default UserProvider;