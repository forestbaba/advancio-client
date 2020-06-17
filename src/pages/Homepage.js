import React, { useState, useEffect } from 'react';
import { Select, Input, List, Avatar, Button, Spin, Alert, Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import {} from '../redux/Comment/action'

const { TextArea } = Input;

const Homepage = () => {
    const realDispatch = useDispatch();

    useEffect(() => {

    }, [])

    const [filteredResult, setfilteredResult] = useState([{ name: 'paul' }, { name: 'paul' }])
    return (
        <div className='parent'>
            <div className='post-container'>
                <TextArea rows={4} />
                <button>Post</button>
            </div>
            <div style={{ marginTop: '65px', marginBottom: '25px' }}>

                <p className='search-title'>Search results: </p>

                <List
                    itemLayout="horizontal"
                    dataSource={filteredResult}
                    renderItem={(item) => (
                        <List.Item
                            style={{
                                borderRadius: '10px',
                                boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                                padding: '20px',
                                marginTop: '20px'
                            }}>
                            <List.Item.Meta
                                avatar={<Avatar src={item.icon} />}
                                title={item.name}
                                description={item.vicinity}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}
export default Homepage;