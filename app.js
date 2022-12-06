let inputFootHRef = document.getElementById("inputFootH");
let inputFootMRef = document.getElementById("inputFootM");
let inputFootSRef = document.getElementById("inputFootS");

let inputLitrHRef = document.getElementById("inputLitrH");
let inputLitrMRef = document.getElementById("inputLitrM");
let inputLitrSRef = document.getElementById("inputLitrS");

let inputMetrHRef = document.getElementById("inputMetrH");
let inputMetrMRef = document.getElementById("inputMetrM");
let inputMetrSRef = document.getElementById("inputMetrS");


//convert from inputFoot: 
let convertFrominputFootH = () => {
  let inputFootH = inputFootHRef.value;
  inputFootMRef.value = (inputFootH * 0.01666).toFixed(5);
  inputFootSRef.value = (inputFootH * 2.77778).toFixed(5);

  inputLitrHRef.value = (inputFootH * 28.3168).toFixed(5);
  inputLitrMRef.value = (inputFootH * 0.47194).toFixed(5);
  inputLitrSRef.value = (inputFootH * 0.00786).toFixed(5);

  inputMetrHRef.value = (inputFootH * 0.02831).toFixed(5);
  inputMetrMRef.value = (inputFootH * 4.71947).toFixed(5);
  inputMetrSRef.value = (inputFootH * 7.86579).toFixed(5);

};

let convertFrominputFootM = () => {
  let inputFootM = inputFootMRef.value;
  inputFootHRef.value = (inputFootM * 60).toFixed(5);
  inputFootSRef.value = (inputFootM * 0.01666).toFixed(5);

  inputLitrHRef.value = (inputFootM * 1699.01).toFixed(5);
  inputLitrMRef.value = (inputFootM * 28.3168).toFixed(5);
  inputLitrSRef.value = (inputFootM * 0.47194).toFixed(5);

  inputMetrHRef.value = (inputFootM * 1.69901).toFixed(5);
  inputMetrMRef.value = (inputFootM * 0.02831).toFixed(5);
  inputMetrSRef.value = (inputFootM * 4.71947).toFixed(5);
};

let convertFrominputFootS = () => {
  let inputFootS = inputFootSRef.value;
  inputFootHRef.value = (inputFootS * 3600).toFixed(2);
  inputFootMRef.value = (inputFootS * 60).toFixed(2);

  inputLitrHRef.value = (inputFootS * 1.01941).toFixed(5);
  inputLitrMRef.value = (inputFootS * 1699.01).toFixed(3);
  inputLitrSRef.value = (inputFootS * 28.3168).toFixed(3);

  inputMetrHRef.value = (inputFootS * 101.941).toFixed(3);
  inputMetrMRef.value = (inputFootS * 1.69901).toFixed(5);
  inputMetrSRef.value = (inputFootS * 0.02831).toFixed(5);
};

inputFootHRef.addEventListener("input", convertFrominputFootH);
inputFootMRef.addEventListener("input", convertFrominputFootM);
inputFootSRef.addEventListener("input", convertFrominputFootS);


//convert from input Litr:
let convertFrominputLitrH = () => {
  let inputLitrH = inputLitrHRef.value;
  inputLitrMRef.value = (inputLitrH * 0.01666).toFixed(5);
  inputLitrSRef.value = (inputLitrH * 2.77778).toFixed(5);

  inputFootHRef.value = (inputLitrH * 0.03531).toFixed(5);
  inputFootMRef.value = (inputLitrH * 5.88578).toFixed(5);
  inputFootSRef.value = (inputLitrH * 9.80963).toFixed(5);

  inputMetrHRef.value = (inputLitrH * 0.001).toFixed(5);
  inputMetrMRef.value = (inputLitrH * 1.66667).toFixed(5);
  inputMetrSRef.value = (inputLitrH * 2.77778).toFixed(5);

};

let convertFrominputLitrM = () => {
  let inputLitrM = inputLitrMRef.value;
  inputLitrHRef.value = (inputLitrM * 60).toFixed(2);
  inputLitrSRef.value = (inputLitrM * 0.01666).toFixed(5);

  inputFootHRef.value = (inputLitrM * 2.11888).toFixed(5);
  inputFootMRef.value = (inputLitrM * 0.03531).toFixed(5);
  inputFootSRef.value = (inputLitrM * 5.88578).toFixed(5);

  inputMetrHRef.value = (inputLitrM * 0.06).toFixed(2);
  inputMetrMRef.value = (inputLitrM * 0.001).toFixed(3);
  inputMetrSRef.value = (inputLitrM * 1.66667).toFixed(5);
};

