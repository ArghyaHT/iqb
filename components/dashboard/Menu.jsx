import React, { useState } from 'react'
import styles from './Menu.module.css'
import { GoTriangleDown } from 'react-icons/go'
import { GoTriangleUp } from 'react-icons/go'

const Menu = ({ menu_logo, menu_title,category}) => {

    const [dropdown, setDropdown] = useState(false)
    return (
        <>
            <div className={styles.menu}>
                <div>
                    <div>
                        {menu_logo}
                    </div>

                    <p>{menu_title}</p>
                </div>

                <div onClick={(e) => setDropdown(!dropdown)}>
                    {dropdown ? <GoTriangleUp /> : <GoTriangleDown />}
                </div>
            </div>
            {/* Dropdown_category */}
            {dropdown ? (<div className={styles.menu_category}>
                {category.map((item) => {
                    return(
                        <>
                        <div>
                        <div>{item.list_logo}</div>
                        <p>{item.list}</p>
                        </div>

                        <div>
                        <div>{item.message_logo}</div>
                        <p>{item.message_title}</p>
                        </div>
                        
                        </>
                    )
                })}
            </div>) : null}
        </>
    )
}

export default Menu