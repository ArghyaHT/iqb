import React,{useEffect, useState} from 'react'
import styles from './dashboard.module.css'
import { IoMdAdd } from 'react-icons/io'
import { IoNotificationsOutline } from 'react-icons/io5'
import { FaUserCircle, FaUsers } from 'react-icons/fa'
import { BsCheckLg, BsThreeDotsVertical } from 'react-icons/bs'
import { FiMoreHorizontal } from 'react-icons/fi'
import { BiChevronRight } from 'react-icons/bi'
import Calender from '../calender/Calender'
import CustomerDetail from '../customerDetail/CustomerDetail'
import Chart from '../chart/Chart'
import { reports } from '../data'
import { customerDetail } from '../data'

import { ColorRing } from 'react-loader-spinner'

const dashboard = () => {

    const [checkbox, setCheckbox] = useState(false)
    const [checkbox2, setCheckbox2] = useState(false)

    const [loader, setLoader] = useState(true)

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setLoader(false) // Stop the loader after a delay
    //       }, 3000) // Set the desired delay in milliseconds
      
    //       return () => clearTimeout(timeout) 
    // },[])

    const checkboxhandler = () => {
        setCheckbox(!checkbox)
    }

    return (
        <>
        
        <div className={styles.right_main_div}>
                <div className={styles.right_div_top}>

                    <div className={styles.div_left}>
                        <div className={styles.div_left_head}>
                            <p>Advertisement</p>
                            <div className={styles.btn_box}>
                                <div className={styles.btn_one}>
                                    <div>
                                        <IoMdAdd />
                                    </div>

                                    <p>Add New Post</p>
                                </div>

                                <div className={styles.btn_two}>
                                    <div>
                                        <IoNotificationsOutline />
                                    </div>

                                    <p>Notifications</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.div_left_images}>
                            <div className={styles.img_one}>
                                <img src="https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?cs=srgb&dl=pexels-dmitry-zvolskiy-1805600.jpg&fm=jpg" alt="" />
                            </div>

                            <div className={styles.img_two}>

                                <div>
                                    <img src="https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?cs=srgb&dl=pexels-dmitry-zvolskiy-1805600.jpg&fm=jpg" alt="" />
                                </div>

                                <div>
                                    <img src="https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?cs=srgb&dl=pexels-dmitry-zvolskiy-1805600.jpg&fm=jpg" alt="" />
                                </div>

                            </div>

                            <div className={styles.img_three}>
                                <img src="https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?cs=srgb&dl=pexels-dmitry-zvolskiy-1805600.jpg&fm=jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.div_right}>
                        <div className={styles.div_right_head}>
                            <p>Queue List</p>

                            <div className={styles.btn_box}>

                                <div className={styles.btn_one}>
                                    <div>
                                        <IoMdAdd />
                                    </div>

                                    <p>Add Customers</p>
                                </div>


                                <div className={styles.btn_one}>
                                    <div>
                                        <FaUsers />
                                    </div>

                                    <p>Join Queue</p>
                                </div>

                                <div className={styles.last_item}>
                                    <BsThreeDotsVertical />
                                </div>

                            </div>
                        </div>

                        <div className={styles.div_right_middle}>

                            <div className={styles.content}>
                                <div>
                                    <p>Kunal Jasuja</p>
                                    <p>Contact No-9876543210</p>
                                </div>

                                <div>
                                    <FiMoreHorizontal />
                                </div>

                                <div className={styles.content_info}>
                                    <p>Progress</p>
                                    <p>55%</p>
                                </div>

                                <div className={styles.progress_bar}>
                                    <div>

                                    </div>
                                </div>
                            </div>

                            <div className={styles.content}>
                                <div>
                                    <p>Roy Kapoor</p>
                                    <p>Contact No-9876543210</p>
                                </div>

                                <div>
                                    <FiMoreHorizontal />
                                </div>

                                <div className={styles.content_info}>
                                    <p>Progress</p>
                                    <p>55%</p>
                                </div>

                                <div className={styles.progress_bar_two}>
                                    <div>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={styles.div_right_third}>
                            <div>
                                <p>Join Queue</p>
                                <span>{"(10)"}</span>
                            </div>

                            <div>
                                <p>See All</p>
                                <div>
                                    <BiChevronRight />
                                </div>
                            </div>

                        </div>

                        <div className={styles.div_right_fourth}>

                            <div>
                                <div className={styles.checkbox}
                                    style={{ backgroundColor: checkbox ? "#2164f3" : "", border: checkbox ? "none" : "1px solid rgba(0,0,0,0.4)" }}
                                    onClick={checkboxhandler}
                                >
                                    <BsCheckLg />
                                </div>

                                <p>Riya Roy</p>
                            </div>

                            <p>JLDF13463</p>

                            <div>
                                <div>
                                    In Progress
                                </div>

                                <div>
                                    <FaUserCircle />
                                </div>

                                <div>
                                    <FiMoreHorizontal />
                                </div>
                            </div>


                        </div>

                        <div className={styles.div_right_fifth}>

                            <div>
                                <div className={styles.checkbox}
                                    style={{ backgroundColor: checkbox2 ? "#2164f3" : "", border: checkbox2 ? "none" : "1px solid rgba(0,0,0,0.4)" }}
                                    onClick={() => setCheckbox2(!checkbox2)}
                                >
                                    <BsCheckLg />
                                </div>

                                <p>Priti Roy</p>
                            </div>

                            <p>JLDF13598</p>

                            <div>
                                <div>
                                    Pending
                                </div>

                                <div>
                                    <FaUserCircle />
                                </div>

                                <div>
                                    <FiMoreHorizontal />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className={styles.right_div_end}>

                    <div className={styles.right_div_end_left}>
                        <div className={styles.right_div_end_head}>
                            <p>Calender</p>

                            <div className={styles.btn_box}>
                                <button>Appoinments</button>
                                <button>Reservation</button>
                            </div>
                        </div>


                        <div className={styles.right_div_end_main}>
                            <div className={styles.main_left}>
                                <Calender />
                            </div>

                            <div className={styles.main_right} >
                                {
                                    customerDetail.map((item) => {
                                        return (
                                            <div key={item.id}>
                                                <CustomerDetail item={item} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className={styles.right_div_end_right}>
                        <div className={styles.head}>
                            <p>Reports</p>
                            <div>
                                <FiMoreHorizontal />
                            </div>
                        </div>

                        <div className={styles.reports}>

                            {
                                reports.map((item) => {
                                    return (
                                        <div className={styles.report_item} key={item.id}
                                            style={{ backgroundColor: item.backgroundColor }}
                                        >

                                            <div className={styles.content}>
                                                <div>
                                                    {item.icon}
                                                </div>
                                                <p>{item.para}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className={styles.chart}>
                            <div>
                                <p>Completion Rate</p>

                                <div>
                                    <p>95%</p>
                                    <p>+2.5%</p>
                                </div>
                            </div>

                            <div>
                                <Chart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default dashboard