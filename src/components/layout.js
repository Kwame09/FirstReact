import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';


export const Layout = ()=>{

    return (
        <main className="w-full">
            <Header/>
            <Outlet/>
            <Footer/>
        </main>
    )
}