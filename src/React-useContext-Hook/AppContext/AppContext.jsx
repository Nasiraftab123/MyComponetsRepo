import React, { createContext, useState } from 'react';

export const Context = createContext();

export default function AppContext({ children }) {

    const [name, setName] = useState([]);

    return (
        <Context.Provider value={{name, setName}} >{children}</Context.Provider>
    )
}
