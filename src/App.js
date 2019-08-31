import React from 'react';
import {Grid} from '@material-UI/core';

import youtube from '../src/api/youtube';

class App extends React.Component{
    render(){
        return(
            <Grid justify="center" container spacing={16}>
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            {/* {Search bar} */}
                        </Grid>

                        <Grid item xs={8}>
                            {/* {Video details} */}
                        </Grid>

                        <Grid item xs={4}>
                            {/* {video list} */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
};


export default App;


