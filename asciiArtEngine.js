
var wid = 0;
var T = document.getElementById('userInput').value;
var model = '';

var ROW = [];
var hei = 0;

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!'";



const manhattan = document.getElementById('manhattan').innerText;

const seattle = document.getElementById('seattle').innerText;

const berlin = document.getElementById('berlin').innerText;

const amsterdam = document.getElementById('amsterdam').innerText;

function select(s){
    if (s === 'manhattan'){
        document.getElementById('anteprimaAscii').innerText = manhattan;
        wid = 4;
    }
    if (s==='seattle'){
        document.getElementById('anteprimaAscii').innerText = seattle;
        wid = 5;
    }
    if (s==='berlin'){
        document.getElementById('anteprimaAscii').innerText = berlin;
        wid = 8;
    }
    if (s==='amsterdam'){
        document.getElementById('anteprimaAscii').innerText = amsterdam;
        wid = 8;
    }
    model = document.getElementById('anteprimaAscii').innerText;
    ROW = model.split(/\n/);
    hei = ROW.length;
}

function execution(){
    console.log(document.getElementById('userInput').value);
    var indexes = [];
    for (let i = 0; i<document.getElementById('userInput').value.length; i++){
        indexes[i] = alfabeto.indexOf(document.getElementById('userInput').value[i]) === -1 ? alfabeto.toLowerCase().indexOf(document.getElementById('userInput').value[i]) : alfabeto.indexOf(document.getElementById('userInput').value[i]);
        indexes[i] = indexes[i] === -1 ? 27 : indexes[i];
    }
    console.log(indexes);
    
    let stringa ='';
    for (let i = 0; i<hei; i++){
        indexes.forEach((v) =>{
            stringa += ROW[i].slice(wid*v,wid*v+wid);
    
        });
        stringa += '\n';
    }
    document.getElementById('risultato').innerText = stringa;
    document.getElementById('risultato').scrollLeft += 100;
}