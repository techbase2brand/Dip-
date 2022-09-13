import React from "react"
import ReactDom from "react-dom"
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import Pages from './Pages/Pages/Pages';

const Test = () => {
	return <div>Welcome to reactjs shopify!</div>
}

const root = document.getElementById("app");
ReactDom.render(<Pages />, root);

reportWebVitals();