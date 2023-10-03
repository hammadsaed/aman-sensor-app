import React from 'react';
import { useParams } from 'react-router-dom';
import governoratesData from './governoratesData';
import { makeStyles } from '@mui/styles';
import AccidentCountBar from './AccidentCountBar';

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
  accidentsContainer: {
    margin: '32px 0',
  },
  accidentsHeading: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#ff0000', // Red color for alarming
  },
  accidentCard: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '16px',
    marginBottom: '16px',
  },
  accidentDetails: {
    fontSize: '1rem',
    marginBottom: '8px',
  },
  accidentMap: {
    width: '100%',
    height: '200px',
    borderRadius: '8px',
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
      <AccidentCountBar accidentCount={selectedGovernorate?.accidents?.length || 0} governorateName={selectedGovernorate.name} />
      <h1 className={classes.governorateName}>{selectedGovernorate.name}</h1>
      <div className={classes.mapContainer}>
        <iframe
          src={selectedGovernorate.location}
          style={{ width: '100%', height: '100%', border: '0px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title='Governorate Map'
        ></iframe>
      </div>

      {selectedGovernorate?.accidents?.length > 0 &&
        <div className={classes.accidentsContainer}>
          <h2 className={classes.accidentsHeading}>Accidents</h2>
          {selectedGovernorate?.accidents?.map((accident, index) => (
            <div className={classes.accidentCard} key={index}>
              <h3 className={classes.accidentDetails}>Accident Details</h3>
              <p className={classes.accidentDetails}>Person: {accident.person}</p>
              <p className={classes.accidentDetails}>Car: {accident.car}</p>
              <p className={classes.accidentDetails}>Location</p>
              <div className={classes.accidentMap}>
                <iframe
                  src={accident.location}
                  style={{ width: '100%', height: '100%', border: '0px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title='Accident Location'
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default GovernoratePage;
