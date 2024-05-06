import './App.css';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { colorTheme } from './theme';
import JobListing from './pages/JobListing/JobListing';

const theme = createTheme(colorTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <JobListing />
      </div>
    </ThemeProvider>
  );
}

export default App;
