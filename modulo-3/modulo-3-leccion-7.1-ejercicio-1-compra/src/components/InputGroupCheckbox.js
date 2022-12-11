import PropTypes from 'prop-types';
const InputGroupCheckbox = (props) => {
    const handleCheckboxChange = (ev) => {
        props.onChange(ev.target.checked)
    }
    return (
        <div className="input-group-checkbox">
            <label className="label-check" htmlFor={props.htmlFor}>
                {props.labelText}
            </label>
            <input
                type={props.type}
                name={props.name}
                id={props.id}
                checked={props.checked}
                onChange={handleCheckboxChange}
            />
        </div>
    )
};
InputGroupCheckbox.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    labelText: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
}
export default InputGroupCheckbox