import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends Component {
  render() {
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } = this.props;
    return (
      <div>
        <span>�Ҹ��� : {boolValue}</span>
        <span>���ڰ� : {numValue}</span>
        <span>�迭�� : {arrayValue}</span>
        <span>��ü�� : {String(objValue)}</span>
        <span>��尪 : {nodeValue}</span>
        <span>�Լ��� : {String(funcValue)}</span>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.array,
  objValue: PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
};

export default ChildComponent;
