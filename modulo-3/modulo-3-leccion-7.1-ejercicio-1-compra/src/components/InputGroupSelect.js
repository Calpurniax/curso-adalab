import PropTypes from 'prop-types';
const InputGroupSelect = (props) => {
    const handleSelectChange = (ev) => {
        props.onChange(ev.target.value)
    }
    return (
        <div className="input-group-select">
            <label className="label-text" htmlFor="region">
                {props.labelText}
            </label>
            <select
                className="input-select"
                name={props.name}
                id={props.id}
                value={props.value}
                onChange={handleSelectChange}
            >
                <option value='España peninsular'>España peninsular</option>
                <option value='Islas Canarias'>Islas Canarias</option>
                <option value='Islas Baleares'>Islas Baleares</option>
                <option value='Ceuta'>Ceuta</option>
                <option value='Melilla'>Melilla</option>
            </select>
        </div>
    )
};
InputGroupSelect.propTypes = {
    labelText: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
export default InputGroupSelect