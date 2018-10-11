

import VisChart from 'vischart';

import fontfaceobserver from 'fontfaceobserver';

import { dountBig, dountIn } from './data/base64img.js';


//console.log( dountBig, dountIn );

let background = [
    { 
        //"url": "./img/dount-in.png"
        "url": dountIn
        , "isbase64": true
        , 'base64prefix': 'data:image/png;base64,'
        , "width": 120
        , "height": 120
        , "offsetX": 0
        , "offsetY": 1
    }
    , { 
        //"url": "./img/dount-big.png"
        "url": dountBig
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
    let data = require( './data/dount-tight2.json' );
        data 
        && data.series 
        && data.series.map( item => {
            item.background = background;
        });
        
    let dmins = new VisChart( document.querySelector('#twoBox'), 410, 330 );
        dmins.update( data ); 

        setTimeout( ()=>{
            //dmins.update( data ); 
        }, 5000 );

}, function () {
  console.log('Font is not available');
});


