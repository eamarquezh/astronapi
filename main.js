import './style.css'
import logoPostBaby from '/postBaby.webp'

const h1 = ()=>{return document.createElement('h1')}
const img = ()=>{return document.createElement('img')}
const p = ()=>{return document.createElement('p')}
const input = ()=>{return document.createElement('input')}
const button = ()=>{return document.createElement('button')}
const br = ()=>{return document.createElement('br')}
const pre = ()=>{return document.createElement('pre')}


const app = document.querySelector('#app');
let json = ''

const title = h1()
title.textContent='postBaby'

const postBaby = img()
postBaby.src = logoPostBaby
postBaby.className = 'logo'

const description = p()
description.textContent ='Test you API public no auth'

const way = input()
way.placeholder ='Enter URL'
way.value = ''

const btnTest = button()
btnTest.textContent='Test'

const btnClean = button()
btnClean.textContent='Clean'

const responseT = pre()
responseT.textContent=`${json}`


app.appendChild(title)
app.appendChild(postBaby)
app.appendChild(description)
app.appendChild(br())
app.appendChild(way)
app.appendChild(btnTest)
app.appendChild(btnClean)
app.appendChild(br())
app.appendChild(responseT)


btnClean.addEventListener('click', () => {
    responseT.textContent = ``;
    way.value = ``;
});

btnTest.addEventListener('click', async () => {
    try {
        const data = await fetchCall(way.value);
        updateResponseT(data);
    } catch (error) {
        responseT.textContent = `Hubo un problema con la operación fetch: ${error}`;
    }
});



const fetchCall = async (theURL) => {
    responseT.textContent = `Espera ...`;
    try {
        const response = await fetch(theURL)
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Hubo un problema con la operación fetch: ${error}`)
    }
};

const updateResponseT = (jsonData) => {
    const json = JSON.stringify(jsonData, null, 2);
    responseT.textContent = json;
};
