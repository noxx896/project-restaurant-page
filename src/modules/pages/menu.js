// Menu page

const menu = function() {
    const container_menu = document.createElement('div');
    
    container_menu.id = 'container-menu';
    
    container_menu.textContent = ' Menu section';

    container.appendChild(container_menu);

    const seco_pollo = document.createElement('div');
    seco_pollo.id = 'seco-pollo';
    seco_pollo.textContent = 'Seco de pollo';
    container_menu.appendChild(seco_pollo);

    const carne_asada = document.createElement('div');
    carne_asada.id= 'carne-asada';
    carne_asada.textContent = 'Carne asada';
    container_menu.appendChild(carne_asada);
    
    const pescado_frito = document.createElement('div');
    pescado_frito.id = 'pescado-frito';
    pescado_frito.textContent = 'Pescado frito',
    container_menu.appendChild(pescado_frito); 
   
    const camaron_apanado = document.createElement('div');
    camaron_apanado.id = 'camaron-apanado';
    camaron_apanado.textContent = 'Camaron apanado';
    container_menu.appendChild(camaron_apanado); 
    
    const llapin = document.createElement('div');
    llapin.id = 'llapin';
    llapin.textContent = 'Llapingacho';
    container_menu.appendChild(llapin); 
}

export default menu;
