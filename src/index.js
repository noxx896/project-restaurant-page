import home from './modules/pages/home'
import about from './modules/pages/about'
import menu from './modules/pages/menu'
import './modules/styles/home.css'
import './modules/styles/about.css'
import './modules/styles/menu.css'



const content = document.querySelector('#content');

// Main structure
const header = document.createElement('div');
header.id = 'header';    
content.appendChild(header);

const container = document.createElement('div');
container.id = 'container';
content.appendChild(container);

const footer = document.createElement('footer');
footer.textContent = '@n0xx 2022';
content.appendChild(footer);

// Header elements
const logo_div = document.createElement('div');
logo_div.id = 'logo-div';
logo_div.textContent = 'El Golosito';
header.appendChild(logo_div);

const chef = document.createElement('div');
chef.id = 'chef-div';
chef.textContent = 'NO CHEF KDJ';
logo_div.appendChild(chef);
chef.style.backgroundImage = "url('/home/n0xx/Documentos/top/javascript-path/project-restaurant-page/src/modules/assets/chef.jpg')"; 

const sections_div = document.createElement('div');
sections_div.id = 'sections-div';
header.appendChild(sections_div);
   
const home_btn = document.createElement('div');
home_btn.id = 'home-btn';
home_btn.textContent = 'Home';
sections_div.appendChild(home_btn);

const menu_btn = document.createElement('div');
menu_btn.id = 'menu-btn';
menu_btn.textContent = 'Menu';
sections_div.appendChild(menu_btn);

const about_btn = document.createElement('div');
about_btn.id = 'about-btn';
about_btn.textContent = 'About';
sections_div.appendChild(about_btn);

home();

// Events
about_btn.addEventListener('click', ()=> {
    for(const child of document.getElementById('container').childNodes)
        child.style.display = 'none';
    
    about();
    document.getElementById('about-btn').style.pointerEvents = 'none';
    document.getElementById('menu-btn').style.pointerEvents = 'auto';
    document.getElementById('home-btn').style.pointerEvents = 'auto';
    
    document.getElementById('about-btn').classList.add('selected-div');
    document.getElementById('menu-btn').classList.remove('selected-div');
    document.getElementById('home-btn').classList.remove('selected-div');
   
 
});

menu_btn.addEventListener('click', ()=> {
    for(const child of document.getElementById('container').childNodes)
        child.style.display = 'none';
       
    menu();
    document.getElementById('menu-btn').style.pointerEvents = 'none';
    document.getElementById('about-btn').style.pointerEvents = 'auto';
    document.getElementById('home-btn').style.pointerEvents = 'auto';

    document.getElementById('about-btn').classList.remove('selected-div');
    document.getElementById('menu-btn').classList.add('selected-div');
    document.getElementById('home-btn').classList.remove('selected-div');
   

});

home_btn.addEventListener('click', ()=> {
    for(const child of document.getElementById('container').childNodes)
        child.style.display = 'none';
     
    home();
    document.getElementById('home-btn').style.pointerEvents = 'none';
    document.getElementById('menu-btn').style.pointerEvents = 'auto';
    document.getElementById('about-btn').style.pointerEvents = 'auto';

    document.getElementById('about-btn').classList.remove('selected-div');
    document.getElementById('menu-btn').classList.remove('selected-div');
    document.getElementById('home-btn').classList.add('selected-div');
   

});





console.log('Some log alert');
