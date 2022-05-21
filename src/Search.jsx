import { Button, Container, FormControl, TextField, Typography } from '@mui/material'
import { Autocomplete } from '@mui/material';
import React, { useState } from 'react'
import List from './List';
import { Data } from './Data';
import { Editable } from '@chakra-ui/react';
const Search = () => {
    
    const[item,updateItem]=useState([]);
    const [final,setFinal]=useState([]);
    const [id,setId]=useState(true);
 
    
    const addItem=()=>{
     setFinal([...final,...item]);
     setId(!id);

    };
  return (
    <>
     <Container maxWidth="md">
     
     <FormControl fullWidth={true} >
         

         <Autocomplete
        multiple
        id={id}
        options={Data}
        getOptionLabel={(item) => `${item.email}${item.Name}`}
        onChange={(event,value)=>updateItem(value)}
        renderInput={(params) => (
          <TextField

          {...params}
            variant="filled"
            placeholder="Enter name or email"
            
            
            
          />
        )}
      />

         
         <Button sx={{ fontSize:'1vw', height:'3.1vw',bgcolor:'#000C66',borderBottomLeftRadius:'0',display:'flex',borderTopLeftRadius:'0'}} onClick={addItem} variant='contained' color='info'>
           Add
          </Button>
          <List final={final} setFinal={setFinal}/>
      </FormControl>
      
     </Container> 
    </>
  )
}

export default Search
