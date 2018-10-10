

import VisChart from 'vischart';

import fontfaceobserver from 'fontfaceobserver';



let font = new fontfaceobserver( 'HuXiaoBoKuHei' );
font.load().then(function () {

    //let data = require( './data/dount.json' );
    let data = require( './data/dount-tight1.json' );
    let dmins = new VisChart( document.querySelector('#twoBox'), 410, 330 );
        /*
        dmins.addImage( './img/dount-in.png', 120, 120, 0, 1 );
        dmins.addImage( './img/dount-big.png', 250, 248, 0, 1 );
        */
        dmins.update( data ); 

        setTimeout( ()=>{
            //dmins.update( data ); 
        }, 5000 );

}, function () {
  console.log('Font is not available');
});



