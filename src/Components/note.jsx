import React from 'react';
import ReactDOM from 'react-dom';


function Note(props){

    function handleClick(){
        props.onDelete(props.id);
    }
    const buttonWidth = `${props.salary.length * 10}px`;
    return(
        <div className='note'>
            <div className='border'>
            <div className='main2'>
            <div className='desc'>
                <h1><span className='desc-span-text'>BOOK TYPE: </span>{props.content}</h1></div>
            <div className='content-about'>
            <p className="bookdesc">{props.title}</p>
            </div>
            </div>
            <div className='buttons'>
            <button className="btn btn-primary salary" style={{width: buttonWidth, minWidth: "80px"}}>
                <p className='rupees'><i className="bi bi-currency-rupee"></i>{props.salary}</p>
            </button>
            <button className="btn btn-primary delete" onClick={handleClick} style={{backgroundColor:"#4CAF50" , width: "80px" , color: "white", marginRight: "0"}}>DELETE</button>
            </div>
            </div>
        </div> 
    );
}
export default Note;