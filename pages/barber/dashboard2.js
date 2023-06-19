import BarberList from '@/components/dashboard2/barberlist/BarberList'
import BarberListTable from '@/components/dashboard2/barberlistTable/BarberListTable'
import Layout from '@/components/layout/Layout'
import React from 'react'

const dashboard2 = () => {
  return (
    <>
    <Layout title="Barber">
    {/* <BarberList/> */}
    <BarberListTable/>
    </Layout>
    </>
  )
}

export default dashboard2