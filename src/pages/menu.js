import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import * as menuStyles from './styles/menu.module.scss'

const Menu = () => {
  return (
    <Layout>
      <SEO title='Menu' />
      <div className={menuStyles.container}>
        <h1>Our Menus</h1>
        <div className={menuStyles.tables}>
          <section>
            <div>
              <h2>Hot Drinks</h2>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Small</th>
                    <th>Large</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={menuStyles.item}>Cappucino</td>
                    <td>£2.10</td>
                    <td>£3.00</td>
                  </tr>
                  <tr>
                    <td className={menuStyles.item}>Flat White</td>
                    <td>£2.10</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className={menuStyles.item}>Miso Honey Soy Sauce Latte </td>
                    <td>£5.10</td>
                    <td>£7.00</td>
                  </tr>
                  <tr>
                    <td className={menuStyles.item}>Latte</td>
                    <td>£2.50</td>
                    <td>£3.10</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h2>Cold Drinks</h2>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Small</th>
                    <th>Large</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={menuStyles.item}>Berry Blast</td>
                    <td>£2.10</td>
                    <td>£3.00</td>
                  </tr>
                  <tr>
                    <td className={menuStyles.item}>Fizzy Cola</td>
                    <td>£2.10</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className={menuStyles.item}>Iced Latte</td>
                    <td>£5.10</td>
                    <td>£7.00</td>
                  </tr>
                  <tr>
                    <td className={menuStyles.item}>Fresh Juice <br/> <small>Orange, Apple, Passion Fruit, Mango</small></td>
                    <td>£2.50</td>
                    <td>£3.10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2>Food</h2>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={menuStyles.item}>Cheese Toastie</td>
                  <td>£4.50</td>
                </tr>
                <tr>
                  <td className={menuStyles.item}>Chicken Salad</td>
                  <td>£5.10</td>
                </tr>
                <tr>
                  <td className={menuStyles.item}>Vegetarian Wrap</td>
                  <td>£6.00</td>
                </tr>
                <tr>
                  <td className={menuStyles.item}>Triple Chocolate Brownie</td>
                  <td>£3.10</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default Menu
