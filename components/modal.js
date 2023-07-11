import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Modal({ children, isOpened = false, onClose }) {
    if (!isOpened) {
        return null
    }
    return <>
        <div className='fixed backdrop-blur-sm inset-0 flex flex-col items-center justify-center bg-opacity-25 bg-black'>
            {children}
        </div></>
}

export default Modal