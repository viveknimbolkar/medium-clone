import React, { useRef, useState } from 'react'
import Modal from '../modal';
import Image from 'next/image';
import UserImage from '../../public/user.png'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


function ReplyEmail({ onClose }) {

  const [emailUpdate, setEmailUpdate] = useState('');

  return <>
    <input value={emailUpdate} onChange={e => setEmailUpdate(e.target.value)} type='email' className='mt-5 focus:outline-none border-b border-black w-full' />
    <p className='text-xs mt-1 text-gray-500'>You can sign into Medium with this email address.</p>
    <div className='mt-5 text-end'>
      <button onClick={onClose} className='border-2 px-3 py-2 w-24 rounded-full mr-4'>Cancel</button>
      <button className='border-2 px-3 py-2 w-24 rounded-full text-white bg-green-400 hover:bg-green-500 duration-100 border-green-400 hover:border-green-500'>Save</button>
    </div></>
}

function ManagePublication({ onClose }) {
  return <>
    <Link href={"/"} className='text-green-600 flex gap-2 items-center text-center justify-center my-5'>
      <FontAwesomeIcon icon={faPlus} /> <h5>Create a publication</h5>
    </Link>
    <p>You don't belong to any publications.</p>
  </>
}
function ManageTripping({ onClose }) {
  return <>
    <p className='my-5 text-sm text-gray-500'>Allow readers to send a tip by adding a link to your preferred payment platform, which will appear at the bottom of your stories.</p>
    <hr />
    <div className='mt-5 text-end'>
      <button onClick={onClose} className='border-2 px-3 py-2 w-24 rounded-full mr-4'>Cancel</button>
      <button className='border-2 px-3 py-2 w-24 rounded-full text-white bg-green-400 hover:bg-green-500 duration-100 border-green-400 hover:border-green-500'>Save</button>
    </div>
  </>
}
function CustomizeSubscription({ onClose }) {

  return <>
    <p>Allow readers to send a tip by adding a link to your preferred payment platform, which will appear at the bottom of your stories.</p>
    <hr />
    <div className='mt-5 text-end'>
      <button onClick={onClose} className='border-2 px-3 py-2 w-24 rounded-full mr-4'>Cancel</button>
      <button className='border-2 px-3 py-2 w-24 rounded-full text-white bg-green-400 hover:bg-green-500 duration-100 border-green-400 hover:border-green-500'>Save</button>
    </div>
  </>
}


function Publishing() {
  const [activeModal, setActiveModal] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allowEmailReplies, setAllowEmailReplies] = useState(false);

  return (
    <div className='text-sm'>
      <div onClick={(e) => { setActiveModal('manage-publication'); setIsModalOpen(!isModalOpen); }} className='py-3 cursor-pointer flex justify-between'>
        <h5 className=''>Manage publications</h5>
        <span className='cursor-pointer'>viveknimbolkar@gmail.com</span>
      </div>

      <div onClick={(e) => { setActiveModal('manage-tripping'); setIsModalOpen(!isModalOpen); }} className='cursor-pointer py-3 flex justify-between'>
        <div>
          <h5>Manage tipping on your stories</h5>
          <div className='text-xs text-gray-600'>Readers can send you tips through the third-party platform of your choice.</div>
        </div>
        <input type='checkbox' className='w-5 h-5' />
      </div>

      <div onClick={(e) => { setAllowEmailReplies(!allowEmailReplies); setIsModalOpen(!isModalOpen); }} className={`${allowEmailReplies ? 'cursor-not-allowed text-gray-400' : ""} cursor-pointer py-3 flex justify-between`}>
        <div>
          <h5>Allow email replies
          </h5>
          <div className='text-xs text-gray-600'>
            Let readers reply to your stories directly from their email.</div>
        </div>
        <input value={allowEmailReplies} onChange={e => { setAllowEmailReplies(e.target.checked) }} type='checkbox' className='w-5 h-5' />
      </div>

      <div onClick={(e) => { setActiveModal('reply-email'); setIsModalOpen(!isModalOpen); }} className='cursor-pointer py-3 flex justify-between'>
        <div>
          <h5>Reply's To Email
          </h5>
          <div className='text-xs text-gray-600'>
            Let readers reply to your stories directly from their email.</div>
        </div>
      </div>

      <div onClick={(e) => { setActiveModal('blocked-user'); setIsModalOpen(!isModalOpen); }} className='cursor-pointer py-3 flex justify-between'>
        <h5>Blocked User</h5>

      </div>

      <div onClick={(e) => { setActiveModal('deactivate-account'); setIsModalOpen(!isModalOpen); }} className='cursor-pointer py-3 flex justify-between'>
        <div>
          <h5 className='text-red-500'>Deactivate Account</h5>
          <span>Deactivating will suspend your account until you sign back in.</span>
        </div>

      </div>

      <div onClick={(e) => { setActiveModal('delete-account'); setIsModalOpen(!isModalOpen); }} className='cursor-pointer py-3 flex justify-between'>
        <div>
          <h5 className='text-red-500'>Delete Account</h5>
          <span>Permanently delete your account and all of your content.</span>
        </div>

      </div>

      <Modal isOpened={activeModal === 'manage-publication'} onClose={() => setActiveModal(!activeModal)} header={'Manage Publications'} modalBody={<ManagePublication onClose={() => setActiveModal(!activeModal)} />}>
      </Modal>

      <Modal isOpened={activeModal === 'reply-email'} onClose={() => setActiveModal(!activeModal)} header={'‘Reply To’ email address'} modalBody={<ReplyEmail onClose={() => setActiveModal(!activeModal)} />}>
      </Modal>

      <Modal isOpened={activeModal === 'customize-subscription'} onClose={() => setActiveModal("")} header={'‘Reply To’ email address'} modalBody={<CustomizeSubscription onClose={() => { setIsModalOpen(!isModalOpen); setActiveModal("") }} />}>
      </Modal>

      <Modal isOpened={activeModal === 'manage-tripping'} onClose={() => setActiveModal(!activeModal)} header={'Manage tipping on your stories'} modalBody={<ManageTripping onClose={() => { setIsModalOpen(!isModalOpen); setActiveModal("") }} />}>
      </Modal>

    </div>
  )
}

export default Publishing