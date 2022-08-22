
import { getGifs } from "../helpers/getGifs";
import { useEffect, useState } from "react";

export const useFetchGif = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    const images = await getGifs(category);
    setIsLoading(false)
    setImages(images);
  };

  useEffect(() => {
    getImages();
  }, [category]);

  return {images,isLoading};
};
