import { CardMedia, Paper, TableContainer } from "@mui/material";
import React from "react"
import { useEffect, useState } from "react"
import {Table, TableHead,TableRow,TableCell, TableBody} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Icon from "@mui/material/Icon";
import { green } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import IconButton from '@mui/material/IconButton';
import {Card, CardContent} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import axios from "axios";


export default function Home() {

    const[APIData, setAPIData] = useState([]);
    const getStaffsUrl = 'https://65490a2fdd8ebcd4ab241824.mockapi.io/lab7';


    useEffect(() => {
      axios.get(getStaffsUrl).then(
          response => {
              return response.data;
          })
          .then(data=>{setAPIData(data.sort((a,b)=>{return a.id - b.id}))}) 
          .catch(error=>console.log(error.message));
      
  },[])

    return(

        <div>

          
            <h1 className="font-pages">Home</h1>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {APIData.map((staff) => (
              <Grid item xs={3}>
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={staff.avatar}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link to={`detail/${staff.id}`}>
          <a>{staff.name}</a>
          </Link>
         
        </Typography>
        
        <Typography gutterBottom variant="h5" component="div">
          {staff.age}
        </Typography>
       
      </CardContent>
      <CardActions>
        <Link to= {`detail/${staff.id}`}>
        <Button size="small">Detail</Button>
        </Link>
       
      </CardActions>
    </Card>
  </Grid>


            ))}
            
            </Grid>

           
            
        </div>
    )
}