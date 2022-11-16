
var point = 0;
let numQuestion = 0;
var startTime = 0;
var elapse = 0;
var pickComposer;
var chosenName;
var pickInstrument;
var pickOpus;
var ansComposer;
var ansInstrument;
var ansForm;
var ansKey;
var ansNumber;
var ansOps;
var audio;
var j = 0;
var storeP = 0;
var point1 = [];
var point2 = [];
var point3 = [];
var point4 = [];
var point5 = [];
var point6 = [];
var countQ = 0;
var storeP = 0;

var multi = [10, 8, 5, 2, 1]
var first = document.getElementById("nameAns");
var second = document.getElementById("instruAns");
var third = document.getElementById("formAns");
var fourth = document.getElementById("NoAns");
var fifth = document.getElementById("Key");
var sixth = document.getElementById("Ops");

function Composer(name) {
    this.name = name;
    this.instruments = [];
    this.titles = [];
    this.times = [];
    this.opuses = [];
    this.nos = [];
    this.mms = [];
    this.keys = [];
    this.AddSong = function(instrument, title, no, key, opus, time) {
        this.instruments.push(instrument)
        this.titles.push(title)
        this.nos.push(no)
        this.keys.push(key)
        this.opuses.push(opus)
        this.times.push(time)
    }
}

const Wieniawski = new Composer("Wieniawski");
const Liszt = new Composer("Liszt");
const Chopin = new Composer("Chopin");
const Haydn = new Composer("Haydn")
const Paganini = new Composer("Paganini");
const Schumann1 = new Composer("R.Schumann")
const Beethoven = new Composer("Beethoven");
const Brahms = new Composer("Brahms");
const Tchaikovsky = new Composer("Tchaikovsky");
const Rachmaninoff = new Composer("Rachmaninoff");
const Smetana = new Composer('Smetana');
const Schubert = new Composer('Schubert');
const Shostakovich = new Composer('Shostakovich');
const Mendelssohn = new Composer('Mendelssohn');
const Grieg = new Composer('Grieg');
const Strauss = new Composer('Strauss');
const Prokofiev = new Composer('Prokofiev');
const Dvořák = new Composer('Dvořák');
const Mozart = new Composer('Mozart');
const Wagner = new Composer('Wagner');
const Elgar = new Composer('Elgar');
const Mahler = new Composer('Mahler');

Wieniawski.AddSong('Violin', 'Concerto', '1', 'F-sharp-m', '14', 1700);

Wagner.AddSong('Symphony', 'Overture', 'NA', 'NA', 'NA', 930);

Mozart.AddSong('Violin', 'Concerto', '3', 'G', 'big', 1490);
Mozart.AddSong('Violin', 'Concerto', '5', 'A', 'big', 1680);
Mozart.AddSong('Piano', 'Concerto', '21', 'C', 'big', 1650);
Mozart.AddSong('Piano', 'Concerto', '22', 'E-flat', 'big', 2140);
Mozart.AddSong('Symphony', 'Overture', 'NA', 'NA', 'big', 340); // Don Giovanni
Mozart.AddSong('Flute', 'Concerto', '1', 'G', 'big', 1500);
Mozart.AddSong('Symphony', 'Symphony', '40', 'G-m', 'big', 1580);
Mozart.AddSong('Symphony', 'Symphony', '41', 'C', 'big', 1800);
Mozart.AddSong('Oboe', 'Concerto', '1', 'C', 'big', 1150);

Dvořák.AddSong('Cello', 'Concerto', '1', 'B-m', '104', 2289);
Dvořák.AddSong('Violin', 'Concerto', '1', 'A-m', '53', 1860);
Dvořák.AddSong('Symphony', 'Symphony', '8', 'G', '88', 2360);
Dvořák.AddSong('Symphony', 'Symphony', '9', 'E-m', '95', 2460);
Dvořák.AddSong('Symphony', 'Overture', 'NA', 'NA', '92', 548); // Carnival OVerture
Dvořák.AddSong('Strings', 'Serenade', '1', 'E', '22', 1720);
Dvořák.AddSong('Strings', 'Quartet', '12', 'F', '96', 1540);
Dvořák.AddSong('Piano', 'Quintet', '2', 'A', '81', 2350);
//Dvořák

