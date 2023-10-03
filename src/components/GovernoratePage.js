import React from 'react';
import { useParams } from 'react-router-dom';
import governoratesData from './governoratesData';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  governoratePage: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    minHeight: 'calc(100vh - 140px)',
  },
  governorateName: {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '12px 0 32px 0',
  },
  mapContainer: {
    width: '100%',
    height: '400px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
}));

const GovernoratePage = () => {
  const { id } = useParams();
  const classes = useStyles();

  const selectedGovernorate = governoratesData.find(
    (governorate) => governorate.id === parseInt(id)
  );

  if (!selectedGovernorate) {
    return <div>Governorate not found.</div>;
  }

  return (
    <div className={classes.governoratePage}>
      <h1 className={classes.governorateName}>{selectedGovernorate.name}</h1>
      <div className={classes.mapContainer}>
        <iframe src={selectedGovernorate.location} style={{ width: "100%", height: "100%", border: "0px" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Governorate Map'></iframe>
      </div>
    </div>
  );
};

export default GovernoratePage;
