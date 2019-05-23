import React from 'react';
import "./wrapper.scss";
import ToDoItem from './todo-item/ToDoItem';
import AddItemForm from './add-item-form/AddItemForm';
import EmptyList from './empty-list/EmptyList';
import { connect } from "react-redux";
import { SHOW_ALL, UNDONE_ONLY, DONE_ONLY } from "../../constants/visibleState";

function TodoContainer(props) {
    const { visibleTodoListFilter } = props;
    const renderItemList = () => {
        let filterList = [];
        switch (visibleTodoListFilter) {
            case SHOW_ALL:
                filterList = [...props.todoList];
                break;
            case UNDONE_ONLY:
                filterList = [...props.todoList.filter(todo => !todo.isFinished)];
                break;
            case DONE_ONLY:
                filterList = [...props.todoList.filter(todo => todo.isFinished)];
                break;
            default:
                filterList = [...props.todoList];
                break;
        }
        if (filterList.length > 0) {
            return filterList.map(item => {
                return <ToDoItem item={item} key={item.itemId} />
            })
        } else {
            return <EmptyList />
        }
    }


    return (
        <div className="wrapper">
            <AddItemForm />
            <ul className="todo-list">
                {renderItemList()}
            </ul>

        </div>
    )
}

function mapStateToProps(state) {
    return {
        todoList: state.todoList,
        visibleTodoListFilter: state.visibleTodoListFilter
    }
}

export default connect(mapStateToProps, null)(TodoContainer)