import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import App from './components/App';
import reportWebVitals from './reportWebVitals';
import SignIn from './components/SignIn'
import Home from './components/Home'
import Test from './components/Test'
import Question1 from './components/Question1'
import Question2 from './components/Question2'
import Question3 from './components/Question3'
import PresetWheel from './components/PresetWheel'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/test" element={<Test />} />
				<Route path="/question1" element={<Question1 />} />
        <Route path="/question2" element={<Question2 />} />
        <Route path="/question3" element={<Question3 />} />
        <Route path="/presetwheel" element={<PresetWheel />} />
			</Routes>
		</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 
