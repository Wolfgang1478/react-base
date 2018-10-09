import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './components/Hello';

let module: any;

if(module.hot){
    module.hot.accept();
}

ReactDOM.render(
    <Hello></Hello>,
    document.getElementById('root')
);