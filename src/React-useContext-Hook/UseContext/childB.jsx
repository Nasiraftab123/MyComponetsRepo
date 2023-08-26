import React from 'react';
import './childB.scss';
import { contextData } from './use-context-comp';
import { useContext } from 'react';

export default function ChildB() {

  const { fName, lName } = useContext(contextData)

  return (
    <div className="childb-main-container">

      <div>
        <p>{fName}{' '}{lName}</p>
      </div>

    </div>
  )
}
