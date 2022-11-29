import React from 'react';
import Navbar from '../Nav/NavBar';

const Layout =({children}: React.PropsWithChildren<{}>) =>{
    return(
        <>
        <header>
          <Navbar/>
        </header>
        <main>{children}</main>
        </>
    )
}

export default Layout;
