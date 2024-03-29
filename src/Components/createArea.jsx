import React, {useState}from "react";


function CreateArea(props) {
    const [note, setNote] = useState({
        key: 1,
        title: "",
        content:"",
        salary:""
    });
    function handleChange(event) {
        const {name, value}= event.target;
        setNote(prevNote =>{
                return{
                    ...prevNote,
                    [name]: value
                };
        })
    }
    function submitNote(event) {
      if (!note.title || !note.content || !note.salary) {
          alert("Please fill in all the fields before uploading.");
      } else {
          props.onAdd(note);
          setNote({
              title: "",
              content: "",
              salary: ""
          });
      }
      event.preventDefault();
  }
  
  return (
    <div>
      <form>
        <div className="main">
        <div className="sub2">
        <select name="content" onChange={handleChange}value={note.content}placeholder="Choose Book Type" rows="3">
                <option value="" disabled selected>Choose Book Type</option>
                    <option class="option">Finance</option>
                    <option class="option">Fiction</option>
                    <option class="option">Literature</option>
                    <option class="option">Marketing</option>
                    <option class="option">Physics and Astronomy</option>
                    <option class="option">Data Science</option>
                    <option class="option">Sciences</option>
        </select>
        <input name="salary" onChange={handleChange} value ={note.salary}placeholder="Stipend/Salary" className="text" />
        </div>

<div className="sub1">
  <input name="title" onChange={handleChange} value={note.title} placeholder=" " className="title"/>
  <label className="placeholder">Enter Book Description</label>
</div>
        </div>
        <button onClick={submitNote} className="button">Upload</button>
      </form>
    </div>
  );
}

export default CreateArea;