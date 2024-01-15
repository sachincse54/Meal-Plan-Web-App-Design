import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UilGithub } from '@iconscout/react-unicons'

const Homepage = () => {
  return (
   <React.Fragment>
    <div className='homepage'>
        <div className='homepage_container container'>
          <h1>Generate Your Complete Week Meal Plan in seconds</h1>
          <p>MPG makes it simple for you to generate Complete Week Meal Plan  in seconds, completely for free.</p>
          <Link className='homepage_gnrt-btn' href="/Form">Generate Week Meal Plan</Link>
          <div className='homepage_img'>
            <img src='/home1.jpg' />
            <img src='/home2.jpg' />
            <img src='/home3.jpg' />
          </div>
          <div className='homepage_git'>
            <h3>You can freely use this project</h3>
            <p>source code is available on GitHub</p>
            <a href='https://github.com/sachincse54' target='_blank'><UilGithub size="14" /> Github</a>
          </div>
        </div>
      </div>
   </React.Fragment>
  )
}

export default Homepage
