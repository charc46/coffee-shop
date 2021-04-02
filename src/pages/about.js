import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { FaWifi, FaPlug, FaPlusCircle, FaHome, FaMusic, FaCoffee } from 'react-icons/fa'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import * as aboutStyles from './styles/about.module.scss'

const About = () => {
  return (
    <Layout>
      <SEO title='About' />
      <div className={aboutStyles.container}>
        <section>
          <div className={aboutStyles.banner}>
            <h1>About The Coffee Bean</h1>
            <StaticImage 
              src='../images/coffee-3.jpg'
              alt='Coffee Image'
              layout='fullWidth'
              placeholder='blurred'
              aspectRatio={20/9}
              className={aboutStyles.image}
            />
          </div>
          <div className={aboutStyles.textContent}>
            <h4>We know, you're itching to get out and get productive in a different environment. So why don't you come and join us for a morning or afternoon of productive work and delicious refreshments after way too long working from your sofa or bed</h4>
            <div className={aboutStyles.features}>
              <div className={aboutStyles.feature}>
                <FaWifi />
                <p>WiFi</p>
              </div>
              <div className={aboutStyles.feature}>
                <FaPlug />
                <p>Plugs everywhere</p>
              </div>
              <div className={aboutStyles.feature}>
                <FaPlusCircle />
                <p>Regularly cleaned</p>
              </div>
              <div className={aboutStyles.feature}>
                <FaHome />
                <p>Comfortable work spaces</p>
              </div>
              <div className={aboutStyles.feature}>
                <FaMusic />
                <p>LoFi beats to help keep you in the zone</p>
              </div>
              <div className={aboutStyles.feature}>
                <FaCoffee />
                <p>And of course, sweet sweet caffeine</p>
              </div>
            </div>
          </div>
          <div className={aboutStyles.banner}>
            <h1>We look forward to seeing you soon!</h1>
            <StaticImage 
              src='../images/coffee-1.jpg'
              alt='Coffee Image'
              layout='fullWidth'
              placeholder='blurred'
              aspectRatio={20/9}
              className={aboutStyles.image}
            />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default About
