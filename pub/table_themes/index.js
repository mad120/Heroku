function redirect(url){
    location.replace(url)
}
/*
    IMAGE URLS
*/
let images = ['../images/img2.jpg', '../images/img3.jpg', '../images/img1.jpg'];
/*
    OBJECT FOR HEADER
*/
let header = {
    img : images[Math.floor(Math.random() * images.length)],
    label : 'oform.js',
    text : 'From js Object to ready-made Forms',
    menu : [
        {
            label : 'Overview',
            text : 'Short information about library',
            id : '../index.html'
        },
        {
            label : 'API',
            text : 'docs',
            id : '../api/API.html'
        },
        {
            label : 'Tables Intro',
            text : 'First look at table generator',
            id : '../table_intro/index.html'
        },
        {
            label : 'Tables Function',
            text : 'Sort Search Average Total',
            id : '../table_functions/index.html'
        },
        {
            label : 'Tables Themes',
            text : 'Color setters',
            id : 'index.html'
        },
        {
            label : 'Header Examples',
            text : 'Examples for header generator',
            id : '../header/index.html'
        },
        {
            label : 'Header Menu',
            text : 'Menu events',
            id : '../header_menu/index.html'
        },
        {
            label : 'Tabs',
            text : 'Tab generator',
            id : '../tab/index.html'
        }
        
    ]
};

/*
    HEADER CREATION
*/
oform.append('header').header(header).right().black();
            
/*
    HEADER MENU SWITCH
*/
function menuSwitchEvents(id, data){
    document.getElementById(id).addEventListener("click", ()=>{
        for (let obj of data){
            if (oform.selected().id.localeCompare(obj.id) === 0){
                redirect( obj.id );
            }
        }
    });
}

menuSwitchEvents('header', header.menu);
/*
    EXAMPLE DATA SETS FOR TABLE
*/
let tableSwitch = [
    {
        id : 111,
        'function' : '.red()',
    },
    {
        id : 112,
        'function' : '.blue()',
    },
    {
        id : 113,
        'function' : '.green()',
    },
    {
        id : 114,
        'function' : '.white()',
    },
    {
        id : 115,
        'function' : '.black()',
    },
    {
        id : 116,
        'function' : '.gray()',
    }
];

let tableExampleL = [
    {
        name : 'Dreadnaught',
        class : 'Heavy cruiser',
        'cost (credits)' : 7200000,
        'length (meters)' : 600,
        'width (meters)' : 116.5
    },
    {
        name : 'CR90',
        class : 'Corvette',
        'cost (credits)' : 2700000,
        'length (meters)' : 150,
        'width (meters)' : 48.6
    },
    {
        name : 'Vigil',
        class : 'Corvette',
        'cost (credits)' : 3500000,
        'length (meters)' : 255,
        'width (meters)' : 60
    },
    {
        name : 'EF76 Nebulon-B',
        class : 'Frigate',
        'cost (credits)' : 8500000,
        'length (meters)' : 300,
        'width (meters)' : 72
    }
];

oform.append("table_switch").table(tableSwitch).black();
oform.append("table").table(tableExampleL).white();

document.getElementById('table_switch').addEventListener("click", ()=>{
    console.log(oform.selected());
    if (typeof(oform.selected()) !== 'undefined' || oform.selected() !== null){
        console.log(oform.selected());
        if (oform.selected().id === 111){
            oform.append("table").table(tableExampleL).red();
        }
        if (oform.selected().id === 112){
            oform.append("table").table(tableExampleL).blue();
        }
        if (oform.selected().id === 113){
            oform.append("table").table(tableExampleL).green();
        }
        if (oform.selected().id === 114){
            oform.append("table").table(tableExampleL).white();
        }
        if (oform.selected().id === 115){
            oform.append("table").table(tableExampleL).black();
        }
        if (oform.selected().id === 116){
            oform.append("table").table(tableExampleL).gray();
        }
    }
    
});

