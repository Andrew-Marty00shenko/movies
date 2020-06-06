import React from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core'

export default function CustomizedRatings() {
    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating
                    name="customized-empty"
                    defaultValue={0}
                    max={10}
                    precision={0.5}
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                /> <br />
                <Button type="submit" variant="contained" color="primary" style={{ fontSize: "10px", height: "30px" }}>Отправить</Button>
            </Box>
        </div>
    );
}
