import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import {connect} from 'react-redux';
import * as actionType from '../../store/actions';
class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubCounter}  />
                <hr/>
                <button onClick={() => this.props.onStoreResults(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.res.map(el => <li onClick={() => this.props.onDeleteResults(el.id)} key={el.id}>{el.value}</li>)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
      ctr: state.ctr.counter,
      res: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onIncCounter: () => dispatch({type: actionType.INCREMENT}),
      onDecCounter: () => dispatch({type: actionType.DECREMENT}),
      onAddCounter: () => dispatch({type: actionType.ADD, value: 10}),
      onSubCounter: () => dispatch({type: actionType.ADD, value: -15}),
      onStoreResults: (res) => dispatch({type: actionType.STORE_RESULTS, counter: res}),
      onDeleteResults: (id) => dispatch({type: actionType.DELETE_RESULTS, id: id}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter) ;