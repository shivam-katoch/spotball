import { Button, Grid,Paper,Typography,Box ,Avatar,IconButton} from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';


function List({item,updateItem}) {

return (
  <> 
   <Grid container direction="column" style={{marginTop:'2rem'}}spacing={1}>
   {
     item.map((itfg)=>{
       return (
         
          <Box sx={{width:'auto',bgcolor:'rgba(255,255,255, 0.3)', display:'flex', flex:'wrap',alignItems:"center", justifyContent:'space-between',p:'0.5rem',color:'black'}}>

          <Box sx={{display:'flex'}}>

          <Avatar sx={{fontSize:'1.8vw',height:"5vw",width:"5vw",color:'black',fontWeight:'bold',bgcolor:'#C3B1E1'}}>{itfg.Name.toUpperCase()}</Avatar>
          <Box sx={{ pl:" 0.25rem"}}>  

          <Typography  sx={{ fontSize:'1.8vw',fontWeight:'bold'}}>{itfg.Name}</Typography>
          <Typography   sx={{fontSize:'1.1vw',font:'arial'}}>{itfg.Post.split('-')[0]}</Typography>
          </Box>
            
            </Box>
            <IconButton onClick={()=>item.filter((e)=>e.id!==tfg.id)} sx={{color:'#000C66',height:'3vw',width:'3vw'}}  aria-label="delete">
            <DeleteIcon />
            </IconButton>
            </Box>
          

         
      
       
    
   


       )
     })
   }
   </Grid>





   
    </>
  );
}

export default List
