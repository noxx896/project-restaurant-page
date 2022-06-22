// Restaurant Home Page

const home = function() {
    const content = document.querySelector('#content');
    
    const header = document.createElement('div');
    header.id = 'header';
    header.textContent = 'header';
    content.appendChild(header);

    const container = document.createElement('div');
    container.textContent = 'container-div';
    content.appendChild(container);

    const footer = document.createElement('footer');
    footer.textContent = '@n0xx 2022';
    content.appendChild(footer);
}

export default home;