Prokofiev.AddSong('Violin', 'Concerto', '2', 'G-m', '63', 1690);
Prokofiev.AddSong('Piano', 'Concerto', '2', 'G-m', '16', 1860);
Prokofiev.AddSong('Violin', 'Concerto', '1', 'D', '19', 1320);
Prokofiev.AddSong('Symphony', 'Suite', '1', 'NA', '64', 1730); // Romeo and Juilet 
Prokofiev.AddSong('Symphony', 'Symphony', '1', 'D', '25', 840);
Prokofiev.AddSong('Symphony', 'Overture', 'NA', 'NA', '33', 890) // Lovee of three oranges

Strauss.AddSong('Symphony', 'Waltz', 'NA', 'NA', 'big', 700); // Emperor Waltz
Strauss.AddSong('Symphony', 'March', 'NA', 'NA', 'big', 180); // Radezty march
Strauss.AddSong('Cello', 'Sonata', '1', 'F', '6', 1560); // Cello sonata
Strauss.AddSong('Symphony', 'Poem', 'NA', 'E', '20', 1100);  // Don Juan
Strauss.AddSong('Symphony', 'Poem', '1', 'NA', '64', 3240)  // Alpine Symphony

Grieg.AddSong('Piano', 'Concerto', '1', 'A-m', '16', 1750);
Grieg.AddSong('Strings', 'Suite', '1', 'NA', '40', 1150);  //Holberg
Grieg.AddSong('Strings', 'Quartet', '1', 'G-m', '27', 1980);
Grieg.AddSong('Violin', 'Sonata', '3', 'C-m', '45', 1420);
Grieg.AddSong('Cello', 'Sonata', '1', 'A-m', '36', 1680);

Mendelssohn.AddSong('Strings', 'Octet', '1', 'E-flat', '20', 1680);
Mendelssohn.AddSong('Piano', 'Concerto', '1', 'G-m', '25', 1130);
Mendelssohn.AddSong('Violin', 'Concerto', '1', 'E-m', '64', 1590);
Mendelssohn.AddSong('Piano', 'Trio', '1', 'D-m', '49', 1870);
Mendelssohn.AddSong('Symphony', 'Overture', 'NA', 'B-m', '26', 615); //
Mendelssohn.AddSong('Symphony', 'Overture', 'NA', 'E', '21', 720);

Shostakovich.AddSong('Piano', 'Concerto', '2', 'F', '102', 1190);
Shostakovich.AddSong('Cello', 'Concerto', '1', 'E-flat', '107', 1630);
Shostakovich.AddSong('Cello', 'Sonata', '1', 'D-m', '40', 1500);

Beethoven.AddSong('Piano', 'Sonata', '23', 'F-m', '57', 1520);
Beethoven.AddSong('Piano', 'Sonata', '21', 'C', '53', 1420);
Beethoven.AddSong('Cello', 'Sonata', '1', 'F', '5', 1380);
Beethoven.AddSong('Cello', 'Sonata', '2', 'G-m', '5', 1560);
Beethoven.AddSong('Cello', 'Sonata', '3', 'A', '69', 1380);
Beethoven.AddSong('Cello', 'Sonata', '4', 'C', '102', 900);
Beethoven.AddSong('Cello', 'Sonata', '5', 'D', '102', 1130);

Schumann1.AddSong('Piano', 'Concerto', '1', 'A-m', '54', 1650);
Schumann1.AddSong('Piano', 'Trio', '1', 'D-m', '63', 1860);
Schumann1.AddSong('Piano', 'Trio', '2', 'F', '80', 1600);
Schumann1.AddSong('Piano', 'Quartet', '1', 'E-flat','47', 1590);
Schumann1.AddSong('Cello', 'NA', 'NA', 'NA', '70', 530); // Adagio and Allegro

