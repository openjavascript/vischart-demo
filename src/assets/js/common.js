

let COLORS = [
    '#da432e',
    '#f3a42d',
    '#b56be8',
    '#207dd3',
    '#50d275',
    '#4aabd6',
    '#f12575',
    '#da432e',
    '#19af89'
];


export function setColor( data, colors ){
    colors = colors || COLORS;


    if( data && data.legend && data.legend.data ){
        data.legend.data.map( ( item, key ) => {
            if( !item.textStyle ) return;

            item.textStyle.color = colors[ key % colors.length ];
        });
    }

    if( data && data.series  ){
        data.series.map( ( item, key ) => {
            if( !item.data ) return;

            item.data.map( ( sitem, skey ) => {
                if( !sitem.itemStyle ) return;
                sitem.itemStyle.color = colors[ skey % colors.length ];
            });
        });
    }

}
