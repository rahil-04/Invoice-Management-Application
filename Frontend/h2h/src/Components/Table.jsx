import React from "react";
import {DataGrid} from '@mui/x-data-grid'
import TablePagination from '@mui/material/TablePagination';
import Button from './Button'

const columns = [
    {field:'sl_no',headerName:'Sl No', width:80},
    {field:'business_code',headerName:'Business Code', width:120},
    {field:'cust_number',headerName:'Customer Number',width:130},
    {field:'clear_date',headerName:'Clear Date'},
    {field:'buisness_year',headerName:'Business Year', width:115},
    {field:'doc_id',headerName:'Document ID'},
    {field:'posting_date',headerName:'Posting Date'},
    {field:'document_create_date',headerName:'Document Create Date', width:168},
    {field:'due_in_date',headerName:'Due in Date'},
    {field:'invoice_currency',headerName:'Invoice Currency',width:125},
    {field:'document_type',headerName:'Document Type', width:120},
    {field:'posting_id',headerName:'Posting ID'},
    {field:'total_open_amount',headerName:'Total Open Amount', width:145},
    {field:'baseline_create_date',headerName:'Baseline Create Date', width:155},
    {field:'cust_payment_terms',headerName:'Customer Payment Terms', width:185},
    {field:'invoice_id',headerName:'Invoice ID',width:125},
    {field:'aging_bucket',headerName:'Aging Bucket', width:120}
]

export default function Table({advSearch,searchRes,addData,editData,deleteData,normalSearch,normalSearchData,Predict}){
    const[tableData,SetTableData] = React.useState([])
    const[rowId,setRowId]=React.useState([])
    const[rowData,setRowData]=React.useState([])
    //const[rowDataArr,setRowDataArr]=React.useState([])
    //console.log(tableData)
    const[rowDataType,setRowDataType] = React.useState([])

        // React.useEffect(()=>{
        //     let rData = tableData.filter((ele)=>{
        //         return ele.sl_no == rowId
        //             })[0]
        //     setRowDataType(rowDataType.concat(rData))
        // },[rowId])


        // React.useEffect(()=>{
        //    return rowId.map((i)=>{
        //         let rData = tableData.filter((ele)=>{
        //             return ele.sl_no == rowId[i]
        //                 })[0]
        //         setRowDataType(rowDataType.concat(rData))
        //     })
        // },[rowId])
        

        React.useEffect(()=>{
            SetTableData(normalSearchData)
        },[normalSearchData])

        React.useEffect(()=>{
            SetTableData(searchRes)
        },[searchRes])

       
    
    React.useEffect(()=>{
        fetch("http://localhost:8080/HRC/FetchData")
            .then(res => res.json())
            .then(data => SetTableData(data))
            .catch(err => console.log(err))
    },[])

    // let busiyear = rowData.business_code
    //console.log(rowData)

    return(
        <div>
        <Button 
            advSearch={advSearch}
            addData={addData}
            rowId={rowId}
            rowData={rowData}
            editData={editData}
            deleteData={deleteData}
            normalSearch={normalSearch}
            Predict={Predict}
        />
        <div style={{height:473 , width:'100%',marginTop:'1.75rem',whiteSpace:'nowrap'}}>
            <DataGrid
                density="compact"
                getRowId={(row) => row.sl_no}
                rows={tableData}
                columns={columns }
                checkboxSelection
                disableSelectionOnClick={true}

                pageSize={10}
                rowsPerPageOptions={[10]}

                onSelectionModelChange={(ids) => {
                    setRowId(ids)
                    //  console.log(ids)
                    // console.log(ids.length)
                    

                    if(ids.length == 1)
                    {
                        setRowData(tableData.filter((ele)=>{
                           return ele.sl_no == ids[0]
                        })[0])

                    }
                    else{
                         setRowData([])
                    }

                  }}
                
            />
            
        </div>
        </div>
    )
}
