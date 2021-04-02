import React from 'react'
import {FaPhone, FaAt, FaMapPin} from 'react-icons/fa'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import * as contactStyles from './styles/contact.module.scss'

const Contact = () => {
  return (
    <Layout>
      <SEO title='Contact' />
      <div className={contactStyles.container}>
        <section className={contactStyles.contactInfo}>
          <div>
            <FaPhone />
            <p> 01234567890</p>
          </div>
          <div>
            <FaAt /> 
            <p> info@coffeebean.com</p>
          </div>
          <div>
            <FaMapPin />
            <p> 120 Long Acre, London</p>
          </div>
        </section>
        <h2>We would love to hear from you!</h2>
        <section>
          <form>
            <input type="text" placeholder='Your Name'/>
            <input type="email" placeholder='Your Email'/>
            <textarea cols="30" rows="10" placeholder='Your message..'/>
            <button>Send</button>
          </form>
        </section>
      </div>
    </Layout>
  )
}

export default Contact
