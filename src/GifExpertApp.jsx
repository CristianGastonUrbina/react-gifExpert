import { useState } from "react";
import { AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([ "Dragon Ball"]);

  const onAddCategorie = (newCategory) => {
    newCategory = newCategory.trim();
    !categories.includes(newCategory) &&
      setCategories([newCategory, ...categories]);
  };


  return (
    <>
      <h1> GifExpertApp </h1>
      <AddCategory onNewCategory={onAddCategorie} />
      {
      categories.map((category) => 
        {
        return <GifGrid category={category}/>}
      )
      }
    </>
  );
};
