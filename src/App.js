import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logowrapper">
        <img src={logo} className="App-logo" alt="logo" />
      </div> 
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
          <li>Log into your account on <a href='https://accounts.snapchat.com/accounts/login?continue=%2Faccounts%2Fwelcome'>accounts.snapchat.com</a></li>
          <li>Click <b>'My Data'</b></li>
          <li>Click <b>'Submit Request'</b> at the bottom of the page</li>
          <li>Enter a valid email address and we'll send you an email with a link once your data is ready to download</li>
          <li>Follow the link in your email to download your data</li>
          <li>Click the link to download your data</li>
        </ul>
      </div>

      <div className='upload'>

      </div>
    </div>
  );
}

export default App;
