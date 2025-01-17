import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MainSection from './MainSection';
import Navigation from './Navigation';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
  width: '100%',
}));

const MainContainer = () => (
  <Box
    sx={{
      flexGrow: 1, width: '100%', height: '100vh', overflow: 'hidden', display: 'flex',
    }}
  >
    <Grid item container spacing={0} columns={16}>
      <Grid item lg={4} md={4} xs={0} sx={{ display: { xs: 'block', lg: 'block' } }}>
        <Item><Navigation /></Item>
      </Grid>
      <Grid item lg={12} md={12} xs={16}>
        <Item><MainSection /></Item>
      </Grid>
    </Grid>
  </Box>
);

export default MainContainer;
