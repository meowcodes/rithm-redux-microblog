import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { MemoryRouter } from "react-router-dom"

it('renders without crashing', function () {
  shallow(<MemoryRouter><App /></MemoryRouter>);
});

it('renders without crashing', function () {
  mount(<MemoryRouter>
    <App />
  </MemoryRouter>);
});