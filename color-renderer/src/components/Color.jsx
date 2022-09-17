// //  const Color = ( {name, hex, id} ) => {
// const Color = props => {
//     return (
//       <div className="color-square" style= {{ backgroundColor: props.hex}}>
//         <h2>Id: {props.id} y Nombre: {props.name}</h2>
//       </div>
  
//     );
//   }
  
const Color = ({ hex, name, setBackgroundColor}) => {
    return(
        <button
            className='color-square'
            style={{ backgroundColor: hex}}
            onClick={() => setBackgroundColor(hex)}
        >
            <h2>{name}</h2>
        </button>
    )
}

export default Color;