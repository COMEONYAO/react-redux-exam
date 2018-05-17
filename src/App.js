import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDevice, addGood, removeDevice, removeGood, addDeviceAsync } from './App.redux';

class App extends Component {

  randomString = (len) => {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = $chars.length;
    var pwd = '';
    for (let i = 0; i < len; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
  }

  render() {
    return (
      <div>
        <div style={{ float: 'left', marginRight: 300 }}>
          <h1>现在有{this.props.device_list.length}台设备</h1>
          <ul>
            {this.props.device_list.map((item, key) => <li key={key}>{item}</li>)}
          </ul>
          <button onClick={() => this.props.addDevice(this.randomString(32))}>随机添加设备</button>
          <button onClick={this.props.removeDevice}>删除设备</button>
          <button onClick={() => this.props.addDeviceAsync(this.randomString(32))}>隔两秒随机添加设备(异步添加)</button>
        </div>

        <div style={{ float: 'left' }}>
          <h1>现在有{this.props.good_list.length}件商品</h1>
          <ul>
            {this.props.good_list.map((item, key) => <li key={key}>{item}</li>)}
          </ul>
          <button onClick={() => this.props.addGood(this.randomString(32))}>随机添加商品</button>
          <button onClick={this.props.removeGood}>删除商品</button>
        </div>
      </div>
    );
  }
}

App = connect(state => ({ device_list: state.device_list, good_list: state.good_list }), 
{ addDevice, addGood, removeDevice, removeGood, addDeviceAsync })(App);

export default App;
