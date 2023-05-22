import {RiDashboardFill} from 'react-icons/ri'
import {ImUserPlus} from 'react-icons/im'
import {RiScissors2Fill} from 'react-icons/ri'
import {GiPieChart} from 'react-icons/gi'
import {FaCalendarAlt} from 'react-icons/fa'
import { BsCheckCircle } from 'react-icons/bs'
import { TbMessageCircle } from 'react-icons/tb'

export const menudata = [
    {
        id: 1,
        menu_logo: <RiDashboardFill/>,
        menu_title: "Dashboard",
        category: [
          {
            id: 1,
            list_logo: <BsCheckCircle />,
            list: "List",
            message_logo: <TbMessageCircle />,
            message_title: "Send mail / Notification"
         }
        ]
    },
    {
        id: 2,
        menu_logo: <ImUserPlus/>,
        menu_title: "Barber",
        category: [
          {
            id: 2,
            list_logo: <BsCheckCircle />,
            list: "List",
            message_logo: <TbMessageCircle />,
            message_title: "Send mail / Notification"
         }
        ]
    },
    {
        id: 3,
        menu_logo: <RiScissors2Fill/>,
        menu_title: "Salon",
        category: [
          {
            id: 3,
            list_logo: <BsCheckCircle />,
            list: "List",
            message_logo: <TbMessageCircle />,
            message_title: "Send mail / Notification"
         }
        ]
    },
    {
        id: 4,
        menu_logo: <RiDashboardFill/>,
        menu_title: "Need to Fill",
        category: [
          {
            id: 4,
            list_logo: <BsCheckCircle />,
            list: "List",
            message_logo: <TbMessageCircle />,
            message_title: "Send mail / Notification"
         }
        ]
    },
    {
        id: 5,
        menu_logo: <GiPieChart/>,
        menu_title: "Reports",
        category: [
          {
            id: 5,
            list_logo: <BsCheckCircle />,
            list: "List",
            message_logo: <TbMessageCircle />,
            message_title: "Send mail / Notification"
         }
        ]
    },
    {
        id: 6,
        menu_logo: <FaCalendarAlt/>,
        menu_title: "Calender",
        category: [
          {
            id: 6,
            list_logo: <BsCheckCircle />,
            list: "List",
            message_logo: <TbMessageCircle />,
            message_title: "Send mail / Notification"
         }
        ]
    },
    {
        id: 7,
        menu_logo: <RiDashboardFill/>,
        menu_title: "7th",
        category: [
          {
            id: 7,
            list_logo: <BsCheckCircle />,
            list: "List",
            message_logo: <TbMessageCircle />,
            message_title: "Send mail / Notification"
         }
        ]
    },
]

  