
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
    Routes,
    Route,
	BrowserRouter,
  } from "react-router-dom";

function App() {
	const [mode,setMode] = useState('light');
	const [alert,setAlert] = useState(null);

	const showAlert = (message,status) =>{
		setAlert({
			message: message,
			status: status
		})
		setTimeout(() =>{
			setAlert(null);
		},1500)
	}


	const toggle = () =>{
		if(mode==='light'){
			setMode('dark');
			document.body.style.background = '#121230';
			showAlert("Dark Mode has been enabled","success");
		}
		else{
			setMode('light');
			document.body.style.background = 'white';
			showAlert("Light Mode has been enabled","success");
		}
	}

	

    return (
		<>
			
			
			<BrowserRouter>
				<Navbar title="TextUtils" mode={mode} toggle = {toggle}/>
				<Alert alert = {alert}/>
				<Routes>  
					<Route path='/' element={<TextForm/>}/>
					<Route path="About" element={<About/>}/>
				</Routes>
			</BrowserRouter>
		</>
    );
}

export default App;
