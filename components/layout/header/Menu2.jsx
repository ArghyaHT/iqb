import React, { useContext, useState } from 'react'
import styles from './Menu2.module.css'
import { GoTriangleDown } from 'react-icons/go'
import { GoTriangleUp } from 'react-icons/go'
import { DropdownContext } from '@/context/DropdownContext'
import Link from 'next/link'


const Menu2 = ({ menu_logo, menu_title,category,menu_link}) => {

    const [dropdown,setDropdown] = useState(false)

    return (
        <>
            <div className={styles.menu}
            onClick={(e) => setDropdown(!dropdown)}
            >
                <div>
                    <div>
                        {menu_logo}
                    </div>

                    <p>{menu_title}</p>
                </div>

                <div>
                    {dropdown ? <GoTriangleUp /> : <GoTriangleDown />}
                </div>
            </div>
            {/* Dropdown_category */}
            {dropdown ? (<div className={styles.menu_category}>
                {category.map((item) => {
                    return(
                        <>
                        <div style={{marginTop:"10px"}}>
                        <div>{item.list_logo}</div>
                        <Link href={`${menu_link}`} style={{color:"black",textDecoration:"none"}}><p>{item.list}</p></Link>
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

export default Menu2