let convertFrominputLitrS = () => {
  let inputLitrS = inputLitrSRef.value;
  inputLitrHRef.value = (inputLitrS * 3600).toFixed(2);
  inputLitrMRef.value = (inputLitrS * 60).toFixed(2);

  inputFootHRef.value = (inputLitrS * 127.133).toFixed(3);
  inputFootMRef.value = (inputLitrS * 2.11888).toFixed(5);
  inputFootSRef.value = (inputLitrS * 0.03531).toFixed(5);

  inputMetrHRef.value = (inputLitrS * 3.6).toFixed(2);
  inputMetrMRef.value = (inputLitrS * 0.06).toFixed(2);
  inputMetrSRef.value = (inputLitrS * 0.001).toFixed(3);
};

inputLitrHRef.addEventListener("input", convertFrominputLitrH);
inputLitrMRef.addEventListener("input", convertFrominputLitrM);
inputLitrSRef.addEventListener("input", convertFrominputLitrS);




//convert from input Metr:

let convertFrominputMetrH = () => {
  let inputMetrH = inputMetrHRef.value;
  inputMetrMRef.value = (inputMetrH * 0.01666).toFixed(5);
  inputMetrSRef.value = (inputMetrH * 2.77778).toFixed(5);

  inputLitrHRef.value = (inputMetrH * 1000).toFixed(2);
  inputLitrMRef.value = (inputMetrH * 16.6667).toFixed(5);
  inputLitrSRef.value = (inputMetrH * 0.27777).toFixed(5);

  inputFootHRef.value = (inputMetrH * 35.3147).toFixed(5);
  inputFootMRef.value = (inputMetrH * 0.58857).toFixed(5);
  inputFootSRef.value = (inputMetrH * 0.0098).toFixed(5);

};

let convertFrominputMetrM = () => {
  let inputMetrM = inputMetrMRef.value;
  inputMetrHRef.value = (inputMetrM * 60).toFixed(2);
  inputMetrSRef.value = (inputMetrM * 0.01666).toFixed(5);

  inputLitrHRef.value = (inputMetrM * 6e4).toFixed(2);
  inputLitrMRef.value = (inputMetrM * 1000).toFixed(2);
  inputLitrSRef.value = (inputMetrM * 16.6667).toFixed(5);

  inputFootHRef.value = (inputMetrM * 2118.88).toFixed(2);
  inputFootMRef.value = (inputMetrM * 35.3147).toFixed(5);
  inputFootSRef.value = (inputMetrM * 0.58857).toFixed(5);
};

let convertFrominputMetrS = () => {
  let inputMetrS = inputMetrSRef.value;
  inputMetrHRef.value = (inputMetrS * 3600).toFixed(2);
  inputMetrMRef.value = (inputMetrS * 60).toFixed(2);

  inputLitrHRef.value = (inputMetrS * 3.6e6).toFixed(2);
  inputLitrMRef.value = (inputMetrS * 6e4).toFixed(2);
  inputLitrSRef.value = (inputMetrS * 1000).toFixed(2);

  inputFootHRef.value = (inputMetrS * 1.27133e5).toFixed(2);
  inputFootMRef.value = (inputMetrS * 2118.88).toFixed(2);
  inputFootSRef.value = (inputMetrS * 35.3147).toFixed(4);
};

