var Ennemy = function(name, color, position, direction) {
    
        this.name = name;
        this.position = position;
        this.life = 3;
        this.bullets = new Array();
        this.direction = direction;
        this.speed = 0;
    
        this.material = new THREE.MeshLambertMaterial({
            color: color,
            });
    
        bumperMesh = new THREE.Mesh(new THREE.CylinderGeometry(0, 10, 10, 12, 12, false), this.materialBumper);
        bumperMesh.rotation.x = Math.PI / 2 ;
    
        sphere = new THREE.SphereGeometry(6, 8, 8);
        THREE.GeometryUtils.merge(sphere, bumperMesh);
    
        canon = new THREE.CubeGeometry(3, 3, 15);
        THREE.GeometryUtils.merge(canon, sphere);
    
        this.graphic = new THREE.Mesh(sphere, this.material);
        this.graphic.position.z = 6;
        this.graphic.rotateOnAxis(new THREE.Vector3(0,0,1), this.direction);
    };
    
    
    
    Ennemy.prototype.dead = function () {
        this.graphic.position.z = this.graphic.position.z-0.1;
            //Nettoyage de la div container
            $("#container").html("");
            jQuery('#'+this.name+' >.life').text("Tu es mort !");
            init();
    }
    
   
    
   
    
    
    Ennemy.prototype.move = function () {
        var moveTo = new THREE.Vector3(
            10+ this.graphic.position.x,
            this.graphic.position.y,
            this.graphic.position.z
        );
        this.graphic.position = moveTo;
        if (this.speed > 0) {
            this.speed = this.speed - 0.04;
        }
        else if (this.speed < 0) {
            this.speed = this.speed + 0.04
        }
    
        light1.position.x = this.graphic.position.x;
        light1.position.y = this.graphic.position.y;
       // light1.position.z = this.graphic.position.z + 500;
    };
    