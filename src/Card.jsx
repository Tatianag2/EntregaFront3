//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card(props) {
  
  return (
    <div>
      <h2>Info</h2>
      <p>{props.user}</p>
      <p>{props.password}</p>
      <p>{props.genre}</p>
      <p>{props.song}</p>
    </div>
  );
}

export default Card;
