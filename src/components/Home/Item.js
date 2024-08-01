import { Paper, Button } from '@mui/material'

function Item({item})
{
    return (
        <Paper style={{background:'#221711'}}>
            <img src={item.image} alt="not found" style={{width:"100%",height:"55vh"}}/>
      {/*
            <Button className="CheckButton">
                Check it out!
            </Button>
    */}
        </Paper>
    )
}

export default Item;