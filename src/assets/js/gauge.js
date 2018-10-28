

import VisChart from 'vischart';

import fontfaceobserver from 'fontfaceobserver';

import * as base64img from './data/base64img.js';

let Data = require( './data/gauge.json' );
let Data0 = require( './data/gauge0.json' );
let Data1 = require( './data/gauge1.json' );
let Data1100 = require( './data/gauge1100.json' );
let DataDisableAnimation = require( './data/gauge-disable-animation.json' );

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

    let size = 300;

    let box = document.querySelector('#twoBox');

    let data = Data;
        //data = DataDisableAnimation;
        data 
        && data.series 
        && data.series.map( item => {
            item.background = background;
        });

    let dmins = new VisChart( box, 386, 283 );
        dmins.update( data, 1, 0 ); 

    window.addEventListener( 'resize', ()=>{

        window.tmpTimeout && clearTimeout( window.tmpTimeout );

        window.tmpTimeout = setTimeout( ()=>{
            console.log( 'onresize', Date.now(), window.innerHeight );
            let size = window.innerHeight / 2;

            dmins.resize( size, size );
        }, 1000 );
    });

    setInterval( ()=>{
        //let data = Data1100;
        let data = Data1;
            data 
            && data.series 
            && data.series.map( item => {
                item.background = background;
            });
        //dmins.resize( 500, 500 ); 
        dmins.update( data, 1, 0 );
    }, 5000 );

/*

    setTimeout( ()=>{
        let data = Data1100;
            data 
            && data.series 
            && data.series.map( item => {
                item.background = background;
            });

        dmins.resize( 300, 300, data ); 
    }, 3000 );

    setTimeout( ()=>{
        let data = Data1100;
            data 
            && data.series 
            && data.series.map( item => {
                item.background = background;
            });


        dmins.resize( 386, 250, data ); 
    }, 3000 );

*/



}, function () {
  console.log('Font is not available');
});



