import './style.css'
import logoPostBaby from '/postBaby.webp'
import donationPng from '/bmc-button.png'
import reponPng from '/brand-github.svg'

const h1 = ()=>{return document.createElement('h1')}
const img = ()=>{return document.createElement('img')}
const p = ()=>{return document.createElement('p')}
const input = ()=>{return document.createElement('input')}
const button = ()=>{return document.createElement('button')}
const br = ()=>{return document.createElement('br')}
const pre = ()=>{return document.createElement('pre')}
const a = ()=>{return document.createElement('a')}


const app = document.querySelector('#app');
let json = ''

const title = h1()
title.textContent='postBaby'

const postBaby = img()
postBaby.src = logoPostBaby
postBaby.className = 'logo'
postBaby.alt='post baby logo'

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

const donationImg = img()
donationImg.src = donationPng
donationImg.alt='button donation'
donationImg.height='64'


const donationLink = a()
donationLink.href='https://www.buymeacoffee.com/eamarquezh'
donationLink.target='_blank'
donationLink.appendChild(donationImg)


const texto = p()
texto.textContent=`Post baby is free, but if you feel it's worth it,you can buy me a coffee with the following button.`

const textoCode = p()
textoCode.textContent=`If you want to take a look at the code, please visit the following repository.`



const repoImg = img()
repoImg.src = reponPng
repoImg.alt='button repository'
repoImg.height='64'

const repoLink = a()
repoLink.href='https://github.com/eamarquezh/post-baby'
repoLink.target='_blank'
repoLink.appendChild(repoImg)



app.appendChild(title)
app.appendChild(postBaby)
app.appendChild(description)
app.appendChild(br())
app.appendChild(way)
app.appendChild(br())
app.appendChild(btnTest)
app.appendChild(btnClean)
app.appendChild(br())
app.appendChild(responseT)
app.appendChild(br())
app.appendChild(texto)
app.appendChild(donationLink)
app.appendChild(br())
app.appendChild(textoCode)
app.appendChild(repoLink)

btnClean.addEventListener('click', () => {
    responseT.textContent = ``;
    way.value = ``;
});

btnTest.addEventListener('click', async () => {
    try {
        const data = await fetchCall(way.value);
        updateResponseT(data);
    } catch (error) {
        responseT.textContent = `Error ${error}`;
    }
});



const fetchCall = async (theURL) => {
    responseT.textContent = `Wait ...`;
    try {
        const response = await fetch(theURL)
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return await response.json();
    } catch (error) {
        throw new Error(`c: ${error}`)
    }
};

const updateResponseT = (jsonData) => {
    const json = JSON.stringify(jsonData, null, 2);
    responseT.textContent = json;
};
