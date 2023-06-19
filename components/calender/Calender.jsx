// import React from 'react'
// import styles from "./Calender.module.css"
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';



// import { styled } from '@mui/material/styles';

// import { StaticDatePicker } from '@mui/x-date-pickers';

// const CustomStaticDatePicker = styled(StaticDatePicker)`
//   color: #20b2aa;
//   width: 300px !important;

//   :hover {
//     color: #2e8b57;
//   }

// `;

// const Calender = () => {
//   return (
//     <>
//      <LocalizationProvider dateAdapter={AdapterDayjs}>

//       <CustomStaticDatePicker/>      
//     </LocalizationProvider>
//     </>
//   )
// }

// export default Calender

// import React from 'react'
// import styles from "./Calender.module.css"

// const Calender = () => {
//   return (
//     <div className={styles.calender}>Calender</div>
//   )
// }

// export default Calender


// import React from 'react'
// import { DayPicker } from 'react-day-picker';
// import 'react-day-picker/dist/style.css';

// const Calender = () => {
//   return (
//     <div style={{width:"150px"}}>
//       <DayPicker
//       max={4}
//       modifiersStyles={{
//         disabled: { fontSize: '75%' ,width: '200px'}
//       }}
//       />
//     </div>
//   )
// }

// export default Calender

import React from 'react'
import { Group } from '@mantine/core';
import { Calendar } from '@mantine/dates';

const Calender = () => {
  return (
    <>
    <Group position="center">
      <Calendar />
    </Group>
    </>
  )
}

export default Calender

