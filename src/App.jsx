import Login from "pages/Login";
import Registro from "pages/Registro";
import Admin from "pages/admin/Index";
import Index from "pages/Index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/styles.css";
import PublicLayout from "layouts/PublicLayout";
import PrivateLayout from "layouts/PrivateLayout";
import AuthLayout from "layouts/AuthLayout";
import Vehiculos from "pages/admin/Usuarios";
import IndexUsuarios from "pages/usu.jsx";
import EditarUsuario from "pages/usu.jsx/editar.jsx";
import IndexProyectos from "pages/proyectos";


import "styles/tabla.css";
import "styles/globals.css"
//import Clientes from 'pages/admin/Clientes';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

// const httpLink = createHttpLink ({
//   uri='https://pixeles-web.herokuapp.com/graphql',
// });

const client = new ApolloClient({
  uri: "https://pixeles-web.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path={["/admin", "/usuarios","/usuarios/editar/:_id","/proyectos"]}
          >
            <PrivateLayout>
              <Switch>
                <Route path="/admin/usuarios"><Vehiculos /></Route>
                <Route path="/usuarios/editar/:_id"><EditarUsuario /></Route>
                <Route path="/usuarios"><IndexUsuarios /></Route>
                <Route path="/proyectos"><IndexProyectos /></Route>
                <Route path="/admin"><Admin /></Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path={["/login", "/registro"]}>
            <AuthLayout>
              <Switch>
                <Route path="/login"><Login /></Route>
                <Route path="/registro"><Registro /></Route>
              </Switch>
            </AuthLayout>
          </Route>
          <Route path={["/"]}>
            <PublicLayout>
              <Switch>
                <Route path="/"><Index /></Route>
              </Switch>
            </PublicLayout>
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
