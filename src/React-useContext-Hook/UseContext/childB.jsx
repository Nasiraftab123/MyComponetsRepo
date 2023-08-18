import React from 'react';
import './childB.scss';
import {dataOne,  dataTwo} from './use-context-comp';
import { useContext } from 'react';

export default function ChildB() {
    const FirstName = useContext(dataOne)
    const SecondtName = useContext(dataTwo)

  return (
    <div className="childb-main-container">

        <div>
            <p>{FirstName}{' '}{SecondtName}</p>
        </div>

    </div>
  )
}
