import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import MenuItem from '@material-ui/core/MenuItem';

import {base,db} from '../containers/Base.js';


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
    width: 600,
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



export default function CreateButton() {

  const classes = useStyles();
  const classesG = useGridStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render


  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [circuit, setCircuit] = React.useState('User');
  const [detailtext, setDetailtext] = React.useState('');
  const [type, setType] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSelectChange = (event) => {
    setCircuit(event.target.value);
  };
  const handleDetailChange = (event) => {
    setDetailtext(event.target.value);
  };
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const handleClose = () => {
    setOpen(false);
  };
  const generateLog2= () =>{ 
    // Changing state 

    var immediatelyAvailableReference = base.push('messages', {
      data: 
        {message: `msdasdsad ${circuit} ${detailtext} sasd`,
        circuit: `${circuit}`,
        
        reason: 'reason1' },
      then(err){
        if(!err){
         
        }
      }
    });
    //available immediately, you don't have to wait for the callback to be called
    var generatedKey = immediatelyAvailableReference.key;
    
  } 
  

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Add new log </h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
        
        <div className={classesG.root}>
            <Grid container spacing={3}>
                
                <Grid item xs={12} sm={6}>
                    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                    </MuiPickersUtilsProvider> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                <Paper className={classesG.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <TextField
                        id="fill-Type"
                        select
                        label="Select"
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
                            label="Select"
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
                    
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Button variant="contained" color="secondary" onClick={()=>{ generateLog2(); handleClose(); }} >
                        Publish 
                    </Button>
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        id="outlined-multiline-static"
                        label="ข้อความ"
                        multiline
                        rows={4}
                        defaultValue=""
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
      <Button variant="contained" color="secondary" onClick={handleOpen }>
        Create Log
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
