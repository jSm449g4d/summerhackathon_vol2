import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,CartesianGrid } from 'recharts';
var moment = require('moment');

// IndexPage (Not use)
const AppMain = () => {
    const [kensaku, setKensaku] = useState("")
    const [kekka, setKekka] = useState("")
    const kensakusuruyo = () => {
        // access to backend
        const xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("POST", "/sh2_api.py", true);
        xhr.ontimeout = () => console.error("The request timed out.");
        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) console.log(xhr.responseText);
            const resp: any = JSON.parse(xhr.responseText)
            setKekka(resp["kekka"])
        };
        xhr.timeout = 5000;
        xhr.send(JSON.stringify({ "kensaku": kensaku }));
    }
    const data = [
        { date: '2018-12-01', num: 10 },
        { date: '2018-12-02', num: 12, },
        { date: '2018-12-03', num: 18, },
        { date: '2018-12-04', num: 10, },
        { date: '2018-12-05', num: 9, },
        { date: '2018-12-06', num: 13, },
        { date: '2018-12-07', num: 16, },
        { date: '2018-12-08', num: 16, },
        { date: '2018-12-09', num: 16, },
        { date: '2018-12-10', num: 16, },
        { date: '2018-12-11', num: 16, },
        { date: '2018-12-12', num: 16, },
        { date: '2018-12-13', num: 16, },
        { date: '2018-12-14', num: 15, },
        { date: '2018-12-15', num: 16, },
        { date: '2018-12-16', num: 16, },
        { date: '2018-12-17', num: 16, },
        { date: '2018-12-18', num: 16, },
        { date: '2018-12-19', num: 16, },
        { date: '2018-12-20', num: 16, },
        { date: '2018-12-21', num: 16, },
        { date: '2018-12-22', num: 16, },
        { date: '2018-12-23', num: 16, },
        { date: '2018-12-24', num: 16, },
        { date: '2018-12-25', num: 6, },
        { date: '2018-12-26', num: 16, },
        { date: '2018-12-27', num: 16, },
        { date: '2018-12-28', num: 16, },
        { date: '2018-12-29', num: 16, },
        { date: '2018-12-30', num: 16, },
    ]

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
                    <label htmlFor="text1">検索キーワード:</label>
                    <input className="form-control form-control-lg" type="text" name="val1" value={kensaku} placeholder="検索する文字を入力してください"
                        onChange={(evt) => { setKensaku(evt.target.value) }} />
                </div>
                <div className="d-flex flex-column text-center m-2">
                    <button className="btn btn-outline-primary btn-lg btn-push"
                        onClick={() => { kensakusuruyo() }}>
                        <i className="far fa-arrow-alt-circle-right mr-1"></i>提出
                    </button>
                </div>
            </div>
            <div className="d-flex flex-column text-center m-1" style={{ borderBottom: "3px double gray;" }}>
                {kekka}
            </div>
            <ResponsiveContainer width={'99%'} height={300}>
                <BarChart width={400} height={400} data={data}>
                    <Bar dataKey="num" fill="#8884d8" />
                    <XAxis dataKey="date" />
                    <CartesianGrid
                        stroke="#ccc"
                        strokeDasharray="3 3"
                    />
                    <Tooltip />
                </BarChart>
            </ResponsiveContainer>
        </div>

    );
};

// WidgetHead
document.body.insertAdjacentHTML('beforeend', '<div id="AppMain">AppWidgetHead loading...<\/div>');
ReactDOM.render(<AppMain />, document.getElementById("AppMain"));
