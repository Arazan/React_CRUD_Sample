import React, { Fragment } from 'react';
//import Grid from '@material-ui/core/Grid';
import { Paper, Typography, List, ListItem, ListItemText, Grid } from '@material-ui/core';
//import List from '@material-ui/core/List';
//import ListItem from '@material-ui/core/ListItem';


const styles = {
    Paper: { padding: 20, margin: 10, marginTop: 10, marginBottom: 10, height:500, overflowY:'auto'}
}

export default ({ exercises }) =>
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) =>
                    <Fragment>
                        <Typography
                            variant="h5"
                            style={{ textTransform: 'capitalize' }}
                        >
                            {group}
                        </Typography>
                        <List component="ul">
                            {exercises.map(({title}) =>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            )}
                        </List>
                    </Fragment>
                )}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography variant="h3">
                    Welcome!
                </Typography>
                <Typography 
                    variant="body1"
                    style={{marginTop:20}}>
                    Please select exercises from the list on the left.
                </Typography>
            </Paper>
        </Grid>
    </Grid>