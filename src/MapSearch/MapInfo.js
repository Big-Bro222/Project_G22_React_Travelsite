import React, { Component } from 'react';
import { Button, Row, Col, Card, Icon, Avatar, Divider, Rate, Popover, Comment, Modal, List, Input, Form } from 'antd';
import "./MapSearch.css";
import moment from 'moment';
import InfiniteScroll from 'react-infinite-scroller';
const TextArea = Input.TextArea;


// The list contains ths tips the user wrote
const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'tips' : 'tip'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
);

// For writing tips and submitting them 
const Editor = ({
    onChange, onSubmit, submitting, value,
}) => (
        <div>
            <Form.Item>
                <TextArea rows={4} onChange={onChange} value={value} />
            </Form.Item>
            <Form.Item>
                <Button
                    htmlType="submit"
                    loading={submitting}
                    onClick={onSubmit}
                    type="primary">
                    Add Tip
                </Button>
            </Form.Item>
        </div>
    );


class MapInfo extends Component {
    state = {
        visible: false, //Tip window show and hide
        confirmLoading: false, //Click OK on tip window 
        tips: [],
        submitting: false,// Submit user's tips
        value: '',// Tips content
    }

    //Tip Window dialog box
    showTipWindow = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = () => {
        this.setState({
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    }
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    }

    //Tip window submit tips
    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }
        this.setState({
            submitting: true,
        });
        setTimeout(() => {
            this.setState({
                submitting: false,
                value: '',
                tips: [
                    {
                        author: 'User',
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        content: <p>{this.state.value}</p>,
                        datetime: moment().fromNow(),
                    },
                    ...this.state.tips,
                ],
            });
        }, 1000);
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    }


    render() {
        const { visible, confirmLoading} = this.state;
        const { tips, submitting, value } = this.state;

        return (
            <div className="infoView" >
                <div className="demo-infinite-container">
                    <InfiniteScroll
                        initialLoad={false}
                        pageStart={0}
                        loadMore={this.handleInfiniteOnLoad}
                        hasMore={!this.state.loading && this.state.hasMore}
                        useWindow={false}
                    >
                        <Card
                            bordered
                            extra={<Button type="primary">Add</Button>}
                            //Place Name
                            title="Stockholm City Hall"
                            headStyle={{ padding: "0px", fontSize: "25px", position:"sticky"}}
                            bodyStyle={{ padding: "0px" }}
                            size="small"
                            className="cardStyle"
                            //Place Image
                            cover={<img alt="example" src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/S7FfzzQmliwca04xu/videoblocks-city-hall-in-stockholm-sweden-4k-time-lapse-tilt-at-night_shvnrn5z_thumbnail-full07.png" />}
                            //The three buttons on the bottom of the card
                            actions={[
                            //Link to the place website
                            <Popover style={{ width: 500 }} content={"Go To The Website"}>
                                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                                    <Button ghost type="primary" icon="ie" />
                                </a>
                            </Popover>,
                            //Let user write theit tips
                            <Popover style={{ width: 500 }} content={"Write Your Tips"}>
                                <div>
                                    <Button ghost type="primary" icon="edit" onClick={this.showTipWindow} />
                                    <Modal
                                        title="Your Tips"
                                        visible={visible}
                                        onOk={this.handleOk}
                                        confirmLoading={confirmLoading}
                                        onCancel={this.handleCancel}
                                    >
                                        <div>
                                            {tips.length > 0 && <CommentList comments={tips} />}
                                            <Comment
                                                avatar={(
                                                    <Avatar
                                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                                        alt="Han Solo"
                                                    />
                                                )}
                                                content={(
                                                    <Editor
                                                        onChange={this.handleChange}
                                                        onSubmit={this.handleSubmit}
                                                        submitting={submitting}
                                                        value={value}
                                                    />
                                                )}
                                            />
                                        </div>
                                    </Modal>
                                </div>
                            </Popover>,
                            <Button ghost type="primary" icon="more" />]}>
                            

                            <div className="colorDiv" >
                                <h4 className="h4Style"> Place type</h4>
                                <p className="paraStyle"> <Rate disabled allowHalf defaultValue={3.5} />3.5</p>
                            </div>

                            <div className="divStyle">
                                <p className="para2Style"> The Stockholm City Hall is one of Sweden’s most famous buildings, and one of the capital's most visited tourist attractions. </p>
                            </div>
                            <Divider> <Icon type="info-circle" />
                            </Divider>

                            <div className="div2Style">
                                <Avatar size="small" icon="environment" className="avatarStyle" />
                                Place Address
                            </div>

                            <div className="div2Style">
                                <Avatar size="small" icon="phone" className="avatarStyle" />
                                Contact Telephone Number
                            </div>

                            <div className="div2Style">
                                <Avatar size="small" icon="ie" className="avatarStyle" />
                                www.google.com
                            </div>
                            <div className="div2Style">
                                <Avatar size="small" icon="ie" className="avatarStyle" />
                                www.google.com
                            </div>
                            <div className="div2Style">
                                <Avatar size="small" icon="ie" className="avatarStyle" />
                                www.google.com
                            </div>
                        </Card>

                    </InfiniteScroll>
                </div>
            </div>

        )
    }
}

export default MapInfo;