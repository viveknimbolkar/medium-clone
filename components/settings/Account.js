import React, { useRef, useState } from 'react'
import Modal from '../modal';
import Image from 'next/image';
import UserImage from '../../public/user.png'
import Link from 'next/link';


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

function UsernameModalBody({ onClose }) {
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
function ProfileInfoModalBody({ onClose }) {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");
  const imageRef = useRef(null)

  const handleImageUpload = (e) => {
    e.target.files.length > 0 &&
      setImage(e.target.files[0])
  }

  return <>
    <div className='flex mt-10'>
      <Image src={UserImage} width={80} height={80} />
      <div className='p-3'>
        <input ref={imageRef} className='hidden' type='file' onChange={handleImageUpload} />
        <button onClick={(e) => imageRef.current.click()} className='text-green-500 mr-3'>Update</button>
        <button className='text-red-500'>Remove</button>
        <p className='text-gray-500 text-xs'>Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per side.</p>
      </div>
    </div>
    <div>
      <h5 className='mt-5'>Name*</h5>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='w-full border-b-2 focus:outline-none' />
      <div className='flex justify-between'>
        <p className='text-xs text-gray-500'>Appears on your Profile page, as your byline, and in your responses.
          5/50</p>
        <span>5/50</span>
      </div>
      <h5 className='mt-5'>Bio</h5>
      <input type='text' value={bio} onChange={(e) => setBio(e.target.value)} className='w-full border-b-2 focus:outline-none' />
      <div className='flex justify-between'>
        <p className='text-xs text-gray-500'>Appears on your Profile and next to your stories.
          5/50</p>
        <span>5/160</span>
      </div>
    </div>
    <div className='mt-5 text-end'>
      <button onClick={onClose} className='border-2 px-3 py-2 w-24 rounded-full mr-4'>Cancel</button>
      <button className='border-2 px-3 py-2 w-24 rounded-full text-white bg-green-400 hover:bg-green-500 duration-100 border-green-400 hover:border-green-500'>Save</button>
    </div>
  </>
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
function DeactivateAccountModalBody({ onClose }) {
  return <>
    <p className='my-4'>
      Deactivating your account will remove it from Medium within a few minutes. Deactivation will also immediately cancel any subscription for Medium Membership, and no money will be reimbursed. You can sign back in anytime to reactivate your account and restore its content.
    </p>
    <div className='mt-5 text-end'>
      <button onClick={onClose} className='border-2 px-3 py-2 w-24 rounded-full mr-4'>Cancel</button>
      <button className='border-2 px-3 py-2 w-24 rounded-full text-white bg-green-400 hover:bg-green-500 duration-100 border-green-400 hover:border-green-500'>Save</button>
    </div>
  </>
}
function DeleteAccountModalBody({ onClose }) {
  return <>
    <p className='my-4'>
      We’re sorry to see you go. Once your account is deleted, all of your content will be permanently gone, including your profile, stories, publications, notes, and responses. Deleting your Medium account will not delete any Stripe account you have connected to your Medium account. If you’re not sure about that, we suggest you deactivate or submit a request at <Link href={"/"} className='underline'> help.medium.com </Link> instead.
      If you created a Medium Membership through the Apple App store, you must also cancel your subscription via iTunes.

      To confirm deletion, type “delete” below:
    </p>
    <div className='mt-5 text-end'>
      <button onClick={onClose} className='border-2 px-3 py-2 w-24 rounded-full mr-4'>Cancel</button>
      <button className='border-2 px-3 py-2 w-24 rounded-full text-white bg-green-400 hover:bg-green-500 duration-100 border-green-400 hover:border-green-500'>Save</button>
    </div>
  </>
}

function Account() {
  const [activeModal, setActiveModal] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='text-sm'>
      <div onClick={(e) => { setActiveModal('email'); setIsModalOpen(!isModalOpen); }} className='py-3 cursor-pointer flex justify-between'>
        <h5 className=''>Email address</h5>
        <span className='cursor-pointer'>viveknimbolkar@gmail.com</span>
      </div>
      <div onClick={(e) => { setActiveModal('username'); setIsModalOpen(!isModalOpen); }} className='cursor-pointer py-3 flex justify-between'>
        <h5>Username & Subdomain</h5>
        <span>@vivek</span>
      </div>
      <div onClick={(e) => { setActiveModal('profile-info'); setIsModalOpen(!isModalOpen); }} className='cursor-pointer py-3 flex justify-between'>
        <div>

          <h5>Profile Information</h5>
          <div className='text-xs text-gray-600'>Edit your photo, name, bio, etc.</div>
        </div>
        <span className='flex items-center gap-3 text-gray-600'><h4>Vivek</h4> <Image src={UserImage} width={30} height={300} /></span>
      </div>
      <div onClick={(e) => { setActiveModal('profile-design'); setIsModalOpen(!isModalOpen);; }} className='cursor-pointer py-3 flex justify-between'>
        <h5>Profile Design</h5>
        <span>sssssssssssssssssssssssss</span>
      </div>
      <div onClick={(e) => { setActiveModal('muted-writer'); setIsModalOpen(!isModalOpen); }} className='cursor-pointer py-3 flex justify-between'>
        <h5>Muted Writers & Publicators</h5>

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

      <Modal isOpened={activeModal === 'email'} onClose={() => setActiveModal(!activeModal)} header={'Email address'} modalBody={<EmailModalBody onClose={() => setActiveModal(!activeModal)} />}>
      </Modal>

      <Modal isOpened={activeModal === 'username'} onClose={() => setActiveModal("")} header={'Username and subdomain'} modalBody={<UsernameModalBody onClose={() => { setIsModalOpen(!isModalOpen); setActiveModal("") }} />}>
      </Modal>

      <Modal isOpened={activeModal === 'profile-info'} onClose={() => setActiveModal(!activeModal)} header={'Profile Information'} modalBody={<ProfileInfoModalBody onClose={() => { setIsModalOpen(!isModalOpen); setActiveModal("") }} />}>
      </Modal>

      <Modal isOpened={activeModal === 'delete-account'} onClose={() => setActiveModal(!activeModal)} header={'Delete Account'} modalBody={<DeleteAccountModalBody onClose={() => { setIsModalOpen(!isModalOpen); setActiveModal("") }} />}>
      </Modal>

      <Modal isOpened={activeModal === 'muted-writer'} onClose={() => setActiveModal(!activeModal)} header={'Email address'} modalBody={<EmailModalBody onClose={() => { setIsModalOpen(!isModalOpen); setActiveModal("") }} />}>
      </Modal>

      <Modal isOpened={activeModal === 'deactivate-account'} onClose={() => setActiveModal(!activeModal)} header={'Deactivate account'} modalBody={<DeactivateAccountModalBody onClose={() => { setIsModalOpen(!isModalOpen); setActiveModal("") }} />}>
      </Modal>

      <Modal isOpened={activeModal === 'blocked-user'} onClose={() => setActiveModal(!activeModal)} header={'Block Account'} modalBody={<BlockedUserModalBody onClose={() => { setIsModalOpen(!isModalOpen); setActiveModal("") }} />}>
      </Modal>


    </div>
  )
}

export default Account