import React, { useState, useEffect } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdOutlineDateRange, MdOutlineNotificationsNone } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import { GrAdd } from "react-icons/gr"
import styles from './BarberListTable.module.css'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router'
import axios from 'axios'
import { ColorRing } from 'react-loader-spinner'

const DynamicDataTable = dynamic(() => import('react-data-table-component'), { ssr: false });

const BarberId = ({ barberid }) => {
    return (
        <>
            <div className={styles.BarberId}>
                <p>BarberID</p>
                <p>{barberid}</p>
            </div>
        </>
    )
}

const FirstName = ({ firstname }) => {
    return (
        <>
            <div className={styles.firstname}>
                <p>First Name</p>
                <p>{firstname}</p>
            </div>
        </>
    )
}

const LastName = ({ lastname }) => {
    return (
        <>
            <div className={styles.lastname}>
                <p>Last Name</p>
                <p>{lastname}</p>
            </div>
        </>
    )
}
const Photo = ({ user }) => {
    return (
        <>
            <div>
                <div className={styles.photo_box}>
                    <img src={user} alt="" />
                </div>
            </div>
        </>
    )
}

const Calender = ({ calender }) => {
    return (
        <>
            <div className={styles.date}>
                <div>
                    <MdOutlineDateRange />
                </div>
                <p>{calender}</p>
            </div>
        </>
    )
}

const Email = ({email}) => {
    return (
        <>
        <div className={styles.email}>
            <p>Email id</p>
            <p>{email}</p>
        </div>
        
        </>
    )
}

const SendMail = () => {
    return (
        <>
            <div className={styles.sendMail}>
                <div>
                    <AiOutlineMail />
                </div>
                <p>Send Mail</p>
            </div>
        </>
    )
}

const Notification = () => {
    return (
        <>
            <div className={styles.notification}>
                <MdOutlineNotificationsNone />
            </div>
        </>
    )
}

const Menu = () => {
    return (
        <>
            <div className={styles.menu}>
                <BsThreeDotsVertical />
            </div>
        </>
    )
}


const columns = [
    {
        cell: (row) => <BarberId barberid={row.BarberID} />
    },
    {
        cell: (row) => <FirstName firstname={row.FirstName} />
    },
    {
        cell: (row) => <LastName lastname={row.LastName} />
    },
    {
        cell: (row) => <Photo user={row.User} />
    },
    {
        cell: (row) => <Calender calender={row.Date} />,
        selector: row => row.Date,
    },
    {
        cell: (row) => <Email email={row.EmailID} />
    },
    {
        cell: () => <SendMail />
    },
    {
        cell: () => <Notification />
    },
    {
        cell: () => <Menu />
    },

];

const customStyles = {
    headCells: {
        style: {

        }
    },
    cells: {
        style: {
            fontSize: "18px"
        },
    },
};

const BarberListTable = () => {

    const [filter, setFilter] = useState("")
    const [apidata, setApidata] = useState([])
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const getApidata = async () => {
            const { data } = await axios.get("http://localhost:3004/barber")
            setApidata(data)
            setLoader(false)
        }
        getApidata()
    }, [])

    console.log(apidata)

    const router = useRouter()

    console.log(filter)
    const Tabledata = apidata.filter(
        (item) =>
        item.FirstName.toLowerCase().includes(filter.toLowerCase()) ||
        item.LastName.toLowerCase().includes(filter.toLowerCase()) ||
        item.Date.toLowerCase().includes(filter.toLowerCase())
        ).map((item) => {
        return {
            id: item.id,
            BarberID: item.BarberID,
            FirstName: item.FirstName,
            LastName: item.LastName,
            User: item.User,
            Date: item.Date,
            EmailID: item.EmailID,
        };
    })
    
    const addCustomer = () => {
        setLoader(true)
        router.push("/barber/barberform")
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <p>Barber Information</p>

                <div>
                    <div>
                        <input
                            type="text"
                            placeholder='Search'
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        />
                    </div>

                    <div onClick={addCustomer}>
                        <GrAdd />
                    </div>

                    <div>
                        <BsThreeDotsVertical />
                    </div>
                </div>
            </div>
            <div className="table" >
                {
                    loader ? (<ColorRing colors={["rgba(0,0,0,0.6)"]} />) : (<DynamicDataTable
                        columns={columns}
                        data={Tabledata}
                        customStyles={customStyles}
                        pagination
                        defaultSortFieldId={5}
                    />)
                }
                
            </div>
        </div>
    );
};

export default BarberListTable

