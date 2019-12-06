import React from 'react';
import {render} from "@testing-library/react";
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';


afterEach(rtl.cleanup)

 afterEach(rtl.cleanup)

 it('renders without crashing', () => {
 const wrapper = rtl.render(<NavBar />)
wrapper.debug()

 });

// test('toggle fucntion works', ()=>{
//     const{getByTestId}= render(<NavBar />)
//     console.log(getTestById('toggle'));
//     getByTestId('toggle');
//   }) ;
