

import VisChart from 'vischart';

import fontfaceobserver from 'fontfaceobserver';



let font = new fontfaceobserver( 'HuXiaoBoKuHei' );
font.load().then(function () {

    let data = require( './data/gauge.json' );
    let dmins = new VisChart( document.querySelector('#twoBox'), 340, 340 );
        dmins.update( data ); 
        setTimeout( ()=>{
            //dmins.update( data ); 
        }, 5000 );

}, function () {
  console.log('Font is not available');
});



