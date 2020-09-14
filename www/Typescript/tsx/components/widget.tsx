import React, { useState, useEffect } from 'react';

// お願い
// AppWidgetHead()の<div id="App-widget-head">のidは変更しないでください
// AppWidgetFoot()の<div id="App-widget-foot">のidは変更しないでください
// アプリ本体からページ内ジャンプする際に使用します。

export const AppWidgetHead = () => {
    return (
        <div id="App-widget-head">
            <div className="row p-1 px-3">
                <div className="col-sm-12 col-lg-8 p-1">
                    <div className="d-flex justify-content-center justify-content-lg-start">
                        <a className="a-nolink" onClick={(evt) => { window.location.href = "https://tech-study-group.connpass.com/event/187008/" }}>
                            <h2 className="slidein-2 btn-push" style={{ fontFamily: "Impact", color: "indigo" }}>
                                <i className="fas fa-book mr-1"></i>2020年 サマーハッカソンvol2
                            </h2>
                        </a>
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
    );
}

export const AppWidgetFoot = () => {
    return (
        <div id="App-widget-foot">        </div>
    );
}