import React from 'react';
import styled from 'styled-components';
import Task from './task';
import {Droppable} from 'react-beautiful-dnd';
const Container = styled.div`
margin: 8px;
width: 300px;
border: 1px solid skyblue;
border-radius: 2px;
display : flex;
flex-direction : column;
`;

const Title = styled.h3`
padding :8px;
`;
const TaskList = styled.div`
padding : 8px;
background-color: ${props =>  props.isDraggingOver 
                                    ? '#D4EFDF' 
                                    :'white'};
min-hight: 100px;
flex-grow: 1;
`;

class Coloumn extends React.Component{
    render(){
        return(
        <Container>
            <Title>{this.props.coloumn.title}</Title>
            <Droppable 
            droppableId={this.props.coloumn.id}
            isDropDisabled={this.props.isDropDisabled}
            >
                {(provided,snapshot)=>(
                <TaskList
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
                {...provided.droppableProps}>                
                  {this.props.tasks.map((task,index)=> 
                     <Task id={task.id} task={task} index={index}/>
                    )}
                  {provided.placeholder}
                </TaskList>
                )}
            </Droppable>
        </Container>
        )};

}
export default Coloumn;