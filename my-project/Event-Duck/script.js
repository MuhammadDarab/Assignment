reset();
function reset() {

    var pointx;
    var pointy;

    let duck1 = document.createElement('div');
    let gun = document.querySelector('.gun');
    let bullet = document.createElement('section');

    document.body.append(duck1);
    duck1.style.position = 'absolute';

    let fly = new Audio();
        fly.src = "sounds/Fly1.mp3";
        fly.autoplay = true;
        fly.load();

    let shot = new Audio();
        shot.src = "sounds/shot.mp3";
        shot.load();

    duck1.addEventListener("mousedown", Shot);
    document.addEventListener("mousedown", Miss);

    let oldVals = {

        top : 0,
        left : 0

    }

    let gameStart = setInterval(() => {
        
        let value1 = valueGenerator1();
        let value2 = valueGenerator2();

        duck1.style.transition = '0s';
        duck1.style.removeProperty = ('transition');
        duck1.style.transition = '0s';

        // if(oldVals.top < value1)
        // {
        //     // console.log("New Value is Greater");
        //     duck1.style.backgroundImage = "url('images/duckTopRight.gif')";
        // }
        // else{

        //     // console.log("New Value is Smaller");
        //     duck1.style.backgroundImage = "url('images/duckTopLeft.gif')";
        // }


        if(oldVals.left < value2)
        {
            duck1.style.backgroundImage = "url('images/duckTopRight.gif')";
        }
        else{
            
            duck1.style.backgroundImage = "url('images/duckTopLeft.gif')";
        }


        let value1px = value1;
        value1px+='px'; 

        // console.log("value1 => " + value1px);

        let value2px = value2;
        value2px+='px'; 
        
        // console.log("value2 => " + value2px);

        setTimeout( () => {

            duck1.style.transitionTimingFunction = "linear";
            duck1.style.transition = '1s';

            duck1.style.top = value1px;
            duck1.style.left = value2px;
        
            oldVals.top = value1; 
            oldVals.left = value2;

        } ,200);


        setTimeout(() => {

            duck1.style.transition = '0s';

        },800);


    }, 500);

    let soundStart = setInterval(() => fly.play() , 0);


    let count = 0;
    let html = document.querySelector('html');

    function valueGenerator1(){

        let value = Math.trunc(Math.random() * 500);

        return value;
    }

    function valueGenerator2(){

        let value = Math.trunc(Math.random() * 1500);

        return value;
    }

    function Shot() {

            clearInterval(gameStart);
            clearInterval(soundStart);
            
            fly.pause();
            fly.currentTime = 0;
      
            shot.play();


            //for retro style recoil
            gun.src = "/images/shoot.gif";


            //for smooth recoil.
            // gun.style.transition = '.2s';

            // gun.style.width = '70%';

            // gun.style.removeProperty = ('transition');


            // setTimeout(() => {

            //     gun.style.width = '50%';

            // }, 300);

            // setTimeout(() => {

            //     gun.style.transition = '0s';
            //     gun.style.removeProperty = ('transition');

            // }, 500);
            

            
            duck1.style.transition = "0s";
            duck1.style.backgroundImage = "url('images/duckShot.png')";
        
            setTimeout(() => {
        
                duck1.style.transition = ".5s";
                duck1.style.top = "600px";
                duck1.style.backgroundImage = "url('images/duckDed.png')";
            }, 1500)
        
        count++;

            // fly.ended(true);
            // shot.ended(true);
            
            // setTimeout( reset , 3000);
    }

    function Miss() {

        shot.play();
        gun.src = "/images/shoot.gif";
        shot.currentTime = 0;
 
        bullet.style.width = "10px";
        bullet.style.height = "10px";
        bullet.style.backgroundColor = "white";
        bullet.style.transition = ".5s";
        bullet.style.position = 'absolute';

        document.body.append(bullet);

        bullet.style.left = pointerX + 'px';
        bullet.style.top = pointerY + 'px';

        setTimeout(() => {
        bullet.style.width = "0px";
        bullet.style.left = (pointerX - 50) + 'px';
        bullet.style.top = (pointerY - 50) + 'px'; 

        bullet.style.height = "0px";
        },0);


        console.log(bullet.style.top);
        console.log(bullet.style.left);

    }

    //--------------------------------------------------------------------------------------
    let pointerX = -1;
    let pointerY = -1;
    
    let xVal;
    let yVal;
    document.onmousemove = function (event) {
        pointerX = event.pageX;
        pointerY = event.pageY;

        xVal = (pointerX)/16;
        yVal = ((pointerY)/32) + 45;
        
        gun.style.top =  yVal + '%';
        gun.style.left = xVal + '%';

    }
    
}