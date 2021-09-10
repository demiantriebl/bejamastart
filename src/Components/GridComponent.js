import React, { Component } from 'react';
import GridTile from './GridTile';
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';

class GridComponent extends Component {
    render() {
        return (
            <>
            
                <Grid container spacing={{ md: 3 }} columns={{ xs: 1, sm: 4, md: 12 }}>
                  
                </Grid>


            </>
        );
    }
}

export default GridComponent;