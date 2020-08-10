import React from 'react';
import Button from '@material-ui/core/Button';
import './Login.css';
import logoverde from '../Images/logo-verde.png';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import {Link} from 'react-router-dom';

const TelaRecuperarSenha = () => {
    return (
        <div className="UserLogin">
            <h1><img src={logoverde} alt="Logo Unifrio"/></h1>
            <p style={{color: "#077756", fontSize: 19}}>Esqueceu sua senha? Nos informe seu e-mail que enviaremos instruções para recuperar sua conta</p>
            <AvForm>
                <div className="LoginUsuario-form">
                    <AvField style={{ color: "#ffffff", borderRadius: 30, backgroundColor: "#7DB5A5", height: 50, width: 420, borderColor: "#ffffff", fontSize: 18, marginTop: 20, marginRight: 11, paddingLeft: 15 }} name="E-mail" placeholder="E-mail" type="E-mail" required />
                </div>
                <div style={{
                    display: "flex",
                    flexFlow: "row nowrap",
                    justifyContent: "space-around",
                    marginTop: 30
                }}>
                <Button component={Link} to="/" type="submit" variant="contained" style={{ textTransform: "none", fontFamily: "Malgun Gothic", color: "#077756", backgroundColor: "#ffffff", borderRadius: 20, fontSize: 25, height: 55, width: 180, marginTop: 20, }}>Cancelar</Button>
                <Button type="submit" variant="contained" style={{ textTransform: "none", color: "#ffffff", fontFamily: "Malgun Gothic", fontSize: 25, height: 55, borderRadius: 20, backgroundColor: "#077756", marginTop: 20, width: 180 }}>Enviar</Button>
                </div>
            </AvForm>
        </div>
    )
}

export default TelaRecuperarSenha;