

//Links to button and settings
const onOff = document.querySelector('.on-off');
const light = document.querySelectorAll('.light');
const range = document.querySelector('.duration');


onOff.onclick = ()=>{

    if (onOff.innerHTML == 'on') {
        onOff.innerHTML = 'off';
        turnOn(light, onOff)
    }else{
        onOff.innerHTML = 'on';
        turnOff(light, onOff);
    }

}
range.oninput = (e)=>{
    changeColorScheme(e.target.value);
}
range.onchange = (e)=>{
    changeDuration(e.target.value, light);
}


// --------------------------- Additional function ---------------------

function turnOn(light, onOff) {
    for (let i = 0; i < light.length; i++) {
        light[i].style.width = '60px';
        light[i].style.height = '60px';
    }
    onOff.style.color = '#e67e22';
    onOff.style.borderColor = '#e67e22';
    addAnimation(light);
}
function turnOff(light, onOff) {
    for (let i = 0; i < light.length; i++) {
        light[i].style.width = '0';
        light[i].style.height = '0';
        light[i].style.animationName = 'none';
    }
    onOff.style.color = '#2ecc71';
    onOff.style.borderColor = '#2ecc71';
}

function addAnimation(light) {
    light[0].style.animationName = 'flash-2';
    light[1].style.animationName = 'flash-3';
    light[2].style.animationName = 'flash-2';
    light[3].style.animationName = 'flash-1';
    light[4].style.animationName = 'flash-2';
    light[5].style.animationName = 'flash-3';
    light[6].style.animationName = 'flash-2';
}


function changeColorScheme(value) {
    if (value >= 0 && value <= 30) {
        range.style.borderColor = '#e67e22';
    }else if(value >=30 && value <=70){
        range.style.borderColor = '#f1c40f';
    }else{
        range.style.borderColor = '#2ecc71';
    }
}

function changeDuration(value, light) {
    light[0].style.animationDuration = value/35 + 's';
    light[1].style.animationDuration = value/45 + 's';
    light[2].style.animationDuration = value/27 + 's';
    light[3].style.animationDuration = value/35 + 's';
    light[4].style.animationDuration = value/27 + 's';
    light[5].style.animationDuration = value/45 + 's';
    light[6].style.animationDuration = value/35 + 's';
}
