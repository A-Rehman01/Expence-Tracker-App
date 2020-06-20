import React,{useContext} from 'react';
import {Globalcontext} from '../context/Globalcontext'

const Mainbalance =()=>{
    
    let {transections}=useContext(Globalcontext);
    
    //array  of amount
    let amount = transections.map(transection=>(transection.amount));

    //sum of total amount
    let totalAmount=amount.reduce((total,items)=> (total+items)  ,0  ).toFixed(2);
    

    return(
        <div className="mainbalance" >
        <p>Your Balance <br /> <span> {totalAmount} PKR </span></p>
         
        </div>
    );
}

export default Mainbalance;