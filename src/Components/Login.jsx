import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './Login.css';
import logoverde from '../Images/logo-verde.png';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

export default function LoginUsuario() {

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    return (
        <div className="UserLogin">
            <h1><img src={logoverde} alt="Logo Unifrio"/> </h1>
            <AvForm>
                <div className="LoginUsuario-form">
                    <AvField style={{ borderRadius: 20, backgroundColor: "#7DB5A5", height: 50, width: 380, fontSize: 18, marginTop: 20, marginLeft: 20, paddingLeft: 15, color: "white" }} name="E-mail" placeholder="E-mail" type="E-mail" required />
                </div>
                <div className="LoginUsuario-form2">
                    <AvField style={{ position: "relative", borderRadius: 20, backgroundColor: "#7DB5A5", height: 50, width: 380, borderColor: "#ffffff", fontSize: 18, margin: 20, paddingLeft: 15, color: "white" }} name="password" placeholder="Senha" type={showPassword ? "text" : "password"} required />
                    <IconButton style={{ 
                        position: "absolute",
                        right: 765,
                        top: 363,
                        color: "#ffffff"
                     }} onClick={handleShowPassword}><VisibilityOutlinedIcon /></IconButton>
                </div>
                <Button component={Link} to="/esqueci-senha" style={{ fontFamily: "Malgun Gothic", textTransform: "none", fontStyle: "normal", color: "#3D3D3D", textAlign: "left", textDecoration: "underline", fontSize: 15, marginLeft: 240 }}>Esqueci minha senha</Button>
                <Button type="submit" variant="contained" style={{ textTransform: "none", color: "#ffffff", fontSize: 25, height: 50, borderRadius: 20, backgroundColor: "#077756", marginTop: 20, width: 405, marginLeft: 20 }}>Entrar</Button>
            </AvForm>
        </div>
    )
} 
