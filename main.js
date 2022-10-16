console.log('connected js')
let toggleIcon =document.getElementById('toggle-icon')
let pageA = document.getElementById('sec1')
let pageW = document.getElementById('sec2')
let pageC = document.getElementById('sec3')
let userSelect = document.getElementById('userSelect')
let username = document.getElementById('username')

document.documentElement.setAttribute('data-theme','dark')

function changeProfile(img) {
    document.getElementById("profile").img.src;
}

function m_menu_toggle(){
    let menu = document.getElementById("menu-list")
    if(menu.style.display === "none"){
        menu.style.display = "block"
    }
    else{
        menu.style.display = "none"
    }
    console.log()
}

function switchMode(e){
    if(document.documentElement.getAttribute('data-theme') === 'dark'){
         document.documentElement.setAttribute('data-theme','light')
         toggleIcon.children[0].classList.replace('fa-moon','fa-sun')
         console.log("change mode to "+ document.documentElement.getAttribute('data-theme'))
    }else{
         document.documentElement.setAttribute('data-theme','dark')
         toggleIcon.children[0].classList.replace('fa-sun','fa-moon')
         console.log("change mode to "+ document.documentElement.getAttribute('data-theme'))
    }
 }

function test(){
    console.log('test')
}

function toAboutPage(){
    pageA.style.display = "block"
    pageW.style.display = "none"
    pageC.style.display = "none"
}

function toWorksPage(){
    pageA.style.display = "none"
    pageW.style.display = "block"
    pageC.style.display = "none"
}

function toContactPage(){
    pageA.style.display = "none"
    pageW.style.display = "none"
    pageC.style.display = "block"
}

function userPick(){
    if (userSelect.style.display === "none"){
        userSelect.style.display = "block"
    }
    else{
        userSelect.style.display = "none"
    }
    console.log("UserSelect "+userSelect.style.display)
}

function userSpromsatSelected(){    
    document.getElementById('username').value = "spromsat"
    document.getElementById("profile-img").src ="spromsat-profile.jpg";
    userSelect.style.display = "none"
}

function userPothimroSelected(){    
    document.getElementById('username').value = "pothimro"
    document.getElementById("profile-img").src ="293472999_807773387123661_8440423069184366558_n.jpg";
    userSelect.style.display = "none"
}

function checkUsername(){
    document.getElementById("error-msg").style.display = "none"
    let usertextarea = username.value
    console.log(usertextarea)
    if(usertextarea==="spromsat"){
        location.replace("./spromsat.html")
    }

    else if(usertextarea==="pothimro"){
        location.replace("./pothimro.html")
    }

    else{
        document.getElementById("error-msg").style.display = "block"
    }
}