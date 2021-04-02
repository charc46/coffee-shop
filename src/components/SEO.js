import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
  const query = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
        }
      }
    }
  `)

  const {
    defaultTitle,
    defaultDescription,
  } = query.site.siteMetadata

  const seo = {
    title: `${title || defaultTitle} | Coffee Bean`,
    description: description || defaultDescription
  }

  return (
    <Helmet title={seo.title} description={seo.decription}>
      <meta name="description" content={seo.description} />
    </Helmet>
  )
}

export default SEO
