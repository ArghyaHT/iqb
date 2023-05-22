import React, { useState } from 'react'
import styles from './ResetPassword.module.css'
import { AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link'


//This is sign-up page not sign-in

const ResetPassword = () => {

    const [email ,setEmail] = useState("")
    const [error,setError] = useState(true)
    
    return (
        <>
            <main className={styles.resetpassword}>
                <div className={styles.left}>
                    <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=2000"
                        alt="signup" />
                </div>

                <div className={styles.right}>
                    <div className={styles.right_inner_container}>

                        <div className={styles.divone}>
                            <h1>Reset your password</h1>
                            <p>Enter the email address associated your account and we will send you a link to reset your password</p>
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
                        </div>

                        <button className={styles.divthree}>Continue</button>

                        <p className={styles.divfour}><Link href="/signup" style={{color:"black",textDecoration:"none"}}><strong>Back to sign in</strong></Link></p>

                        <p className={styles.divfive}>Don't have an account? <Link href="/signin" style={{textDecoration:"none",color:"black"}}><strong>Sign Up</strong></Link></p>

                    </div>
                </div>
            </main>
        </>
    )
}

export default ResetPassword