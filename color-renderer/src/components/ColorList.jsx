import { useState } from "react";
import Color from "./Color";

const colors = [
  {
    id: 1,
    name: 'Rojo',
    hex: '#D7263D'
  },
  {
    id:2,
    name: 'Anaranjado',
    hex: '#F8BD7F'
  },
  {
    id: 3,
    name: 'Azul',
    hex: '#0496FF'
  },
  {
    id: 4,
    name: 'Azul',
    hex: '#0496FF'
  }
];


const ColorList = () => {

  const [colorList, setColorList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const cargarColores = () => {
    setIsLoading(true)
    setTimeout(() => {
      setColorList(colors)
      setIsLoading(false)
    }, 3000);
  }

  return (
    <>
      <button onClick={() => cargarColores()}>Click me</button>
      {isLoading && <h1>Loading</h1>}
      <div>
        {
         colorList.map( color => 
          <Color name={color.name} hex={color.hex} key={color.id} id={color.id}/>
           )
        }
      </div>
    </>


  );
}

export default ColorList;