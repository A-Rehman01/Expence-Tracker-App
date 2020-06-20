import React, { useContext } from 'react';
import { Globalcontext } from '../context/Globalcontext'
import Trasectionpage from  './Trasectionpage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory } from '@fortawesome/free-solid-svg-icons'

const Transection = () => {
    // trasection is array of object thatwhy {}
    let { transections } = useContext(Globalcontext);


    return (
        <div className="transection">
            <p> <FontAwesomeIcon icon={faHistory} /> History <hr /> </p>
            <ul className="orderlist" >

                {
                    transections.map(transection => (
                        <Trasectionpage transection={transection} key={transection.id} ></Trasectionpage>
                    ))
                }



            </ul>
        </div>
    );
}

export default Transection;