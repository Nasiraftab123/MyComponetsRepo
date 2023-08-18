import React from 'react';
import Home from './home';
import AppContext from './AppContext';

export default function MainApp() {
    return (
        <AppContext>
            <Home />
        </AppContext>
    )
}
