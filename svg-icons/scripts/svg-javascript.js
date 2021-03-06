let svgIconsUrl='svg/icons.svg';
const printIcon=(url, iconName, element) => {
    let svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    let svgIcon=document.createElementNS('http://www.w3.org/2000/svg', 'use');

    svgElement.classList.add('icon');
    svgIcon.setAttribute('href', `${url}#${iconName}`);
    svgElement.appendChild(svgIcon);
    element.insertAdjacentElement('afterbegin', svgElement);
}

document.querySelectorAll('.icon-circle').forEach(el => {
    printIcon(svgIconsUrl, 'circle', el);
});

document.querySelectorAll('.icon-diamond').forEach(el => {
    printIcon(svgIconsUrl, 'diamond', el);
});