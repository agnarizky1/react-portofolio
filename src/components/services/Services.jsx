import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services' className='section__services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Make some User Interface as a reference for Frontend Development on Figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Maximizing user experience in digital product interface design.
              </p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Making responsive web</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Maintain Database</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Make code more simplifiy</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Consulting about Frontend and Backend</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}



      </div>
    </section>
  )
}

export default Services