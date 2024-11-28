import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function StudentInput() {
    const paperStyle={padding: '50px 20px', width:600, margin:'20px auto'}
    const[name, setName]=useState('')
    const[address, setAddress]=useState('')
    const[students, setStudents]=useState([])

    const handleClick=(e)=>{
        e.preventDefault()
        const student={name, address}
        console.log(student)
        
        fetch("http://localhost:8080/student/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=>{
            console.log("New Student added")
        })
    }

    useEffect(() => {
        fetch("http://localhost:8080/student/getAll")
            .then(res => res.json())
            .then(result => {
                setStudents(result);
            })
    }, [])

  return (
    <Container>
        
        <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        >
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{color:"blue"}}>Add Student</h1>
            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth={true} value={name} onChange={(e)=>setName(e.target.value)} sx={{ marginBottom: 2 }}/>  
            <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth={true} value={address} onChange={(e)=>setAddress(e.target.value)} sx={{ marginBottom: 2 }}/>

            <Button variant="contained" onClick={handleClick}>submit</Button>

            </Paper>

            
        <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"blue"}}>Students</h1>
            {students.map(student=>(
                <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"Left"}} key={student.id}>
                    ID: {student.id} <br/>
                    Name: {student.name} <br/>
                    Address: {student.address} <br/>
                </Paper>
            ))}

        </Paper>
        </Box>
    </Container>
  );
}
