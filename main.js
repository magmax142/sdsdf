//

function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    model=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/.json", modelLoaded);
}
function modelLoaded(){
    console.log("model loaded successfully");
    model.classify(getResult)
}

function getResult(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results);
        sound_name=results[0].label;
        sound_accuracy=results[0].confidence;
        document.getElementById("sound_name").innerHTML="i can hear "+sound_name;
        document.getElementById("sound_accuracy").innerHTML="accuracy : "+(sound_accuracy*100).toFixed(2)+"%";
        img1=document.getElementById("alien1");
        img2=document.getElementById("alien2");
        img3=document.getElementById("alien3");
        img4=document.getElementById("alien4");

        if(sound_name=="bell"){
            img1.src="aliens-01.gif";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
        }
        else if(sound_name=="clap"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.gif";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";

        }
        else if(sound_name=="whistle"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.gif";
            img4.src="aliens-04.png";

        }
        else{
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.gif";

        }

        
    }
}


































