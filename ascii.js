"use strict";
const NORMAL_SPEED = 250;
const TURBO_SPEED = 50;
let duration = NORMAL_SPEED;
let objInterval;
let currentFrame = 0;
let presetAnimation;

function onStart(){
    if(presetAnimation !== "changeanimation"){
        presetAnimation = document.getElementById('text-area').value;
    }
    objInterval = setInterval(generateAnimation, duration);
}

function generateAnimation(){
    let aminationOption = document.getElementById('animation');
    let whichOne = aminationOption.options[aminationOption.selectedIndex].value;
    if(ANIMATIONS[whichOne] !== null && ANIMATIONS[whichOne] !==""){
        let arr = ANIMATIONS[whichOne].split("=====\n");
        if(presetAnimation !== null && presetAnimation !== "changeanimation"){
            arr.unshift(presetAnimation);
        }
        if(currentFrame >= arr.length){
            currentFrame = 0;
        }
        document.getElementById('text-area').value = arr[currentFrame++];
        disableAnimation(true);
    } else if(ANIMATIONS[whichOne] === null){
        
    } else{
        clearInterval(objInterval);
    }
}

function disableAnimation(isStart){
    document.getElementById("start").disabled = isStart;
    document.getElementById("stop").disabled = !isStart;
    document.getElementById("animation").disabled = isStart;
}

function onChangeAnimation() {
    document.getElementById("text-area").value = "";
    presetAnimation = "";
}

function onStop(){
    disableAnimation(false);
    clearInterval(objInterval);
    if(presetAnimation !== null && presetAnimation !=="" && presetAnimation !== "changeanimation"){
        document.getElementById('text-area').value = presetAnimation;
    }
}

function onChangeSize(){
    document.getElementById("text-area").style.fontSize = document.getElementById("fontsize").value;
}

function onturbo(){
    let valueChecked = document.getElementById("turbo").checked;
    duration = valueChecked ? TURBO_SPEED : NORMAL_SPEED;
    let myTextArea = document.getElementById("text-area").value;
    if(myTextArea !== null && myTextArea === ""){
        clearInterval(objInterval);
        objInterval = setInterval(generateAnimation, duration);
    }
}