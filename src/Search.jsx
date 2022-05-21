import { Button, Container, FormControl, TextField, Typography } from '@mui/material'
import { Autocomplete } from '@mui/material';
import React, { useState } from 'react'
import List from './List';
import { Data } from './Data';
import { Editable } from '@chakra-ui/react';
const Search = () => {
    const [text,setText]=useState("");
    const[item,updateItem]=useState([]);
    const handleChange=(e)=> {setText(e.target.value);};
   
    const addItem=()=>{
     updateItem([...item,{item:text,key :Date.now()}]);
     console.log(item);
     setText("");
    //  dfdf

    };
  return (
    <>
     <Container maxWidth="md">
     
     <FormControl fullWidth={true} >
         

         <Autocomplete
        multiple=true,
        id="tags-standard",
        options={Data},
        getOptionLabel={(item) => `${item.email}${item.Name}`},
        onChange={(event,value)=>updateItem(value)},
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
          <List item={item} updateItem={updateItem}/>
      </FormControl>
      
     </Container> 
    </>
  )
}

export default Search
