import React, { Component } from 'react';
import{Button} from 'antd';
import "./PlanItemView.css"

class PlanItemView extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Button type="primary" shape="round" icon="edit" size={"large"} >ADD YOUR PLAN</Button>
            </div>
         );
    }
}
 
export default PlanItemView;