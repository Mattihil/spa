import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
<nav class="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
  <div class="container-fluid">
    <Link className="navbar-brand" to="/">SPA Example</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExample02">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
            <Link className="nav-link" to="/ContactUs">Contact Us</Link>
        </li>
      </ul>
    </div>
    <form role="search">
          <input class="form-control" type="search" placeholder="Search" aria-label="Search"></input>
        </form>
  </div>
</nav>
);
}
