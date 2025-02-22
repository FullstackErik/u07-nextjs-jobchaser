"use client";

import {Container} from '@mui/material';
import {Button} from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form"
import {TextField} from '@mui/material';

type Inputs = {
    username: string,
    email: string,
    password: string
}

export default function  SignIn() {
    
    const { register, handleSubmit, formState: { errors }} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <>
            <Container maxWidth="lg" disableGutters sx={{ display: "flex",justifyContent: "center", marginTop: 2 }}>
                <form onSubmit={() => {handleSubmit(onSubmit); }} style={{display: "flex", flexDirection: "column"}}>
                    <TextField {...register("username", { required: true })} variant="filled" label="Username" id='username' type='text'/>
                    <TextField {...register("password", { required: true })} variant='filled' label="Password" id='password' type='password'/>
                    <Button sx={{marginTop: 3}} variant='contained' type='submit'>Sign in</Button>
                </form>
            </Container>
        </>
    )
}