import React from 'react'
import pexelsImage from '../assets/pexels-andrew-15863066.jpg'
import a from '../assets/download.jpeg'
import img1 from"../assets/img1.webp"
import img2 from '../assets/img3.avif'

function Home() {
  return (
    <><div style={{ color: 'cyan', fontSize: 24 }}>HOME WEBPAGE</div>
    <div style ={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'20px'}}>
        <img src={pexelsImage} width="400px" height="400px" />
        <img src={a} width="400px" height="400px" />
        <img src={img1} width="400px" height="400px" />
        <img src={img2} width="400px" height="400px" />
        </div>
    </>
  )
}

export default Home