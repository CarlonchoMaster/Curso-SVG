const svgText=(text, color1, color2) => {
    let svg=`<svg viewBox="0 0 100 20">
    <defs>
        <linearGradient id="gradient">
            <stop offset="10%" stop-color="${color1}"/>
            <stop offset="100%" stop-color="${color2}"/>
        </linearGradient>
    </defs>
    <text x="0"  y="12" fill="url(#gradient)">${text}</text>
    </svg>`;    
    document.body.innerHTML=svg;
};

svgText('Hola EdTeam', 'green', 'blue')