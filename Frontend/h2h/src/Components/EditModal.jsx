import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
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


export default function EditModal({open ,onClose,rowData,rowId,editData}) {
    
    const classes = useStyles()

    const[invoice_currency,setInvCur]=React.useState("")
    const[cust_payment_terms,setCustPayTerms]=React.useState("")
    const[sl_no,SetSl_no]=React.useState(0)
    
    React.useEffect(()=>{
      SetSl_no(rowId[0])
      setInvCur(rowData.invoice_currency)
      setCustPayTerms(rowData.cust_payment_terms)
    },[rowData])

    if(!open) return null
    

    const handleSubmit = (e) => {
      //e.preventDefault()
      editData({cust_payment_terms,invoice_currency,sl_no})
      setCustPayTerms("")
      setInvCur("")
      SetSl_no(0)
      onClose()
    }

    
    return(
        <div>
      <Dialog open={open} onClose={onClose} className={classes.root}>
        <DialogTitle style={{color:'white'}}><EditIcon style={{padding:'3px',transform:'translateY(4px)'}}/> Edit Data</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <form className='EditModal'>
          <TextField
            style={{backgroundColor:'white',borderRadius:'3px'}}
            autoFocus
            margin="dense"
            id="invoice_currency"
            label="Invoice Currency"
            type="text"
            fullWidth
            variant="standard"
            name='invoice_currency'
            value={invoice_currency}
            //defaultValue={rowData.invoice_currency} 
            onChange={(e)=> setInvCur(e.target.value)}
          />
          <TextField
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            id="cust_payment_terms"
            label="Customer Payment Terms"
            type="text"
            fullWidth
            variant="standard"
            name='cust_payment_terms'
            value={cust_payment_terms}
            //defaultValue={rowData.cust_payment_terms}
            onChange={(e)=> setCustPayTerms(e.target.value)}
          />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{handleSubmit()}} style={{color:'white'}}>Submit</Button>
          <Button onClick={onClose} style={{color:'white'}}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}