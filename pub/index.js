function redirect(url){
    location.replace(url)
}
/*
    IMAGE URLS
*/
let images = ['images/img2.jpg', 'images/img3.jpg', 'images/img1.jpg'];
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
            id : 'index.html'
        },
        {
            label : 'Tables Intro',
            text : 'First look at table generator',
            id : 'table_intro/index.html'
        },
        {
            label : 'Tables Function',
            text : 'Sort Search Average Total',
            id : 'table_functions/index.html'
        },
        {
            label : 'Tables Themes',
            text : 'Sort Search Average Total',
            id : 'table_intro/index.html'
        },
        {
            label : 'Header Examples',
            text : 'Examples for header generator overview',
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