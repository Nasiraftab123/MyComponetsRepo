import React, { createContext } from 'react';
import ChildA from './childA';


const contextData = createContext();

export default function UseContextComp() {

    const fName = 'Nasir'
    const lName = 'Aftab'

    return (
        <div className="use-context-comp-main-container">
            <contextData.Provider value={{ fName, lName }} >
                <ChildA />
            </contextData.Provider>

        </div>
    )
}

export { contextData }