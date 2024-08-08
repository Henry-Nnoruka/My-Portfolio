import React from 'react'
import './Profiles.css'

const Profiles = () => {
  return (
    <div className='profiles'>
      <section>
        <div className='profile'>
          <h2>Education</h2>
          <ul>
            <div>
          <li><strong>Bachelor of Engineering:</strong> Cross River University of Technology </li>
          <li><strong>Research Disciplines:</strong> Electrical and Electronic Engineering </li>
          <li><strong>Degree Award:</strong> Second Class Upper Division <strong>(4.17/5.0)</strong>Scale</li>
          </div>
        </ul>
        </div>
        </section>

        <div className='profile'>
        <h2>Research Areas</h2>
          <ul>
            <div>
          <li><strong>Power Electronics</strong> </li>
          <li><strong>Power and Energy</strong> </li>
          <li><strong>Control System</strong></li>
          </div>
        </ul> 
        </div> 
     </div>

  )
}

export default Profiles
