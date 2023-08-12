import { Route, Routes } from 'react-router-dom'
import React from 'react';
import Layout from './layout/layout';
import Arend from './page/Arend/Arend';
import Where from './page/Where/Where';
import About from './page/About/About';
import Dost from './page/Dost/Dost';
import Contacts from './page/Contacts/Contacts';
import Forms from './assets/Forms/Form';
import Login from './page/Login';
import Register from './page/Register';
import Arendtwo from './page/Arend/Arendtwo';
import Arendthree from './page/Arend/Arendthree';
import Product from './page/Arend/Product';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Arend />} />
          <Route path='/arendtwo' element={<Arendtwo />} />
          <Route path='/arendthree' element={<Arendthree />} />
          <Route path='/product' element={<Product />} />
          <Route path='/dost' element={<Dost />} />
          <Route path='/about' element={<About />} />
          <Route path='/where' element={<Where />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/forms' element={<Forms />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
