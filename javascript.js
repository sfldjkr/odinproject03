let container = document.querySelector('#container');
let range = document.querySelector('#customRange3');
let randomColor = false;
let randomButton = document.querySelector('#randomcolor');
let eraserButton = document.querySelector('#eraser');
let darkButton = document.querySelector('#dark');
let choiceColor = document.querySelector('#favcolor');
let clearButton = document.querySelector('#clear');
let choiceButton = document.querySelector('#custom');
let body = document.querySelector('body');
let eraser = false;
let dark = false;
let choice = false;




let randomRGB = () => Math.floor(Math.random() * 255);

let makeDivColorfull = (e) => {
    if (randomColor) {
        let one = randomRGB();
        let two = randomRGB();
        let three = randomRGB();
    
        e.target.style.backgroundColor = `rgb(${one},${two},${three})`;
        
    };

};

let eraseDiv = (e) => {

    if (eraser) {
        e.target.style.backgroundColor = `white`;
        
    };
};

let makeDivDark = (e) => {

    if (dark) {
        e.target.style.backgroundColor = `black`;
      
    };
};

let makeDivChoiceColor = (e) => {
    if (choice) {
        let color = document.getElementById("favcolor");
        e.target.style.backgroundColor = `${color.value}`;
     
    };
};



let addDivListeners = () => {
    let indivisualBox = document.querySelectorAll('.indivisualDiv');
    if (randomColor) {
        indivisualBox.forEach(div => {
            div.addEventListener('mouseover', makeDivColorfull);
        });
    }
    else if (eraser) {
        indivisualBox.forEach(div => {
            div.addEventListener('mouseover', eraseDiv);
        });
    }

    else if (dark) {
        indivisualBox.forEach(div => {
            div.addEventListener('mouseover', makeDivDark);
        });
    }

    else if (choice) {

        indivisualBox.forEach(div => {
            div.addEventListener('mouseover', makeDivChoiceColor);
        });
    }
    
};


let makeDivs = () => {
    let neededDivs = range.value;
    container.innerHTML = ``;
    for (let i = 0; i < neededDivs; i++) {
        const lineDiv = document.createElement('div');
        lineDiv.classList.add('nestedContainer');
        for (let v = 0; v < neededDivs; v++) {
            const singleLineDiv = document.createElement('div');
            singleLineDiv.classList.add('indivisualDiv');

            singleLineDiv.style.backgroundColor = 'white';
            lineDiv.appendChild(singleLineDiv);
        }
        container.appendChild(lineDiv);
    };
    eraser = false;
    eraserButton.innerText = `Eraser`;
    dark = false;
    choice = false;
    darkButton.innerText = 'Darker';
    randomColor = false;
    randomButton.innerText = `Rainbow Mode`;


}



let activateRandomColor = () => {
    eraser = false;
    eraserButton.innerText = `Eraser`;

    dark = false;
    choice = false;
    darkButton.innerText = 'Darker';

    if (randomColor === false) {
        randomButton.innerText = `Using Rainbow`;
        randomColor = true;

    }
    else {
        randomButton.innerText = `Rainbow Mode`;
        randomColor = false;
    };
    addDivListeners();
};

let activateEraser = () => {
    randomColor = false;
    randomButton.innerText = `Rainbow Mode`;
    dark = false;
    choice = false;
    darkButton.innerText = 'Darker';
    if (eraser === false) {
        eraserButton.innerText = `Erasing`;
        eraser = true;

    }
    else {
        eraserButton.innerText = `Eraser`;
        eraserButton = false;
    };
    addDivListeners();
};

let activateDarker = () => {
    randomColor = false;
    randomButton.innerText = `Rainbow Mode`;
    eraser = false;
    choice = false;
    eraserButton.innerText = `Eraser`;
    if (dark === false) {
        darkButton.innerText = `Darkening`;
        dark = true;

    }
    else {
        darkButton.innerText = `Darker`;
        dark = false;
    };
    addDivListeners();
};

let activateChoiceColor = () => {

    randomColor = false;
    randomButton.innerText = `Rainbow Mode`;
    eraser = false;
    eraserButton.innerText = `Eraser`;
    dark = false;
    darkButton.innerText = `Darker`;
    if (choice === false) {
        choice = true;

    };
    body.click();
    addDivListeners();
};




randomButton.addEventListener('click', activateRandomColor);
eraserButton.addEventListener('click', activateEraser);
darkButton.addEventListener('click', activateDarker);
choiceColor.addEventListener('change', activateChoiceColor);
clearButton.addEventListener('click', makeDivs);


let buttonHover = () => {
    // for random button
    if (randomColor) {
        randomButton.classList.remove('btn-outline-dark');
        randomButton.classList.add('btn-dark')
    };
    if (!randomColor) {
        randomButton.classList.remove('btn-dark');
        randomButton.classList.add('btn-outline-dark')
    };

    // for darker 
    if (dark) {
        darkButton.classList.remove('btn-outline-dark');
        darkButton.classList.add('btn-dark')
    };
    if (!dark) {
        darkButton.classList.remove('btn-dark');
        darkButton.classList.add('btn-outline-dark')
    };

    if (choice) {

        choiceButton.classList.remove('btn-outline-dark');
        choiceButton.classList.add('btn-dark')
    };
    if (!choice) {

        choiceButton.classList.remove('btn-dark');
        choiceButton.classList.add('btn-outline-dark');
    };







};

body.addEventListener('click', buttonHover);


