// Restaurant Home Page

const home = function() {
    container.style.backgroundImage =  "url('/home/n0xx/Documentos/top/javascript-path/project-restaurant-page/src/modules/assets/llapin2.jpg')"; 
  
    // Container elements
    const description = document.createElement('div');
    description.id = 'description';
    description.textContent = 'Little description about dishes';
    container.appendChild(description);
}

export default home;
