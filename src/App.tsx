import React from 'react';
import { info } from "./data"
import { Navbar } from "./components/Navbar"
import { Card } from './components/Card';

function App(){

  const cards = info.map(item => {
    return (
      <Card
        title={item.title}
        location={item.location}
        description={item.description}
        startDate={item.startDate}
        endDate={item.endDate}
        imageUrl={item.imageUrl}
      />
    )
  })

  return (
    <div className="App">
      <Navbar/>
      <section className='card-list'>{cards}</section>
    </div>
  );
}

export default App;
