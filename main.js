Webcam.set({
    width:350, height:350, image_format:'png', png_quality: 100
});

var camera = document.getElementById("camera");

Webcam.attach('#camera');

function takepic() {
    Webcam.snap(function (datauri){
        document.getElementById("result").innerHTML = '<img id="capture" src="'+datauri+'">';
    });
}

console.log('ml5', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aoTHSGutV/model.json',modelLoaded);