Schubert.AddSong('Cello', 'Sonata', '1', 'A-m', 'big', 1440);
Schubert.AddSong('Symphony', 'Symphony', '9', 'C', 'big', 3360);
Schubert.AddSong('Strings', 'Quartet', '14', 'D-m', 'big', 2350);
Schubert.AddSong('Symphony', 'Symphony', '8', 'B-m', 'big', 1600);
Schubert.AddSong('Piano', 'Quintet', '1', 'D', 'big', 2280); // Trout
Schubert.AddSong('Piano', 'Fantasia', '1', 'F-m', 'big', 1140); //4 hands fantasia

Liszt.AddSong('Piano', 'Etude', '4', 'D-m', '139', 420); // Transceendtal
Liszt.AddSong('Piano', 'Etude', '3', 'F', '139', 250); // Transceendtal
Liszt.AddSong('Piano', 'Etude', '8', 'C-m', '139', 270); // Transceendtal
Liszt.AddSong('Piano', 'Etude', '9', 'A-flat-m', '139', 660); // Transceendtal
Liszt.AddSong('Piano', 'Etude', '10', 'F-m', '139', 250); // Transceendtal
Liszt.AddSong('Piano', 'Etude', '11', 'D-flat-m', '139', 510); // Transceendtal
Liszt.AddSong('Piano', 'Etude', '12', 'B-flat-m', '139', 295); // Transceendtal
Liszt.AddSong('Piano', 'Transcription', 'NA', 'NA', 'Big', 968); // Don Juan Mozart

Chopin.AddSong('Piano', 'Ballade', '1', 'G-m', '23', 540);
Chopin.AddSong('Piano', 'Ballade', '2', 'F', '38', 400);
Chopin.AddSong('Piano', 'Nocturne', '1', 'C-m', '48', 360);
Chopin.AddSong('Piano', 'Nocturne', '2', 'E-flat', '9', 240);
Chopin.AddSong('Piano', 'Polonaise', 'NA', 'A-flat', '53', 410);
Chopin.AddSong('Piano', 'Polonaise', 'NA', 'E-flat', '22', 780);
Chopin.AddSong('Piano', 'Scherzo', '1', 'B-m', '20', 530);
Chopin.AddSong('Piano', 'Scherzo', '2', 'B-flat-m', '31', 570)
Chopin.AddSong('Piano', 'Scherzo', '3', 'C-sharp-m', '39', 470);
Chopin.AddSong('Piano', 'Scherzo', '4', 'E', '54', 645);
Chopin.AddSong('Piano', 'Waltz', '3', 'F', '34', 120);
Chopin.AddSong('Piano', 'Etude', '1', 'C', '10', 120);
Chopin.AddSong('Piano', 'Etude', '2', 'A-m', '10', 60);
Chopin.AddSong('Piano', 'Etude', '3', 'E', '10', 220);
Chopin.AddSong('Piano', 'Etude', '4', 'C-sharp-m', '10', 115);
Chopin.AddSong('Piano', 'Etude', '5', 'G-flat', '10', 90);
Chopin.AddSong('Piano', 'Etude', '6', 'E-flat-m', '10', 180);
Chopin.AddSong('Piano', 'Etude', '7', 'C', '10', 85);
Chopin.AddSong('Piano', 'Etude', '8', 'F', '10', 125);
Chopin.AddSong('Piano', 'Etude', '9', 'F-m', '10', 110);
Chopin.AddSong('Piano', 'Etude', '10', 'A-flat', '10', 130);
Chopin.AddSong('Piano', 'Etude', '11', 'E-flat-m', '10', 190);
Chopin.AddSong('Piano', 'Etude', '12', 'C-m', '10', 150);
Chopin.AddSong('Piano', 'Sonata', '2', 'B-flat-m', '35', 1245);
Chopin.AddSong('Piano', 'Sonata', '3', 'B-m', '58', 1470)

Haydn.AddSong('Cello', 'Concerto', '1', 'C', 'NA', 1380);
Haydn.AddSong('Cello', 'Concerto', '2', 'D', 'NA', 1300);

