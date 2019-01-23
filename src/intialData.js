const intialData = {
    tasks:{
        'task1': {id: 'task1' , content : 'Get Up'},
        'task2': {id: 'task2' , content : 'Get Ready'},
        'task3': {id: 'task3' , content : 'Breackfast'},
        'task4': {id: 'task4' , content : 'Go to Work'},
        'task5': {id: 'task5' , content : 'Lunch'},
        'task6': {id: 'task6' , content : 'Dinner'},
        'task7': {id: 'task7' , content : 'Sleep'},
    },
    columns:{
        'column1':{
            id:'column1',
            title: 'To Do List',
            taskIds:['task5','task6','task7'],
        },
        'column2':{
            id:'column2',
            title: 'In Progress',
            taskIds:['task4']
        },
        'column3':{
            id:'column3',
            title: 'Done',
            taskIds:['task1','task2','task3'],
        },
    },
    
    columnOrder:['column1','column2','column3'],
    
    
    };
    export default intialData;