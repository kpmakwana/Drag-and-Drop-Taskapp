import React from 'react';
import ReactDOM from 'react-dom';
import intialData from './intialData';
import Coloumn from './coloumn'
import '@atlaskit/css-reset';
import {DragDropContext} from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container= styled.div`
display: flex`;
class App extends React.Component {
    state = intialData;
    onDragStart = start =>{
        const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId)

        this.setState({
            homeIndex,
        });
    }
    onDragEnd = result =>{
        this.setState({
            homeIndex: null,
        });
            document.body.style.color= 'inherit';
            const { destination, source, draggableId} = result;
            if(!destination)
                return;
            if(
                destination.droppableId===source.droppableId &&
                destination.index===source.index
            ){
                return;
            }
            
            const start =this.state.columns[source.droppableId];
            const finish =this.state.columns[destination.droppableId];

            if(start=== finish){
                    const newTaskIds= Array.from(start.taskIds);
                    //console.log(newTaskIds);
                    newTaskIds.splice(source.index,1);
                    newTaskIds.splice(destination.index,0,draggableId);


                    const newColoumn = {
                        ...start,
                        taskIds:newTaskIds
                    };
                    const newState = {
                        ...this.state,
                        columns: {
                            ...this.state.columns,
                            [newColoumn.id]:newColoumn,   
                        }
                    };
                    
                    this.setState(newState);
                    return;
                }

                const startTaskIds= Array.from(start.taskIds);
                const finishTaskIds = Array.from(finish.taskIds);
                
                startTaskIds.splice(source.index,1);
                finishTaskIds.splice(destination.index,0,draggableId);
               
                const newStart={
                    ...start,
                    taskIds: startTaskIds,
                };
                const newFinish={
                    ...finish,
                    taskIds: finishTaskIds,
                };
                //console.log(newStart);
                //console.log(newFinish);
                const newState = {
                    ...this.state,
                    columns: {
                        ...this.state.columns,
                        [newStart.id]:newStart,
                        [newFinish.id]:newFinish,  
                    }
                };
                //console.log(newState);
                this.setState(newState);
    }
    
   

    render(){
        return (
        <Container>

        <DragDropContext 
        onDragEnd={this.onDragEnd}
        onDragStart={this.onDragStart}
        >
            {
            this.state.columnOrder.map((coloumnId,index) => {
            const colomn = this.state.columns[coloumnId];
            const task = colomn.taskIds.map(taskId=>this.state.tasks[taskId]);
            
            const isDropDisabled = index< this.state.homeIndex;
            //console.log(this.state.columns.id);
            //console.log(isDropDisabled);

            return <Coloumn key="{colomn.id}" coloumn={colomn} tasks={task} isDropDisabled={isDropDisabled}/>
        })}
        </DragDropContext>
        </Container>        
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
