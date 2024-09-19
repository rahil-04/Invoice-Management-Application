import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root:{
    "& .MuiDialog-paper":{backgroundColor: '#385161',}
    
  },
});


export default function DeleteModal({open ,onClose,rowData,rowId,deleteData}){
  const classes = useStyles()
  
  const[sl_no,SetSl_no]=React.useState(0)
  
  React.useEffect(()=>{
    SetSl_no(rowId)
  },[rowData])
  
  const json_orb=`{
      "sl_no_arr":[${rowId}]
  }`

  if(!open) return null
  const handleSubmit = (e) => {
    e.preventDefault()
    deleteData(json_orb)
    SetSl_no(0)
    onClose()
  }  
  
    return(
        <div>
        <Dialog open={open} onClose={onClose} className={classes.root}>
          <DialogTitle style={{color:'white'}}><DeleteIcon style={{padding:'2px',transform:'translateY(4px)'}}/> Delete Records ?</DialogTitle>
          <DialogContent>
            <DialogContentText style={{color:'white'}}>
              Are you sure you want to delete these Record[s]?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit} style={{color:'white'}}>Delete</Button>
            <Button onClick={onClose} style={{color:'white'}}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
}