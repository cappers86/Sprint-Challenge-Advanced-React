import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';


afterEach(rtl.cleanup)

 

it('renders without crashing', () => {
const wrapper = rtl.render(<NavBar />)
wrapper.debug()


});