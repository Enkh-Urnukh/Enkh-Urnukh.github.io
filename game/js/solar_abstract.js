//Enkh-Urnukh Tsolmon
//Project Lab 2
//3D Rendering in Web Browser


let speed1 = 1; //for showing the speed
    let stars = []; //array for stars
    let camera, renderer, sun;
    //objects for planets
    let spaceship = new THREE.Object3D();
    let answers = new THREE.Object3D();
    let fire = new THREE.Object3D();
    let mars = new THREE.Object3D();
    let comet1 = new THREE.Object3D();
    let comet2 = new THREE.Object3D();
    let comet3 = new THREE.Object3D();
    let comet4 = new THREE.Object3D();
    let bullet = new THREE.Object3D();
    let comet = new THREE.Object3D();
    let mesh_mercury, mesh_venus, mesh_earth, mesh_mars, mesh_jupiter, mesh_saturn, mesh_uranus, mesh_neptune, mesh_moon;
    let orbit_color = 0xff0000;
    let planet_size = 0.7; 
    let orbit_size = 15;
    let sun_size=10;
    let scene = new THREE.Scene();
    let planets = [];

    let raycaster = new THREE.Raycaster();
   // let mouse = new THREE.Vector2();
    //background set up
    bg_texture=new THREE.TextureLoader().load( 'img/stars.jpg' );
 let comet_texture = new THREE.TextureLoader().load( 'img/comet.jpg' );
 let comet1_texture = new THREE.TextureLoader().load( 'img/comet1.jpg' );
 let comet2_texture = new THREE.TextureLoader().load( 'img/comet2.jpg' );
 let comet3_texture = new THREE.TextureLoader().load( 'img/comet3.jpg' );
 let comet4_texture = new THREE.TextureLoader().load( 'img/comet4.jpg' );
let bullet_texture = new THREE.TextureLoader().load( 'img/bullet.png' );
    bg_texture.userData = {
	    fitTo : 100
    };
    bg_texture.wrapS = THREE.RepeatWrapping;
    bg_texture.wrapT = THREE.RepeatWrapping;
    scene.background = bg_texture;
    let speed = Math.PI/55; //Since there every planets rotate 360 degrees and frames per second
                            //on average is 55, I adjust the speed by doing this
    //textures for the planets

    let mars_texture = new THREE.TextureLoader().load( 'img/mars.jpg' );


    //I was about to use RayCaster for clicking on each planet to do something, but not working properly
/*     function onDocumentMouseDown( event ) {
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1; 
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1; 
        raycaster.setFromCamera( mouse, camera ); 
        // calculate objects intersecting the picking ray var intersects =     
        var intersects = raycaster.intersectObjects( planets ); 
       
        for ( var i = 0; i < intersects.length; i++ ) { 
          intersects[ i ].object.material.color.set( 0xff0000 ); 
        }
      
    
    } */
    function colorChange(selectObject){
        if (selectObject.value == "blue")
            orbit_color = 0x0000ff;
        else if (selectObject.value == "red")
            orbit_color = 0xff0000;
        else if (selectObject.value == "gray")
            orbit_color = 0xb0b0b0;
        else if (selectObject.value == "yellow")
            orbit_color = 0xffff00;

    }
    //orbits for each planets
  

    //creating solar system
    //orbit size is fixed, which is convenient to look how all the planets move   
    let createSolarSystem = function() {
        
    
    

//var tex = THREE.ImageUtils.loadTexture("js/Fire.png");
//var fire_mesh = new THREE.Fire( tex );
//fire.add(fire_mesh);
//fire.position.y = 0;
//fire.position.x = 0;
//        fire.position.z = 4;
//        fire_mesh.position.=2;
//scene.add( fire_mesh );
       
        
        
        
THREEx.SpaceShips.loadSpaceFighter02(function(object3d){
	// object3d is the loaded spacefighter
	// now we add it to the scene
    		object3d.position.x	= -8;
		object3d.position.y	=  -5;
    
   
  
    spaceship=object3d;
     scene.add(object3d);
       spaceship.rotation.x = -Math.PI;
    
});
        
           geometry = new THREE.CircleGeometry(0.5,40,40);
        material = new THREE.MeshPhongMaterial({map: mars_texture});
        mesh_mars= new THREE.Mesh(geometry, material);
     mars.add(mesh_mars);
    mars.position.z=-10;
        scene.add(mars);
        
       
    }
    function showAnswers (){
         geometry = new THREE.CircleGeometry(0.5,40);
        material = new THREE.MeshBasicMaterial();
        mesh= new THREE.Mesh(geometry, material);
        
           var a = 2;  
var points1 = [
   
    new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
 new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a )
    
];
var points2 = [
   
    new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
 new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a )
    
];
        
