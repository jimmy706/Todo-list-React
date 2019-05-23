import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { actAddItem } from "../../../actions/todo-item.action";
import { setVisibleFilter } from "../../../actions/visibleTodoFitler.action";
import { connect } from 'react-redux';
import { SHOW_ALL, DONE_ONLY, UNDONE_ONLY } from "../../../constants/visibleState";

class AddItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            content: ''
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    handleAddTodoItem = (e) => {
        const { content } = this.state;
        e.preventDefault();
        if (content !== '') {
            const newItem = {
                content,
                isFinished: false,
                itemId: Math.random().toString(36).substring(2)
            }
            this.props.addItem(newItem);
            this.setState({
                content: ''
            })
        }
    }

    handleChangeInput = (e) => {
        this.setState({
            content: e.target.value
        });
    }

    render() {
        const { content } = this.state;
        const { visibleTodoListFilter, setFilter } = this.props;
        return (
            <div className="add-item-wrapper">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle color="" caret>
                        {visibleTodoListFilter}
                    </DropdownToggle>
                    <DropdownMenu>
                        <ul>
                            <li onClick={() => setFilter(SHOW_ALL)}>All </li>
                            <li onClick={() => setFilter(DONE_ONLY)}>Completed </li>
                            <li onClick={() => setFilter(UNDONE_ONLY)}>Uncomplete</li>
                        </ul>
                    </DropdownMenu>
                </Dropdown>
                <form className="add-item-form" onSubmit={this.handleAddTodoItem}>
                    <input type="text" placeholder="What needed to be done?"
                        autoFocus name="content" autoComplete="off" onChange={this.handleChangeInput} value={content} />
                    <button className="circle-btn success" type="submit">
                        <i className="fas fa-plus"></i>
                    </button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addItem: function (item) {
            dispatch(actAddItem(item));
        },
        setFilter: function (value) {
            dispatch(setVisibleFilter(value));
        }
    }
}


function mapStateToProps(state) {
    return {
        visibleTodoListFilter: state.visibleTodoListFilter,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItemForm);