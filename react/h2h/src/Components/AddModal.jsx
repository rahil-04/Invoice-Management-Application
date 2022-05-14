import React from 'react';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root:{
    "& .MuiDialog-paper":{backgroundColor: '#385161'},
    "& .MuiDialog-paperWidthLg":{maxWidth:"lg"},
    "& .MuiTextField-root":{backgroundColor:'white'},
    "& .MuiOutlinedInput-notchedOutline": {border: 'none'},
  },
});

export default function AddModal({open ,onClose,addData}) {
    
  const classes = useStyles()
  const theme = useTheme();
  //const [fullWidth, setFullWidth] = React.useState(true);
  //const [maxWidth, setMaxWidth] = React.useState('sm');
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


  const[business_code,setBusiCode] = React.useState("")
  const[cust_number,setCustNum] = React.useState("")
  const[clear_date,setClearDate] = React.useState("")
  const[buisness_year,setBusiYear] = React.useState("")
  const[doc_id,setDocId] = React.useState("")

  const[posting_date,setPostDate] = React.useState("")
  const[document_create_date,setDocCreateDate] = React.useState("")
  const[due_in_date,setDueDate] = React.useState("")
  const[invoice_currency,setInvCur] = React.useState("")
  const[document_type,setDocType] = React.useState("")

  const[posting_id,setPostId] = React.useState("")
  const[total_open_amount,setTotOpenAmt] = React.useState("")
  const[baseline_create_date,setBaseCreateDate] = React.useState("")
  const[cust_payment_terms,setCustPayTerms] = React.useState("")
  const[invoice_id,setInvId] = React.useState("")
  

  if(!open) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    addData({business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id})
    onClose()
}

    return(
        <div>
      <Dialog open={open} onClose={onClose} className={classes.root} maxWidth='xl'>
        <DialogTitle style={{color:'white'}}><AddCircleOutlineSharpIcon style={{padding:'2px',transform:'translateY(4px)'}}/> Add Data</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <form className='AddModal'
            noValidate>
          <TextField
            autoFocus
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            required
            id="business_code"
            label="Business Code"
            type="text"
            fullWidth
            variant="standard"
            name='business_code'
            value={business_code}
            onChange={(e)=> setBusiCode(e.target.value)}
          />
          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            required
            id="cust_number"
            label="Customer Number"
            type="text"
            fullWidth
            variant="standard"
            name='cust_number'
            value={cust_number}
            onChange={(e)=> setCustNum(e.target.value)}
          />
          {/* <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            placeholder=" "
            id="clear_date"
            label="Clear Date" 
            type="date"
            fullWidth
            variant="standard"
            name='clear_date'
            value={clear_date}
            onChange={(e)=> setClearDate(e.target.value)}
          /> */}

          <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Clear Date"
                  value={clear_date}
                  required
                  inputFormat="yyyy-mm-dd"
                  mask={"____-__-__"}
                  minDate={new Date()}
                  onChange={(newValue) => {
                    setClearDate(newValue.toISOString().split("T")[0]);
                  }}
                  style={{ color: "white" }}
                  renderInput={(params) => (
          
                    <TextField
                      {...params}
                      error={false}
                      required
                      variant="standard"
                      margin="dense"
                      style={{ borderRadius: "2px"}}
                      className={classes.root}
                    />
      
                  )}
                />
          </LocalizationProvider>

          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            required
            id="buisness_year"
            label="Business Year"
            type="text"
            fullWidth
            variant="standard"
            name='buisness_year'
            value={buisness_year}
            onChange={(e)=> setBusiYear(e.target.value)}
          />
          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            required
            id="doc_id"
            label="Document Id"
            type="text"
            fullWidth
            variant="standard"
            name='doc_id'
            value={doc_id}
            onChange={(e)=> setDocId(e.target.value)}
          />
          {/* <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            id="posting_date"
            label="Posting Date"
            type="date"
            fullWidth
            variant="standard"
            name='posting_date'
            value={posting_date}
            onChange={(e)=> setPostDate(e.target.value)}
          /> */}

          <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Posting Date"
                  value={posting_date}
                  inputFormat="yyyy-MM-dd"
                  mask={"____-__-__"}
                  minDate={new Date()}
                  onChange={(newValue) => {
                    setPostDate(newValue.toISOString().split("T")[0]);
                  }}
                  style={{ color: "white" }}
                  renderInput={(params) => (
                    
                    <TextField
                      {...params}
                      required
                      error={false}
                      variant="standard"
                      margin="dense"
                      // style={{ padding: "10px" }}
                      className={classes.root}
                    />
                    
                  )}
                />
          </LocalizationProvider>

          {/* <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            id="document_create_date"
            label="Document Create Date"
            type="date"
            fullWidth
            variant="standard"
            name='document_create_date'
            value={document_create_date}
            onChange={(e)=> setDocCreateDate(e.target.value)}
          /> */}

          <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Document Create Date"
                  value={document_create_date}
                  inputFormat="yyyy-MM-dd"
                  mask={"___-__-__"}
                  minDate={new Date()}
                  onChange={(newValue) => {
                    setDocCreateDate(newValue.toISOString().split("T")[0]);
                  }}
                  style={{ color: "white" }}
                  renderInput={(params) => (
                    
                    <TextField
                      {...params}
                      required
                      error={false}
                      variant="standard"
                      margin="dense"
                      //style={{ padding: "10px" }}
                      className={classes.root}
                    />
                    
                  )}
                />
          </LocalizationProvider>

          {/* <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            id="due_in_date"
            label="Due Date"
            type="date"
            fullWidth
            variant="standard"
            name='due_in_date'
            value={due_in_date}
            onChange={(e)=> setDueDate(e.target.value)}
          /> */}

          <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Due Date"
                  value={due_in_date}
                  inputFormat="yyyy-MM-dd"
                  mask={"____-__-__"}
                  minDate={new Date()}
                  onChange={(newValue) => {
                    setDueDate(newValue.toISOString().split("T")[0]);
                  }}
                  style={{ color: "white" }}
                  renderInput={(params) => (
                    
                    <TextField
                      {...params}
                      error={false}
                      required
                      variant="standard"
                      margin="dense"
                      //style={{ padding: "10px" }}
                      className={classes.root}
                    />
                    
                  )}
                />
          </LocalizationProvider>


          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            required
            id="invoice_currency"
            label="Invoice Currency"
            type="text"
            fullWidth
            variant="standard"
            name='invoice_currency'
            value={invoice_currency}
            onChange={(e)=> setInvCur(e.target.value)}
          />
          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            required
            id="document_type"
            label="Document Type"
            type="text"
            fullWidth
            variant="standard"
            name='document_type'
            value={document_type}
            onChange={(e)=> setDocType(e.target.value)}
          />
          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            required
            id="posting_id"
            label="Posting Id"
            type="text"
            fullWidth
            variant="standard"
            name='posting_id'
            value={posting_id}
            onChange={(e)=> setPostId(e.target.value)}
          />
          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            required
            id="total_open_amount"
            label="Total Open Amount"
            type="text"
            fullWidth
            variant="standard"
            name='total_open_amount'
            value={total_open_amount}
            onChange={(e)=> setTotOpenAmt(e.target.value)}
          />
          {/* <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            id="baseline_create_date"
            label="Baseline Create Date"
            type="date"
            fullWidth
            variant="standard"
            name='baseline_create_date'
            value={baseline_create_date}
            onChange={(e)=> setBaseCreateDate(e.target.value)}
          /> */}

          <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Baseline Create Date"
                  value={baseline_create_date}
                  inputFormat="yyyy-MM-dd"
                  mask={"____-__-__"}
                  minDate={new Date()}
                  onChange={(newValue) => {
                    setBaseCreateDate(newValue.toISOString().split("T")[0]);
                  }}
                  style={{ color: "white" }}
                  renderInput={(params) => (
                    
                    <TextField
                      {...params}
                      required
                      error={false}
                      variant="standard"
                      margin="dense"
                      //style={{ color:'white' }}
                      className={classes.root}
                    />
                    
                  )}
                />
        </LocalizationProvider>

          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            required
            id="cust_payment_terms"
            label="Customer Payment Terms"
            type="text"
            fullWidth
            variant="standard"
            name='cust_payment_terms'
            value={cust_payment_terms}
            onChange={(e)=> setCustPayTerms(e.target.value)}
          />
          <TextField
            
            style={{backgroundColor:'white',borderRadius:'3px'}}
            margin="dense"
            required
            id="invoice_id"
            label="Invoice Id"
            type="text"
            fullWidth
            variant="standard"
            name='invoice_id'
            value={invoice_id}
            onChange={(e)=> setInvId(e.target.value)}
          />
          

          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} style={{color:'white'}}>Submit</Button>
          <Button onClick={onClose} style={{color:'white'}}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}