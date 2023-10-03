import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  accidentCountBar: {
    backgroundColor: 'red',
    color: 'white',
    padding: '8px 16px',
    position: 'sticky',
    top: 0,
    zIndex: 999,
    fontWeight: 'bold',
  },
}));

const AccidentCountBar = ({ accidentCount, governorateName }) => {
  const classes = useStyles();

  return (
    <div className={classes.accidentCountBar}>
      {accidentCount} accidents in {governorateName}!
    </div>
  );
};

export default AccidentCountBar;
