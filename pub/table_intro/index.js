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
            text : 'Short information about framework',
            id : '../index.html'
        },
        {
            label : 'Tables Intro',
            text : 'First look at table generator',
            id : 'index.html'
        },
        {
            label : 'Tables Function',
            text : 'Sort Search Average Total',
            id : '../table_functions/index.html'
        },
        {
            label : 'Tables Themes',
            text : 'Color setters',
            id : '../table_themes/index.html'
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
        }
    ]
};

/*
    HEADER CREATION
*/
oform.append('header').header(header).black();
            
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
        id : 123,
        'select data size' : 'small data set (2 columns) : name, class',
    },
    {
        id : 456,
        'select data size' : 'middle data set (3 columns) : name, class, cost',
    },
    {
        id : 789,
        'select data size' : 'bigger data set (5 columns) : name, class, cost, length, width',
    },
];

let tableExampleS = [
    {
        name : 'Dreadnaught',
        class : 'Heavy cruiser'
    },
    {
        name : 'CR90',
        class : 'Corvette'
    },
    {
        name : 'Vigil',
        class : 'Corvette'
    },
    {
        name : 'EF76 Nebulon-B',
        class : 'Frigate'
    }
];
let tableExampleM = [
    {
        name : 'Dreadnaught',
        class : 'Heavy cruiser',
        'cost (credits)' : 7200000
    },
    {
        name : 'CR90',
        class : 'Corvette',
        'cost (credits)' : 2700000
    },
    {
        name : 'Vigil',
        class : 'Corvette',
        'cost (credits)' : 3500000
    },
    {
        name : 'EF76 Nebulon-B',
        class : 'Frigate',
        'cost (credits)' : 8500000
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
oform.append("table").table(tableExampleS).white();

document.getElementById('table_switch').addEventListener("click", ()=>{
    console.log(oform.selected());
    if (typeof(oform.selected()) !== 'undefined' || oform.selected() !== null){
        console.log(oform.selected());
        if (oform.selected().id === 123){
            oform.append("table").table(tableExampleS).white();
        }
        if (oform.selected().id === 456){
            oform.append("table").table(tableExampleM).white();
        }
        if (oform.selected().id === 789){
            oform.append("table").table(tableExampleL).white();
        }
    }
    
});

