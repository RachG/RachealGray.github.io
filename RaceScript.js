var running = false;
var reset = true;
var pic1Left = 0;
var pic2Left = 0;
var pic3Left = 0;
var pic1Amt = 0;
var pic2Amt = 0;
var pic3Amt = 0;
var rand = 0;
var speed = window.innerWidth / 20;
var finish = window.innerWidth - 100;
var accel = 25;
var buffer = 2;
var pics = document.getElementsByClassName("pic");
var picImgs = document.getElementsByClassName("picImg");

function DynamicSizes() {
    var picDim = window.innerHeight * .13;
    for (i = 0; i < pics.length; i++) {
        pics[i].style.width = picDim.toString() + "px";
        pics[i].style.height = picDim.toString() + "px";
        picImgs[i].style.width = picDim.toString() + "px";
        picImgs[i].style.height = picDim.toString() + "px";
    }
}

function GameStarted() {
    if (!running && reset) {
        speed = window.innerWidth / 20;
        finish = window.innerWidth - 100;

        pic1Left = 0;
        pic2Left = 0;
        pic3Left = 0;

        picAmt = 0;
        pic2Amt = 0;
        pic3Amt = 0;
        rand = 0;

        reset = false;
        running = true;

        document.getElementById("message").style.visibility = "hidden";
        document.getElementById("startButton").style.backgroundImage = "url(https://avatars3.githubusercontent.com/u/2000909?v=3&s=200)";
        document.getElementById("pic1img").src = "pic1.jpg";
        document.getElementById("pic2img").src = "pic2.png";
        document.getElementById("pic3img").src = "pic3.jpg";


        loop();
    }
}

function Reset() {
    if (!reset) {
        reset = true;

        for (i = 0; i < pic.length; i++) {
            pics[i].style.left = "0%";
        }

        document.getElementById("message").style.visibility = "hidden";
    }
}


function loop() {
    if (running) {
        setTimeout(function() {
            MovePics();
            speed += accel;
            rand = 500;
            loop();
        }, rand);
    }
};

function MovePics() {

    if (pic1Left < finish && pic2Left < finish && pic3Left < finish) {
        var amt = Math.round(Math.random() * speed + buffer);
        if (amt < pic1Amt) {
            amt = pic1Amt + 2;
        }
        pic1Left += amt;
        pic1Amt = amt;
        document.getElementById("pic1").style.left = pic1Left.toString() + "px";
        document.getElementById("pic1").style.right = (document.getElementById("pic1").style.right - amt).toString() + "px";

        var amt = Math.round(Math.random() * speed + buffer);
        if (amt < pic2Amt) {
            amt = pic2Amt + 2;
        }
        pic2Left += amt;
        pic2Amt = amt;
        document.getElementById("pic2").style.left = pic2Left.toString() + "px";
        document.getElementById("pic2").style.right = (document.getElementById("pic2").style.right - amt).toString() + "px";

        var amt = Math.round(Math.random() * speed + buffer);
        if (amt < pic3Amt) {
            amt = pic3Amt + 2;
        }
        picLeft += amt;
        pic3Amt = amt;
        document.getElementById("pic3").style.left = pic3Left.toString() + "px";
        document.getElementById("pic3").style.right = (document.getElementById("pic3").style.right - amt).toString() + "px";






    } else {
        running = false;
        document.getElementById("startButton").style.backgroundImage = "https://driverstesttest/pics/awesomeflashinglight.gif.info/";
        document.getElementById("message").style.visibility = "visible";

        document.getElementById("pic1img").src = "pic1.jpg";
        document.getElementById("pic2img").src = "pic2.png";
        document.getElementById("pic3img").src = "pic3.jpg";

        var winner = Math.max(pic1Left, pic2Left, pic3Left);

        if (pic1Left == winner) {
            document.getElementById("message").innerText = "John Snow Wins!";

        } else if (pic2Left == winner) {
            document.getElementById("message").innerText = "Daenerys Wins!";

        } else if (pic3Left == winner) {
            document.getElementById("message").innerText = "Cersei Wins!";


        }

    }
}