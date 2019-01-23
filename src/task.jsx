import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
border: 1px solid lightgrey;
border-radius: 4px;
padding : 8px;
margin-bottom: 8px;
background: ${ (props) => (props.isDragDisabled) ? '#7FB3D5' : '#D6EAF8'};
display : flex;
`;

export default class Task extends React.Component{
    render(){

        return(
        <Draggable 
        draggableId={this.props.task.id} 
        index={this.props.index}
        >
    {(provided,snapshot)=>(
        <Container
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref = {provided.innerRef}
        isDragging={snapshot.isDragging}
        >            
            {this.props.task.content}
        </Container>
        )}
    </Draggable>
    )}
}