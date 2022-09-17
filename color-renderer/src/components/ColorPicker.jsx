import { useState } from "react"
import Color from "./Color"

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
      name: 'Verde',
      hex: '#64eb34'
    }
  ]; 

const ColorPicker = () => {
    const [backgroundColor, setBackgroundColor] = useState('white')
    const [isLoading, setIsLoading] =  useState(false)

    const cargarColores = () => {
        setIsLoading(true);
        setTimeout( () => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <>
        {/* <button onClick={ cargarColores}>Load Colors</button> */}
        <button onClick={ () => cargarColores()}>Load Colors</button>
        {isLoading && <div>Loading</div>}
        <div className='page' style={{backgroundColor }}>
            {
                colors.map(color => (
                    <Color key={color.id} hex={color.hex} name={color.name} setBackgroundColor={setBackgroundColor}/>
                ))
            }
        </div>
        </>
    )
}

export default ColorPicker;

