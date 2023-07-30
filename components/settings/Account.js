import React, { useState } from 'react'
import Modal from '../modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function EmailModalBody({ onClose }) {

  const [emailUpdate, setEmailUpdate] = useState('');
  return <>
    <input value={emailUpdate} onChange={e => setEmailUpdate(e.target.value)} type='email' className='mt-5 focus:outline-none border-b border-black w-full' />
    <p className='text-xs mt-1 text-gray-500'>You can sign into Medium with this email address.</p>
    <div className='mt-5 text-end'>
      <button onClick={onClose} className='border-2 px-3 py-2 w-24 rounded-full mr-4'>Cancel</button>
      <button className='border-2 px-3 py-2 w-24 rounded-full text-white bg-green-400 hover:bg-green-500 duration-100 border-green-400 hover:border-green-500'>Save</button>
    </div></>
}

function UsernameModalBody({onClose}) {
  const [emailUpdate, setEmailUpdate] = useState('');
  return <>
    <input value={emailUpdate} onChange={e => setEmailUpdate(e.target.value)} type='email' className='mt-5 focus:outline-none border-b border-black w-full' />
    <div className='flex justify-between text-xs mt-1 text-gray-500'>
      <p>medium.com/@{emailUpdate}</p>
      <span>123/250</span>
    </div>
    <div className='flex justify-between text-xs my-4'>
      <div>
        <h1 className='text-black text-lg'>Enable Medium URL</h1>
        <p className=' text-gray-500'>Redirect medium.com/@username to username.medium.com. Note: a new profile page on a subdomain may take longer to rank in Google search.</p>
      </div>
      <input type='checkbox' />
    </div>
    <div className='mt-5 text-end'>
      <button onClick={onClose} className='border-2 px-3 py-2 w-24 rounded-full mr-4'>Cancel</button>
      <button className='border-2 px-3 py-2 w-24 rounded-full text-white bg-green-400 hover:bg-green-500 duration-100 border-green-400 hover:border-green-500'>Save</button>
    </div>
  </>
}
function ProfileInfoModalBody() {
  return <></>
}
function ProfileDesignModalBody() {
  return <></>
}
function MutedWriterModalBody() {
  return <></>
}
function BlockedUserModalBody() {
  return <></>
}
function DeactivateAccountModalBody() {
  return <></>
}
function DeleteAccountModalBody() {
  return <></>
}

function Account() {
  const [activeModal, setActiveModal] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='text-sm'>
      <div onClick={(e) => { setActiveModal('email'); setIsModalOpen(!isModalOpen); }} className='py-3 cursor-pointer flex justify-between'>
        <h5 className=''>Email address</h5>
        <span className='cursor-pointer'>sssssssssssssssssssssssss</span>
      </div>
      <div onClick={(e) => { setActiveModal('username'); setIsModalOpen(!isModalOpen); }} className='cursor-pointer py-3 flex justify-between'>
        <h5>Username & Subdomain</h5>
        <span>sssssssssssssssssssssssss</span>
      </div>
      <div onClick={(e) => { setActiveModal('profile-info'); setIsModalOpen(!isModalOpen); }} className='cursor-pointer py-3 flex justify-between'>
        <h5>Profile Information</h5>
        <span>sssssssssssssssssssssssss</span>
      </div>
      <div onClick={(e) => { setActiveModal('profile-design'); setIsModalOpen(!isModalOpen);; }} className='cursor-pointer py-3 flex justify-between'>
        <h5>Profile Design</h5>
        <span>sssssssssssssssssssssssss</span>
      </div>
      <div onClick={(e) => { setActiveModal('muted-writer'); setIsModalOpen(!isModalOpen); }} className='cursor-pointer py-3 flex justify-between'>
        <h5>Muted Writers & Publicators</h5>
        <span>sssssssssssssssssssssssss</span>
      </div>
      <div onClick={(e) => { setActiveModal('blocked-user'); setIsModalOpen(!isModalOpen); }} className='cursor-pointer py-3 flex justify-between'>
        <h5>Blocked User</h5>
        <span>sssssssssssssssssssssssss</span>
      </div>
      <div onClick={(e) => { setActiveModal('deactivate-account'); setIsModalOpen(!isModalOpen); }} className='cursor-pointer py-3 flex justify-between'>
        <div>
          <h5 className='text-red-500'>Deactivate Account</h5>
          <span>Deactivating will suspend your account until you sign back in.</span>
        </div>
        <span>sssssssssssssssssssssssss</span>
      </div>
      <div onClick={(e) => { setActiveModal('delete-account'); setIsModalOpen(!isModalOpen); }} className='cursor-pointer py-3 flex justify-between'>
        <div>
          <h5 className='text-red-500'>Delete Account</h5>
          <span>Permanently delete your account and all of your content.</span>
        </div>
        <span>sssssssssssssssssssssssss</span>
      </div>

      <Modal isOpened={activeModal === 'email'} onClose={() => setActiveModal(!activeModal)} header={'Email address'} modalBody={<EmailModalBody onClose={() => setActiveModal(!activeModal)} />}>
      </Modal>

      <Modal isOpened={activeModal === 'username'} onClose={() => setActiveModal(!activeModal)} header={'Username and subdomain'} modalBody={<UsernameModalBody onClose={() => setIsModalOpen(!isModalOpen)} />}>
      </Modal>

      <Modal isOpened={activeModal === 'profile-design'} onClose={() => setActiveModal(!activeModal)} header={'Email address'} modalBody={<EmailModalBody onClose={() => setIsModalOpen(!isModalOpen)} />}>
      </Modal>

      <Modal isOpened={activeModal === 'delete-account'} onClose={() => setActiveModal(!activeModal)} header={'Email address'} modalBody={<EmailModalBody onClose={() => setIsModalOpen(!isModalOpen)} />}>
      </Modal>

      <Modal isOpened={activeModal === 'muted-writer'} onClose={() => setActiveModal(!activeModal)} header={'Email address'} modalBody={<EmailModalBody onClose={() => setIsModalOpen(!isModalOpen)} />}>
      </Modal>

      <Modal isOpened={activeModal === 'deactivate-account'} onClose={() => setActiveModal(!activeModal)} header={'Email address'} modalBody={<EmailModalBody onClose={() => setIsModalOpen(!isModalOpen)} />}>
      </Modal>

      <Modal isOpened={activeModal === 'blocked-user'} onClose={() => setActiveModal(!activeModal)} header={'Email address'} modalBody={<EmailModalBody onClose={() => setIsModalOpen(!isModalOpen)} />}>
      </Modal>

      <Modal isOpened={activeModal === 'email'} onClose={() => setActiveModal(!activeModal)} header={'Email address'} modalBody={<EmailModalBody onClose={() => setIsModalOpen(!isModalOpen)} />}>
      </Modal>

      <Modal isOpened={activeModal === 'email'} onClose={() => setActiveModal(!activeModal)} header={'Email address'} modalBody={<EmailModalBody onClose={() => setIsModalOpen(!isModalOpen)

      } />}>
      </Modal>
    </div>
  )
}

export default Account