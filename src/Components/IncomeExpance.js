import React, { useContext } from 'react';
import { Globalcontext } from '../context/Globalcontext';

const IncomeExpance = () => {

    let { transections } = useContext(Globalcontext);
    //get amount array
    let amount = transections.map(transection => (transection.amount));

    //get income from amount filter is used for condition > 0
    let income = amount.filter(amount => (amount > 0)).reduce((totalinc, itemsinc) => (totalinc + itemsinc), 0).toFixed(2);

    //get expance from amount filter is used for condition < 0
    let expance = amount.filter(amount => (amount < 0)).reduce((totalexp, itemexp) => (totalexp + itemexp), 0).toFixed(2);
    let sign = expance >= 0 ? '' : '-';
    expance = Math.abs(expance).toFixed(2);
    return (
        <div className="incomeexpance" >
            <div>
                <p className="green" >INCOME <br /> <span >{income} PKR</span>   </p>
            </div>
            <div>
                <p className="red" >EXPENCE <br /> <span>{sign}{expance}  PKR</span></p>
            </div>
        </div>
    );
}

export default IncomeExpance;