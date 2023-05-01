import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React,{useState} from 'react';

function App() {

 const [formData, setFormData] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let data = event.target;

    setFormData(data)

  }


  // axios.post('', formData)
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });



  return (
    <div className="App">
      <form className="form-main" onSubmit={handleSubmit} >
        <input className="form-input" type="text" name="inputName"></input>
        <button className="form-btn" type="submit">SUBMIT</button>

      </form>

    </div>
  );
}

export default App;
