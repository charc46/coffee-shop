import React, { useEffect, useState} from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import * as mapStyles from './styles/mapStyles.module.scss'
mapboxgl.accessToken = process.env.GATSBY_MAPBOX_API

const LocationMap = () => {
  const [coords, setCoords] = useState({
    lat: 51.5128,
    long: -0.1250,
  })

  useEffect(() => {
    const mapContainer = document.querySelector('#map-container')
    const map = new mapboxgl.Map({
      container: mapContainer,
      style: `mapbox://styles/charc46/ckmyxq9xr28wh17o89umihc0c`,
      center: [coords.long, coords.lat],
      zoom: 15
    })

    const geojson = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [coords.long, coords.lat]
        },
        properties: {
          title: 'Marker 1',
          description: '120 Long Acre, London'
        }
      }]
    }

    geojson.features.forEach(marker => {
      const el = document.createElement('div')
      el.className = mapStyles.marker
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map)
    })
  }, [])

  return (
    <div className={mapStyles.mapContainer} id='map-container'>
      
    </div>
  )
}

export default LocationMap
