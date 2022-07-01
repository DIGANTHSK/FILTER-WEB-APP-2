function preload() {
}

function setup(){
canavas = createCapture(300, 300);
canavas.center();
video = createCapture(video);
video.size(300, 300);
video.hide();

posenet = ml5.posenet(video,modelloaded);
poset.on('pose',gotposes);
}

function draw() {
Image(video,0,0,300,300);
}

function take_snapshot(){
save("my_picture.jpg");
}

function modelLoaded(){
console.log('posenet is intialized')
}

function gotpose(results){
if(results.length>0){
console.log(results);
console.log("nose x:"+results[0].pose.nose.x);
console.log("nose y:"+results[0].pose.nose.y);
}
}