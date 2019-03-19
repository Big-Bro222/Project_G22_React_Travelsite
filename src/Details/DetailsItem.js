
import React, {
  Component
} from "react";
import 'antd/dist/antd.css';
import './DetailsItem.css';
import { Card, Icon, Collapse, Rate } from 'antd';

const { Meta } = Card;
const Panel = Collapse.Panel;
class DetailsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotel_name:"XXX Hotel",
      hotel_description:"This is hotel description >>>"

    }
  }



  render() {
   

    return (
      <div>
        <Card
          style={{width:"100%"}} 
          cover={<img alt="example" src="https://www3.hilton.com/resources/media/hi/IADMRHF/en_US/img/shared/full_page_image_gallery/main/HH_hotelextdusk_2_675x359_FitToBoxSmallDimensionSmallDimension_Center.jpg" />}
        >
      
        <Meta
            title={this.state.hotel_name}
          />

        <Rate disabled defaultValue={3} />
        
        <Meta
            description={this.state.hotel_description}
          />
        
         <Collapse
          bordered={false}
          expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
        >
          <Panel header="Available Time" key="1" className="customPanelStyle">
            <p></p>
          </Panel>
          <Panel header="Comments" key="2" className="customPanelStyle">
            <p></p>
          </Panel>
          <Panel header="Address" key="3" className="customPanelStyle">
            <p></p>
          </Panel>
        </Collapse>
          
          
        </Card>       
      </div>

    );
  }
}

export default DetailsItem;          