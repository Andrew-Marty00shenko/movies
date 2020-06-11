import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core'
import Axios from 'axios';
import { getSession } from '../../API/API';

export default function CustomizedRatings({ api_key, movieId }) {

    const [value, setValue] = useState(null);
    const [load, setLoad] = useState(false);
    const [send, setSend] = useState(true);

    const handleChange = e => {
        setValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        getSession().then(guest_session => {
            setLoad(true)
            Axios.post(`https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${api_key}&guest_session_id=${guest_session}`, { value }, {
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }).then(res => {
                setLoad(false);
                setTimeout(() => setSend(false), 500);
            })
        })
    }

    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <form onSubmit={handleSubmit}>
                    <Rating
                        name="customized-empty"
                        onChange={handleChange}
                        value={value}
                        defaultValue={0}
                        max={10}
                        precision={0.5}
                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    />
                    <br />
                    {send ?
                        <Button type="submit"
                            variant="contained"
                            color="primary"
                            disabled={load}
                            style={{ fontSize: "10px", height: "30px" }}
                        >{load ? "...Отправка" : "Отправить"}
                        </Button>
                        :
                        <p>Ваш отзыв отправлен</p>
                    }
                </form>
            </Box>
        </div>
    );
}
