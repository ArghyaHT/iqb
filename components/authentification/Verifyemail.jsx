import React, { useState } from 'react'
import styles from './Verifyemail.module.css'
import { AiOutlineMail } from 'react-icons/ai'


//This is sign-up page not sign-in

const Verifyemail = () => {

    const [email ,setEmail] = useState("")
    const [error,setError] = useState(true)
    
    return (
        <>
            <main className={styles.verifyemail}>
                <div className={styles.left}>
                    <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=2000"
                        alt="signup" />
                </div>

                <div className={styles.right}>
                    <div className={styles.right_inner_container}>

                        <div className={styles.divone}>
                            <h1>Verify your Email</h1>
                            <p>Thank you, check your email for instructions to reset your password</p>
                        </div>

                        <button className={styles.divthree}>Skip Now</button>

                        <p className={styles.divfour}>Don't receive an email?<strong>Resend</strong></p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Verifyemail