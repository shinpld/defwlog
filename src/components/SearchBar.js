import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

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

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields(props) {
  const classes = useStyles();
  const [circuit, setCircuit] = React.useState('');

  const handleChange = (event) => {
    setCircuit(event.target.value);
    props.circuitChange(event);

  };

  return (
    <form className={classes.root} noValidate autoComplete="off">

      <div className="pt2">
        <TextField
          id="filled-select-currency"
          select
          label="circ"
          value={circuit}
          onChange={handleChange}
        //   helperText="Please select your currency"
          variant="filled"
        >
          {circuits.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

      </div>
      
    </form>
  );
}