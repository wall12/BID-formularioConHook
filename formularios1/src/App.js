import { useState } from 'react';
import './App.css';
import Formulario from './componentes/Formulario';
import Resultados from './componentes/Resultados';


const App = () => {
    const [state, setState] = useState({
        Name: "",
        LastName: "",
        Email: "",
        Password: "",
        confirmPassword: "",
        validaction: true,
    });


    return (
        <div className='App'>
            <h1>Hello Dojo!</h1>
            <Formulario entrada={state} setEntrada={setState}></Formulario>
            <Resultados datos={state} ></Resultados>
        </div>
    );
}

export default App;