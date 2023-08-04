import PropTypes from 'prop-types'
import styles from './AddInput.module.css'

const AddInput = ({ onSubmit, onChange, value}) => {
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <input 
                className={styles.input}
                onChange={onChange}
                value={value}
                type='text'
                placeholder='List'
            />
            <button 
                className={styles.addButton}
                type='submit'
                >Add</button>
        </form>
    )
}

AddInput.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string
}

export default AddInput