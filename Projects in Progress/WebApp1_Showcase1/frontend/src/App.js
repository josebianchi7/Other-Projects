// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages
import TopicsPage from './pages/TopicsPage';
import RolesPage from './pages/RolesPage';
import HomePage from './pages/HomePage';
// import GalleryPage from './pages/GalleryPage';
// import OrderPage from './pages/OrderPage';
// import ContactPage from './pages/ContactPage';
// import StaffPage from './pages/StaffPage';


// Import Table Editors
import EditRolePageTable from './pages/EditRolePageTable';
import AddRolePageTable from './pages/AddRolePageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [role, setRoleToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <img src="android-chrome-192x192.png" alt="Jose Bianchi"/> <h1>Jose Bianchi</h1>
            <p className="headerDescrip">
              This website is to present the knowledge, skills, and experiences gained by Mr. Bianchi. 
            </p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Pages.  */}
                    {/* 
                    <Route path="/Gallery" element={<GalleryPage/>} />
                    <Route path="/Order" element={<OrderPage/>} />
                    <Route path="/Contact" element={<ContactPage/>} />
                    <Route path="/Staff" element={<StaffPage/>} /> 
                    */}
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/Topics" element={<TopicsPage/>} />
                    <Route path="/Roles" element={<RolesPage setRole={setRoleToEdit}/>} />
                 
                    {/* Data input: */}
                    <Route path="/create" element={<AddRolePageTable />} /> 
                    <Route path="/update" element={<EditRolePageTable roleToEdit={role} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2024 Jose Bianchi</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;