var points3 = [
   
    new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
 new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a )
    
];

var points4 = [
   
    new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
 new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a ),
     new THREE.Vector3( Math.random() * a,Math.random() * a,Math.random() * a )
    
];

var geometry1 = new THREE.ConvexGeometry( points1 );
var geometry2 = new THREE.ConvexGeometry( points2 );
var geometry3 = new THREE.ConvexGeometry( points3 );
var geometry4 = new THREE.ConvexGeometry( points4 );
        
var material1 = new THREE.MeshPhongMaterial( {
    map: comet1_texture, 
    shading: THREE.FlatShading
} );
var material2 = new THREE.MeshPhongMaterial( {
    map: comet2_texture, 
    shading: THREE.FlatShading
} );
var material3 = new THREE.MeshPhongMaterial( {
    map: comet3_texture, 
    shading: THREE.FlatShading
} );
var material4 = new THREE.MeshPhongMaterial( {
    map: comet4_texture, 
    shading: THREE.FlatShading
} );
    
var material5 = new THREE.MeshPhongMaterial( {
    map: bullet_texture, 
    shading: THREE.FlatShading
} );


mesh1 = new THREE.Mesh( geometry1, material5 );

        
        
        comet1.add(mesh1);
        comet1.position.x=-8;
        comet1.position.y=-5;
        comet1.position.z=-10;
        
        mesh2= new THREE.Mesh(geometry2, material2);
        comet2.position.x=-2;
        comet2.position.y=-5;
        comet2.position.z=-10;
        comet2.add(mesh2);
        
        mesh3= new THREE.Mesh(geometry3, material3);
        comet3.position.x=4;
        comet3.position.y=-5;
        comet3.position.z=-10;
        comet3.add(mesh3);
        
        mesh4= new THREE.Mesh(geometry4, material4);
        comet4.position.x= 10;
        comet4.position.y=-5;
        comet4.position.z=-10;
        comet4.add(mesh4);
        
        comet.position.z=-10;
        scene.add(comet1);
        scene.add(comet2);
        scene.add(comet3);
        scene.add(comet4);
        
    }
	// creating stars = not accurate, but just for little decoration
    // creates stars every frames on a random position
    // they move towards the camera, which is z direction
	function addStars(){
		for ( var z= -1000; z < 1000; z+=20 ) {
		    let geometry   = new THREE.SphereGeometry(0.5, 32, 32)
		    let material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
		    let star = new THREE.Mesh(geometry, material)
		    star.position.x= Math.random()*window.innerWidth-Math.random()*window.innerWidth*2;
		    star.position.y=Math.random()*window.innerHeight-Math.random()*window.innerHeight*2;
            star.position.z = z;	
		    star.scale.x = star.scale.y = 1;
		    scene.add(star); 
			stars.push(star); 
		}
	}
	function animateStars() {
		for(var i=0; i<stars.length; i++) {
			star = stars[i]; 
			star.position.z +=  i/10;
			if(star.position.z>2000) star.position.z-=3000; 
					
		}
			
	}
    
    let answer = function (){
        if (comet1.position.y <= spaceship.position.y && spaceship.position.x == -8){
            return "a";
        }
        else if (comet1.position.y <= spaceship.position.y && spaceship.position.x == -2){
            return "b";
        }
        else if (comet1.position.y <= spaceship.position.y && spaceship.position.x == 4){
            return "c";
        }
        else if (comet1.position.y <= spaceship.position.y && spaceship.position.x == 10){
            return "d";
        }
        
    }

    function levelReset(){
        let z=-10;
        let y = -5;
        comet.position.z = z;
         comet1.position.z = z;
        comet2.position.z = z;
        comet3.position.z = z;
        comet4.position.z = z;

        
    }

    function gameReset(){
        levelReset();
        mars.position.z = -10;
    }
    //initialization for renderer, camera, light
    let initial = function() {
        
       
        //camera setup
        camera = new THREE.PerspectiveCamera(75, 
                        window.innerWidth / window.innerHeight, 
                        1, 1000);
        camera.position.z = 10;
        camera.position.y = 0;
        camera.position.x = 0;

        //light creation
        let light = new THREE.PointLight(0xffffff,2,100); 
        
        //sun light
        light.position.set(0,0,-10)//sun's position
        let light1 = new THREE.AmbientLight(0xffffff); //ambient light for everything
          let light2 = new THREE.SpotLight(0xffffff); 
        
        //sun light
        light2.position.set(-8,-5,0,100)//sun's
        scene.add(light);
        scene.add(light1);
        scene.add(light2);

        //creating the renderer
        renderer = new THREE.WebGLRenderer();   
        renderer.setSize(document.getElementById('threejs').clientWidth, document.getElementById('threejs').clientHeight);
        
        
        var scene3d = document.getElementById("threejs");
        
        scene3d.appendChild(renderer.domElement);
      // controls = new THREE.OrbitControls( camera, renderer.domElement );
       // document.body.appendChild(renderer.domElement);
        
        window.addEventListener( 'resize', function()
        {
            let width = document.getElementById('threejs').clientWidth;
            let height = document.getElementById('threejs').clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        
        })
                                             
                                    
        createSolarSystem(); //creating solar system
        //createComets();
        //orbit_setup(); //creating the orbits
       addStars(); //adding stars
    
        
        

    
       // renderer.domElement.addEventListener( 'click', onDocumentMouseDown );
        document.addEventListener("keydown", onDocumentKeyDown, true);
        function onDocumentKeyDown(event) {
    var keyCode = event.which;
    var ship_speed = 1;
    
    if (keyCode == 65 && spaceship.position.x >-8) {
        spaceship.position.x -= ship_speed;
    } else if (keyCode == 68 && spaceship.position.x <10) {
        spaceship.position.x += ship_speed;
    }
        else if (keyCode == 87) {
        spaceship.position.y += ship_speed;
    }
        else if (keyCode == 83) {
        spaceship.position.y -= ship_speed;
    }
        
    
};
        showAnswers();
 
     
         //   gameBegin(); 
    }//end of function

    
    
    let game = false;
