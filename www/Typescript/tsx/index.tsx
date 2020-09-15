import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import './stylecheets/style.sass';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LabelList } from 'recharts';
import { AppWidgetHead, AppWidgetFoot } from "./components/widget";


// IndexPage (Not use)
const AppMain = () => {
    console.log("れんだりんぐ")
    const [kensaku, setKensaku] = useState("")
    const [targetDataDate, setTargetDataDate] = useState("")
    const [respData, setRespData] = useState([])
    const [message, setMessage] = useState("キーワードを入力してください")

    const response2Data = (_xhrResponseText: any) => {
        const sortRespData = (a: any, b: any) => {
            return parseInt(String(a.date).replace(/[^0-9^\.]/g, "")) -
                parseInt(String(b.date).replace(/[^0-9^\.]/g, ""));
        }
        const _respData = []
        const _resp: any = _xhrResponseText
        const _len: number = Object.keys(_resp).length;
        if (0 == _len) { setMessage("検索結果がありませんでした"); return [] }
        setMessage("")
        for (let i = 0; i < _len; i++) {
            const _value = _resp[Object.keys(_resp)[i]]//{"description":"aaa","url":"bbb"},...
            _respData.push({ date: [Object.keys(_resp)[i]], num: _value.length, arts: _value })
        }
        _respData.sort(sortRespData)
        setTargetDataDate(Object.keys(_resp)[0])
        return _respData
    }
    const kensakusuruyo = () => {
        setMessage("searching")
        // access to backend
        const xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("POST", "/news_api.py", true);
        xhr.ontimeout = () => console.error("The request timed out.");
        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) console.log(xhr.responseText);
            const resp: any = JSON.parse(xhr.responseText)
            setRespData(response2Data(resp));
        };
        xhr.timeout = 5000;
        xhr.send(JSON.stringify({ "kensaku": kensaku }));
    }
    const showDatail = () => {
        if (targetDataDate == "") return (<div></div>)
        const datum: any = respData.filter((item, index) => {
            if (item.date == targetDataDate) return true;
        });
        if (datum.length != 1) { return (<div></div>) }
        const _datails = [];
        _datails.push(<h4 className="col-12 p-1 text-center" style={{ backgroundColor: "rgba(250,250,250,0.8)" }}>{targetDataDate}の時間帯の記事</h4>)
        for (let i = 0; i < datum[0].arts.length; i++) {
            _datails.push(
                <div className="col-12 col-lg-6 p-1">
                    <div className="btn-col" style={{ background: "rgba(255,255,255,0.6)" }}>
                        <a className="a-nolink" href={datum[0].arts[i]["url"]} >
                            <div className="d-flex flex-column" style={{ height: "400px" }}>
                                <h5 className="text-center">{datum[0].arts[i]["title"]}</h5>
                                <div className="d-flex flex-column flex-grow-1">
                                    <img className="img-fluid" src={datum[0].arts[i]["imageUrl"]} style={{ height: 150, objectFit: "contain" }} />
                                    {datum[0].arts[i]["description"]}
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            )
        }
        _datails.push(
            <div className="col-12 p-1 text-center">
                <a className="btn btn-lg btn-push btn-outline-primary" href="#App-widget-head">↑トップへ戻る</a>
            </div>)
        return (<div className="row p-1 px-3">{_datails}</div>)
    }
    const showBar = () => {
        if (respData.length < 1) return (<div></div>)
        return (
            <ResponsiveContainer width={'99%'} height={300}>
                <BarChart width={400} height={400} data={respData}>
                    <XAxis dataKey="date" />
                    <YAxis dataKey="num" label={{ value: 'Number of articles', angle: -90, position: 'insideLeft' }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                    <Tooltip />
                    <Bar dataKey="num" fill="#8884d8" style={{ cursor: "pointer" }}
                        onClick={(evt) => { setTargetDataDate(evt.date) }} >
                        <LabelList dataKey="num" position="top" />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>)
    }
    const showMessage = () => {
        if (message == "searching") return (<h3 className="text-center m-1"><i className="fas fa-search m-1"></i>検索中...</h3>)
        if (message != "") return (<h3 className="text-center m-1">{message}</h3>)
        if (0 < respData.length)
            return (<h3 className="text-center m-1">期間:{respData[0].date}~{respData[respData.length - 1].date}</h3>)
        return (<div></div>)
    }
    const showSearchButton = () => {
        if (kensaku == "")
            return (
                <button className="input-group-append btn btn-outline-primary btn-lg" disabled>
                    <i className="fas fa-search mr-1"></i>検索
                </button>)
        if (message == "searching")
            return (
                <button className="input-group-append btn btn-outline-primary btn-lg" disabled>
                    <i className="fas fa-search mr-1"></i>検索中...
                </button>)
        return (
            <button className="input-group-append btn btn-outline-primary btn-lg" id="index_kensaku_button"
                onClick={() => { kensakusuruyo(); }}>
                <i className="fas fa-search mr-1"></i>検索
            </button>)
    }
    return (
        <div className="p-2 bg-light" >
            {AppWidgetHead()}
            <div className="text-center"
                style={{ border: "3px double silver", backgroundColor: "rgba(230,230,250,0.5)" }}>
                「時間を軸とした、ホットのキーワードの可視化」をおこなうアプリです!<br />
                キーワード検索で、何時どれだけ記事にされたのか、どんな記事があったのかが分かります!<br />
                <div className="text-center slidein-2-reverse" style={{ backgroundColor: "rgba(250,250,250,0.8)" }}>
                    使用技術:
                    <i className="fab fa-python mx-1"></i>:Flask/Python
                    <i className="fab fa-react mx-1"></i>(React/Typescript)
                    <i className="fab fa-bootstrap mx-1"></i>
                    <i className="fab fa-sass mx-1"></i>
                    <i className="fab fa-docker mx-1"></i>
                </div>
                <button className="btn btn-link btn-push"
                    onClick={() => { window.location.href = "https://github.com/jSm449g4d/summerhackathon_vol2" }}>
                    <i className="fab fa-github mr-1"></i>Githubのリポジトリ
                </button>
            </div>
            <div className="m-1">
                <h5>検索キーワード:</h5>
                <div className="input-group">
                    <input className="form-control form-control-lg" type="text" name="val1" value={kensaku}
                        placeholder="検索する文字を入力してください"
                        onChange={(evt) => { setKensaku(evt.target.value) }}
                        onKeyPress={(e) => { if (e.key == 'Enter' && kensaku != "") kensakusuruyo() }}
                    />
                    {showSearchButton()}
                </div>
            </div>
            {showMessage()}
            <div>
                {showBar()}
            </div>
            <div style={{ border: "3px double silver", backgroundColor: "rgba(230,240,240,0.5)" }}>
                {showDatail()}
            </div>
            {AppWidgetFoot()}
        </div >

    );
};

// WidgetHead
document.body.insertAdjacentHTML('beforeend', '<div id="AppMain">AppWidgetHead loading...<\/div>');
ReactDOM.render(<AppMain />, document.getElementById("AppMain"));
