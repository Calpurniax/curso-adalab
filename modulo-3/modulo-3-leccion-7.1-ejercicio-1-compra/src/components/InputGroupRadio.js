import PropTypes from 'prop-types';
const InputGroupRadio = (props) => {
    const handleChangeRadio = (ev) => {
        props.onChange(ev.target.value)
    }
    return (

        <div className="input-group-radio">
            <label className="label-radio" htmlFor={props.htmlFor}>
                {props.labelText}
            </label>

            <input
                type={props.type}
                name={props.name}
                id={props.id}
                value={props.value}
                checked={props.checked}
                onChange={handleChangeRadio}
            />
        </div>


    )
};
InputGroupRadio.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    labelText: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
}
export default InputGroupRadio