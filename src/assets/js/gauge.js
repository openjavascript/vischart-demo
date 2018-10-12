

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

    let box = document.querySelector('#twoBox');

    let data = require( './data/gauge1100.json' );
        data 
        && data.series 
        && data.series.map( item => {
            item.background = background;
        });

    let dmins = new VisChart( box );
        dmins.update( data, 1 ); 

    setInterval( ()=>{
        //console.log( 'ins', Date.now() );
        /*if( dmins ){
            dmins.destroy();
        }
        dmins = new VisChart( box );*/
        dmins.update( data, 1 ); 
    }, 2000 );

    setTimeout( ()=>{
        //dmins.destroy();
        //dmins.resize( 500, 500 );
        /*
        box.style.width = '500px';
        box.style.height = '500px';
        dmins.resize();
        dmins.update( data ); 
        */
    }, 3000 );

}, function () {
  console.log('Font is not available');
});



