
var point = 0;
let numQuestion = 0;
var startTime = 0;
var elapse = 0;
var pickComposer;
var pickInstrument;
var ansComposer;
var ansInstrument;
var audio;
var j = 0;
var storeP = 0;
var point1 = [];
var point2 = [];
var countQ = 0;

var multi = [10, 8, 5, 2, 1]
var first = document.getElementById("nameAns");
var second = document.getElementById("instruAns");

// instruments here is year of release

function Composer(name) {
    this.name = name;
    this.instruments = [];
    this.titles = [];
    this.times = [];
    this.AddSong = function(instrument, title, time) {
        this.instruments.push(instrument)
        this.titles.push(title)
        this.times.push(time)
    }
}

const Kanye = new Composer("Kanye West");
const AJR = new Composer("AJR");
const ShawnMendes = new Composer("Shawn Mendes");
const TwentyOnePilots = new Composer("21 Pilots");
const Maroon5 = new Composer("Maroon 5");
const EdSheeran = new Composer("Ed Sheeran");
const JohnLegend = new Composer("John Legend");
const Avicii = new Composer("Avicii");

AJR.AddSong('2021', 'WorldSmallestViolin', 180);
AJR.AddSong('2019', '100BadDays', 210);

ShawnMendes.AddSong('2022', 'WhenYoureGone', 170);
ShawnMendes.AddSong('2016', 'TreatYouBetter', 240);
ShawnMendes.AddSong('2017', 'TheresNothingHoldMeBack', 195);
ShawnMendes.AddSong('2015', 'Stitches', 205);

TwentyOnePilots.AddSong('2015', 'StressedOut', 210);
TwentyOnePilots.AddSong('2016', 'Heathens', 187);
TwentyOnePilots.AddSong('2013', 'HouseOfGold', 160);
TwentyOnePilots.AddSong('2015', 'TearMyHeart', 183);

Maroon5.AddSong('2015', 'Sugar', 240);
Maroon5.AddSong('2018', 'GirlsLikeYou', 250);
Maroon5.AddSong('2019', 'Memories', 180);
Maroon5.AddSong('2011', 'MovesLikeJagger', 200);

EdSheeran.AddSong('2017', 'Perfect', 256);
EdSheeran.AddSong('2015', 'Photograph', 255);
EdSheeran.AddSong('2017', 'ShapeOfYou', 236);
EdSheeran.AddSong('2014', 'ThinkingOutLoud', 343);

JohnLegend.AddSong('2013', 'AllOfMe', 300);
JohnLegend.AddSong('2016', 'StartAFire', 174);

Avicii.AddSong('2013', 'WakeMeUp', 243);
Avicii.AddSong('2015', 'WaitingForLove', 228);
Avicii.AddSong('2014', 'TheNights', 173);
Avicii.AddSong('2011', 'Levels', 195);
Avicii.AddSong('2013', 'HeyBrother', 251);

audioComp = [AJR, ShawnMendes, TwentyOnePilots, Maroon5, EdSheeran, JohnLegend, Avicii];


function nextQuestion() {
    Update(Correct());
    Objective();
    countQ = countQ + 1;
    Refresh();
    songComposerIndex = Math.floor(audioComp.length * Math.random());

    songComposer = audioComp[songComposerIndex];
    
    console.log(songComposer);
    numSong = songComposer.titles.length;
    
    chosenSongIndex = Math.floor(numSong * Math.random());
    chosenName = songComposer.name;

    // assigning answeer
    ansComposer = chosenName;
    ansInstrument = songComposer.instruments[chosenSongIndex];
    ansForm = songComposer.titles[chosenSongIndex];

    chosenTitle =  ansComposer + '_' + ansInstrument + '_' + ansForm;
    console.log(chosenTitle);
 
    totalTime = songComposer.times[chosenSongIndex];
    
    startTime = Math.floor((totalTime - 20) * Math.random());
    audioString = '/musicpop/' + chosenTitle + '.mp3';
    
    audio = document.getElementById('audio');
    audio.src = audioString
    audio.type = "audio/ogg";
    
       
}

