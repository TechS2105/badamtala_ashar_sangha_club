import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/Rootlayouts';
import Home from './components/Home/Home';
import About from './components/About/About';
import CommitteeMembers from './components/Committe/Committee';
import Sponsors from './components/Sponsers/Sponsors';
import Gallery from './components/Gallery/Gallery';
import Event from './components/Events/Events';
import Contact from './components/Contact/Contact';

function App() {
  
  const router = createBrowserRouter(

    createRoutesFromElements(

      <Route path='/' element={<RootLayout/>}>

        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='committee' element={<CommitteeMembers/>} />
        <Route path='sponsors' element={<Sponsors/>} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='events' element={<Event />} />
        <Route path='contact' element={<Contact/>} />

      </Route>

    )

  )

  return (

    <>
    
      {/** Router Provider */}
      <RouterProvider router={router}></RouterProvider>
      
    </>

  );

}

export default App;