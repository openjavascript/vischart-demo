
window.COMMON_SCRIPT = [
    '/assets/js/manifest.js'
    , '/assets/js/vendor.js'
];

let host = location.host
    , port = 9888
    , prefix = `http://${host}:${port}`
    ;

function addScript( file ){
    file && window.COMMON_SCRIPT.push( file );

    window.COMMON_SCRIPT.map( (item) => {
        let url = `${prefix}${item}`; 

        document.write( `<script src="${url}"></script>` );
    });
};
