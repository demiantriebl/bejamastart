import React, { Component } from 'react';
import TopGrid from './TopGrid';
import './Grid.css'
import GridTile from './GridTile';
import Aside from './Aside';
import { Grid, Hidden } from '@material-ui/core';
import Pagination from '@mui/material/Pagination';


class GridC extends Component {
    render() {
        return (
            <Grid container spacing={2} >
                <TopGrid />
                <Hidden xsDown >
                    <Grid item columns={{xs:0 , sm:1}}>
                        <Aside />
                    </Grid >
                </Hidden>
                    {Array.from(Array(6)).map((_, index) => (
                            <Grid item xs={1} sm={1} md={1} key={index}>
                                <GridTile />
                            </Grid>
                        ))}
                <Pagination count={4} size="large" style={{ width: '100%', justifyContent: 'center', display: 'flex', margin: 20 }} />

            </Grid>
        );
    }
}

export default GridC;