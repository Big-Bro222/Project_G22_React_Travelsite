import React, { Component } from 'react';
import {Divider} from 'antd';

class PaymentItem extends Component {
    state = { 
        title :"Flight",
        Price: 100,
     }
    render() { 
        return ( 
            <div>
                <h2>{this.state.title}</h2>
                <Divider/>
                <p>Date</p>
                <Divider dashed />
                <p>Flight Company</p>
                <Divider dashed />
                <p>2 hours</p>
                <Divider dashed/>
                <p>Price</p>
            </div>
         );
    }
}
 
export default PaymentItem;