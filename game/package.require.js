define( [ 'module'	// to set .baseURL
	, './threex.spaceships'
	], function(module){
	// set baseUrl for this extension
	THREEx.SpaceShips.baseUrl	= module.uri+'/../';
});
require([ 'bower_components/threex.spaceships/package.require.js'
    , 'bower_components/threex.spaceships/examples/vendor/three.js/examples/js/loaders/OBJMTLLoader.js'
    , 'bower_components/threex.spaceships/examples/vendor/three.js/examples/js/loaders/OBJLoader.js'
    , 'bower_components/threex.spaceships/examples/vendor/three.js/examples/js/loaders/MTLLoader.js'
        ], function(){
    // ...     
});