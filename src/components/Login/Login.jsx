import { useState } from "react";

const Login = () => {

    const [userName, setUserName] = useState("");
    const handleUserChange = (e) =>{
        const value = e.target.value;
        setUserName(value);
        if (value.includes("o")||value.includes("O")){
            alert("Ingrese un nombre de usuario sin incluir la 'o'/'O'");
        }
    };

    const handleRegister =()=>{
        if (userName==="" || userName.includes("o") || userName.includes("O")){
         alert("Usuario inválido, reintente sin incluir la letra 'o'/'O'");
        }   else{
         alert("Usuario registrado correctamente!")
        }
    };
    return(
    <div>
        <h1>Login</h1>
        <input
        type="text"
        placeholder="Nombre de usuario"
        value={userName}
        onChange={handleUserChange} />
    <button onClick={handleRegister}>Registrarse</button>
    <p>Nombre de usuario: {userName}</p>
    </div>
    );
}
export default Login;