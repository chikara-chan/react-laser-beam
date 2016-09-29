import React from 'react';
import {findDOMNode} from 'react-dom';
import {renderIntoDocument, Simulate} from 'react-addons-test-utils';
import LaserBeam from '../src/LaserBeam';

describe('component test', () => {
    it('should not show by default', () => {
        const instance = renderIntoDocument(<LaserBeam />);
        const node = findDOMNode(instance);

        expect(instance.props.show).toBeFalsy();
    });
    it('should have style', () => {
        const instance = renderIntoDocument(<LaserBeam />);
        const node = findDOMNode(instance);

        expect(node.style).not.toEqual('');
    });
    it('should change when props changed', () => {
        class App extends React.Component {
            constructor(props, context) {
                super(props, context);
                this.state = {
                    show: false
                }
            }

            render() {
                return (
                  <LaserBeam ref="inner" show={this.state.show}/>
                );
            }
        }
        const wrapInstance = renderIntoDocument(<App/>);
        const instance = wrapInstance.refs.inner;
        const node = findDOMNode(instance);

        expect(instance.props.show).toBeFalsy();
        wrapInstance.setState({show: true});
        expect(instance.props.show).toBeTruthy();
    });
});