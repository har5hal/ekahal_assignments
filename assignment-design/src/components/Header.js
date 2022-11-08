import React from 'react'

function Header() {
  return (
    <div className='header bg-primary'>
        <div className='container'>
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="#"></a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto justify-content-between">
                <li class="nav-item active">
                    <a class="nav-link text-white" href="#">Covid-19</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Themes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Investment Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Special Focus Area</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Learning Lab</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Data Visualization</a>
                </li>
                </ul>
            </div>
        </nav>
        </div>
    </div>
  )
}

export default Header