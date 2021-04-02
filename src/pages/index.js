import React from "react"
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../components/Layout"
import LocationMap from "../components/LocationMap"
import SEO from '../components/SEO'

import * as homeStyles from './styles/home.module.scss'

const Home = () => {
  return (
  <Layout>
    <SEO title='Home' />
    <section className={homeStyles.banner}>
      <div className={homeStyles.bannerContent}>
        <h1>Welcome to the Coffee Bean</h1>
        <p>Feel free to check out our menus and see what takes your fancy!</p>
        <Link to='/menu'>Menus are here!</Link>
      </div>
      <StaticImage 
        src='../images/home-hero.jpg'
        alt='Coffee Shop Scenes'
        placeholder='blurred'
        layout='fullWidth'
        aspectRatio={24/9}
        className={homeStyles.hero}
      />
    </section>
    <section className={homeStyles.specials}>
      <h2>Our Specialties</h2>
      <div className={homeStyles.specialsContainer}>
        <div className={homeStyles.special}>
          <h3>Flat White</h3>
          <p>The Glorious Flat White hailing all the way from down unda!</p>
          <p>If you havent tried it be warned, once you go flat you never to back!</p>
        </div>
        <div className={homeStyles.special}>
          <h3>Iced Cappucino</h3>
          <p>Ciao Bella! The Italians favourite breakfast lubrication with a refreshing, icy twist.</p>
          <p>We hear if you order one after 11am a true Italian will look at you strange...</p>
        </div>
        <div className={homeStyles.special}>
          <h3>Miso Honey Soy Sauce Latte</h3>
          <p>We aren't too sure on this one ourselves but instagram says its cool</p>
        </div>
      </div>
    </section>
    <section className={homeStyles.location}>
      <h2>Come and visit us</h2>
      <div className={homeStyles.locationContent}>
        <div className={homeStyles.map}>
          <LocationMap />
        </div>
        <div className={homeStyles.times}>
          <h2>Opening Times</h2>
          <table>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>7:30-21:00</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>7:30-21:00</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>7:30-21:00</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>7:30-21:00</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>7:30-21:00</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>7:30-21:00</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>7:30-21:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
  )
}

export default Home
