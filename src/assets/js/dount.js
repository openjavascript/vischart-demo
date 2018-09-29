

import VisChart from 'vischart';


let data = require( './data/dount.json' );

let dmins = new VisChart( document.querySelector('#twoBox'), 340, 340 );
    dmins.setImage( './img/dount-out.png', 120, 120, 0, 1 );
    dmins.update( data ); 

    setTimeout( ()=>{
        //dmins.update( data ); 
    }, 5000 );
