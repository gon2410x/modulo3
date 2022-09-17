//  const Color = ( {name, hex, id} ) => {
const Color = props => {
    return (
      <div className="color-square" style= {{ backgroundColor: props.hex}}>
        <h2>Id: {props.id} y Nombre: {props.name}</h2>
      </div>
  
    );
  }
  
  export default Color;