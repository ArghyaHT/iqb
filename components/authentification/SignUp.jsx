import React, { useState } from 'react'
import styles from './SignUp.module.css'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { BsCheckLg } from 'react-icons/bs'
import { BiShow } from 'react-icons/bi'
import { BiHide } from 'react-icons/bi'
import {RiErrorWarningLine} from 'react-icons/ri'
import Link from 'next/link'

//This is sign-in page not sign-up

const SignUp = () => {
    const [check, setCheck] = useState(false)

    const isChecked = () => {
        setCheck(!check)
    }

    const [password, setPassword] = useState("")
    const [email ,setEmail] = useState("")
    const [visible, setVisible] = useState(false)
    const [error,setError] = useState(true)
    
    return (
        <>
            <main className={styles.signup}>
                <div className={styles.left}>
                    <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=2000"
                        alt="signup" />
                </div>

                <div className={styles.right}>
                    <div className={styles.right_inner_container}>

                        <div className={styles.divone}>
                            <h1>Sign In to your Account</h1>
                            <p>Welcome back! please enter your detail</p>
                        </div>

                        <div className={styles.divtwo}>
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
                                <div>
                                    <div style={{ color: "white", backgroundColor: check ? "black" : "" }}
                                        onClick={isChecked}>
                                        <BsCheckLg />
                                    </div>
                                    <p>Remember me</p>
                                </div>

                                <Link href="/resetpassword" style={{textDecoration:"none"}}><p>Forgot Password?</p></Link>
                            </div>
                        </div>

                        <button className={styles.divthree}>Sign In</button>

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

                        <p className={styles.divsix}>Don't have an account? <Link href="/signin" className={styles.link}><strong>Sign Up</strong></Link></p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SignUp