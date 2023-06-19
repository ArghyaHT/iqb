import React from 'react'
import styles from './CustomerForm.module.css'
import { MdKeyboardArrowDown } from "react-icons/md"

const CustomerForm = () => {
  return (
    <>
    <div className={styles.right_main_div}>

      <div className={styles.right_main_head}>
        <p>Crud</p>
      </div>

      <div className={styles.right_main_form}>
        <div className={styles.left}>
          <div>
            <label htmlFor="">Customer ID</label>
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

export default CustomerForm