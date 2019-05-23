import React, { Component } from 'react';
import { connect } from "react-redux";
import { actToggleCompleteJob, actChangeItemContent, actDeleteItem } from "../../../actions/todo-item.action";

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdjust: false,
            itemContent: this.props.item.content
        }
    }

    toggleAdjust = () => {
        this.setState(prevState => ({
            isAdjust: !prevState.isAdjust
        }));
    }

    handleOnChangeComplete = (e) => {
        const { itemId, isFinished } = this.props.item;
        if (!isFinished) {
            e.target.style.textDecoration = "line-through";
            this.props.toggleCompleteJob(itemId);
        }
        else {
            e.target.style.textDecoration = "none";
            this.props.toggleCompleteJob(itemId);
        }
    }

    handleOnChangeContent = (e) => {
        this.setState({
            itemContent: e.target.value
        })
    }

    handleSubmit = (e) => {
        const { itemId } = this.props.item;
        e.preventDefault();
        this.props.changeContent(this.state.itemContent, itemId);
        this.setState({
            isAdjust: false
        })
    }

    handleDeleteItem = () => {
        this.props.deleteItem(this.props.item.itemId);
    }


    render() {
        const { content, itemId, isFinished } = this.props.item;
        const { isAdjust } = this.state;
        const lineTxt = {
            textDecoration: "line-through"
        }
        return (
            <div className="todo-item">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input defaultValue={content}
                            id={itemId} autoComplete="off" type="text"
                            placeholder="Write something in here" className={!isAdjust ? "d-none" : ""}
                            onChange={this.handleOnChangeContent} />
                        <span title="Click here to complete"
                            className={!isAdjust ? "" : "d-none"}
                            onClick={this.handleOnChangeComplete}
                            style={isFinished ? lineTxt : null}
                        >{content}</span>
                    </div>
                </form>
                <div className="btn-group">
                    <button className="circle-btn warning" title="change" onClick={this.toggleAdjust}>
                        <label htmlFor={itemId}>
                            <i className="fas fa-pen"></i>
                        </label>
                    </button>
                    <button className="circle-btn danger" title="delete" onClick={this.handleDeleteItem}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleCompleteJob: function (itemId) {
            dispatch(actToggleCompleteJob(itemId));
        },
        changeContent: function (content, itemId) {
            dispatch(actChangeItemContent(content, itemId));
        },
        deleteItem: function (itemId) {
            dispatch(actDeleteItem(itemId));
        }
    }
}

export default connect(null, mapDispatchToProps)(ToDoItem);
