import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import MenuItem from '@material-ui/core/MenuItem';

import {base,db} from '../containers/Base.js';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';



function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '60%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const useGridStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const circuits = [
  {
    value: 'User',
    label: 'User',
  },
  {
    value: 'Intranet',
    label: 'Intranet',
  },
  {
    value: 'Internet',
    label: 'Internet',
  },
  {
    value: 'Safety',
    label: 'Safety',
  },
];

const types = [
    {
      value: 'Policy',
      label: 'Policy',
    },
    {
      value: 'Interface',
      label: 'Interface',
    },
    {
      value: 'Route',
      label: 'Route',
    },
    {
      value: 'Other',
      label: 'Other',
    },
  ];
const users = [
    {
      value: 'Policy',
      label: 'Policy',
    },
    {
      value: 'Interface',
      label: 'Interface',
    },
    {
      value: 'Route',
      label: 'Route',
    },
    {
      value: 'Other',
      label: 'Other',
    },
  ];
const names = [
  {
    value: 'AUTTAPHUD',
    label: 'AUTTAPHUD',
  },
  {
    value: 'BOONAUM',
    label: 'BOONAUM',
  },
  {
    value: 'CHANAKARN',
    label: 'CHANAKARN',
  },
  {
    value: 'JESADA',
    label: 'JESADA',
  },
];


export default function EditModal({Emessage,Ecircuit,Etype,EsubmitDate,Eky,Ename,Ereason,Epno}) {

  const classes = useStyles();
  const classesG = useGridStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [circuit, setCircuit] = React.useState(Ecircuit);
  const [detailtext, setDetailtext] = React.useState(Emessage);
  const [type, setType] = React.useState(Etype);
  const [selectedDate, setSelectedDate] = React.useState(new Date('2019-08-18T21:11:54'));
  const [name,setName] =  React.useState(Ename);
  const [pno,setPno] = React.useState(Epno);
  const [reason,setReason] = React.useState(Ereason);


  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSelectChange = (event) => {
    setCircuit(event.target.value);
  };
  const handleDetailChange = (event) => {
    setDetailtext(event.target.value);
  };
  const handleTypeChange = (event) => {
    setType(event.target.value); 
     if(type !== 'policy'){
      setPno('');
      }
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePnoChange = (event) => {
    setName(event.target.value);
  };
  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };
  


  const editLog2= () =>{ 
    // Changing state 


    base.update(`messages/${Eky}`, {
       data: 
        {message: ` ${detailtext}  ตรงกันข้ามกับความเชื่อที่นิยมกัน Lorem Ipsum ไม่ได้เป็นเพียงแค่ชุดตัวอักษรที่สุ่มขึ้นมามั่วๆ แต่หากมีที่มาจากวรรณกรรมละตินคลาสสิกชิ้นหนึ่งในยุค 45 ปีก่อนคริสตศักราช ทำให้มันมีอายุถึงกว่า 2000 ปีเลยทีเดียว ริชาร์ด แมคคลินท็อค ศาสตราจารย์ชาวละติน จากวิทยาลัยแฮมพ์เด็น-ซิดนีย์ ในรัฐเวอร์จิเนียร์ นำคำภาษาละตินคำว่า consectetur ซึ่งหาคำแปลไม่ได้จาก Lorem Ipsum ตอนหนึ่งมาค้นเพิ่มเติม โดยตรวจเทียบกับแหล่งอ้างอิงต่างๆ ในวรรณกรรมคลาสสิก และค้นพบแหล่งข้อมูลที่ไร้ข้อกังขาว่า Lorem Ipsum`,
        circuit: `${circuit}`,
        type: `${type}`,
        submitDate: `${selectedDate}`,
        name: `${name}`,
        pno:`${pno}`,
        reason: `${reason}` },
      then(err){
        if(!err){
         
        }
      }
    });
    
  } 
  

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Add new log </h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
        
        <div className={classesG.root}>
            <Grid container spacing={3} alignItems="center">
                
                <Grid item xs={12} sm={6} >
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="วันที่"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="เวลา"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                            />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <TextField
                        id="fill-Type"
                        select
                        label="Firewall"
                        value={circuit}
                        onChange={handleSelectChange}
                        helperText=""
                        variant="filled"
                        className="w-100"
                        >
                        {circuits.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                </Grid>
                <Grid item xs={6} sm={3}>
                   
                    <TextField
                            id="fill-Circuit"
                            select
                            label="ประเภท"
                            value={type}
                            onChange={handleTypeChange}
                            helperText=""
                            variant="filled"
                            className="w-100"

                            >
                            {types.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                     </TextField>
                 
                </Grid>
                
                <Grid item xs={6} sm={3}>
                    {type === 'Policy' && 
                        <TextField id="filled-search" 
                                    label="Policy No."  
                                    type="search" 
                                    value = {pno}
                                    variant="filled" 
                                    onChange={handlePnoChange} />
                    
                    }
                    
                </Grid>
                <Grid item xs={6} sm={3}>

                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        id="outlined-multiline-static"
                        label="สาเหตุ"
                        multiline
                        rows={2}
                        defaultValue={Ereason}
                        variant="outlined"
                        onChange={handleReasonChange}
                        className="w-100"
                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                      <TextField
                        id="fill-Type"
                        select
                        label="ผู้บันทึก"
                        value={name}
                        onChange={handleNameChange}
                        helperText=""
                        variant="filled"
                        className="w-100"
                        >
                        {names.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                      </TextField>
                </Grid>

                <Grid item xs={6} sm={3}>
                    <Button variant="contained" color="secondary" onClick={()=>{ editLog2(); handleClose(); }} >
                        Publish 
                    </Button>
                </Grid>


                <Grid item xs={12}>
                    <TextField
                        id="outlined-multiline-static"
                        label="ข้อความ"
                        multiline
                        rows={4}
                        defaultValue={Emessage}
                        variant="outlined"
                        onChange={handleDetailChange}
                        className="w-100"
                    />
                </Grid>

            </Grid>
        </div>
    </div>
  );





  return (
    <div>
      <Button variant="contained" size="small" color="secondary" onClick={handleOpen }>
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}


      </Modal>
    </div>
  );
}
