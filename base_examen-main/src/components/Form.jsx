import { useState, useEffect } from 'react';
import Card from './Card';

function Form() {

//Configuro los estados usando useState//--------------------------------------------
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [usernameError, setUsernameError] = useState('');
const [passwordError, setPasswordError] = useState('');


//Conf de useEffect//-----------------------------------------------------------------
useEffect(() => {
    if (username.length < 3 || username.startsWith(' ')) {
    setUsernameError('El nombre de usuario debe tener al menos 3 caracteres y no puede empezar con un espacio en blanco.');
    } else {
    setUsernameError('');
    }

    if (password.length < 6 ) {
    setPasswordError('La contraseña debe tener al menos 6 caracteres ');
    } else {
    setPasswordError('');
    }
}, [username, password]);


//Manejadores: (hendle)//---------------------------------------------------------------
const handleUsernameChange = (event) => {
    setUsername(event.target.value);
};

const handlePasswordChange = (event) => {
    setPassword(event.target.value);
};

const handleSubmit = (event) => {
    event.preventDefault();//asi no se envia todo el tiempo
    
    
    if (usernameError || passwordError) {
      // Realizar acciones correspondientes cuando hay errores de validación
    alert("Por favor chequea que la información sea correcta");
    return;
    }
    // Realizar acciones correspondientes al enviar el formulario, como autenticar al usuario
    

    //alert(`Bienvenido: ${username}`);
};
//----------------------------------------------------------------------------

return (
    <form onSubmit={handleSubmit}>
        <hr/>
    <label>
    <h2>LOGIN FORMULARIO</h2>
    <spam>Nombre de usuario </spam> 
        <input type="text" value={username} onChange={handleUsernameChange} />
    </label>
    {usernameError && <span>{usernameError}</span>}
    <br />
    
    <label>
    <spam>Contraseña </spam> 
        <input type="password" value={password} onChange={handlePasswordChange} />
    </label>
    {passwordError && <span>{passwordError}</span>}
    <br />

    <button type="submit">Iniciar sesión</button>
    <hr/>

    {usernameError && passwordError ? (
        <p>{username && passwordError}</p>
      ) : (
        username && password && <Card username={username} password={password} />
      )}
    </form>
    
);
}


export default Form;