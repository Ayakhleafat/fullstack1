import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function PriceBox({ price, color }) {
  const boxStyle = {
    backgroundColor: color,
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    color: 'white',
    textAlign: 'center',
    width: '100px',
  };

  return (
    <div style={boxStyle}>
      ${price}
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/getData')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));

    fetch('http://localhost:8000/getPrice')
      .then(response => response.json())
      .then(prices => setPrices(prices))
      .catch(error => console.error('Error fetching prices:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h2>Data:</h2>
          {/* Display the fetched data */}
          {data ? (
            Object.entries(data).map(([key, value]) => (
              <p key={key}><strong>{key}:</strong> {value}</p>
            ))
          ) : (
            'Fetching data...'
          )}
        </div>
        <div>
          <h2>Prices:</h2>
          {/* Display the fetched prices */}
          {prices ? (
            <div style={{ display: 'flex' }}>
              <PriceBox price={prices.price1} color="green" />
              <PriceBox price={prices.price2} color="blue" />
            </div>
          ) : (
            'Fetching prices...'
          )}
        </div>
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

export default App;
