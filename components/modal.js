import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Modal({ children, isOpened = false, isLoginWindow = false, header, onClose, modalBody }) {
    if (!isOpened) {
        return null
    }
    return <>
        <div className={`fixed ${isLoginWindow ? 'backdrop-blur-sm' : ''} inset-0 flex flex-col items-center justify-center bg-opacity-25 bg-black`}>
            {isLoginWindow ? children : <> <div className='bg-white p-8 w-[500px]'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-bold text-xl'>{header}</h1>
                    <FontAwesomeIcon onClick={onClose} icon={faTimes} size='xl' className='hover:text-black duration-100 cursor-pointer' color='#808080' />
                </div>
                {modalBody}
            </div></>}
        </div></>
}

export default Modal