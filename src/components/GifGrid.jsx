import { useEffect } from "react";
import { useState } from "react";
import { getGifs } from "../helpers/getGifts";


export const GifGrid = ({category}) => {
  
  const [images, setImages] = useState([]);

  const  getImages= async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }
  
  useEffect( () => {
    getImages();
  },[])





  return (
    <>
      

      
        <h3> { category}</h3>
    <ol>
      {
        images.map( image => (
          <li key={image.id}>{image.name} <img src={image.image}></img>   </li>
        ))
      }


   
      
      
    </ol>

    


    
    
    </>
  )
}
