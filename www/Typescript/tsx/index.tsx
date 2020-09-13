import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import './stylecheets/style.sass';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

// IndexPage (Not use)
const AppMain = () => {
    const [kensaku, setKensaku] = useState("")
    const [targetDataDate, setTargetDataDate] = useState("")
    const [respData, setRespData] = useState([])


    const response2Data = (_xhrResponseText: any) => {
        const _respData = []
        const _resp: any = _xhrResponseText
        const _len: Number = Object.keys(_resp).length;
        for (let i = 0; i < _len; i++) {
            const _value = _resp[Object.keys(_resp)[i]]//{"description":"aaa","url":"bbb"},...
            _respData.push({ date: [Object.keys(_resp)[i]], num: _value.length, arts: _value })
        }
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
            setRespData(response2Data(resp));
        };
        xhr.timeout = 5000;
        xhr.send(JSON.stringify({ "kensaku": kensaku }));
    }
    const showDatail = () => {
        if (targetDataDate == "") return (<div>キーワードを入力して下さい</div>)
        const datum: any = respData.filter((item, index) => {
            if (item.date == targetDataDate) return true;
        });
        if (datum.length != 1) { setTargetDataDate(""); return (<div></div>) }
        const _datails = [];
        for (let i = 0; i < datum[0].arts.length; i++) {
            _datails.push(<div className="col-12 p-1">{datum[0].arts[i]["description"]}</div>)
            _datails.push(<div className="col-12 p-1">{datum[0].arts[i]["url"]}</div>)
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
    const textFormErrorModal = () => {
        return (
            <div className="modal fade" id={"index_textformerror_modal"} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header d-flex justify-content-between">
                            <h3 className="modal-title">
                                エラー
                            </h3>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex flex-column text-center">
                                入力が不正です
                                <button className="btn btn-danger btn-lg btn-push my-1" type="button" data-dismiss="modal">
                                    閉じる
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
    return (
        <div className="p-2 bg-light" >
            <div>
                <div className="row p-1 px-3">
                    <div className="col-sm-12 col-lg-8 p-1">
                        <div className="d-flex justify-content-center justify-content-lg-start">
                            <h2 className="slidein-2" style={{ fontFamily: "Impact", color: "indigo" }}>
                                <i className="fas fa-book mr-1"></i>2020年 サマーハッカソンvol2
                            </h2>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4 p-1">
                        <div className="d-flex justify-content-center justify-content-lg-end">
                            <h4 className="titlelogo">
                                チーム: =はじめてのFlask=
                            </h4>
                        </div>
                    </div>
                    <div className="col-12 p-1">
                        <div className="d-flex justify-content-center">
                            <h4 style={{ fontFamily: "Courier", color: "darkgreen" }}>
                                <i className="fas fa-flask fa-lg flask-icon mr-1"></i>Flask通信
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
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
                        onChange={(evt) => { setKensaku(evt.target.value) }} />
                    {kensaku == "" ?
                        <button className="input-group-append btn btn-outline-primary btn-lg" disabled>
                            <i className="fas fa-search mr-1"></i>検索
                        </button>
                        :
                        <button className="input-group-append btn btn-outline-primary btn-lg"
                            onClick={() => { kensakusuruyo(); }}>
                            <i className="fas fa-search mr-1"></i>検索
                        </button>
                    }
                </div>
            </div>
            <h3 className="text-center m-1">
                {0 < respData.length ? <div>期間:{respData[0].date}~{respData[respData.length - 1].date}</div> : <div></div>}

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
