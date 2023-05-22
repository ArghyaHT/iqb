import React, { useState } from 'react'
import styles from './Dashboard.module.css'
import Menu from './Menu'
import { menudata } from './data'
import { FiSettings } from 'react-icons/fi'
import { BsMoonStars } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'
import { CiSearch } from "react-icons/ci"
import { IoNotificationsOutline } from "react-icons/io5"
import { MdKeyboardArrowDown } from "react-icons/md"
import { FaUserCircle } from "react-icons/fa"
import { IoMdAdd } from "react-icons/io"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaUsers } from "react-icons/fa"
import { FiMoreHorizontal } from "react-icons/fi"
import { BiChevronRight } from "react-icons/bi"
import {BsCheckLg} from "react-icons/bs"

const Dashboard = () => {

  const [check, setCheck] = useState(false)

  const [checkbox, setCheckbox] = useState(false)

  const checkboxhandler = () => {
    setCheckbox(!checkbox)
  }

  console.log(check)

  return (
    <>
      <section className={styles.dashboard}>
        <div className={styles.left}>
          <div className={styles.left_header}>
            <p><span>IGB</span>iqueuebarbers</p>
          </div>

          <div className={styles.left_menu_box}>
            {menudata.map((item) => {
              return (
                <>
                  <Menu
                    menu_logo={item.menu_logo}
                    menu_title={item.menu_title}
                    category={item.category}
                  />
                </>
              )
            })}
          </div>

          <div className={styles.menu_settings}>
            <div style={{ borderBottom: "1px solid #f5f5f5" }}>
              <div className={styles.menu_settings_item}>
                <div><FiSettings /></div>
                <p>Settings</p>
              </div>

            </div>

            <div>
              <div className={styles.menu_settings_item}>
                <div><BsMoonStars /></div>
                <p>Dark Mode</p>
              </div>

              <div className={styles.toggle_switch2}>
                {/* TOGGLE_SWITCH_CODE */}
                <label className={styles.toggle_switch}>
                  <input type="checkbox"
                    value={check}
                    onClick={(e) => setCheck(!check)}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>

            </div>
          </div>


        </div>

        <div className={styles.right}>
          {/* header-part-start */}
          <div className={styles.right_header}>
            <div className={styles.right_left_div}>
              <p>Dashboard</p>
              <IoIosArrowForward />
              <p>List</p>
              <IoIosArrowForward />
              <b style={{ color: "rgba(0,0,0,0.6)" }}>Customer Information</b>
            </div>

            <div className={styles.right_right_div}>

              <div className={styles.search_box}>
                <div>
                  <CiSearch />
                </div>
                <input type="text" placeholder='Search...' />
              </div>

              <div className={styles.notification}>
                <IoNotificationsOutline />
              </div>

              {/* profile_div */}
              <div className={styles.profile}>
                <div className={styles.image}>
                  <FaUserCircle />
                </div>

                <div className={styles.profile_detail}>
                  <b>Kunal Jasuja</b>
                  <p>Owner</p>
                </div>

                <div style={{ cursor: "pointer" }}>
                  <MdKeyboardArrowDown />
                </div>

              </div>
            </div>
          </div>
          {/* header-part-end */}

          {/* right_div_top start */}
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
                   style={{backgroundColor: checkbox ? "#2164f3" : "",border: checkbox ? "none" : "1px solid rgba(0,0,0,0.4)"}}
                   onClick={checkboxhandler}
                   >
                    <BsCheckLg/>
                   </div>

                   <p>Riya Roy</p>
                  </div>
                  
                  <p>JLDF13463</p>

                  <div>
                    third box
                  </div>


                </div>
              </div>
            </div>


          </div>

          {/* right_div_top ends */}

        </div>
      </section>
    </>
  )
}

export default Dashboard