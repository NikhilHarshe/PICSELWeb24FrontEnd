import React from 'react'
import image1 from "../Components/assets/GalleryImages/image11.jpg"
import image2 from "../Components/assets/GalleryImages/image12.jpeg"
import image3 from "../Components/assets/GalleryImages/Criket10.jpeg"
import image4 from "../Components/assets/GalleryImages/image14.jpeg"
import image5 from "../Components/assets/GalleryImages/image15.jpeg"
import image6 from "../Components/assets/GalleryImages/image16.jpeg"
import image7 from "../Components/assets/GalleryImages/image17.jpeg"
// import image8 from "../Components/assets/GalleryImages/image18.jpeg"
// import image9 from "../Components/assets/GalleryImages/image19.jpeg"
import image10 from "../Components/assets/GalleryImages/image10.jpeg"
import image11 from "../Components/assets/GalleryImages/image21.jpeg"
import bul10 from "../Components/assets/GalleryImages/bul10.jpeg"
import image13 from "../Components/assets/GalleryImages/image23.jpeg"
import fight10 from "../Components/assets/GalleryImages/fight10.jpeg"

import "./Gallery.css"

const Gallery = () => {
  return (
    <div id="wrapper" className=' bg-gray-900'>

      <div class="container">
        <h1 className=' text-blue-200'>Our Events</h1>

        <div class="gallery">

          <figure class="card">
            <img src={image1} alt="" />
            <figcaption>Visit to Orphanage at Jaripatka</figcaption>
          </figure>

          <figure class="card">
            <img src={image2} alt="" />
            <figcaption>Mathematics Day 22 Dec</figcaption>
          </figure>

          <figure class="card">
            <img src={image5} alt="" />
            <figcaption>Birth Anniversary of Gautam Buddha</figcaption>
          </figure>

          <figure class="card">
            <img src={image3} alt="" />
            <figcaption>Mix Cricket Organized by PICSEL </figcaption>
          </figure>

          <figure class="card">
            <img src={image4} alt="" />
            <figcaption>Motivational Speech Event</figcaption>
          </figure>


          <figure class="card">
            <img src={image6} alt="" />
            <figcaption>Birth Anniversary of Dr. Ambedkar</figcaption>
          </figure>

          <figure class="card">
            <img src={image7} alt="" />
            <figcaption>Halloween Party</figcaption>
          </figure>

          {/* <figure class="card">
            <img src={image8} alt="" />
            <figcaption>image8</figcaption>
          </figure> */}

          {/* <figure class="card">
            <img src={image9} alt="" />
            <figcaption></figcaption>
          </figure> */}
          <figure class="card">
            <img src={image10} alt="" />
            <figcaption>Committee Instllation</figcaption>
          </figure>
          <figure class="card">
            <img src={image11} alt="" />
            <figcaption>Codefiesta Event</figcaption>
          </figure>
          <figure class="card">
            <img src={image13} alt="" />
            <figcaption>Swachata Pakawda</figcaption>
          </figure>
          <figure class="card">
            <img src={bul10} alt="" />
            <figcaption>Balloon Volley-Ball Event at KDKCE</figcaption>
          </figure>
          <figure class="card">
            <img src={fight10} alt="" />
            <figcaption >Balloon Fight Game on the Ground of KDKCE</figcaption>
          </figure>
          

        </div>
      </div>
    </div>
  )
}

export default Gallery
