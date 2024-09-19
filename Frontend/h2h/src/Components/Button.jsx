import React from "react";
import SearchModal from "./SearchModal";
import DeleteModal from "./DeleteModal";
import AddModal from "./AddModal"
import EditModal from "./EditModal";
import ButtonGroup from '@mui/material/ButtonGroup';
import RefreshIcon from '@mui/icons-material/Refresh';
import AddBoxIcon from '@mui/icons-material/AddBox';


export default function Button({advSearch,addData,rowData,rowId,editData,deleteData,normalSearch,Predict}){
    const[isOpen, setIsOpen]=React.useState(false)
    const[isOpenDelete,setIsOpenDelete]=React.useState(false)
    const[isOpenAdd, setIsOpenAdd]=React.useState(false)
    const[isOpenEdit, setIsOpenEdit]=React.useState(false)
    
    const[isDisabled,SetIsDisabled]=React.useState(true)
    const[isDisabledSingle,SetIsDisabledSingle]=React.useState(true)

    const[normSearch,setNormSearch]=React.useState('')

    
   
    const[doc_id,setDocId]=React.useState([])

    //console.log(rowId)
    
    React.useEffect(()=>{
        if(rowId.length>0 && rowId.length<2){
            SetIsDisabledSingle(false)
        }
        else{
            SetIsDisabledSingle(true)
        }
    },[rowId])
    
    React.useEffect(()=>{
        if(rowId.length>0){
            SetIsDisabled(false)
        }
        else{
            SetIsDisabled(true)
        }
    },[rowId])
    //console.log(isDisabled)

    React.useEffect(()=>{
        setDocId(rowData.doc_id)
    },[rowData])
    
    let jsonDocId = `
    {
        "data": [${rowData.doc_id}]
    }`

    //console.log(jsonDocId)

    //console.log({doc_id})

    const handleSubmit = (e) => {
        e.preventDefault()
        normalSearch(normSearch)
    }

    const handlePredict = (e) => {
        Predict(jsonDocId)
    }

    const refreshPage=()=>{window.location.reload();}
    // console.log(rowData.business_code)
    return(
        <div className="button-container">
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <button className="button-predict" style={{fontSize:'small'}} onClick={handlePredict} disabled={isDisabledSingle}>PREDICT</button>
            <button className="button" style={{fontSize:'small'}}>ANALYTICS VIEW</button>
            
            <button onClick={()=> setIsOpen(true)} className="button" style={{fontSize:'x-small'}}>ADVANCED SEARCH</button>
            <SearchModal open={isOpen} onClose={()=> setIsOpen(false)}  advSearch={advSearch}>
            </SearchModal>
            </ButtonGroup>
            
            <button onClick={refreshPage} className="button-refresh"><RefreshIcon style={{color:'white'}}/></button>

            <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder='Search Customer Number'
            className='search-field'
            name='cust_number'
            onChange={(e)=> setNormSearch(e.target.value)}
            />
          
            </form>
            
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <button onClick={()=> setIsOpenAdd(true)} className="button" style={{fontSize:'small',marginLeft:'18px'}}>ADD</button>
            <AddModal open={isOpenAdd} onClose={()=> setIsOpenAdd(false)} addData={addData}>
            </AddModal>

            <button onClick={()=> setIsOpenEdit(true)} className="button" style={{fontSize:'small'}} disabled={isDisabledSingle}>EDIT</button>
            <EditModal open={isOpenEdit} onClose={()=> setIsOpenEdit(false)} rowData={rowData} editData={editData} rowId={rowId}>
            </EditModal>

            <button onClick={()=> setIsOpenDelete(true)} className="button" style={{fontSize:'small'}} disabled={isDisabled}>DELETE</button>
            <DeleteModal open={isOpenDelete} onClose={()=> setIsOpenDelete(false)} rowData={rowData} rowId={rowId} deleteData={deleteData}>
            </DeleteModal>
            </ButtonGroup>
        </div>
    )
}
