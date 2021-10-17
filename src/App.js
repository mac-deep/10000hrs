import React from 'react';
import Title from './components/Title';
import './App.css';
import Calc from './components/Calc';
import Accordion from './components/Accordion';
import Graph from './components/Graph';

function App() {
  return (
    <div className="app">
      <Title />
      <div className="app_content">
        <div className="accordions">
          <Accordion title="What is 10,000 hour rule" active={true}>
            <p className="text_content">
              You’ve probably heard of the 10,000 hour rule, which was
              popularized by Malcolm Gladwell’s blockbuster book “Outliers.” As
              Gladwell tells it, the rule goes like this: it takes 10,000 hours
              of intensive practice to achieve mastery of complex skills and
              materials, like playing the violin or getting as good as Bill
              Gates at computer programming.
            </p>
          </Accordion>
          <Accordion title="Calculator">
            <Calc />
          </Accordion>
          <Accordion title="graph">
            <Graph />
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default App;
