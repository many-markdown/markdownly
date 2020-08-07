import React from 'react';
import {
  NavLink
} from 'react-router-dom';


export default function Header() {
  return (
    <>
      
      <NavLink to="/" >
        Landing Page
      </NavLink>
      <NavLink to="/AboutUS" >
        about Us
      </NavLink>
      <NavLink to="/Document" >
        Markdown
      </NavLink>

      
    </>
  );
}

