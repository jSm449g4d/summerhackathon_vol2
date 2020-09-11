import React from 'react';
import ReactDOM from "react-dom";

// IndexPage (Not use)
const AppMain = () => {
    return (
        <div className="p-2 bg-light">
            <div className="d-flex justify-content-between">
                <h2 style={{ fontFamily: "Impact", color: "indigo" }}>
                    <i className="fas fa-book mr-1"></i>Index
                    </h2>
                <h4 style={{ fontFamily: "Century", color: "mediumturquoise" }}>
                    <i className="fab fa-react fa-lg fa-spin mr-1"></i>React
                    </h4>
            </div>
            <a className="btn btn-outline-secondary m-2" href="/">BACK</a>
        </div>
    );
};

// WidgetHead
document.body.insertAdjacentHTML('beforeend', '<div id="AppMain">AppWidgetHead loading...<\/div>');
ReactDOM.render(<AppMain />, document.getElementById("AppMain"));
