import React from 'react'
import './styles.css'

import { ReactComponent as IconCheck } from '../../svgs/icon-check.svg'

const RadioButton = ({ isChecked, toggleCheckedState }) => {
    return (
        <span className={ `item-is_checked__span ${ isChecked && 'item-checked__span' }`} onClick={ () => toggleCheckedState(!isChecked) }>
            <span></span>
            { isChecked && <IconCheck /> }
        </span>
    )
}

export default RadioButton
