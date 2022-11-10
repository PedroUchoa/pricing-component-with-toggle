import { useState } from 'react';

import Cards from '../Cards/Cards';
import CardsContainer from '../CardsContainer/CardsContainer';
import './App.css';

function App() {

  const [switchValue, setSwitchValue] = useState(true)

  function HandleClick() {
    setSwitchValue(!switchValue)
  }

  return (
    <div className="main">
      <h1>Our Pricing</h1>
      <div className='toggle-container'>
        <p>Annualy</p>
        <label className="switch">
          <input type="checkbox" onClick={HandleClick} />
          <span className="slider round"></span>
        </label>
        <p>Monthly</p>
      </div>
      <CardsContainer >
        <Cards
          value={switchValue ? '199.99' : '19.99'}
          classNameInicial={'button-blue'}
          title='Basic'
          className='cards-normal'
        />
        <Cards
          value={switchValue ? '249.99' : '24.99'}
          classNameInicial={'button-white'}
          title='Professional'
          className='cards-big'
        />
        <Cards
          value={switchValue ? '399.99' : '39.99'}
          classNameInicial={'button-blue'}
          title='Master'
          className='cards-normal'
        />
      </CardsContainer>
    </div>
  );
}

export default App;
