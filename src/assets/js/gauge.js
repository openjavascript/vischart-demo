

import VisChart from 'vischart';

import fontfaceobserver from 'fontfaceobserver';

import * as base64img from './data/base64img.js';

let Data = require( './data/gauge.json' );
let Data0 = require( './data/gauge0.json' );
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

    let size = 330;

    let box = document.querySelector('#twoBox');

    let data = Data;
        //data = DataDisableAnimation;
        data 
        && data.series 
        && data.series.map( item => {
            item.background = background;
        });

    let dmins = new VisChart( box );
        dmins.update( data, 1 ); 

    setInterval( ()=>{
        let data = Data1100;
            data 
            && data.series 
            && data.series.map( item => {
                item.background = background;
            });

        console.log( 'ins', Date.now() );
        /*if( dmins ){
            dmins.destroy();
        }
        dmins = new VisChart( box );*/
        dmins.update( data, 0, 0 ); 
    }, 2000 );

    setTimeout( ()=>{
        /*let data = Data1100;
            data 
            && data.series 
            && data.series.map( item => {
                item.background = background;
            });

        console.log( 'ins', Date.now() );
        [>if( dmins ){
            dmins.destroy();
        }
        dmins = new VisChart( box );<]
        dmins.resize( 500, 500, data ); */
    }, 3000 );

}, function () {
  console.log('Font is not available');
});