inputMetrHRef.addEventListener("input", convertFrominputMetrH);
inputMetrMRef.addEventListener("input", convertFrominputMetrM);
inputMetrSRef.addEventListener("input", convertFrominputMetrS);


  //převod tlaku

  let inputBarRef = document.getElementById("inputBar");
  let inputHPaRef = document.getElementById("inputHPa");
  let inputPaRef = document.getElementById("inputPa");
  let inputKPaRef = document.getElementById("inputKPa");
  let inputMPARef = document.getElementById("inputMPA");
  let inputAtmRef = document.getElementById("inputAtm");
  let inputPsiRef = document.getElementById("inputPsi");


  //from Bar
  let convertFrominputBar = () => {
    let inputBar = inputBarRef.value;
    inputHPaRef.value = (inputBar * 1000).toFixed(2);
    inputPaRef.value = (inputBar * 1e5).toFixed(2);
    inputKPaRef.value = (inputBar * 100).toFixed(2);
    inputMPARef.value = (inputBar * 0.1).toFixed(2);
    inputAtmRef.value = (inputBar * 0.98692).toFixed(5);
    inputPsiRef.value = (inputBar * 14.5038).toFixed(5);
  }

  //from HPa

  let convertFrominputHPa = () => {
    let inputHPa = inputHPaRef.value;
    inputBarRef.value = (inputHPa * 0.001).toFixed(3);
    inputPaRef.value = (inputHPa * 100).toFixed(2);
    inputKPaRef.value = (inputHPa * 0.1).toFixed(2);
    inputMPARef.value = (inputHPa * 1e-4).toFixed(5);
    inputAtmRef.value = (inputHPa * 9.86923e-4).toFixed(5);
    inputPsiRef.value = (inputHPa * 0.0145).toFixed(5);
  }

  //from Pa
  let convertFrominputPa = () => {
    let inputPa = inputPaRef.value;
    inputBarRef.value = (inputPa * 1e-5).toFixed(5);
    inputHPaRef.value = (inputPa * 0.01).toFixed(2);
    inputKPaRef.value = (inputPa * 0.001).toFixed(3);
    inputMPARef.value = (inputPa * 1e-6).toFixed(6);
    inputAtmRef.value = (inputPa * 9.86923e-6).toFixed(6);
    inputPsiRef.value = (inputPa * 1.45038e-4).toFixed(5);
  }

  //from KPa
  let convertFrominputKPa = () => {
    let inputKPa = inputKPaRef.value;
    inputBarRef.value = (inputKPa * 0.01).toFixed(2);
    inputHPaRef.value = (inputKPa * 10).toFixed(2);
    inputPaRef.value = (inputKPa * 1000).toFixed(2);
    inputMPARef.value = (inputKPa * 0.001).toFixed(3);
    inputAtmRef.value = (inputKPa * 0.00986).toFixed(5);
    inputPsiRef.value = (inputKPa * 0.14503).toFixed(5);
  }

  //from MPA
  let convertFrominputMPA = () => {
    let inputMPA = inputMPARef.value;
    inputBarRef.value = (inputMPA * 10).toFixed(2);
    inputHPaRef.value = (inputMPA * 1e4).toFixed(2);
    inputPaRef.value = (inputMPA * 1e6).toFixed(2);
    inputKPaRef.value = (inputMPA * 1000).toFixed(2);
    inputAtmRef.value = (inputMPA * 9.86923).toFixed(5);
    inputPsiRef.value = (inputMPA * 145.038).toFixed(5);
  }

  //from Atm
  let convertFrominputAtm = () => {
    let inputAtm = inputAtmRef.value;
    inputBarRef.value = (inputAtm * 1.01325).toFixed(5);
    inputHPaRef.value = (inputAtm * 1013.25).toFixed(3);
    inputPaRef.value = (inputAtm * 1.01325e5).toFixed(2);
    inputKPaRef.value = (inputAtm * 101.325).toFixed(3);
    inputMPARef.value = (inputAtm * 0.10132).toFixed(6);
    inputPsiRef.value = (inputAtm * 14.6959).toFixed(5);
  }

  //from psi
  let convertFrominputPsi = () => {
    let inputPsi = inputPsiRef.value;
    inputBarRef.value = (inputPsi * 0.06894).toFixed(5);
    inputHPaRef.value = (inputPsi * 68.9476).toFixed(4);
    inputPaRef.value = (inputPsi * 6894.76).toFixed(2);
    inputKPaRef.value = (inputPsi * 6.89476).toFixed(5);
    inputMPARef.value = (inputPsi * 0.00689).toFixed(5);
    inputAtmRef.value = (inputPsi * 0.06804).toFixed(5);
  }


  inputBarRef.addEventListener("input", convertFrominputBar);
  inputHPaRef.addEventListener("input", convertFrominputHPa);
  inputPaRef.addEventListener("input", convertFrominputPa);
  inputKPaRef.addEventListener("input", convertFrominputKPa);
  inputMPARef.addEventListener("input", convertFrominputMPA);
  inputAtmRef.addEventListener("input", convertFrominputAtm);
  inputPsiRef.addEventListener("input", convertFrominputPsi);
