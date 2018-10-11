

import VisChart from 'vischart';

import fontfaceobserver from 'fontfaceobserver';

import * as base64img from './data/base64img.js';


//console.log( dountBig, dountIn );

let background = [
    { 
        //"url": "./img/dount-in.png"
        "url": base64img.dountIn
        , "isbase64": true
        , 'base64prefix': 'data:image/png;base64,'
        , "width": 120
        , "height": 120
        , "offsetX": 0
        , "offsetY": 1
    }
    , { 
        //"url": "./img/dount-big.png"
        "url": base64img.dountBig
        , "isbase64": true
        , 'base64prefix': 'data:image/png;base64,'
        , "width": 250
        , "height": 248
        , "offsetX": 0
        , "offsetY": 1
        , "rotation": 1
    }
];

//console.log( background );

let font = new fontfaceobserver( 'HuXiaoBoKuHei' );
font.load().then(function () {

    //let data = require( './data/dount.json' );
    let data = require( './data/dount-tight8.json' );
        data 
        && data.series 
        && data.series.map( item => {
            item.background = background;
        });
        
    let dmins = new VisChart( document.querySelector('#twoBox'), 386, 283 );
        dmins.update( data ); 

}, function () {
  console.log('Font is not available');
});


