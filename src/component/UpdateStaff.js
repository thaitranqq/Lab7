
import { useFormik } from "formik";
import * as Yup from 'yup';
import { TextField, Button } from "@mui/material";
import * as React from 'react';
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import DialogActions from "@mui/material/DialogActions";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function UpdateStaff() {
    const staff = useParams();

    const [open, setOpen] = useState(false);

    const [APIData, setAPIData] = useState([]);
    const getStaffsUrl = `https://6544fc285a0b4b04436d62d4.mockapi.io/staffManagement/${staff.id}`;

    useEffect(() => {
        axios.get(getStaffsUrl).then(
            response => {
                
                return response.data;
            })
            .then(data => { setAPIData(data) })
            .catch(error => console.log(error.message));

    }, [getStaffsUrl])
    const handleClose = () => {
        setOpen(false);
    };
    const putStaffUrl = `https://6544fc285a0b4b04436d62d4.mockapi.io/staffManagement/${staff.id}`;
    const currDate = new Date();

    

    const formik = useFormik({

        enableReinitialize:true,
        
        initialValues: APIData,

        

        // values : {APIData},

        onSubmit: (values) => {
            values.createdAt = new Date(values.createdAt);
            axios.put(putStaffUrl, values)
                .then(
                    response => {
                        return response.data;
                    })
                .then(data => setOpen(true))
                .catch(error => console.log(error.message));

        },

        validationSchema: Yup.object({
            name: Yup.string().required("Required.").min(3, "Must be more 2 characters"),
            
            age: Yup.number().integer().required("Required.").typeError("Please enter a valid number"),
            avatar: Yup.string().url().required("Required.").typeError("Please enter a valid url"),
            
        }),

    });

    return (
        <div>
            <h1 className="font-pages">Update staff</h1>

            <form onSubmit={formik.handleSubmit}>
                <Stack spacing={2}>
                    <TextField
                        label="Name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.name}</Typography>)}
                    
                    
                    <TextField
                        label="age"
                        name="age"
                        value={formik.values.age}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.age && (<Typography variant="caption" color="red">{formik.errors.age}</Typography>)}

                    <TextField
                        label="avatar"
                        name="avatar"
                        value={formik.values.avatar}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.avatar && (<Typography variant="caption" color="red">{formik.errors.avatar}</Typography>)}

                    



                </Stack>

                <Button variant="contained" size="small"
                    type='submit'>
                    Save
                </Button>

            </form>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Congraturation"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Alert severity="success">
                            <AlertTitle>Adding successful!</AlertTitle>
                        </Alert>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button><Link to='/dashboard/no' style={{ textDecoration: "none" }}>Dashboard</Link></Button>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>



        </div>


    )
}