import React from 'react';

import {
  Link,
} from 'react-router-dom';

export default function Navbar () {
  return <>
    <header className="menubar">
      <nav className="menulinks">
        <Link to="/" className="menulink">home</Link>
        <Link to="/goldensundown" className="menulink">golden sundown</Link>
      </nav>
    </header>
  </>
}