function RefreshBeforeAnswer() {
    var current = Array.from(document.getElementsByClassName("active1"));
    current = current.concat((Array.from(document.getElementsByClassName("active2"))));
    current = current.concat((Array.from(document.getElementsByClassName("active3"))));
    current = current.concat((Array.from(document.getElementsByClassName("active4"))));
    current = current.concat((Array.from(document.getElementsByClassName("active5"))));
    current = current.concat((Array.from(document.getElementsByClassName("active6"))));
      
    if (current.length > 0) {
        for (var i = 0; i < current.length; i++) {
            s = current[i].id;
            str = " active" + s;
            current[i].className = current[i].className.replace(str, "");
        };
    }   
}

function Refresh() {
    
    var current = Array.from(document.getElementsByClassName("active1"));
    current = current.concat((Array.from(document.getElementsByClassName("active2"))));
    current = current.concat((Array.from(document.getElementsByClassName("active3"))));
    current = current.concat((Array.from(document.getElementsByClassName("active4"))));
    current = current.concat((Array.from(document.getElementsByClassName("active5"))));
    current = current.concat((Array.from(document.getElementsByClassName("active6"))));
      
    if (current.length > 0) {
        for (var i = 0; i < current.length; i++) {
            s = current[i].id;
            str = " active" + s;
            current[i].className = current[i].className.replace(str, "");
        };
    }
    j = 0;
    first.style.background = 'white';
    second.style.background = 'white';
    pickComposer = '';
    pickInstrument = '';
    point1 = [];
    point2 = [];
}
function RefreshResponse () {
    first.style.background = 'white';
    second.style.background = 'white';
}

function playAudio(startTime, j){
    store = [3, 5, 9, 15, 20];
    elapse = store[j];
    setTime(startTime);

}    
    
function pauseAudio() { 
    audio.pause(); 
} 

function Objective() {
    // number of questions to reach 6000
    // minimum is 10 questions
    console.log(storeP);
    if (storeP >= 6000) {
        Finish();
        RevealAns();
    }
}

function Finish() {
    var fp = document.getElementById('fpoints');
    var fq = document.getElementById('fques');
    fp.innerHTML = storeP;
    fq.innerHTML = countQ;
}

function Correct() {
    if (point1.length === 0) {
        p1 = 0;
    }
    else {
        p1 = point1[0];
    }
    if (point2.length === 0) {
        p2 = 0
    }
    else {
        p2 = point2[0];
    }

    point = p1 + p2;
    return point
}

function Submit() {
    RefreshResponse();
    q1 = (ansComposer === pickComposer);
    q2 = (ansInstrument === pickInstrument);

    ans = q1 * q2;
    
    if (q1) {
        
        setTimeout(() => {
            first.style.background = "green";
    }, 1000);
        point1.push(multi[j] * 10);
    }
    if (!q1) {
        setTimeout(() => {
            first.style.background = "red";
    }, 1000);
    }
    if (q2) {
        setTimeout(() =>
    {
        second.style.background = "green";
    }, 1500);
        point2.push(multi[j] * 10);
    }

    if (!q2) {
        setTimeout(() =>
    {
        second.style.background = "red";
    }, 1500);
    }

    if (!ans) {
        j = j + 1;
        if (j === 5) {
            RevealAns();
            Update(Correct());
        }
       Correct();
    }
}
function RevealAns() {
    RefreshBeforeAnswer();
    var compR = document.getElementsByClassName('com');
    for (var a = 0; a < compR.length; a++) {
        if (compR[a].innerHTML === chosenName) {
            idnum = compR[a].id;
            strComp = " active" + idnum;
            compR[a].className += strComp;
            break;
        }
    }
    var instruR = document.getElementsByClassName('in');
    for (var a = 0; a < instruR.length; a++) {
        if (instruR[a].innerHTML === ansInstrument) {
            idnum = instruR[a].id;
            strComp = " active" + idnum;
            instruR[a].className += strComp;
            break;
        }
    }

}

function Update(point) {
    po = document.getElementById("points");
    storeP = storeP + point;
    po.innerHTML = storeP;
}

function setTime(start){
    console.log(audio)
    tot = start + elapse
    console.log(start)
    console.log(tot)
    audio.load()
    audio.currentTime = start;
    audio.play()
	setInterval(function(){
		if(audio.currentTime > (tot)){
		        audio.pause();
				}
			}, 200);
}
