import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <>
    <main className='demo_menu'>
    <h1>WELCOME TO IQG BARBERS...</h1>
    <div>
      <Link href="/signin"><h4>Sign In</h4></Link>
      <Link href="/signup"><h4>Sign Up</h4></Link>
      <Link href="/resetpassword"><h4>Reset Password</h4></Link>
      <Link href="/verifyemail"><h4>Verify Email</h4></Link>
      <Link href="/dashboard"><h4>Dashboard</h4></Link>
      <Link href="/barber/dashboard2"><h4>Dashboard2</h4></Link>
      <Link href="/customer/dashboard3"><h4>Dashboard3</h4></Link>
    </div>
    </main>
    </>
  )
}

export default index