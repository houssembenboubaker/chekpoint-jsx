import React from "react";
import pic from './louis-gaudiau-bWKilgxCMZc-unsplash.jpg'
import "./App.css"
function App() {
  return <div>
    <div style={{border:'solid 1px black',maxWidth:'100vw'}}>

<h1 className="title red">Your name here</h1>

<br/>

<img src="public.jpg" className='home' alt="profile"/>

<br/>

<img src={pic} className="home" alt="couverture" />

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
  </div>;
}

export default App;
