import React, { useContext } from 'react'
import  {Globalcontext} from '../context/Globalcontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Trasectionpage = (props) => {

    let sign = props.transection.amount > 0 ? '+' : '-';
  
    //get deletefuntion
    let {Deletetrasection} = useContext(Globalcontext);

    return (
        <div className="trasectionpage" >

            <li className={props.transection.amount>0 ? 'plus': 'minus'} >
                    <button onClick={()=>Deletetrasection(props.transection.id)}><FontAwesomeIcon className="delete" icon={faTrash}  /></button> 
                    {props.transection.text}
                 <span>{sign}{Math.abs(props.transection.amount)} PKR </span>
            </li>
        </div>
    );
}
export default Trasectionpage;

