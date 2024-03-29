import React, {Fragment, useState} from 'react';
// import notes from './components/notes.jsx';
import CreateArea from './Components/createArea';
import Note from './Components/note';
import Header from './Components/header.jsx';
import Footer from './Components/footer.jsx';
import { Count } from './Components/Count.jsx';

import ReactDOM from 'react-dom';

const notes = [
    {
      key: 1,
      title: "Literature",
      content:
        "This section contains........"
    },
    {
      key: 2,
      title: "Loops",
      content:
        "............"
    },
    {
      key: 3,
      title: "Arrays",
      content:
        "Q. Why did the programmer quit his job? A. Because he didn't get arrays."
    },
    {
      key: 4,
      title: "Hardware vs. Software",
      content:
        "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
    }
  ];

function createBox(boxItem){
    return ( <Note 
        key = {boxItem.key}
        title = {boxItem.title}
        content = {boxItem.content}
        />
        );
    }
    
    function App(){

        return(

          <Fragment>
          <div className='Hero'>
            <Header />
          </div>
          <div className="header-2" id="section-2">
            <h1 style={{fontSize:"4rem"}}>VIEW BOOKS FROM <span className="span-header2">QUILL QUEST</span></h1>
          </div>
        <div className="main-container">
        <div className="text-container">
          <h1><span className='span-text-container'>Unlock</span> Your Dream Books</h1>
          <h1 className='secondline-text-container'>Where Dreams and Realities <br/>Meet!</h1>
        </div>
        <div className="form-container"><CreateArea 
        onAdd = {addNote}/></div>
        </div>
        <div className="books-available" id="section-3">
          <div className="books-available-header">
          <h1 style={{fontSize:"4rem"}}>LATEST BOOKS ON <span className="span-header2">QUILL QUEST</span></h1></div>
        </div>
      <div class="filter">
        <div class="filter-header">VIEW BOOKS BY TYPE :</div>
        <div class="btn-group">
      <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: "1.4rem", pading: "4px"}}>
              {selectedBookType || 'SELECT BOOK TYPE'}
      </button>
      <ul className="dropdown-menu">
              {bookTypeOptions.map((bookType, index) => (
                <li key={index}>
                  <a className="dropdown-item" href="#section-3" onClick={handleDropdownItemClick}>
                    {bookType}
                  </a>
                </li>
              ))}
      </ul>
</div>
      </div>
      
        <div className='updated-stuffs'>
        {filterArr.length === 0 ? (
        <p className='noresults'><i>No results found :/</i></p>
      ) : (
        filterArr.map((arrItem, index) => (
          <Note key={index} id={index} title={arrItem.title} content={arrItem.content} salary={arrItem.salary} onDelete={deleteArr} />
        ))
      )}
        </div><Footer/>
          </Fragment>

    );
}
export default App;