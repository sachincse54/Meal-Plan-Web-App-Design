import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <React.Fragment>
        <header>
          <nav>

            <div className='nav_logo'>
              <img src="/cup.png" height="30" width="30" alt='header logo' />
              <p>MPG</p>
            </div>

            <div className='nav_links'>
              <div>
                <Link className='nav_link' href="/">Homepage</Link>
              </div>
              <div>
                <Link className='nav_link nav_btn' href="/Form">Generate Week Meal Plan</Link>
              </div>
            </div>

          </nav>
        </header>
      </React.Fragment>
    </div>
  )
}

export default Header