Paganini.AddSong('Violin', 'Concerto', '1', 'D', '6', 2220);
Paganini.AddSong('Violin', 'Concerto', '2', 'B-m','7', 1860);
Paganini.AddSong('Violin', 'Concerto', '3', 'E', '61', 2160);

Brahms.AddSong('Violin', 'Concerto', '1', 'D', '77', 2540);
Brahms.AddSong('Cello', 'Sonata', '1', 'E-m', '38', 1500);
Brahms.AddSong('Symphony', 'Symphony', '1', 'C-m', '68', 2580);
Brahms.AddSong('Strings', 'Concerto', 'NA', 'A-m', '102', 1980); // Double concerto
Brahms.AddSong('Symphony', 'Symphony', '2', 'D', '73', 2340);
Brahms.AddSong('Symphony', 'Symphony', '3', 'F', '90', 2100);

Tchaikovsky.AddSong('Violin', 'Concerto', '1', 'D', '35', 2240);
Tchaikovsky.AddSong('Piano', 'Concerto', '1', 'B-flat', '23', 2046);
Tchaikovsky.AddSong('Strings', 'Serenade', '1', 'C', '48', 1730); //Seerenade for strings
Tchaikovsky.AddSong('Symphony', 'Overture', 'NA', 'NA', 'NA', 1220); // Romeoe and Juilet 
Tchaikovsky.AddSong('Strings', 'Sextet', '1', 'D-m', '70', 2000); //Souvenir de Florencee

Rachmaninoff.AddSong('Piano', 'Concerto', '2', 'C-m', '18', 2020);
Rachmaninoff.AddSong('Piano', 'Concerto', '3', 'D-m', '30', 2580);
Rachmaninoff.AddSong('Cello', 'Sonata', '1', 'G-m', '19', 2040); 
Rachmaninoff.AddSong('Piano', 'Variations', 'NA', 'NA', '22', 1600); // chopin variation

Smetana.AddSong('Piano', 'Trio', '1', 'G-m', '15', 1760);
Smetana.AddSong('Symphony', 'NA', 'NA', 'NA','43', 630); // Moldau
Smetana.AddSong('Strings', 'Quartet', '1', 'E-m', 'Big', 1800);

Elgar.AddSong('Cello', 'Concerto', '1', 'E-m', '85', 1620);
Elgar.AddSong('Strings', 'Strings', 'NA', 'NA', '47', 890);
Elgar.AddSong('Elgar', 'Piano', 'Quintet', 'A-m', '84', 2240);

Mahler.AddSong('Symphony1', 'Symphony','2', 'C-m', 'NA', 1500);
Mahler.AddSong('Symphony2', 'Symphony','2', 'C-m', 'NA', 658);
Mahler.AddSong('Symphony3', 'Symphony','2', 'C-m', 'NA', 620);
Mahler.AddSong('Symphony1', 'Symphony','5', 'C-sharp-m', 'NA', 780);
Mahler.AddSong('Symphony2', 'Symphony','5', 'C-sharp-m', 'NA', 920);
Mahler.AddSong('Symphony3', 'Symphony','5', 'C-sharp-m', 'NA', 1118);
Mahler.AddSong('Symphony4', 'Symphony','5', 'C-sharp-m', 'NA', 584);

