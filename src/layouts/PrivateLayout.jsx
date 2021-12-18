import Sidebar from 'components/Sidebar';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PrivateLayout = ({children}) => {
  return  (
       <div className='flex w-screen h-screen'>
      <Sidebar/>
      <main className='w-full  overflow-scroll items-center justify-center'>{children}</main>
      <ToastContainer className='position="top-right' />
      
       </div>
  )
  
};

export default PrivateLayout;
