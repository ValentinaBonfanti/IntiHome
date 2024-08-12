import { Paper, Button, Box } from '@mui/material'

function Item({item})
{
    return (
        <Box style={{background:'#221711'}}>
            
            {
            item.title === 'foto' ? (
          <img src={item.image} alt="not found" style={{width:"100%",height:"60vh"}}/>   
            ) :
            (<video controls style={{ width: '100%' }}>
                <source src={item.image} type="video/mp4" />
                Your browser does not support the video tag.
            </video>)
            }
        </Box>
    )
}

export default Item;