

import VisChart from 'vischart';

import fontfaceobserver from 'fontfaceobserver';

import * as base64img from './data/base64img.js';

import * as common from './common.js';

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
    let data = require( './data/dount-tight4-2-callback.json' );
    //let data = require( './data/dount-custom-label.json' );
    //let data = require( './data/dount-real1.json' );
    //let data = require( './data/dount-disable-animation.json' );
        data 
        && data.series 
        && data.series.map( item => {
            item.background = background;
        });
    common.setColor( data );

    data.series[0].label = {
        "show": true,
        "fontSize": 16,
        "position": "outside",
        //"formatter": '{d}%'
        "formatter": ( params, total ) => {
            return `${((params.value * 100) / total).toFixed(2)}%`;
        }
    };

    let box = document.querySelector('#twoBox');
        
    let dmins = new VisChart( box );
        dmins.update( data, true ); 

    window.addEventListener( 'resize', ()=>{

        window.tmpTimeout && clearTimeout( window.tmpTimeout );

        window.tmpTimeout = setTimeout( ()=>{
            console.log( 'onresize', Date.now(), window.innerHeight );
            let size = Math.min( window.innerWidth, window.innerHeight ) * .6;

            dmins.resize( size, size );
        }, 1000 );
    });
    /*setInterval( ()=>{
    //setTimeout( ()=>{
        //let data = require( './data/dount-tight8-1.json' );
        let data = require( './data/dount-tight4-1.json' );
        //let data = require( './data/dount-real1.json' );
        data 
        && data.series 
        && data.series.map( item => {
            item.background = background;
        });

        common.setColor( data );
        //dmins.resize( 500, 500, data );
        dmins.update( data, 1, 0 );
        //dmins.update( data );

    }, 2000 );*/

/*
*/

    /*
    setTimeout( ()=>{
        //let data = require( './data/dount-tight8-1.json' );
        let data = require( './data/dount-tight4-1.json' );
        //let data = require( './data/dount-real1.json' );
        data 
        && data.series 
        && data.series.map( item => {
            item.background = background;
        });

        common.setColor( data );
        dmins.resize( 500, 500 );

    }, 3000 );

    setTimeout( ()=>{
        //let data = require( './data/dount-tight8-1.json' );
        let data = require( './data/dount-tight4-1.json' );
        //let data = require( './data/dount-real1.json' );
        data 
        && data.series 
        && data.series.map( item => {
            item.background = background;
        });

        common.setColor( data );
        dmins.update( data, true, 0 ); 

    }, 4000 );*/



}, function () {
  console.log('Font is not available');
});


