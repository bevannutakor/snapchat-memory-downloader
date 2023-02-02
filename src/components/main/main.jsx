import React, {useState} from 'react'
import axios from 'axios';
import './main.css'

function Main() {
  const [complete, setComplete] = useState(false);

  const onSubmitFile = (e) => {
    e.preventDefault();
    var formData = new FormData();
    var fileData = document.querySelector('#myFile');
    formData.append("memories", fileData.files[0]);
    axios.post(`${process.env.REACT_APP_BASE_URL}`, formData)
        .then((res) => {
          console.log(res.status)
          if(res.status === 200){
            setComplete(true);
          }
      }).catch((error) => {
          console.log(error.response)
      });
  }

  {/*const downloadFile = (e) => {
    e.preventDefault();
    axios.get(`${process.env.REACT_APP_BASE_URL}download`)
      .then((res) => {
        console.log(res.status);
      }).catch((error) => {
        console.log(error.response);
      })
  }*/}

  return (
    <div className="app">
    <div className='main'>
    <h2>Want to download all your Snapchat memories with ease? You're in the right place! <br /> This site allows you to download a copy of your memories to your computer all at once.</h2>
      <p>Don't worry we do not store any of your data!</p>
      <h1>Steps to Get Your Data From Snapchat</h1>
      <div className='steps'>
        <ul>
          <li>Log into your account on <a href='https://accounts.snapchat.com/accounts/login?continue=%2Faccounts%2Fwelcome'>accounts.snapchat.com</a></li>
          <li>Click <b>'My Data'</b></li>
          <li>Click <b>'Submit Request'</b> at the bottom of the page</li>
          <li>Enter a valid email address and we'll send you an email with a link once your data is ready to download</li>
          <li>Follow the link in your email to download your data</li>
          <li>Click the link to download your data</li>
        </ul>
      </div>
      <h1>Steps to Easily Download All Your Memories</h1>
      <div className='steps2'>
        <ul>
          <li>Log into your account on <a href="https://accounts.snapchat.com/accounts/login?continue=%2Faccounts%2Fwelcome" target="_blank" rel="noopener noreferrer">accounts.snapchat.com</a></li>
          <li>Click <b>'My Data'</b></li>
          <li>Click <b>'Submit Request'</b> at the bottom of the page</li>
          <li>Enter a valid email address and we'll send you an email with a link once your data is ready to download</li>
          <li>Follow the link in your email to download your data</li>
          <li>Click the link to download your data</li>
        </ul>
      </div>

      <button className='upload'>
        Upload Files Here
      </button>

      <label>
      <div className='upload'>
          <form enctype="multipart/form-data" onSubmit={onSubmitFile}>
            <input type="file" id="myFile" name="memories"/>
            <input type="submit"/>
          </form>
      </div>
      </label>

      
      {complete ? (
        <a href={`${process.env.REACT_APP_BASE_URL}download`}>Download</a>
      ) : (
        <a class="hidden"href="#">Not shown in client</a>
      )}
      </div>
      </div>
  )
}

export default Main;