let path=document.createElementNS('http://www.w3.org/2000/svg', 'path');
const svg=document.getElementById('svg');
let point=18;
svg.appendChild(path);
path.setAttribute('d', `m 1 1 ${point} 0 -8 18 z`);
path.setAttribute('fill', 'none');
path.setAttribute('stroke', 'black');