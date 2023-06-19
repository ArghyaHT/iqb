import React,{ useState} from 'react'
import styles from './Header.module.css'
import Menu from './Menu2'
import {menudata} from '../../data'
import {FiSettings} from 'react-icons/fi'
import {BsMoonStars} from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'
import { CiSearch } from "react-icons/ci"
import { IoNotificationsOutline } from "react-icons/io5"
import { FaUserCircle } from "react-icons/fa"
import { MdKeyboardArrowDown } from "react-icons/md"
import {BiLogOutCircle} from "react-icons/bi"


const Header = ({title}) => {

  const [check, setCheck] = useState(false)

  const [dropdown, setDropdown] = useState(false)

  return (
    <>
    <section className={styles.nav}>
    <div className={styles.left}>
          <div className={styles.left_header}>
            <p><span>IGB</span>iqueuebarbers</p>
          </div>

          <div className={styles.wrapper}>

          <div className={styles.left_menu_box}>
            {menudata.map((item) => {
              return (
                <div key={item.menu_title}>
                  <Menu
                    menu_logo={item.menu_logo}
                    menu_title={item.menu_title}
                    category={item.category}
                    menu_link={item.menu_link}
                  />
                </div>
              )
            })}
          </div>
            
          <div className={styles.menu_settings}>
            <div style={{ borderBottom: "1px solid #f5f5f5" }}>
              {/* <div className={styles.menu_settings_item}>
                <div><FiSettings /></div>
                <p>Settings</p>
              </div> */}

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

    </div>
    
    <div className={styles.right}>
            <div className={styles.right_left_div}>
              <p>Dashboard</p>
              <IoIosArrowForward />
              <p>List</p>
              <IoIosArrowForward />
              <b style={{ color: "rgba(0,0,0,0.6)" }}>{title}</b>
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

                <div style={{ cursor: "pointer" }} className={styles.right_dropdown}
                 onClick={() => setDropdown(!dropdown)}>
                  <MdKeyboardArrowDown />
                </div>

                {
                  dropdown && <div className={styles.right_dropdown_box}>
                    <div>
                      <div><FiSettings /></div>
                      <p>Settings</p>
                    </div>
  
                    <div>
                      <div><BiLogOutCircle/></div>
                      <p>Logout</p>
                    </div>
                  </div>
                }

              </div>
            </div>
          </div>
    
    </section>
    </>
  )
}

export default Header