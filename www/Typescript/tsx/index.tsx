import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import './stylecheets/style.sass';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
var moment = require('moment');

// IndexPage (Not use)
const AppMain = () => {
    const [kensaku, setKensaku] = useState("")
    const [kekka, setKekka] = useState("")
    const [total, setTotal] = useState(0)
    const [targetDataDate, setTargetDataDate] = useState("")
    const [respData, setRespData] = useState([])


    const dataA =
    {
        '2018-12-01': { art: ["gras", "fas"] },
        '2018-12-02': { art: ["gras", "fas"] },
        '2018-12-03': { art: ["gra", "fas"] },
        '2018-12-04': { art: ["gra", "fass"] },
        '2018-12-05': { art: ["grva", "fas"] },
        '2018-12-06': { art: ["gra", "fas"] },
        '2018-12-07': { art: ["gra", "fas", "ffs"] },
        '2018-12-08': { art: ["gra", "fasf"] },
        '2018-12-09': { art: ["gra", "fas"] },
        '2018-12-10': { art: ["gra", "fas"] },
        '2018-12-11': { art: ["grsa", "fas"] },
        '2018-12-12': { art: ["gra", "fas"] },
        '2018-12-13': { art: ["gra", "fas"] },
        '2018-12-14': { art: ["grfa", "fas"] },
        '2018-12-15': { art: ["gra", "GE", "fas"] },
        '2018-12-16': { art: ["gra", "fas"] },
        '2018-12-17': { art: ["gra", "fas"] },
        '2018-12-18': { art: ["gra", "fas"] },
        '2018-12-19': { art: ["gra", "fas"] },
        '2018-12-20': { art: ["grva", "fas"] },
        '2018-12-21': { art: ["gra", "fas"] },
        '2018-12-22': { art: ["gra", "fas"] },
        '2018-12-23': { art: ["gra", "fas"] },
        '2018-12-24': { art: ["gra", "fas"] },
        '2018-12-25': { art: ["gra", "fas"] },
        '2018-12-26': { art: ["grsa", "fas"] },
        '2018-12-27': { art: ["gra", "fas"] },
        '2018-12-28': { art: ["gra", "fass"] },
        '2018-12-29': { art: ["gra", "fas"] },
        '2018-12-30': { art: ["gra", "fas"] }
    }

    const response2Data = (_xhrResponseText: any) => {
        const _respData = []
        const _resp: any = _xhrResponseText
        const _len: Number = Object.keys(_resp).length;
        var _total: number = 0
        for (let i = 0; i < _len; i++) {
            const _value = _resp[Object.keys(_resp)[i]]["art"]
            _respData.push({ date: [Object.keys(_resp)[i]], num: _value.length, art: _value })
            _total += _value.length
        }
        setTotal(_total)
        return _respData
    }
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
    const showDatail = () => {
        if (targetDataDate == "") return (<div>キーワードを入力して下さい</div>)
        const datum: any = respData.filter((item, index) => {
            if (item.date == targetDataDate) return true;
        });
        if (datum.length != 1) return (<div>日付が不正です</div>)
        const _datails = [];
        for (let i = 0; i < datum[0].art.length; i++) {
            _datails.push(<div className="col-12 p-1">{datum[0].art[i]}</div>)
        }
        return (<div className="row p-1 px-3">{_datails}</div>)
    }
    const showBar = () => {
        if (respData.length < 1) return (<div></div>)
        return (
            <ResponsiveContainer width={'99%'} height={300}>
                <BarChart width={400} height={400} data={respData}
                >
                    <XAxis dataKey="date" />
                    <YAxis dataKey="num" />
                    <CartesianGrid
                        stroke="#ccc"
                        strokeDasharray="3 3"
                    />
                    <Tooltip />
                    <Bar dataKey="num" fill="#8884d8" style={{ cursor: "pointer" }}
                        onClick={(evt) => { setTargetDataDate(evt.date) }} />
                </BarChart>
            </ResponsiveContainer>)
    }
    return (
        <div className="p-2 bg-light" >
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
            <div className="m-1">
                <h5>検索キーワード:</h5>
                <div className="input-group">
                    <input className="form-control form-control-lg" type="text" name="val1" value={kensaku}
                        placeholder="検索する文字を入力してください"
                        onChange={(evt) => { setKensaku(evt.target.value) }} />
                    <button className="input-group-append btn btn-outline-primary btn-lg"
                        onClick={() => {
                            kensakusuruyo();
                            setRespData(response2Data(dataA));
                        }}>
                        <i className="fas fa-search mr-1"></i>検索
                    </button>
                </div>
            </div>
            <h3 className="text-center m-1">
                総ヒット数:{String(total)}[件]
            </h3>
            <div>
                {showBar()}
            </div>
            <div style={{ color: "#CCFFFF", border: "3px double silver", background: "#001111" }}>
                {showDatail()}
            </div>
        </div >

    );
};

// WidgetHead
document.body.insertAdjacentHTML('beforeend', '<div id="AppMain">AppWidgetHead loading...<\/div>');
ReactDOM.render(<AppMain />, document.getElementById("AppMain"));
