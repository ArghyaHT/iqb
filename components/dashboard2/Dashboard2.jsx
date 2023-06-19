import React from 'react'
import styles from './Dashboard2.module.css'
import { MdKeyboardArrowDown } from "react-icons/md"

const Dashboard2 = () => {

  return (
    <>
          <div className={styles.right_main_div}>

            <div className={styles.right_main_head}>
              <p>Crud</p>
            </div>

            <div className={styles.right_main_form}>
              <div className={styles.left}>
                <div>
                  <label htmlFor="">Barber ID</label>
                  <input type="text" />
                </div>

                <div>
                  <label htmlFor="">Salon ID</label>
                  <input type="text" />
                </div>

                <div>
                  <label htmlFor="">First Name</label>
                  <input type="text" />
                </div>

                <div>
                  <label htmlFor="">Last Name</label>
                  <input type="text" />
                </div>

                <div>
                  <label htmlFor="">Nick Name</label>
                  <input type="text" />
                </div>

                <div>
                  <label htmlFor="">Employee ID</label>
                  <input type="text" />
                </div>
              </div>

              <div className={styles.right}>

                <div>
                  <label htmlFor="">Email ID</label>
                  <input type="email" />
                </div>

                <div className={styles.salonid}>
                  <label htmlFor="">Salon ID</label>
                  <div className={styles.saloninput}>
                    <input type="text" placeholder='List'/>
                  
                  <div>
                    <MdKeyboardArrowDown/>
                  </div>
                  </div>
                </div>


                <div className={styles.btn_box}>
                  <button>
                    Submit
                  </button>

                  <button>
                    Cancel
                  </button>
                </div>

              </div>
            </div>
          </div>
    </>
  )
}

export default Dashboard2