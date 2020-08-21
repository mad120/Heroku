'use strict';
function redirect(url) {
    location.replace(url);
}
/*
    IMAGE URLS
*/
const images = ['../images/img2.jpg', '../images/img3.jpg', '../images/img1.jpg'];
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
            id : 'API.html'
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
            text : 'Sort Search Average Total',
            id : '../table_intro/index.html'
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

oform.append('oform_f').table([
    {
        function : '.append(id)',
        description: 'Input parameter is id of selected DOM (id of div that was created above). Appends id for content generators. Grants access to generators'
    },
    {
        function : '.selected()',
        description: 'Getter for buffer with selected data (all generators set click event to their content. Return object will be in same format as input data)'
    },
    {
        function : '.clear()',
        description: 'Manually clear "selected" buffer'
    }
]).left().white();

oform.append('append_f').table([
    {
        function : '.table(data)',
        description: 'Table generator. Gives access to table setters. Input data format (array with objects): \
                       <br><img src="../images/table_input_ex.jpg" width="70%"></img>'
    },
    {
        function : '.header(data)',
        description: 'Header generator. Gives access to header setters. Input data format (object): \
                        <br><img src="../images/header_input_ex.jpg" width="70%"></img>'
    },
        {
        function : '.tab(data)',
        description: 'Tab generator. Gives access to tab setters. Input data format (array with objects): \
                        <br><img src="../images/tab_input_ex.jpg" width="70%"></img>'
    },
]).left().white();
 

oform.append('table_f1').table([
    {
        'function' : '.sortable()',
        description : 'Add sorting to table header "click" event.'
    },
    {
        'function' : '.filtered()',
        description : 'Create search input to filter table rows.'
    }
]).left().white();
oform.append('table_f2').table([

    {
        'function' : '.avg()',
        description : 'Create line with average number values in table header.'
    },
    {
        'function' : '.total()',
        description : 'Create line with total number values in table header.'
    }
]).left().white();
oform.append('table_f3').table([
    {
        'function' : '.rounded()',
        description : 'Set border radius to the table cells.'
    },
    {
        'function' : '.center()',
        description : 'Set center align to table content.'
    },
    {
        'function' : '.right()',
        description : 'Set right align to table content.'
    },
    {
        'function' : '.left()',
        description : 'Set left align to table content.'
    }
]).left().white();
oform.append('table_f4').table([
    {
        'function' : '.white()',
        description : 'Sets border and hover color to white theme.'
    },
    {
        'function' : '.black()',
        description : 'Sets border and hover color to black theme.'
    },
    {
        'function' : '.red()',
        description : 'Sets border and hover color to red theme.'
    },
    {
        'function' : '.gray()',
        description : 'Sets border and hover color to gray theme.'
    },
    {
        'function' : '.green()',
        description : 'Sets border and hover color to green theme.'
    },
    {
        'function' : '.blue()',
        description : 'Sets border and hover color to blue theme.'
    }
]).left().white();

oform.append('header_f').table([
    {
        'function' : '.left()',
        description : 'Sets header lable to the left and menu to the right.'
    },
    {
        'function' : '.right()',
        description : 'Sets header lable to the right and menu to the left.'
    },
    {
        'function' : '.black()',
        description : 'Sets color theme to black (by default its white). Has no return value.'
    }
]).left().white();

oform.append('tab_f').table([
    {
        'function' : '.horizontal()',
        description : 'Sets tab style to horizontal positioning. By default its vertical.'
    },
    {
        'function' : '.white()',
        description : 'Sets border and hover color to white theme. Has no return value.'
    },
    {
        'function' : '.black()',
        description : 'Sets border and hover color to black theme. Has no return value.'
    },
    {
        'function' : '.red()',
        description : 'Sets border and hover color to red theme. Has no return value.'
    },
    {
        'function' : '.gray()',
        description : 'Sets border and hover color to gray theme. Has no return value.'
    },
    {
        'function' : '.green()',
        description : 'Sets border and hover color to green theme. Has no return value.'
    },
    {
        'function' : '.blue()',
        description : 'Sets border and hover color to blue theme. Has no return value.'
    }
]).left().white();