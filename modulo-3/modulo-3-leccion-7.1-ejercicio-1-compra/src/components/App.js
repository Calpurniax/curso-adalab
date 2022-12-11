import '../styles/App.scss';
import { useState } from "react";
import Preview from './Preview';
import Form from './Form';

function App() {
  // Estados del componente
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("España peninsular"); // Iniciamos el componente con la primera opción del select
  const [paymentType, setPaymentType] = useState("");
  const [legalTerms, setLegalTerms] = useState(false);

  // Eventos
  const handleName = (value) => {
    setName(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handleRegion = (value) => {
    setRegion(value);
  };

  const handlePaymentType = (value) => {
    setPaymentType(value);
  };

  const handleLegalTerms = (checked) => {
    // Como lo que nos interesa es si está activo o no, guardamos el checked
    setLegalTerms(checked);
  };

  const handleResetButton = (ev) => {
    // Ponemos los mismos valores que hemos usado arriba en los useState
    ev.preventDefault()
    setName("");
    setEmail("");
    setRegion("España peninsular");
    setPaymentType("");
    setLegalTerms(false);
  };

  const handleForm = () => {

    console.log("Enviando datos al servidor...");
  };

  // Funciones que nos ayudan a renderizar


  const isValidForm = () => {
    // El formulario solo es válido cuando los inputs de tipo texto no estén vacíos, cuando se haya marcado un tipo de pago y cuando los términos legales sean true
    // También podríamos comprobar que el email tiene el formato correcto, pero no queremos complicar este ejemplo
    if (
      name !== "" &&
      email !== "" &&
      paymentType !== "" &&
      legalTerms === true
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className='App'>

      <Form
        name={name}
        email={email}
        region={region}
        paymentType={paymentType}
        legalTerms={legalTerms}
        handleName={handleName}
        handleEmail={handleEmail}
        handleRegion={handleRegion}
        handlePaymentType={handlePaymentType}
        handleLegalTerms={handleLegalTerms}
        handleResetButton={handleResetButton}
        disabled={isValidForm() === false}
        handleForm={handleForm}
      ></Form>
      <Preview
        name={name}
        email={email}
        region={region}
        legalTerms={legalTerms}
        paymentType={paymentType}
      />

    </div >
  );
}

export default App;
