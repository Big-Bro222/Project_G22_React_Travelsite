import React, { Component } from 'react';
import {Radio} from 'antd';

class QuickResultItem extends Component {
    state = { value:1, }
    render() { 
        return ( 
            <div>
            <p><Radio.Button className="radioStyle" value={this.state.value}>Option {this.state.value}</Radio.Button ></p>
            </div>
         );
    }
}
 
export default QuickResultItem;