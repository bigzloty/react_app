// src/App.js
// import React , {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
// import product from './product'; // Import the product JSON

function App() {
  const firstName = "Emmanuel"; 
  
  return (
    <div className="">
      {/* <Card style={{ width: '18rem', margin: '20px auto' }}>
        <Card.Body>
          <Image />
          <Card.Title><Name /></Card.Title>
          <Card.Text><Description /></Card.Text>
          <h5><Price /></h5>
        </Card.Body>
      </Card> */}
      <Name/>
      <Description />
      <Price />

      {/* Conditional message */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h4>
          {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
        </h4>
        {firstName && (
          <img 
            src="https://via.placeholder.com/150" 
            alt="Greeting"
            style={{ marginTop: '10px' }}
          />
        )}
      </div>
    </div>
  );
}
export default App;