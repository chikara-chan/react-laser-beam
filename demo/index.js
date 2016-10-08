import React, {Component} from 'react';
import {render} from 'react-dom';
import LaserBeam from '../src';

class Demo1 extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showLaserBeam: false
        };
    }

    // _handleClick() {
    //     this.setState({
    //         showLaserBeam: true 
    //     });
    //     window.setTimeout(() => {
    //         this.setState({
    //             showLaserBeam: false 
    //         });
    //     }, 3000);
    // }
    
    _handleClick() {
        this.setState({
            showLaserBeam: true 
        });
    }
    _handleClickF() {
        this.setState({
            showLaserBeam: false 
        });
    }

    _renderIcon() {
        let rets = [];

        for (let i = 0; i < 10; i++) {
            rets.push(<i className="glyphicon glyphicon-hand-left" key={i}></i>);
        }
        return rets;
    }

    render() {
        const {showLaserBeam} = this.state;

        return (
            <div>
                <button className="btn btn-primary" onClick={this._handleClick.bind(this)}>Launcher</button>
                <button className="btn btn-primary" onClick={this._handleClickF.bind(this)}>Launcher2</button>
                <LaserBeam show={showLaserBeam} />
                {this._renderIcon()}
            </div>
        )
    }
}

render(<Demo1 />, document.getElementById('demo1'));

class Demo2 extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showLaserBeam: false
        };
    }

    _handleClick() {
        this.setState({
            showLaserBeam: true 
        });
        window.setTimeout(() => {
            this.setState({
                showLaserBeam: false 
            });
        }, 3000);
    }

    _renderIcon() {
        let rets = [];

        for (let i = 0; i < 10; i++) {
            rets.push(<i className="glyphicon glyphicon-hand-left" key={i}></i>);
        }
        return rets;
    }

    render() {
        const {showLaserBeam} = this.state;

        return (
            <div>
                <button className="btn btn-primary" onClick={this._handleClick.bind(this)}>Launcher</button>
                <LaserBeam show={showLaserBeam} width="4px" background="#77b6ff" zIndex="2000" ccStyle="spread" addon="#fff"/>
                {this._renderIcon()}
            </div>
        )
    }
}

render(<Demo2 />, document.getElementById('demo2'));