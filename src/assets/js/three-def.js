

import VisChart from 'vischart';

import fontfaceobserver from 'fontfaceobserver';

import * as base64img from './data/base64img.js';

import * as common from './common.js';

import svgDountBigAll from './data-3d/svg/dount-big-all.txt';
import svgDountIn from './data-3d/svg/dount-in.txt';
import svgDountBig from './data-3d/svg/dount-big.txt';

//import fontjson from './data-3d/fonts/gentilis_regular.typeface.json';
import fontjson from './data-3d/fonts/droid/droid_serif_regular.typeface.json';

window.fontjson = fontjson;

//console.log( 'svnDountBigAll', svgDountBigAll );

let background = [
    { 
        //"url": "./img/dount-in.png"
        "url":svgDountIn
        , "issvgstring": true
        , "width": 120
        , "height": 120
        , "offsetX": 9
        , "offsetY": 0
        , "rotation": 1
        , "rotationAttr": 'y'
    }
    ,
    { 
        //"url": "./img/dount-big.png"
        "url": svgDountBig
        , "issvgstring": true
        , "width": 250
        , "height": 248
        , "offsetX": 0
        , "offsetY": 1
        , "rotation": 1
        , "rotationAttr": 'z'
        //, "rotationStep":  -0.03
    }
];

//console.log( background );

let font = new fontfaceobserver( 'HuXiaoBoKuHei' );
font.load().then(function () {

    //let data = require( './data/dount.json' );
    let data = require( './data/dount-tight4.json' );
    //let data = require( './data/dount-real1.json' );
    //let data = require( './data/dount-disable-animation.json' );
        data 
        && data.series 
        && data.series.map( item => {
            item.background = background;
        });
    common.setColor( data );


    let size = 500;

    let box = document.querySelector('#twoBox');
        
    let dmins = new VisChart.three( box );
        dmins.updateThreeConfig( {
            camera: {
                fov: 40
            }
            , cameraPosition: {
                //z: 300
            }
        });
        dmins.update( data, true ); 

    /*window.addEventListener( 'resize', ()=>{

        window.tmpTimeout && clearTimeout( window.tmpTimeout );

        window.tmpTimeout = setTimeout( ()=>{
            console.log( 'onresize', Date.now(), window.innerHeight );
            let size = window.innerHeight / 2;

            dmins.resize( size, size );
        }, 1000 );
    });*/
    /*setInterval( ()=>{
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

    }, 2000 );
*/
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


