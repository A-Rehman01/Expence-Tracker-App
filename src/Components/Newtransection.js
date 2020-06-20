import React, { useState, useContext } from 'react';
import { Globalcontext } from '../context/Globalcontext';

const Newtransection = () => {

    //get add fucntion here
    let { Addtrasection } = useContext(Globalcontext);

    let [text, setText] = useState('');
    let [amount, setAmount] = useState('');

    //conditionexpeceincome
    let expence = 0;

    const updatetext = (e) => {
        setText(e.target.value)
    }
    const updateamount = (e) => {
        setAmount(e.target.value)
    }

    const push = (e) => {
        e.preventDefault();

        const newtrasec = expence == 0 ? {
            id: (Math.random() * 1000000000).toFixed(0),
            text,
            amount: Math.abs(parseInt(amount))
        } :
            {
                id: (Math.random() * 1000000000).toFixed(0),
                text,
                amount: -Math.abs(parseInt(amount))
            }


        Addtrasection(newtrasec);
        expence=0;
        setText('');
        setAmount('');
    }
    return (
        <div className="newtransection" >
            <p>Add new transaction <hr /> </p>
            <form onSubmit={push} >
                <div className="controlform">
                    <div>
                    <input type="text" name="text" required placeholder="Enter text.." value={text} onChange={updatetext} />
                    <input type="number" name="Amount" required placeholder="Enter amount.." value={amount} onChange={updateamount} />
                    </div>
                    <div className="buttons">
                    <button className="income" onClick={() => (expence = 0)}>Income</button>
                    <button  className="expence" onClick={() => (expence = 1)}>Expense</button>
                    </div>
                </div>
            </form>
            
        </div>
    );

}
export default Newtransection;