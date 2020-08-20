(function(window){
    'use strict';
    
    /*
    ***********************************************************************
        validation utils            
    */
    /*
    ***********************************************************************
        data types           
    */
    const TYPE = {STRING : "string",
                  BOOL : "boolean",
                  NUMBER : "number",
                  UNDEF : "undefined",
                  OBJECT : "object",
                  FUNCTION : "function"
                 };
    /*
    ***********************************************************************
        compares type of element with input type            
        
        @param e - input element 
        @param type - input type to cpmpare with
        
        @return bool value - true if types are equal
    */
    function isTypeOf(e, type){
        if (typeof(e) === type && e !== null){
            return true;
        }
        return false;
    }
    
    
    function printWarn(msg){
         console.warn('oform : warning : ' + msg);
    }
    
    function createStyle(content){
        let style = document.createElement('style');
        style.type = 'text/css';
        if (isTypeOf(content, TYPE.STRING)){
            style.innerHTML = content;
        } else {
            printWarn('style creator used without content');
            style.innerHTML = '';
        }
        return style;
    }
    
    const COLOR_THEMES = {
        GRAY : {
            MAIN: '#a3c2c2',
            SECONDARY : '#e0ebeb',
        },
        RED : {
            MAIN : '#ff9999',
            SECONDARY : '#ffe6e6',
        },
        BLUE : {
            MAIN : '#99ccff',
            SECONDARY : '#cce6ff',
        },
        GREEN : {
            MAIN : '#85e085',
            SECONDARY : '#b3ffb3',
        },
        WHITE : {
            MAIN : '#ffffff',
            SECONDARY : '#a1a1a1',
        },
        BLACK : {
            MAIN : '#1a1a1a',
            SECONDARY : '#666666',
        }
    };
    /*
    ***********************************************************************
        tables
        
        
        [
            {
                key : value1
            }
            {
                key : value2
            }
        ]
        
        table .table
            thead
                tr th key
            tbody
                tr td value1
                tr td value2
    */
    
    /*
    ***********************************************************************
        table styles
    */
    const TABLE_STYLE = {
        disabled : true,
        style : function(){
            if (this.disabled){
                let style = createStyle('.table {\
                                        font-weight:400;\
                                        padding:10px;\
                                        width: 100%;\
                                        /*border-spacing: calc(5px + 1vw);*/\
                                        font-size:calc(7px + 1vw);\
                                    }\
                                    .table td, .table th {\
                                        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 11px 0 rgba(0, 0, 0, 0.19);\
                                        /*border-radius:15px;*/\
                                        padding: 5px;\
                                        /*filter: blur(8px);*/\
                                        transition: 0.5s;\
                                    }\
                                    .table td:hover {\
                                        box-shadow: 0 11px 22px 0 rgba(0, 0, 0, 0.2), 0 11px 22px 0 rgba(0, 0, 0, 0.19);\
                                        cursor : pointer;\
                                    }\
                                    /*first column with number*/\
                                    .table td:nth-child(1) { \
                                        width: 2%;\
                                        text-align: center;\
                                        color: white;\
                                    }\
                                    .table th {\
                                        padding-left:15px;\
                                        padding-right:15px;\
                                        text-align: center;\
                                        color: white;\
                                        font-size:calc(10px + 1vw);\
                                    }\
                                   .selected-row{\
                                        background-color: yellow;\
                                        /*text-align: right;*/\
                                    }');
                document.getElementsByTagName('head')[0].appendChild(style);
                this.disabled = false;
            }
            return 'table';
        },
        LEFT_ALIGN : {
            disabled : true,
            style : function(){
                if (this.disabled){
                    let style = createStyle('.table-left-align.table td{\
                                                text-align: left;\
                                            }');
                    document.getElementsByTagName('head')[0].appendChild(style);
                    this.disabled = false;
                }
                return 'table-left-align';
            }
        },
        RIGHT_ALIGN : {
            disabled : true,
            style : function(){
                if (this.disabled){
                    let style = createStyle('.table-right-align.table td{\
                                                text-align: right;\
                                            }');
                    document.getElementsByTagName('head')[0].appendChild(style);
                    this.disabled = false;
                }
                return 'table-right-align';
            }
        },
        CENTER_ALIGN : {
            disabled : true,
            style : function(){
                if (this.disabled){
                    let style = createStyle('.table-center-align.table td{\
                                                text-align: center;\
                                            }');
                    document.getElementsByTagName('head')[0].appendChild(style);
                    this.disabled = false;
                }
                return 'table-center-align';
            }
        },
        ROUNDED : {     
            disabled : true,
            style : function(){
                if (this.disabled){
                    let style = createStyle('.table-rounded.table td, .table-rounded.table th{\
                                                border-radius:15px;\
                                            }\
                                            .table-rounded.table{\
                                                border-spacing: calc(5px + 1vw);\
                                            }');
                    document.getElementsByTagName('head')[0].appendChild(style);
                    this.disabled = false;
                }
                return 'table-rounded';   
            }
        }
    };
    
     const SELECTED_STYLE = {
        disabled : true,
        style : function(){
            if (this.disabled){
                let style = createStyle('.selected-row{\
                                        background-color: #ffcc00;\
                                    }');
                document.getElementsByTagName('head')[0].appendChild(style);
                this.disabled = false;
            }
            return 'selected-row';
        }
    };
    
    const SORTABLE_STYLE = {
        disabled : true,
        style : function(){
            if (this.disabled){
                let style = createStyle('.sortable:hover{\
                                          background-color: #ffcc00;\
                                          cursor: pointer;\
                                        }');
                document.getElementsByTagName('head')[0].appendChild(style);
                this.disabled = false;
            }
            return 'sortable';
        }
    };
    
    const TABLE_FILTER_STYLE = {
        disabled : true,
        style : function() {
            if (this.disabled){
                let style = createStyle('.table-filter{\
                                            border-radius:15px;\
                                            width: 100%;\
                                            padding: 12px 20px;\
                                            margin: 8px 0;\
                                            box-sizing: border-box;\
                                            border: 3px solid #ccc;\
                                            outline: none;\
                                            transition: 0.5s;\
                                        }\
                                        /*.table-filter:focus {\
                                            border: 3px solid #555;\
                                        }*/');
                
                document.getElementsByTagName('head')[0].appendChild(style);
                this.disabled = false;
            }
            return 'table-filter';
        }
    }
    
    function tableColorPattern(className, mainColor, hoverColor){
        if (isTypeOf(className, TYPE.STRING) === false){
            className = '.table-gray';
        }
        if (isTypeOf(mainColor, TYPE.STRING) === false){
            mainColor = '#a3c2c2';
        }
        if (isTypeOf(hoverColor, TYPE.STRING) === false){
            hoverColor = '#e0ebeb';
        }
        let style = createStyle('.'+ className + '  td, .' + className + '  th {\
                                border:1px solid ' + mainColor+ ';\
                            }\
                            .' + className + ' tr:hover {\
                               background-color: ' + hoverColor+ ';\
                            }\
                            .' + className + ' td:hover {\
                               background-color: ' + mainColor+ ';\
                                color: white;\
                            }\
                            .' + className + '  td:nth-child(1) { \
                                 background-color: ' + mainColor+ ';\
                            }\
                            .' + className + '  th {\
                                background-color: ' + mainColor+ ';\
                            }\
                            .table-filter:focus.' + className + '{\
                                    border: 5px solid ' + mainColor+ ';\
                            }\
                            .table-filter.' + className + '  {\
                                    border: 1px solid ' + hoverColor+ ';\
                            }');
        return style
    }
    
    function getTableColorTheme(){
        if(this.disabled){
            let style = tableColorPattern(this.CLASS_NAME, this.MAIN_COLOR, this.HOVER_COLOR);
            document.getElementsByTagName('head')[0].appendChild(style);
            this.disabled = false;
        }
        return this.CLASS_NAME;
    }
        
    function setTableTheme(table, filter, theme){
        if (table === null){
            return ;
        }

        table.classList.add(TABLE_STYLE.style(), theme);
        if (filter !== null){
            filter.classList.add(theme);
        }
    }
    
    const TABLE_COLOR_THEMES = {
        GRAY : {
            CLASS_NAME : 'table-gray',
            MAIN_COLOR : COLOR_THEMES.GRAY.MAIN,
            HOVER_COLOR : COLOR_THEMES.GRAY.SECONDARY,
            disabled : true,
            getTheme : getTableColorTheme
        },
        RED : {
            CLASS_NAME : 'table-red',
            MAIN_COLOR : COLOR_THEMES.RED.MAIN,
            HOVER_COLOR : COLOR_THEMES.RED.SECONDARY,
            disabled : true,
            getTheme : getTableColorTheme
        },
        BLUE : {
            CLASS_NAME : 'table-blue',
            MAIN_COLOR : COLOR_THEMES.BLUE.MAIN,
            HOVER_COLOR : COLOR_THEMES.BLUE.SECONDARY,
            disabled : true,
            getTheme : getTableColorTheme
        },
        GREEN : {
            CLASS_NAME : 'table-green',
            MAIN_COLOR : COLOR_THEMES.GREEN.MAIN,
            HOVER_COLOR : COLOR_THEMES.GREEN.SECONDARY,
            disabled : true,
            getTheme : getTableColorTheme
        },
        WHITE : {
            CLASS_NAME : 'table-white',
            MAIN_COLOR : COLOR_THEMES.WHITE.MAIN,
            HOVER_COLOR : COLOR_THEMES.WHITE.SECONDARY,
            disabled : true,
            getTheme : getTableColorTheme
        },
        BLACK : {
            CLASS_NAME : 'table-black',
            MAIN_COLOR : COLOR_THEMES.BLACK.MAIN,
            HOVER_COLOR : COLOR_THEMES.BLACK.SECONDARY,
            disabled : true,
            getTheme : getTableColorTheme
        }
    };

    /*
    ***********************************************************************
        table theme gray
    */
     function _setTableGrayTheme(){
        setTableTheme(this.table, this.filter, TABLE_COLOR_THEMES.GRAY.getTheme());
     }
     function _setTableBlackTheme(){
        setTableTheme(this.table, this.filter, TABLE_COLOR_THEMES.BLACK.getTheme());
     }
     function _setTableWhiteTheme(){
        if (this.table === null){
            return ;
        }
        if (TABLE_COLOR_THEMES.WHITE.disabled){
            let style = createStyle('.'+ TABLE_COLOR_THEMES.WHITE.CLASS_NAME + '  td, .' + TABLE_COLOR_THEMES.WHITE.CLASS_NAME + '  th {\
                        border:2px solid ' + COLOR_THEMES.BLACK.MAIN + ';\
                    }\
                    .' + TABLE_COLOR_THEMES.WHITE.CLASS_NAME + ' tr:hover {\
                       background-color: ' + TABLE_COLOR_THEMES.WHITE.HOVER_COLOR+ ';\
                    }\
                    .' + TABLE_COLOR_THEMES.WHITE.CLASS_NAME + ' td:hover {\
                        background-color: ' + COLOR_THEMES.BLACK.MAIN + ';\
                        color: white;\
                    }\
                    .' + TABLE_COLOR_THEMES.WHITE.CLASS_NAME + '  td:nth-child(1) { \
                         background-color: ' + TABLE_COLOR_THEMES.WHITE.MAIN_COLOR+ ';\
                    }\
                    .' + TABLE_COLOR_THEMES.WHITE.CLASS_NAME + '  th {\
                        background-color: ' + TABLE_COLOR_THEMES.WHITE.MAIN_COLOR+ ';\
                        color:' + COLOR_THEMES.BLACK.MAIN + ';\
                        border: 3.5px solid ' + COLOR_THEMES.BLACK.MAIN+ ';\
                    }\
                    .table-filter:focus.' + TABLE_COLOR_THEMES.WHITE.CLASS_NAME + '{\
                            border: 5px solid ' + COLOR_THEMES.BLACK.MAIN+ ';\
                    }\
                    .table-filter.' + TABLE_COLOR_THEMES.WHITE.CLASS_NAME + '  {\
                            border: 1px solid ' + COLOR_THEMES.BLACK.MAIN+ ';\
                    }\
                    .' + TABLE_COLOR_THEMES.WHITE.CLASS_NAME + ' td:nth-child(1) { \
                        color: ' + COLOR_THEMES.BLACK.MAIN + ';\
                    }');
            document.getElementsByTagName('head')[0].appendChild(style);
            TABLE_COLOR_THEMES.WHITE.disabled = false;
        }
        
        this.table.classList.add(TABLE_COLOR_THEMES.WHITE.CLASS_NAME);
        if (this.filter !== null){
            this.filter.classList.add(TABLE_COLOR_THEMES.WHITE.CLASS_NAME);
        }
     }
        /*
    ***********************************************************************
        table theme red
    */
     function _setTableRedTheme(){
        setTableTheme(this.table, this.filter, TABLE_COLOR_THEMES.RED.getTheme());
     }
        /*
    ***********************************************************************
        table theme blue
    */
    function _setTableBlueTheme(){
        setTableTheme(this.table, this.filter, TABLE_COLOR_THEMES.BLUE.getTheme());
     }
    /*
    ***********************************************************************
        table theme green
    */
    function _setTableGreenTheme(){
        setTableTheme(this.table, this.filter, TABLE_COLOR_THEMES.GREEN.getTheme());
     }
    /*
    ***********************************************************************
        table styles
    */
    function _rightAlignTable(){
        this.table.classList.add(TABLE_STYLE.RIGHT_ALIGN.style());
        return  {
            root : this.root,
            table : this.table,
            filter : this.filter,
            data : this.data,
            gray : _setTableGrayTheme,
            red : _setTableRedTheme,
            blue : _setTableBlueTheme,
            green : _setTableGreenTheme,
            black : _setTableBlackTheme,
            white : _setTableWhiteTheme,
            
            sortable : _addSortableEventToHeads,
            filtered : _addFilterEventToRoot,
            total : _generateTotal,
            avg : _generateAverage,
            
            rounded : _roundedTable
        }
     }
    function _leftAlignTable(){
        this.table.classList.add(TABLE_STYLE.LEFT_ALIGN.style());
        return  {
            root : this.root,
            table : this.table,
            filter : this.filter,
            data : this.data,
            gray : _setTableGrayTheme,
            red : _setTableRedTheme,
            blue : _setTableBlueTheme,
            green : _setTableGreenTheme,
            black : _setTableBlackTheme,
            white : _setTableWhiteTheme,
            
            sortable : _addSortableEventToHeads,
            filtered : _addFilterEventToRoot,
            total : _generateTotal,
            avg : _generateAverage,
            
            rounded : _roundedTable
        }
     }
    function _centerAlignTable(){
        this.table.classList.add(TABLE_STYLE.CENTER_ALIGN.style());
        return  {
            root : this.root,
            table : this.table,
            filter : this.filter,
            data : this.data,
            gray : _setTableGrayTheme,
            red : _setTableRedTheme,
            blue : _setTableBlueTheme,
            green : _setTableGreenTheme,
            black : _setTableBlackTheme,
            white : _setTableWhiteTheme,
            
            sortable : _addSortableEventToHeads,
            filtered : _addFilterEventToRoot,
            total : _generateTotal,
            avg : _generateAverage,
            
            rounded : _roundedTable
        }
     }
    function _roundedTable(){
        this.table.classList.add(TABLE_STYLE.ROUNDED.style());
        return  {
            root : this.root,
            table : this.table,
            filter : this.filter,
            data : this.data,
            gray : _setTableGrayTheme,
            red : _setTableRedTheme,
            blue : _setTableBlueTheme,
            green : _setTableGreenTheme,
            black : _setTableBlackTheme,
            white : _setTableWhiteTheme,
            
            sortable : _addSortableEventToHeads,
            filtered : _addFilterEventToRoot,
            total : _generateTotal,
            avg : _generateAverage,
            
            left : _leftAlignTable,
            right : _rightAlignTable,
            center : _centerAlignTable
        }
     }
    
    /*
    ***********************************************************************
        table generator
    */
    function generateTHead(table, data) {
        let firstDataKeys = Object.keys(data[0]);
        let thead = table.createTHead();
        let theadRow = thead.insertRow();
        
        let num_th = document.createElement("th");
        num_th.innerHTML = '#';
        theadRow.appendChild(num_th);
        
        for (let key of firstDataKeys) {
            let th = document.createElement("th");
            th.innerHTML = key;
            theadRow.appendChild(th);
        }
    }
        
    function generateTBody(table, data) {
        let tbody = table.createTBody();
        let i = 0;
        for (let e of data) {
            i++;
            let row = tbody.insertRow();
            row.addEventListener("click", ()=>{
                let tbody = table.getElementsByTagName('tbody')[0];
                let allRows = tbody.getElementsByTagName('tr')
                for (let trs of allRows) {
                    trs.classList.remove(SELECTED_STYLE.style());
                }
                row.classList.add(SELECTED_STYLE.style());
                _selected = e;
            });
            
            let num_cell = row.insertCell();
            num_cell.innerHTML = i;
           
            for (let key in e) {
                let cell = row.insertCell();
                cell.innerHTML = e[key];
            }
        }
    }
    
    /*
    ***********************************************************************
        table sorting
    */
    function _addSortableEventToHeads(){
        if (isTypeOf(this.table, TYPE.UNDEF) || this.table === null){
            printWarn("invalid sortable target : undefined/null table");
        } else {
     
            let thead = this.table.getElementsByTagName('thead');
            if (isTypeOf(thead, TYPE.UNDEF)){
                printWarn("invalid sortable target : no thead");
                return ;
            }
            if (thead.length === 0){
                printWarn("invalid sortable target : empty thead");
                return ;
            }
            if (this.table === null){
                printWarn("invalid sortable target : table wasnt created");
                return ;
            }
            let heads = thead[0].getElementsByTagName('th');
            for (let th of heads) {

                th.classList.add(SORTABLE_STYLE.style());

                th.addEventListener("click", ()=>{
                    _sort(this.data, th.innerHTML);
                    let tbody = this.table.getElementsByTagName('tbody');
                    if (tbody.length > 0){
                        this.table.removeChild(tbody[0]);
                        generateTBody(this.table, this.data);
                    } else {
                        printWarn("invalid sortable target : empty tbody");
                    }
                });
            }
        }
        return {
            root : this.root,
            table : this.table,
            filter : this.filter,
            data : this.data,
            gray : _setTableGrayTheme,
            red : _setTableRedTheme,
            blue : _setTableBlueTheme,
            green : _setTableGreenTheme,
            black : _setTableBlackTheme,
            white : _setTableWhiteTheme,
            
            filtered : _addFilterEventToRoot,
            total : _generateTotal,
            avg : _generateAverage
        }
    }
    
    function _compareAsc(a, b, key){
        if (isTypeOf(a[key], TYPE.STRING)){
            return  a[key].localeCompare(b[key]) > 0;
        }
        return a[key] > b[key];
    }
    
    function _compareDesc(a, b, key){
        if (isTypeOf(b[key], TYPE.STRING)){
            return  b[key].localeCompare(a[key]) > 0;
        }
        return a[key] < b[key];
    }
    
    function _sort(data, key){
        let sorted = _bubble(data, _compareAsc, key);
        if (sorted === false){
            _bubble(data, _compareDesc, key);
        }
    }
    
    function _bubble(records, compare, key) {
        let size = records.length - 1;
        let sorted = false;
        
        for (let end = size; end >= 0; end--) {
            for (let start = 0; start < size; start++) {
                if (compare(records[start], records[start + 1], key)) {
                    sorted = true;
                    let temp = records[start];
                    records[start] = records[start + 1];
                    records[start + 1] = temp;
                }
            }
        }
        return sorted;
    }
    /*
    ***********************************************************************
        table filter
    */
    function _createFilteredData(data, value){
        let filteredData = new Array();
        for(let e of data){
            let contains = false;
            for (let key in e) {
                if (isTypeOf(e[key], TYPE.STRING)){
                    if (e[key].toLowerCase().includes(value.toLowerCase())){
                        contains = true;
                        break;
                    }
                } else if (isTypeOf(e[key], TYPE.NUMBER)){
                    if (Number(value) === Number(e[key])){
                        contains = true;
                        break;
                    }
                }
            }
            if (contains){
                filteredData.push(e);
            }
        }
        return filteredData;
    }

    function _addFilterEventToRoot(){
        if (this.root === null){
            printWarn("invalid filter target : no root element");
        } else if (this.table === null){
            printWarn("invalid filter target : table wasn't created");
        } else {
           let input = document.createElement('input')
            input.type = 'text';
            input.className = TABLE_FILTER_STYLE.style();
            input.placeholder = 'Search . . .';
            this.root.insertBefore(input, this.root.childNodes[0]);
            input.addEventListener("input", ()=>{
                if (this.table === null){
                    printWarn("invalid filter target : table wasn't created");
                    return ;
                }
                let tbody = this.table.getElementsByTagName('tbody');
                if (tbody.length > 0){
                    if(input.value.length > 0){
                        this.table.removeChild(tbody[0]);
                        let fData  = _createFilteredData(this.data, input.value);
                        generateTBody(this.table, fData);
                     } else {
                        this.table.removeChild(tbody[0]);
                        generateTBody(this.table, this.data);    
                     }
                }
            }); 
            this.filter = input;
            this.gray();
        }
        return {
            root : this.root,
            table : this.table,
            filter : this.filter,
            data : this.data,
            gray : _setTableGrayTheme,
            red : _setTableRedTheme,
            blue : _setTableBlueTheme,
            green : _setTableGreenTheme,
            black : _setTableBlackTheme,
            white : _setTableWhiteTheme,
            
            sortable : _addSortableEventToHeads,
            total : _generateTotal,
            avg : _generateAverage
        };
    }
    /*
    ***********************************************************************
        table total
    */
    function appendEmptyTh(row){
        let empty = document.createElement("th");
        empty.style.backgroundColor = 'rgb(255, 255, 255)';
        empty.style.boxShadow = '0 0 0';
        empty.style.border = '0px';
        row.appendChild(empty);
    }
    
    function initThObj(data){
        let total = {};
        let firstDataKeys = Object.keys(data[0]);
        for (let key of firstDataKeys) {
            if (isTypeOf(data[0][key], TYPE.NUMBER)){
                total[key] = 0;
            } else {
                total[key] = '...';
            }
        }
        return total;
    }
    
    function columnSum(obj, data){
        for (let e of data) {
            for (let key in e) {
                 if (isTypeOf(e[key], TYPE.NUMBER)){
                     obj[key] += e[key];
                 }
            }
        }
    }
    
    function appendObjToTh(obj, data, theadRow){
        let firstDataKeys = Object.keys(data[0]);
        for (let key of firstDataKeys) {
            let th = document.createElement("th");
            th.style.backgroundColor = 'rgb(200, 200, 200)';
            th.innerHTML = obj[key];
            if (isTypeOf(obj[key], TYPE.NUMBER))
                th.innerHTML = obj[key].toFixed(2);
            theadRow.appendChild(th);
        }
    }
    
    function _generateTotal(){
        let thead = null;
        if (this.table === null){
            printWarn("invalid total target : table wasn't created");
        } else {
           thead = this.table.getElementsByTagName('thead');
            if (thead.length === null || isTypeOf(thead[0], TYPE.UNDEF)){
                printWarn("invalid total target : table has no thead");
            }else{
                let theadRow = thead[0].insertRow();

                let total = initThObj(this.data);
                appendEmptyTh(theadRow);
                columnSum(total, this.data);
                appendObjToTh(total, this.data, theadRow);

                let label = document.createElement("th");
                label.innerHTML = 'Total';
                theadRow.appendChild(label);
            }
        }
        return {
            root : this.root,
            table : this.table,
            filter : this.filter,
            data : this.data,
            gray : _setTableGrayTheme,
            red : _setTableRedTheme,
            blue : _setTableBlueTheme,
            green : _setTableGreenTheme,
            black : _setTableBlackTheme,
            white : _setTableWhiteTheme,
            
            sortable : _addSortableEventToHeads,
            filtered : _addFilterEventToRoot,
            avg : _generateAverage
        };
        
    }
    /*
    ***********************************************************************
        table average
    */
    function _generateAverage(){
        let thead = null;
        if (this.table === null){
            printWarn("invalid average target : table wasn't created");
        } else {
           thead = this.table.getElementsByTagName('thead');
            if (thead.length === 0 || isTypeOf(thead[0], TYPE.UNDEF)){
                printWarn("invalid average target : table has no thead");
            }else{
                let theadRow = thead[0].insertRow();

                let avg = initThObj(this.data);
                appendEmptyTh(theadRow);
                columnSum(avg, this.data);

                for (let key of Object.keys(this.data[0])) {
                    if (isTypeOf(avg[key], TYPE.NUMBER)){
                        avg[key] /= this.data.length;
                    } 
                }

                appendObjToTh(avg, this.data, theadRow);

                let label = document.createElement("th");
                label.innerHTML = 'Avg';
                theadRow.appendChild(label);
            }
        }
        
        return {
            root : this.root,
            table : this.table,
            filter : this.filter,
            data : this.data,
            gray : _setTableGrayTheme,
            red : _setTableRedTheme,
            blue : _setTableBlueTheme,
            green : _setTableGreenTheme,
            black : _setTableBlackTheme,
            white : _setTableWhiteTheme,
            
            sortable : _addSortableEventToHeads,
            filtered : _addFilterEventToRoot,
            total : _generateTotal
        };
        
    }
     /*
    ***********************************************************************
        table accessor
    */   
    function _table(data){
        
        let accessor = {
            root : null,
            table : null,
            filter : null,
            data : data,
            gray : _setTableGrayTheme,
            red : _setTableRedTheme,
            blue : _setTableBlueTheme,
            green : _setTableGreenTheme,
            black : _setTableBlackTheme,
            white : _setTableWhiteTheme,
            
            sortable : _addSortableEventToHeads,
            filtered : _addFilterEventToRoot,
            total : _generateTotal,
            avg : _generateAverage,
            
            rounded : _roundedTable,
            left : _leftAlignTable,
            right : _rightAlignTable,
            center : _centerAlignTable
        }
        let root = document.getElementById(this.id);
        
        if (isTypeOf(root, TYPE.UNDEF) || root === null){
            printWarn("table can't be appended to undefined");
            return accessor;
        }
        root.innerHTML = '';
        accessor.root = root;
        if (Array.isArray(data) === false){
            printWarn("input data for table is not array");
            return accessor;
        }
        
        let dataCopy = new Array();
        for (let obj of data) {
            if (isTypeOf(obj, TYPE.OBJECT)){
                dataCopy.push(obj);
            }
        }
        
        if (dataCopy.length < 1){
            printWarn("input data for table is empty");
            return accessor;
        }
        
        let table = document.createElement('table');
        accessor.root.appendChild(table);
        
        let filteredData = filterDataByHash(dataCopy, Object.keys(dataCopy[0]));
        
        generateTHead(table, filteredData);
        generateTBody(table, filteredData);
        
        accessor.data = filteredData;
        accessor.table = table;
        
        accessor.gray();
       
        return accessor;
    }
    /*
    ***********************************************************************
        table input data filter
        one object type
    */ 
    function getHash(arr){
        let hash = '';
        for (let a of arr) {
            hash += a;
        }
        return hash;
    }
    
    function filterDataByHash(data, keys){
        let filteredData = new Array();
        const FIRST_HASH = getHash(keys);
        for (let e of data) {
            let hash = getHash(Object.keys(e));
            if (hash.localeCompare(FIRST_HASH) === 0){
                filteredData.push(e);
            }
        }
        return filteredData;
    }
    /*
    ***********************************************************************
        header 
        
        {
            img:
            label:
            text:
            menu:
                [
                    {
                        label:
                        text:
                        id:
                    }
                ]
        }
        
        div header-image-container
            div header-text header-text-label
            div header-text header-text-under
            
            div header-menu
                div 
                div
                div
            
    */ 
    function headerDataValidation(data){
        if (isTypeOf(data, TYPE.OBJECT)){
            const KEYS = ['img', 'label', 'text', 'menu'];
            let currKeys = Object.keys(data);
            if (currKeys.length !== KEYS.length){
                return false;
            }
            for (let i = 0 ; i < KEYS.length; i++){
                if (KEYS[i].localeCompare(currKeys[i]) !== 0){
                    return false;
                }
            }
            if (Array.isArray(data['menu']) === false){
                return false;
            }
            if (data['menu'].length > 0){
                const MENU_KEYS = ['label', 'text', 'id'];
                for (let m of data['menu']){
                    let currMenuKeys = Object.keys(m);
                    for (let i = 0 ; i < MENU_KEYS.length; i++){
                        if (MENU_KEYS[i].localeCompare(currMenuKeys[i]) !== 0){
                            return false;
                        }
                    }
                }
            }
            return true;
        }
        return false;
    }

    
     /*
    ***********************************************************************
        header  style
    */    
    const HEADER_CONTAINER_STYLE = {
        disabled : true,
        style : function(image){
            if (this.disabled){
                if (isTypeOf(image, TYPE.STRING) === false){
                    printWarn("image for header is invalid");
                    return '';
                }
                let style = createStyle('.header-image-container {\
                                              /*background-image: url("' + image + '");*/\
                                              width: 100%;\
                                              border-radius:15px;\
                                              background-size: 110%;\
                                              position: relative;\
                                              height: calc(300px + 1.5vw);\
                                            }');
                document.getElementsByTagName('head')[0].appendChild(style);
                this.disabled = false;
            }
            return 'header-image-container';
        }
    };
    const HEADER_TEXT_STYLE = {
        disabled : true,
        style : function(image){
            if (this.disabled){
                let style = createStyle('.header-text {\
                                              font-weight: bold;\
                                              margin: 0 auto;\
                                              padding: 10px;\
                                              width: auto;\
                                              text-align: center;\
                                              position: absolute;\
                                              transform: translate(-50%, -50%);\
                                            }');
                document.getElementsByTagName('head')[0].appendChild(style);
                this.disabled = false;
            }
            return 'header-text';
        },
        disabledLabel : true,
        styleLabel: function( ){
            if (this.disabledLabel){
                let style = createStyle('.header-text-label {\
                                              border-radius:15px;\
                                              font-size: calc(25px + 2.5vw); \
                                            }');
                document.getElementsByTagName('head')[0].appendChild(style);
                this.disabledLabel = false;
            }
            return 'header-text-label';
        },
        disabledLabel_w : true,
        styleLabel_w: function( ){
            if (this.disabledLabel_w){
                let style = createStyle('.header-text-label-w {\
                                              background-color: white;\
                                              color: black;\
                                              mix-blend-mode: screen;\
                                            }');
                document.getElementsByTagName('head')[0].appendChild(style);
                this.disabledLabel_w = false;
            }
            return 'header-text-label-w';
        },
        disabledLabel_b : true,
        styleLabel_b: function( ){
            if (this.disabledLabel_b){
                let style = createStyle('.header-text-label-b {\
                                              background-color: black;\
                                              color: white;\
                                              mix-blend-mode: multiply;\
                                            }');
                document.getElementsByTagName('head')[0].appendChild(style);
                this.disabledLabel_b = false;
            }
            return 'header-text-label-b';
        },
        disabledText : true,
        styleText: function( ){
            if (this.disabledText){
                let style = createStyle('.header-text-under {\
                                              margin-top:calc(20px + 1.5vw);\
                                              font-size: calc(6px + 1.5vw); \
                                            }');
                document.getElementsByTagName('head')[0].appendChild(style);
                this.disabledText = false;
            }
            return 'header-text-under';
        },
        disabledText_w : true,
        styleText_w: function( ){
            if (this.disabledText_w){
                let style = createStyle('.header-text-under-w {\
                                              color: white;\
                                            }');
                document.getElementsByTagName('head')[0].appendChild(style);
                this.disabledText_w = false;
            }
            return 'header-text-under-w';
        },
        disabledText_b : true,
        styleText_b: function( ){
            if (this.disabledText_b){
                let style = createStyle('.header-text-under-b {\
                                              color: black;\
                                            }');
                document.getElementsByTagName('head')[0].appendChild(style);
                this.disabledText_b = false;
            }
            return 'header-text-under-b';
        },
        disabledRight : true,
        styleRight : function( ){
            if (this.disabledRight){
                let style = createStyle('.header-text-label.header-text-right {\
                                              top: 45%;\
                                              left: 70%;\
                                            }\
                                        .header-text-under.header-text-right {\
                                              top: 65%;\
                                              left: 70%;\
                                        }');
                document.getElementsByTagName('head')[0].appendChild(style);
                this.disabledRight = false;
            }
            
            return 'header-text-right';
        },
        disabledLeft : true,
        styleLeft : function( ){
            if (this.disabledLeft){
                let style = createStyle('.header-text-label.header-text-Left {\
                                              top: 45%;\
                                              left: 30%;\
                                            }\
                                        .header-text-under.header-text-Left {\
                                              top: 65%;\
                                              left: 30%;\
                                        }');
                document.getElementsByTagName('head')[0].appendChild(style);
                this.disabledLeft = false;
            }
            
            return 'header-text-Left';
        }
    };
    const HEADER_MENU_STYLE = {
        disabled : true,
        style : function(){
            if (this.disabled){
                let style = createStyle('.header-menu {\
                                              position: absolute;\
                                              width: 20%;\
                                              height: 100%;\
                                              overflow: auto;\
                                            }\
                                        /* Hide scrollbar for Chrome, Safari and Opera */\
                                        .header-menu::-webkit-scrollbar {\
                                            display: none;\
                                        }\
                                        /* Hide scrollbar for IE, Edge and Firefox */\
                                        .header-menu {\
                                          -ms-overflow-style: none;  /* IE and Edge */\
                                          scrollbar-width: none;  /* Firefox */\
                                        } \
                                        .header-menu div {\
                                               height: auto;\
                                               overflow: visible;\
                                               display: block;\
                                               text-align: center;\
                                               padding: 5%;\
                                               transition: all 1s ease;\
                                               font-size: calc(10px + 1.5vw); \
                                               border-bottom: 2px solid black; \
                                               cursor : pointer;\
                                            }');
                document.getElementsByTagName('head')[0].appendChild(style);
                this.disabled = false;
            }
            return 'header-menu';
        },
        disabled_w : true,
        style_w : function(){
            if (this.disabled_w){
                let style = createStyle('.header-menu-w.header-menu {\
                                              background-color: white;\
                                              color:black;\
                                              mix-blend-mode: screen;\
                                            }\
                                        .header-menu-w.header-menu div {\
                                               border-bottom: 2px solid black; \
                                            }\
                                        .header-menu-w.header-menu div:hover {\
                                              color: white;\
                                              background-color: #000;\
                                            }');
                document.getElementsByTagName('head')[0].appendChild(style);
                this.disabled_w = false;
            }
            return 'header-menu-w';
        },
        disabled_b : true,
        style_b : function(){
            if (this.disabled_b){
                let style = createStyle('.header-menu-b.header-menu {\
                                              background-color: black;\
                                              color:white;\
                                              mix-blend-mode: multiply;\
                                            }\
                                        .header-menu-b.header-menu div {\
                                               border-bottom: 2px solid white; \
                                            }\
                                        .header-menu-b.header-menu div:hover {\
                                              color: black;\
                                              background-color: #fff;\
                                            }');
                document.getElementsByTagName('head')[0].appendChild(style);
                this.disabled_w = false;
            }
            return 'header-menu-b';
        },
        disabledRight : true,
        styleRight : function( ){
            if (this.disabledRight){
                let style = createStyle('\
                                        .header-menu-right {\
                                              left: 5%;\
                                        }\
                                        .header-menu-right.header-menu-hover-text{\
                                              width: 20%;\
                                              left: 27%\
                                        }');
                document.getElementsByTagName('head')[0].appendChild(style);
                this.disabledRight = false;
            }
            return 'header-menu-right';
        },
        disabledLeft : true,
        styleLeft : function( ){
            if (this.disabledLeft){
                let style = createStyle('\
                                        .header-menu-left {\
                                              right: 5%;\
                                        }\
                                        .header-menu-left.header-menu-hover-text{\
                                              width: 20%;\
                                              right: 27%\
                                        }');
                document.getElementsByTagName('head')[0].appendChild(style);
                this.disabledLeft = false;
            }
            return 'header-menu-left';
        },
        disabledHoverText : true,
        styleHoverText : function( ){
            if (this.disabledHoverText){
                let style = createStyle('\
                                        .header-menu-hover-text{\
                                              position: absolute;\
                                              color: #ffff;\
                                              font-size: calc(10px + 1.5vw);\
                                        }');
                document.getElementsByTagName('head')[0].appendChild(style);
                this.disabledHoverText = false;
            }
            return 'header-menu-hover-text';
        },
    }
    
    function _blackHeader(){
        if (this.menu === null || this.label === null || this.text === null){
            printWarn('null in header style setter')
            return ;
        }
        this.menu.classList.remove(HEADER_MENU_STYLE.style_w());
        this.menu.classList.add(HEADER_MENU_STYLE.style_b());
        
        this.label.classList.remove(HEADER_TEXT_STYLE.styleLabel_w());
        this.label.classList.add(HEADER_TEXT_STYLE.styleLabel_b());
        
        this.text.classList.remove(HEADER_TEXT_STYLE.styleText_w());
        this.text.classList.add(HEADER_TEXT_STYLE.styleText_b());
    }
    
    function _rightHeader(){
        if (this.menu === null || this.label === null || this.text === null || this.menuText === null){
            printWarn('null in header position setter')
        } else {
            this.label.classList.add(HEADER_TEXT_STYLE.styleRight());
            this.text.classList.add(HEADER_TEXT_STYLE.styleRight());
            this.menu.classList.add(HEADER_MENU_STYLE.styleRight());
            this.menuText.classList.add(HEADER_MENU_STYLE.styleRight());
        }
        return {
            root : this.root,
            header : this.header,
            label : this.label,
            text : this.text,
            menu : this.menu,
            menuText : this.menuText,
            
            black :_blackHeader
        };
    }
    
    function _leftHeader(){
        if (this.menu === null || this.label === null || this.text === null || this.menuText === null){
            printWarn('null in header position setter')
        } else {
            this.label.classList.add(HEADER_TEXT_STYLE.styleLeft());
            this.text.classList.add(HEADER_TEXT_STYLE.styleLeft());
            this.menu.classList.add(HEADER_MENU_STYLE.styleLeft());
            this.menuText.classList.add(HEADER_MENU_STYLE.styleLeft()); 
        }

        return {
            root : this.root,
            header : this.header,
            label : this.label,
            text : this.text,
            menu : this.menu,
            menuText : this.menuText,
            
            black :_blackHeader
        };
    }
    
    function createHeaderMenu(data , text){
        let menu = document.createElement('div');
        for (let m of data['menu']){
            let menuNode = document.createElement('div');
            menuNode.innerHTML = m.label;
            menuNode.addEventListener("mouseover", ()=>{
                if (isTypeOf(m.text, TYPE.STRING)){
                    if (m.text.length > 0){
                        text.innerHTML = m.text;
                    }
                }
            });
            menuNode.addEventListener("mouseout", ()=>{
                text.innerHTML = '';
            });
            menuNode.addEventListener("click", ()=>{
                _selected = m;
            });
            menu.appendChild(menuNode);
        }
        return menu;
    }
    function _header(data){
        
        let accessor = {
            root : null,
            header : null,
            label : null,
            text : null,
            menu : null,
            menuText : null,
            
            right : _rightHeader,
            left : _leftHeader,
            
            black :_blackHeader
        }

        let root = document.getElementById(this.id);
        
        if (isTypeOf(root, TYPE.UNDEF) || root == null){
            printWarn("header can't be appended to undefined/null");
            return accessor;
        }
        root.innerHTML = '';
        accessor.root = root;
        
        if (headerDataValidation(data)){
            let container = document.createElement('div');
            container.classList.add(HEADER_CONTAINER_STYLE.style(data.img));
            container.style.backgroundImage = 'url("' + data.img + '")';
//            container.addEventListener("mousemove", (e) => {
//                  container.style.backgroundPositionX = -e.offsetX / 10 + "px";
//                  container.style.backgroundPositionY = -e.offsetY/ 20 + "px";
//            });
            accessor.header = container;
            
            let label = document.createElement('div');
            label.innerHTML = data.label;
            label.classList.add(HEADER_TEXT_STYLE.style(), HEADER_TEXT_STYLE.styleLabel(), HEADER_TEXT_STYLE.styleLabel_w());
            accessor.label = label;
            
            let text = document.createElement('div');
            text.innerHTML = data.text;
            text.classList.add(HEADER_TEXT_STYLE.style(), HEADER_TEXT_STYLE.styleText(), HEADER_TEXT_STYLE.styleText_w());
            accessor.text = text;
            
            let menuText = document.createElement('div');
            menuText.classList.add(HEADER_MENU_STYLE.styleHoverText());
            accessor.menuText = menuText;
            
            let menu = createHeaderMenu(data, menuText);
            menu.classList.add(HEADER_MENU_STYLE.style(),HEADER_MENU_STYLE.style_w());
            accessor.menu = menu;
            
            container.appendChild(label);
            container.appendChild(text);
            container.appendChild(menu);
            container.appendChild(menuText);
            root.appendChild(container);
            
            accessor.left();
 
        } else {
            printWarn("header : invalid input data");
        }
        return accessor;
    }
    /*
    ***********************************************************************
        tab
        
        
        [
            {
                label:
                content:
                id:
            }
        ]
        div tab-containner
            button
        div tab-content
            div
    */ 
    /*
    ***********************************************************************
        tab  style
    */    
    const TAB_CONTAINER_STYLE = {
        VERT : {
                disabled : true,
                style : function(){
                    if (this.disabled){
                        let style = createStyle('.tab-container {\
                                                        float: left;\
                                                        width: 30%;\
                                                        height: 300px;\
                                                        overflow: auto;\
                                                        box-sizing: border-box\
                                                    }\
                                                .tab-container button {\
                                                        border-radius: 15px 0px 0px 15px;\
                                                        display: block;\
                                                        color: black;\
                                                        padding: 22px 16px;\
                                                        width: 100%;\
                                                        border: none;\
                                                        outline: none;\
                                                        text-align: center;\
                                                        cursor: pointer;\
                                                        transition: 0.3s;\
                                                        font-size: 17px;\
                                                        background-color: #efefef;\
                                                }');
                        document.getElementsByTagName('head')[0].appendChild(style);
                        this.disabled = false;
                    }
                    return 'tab-container';
                }
        },
        HOR : {
                disabled : true,
                style : function(){
                    if (this.disabled){
                        let style = createStyle('.tab-container-hor {\
                                                      overflow: auto;\
                                                      white-space: nowrap;\
                                                    }\
                                                .tab-container-hor button {\
                                                      display: inline-block;\
                                                      border-radius: 15px 15px 0px 0px;\
                                                      border: none;\
                                                      outline: none;\
                                                      cursor: pointer;\
                                                      padding: 14px 16px;\
                                                      transition: 0.3s;\
                                                      font-size: 17px;\
                                                }');
                        document.getElementsByTagName('head')[0].appendChild(style);
                        this.disabled = false;
                    }
                    return 'tab-container-hor';
                }
        }
        
    };

    function tabColorPattern(className, hoverColor, mainColor, textColor){
        return '.' + className + ' button:hover {\
                    background-color: ' + hoverColor + ';\
                }\
                .' + className + ' button.active {\
                    background-color: ' + mainColor + ';\
                    color: ' + textColor + ';\
                    font-weight: bold;\
                }\
                .' + className + '::-webkit-scrollbar {\
                    width: 5px;\
                    background-color: ' + mainColor + ';\
                } \
                .' + className + '::-webkit-scrollbar-track {\
                    background-color: #ffffff;\
                }\
                .' + className + '::-webkit-scrollbar-thumb {\
                    background-color: ' + mainColor + ';\
                    border: 0.5px solid #ffffff;\
                }\
                .' + className + '.tab-content, .' + className + '.tab-content-hor{\
                    border: 5px solid ' + mainColor + ';\
                }';
    }
    const TAB_COLOR_THEME = {
        GRAY : {
            disabled : true,
            style : function(){
                let className = 'tab-gray';
                if (this.disabled){
                    let style = createStyle( tabColorPattern(className, COLOR_THEMES.GRAY.SECONDARY, COLOR_THEMES.GRAY.MAIN, 'white') );
                    document.getElementsByTagName('head')[0].appendChild(style);
                    this.disabled = false;
                }
                return className;
            }
        },
        RED : {
            disabled : true,
            style : function(){
                let className = 'tab-red';
                if (this.disabled){
                    let style = createStyle( tabColorPattern(className, COLOR_THEMES.RED.SECONDARY, COLOR_THEMES.RED.MAIN, 'white') );
                    document.getElementsByTagName('head')[0].appendChild(style);
                    this.disabled = false;
                }
                return className;
            }
        },
        BLUE : {
            disabled : true,
            style : function(){
                let className = 'tab-blue';
                if (this.disabled){
                    let style = createStyle( tabColorPattern(className, COLOR_THEMES.BLUE.SECONDARY, COLOR_THEMES.BLUE.MAIN, 'white') );
                    document.getElementsByTagName('head')[0].appendChild(style);
                    this.disabled = false;
                }
                return className;
            }
        },
        GREEN : {
            disabled : true,
            style : function(){
                let className = 'tab-green';
                if (this.disabled){
                    let style = createStyle( tabColorPattern(className, COLOR_THEMES.GREEN.SECONDARY, COLOR_THEMES.GREEN.MAIN, 'white') );
                    document.getElementsByTagName('head')[0].appendChild(style);
                    this.disabled = false;
                }
                return className;
            }
        },
        BLACK : {
            disabled : true,
            style : function(){
                let className = 'tab-black';
                if (this.disabled){
                    let style = createStyle( tabColorPattern(className, COLOR_THEMES.BLACK.SECONDARY, COLOR_THEMES.BLACK.MAIN, 'white') );
                    document.getElementsByTagName('head')[0].appendChild(style);
                    this.disabled = false;
                }
                return className;
            }
        }
    };
    function replaceTabStyle(elem, oldStyle, newStyle){
        if (elem === null){
            printWarn('using tab style on null');
            return ;
        }
        elem.classList.remove(oldStyle);
        
        elem.classList.add(newStyle);
    }
    
    function _setBlueTabTheme(){
        replaceTabStyle(this.container, TAB_COLOR_THEME.GRAY.style(), TAB_COLOR_THEME.BLUE.style());
        replaceTabStyle(this.content, TAB_COLOR_THEME.GRAY.style(), TAB_COLOR_THEME.BLUE.style());
    }
    
    function _setRedTabTheme(){
        replaceTabStyle(this.container, TAB_COLOR_THEME.GRAY.style(), TAB_COLOR_THEME.RED.style());
        replaceTabStyle(this.content, TAB_COLOR_THEME.GRAY.style(), TAB_COLOR_THEME.RED.style());
    }
    
    function _setGreenTabTheme(){
        replaceTabStyle(this.container, TAB_COLOR_THEME.GRAY.style(), TAB_COLOR_THEME.GREEN.style());
        replaceTabStyle(this.content, TAB_COLOR_THEME.GRAY.style(), TAB_COLOR_THEME.GREEN.style());
    }
    
    function _setBlackTabTheme(){
        replaceTabStyle(this.container, TAB_COLOR_THEME.GRAY.style(), TAB_COLOR_THEME.BLACK.style());
        replaceTabStyle(this.content, TAB_COLOR_THEME.GRAY.style(), TAB_COLOR_THEME.BLACK.style());
    }
    
    const TAB_CONTENT_STYLE = {
        VERT : {
                disabled : true,
                style : function(){
                    if (this.disabled){
                        let style = createStyle('.tab-content {\
                                                      float: left;\
                                                      padding: 0px 12px;\
                                                      width: 70%;\
                                                      border-radius: 0px 15px 15px 0px;\
                                                      height: 300px;\
                                                      overflow: auto;\
                                                      direction: rtl;\
                                                      box-sizing: border-box\
                                                    }\
                                                .tab-content div{\
                                                    direction: ltr;\
                                                }');
                        document.getElementsByTagName('head')[0].appendChild(style);
                        this.disabled = false;
                    }
                    return 'tab-content';
                }
        },
        HOR : {
                disabled : true,
                style : function(){
                    if (this.disabled){
                        let style = createStyle('.tab-content-hor {\
                                                        border-radius: 0px 0px 15px 15px;\
                                                        padding: 6px 12px;\
                                                        border: 1px solid #ccc;\
                                                        height: 300px;\
                                                        overflow: auto;\
                                                    }\
                                                .tab-content-hor div{\
                                                    direction: ltr;\
                                                }');
                        document.getElementsByTagName('head')[0].appendChild(style);
                        this.disabled = false;
                    }
                    return 'tab-content-hor';
                }
        }
    };

    function _setHorTab(){
        replaceTabStyle(this.container, TAB_CONTAINER_STYLE.VERT.style(), TAB_CONTAINER_STYLE.HOR.style());
        replaceTabStyle(this.content, TAB_CONTENT_STYLE.VERT.style(), TAB_CONTENT_STYLE.HOR.style());
        return {
            root: this.root,
            data: this.data,
            container: this.container,
            content: this.content,
            text: this.text,
            
            blue : _setBlueTabTheme,
            red : _setRedTabTheme,
            green : _setGreenTabTheme,
            black : _setBlackTabTheme,
        };
    }
    
    function tabFilter(data){
        if (Array.isArray(data)){
            const KEYS = ['label', 'content', 'id'];
            let filteredData = filterDataByHash(data, KEYS);

            if (filteredData.length === 0){
                return null;
            }
            if (filteredData.length !== data.length){
                printWarn('some input data was invalid for tab generator');
            }
            return filteredData;
        }
        return null;
    }

    function createContainer(root, data){
        let container = document.createElement('div');
        container.classList.add(TAB_CONTAINER_STYLE.VERT.style());
        root.appendChild(container);
        let first = true;
        for (let d of data){
            let butt = document.createElement('button');
            butt.innerHTML = d.label;
            if (first){
                butt.classList.add('active');
                first = false;
            }
            butt.id = d.id;
            container.appendChild(butt);
        }
        return container;
    }
    
    function createContent(root, data){
        let content = document.createElement('div');
        content.classList.add(TAB_CONTENT_STYLE.VERT.style());
        root.appendChild(content);
        let text = document.createElement('div');
        content.appendChild(text);
        text.innerHTML = data[0].content;
        return {content:content, text:text};
    }
    
    function createEvents(accessor){
        let butts = accessor.container.getElementsByTagName('button');
        for (let butt of butts){
            butt.addEventListener('click',()=>{
                for (let b of butts){
                    b.classList.remove('active');
                }
                butt.classList.add('active');
                for (let d of accessor.data){
                    
                    if (isTypeOf(d.id, TYPE.NUMBER)){
                        if (d.id === Number(butt.id)){
                            accessor.text.innerHTML = d.content;
							_selected = d;
                        }
                    }
                    if (isTypeOf(d.id, TYPE.STRING)){
                        if (d.id.localCompare(butt.id) === 0){
                            accessor.text.innerHTML = d.content;
							_selected = d;
                        }
                    }
                }
            });
        }
    }
    
    function _tab(data){

        let accessor = {
            root: null,
            data: null,
            container: null,
            content: null,
            text: null,
            
            blue : _setBlueTabTheme,
            red : _setRedTabTheme,
            green : _setGreenTabTheme,
            black : _setBlackTabTheme,
            
            horizontal : _setHorTab
        }
        
        let root = document.getElementById(this.id);

        if (isTypeOf(root, TYPE.UNDEF) || root == null){
            printWarn("tab can't be appended to undefined");
            return accessor;
        }
        root.innerHTML = '';
        accessor.root = root;
        
        let fData = tabFilter(data);
        if (fData === null){
            printWarn("tab data invalid");
            return accessor;
        }
        accessor.data = fData;
        accessor.container = createContainer(root, fData);
        accessor.container.classList.add(TAB_COLOR_THEME.GRAY.style())
        let content = createContent(root, fData);
        accessor.content = content.content;
        accessor.text = content.text;
        accessor.content.classList.add(TAB_COLOR_THEME.GRAY.style())
        
        createEvents(accessor);
        
        return accessor;
    }
    /*
    ***********************************************************************
        selected  accessor
    */ 
    var _selected = {};
    function _getSelected(){
        let i = 0;
        for (let key in _selected) {
            i++;
        }
        if (i === 0){
            return 0;
        }
        return _selected;
    }

    function _clearSelected(){
        let selectedRows = document.getElementsByClassName(SELECTED_STYLE.style());
        for (let selected of selectedRows) {
            selected.classList.remove(SELECTED_STYLE.style());
        }

        _selected = {};
    }
    /*
    ***********************************************************************
    */

    function _append(_id){
        return {
            id : _id,
            table : _table,
            header : _header,
            tab : _tab
        };
    }    
    /*
    ***********************************************************************
    */
    if(isTypeOf(window.oform, TYPE.UNDEF)){
        window.oform = {
                        append : _append, 
                        selected : _getSelected, 
                        clear : _clearSelected
                       };
    }
})(window);
