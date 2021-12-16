import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import React from 'react';




const publicLayout = ({children}) => {
    return (
        <div className="flex flex-col justify-between h-screen">
            <Navbar/>
           <main className="h-full overflow-y-scroll bg-neutral-300">{children}</main>
            <Footer/>
        </div>
    );
};

export default publicLayout;
