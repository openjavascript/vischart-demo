

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
    //let data = require( './data/dount-disable-animation.json' );
        data 
        && data.series 
        && data.series.map( item => {
            item.background = background;
        });

    let box = document.querySelector('#twoBox');
        
    let dmins = new VisChart( box );
        dmins.update( data, true ); 

    setInterval( ()=>{
        //console.log( 'ins', Date.now() );
        /*if( dmins ){
            dmins.destroy();
        }
        dmins = new VisChart( box );*/
        dmins.update( data, true ); 
    }, 5000 );

    setTimeout( ()=>{
        //dmins.destroy();
        //dmins.resize( 500, 500 );
        //box.style.width = '500px';
        //box.style.height = '500px';
        //dmins.resize( 600, 600 );
        //dmins.update( data ); 
    }, 3000 );


}, function () {
  console.log('Font is not available');
});


