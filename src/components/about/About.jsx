import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import { FaAward } from 'react-icons/fa'
import { HiOutlineUsers } from 'react-icons/hi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { GiDiploma } from 'react-icons/gi'


const About = () => {
  return (
    <section id='about' className='section__about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>GPA</h5>
              <small>3.69/4.00</small>
            </article>

            <article className='about__card'>
              <GiDiploma className='about__icon' />
              <h5>Diploma Degree</h5>
              <small>from IT-Politeknik Negeri Jember</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
          </div>

          <p>
            Hello, my name is Agna Rizky Putra Anggara, I am a fresh graduate from
            Politeknik Negeri Jember with an average GPA of 3.69. I have experience in the IT field. I am working on a project at Dinas Komunikasi dan Informatika (DISKOMINFO) with the name simora for monitoring tower, and some experience in the maintening software and hardware at Percetakan Agna Indo Pratama
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About