let level = 0;
let timer = 10;
   function gameBegin(game1){
       
       game=game1;
       console.log(comet.position.z);
       document.getElementById("score").innerHTML ="";
    if (game1){ 
       
        
       
         let s = 0.02;
        let a;
    
            timer -= 0.018;
        document.getElementById("timer").innerHTML=parseInt(timer);
        comet1.position.z += s;
        comet2.position.z += s;
        comet3.position.z += s;
        comet4.position.z += s;
            comet.position.z +=s;

    
        
        
    }
      
      // game=false;
    }//end of gameBegin()


    function levelDecision(a){
       timer=10;
        if (a==myQuestions[level]["correctAnswer"]){
           // alert("YES");
   
            
            
            levelReset();
            level++;
            
            gameBegin(true);
        }
        else{
            
            alert("Game over! You have crashed at level: "+(level+1)+". Better luck next time!");
            levelReset();
            level = 0;
            gameBegin(false);
            location.reload();
        }
        
        
    }

    let render = function(){
      //  orbit_setup();
        renderer.render(scene, camera);
    }
let distance = 225;
    //function for planets rotations
    let rotation = function(){
       // mars.position.z +=0.005;
       // comets.position.z -=0.02;
        if (game){
        let s = 0.01;
      
        mesh1.rotation.y -= s;

        
        mesh2.rotation.y += s;

        
        mesh3.rotation.y -= s;

        
        mesh4.rotation.y += s;
mars.position.z += 0.002020;
          
        }
    
    }
 
    //main loop, on average 55 frames per second
    let mainAnimation = function() {
        animateStars();
        
         gameBegin(game);
     //   level();
        rotation();
        render();
      //  score();
        //colorChange();
       requestAnimationFrame(mainAnimation);
    
    }

    initial();
    mainAnimation();