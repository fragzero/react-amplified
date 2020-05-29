import React from 'react';
import './App.css';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { withAuthenticator } from '@aws-amplify/ui-react'

Amplify.configure(awsExports);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>TESTE!</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App)
