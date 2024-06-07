
import "./Login.css";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { VerifyCredentials } from "../../services/User";
export default function Login (){
    const navigation = useNavigate();
    const [credentials, setCredentials] = useState({email: "", password: ""})
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState(false)
    function VerificarCredenciais(){
    }
    useEffect(()=>{
        if(localStorage.getItem("key") && JSON.parse(localStorage.getItem("key")).cpf){
            navigation("/homeclient")
        }
        else if(localStorage.getItem("key") && JSON.parse(localStorage.getItem("key")).cnpj){
            navigation("/supplierhome")
        }

        if(state){
            const token = JSON.parse(localStorage.getItem("key"));
            if(token.cpf){
                navigation("/homeclient")
            }
            else{
                navigation("/supplierhome")
            }
        }
    }, [state])


    async function handleLogin(){
        const result = await VerifyCredentials(credentials.email, credentials.password)
        setState(result)
    }
    

    return (
        <>
        <section className="containerGeral">
            
        <img id='logo' src='./logo.png'></img>
            <div className="formulario">
                <h1>Bem-vindo ao <br/>
                <span className="tituloGradient">EcoChargerStation</span></h1>

                <input onChange={({target})=>{setCredentials({...credentials, email: target.value})}} type="Email" placeholder="Insira seu E-mail"/>
                <input onChange={({target})=>{setCredentials({...credentials, password: target.value})}} type="Password" placeholder="Insira sua Senha"/>
                <h3>ESQUECI MINHA SENHA!</h3>
            </div>

            <button className="botaoGenerico" onClick={handleLogin}> Entrar </button>
            <span className="entrarCom"> Entrar com </span>

            <div className="botoes">
            <button className="botaoEntrarCom"><img src="./instagram_icon.png" alt="Insta" /></button>
            <button className="botaoEntrarCom"><img src="./google_icon.png" alt="Google" /></button>
            <button className="botaoEntrarCom"><img src="./facebook_icon.png" alt="Facebook" /></button>
            </div>
            <h4>Ainda não possue uma conta? <span onClick={()=> navigation("register")} style={{color: "#0047FF", cursor: "pointer"}}>Registrar</span> </h4>
        </section>
        </>
    )
}