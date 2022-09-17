import { Component, useState } from "react";
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


class ColorList extends Component {

constructor(props){
    super(props)
    this.state = {
        colorList: [],
        isLoading: false
    }
}

  render(){
    const cargarColores = () => {
        // setIsLoading(true)
        this.setState({ isLoading: true})
        setTimeout(() => {
            this.setState({
                colorList: colors,
                isLoading: false
            })
            //   setColorList(colors)
        //   setIsLoading(false)
        }, 3000);
      }

      const { colorList, isLoading} = this.state

      return (
        <>
            <h1>{this.props.title}</h1>
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

}

export default ColorList;