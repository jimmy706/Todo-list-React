import React from 'react';
import "./change-theme-wrapper.scss";
import { connect } from "react-redux";
import { actChangeTheme } from "../../actions/theme.action";

function ChangeThem(props) {

    const handleChangeTheme = () => {
        if (props.visibleTheme === "light") {
            props.changeTheme("dark");
        }
        else {
            props.changeTheme("light");
        }
    }

    return (
        <form className="change-theme-wrapper">
            <label htmlFor="change-theme-toggle">Dark theme: </label>
            <input id="change-theme-toggle" type="checkbox" onChange={handleChangeTheme}></input>
        </form>
    )
}

function mapStateToProps(state) {
    return {
        visibleTheme: state.visibleTheme
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeTheme: (theme) => {
            dispatch(actChangeTheme(theme));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeThem);