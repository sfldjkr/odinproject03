let container = document.querySelector('#container');
let range = document.querySelector('#customRange3');


let makedivs = () => {
    let neededDivs = range.value;
    container.innerHTML = ``;
    for (let i = 0; i < neededDivs; i++) {
        const lineDiv = document.createElement('div');
        lineDiv.classList.add('nestedContainer');
        for (let v = 0; v < neededDivs; v++) {
            const singleLineDiv = document.createElement('div');
            singleLineDiv.classList.add('indivisualDiv');
            singleLineDiv.innerText = '.';
            singleLineDiv.style.color = 'white';
            lineDiv.appendChild(singleLineDiv);
        }
        container.appendChild(lineDiv);
    }
}
