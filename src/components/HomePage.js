import React from 'react';
import Form from './Form';
import CurrentPollutionData from './CurrentPollutionData';

const HomePage = () => (
  <div>
    <div>
      <Form />
      <div>
        <CurrentPollutionData />
      </div>
    </div>
  </div>
);

export default HomePage;
