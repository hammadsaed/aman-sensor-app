import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import governoratesData from './governoratesData';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
  },
  h1: {
    margin: '12px 0 32px 0',
  },
  governorateCard: {
    backgroundColor: '#ffffff',
    height: '100%',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.03)',
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleGovernorateClick = (governorateId) => {
    navigate(`/governorate/${governorateId}`);
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.h1}>Governorates of Oman</h1>
      <Grid container spacing={3}>
        {governoratesData.map((governorate) => (
          <Grid item xs={12} sm={6} md={4} key={governorate.id}>
            <Card className={classes.governorateCard} onClick={() => handleGovernorateClick(governorate.id)}>
              <CardContent>
                <h3>{governorate.name}</h3>
                <p>{governorate.details}</p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
