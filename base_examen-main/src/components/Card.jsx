
// eslint-disable-next-line react/prop-types
const Card = ({username, password}) => {


  return (

    <div className="card" >
      
      <h2>Login Card</h2>
      <p>Nombre:{username}</p>
      <p>Password:{password}</p>
      
    </div>

  );
}

export default Card;