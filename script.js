
    const redScheme = ['#ffffff', '#faffd8', '#c16e70', '#8c2f39', '#151e3f', '#030027']
    const orangeScheme = ['#f9dbbd',  '#fca17d', '#e07a15', '#b33605', '#0d0628'];
    const yellowScheme = ['#e6dfb2', '#f7ac50', '#E59500', '#5a315e', '#4520103', '#210f04'];
    const greenScheme = ['#E5F4E3', '#329F5B', '#6DA34D', '#074F57', '#5A315E ', '#423B0B'];
    const blueScheme = ['#E2DBBE', '#EC98AB', '#6D98B0', '#074F57', '#36080F'];
    const indigoScheme = ['#D3F3EE', '#C589E8', '#9E4280', '#087F8C', '#2B3A67'];
    const violetScheme = ['#E5E5E5', '#A53860', '#C589E8', '#8D3B72',  '#2B3A67'];
    const whiteScheme = ['#F5F3F5', '#D4C4CB', '#48ABD5', '#8F4500', '#221E1C'];
    const popup = document.getElementById("popup");
    const content = document.getElementById("content");
    const container = document.getElementById("container");
    const boxes = document.getElementsByClassName("resourceBox");
    const lists = document.getElementsByTagName("lu");

// Initial popup to change site color

    let changeBackgroundColor = (event) => {
        event.preventDefault();
        let color = userInput.value.toLowerCase();
        if (color === 'pink' || color === 'red') {
            document.body.style.backgroundColor = redScheme[4]
            content.style.backgroundColor = redScheme[3]
            container.style.color = redScheme[1] + '7e'
            container.style.backgroundColor = redScheme[2]
            console.log('Great Choice!')
        }
        else if (color === 'orange') {
            document.body.style.backgroundColor = orangeScheme[3];
            content.style.backgroundColor = orangeScheme[2]
            container.style.color = orangeScheme[4] + '7e'
            container.style.backgroundColor = orangeScheme[1]
        }
        else if (color === 'yellow' || color === 'brown') {
            document.body.style.backgroundColor = yellowScheme[2]
            content.style.backgroundColor = yellowScheme[1]
            container.style.color = yellowScheme[4]
            container.style.backgroundColor = yellowScheme[0]
        }
        else if (color === 'green') {
            document.body.style.backgroundColor = greenScheme[4]
            content.style.backgroundColor = greenScheme[2]
            container.style.color = greenScheme[3]
            container.style.backgroundColor = greenScheme[1]
        }
        else if (color === 'blue') {
            document.body.style.backgroundColor = blueScheme[3]
            content.style.backgroundColor = blueScheme[2]
            container.style.color = blueScheme[1]
            container.style.backgroundColor = blueScheme[0]
        }
        else if (color === 'indigo') {
            document.body.style.backgroundColor = indigoScheme[4]
            content.style.backgroundColor = indigoScheme[3]
            container.style.color = indigoScheme[2]
            container.style.backgroundColor = indigoScheme[0]
        }
        else if (color === 'purple' || color === 'violet') {
            document.body.style.backgroundColor = violetScheme[3]
            content.style.backgroundColor = violetScheme[2]
            container.style.color = violetScheme[1]
            container.style.backgroundColor = violetScheme[0]
        }
        else if (color === 'white' || color === 'black') {
            document.body.style.backgroundColor = whiteScheme[3]
            content.style.backgroundColor = whiteScheme[1]
            container.style.color = whiteScheme[0]
            container.style.backgroundColor = whiteScheme[4]
        }
        else {
            console.log('Invalid Color!')
        }
        userInput.value = '';
        popup.style.visibility = 'hidden';
    }
let newColorButton = document.getElementById('newColorButton');
newColorButton.onclick = changeBackgroundColor;
let userInput = document.getElementById('userInput')

// make the popup visible again on click
const resetButton = document.getElementById('reset')
const returnPopup = (event) => {
    return popup.style.visibility = "visible";
}
resetButton.onclick = returnPopup