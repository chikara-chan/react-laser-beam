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

    render() {
        const {showLaserBeam} = this.state;

        return (
            <div>
                <button className="btn btn-primary" onClick={this._handleClick.bind(this)}>Launcher</button>
                <LaserBeam show={showLaserBeam} />
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

    render() {
        const {showLaserBeam} = this.state;

        return (
            <div>
                <button className="btn btn-primary" onClick={this._handleClick.bind(this)}>Launcher</button>
                <LaserBeam show={showLaserBeam} width="5px" background="#e00" zIndex="2000" ccStyle="spread"/>
            </div>
        )
    }
}

render(<Demo2 />, document.getElementById('demo2'));