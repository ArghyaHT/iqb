import React from 'react'
import styles from './CustomerDetail.module.css'
import {IoMdNotificationsOutline} from "react-icons/io"
import {BsThreeDotsVertical} from "react-icons/bs"

const CustomerDetail = ({item}) => {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.details}>
            <p>Customer ID</p>
            <p>{item.customerID}</p>
        </div>

        <div className={styles.details}>
            <p>First Name</p>
            <p>{item.firstName}</p>
        </div>

        <div className={styles.details}>
            <p>Last Name</p>
            <p>{item.LastName}</p>
        </div>

        <button>
            Follow Up
        </button>

        <div className={styles.btn_box}>
            <div>
                <IoMdNotificationsOutline/>
            </div>
            <div>
                <BsThreeDotsVertical/>
            </div>
        </div>
    </div>
    </>
  )
}

export default CustomerDetail