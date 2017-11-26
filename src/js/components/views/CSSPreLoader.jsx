import React, {Component} from "react";

export default class CSSPreLoader extends Component {

    render() {
        let styles = `
            .group {
            position: relative;
            display: inline-block;
            line-height: 16px;
            }
            
            .bigSqr {
            position: relative;
            display: inline-block;
            width: 40px;
            height: 40px;
            overflow: hidden;
            -webkit-transform-origin: bottom left;
            transform-origin: bottom left;
            -webkit-animation: bigSqrShrink 1s linear infinite;
            animation: bigSqrShrink 1s linear infinite;
            }
            
            .square {
            position: absolute;
            width: 20px;
            height: 20px;
            background: #FFF;
            }
            
            .first {
            left: 0px;
            top: 20px;
            }
            
            .second {
            left: 20px;
            top: 20px;
            -webkit-animation: drop2 1s linear infinite;
            animation: drop2 1s linear infinite;
            }
            
            .third {
            left: 0px;
            top: 0px;
            -webkit-animation: drop3 1s linear infinite;
            animation: drop3 1s linear infinite;
            }
            
            .fourth {
            left: 20px;
            top: 0px;
            -webkit-animation: drop4 1s linear infinite;
            animation: drop4 1s linear infinite;
            }
            
            .text {
            line-height: 16px;
            font-family: "Open Sans", "Roboto", Arial, sans-serif;
            font-weight: 400;
            color: #FFF;
            display: block;
            margin: 10px auto;
            padding: 3px;
            }
            
            @-webkit-keyframes bigSqrShrink {
            0% {
            -webkit-transform: scale(1);
            transform: scale(1);
            }
            90% {
            -webkit-transform: scale(1);
            transform: scale(1);
            }
            100% {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
            }
            }
            
            @keyframes bigSqrShrink {
            0% {
            -webkit-transform: scale(1);
            transform: scale(1);
            }
            90% {
            -webkit-transform: scale(1);
            transform: scale(1);
            }
            100% {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
            }
            }
            @-webkit-keyframes drop2 {
            0% {
            -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
            }
            25% {
            -webkit-transform: translate(0);
            transform: translate(0);
            }
            100% {
            -webkit-transform: translate(0);
            transform: translate(0);
            }
            }
            @keyframes drop2 {
            0% {
            -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
            }
            25% {
            -webkit-transform: translate(0);
            transform: translate(0);
            }
            100% {
            -webkit-transform: translate(0);
            transform: translate(0);
            }
            }
            @-webkit-keyframes drop3 {
            0% {
            -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
            }
            50% {
            -webkit-transform: translate(0);
            transform: translate(0);
            }
            100% {
            -webkit-transform: translate(0);
            transform: translate(0);
            }
            }
            @keyframes drop3 {
            0% {
            -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
            }
            50% {
            -webkit-transform: translate(0);
            transform: translate(0);
            }
            100% {
            -webkit-transform: translate(0);
            transform: translate(0);
            }
            }
            @-webkit-keyframes drop4 {
            0% {
            -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
            }
            75% {
            -webkit-transform: translate(0);
            transform: translate(0);
            }
            100% {
            -webkit-transform: translate(0);
            transform: translate(0);
            }
            }
            @keyframes drop4 {
            0% {
            -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
            }
            75% {
            -webkit-transform: translate(0);
            transform: translate(0);
            }
            100% {
            -webkit-transform: translate(0);
            transform: translate(0);
            }
        `;

        return (
            <div className="ui container">
                <h3 className="header" style={{'paddingTop': '15px'}}>
                    <i className="doctor icon"/>Comment moderator
                </h3>
                <div className="group" style={{
                    'position': 'absolute',
                    'top': 'calc(50vh - 45px)',
                    'left': 'calc(50vw - 25px)'
                }}>
                    <style>{styles}</style>
                    <div className="bigSqr">
                        <div className="square first" />
                        <div className="square second" />
                        <div className="square third" />
                        <div className="square fourth" />
                    </div>
                    <div className="text">loading...</div>
                </div>
            </div>
        );
    }
}
