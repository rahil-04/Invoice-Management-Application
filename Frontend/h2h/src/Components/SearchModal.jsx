import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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

export default function SearchModal({open ,children,onClose,advSearch}) {

    const classes = useStyles()

    const[docID,setDocID] = React.useState("")
    const[custNum,setCustNum] = React.useState("")
    const[invId,setInvId] = React.useState("")
    const[busiYear,setBusiYear] = React.useState("")

    
    if(!open) return null

    const handleSubmit = (e) => {
        e.preventDefault()
        advSearch(docID,custNum,invId,busiYear)
        onClose()
    }

  return (
    <div>
      <Dialog open={open} onClose={onClose} className={classes.root}>
        <DialogTitle style={{color:'white'}}><SearchIcon style={{padding:'2px',transform:'translateY(5px)'}}/> Advance Search</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {children}
          </DialogContentText>
          <form className='SearchModal'>
          <TextField
            autoFocus
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            id="doc_id"
            label="Document ID"
            type="text"
            fullWidth
            variant="standard"
            name='doc_id'
            value={docID}
            onChange={(e)=> setDocID(e.target.value)}
          />
          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            id="inv_id"
            label="Invoice ID"
            type="text"
            fullWidth
            variant="standard"
            name='inv_id'
            value={invId}
            onChange={(e)=> setInvId(e.target.value)}
          />
          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            id="cust_num"
            label="Customer Number"
            type="text"
            fullWidth
            variant="standard"
            name='cust_num'
            value={custNum}
            onChange={(e)=> setCustNum(e.target.value)}
          />
          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            id="busi_year"
            label="Business Year"
            type="text"
            fullWidth
            variant="standard"
            name='busi_year'
            value={busiYear}
            onChange={(e)=> setBusiYear(e.target.value)}
          />
          </form> 
       </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} style={{color:'white'}}>Submit</Button>
          <Button onClick={onClose} style={{color:'white'}}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
