import { Button, Typography, Box,Avatar } from '@mui/material'
import React from 'react'
import Search from './Search'
import spt from './spt.png'

function Ma() {
  return (
    
   
    <Box sx={{display:"flex",bgcolor:'#F3F3F3 ', alignItems:"flex-start",justifyContent:'center',width:'100vw',height:'100vh'}}>
    <Box   sx={{ color:'black',p:'2vw',bgcolor:'#F3F3F3 ', display:"flex", alignItems:"flex-Start" ,justifyContent:"flex-start",flexDirection:"column"}}>
     <Box  sx={{  display:"flex", alignItems:"flex-start" ,justifyContent:"flex-start",flexDirection:"row"}}>
       <Avatar  alt='Spottabl' src={spt}  sx={{ width: '8vw' , height: '8vw'  }} variant="rounded"/>
       <Box sx={{pl:'1vw' , display:"flex",flexWrap:"wrap",flexDirection:'column'}}>
        <Typography   sx={{fontWeight:'bold',fontSize:'3.5vw',fontStyle:'sans serif'}} >YOUR SPOTTABL TEAM</Typography>
        <Typography  sx={{color:"#363233",fontSize:'1.5vw'}}>Spottabl supports you all throughout</Typography>
      </Box>
      </Box>
      <Box sx={{ p:'1.2vw', width:'65vw',bgcolor: 'white',mt:'2vw' ,borderRadius:'0.5rem',boxShadow:'1px 2px 5px #888888',height:'70vh'}}>
      <Typography   sx={{pd:'0.5rem',fontWeight:'bold',fontSize:'2.25vw'}} >Customer Success Managers</Typography>
      <Search/>
      <Box sx={{mt:'2vw',md:'0.1vw',border:'1px solid #dcdcdc',borderRadius:'.5rem',width:'61vw',height:'50vh',overflow:'scroll'}}>
      
      </Box>
      
      </Box>
  
   </Box>
   </Box>
     
     

    
     
    
  )
}

export default Ma
