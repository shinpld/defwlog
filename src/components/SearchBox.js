import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));



const SearchBox =({searchfield, searchChange}) =>{
  const classes = useStyles();

  return (
    <div className="pa2 ">
      
       <TextField id="filled-search" label="Search field"  type="search" variant="filled" onChange={searchChange} />
  
    </div>
  );
}

export default SearchBox;
