import React, { createContext } from 'react';
import ChildA from './childA';


const dataOne = createContext();
const dataTwo = createContext();

export default function UseContextComp() {

    const fName = 'Nasir'
    const lName = 'Aftab'

    return (
        <div className="use-context-comp-main-container">
            <dataOne.Provider value={fName} >
                <dataTwo.Provider value={lName} >
                    <ChildA />
                </dataTwo.Provider>
            </dataOne.Provider>

        </div>
    )
}

export { dataOne, dataTwo }