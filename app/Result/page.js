"use client"
import React, { useState } from 'react'
import axios from 'axios'
import Form from '../Form/page';



const Result = () => {
  
  return (
    <>
    <div className='meal container'>

    <div className='meal_heading'>
        <h3>Your Meal Plan is Ready</h3>
        <p>Just Follow this & Stay Healthy</p>
    </div>
     
     <div className='meal_plan'>
      <div className='meal_card'>
          <div>
            <p>Sunday</p>
          </div>
          <div className='meal_card-item'>
            <img src='/home1.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home2.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home3.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home1.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home3.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
        </div>
        <div className='meal_card'> 
          <div className='meal_card-item'>
            <img src='/home1.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home2.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home3.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home1.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home3.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div>
            <p>Monday</p>
          </div>
        </div>
        <div className='meal_card'>
          <div>
            <p>Tuesday</p>
          </div>
          <div className='meal_card-item'>
            <img src='/home1.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home2.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home3.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home1.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home3.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
        </div>
        <div className='meal_card'> 
          <div className='meal_card-item'>
            <img src='/home1.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home2.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home3.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home1.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home3.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div>
            <p>Wednesday</p>
          </div>
        </div>
        <div className='meal_card'>
          <div>
            <p>Thursday</p>
          </div>
          <div className='meal_card-item'>
            <img src='/home1.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home2.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home3.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home1.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home3.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
        </div>
        <div className='meal_card'> 
          <div className='meal_card-item'>
            <img src='/home1.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home2.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home3.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home1.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home3.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div>
            <p>Friday</p>
          </div>
        </div>
        <div className='meal_card'>
          <div>
            <p>Saturday</p>
          </div>
          <div className='meal_card-item'>
            <img src='/home1.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home2.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home3.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home1.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
          <div className='meal_card-item'>
            <img src='/home3.jpg' />
            <h3>This is First Item</h3>
            <a href='' target='_blank'>View Receipe</a>
          </div>
        </div>
     </div>
     

    </div>
    </>
  )
}

export default Result
