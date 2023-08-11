"use client"
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import Modal from '../modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faEnvelope, faAppleWhole } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useRouter } from 'next/router'
import AuthContext from '../context'
function PublicHeader() {
    const [loginStep, setLoginStep] = useState("all-auth");
    const [open, setOpen] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    const { setIsLoggedIn } = useContext(AuthContext);

    const router = useRouter();
    const handleSubmit = () => {
        axios.post("/api/auth/signin", { email, password }).then(res => { localStorage.setItem('token', res.data.token); setIsLoggedIn(true); router.push("/"); }).catch(err => console.log(err))
    }

    const handleSignUp = () => {
        axios.post("/api/auth/signup", { newName, newEmail, newPassword, verifyPassword }).then(res => { console.log(res); }).catch(err => console.log(err))

    }

    return (
        <header className={`border-b-[1px] bg-yellow-400 border-black w-full flex justify-between px-[100px] py-5`}>
            {/* <div className='flex gap-4'>
                <svg width={50} viewBox="0 0 1043.63 592.71" class="q r"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path></g></g></svg>
                <h1>Medium</h1>
            </div> */}
            <ul className='flex gap-5 items-center text-sm'>
                <li><Link href={"/about"}> Our Story </Link> </li>
                <li><Link href={"/membership"}>Membership</Link></li>
                <li><Link href={"/write"}>Write</Link></li>
                <li className='cursor-pointer' onClick={() => setOpen(true)}>Sign In</li>
                <li><button className='bg-black text-white p-2 px-4 text-xs rounded-full border-none hover:bg-slate-800'>Get Started</button></li>
            </ul>
            <Modal isLoginWindow={true} isBackgroundBlur={true} isOpened={open} onClose={() => setOpen(!open)}>
                <div className='bg-white w-1/2 h-screen'>
                    <div className='flex justify-end pr-5 pt-5'>
                        <FontAwesomeIcon icon={faClose} onClick={() => setOpen(!open)} className='fa-xl p-1 cursor-pointer  hover:text-black text-slate-400 duration-50' />
                    </div>
                    <div className=' flex flex-col items-center'>
                        <h1 className='text-5xl my-5'>{emailError ? "Sorry, we didn't recognize that email." : loginStep === "all-auth" ? "Welcome back" : loginStep === "signup" ? "Join Medium" : loginStep === "signin" ? "Sign in with email" : "Welcome back"}</h1>
                        {
                            loginStep === "all-auth" ?
                                <>
                                    <div className='flex flex-col items-center'>
                                        <button className='border-[1px] border-slate-600 hover:border-black duration-50 text-sm px-4 my-2 bg-white rounded-full p-2'> Sign in with Google</button>

                                        <button className='border-[1px] border-slate-600 hover:border-black duration-50 text-sm px-4 my-2 bg-white rounded-full p-2'><FontAwesomeIcon icon={faAppleWhole} /> Sign in with Apple</button>
                                        <button onClick={() => setLoginStep("signin")} className='border-[1px] border-slate-600 hover:border-black duration-50 text-sm px-4 my-2 bg-white rounded-full p-2'><FontAwesomeIcon icon={faEnvelope} /> Sign in with Email</button>
                                        <input value={newName} onChange={(e) => setNewName(e.target.value)} type='text' className='border-black border-b-[1px] focus:outline-none text-center pb-1 mt-4' placeholder='Your name' />
                                        <br />
                                        <input value={newEmail} onChange={(e) => setNewEmail(e.target.value)} type='email' className='border-black border-b-[1px] focus:outline-none text-center pb-1' placeholder='Email address' />
                                        <br />
                                        <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} type='password' className='border-black border-b-[1px] focus:outline-none text-center pb-1' placeholder='New Password' />
                                        <br />
                                        <input value={verifyPassword} onChange={(e) => setVerifyPassword(e.target.value)} type='password' className='border-black border-b-[1px] focus:outline-none text-center pb-1' placeholder='Confirm New Password' />
                                        <button className='bg-slate-950 hover:bg-black text-white w-1/2 p-2 rounded-full my-2' onClick={() => handleSignUp()}>Sign Up</button>
                                        <div>No account? <strong className='text-green-600 cursor-pointer' onClick={() => setLoginStep("signup")} >Create One</strong></div>
                                    </div>
                                </> : loginStep === "signin" ? <>
                                    <div className='flex flex-col items-center'>
                                        <p className='my-5'>Enter your email address to create an account.</p>
                                        <label>Your Email</label><br />
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' className='border-black border-b-[1px] focus:outline-none text-center my-5 pb-1' placeholder='Email address' />
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='*****' className='border-black border-b-[1px] focus:outline-none text-center my-5 pb-1' />
                                        <button onClick={handleSubmit} className='bg-slate-950 hover:bg-black text-white w-2/3 p-2 rounded-full'>Login</button>
                                        <label onClick={() => setLoginStep("all-auth")} className='text-green-700 cursor-pointer text-sm underline my-5'>&lt; All Sign in options</label>
                                    </div>
                                </> : loginStep === "signup" ? <>
                                    <div className='flex flex-col'>
                                        <button className='border-[1px] border-slate-600 hover:border-black duration-50 text-sm px-4 my-2 bg-white rounded-full p-2'> Sign in with Google</button>

                                        <button className='border-[1px] border-slate-600 hover:border-black duration-50 text-sm px-4 my-2 bg-white rounded-full p-2'> Sign in with Facebook</button>

                                        <button onClick={() => setLoginStep("signin")} className='border-[1px] border-slate-600 hover:border-black duration-50 text-sm px-4 my-2 bg-white rounded-full p-2'><FontAwesomeIcon icon={faEnvelope} /> Sign in with Email</button>
                                        <div>No account? <strong className='text-green-600 cursor-pointer' onClick={() => setLoginStep("signin")}>Sign In</strong></div>
                                    </div>
                                </> : loginStep === "email-sent" ? <>
                                    <div className='flex flex-col'>
                                        <p>Check the link we sent to you.</p>
                                        <p>{email}</p>
                                        <button className='bg-black border-none text-white text-sm'>OK</button>
                                    </div>
                                </> : <></>
                        }
                    </div>
                </div>
            </Modal>
        </header>
    )
}

export default PublicHeader