audioComp = [Wieniawski, Liszt, Chopin, Haydn, Paganini, Shostakovich,
    Beethoven, Brahms, Tchaikovsky, Rachmaninoff, Schumann1, Smetana,
    Mendelssohn, Grieg, Prokofiev, Mahler];


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
    ansNumber = songComposer.nos[chosenSongIndex];
    ansKey = songComposer.keys[chosenSongIndex];
    ansOps = songComposer.opuses[chosenSongIndex];

    chosenTitle = ansComposer + '_' + ansInstrument + '_' + 
        ansForm + '_' + ansNumber + '_' + ansKey + '_' + ansOps;
    console.log(chosenTitle);
 
    totalTime = songComposer.times[chosenSongIndex];
    
    startTime = Math.floor((totalTime - 20) * Math.random());
    audioString = '/music/' + chosenTitle + '.mp3';
    
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
    third.style.background = "white";
    fourth.style.background = 'white';
    fifth.style.background = 'white';
    sixth.style.background = 'white';
    pickComposer = '';
    pickInstrument = '';
    pickKey = '';
    pickNo = '';
    pickOp = '';
    pickTitle = '';
    point1 = [];
    point2 = [];
    point3 = [];
    point4 = [];
    point5 = [];
    point6 = [];
}
function RefreshResponse () {
    first.style.background = 'white';
    second.style.background = 'white';
    third.style.background = 'white';
    fourth.style.background = 'white';
    fifth.style.background = 'white';
    sixth.style.background = 'white';
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
    if (point3.length === 0) {
        p3 = 0;
    }
    else {
        p3 = point3[0]
    }
    if (point4.length === 0) {
        p4  = 0;
    }
    else {
        p4 = point4[0]
    }
    if (point5.length === 0) {
        p5 = 0;
    }
    else {
        p5 = point5[0]
    }
    if (point6.length === 0) {
        p6 = 0;
    }
    else {
        p6 = point6[0]
    }

    point = p1 + p2 + p3 + p4 + p5 + p6;
    return point
}

function Submit() {
    RefreshResponse();
    q1 = (ansComposer === pickComposer);
    q2 = (ansInstrument === pickInstrument);
    q3 = (ansForm === pickTitle);
    q4 = (ansNumber === pickNo);
    q5 = (ansKey === pickKey);
    q6 = (ansOps === pickOpus);

    ans = q1 * q2 * q3 * q4 * q5 * q6;
    
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
    if (q3) {
        
        setTimeout(() => {
            third.style.background = "green";
    }, 2000);
        point3.push(multi[j] * 10);
    }

    if (!q3) {
        setTimeout(() => {
            third.style.background = "red";
    }, 2000);
    }       
    if (q4) {
        setTimeout(() =>
    {
        fourth.style.background = "green";
    }, 2500);
        point4.push(multi[j] * 10);
    }

    if (!q4) {
        setTimeout(() =>
    {
        fourth.style.background = "red";
    }, 2500);
    }
    if (q5) {
        
        setTimeout(() => {
            fifth.style.background = "green";
    }, 3000);
        point5.push(multi[j] * 10);
    };

    if (!q5) {
        setTimeout(() => {
            fifth.style.background = "red";
    }, 3000);
    }

    if (q6) {
        setTimeout(() =>
    {
        sixth.style.background = "green";
    }, 3500);
        point6.push(multi[j] * 10);
    }

    if (!q6) {
        setTimeout(() =>
    {
        sixth.style.background = "red";
    }, 3500);
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
    var formR = document.getElementsByClassName('ti');
    for (var a = 0; a < formR.length; a++) {
        if (formR[a].innerHTML === ansForm) {
            idnum = formR[a].id;
            strComp = " active" + idnum;
            formR[a].className += strComp;
            break;
        }
    }
    var noR = document.getElementsByClassName('no');
    for (var a = 0; a < noR.length; a++) {
        if (noR[a].innerHTML === ansNumber) {
            idnum = noR[a].id;
            strComp = " active" + idnum;
            noR[a].className += strComp;
            break;
        }
    }
    var keyR = document.getElementsByClassName('ke');
    for (var a = 0; a < keyR.length; a++) {
        if (keyR[a].innerHTML === ansKey) {
            idnum = keyR[a].id;
            strComp = " active" + idnum;
            keyR[a].className += strComp;
            break;
        }
    }
    var opR = document.getElementsByClassName('op');
    for (var a = 0; a < opR.length; a++) {
        if (opR[a].innerHTML === ansOps) {
            idnum = opR[a].id;
            strComp = " active" + idnum;
            opR[a].className += strComp;
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

    tot = start + elapse
    audio.load()
    audio.currentTime = start;
    audio.play()
	setInterval(function(){
		if(audio.currentTime > (tot)){
		        audio.pause();
				}
			}, 200);
}


