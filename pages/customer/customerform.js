import CustomerForm from '@/components/dashboard3/customerform/CustomerForm'
import Layout from '@/components/layout/Layout'
import React from 'react'

const customerform = () => {
  return (
   <>
   <Layout title="CustomerInformation">
    <CustomerForm/>
   </Layout>
   </>
  )
}

export default customerform