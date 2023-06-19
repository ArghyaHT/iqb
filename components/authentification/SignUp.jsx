// import React, { useState } from 'react'
// import styles from './SignIn.module.css'
// import { AiOutlineMail } from 'react-icons/ai'
// import { RiLockPasswordLine } from 'react-icons/ri'
// import { FcGoogle } from 'react-icons/fc'
// import { BsFacebook } from 'react-icons/bs'
// import { BsCheckLg } from 'react-icons/bs'
// import { BiShow } from 'react-icons/bi'
// import { BiHide } from 'react-icons/bi'
// import {RiErrorWarningLine} from 'react-icons/ri'
// import {FaRegUser} from "react-icons/fa"

// //This is sign-up page not sign-in

// const SignIn = () => {
// const [check, setCheck] = useState(false)

// const isChecked = () => {
//     setCheck(!check)
// }

// const [username,setUsername] = useState("")
// const [password, setPassword] = useState("")
// const [email ,setEmail] = useState("")
// const [visible, setVisible] = useState(false)
// const [error,setError] = useState(true)

//     return (
//         <>
// <main className={styles.signup}>
//     <div className={styles.left}>
//         <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=2000"
//             alt="signup" />
//     </div>

//     <div className={styles.right}>
//         <div className={styles.right_inner_container}>

//             <div className={styles.divone}>
//                 <h1>Sign Up for an Account</h1>
//             </div>

//             <div className={styles.divtwo}>

//                 <div className={styles.input_container}>
//                     <div>
//                         <FaRegUser/>
//                     </div>
//                     <input type="text" placeholder='Username' 
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     />
//                 </div>

//                 <div className={styles.input_container}>
//                     <div>
//                         <AiOutlineMail />
//                     </div>
//                     <input type="email" placeholder='Email' 
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </div>

//                 <div className={styles.input_container_password}>
//                     <div className={styles.password_icon}>
//                         <RiLockPasswordLine />
//                     </div>
//                     <input
//                         type={visible ? "text" : "password"}
//                         placeholder='Password'
//                         value={password}
//                         onChange={e => setPassword(e.target.value)}
//                         className={styles.password}
//                         style={{border: error ? "1px solid red" : ""}}
//                     />
//                     <div className={styles.toggle_password} onClick={() => setVisible(!visible)}>
//                         {visible ? <BiShow /> : <BiHide />}
//                     </div>
//                 </div>

//                 <div className={styles.error}>
//                     <div>
//                         <RiErrorWarningLine/>
//                     </div>
//                     <p>Your password is not strong enough.Use atleast 8 charecters.</p>
//                 </div>

//                 <div className={styles.input_container_end}>

//                         <div style={{ color: "white", backgroundColor: check ? "black" : "" }}
//                             onClick={isChecked}>
//                             <BsCheckLg />
//                         </div>

//                         <p>By creating an account means you agree to the
//                         <span style={{color:"black"}}> Terms & Conditions</span> and <nav style={{marginBottom:'3px'}}/> our <span style={{color:"black"}}> Privacy Policy</span></p>
//                 </div>
//             </div>

//             <button className={styles.divthree}>Sign Up</button>

//             <div className={styles.divfour}>
//                 <div>

//                 </div>
//                 <p>Or sign in with</p>
//                 <div>

//                 </div>
//             </div>

//             <div className={styles.divfive}>
//                 <div className={styles.social_button}>
//                     <div>
//                         <FcGoogle />
//                     </div>
//                     <p>Google</p>
//                 </div>

//                 <div className={styles.social_button}>
//                     <div>
//                         <BsFacebook />
//                     </div>
//                     <p>facebook</p>
//                 </div>
//             </div>

//             <p className={styles.divsix}>Already have an account? <strong>Log In</strong> </p>
//         </div>
//     </div>
// </main>
//         </>
//     )
// }

// export default SignIn

import React, { useState } from 'react'
import styles from './SignUp.module.css'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { BsCheckLg } from 'react-icons/bs'
import { BiShow } from 'react-icons/bi'
import { BiHide } from 'react-icons/bi'
import { RiErrorWarningLine } from 'react-icons/ri'
import { FaRegUser } from "react-icons/fa"
import Link from 'next/link'
import { useRouter } from 'next/router';

import { ColorRing } from 'react-loader-spinner'

const SignUp = () => {

    const [check, setCheck] = useState(false)
    const [loader, setLoader] = useState(false)

    const isChecked = () => {
        setCheck(!check)
    }

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [visible, setVisible] = useState(false)
    const [error, setError] = useState(true)

    const router = useRouter();

    const submitHandler = () => {
        setLoader(true)
        router.push('/dashboard')
    }
    return (
        <>
            <main className={styles.signup}>
                <div className={styles.left}>
                    <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=2000"
                        alt="signup" />
                </div>

                { loader ? (<div className={styles.loader}><ColorRing
                        colors={['rgba(0,0,0,0.6)']}/>
                        </div>) : (<div className={styles.right}>
                    <div className={styles.right_inner_container}>

                        <div className={styles.divone}>
                            <h1>Sign Up for an Account</h1>
                        </div>

                        <div className={styles.divtwo}>

                            <div className={styles.input_container}>
                                <div>
                                    <FaRegUser/>
                                </div>
                                <input type="text" placeholder='Username' 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>

                            <div className={styles.input_container}>
                                <div>
                                    <AiOutlineMail />
                                </div>
                                <input type="email" placeholder='Email' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className={styles.input_container_password}>
                                <div className={styles.password_icon}>
                                    <RiLockPasswordLine />
                                </div>
                                <input
                                    type={visible ? "text" : "password"}
                                    placeholder='Password'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className={styles.password}
                                    style={{border: error ? "1px solid red" : ""}}
                                />
                                <div className={styles.toggle_password} onClick={() => setVisible(!visible)}>
                                    {visible ? <BiShow /> : <BiHide />}
                                </div>
                            </div>
                            
                            <div className={styles.error}>
                                <div>
                                    <RiErrorWarningLine/>
                                </div>
                                <p>Your password is not strong enough.Use atleast 8 charecters.</p>
                            </div>
                           
                            <div className={styles.input_container_end}>
                                
                                    <div style={{ color: "white", backgroundColor: check ? "black" : "" }}
                                        onClick={isChecked}>
                                        <BsCheckLg />
                                    </div>
                               
                                    <p>By creating an account means you agree to the
                                    <span style={{color:"black"}}> Terms & Conditions</span> and our <span style={{color:"black"}}> Privacy Policy</span></p>
                            </div>
                        </div>

                        <button className={styles.divthree}
                        onClick={submitHandler}
                        >Sign Up</button>

                        <div className={styles.divfour}>
                            <div>

                            </div>
                            <p>Or sign in with</p>
                            <div>

                            </div>
                        </div>

                        <div className={styles.divfive}>
                            <div className={styles.social_button}>
                                <div>
                                    <FcGoogle />
                                </div>
                                <p>Google</p>
                            </div>

                            <div className={styles.social_button}>
                                <div>
                                    <BsFacebook />
                                </div>
                                <p>facebook</p>
                            </div>
                        </div>

                        <p className={styles.divsix}>Already have an account? <Link href="/signin" className={styles.link}><strong>Log In</strong></Link> </p>
                    </div> 
                </div>)}
            </main>
        </>
    )
}

export default SignUp