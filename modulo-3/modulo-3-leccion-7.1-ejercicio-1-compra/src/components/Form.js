import InGroupText from './InputGroupText';
import InputGroupSelect from './InputGroupSelect';
import InputGroupRadio from './InputGroupRadio';
import InputGroupCheckbox from './InputGroupCheckbox';
import Button from './Button';

const Form = (props) => {
    const handleFormSubmit = (event) => { //gestionar el evento es responsabilidad de cada componente, pero el resto de lógica está en APP
        event.preventDefault()
        props.handleForm()
    }
    return (
        <form className="form" onSubmit={handleFormSubmit}>
            <h2>Rellena tus datos para finalizar la compra:</h2>

            <div className="form">
                {/* name */}
                <InGroupText
                    htmlFor={'name'}
                    labelText={'Escribe un nombre:'}
                    type={'text'}
                    name={'name'}
                    id={'name'}
                    value={props.name}
                    placeholder={"María García"}
                    onChange={props.handleName}
                />
                {/* email */}
                <InGroupText
                    htmlFor={'email'}
                    labelText={'Escribe un email:'}
                    type={'email'}
                    name={'email'}
                    id={'email'}
                    value={props.email}
                    onChange={props.handleEmail}
                />

                {/* region */}
                <InputGroupSelect
                    labelText={'Indica tu región:'}
                    name={'region'}
                    id={'region'}
                    value={props.region}
                    onChange={props.handleRegion}
                />


                {/* payment type */}
                <label className="label-text">Indica tu método de pago:</label>

                {/* tarjeta de crédito */}
                <InputGroupRadio
                    htmlFor={'creditCard'}
                    labelText={'Tarjeta de crédito'}
                    type={'radio'}
                    name={'paymentType'}
                    id={'creditCard'}
                    value={'creditCard'}
                    checked={props.paymentType === "creditCard"}
                    onChange={props.handlePaymentType} />

                {/* Efectivo*/}
                <InputGroupRadio
                    htmlFor={'cash'}
                    labelText={'Efectivo'}
                    type={'radio'}
                    name={'paymentType'}
                    id={'cash'}
                    value={'cash'}
                    checked={props.paymentType === "cash"}
                    onChange={props.handlePaymentType} />

                {/* Contra reembolso*/}
                <InputGroupRadio
                    htmlFor={'cashOnDelivery'}
                    labelText={'Contra reembolso'}
                    type={'radio'}
                    name={'paymentType'}
                    id={'cashOnDelivery'}
                    value={'cashOnDelivery'}
                    checked={props.paymentType === "cashOnDelivery"}
                    onChange={props.handlePaymentType} />

                {/* legal terms */}
                <InputGroupCheckbox
                    htmlFor={'legalTerms'}
                    labelText={'Debes aceptar nuestros términos legales para completar la compra:'}
                    type={'checkbox'}
                    name={'legalTerms'}
                    id={'legalTerms'}
                    checked={props.legalTerms}
                    onChange={props.handleLegalTerms} />
            </div>

            {/* reset */}
            {/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}
            <Button
                className={'button'}
                text={'Enviar'}
                disabled={props.disabled}
            />


            {/* send */}
            <Button
                className={'button reset'}
                text={'Limpiar el formulario'}
                onClick={props.handleResetButton} />
        </form>
    )
}; export default Form 