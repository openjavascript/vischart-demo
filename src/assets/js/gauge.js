

import VisChart from 'vischart';

import fontfaceobserver from 'fontfaceobserver';

let font = new fontfaceobserver( 'HuXiaoBoKuHei' );
font.load().then(function () {

    let size = 330;

    let data = require( './data/gauge.json' );
    let dmins = new VisChart( document.querySelector('#twoBox'), size, size );
        dmins.addImage( './img/rate-out.png', 170, 170, 0, 0 );
        dmins.update( data ); 
        setTimeout( ()=>{
            //dmins.update( data ); 
        }, 5000 );

}, function () {
  console.log('Font is not available');
});


