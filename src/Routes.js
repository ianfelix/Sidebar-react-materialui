import React from 'react';
import { Switch,  Route } from 'react-router-dom';
import Clientes from './Views/Clientes';
import Produtos from './Views/Produtos';
import Estoque from './Views/Estoque';
import Marcas from './Views/Marcas';
import Categorias from './Views/Categorias';
import Logh from './Views/LOG';
import Usuarios from './Views/Usuarios';
import TelaLogin from './Views/TelaLogin';
import EsqueciSenha from './Views/EsqueciSenha';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={TelaLogin} />
        <Route exact path="/clientes" component={Clientes} />
        <Route exact path="/produtos" component={Produtos} />
        <Route exact path="/estoque" component={Estoque} />
        <Route exact path="/marcas" component={Marcas} />
        <Route exact path="/categorias" component={Categorias} />
        <Route exact path="/log" component={Logh} />
        <Route exact path="/usuarios" component={Usuarios} />
        <Route exact path="/esqueci-senha" component={EsqueciSenha} />
    </Switch>
)

export default Routes;