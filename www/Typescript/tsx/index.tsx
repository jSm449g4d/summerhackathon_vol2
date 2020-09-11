import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import './stylecheets/style.sass';

// IndexPage (Not use)
const AppMain = () => {
    const [kensaku, setKensaku] = useState("")

    return (
        <div className="p-2 bg-light">
            <div style={{ borderBottom: "3px double gray;" }}>
                <div className="row p-1 px-3">
                    <div className="col-sm-12 col-lg-8 p-1">
                        <div className="d-flex justify-content-center justify-content-lg-start">
                            <h2 style={{ fontFamily: "Impact", color: "indigo" }}>
                                <i className="fas fa-book mr-1"></i>2020年 サマーハッカソンvol2 Team3の成果物へようこそ!
                        </h2>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4 p-1">
                        <div className="d-flex justify-content-center justify-content-lg-end">
                            <h4 style={{ fontFamily: "Courier", color: "darkgreen" }}>
                                <i className="fas fa-flask fa-lg faa-wrench animated mr-1"></i>Flask
                        </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-inlie">
                <div className="form-group m-1">
                    <label htmlFor="text1">入力フォーム1:</label>
                    <input className="form-control form-control-lg" type="text" name="val1" value={kensaku} placeholder="検索する文字を入力してください"
                        onChange={(evt) => { setKensaku(evt.target.value) }} />
                </div>
                <div className="d-flex flex-column text-center m-2">
                    <button className="btn btn-outline-primary btn-lg btn-push"
                        onClick={() => { }}>
                        <i className="far fa-arrow-alt-circle-right mr-1"></i>提出
                    </button>
                </div>
            </div>
            <div className="d-flex flex-column text-center m-1" style={{ borderBottom: "3px double gray;" }}>
                kari
            </div>
        </div>

    );
};

// WidgetHead
document.body.insertAdjacentHTML('beforeend', '<div id="AppMain">AppWidgetHead loading...<\/div>');
ReactDOM.render(<AppMain />, document.getElementById("AppMain"));
