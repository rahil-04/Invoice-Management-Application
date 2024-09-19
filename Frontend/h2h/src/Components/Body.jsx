import React from "react";
import Table from "./Table";

export default function Body({advSearch, searchRes,addData,editData,deleteData,normalSearch,normalSearchData,Predict}){
    return(
        <Table
        searchRes={searchRes}
        advSearch={advSearch}
        addData={addData}
        editData={editData}
        deleteData={deleteData}
        normalSearch={normalSearch}
        normalSearchData={normalSearchData}
        Predict={Predict}
        />
    )
}