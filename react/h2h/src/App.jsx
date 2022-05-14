import React from 'react';
import './App.css';
import Header from './Components/Header';
// import Button from './Components/Button';
// import Table from './Components/Table';
import Body from './Components/Body';
import Footer from './Components/Footer'
import { GridBody } from '@mui/x-data-grid';

function App() {
  //advanced search functionality state
  const[search,setSearch] = React.useState([]) 

  function advancedSearch(doc_id,cust_num,invoice_id,busi_year){
    console.log(doc_id+' '+cust_num+' '+invoice_id +' '+ busi_year)

    fetch(`http://localhost:8080/HRC/AdvanceSearch?doc_id=${doc_id}&cust_no=${cust_num}&invoice_id=${invoice_id}&business_year=${busi_year}`)
    .then(res=>res.json())
    .then(data=>{setSearch(data)})

    console.log(search)
  }
  

  // const[add,setAdd] = React.useState({
  //   business_code: "",
  //   cust_number: "",
  //   clear_date: "",
  //   buisness_year: "",
  //   doc_id: "",
  //   posting_date: "",
  //   document_create_date: "",
  //   due_in_date: "",
  //   invoice_currency: "",
  //   document_type: "",
  //   posting_id: "",
  //   total_open_amount: "",
  //   baseline_create_date: "", 
  //   cust_payment_terms: "",
  //   invoice_id: "" 
  // })

  //add functionality
  function addData(Data){
    //console.log(busiCode+' '+custNum+' '+clearDate+' '+busiYear+' '+docId+' '+postDate+' '+docCreateDate+' '+dueDate+' '+invCur+' '+docType+' '+postId+' '+totOpenAmt+' '+baseCreateDate+' '+custPayTerms+' '+invId)
    console.log(Data)
    fetch('http://localhost:8080/HRC/AddData',{
      method:"POST",
      headers: {
        "content-type":"application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(Data),
    })
      .then((res)=>res.json())
      .then((json)=>{
        console.log(json);
      })
      .catch(err=>console.log)

  }

  
  // const[edit,setEdit]=React.useState({
  //   sl_no: "",
  //   cust_payment_terms: "",
  //   invoice_currency: ""
  // })


  //Edit functionality
  function editData(Data){
    console.log(Data)

    fetch('http://localhost:8080/HRC/EditData',{
      method:"POST",
      headers:{
        "Content-type":"application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(Data),
    })
      .then((res)=>res.json())
      .then((json)=>{
        console.log(json);
      })
      .catch(err=>console.log(err))
  }

  //Delete functionality
  function deleteData(Data){
    console.log(Data)

    fetch('http://localhost:8080/HRC/DeleteData',{
      method:"POST",
      headers:{
        "Content-type":"application/json",
        Accept: "application/json"
      },
      body: Data,
    })
      .then((res)=>res.json())
      .then((json)=>{
        console.log(json);
      })
      .catch(err=>console.log(err))
  }

  //Normal Search functionality
  const[normalSearchData,setNormalSearchData]=React.useState([])
  function normalSearch(cust_num){
    console.log(cust_num)

    fetch(`http://localhost:8080/HRC/SearchData?cust_number=${cust_num}`)
    .then(res=>res.json())
    .then(data=>{setNormalSearchData(data)})
    
  }

  // function advancedSearch(doc_id,cust_num,invoice_id,busi_year){
  //   console.log(doc_id+' '+cust_num+' '+invoice_id +' '+ busi_year)

  //   fetch(`http://localhost:8080/HRC/AdvanceSearch?doc_id=${doc_id}&cust_no=${cust_num}&invoice_id=${invoice_id}&business_year=${busi_year}`)
  //   .then(res=>res.json())
  //   .then(data=>{setSearch(data)})

  //   console.log(search)
  // }


  function Predict(Data){
    console.log(Data)
    fetch("http://127.0.0.1:5000/get_prediction",{
      method:"POST",
      headers:{
        "Content-type":"application/json",
        Accept: "application/json"
      },
      body: Data,
    })
    .then(res=> res.json())
    .then(data=>{
        fetch("http://localhost:8080/HRC/Predict",{
          method:"POST",
          headers:{
            "Content-type":"application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(data[0]),
        })
        .then(response => response.json())
        
    })  
       
  }


  return (
    <div>
      <Header />
      <Body
        searchRes = {search}
        advSearch={advancedSearch}
        addData={addData}
        editData={editData}
        deleteData={deleteData}
        normalSearch={normalSearch}
        normalSearchData={normalSearchData}
        Predict={Predict}
      />
      <Footer />
    </div>
  );
}

export default App;
