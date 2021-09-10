import React, { Component } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

class Aside extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: "column", flex: 1 }}>
                <h4 style={{ fontSize: 22, marginTop: 60, marginBottom: 40 }}>Category</h4>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="people"

                        />
                    }
                    label="People"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="premium"

                        />
                    }
                    label="Premium"
                /><FormControlLabel
                    control={
                        <Checkbox
                            name="pets"

                        />
                    }
                    label="Pets"
                /><FormControlLabel
                    control={
                        <Checkbox
                            name="food"

                        />
                    }
                    label="Food"
                /><FormControlLabel
                    control={
                        <Checkbox
                            name="landmarks"

                        />
                    }
                    label="LandMarks"
                /><FormControlLabel
                    control={
                        <Checkbox
                            name="cities"

                        />
                    }
                    label="Cities"
                /><FormControlLabel
                    control={
                        <Checkbox
                            name="nature"

                        />
                    }
                    label="Nature"
                />
                <div style={{ borderBottom: '1px solid #E4E4E4', height: 40 }} ></div>
                <h4 style={{ fontSize: 22, marginTop: 20, marginBottom: 40 }}>Price range</h4>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="lower"

                        />
                    }
                    label="Lower than $20"
                /><FormControlLabel
                    control={
                        <Checkbox
                            name="20a100"

                        />
                    }
                    label="$20 - $100"
                /><FormControlLabel
                    control={
                        <Checkbox
                            name="100a200"

                        />
                    }
                    label="$100 - $200"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="plus200"

                        />
                    }
                    label="More than $200"
                />
            </div>
        );
    }
}

export default Aside;