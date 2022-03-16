import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function CenteredGrid() {
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: "#f5f5f5",
            padding: 3,
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item>xs=12</Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>xs=6</Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>xs=2</Item>
                </Grid>
            </Grid>
        </Box>
    );
}
