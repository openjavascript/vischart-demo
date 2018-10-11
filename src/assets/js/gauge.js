

import VisChart from 'vischart';

import fontfaceobserver from 'fontfaceobserver';

import * as base64img from './data/base64img.js';


let background = [
    { 
        //"url": "./img/rate-out.png"
        "url": base64img.rateOut
        , "isbase64": true
        , 'base64prefix': 'data:image/png;base64,'
        , "width": 120
        , "height": 120
        , "offsetX": 0
        , "offsetY": 1
        , "rotation": 1
    }
];


let font = new fontfaceobserver( 'HuXiaoBoKuHei' );
font.load().then(function () {

    let size = 330;

    let data = require( './data/gauge.json' );
        data 
        && data.series 
        && data.series.map( item => {
            item.background = background;
        });

    console.log( data );

    let dmins = new VisChart( document.querySelector('#twoBox'), size, 250 );
        dmins.update( data ); 

}, function () {
  console.log('Font is not available');
});



