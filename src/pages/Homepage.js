import React, { useState, useEffect } from 'react';
import { Select, Input, List, Avatar, Button, Spin, Alert, Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';

import './styles.scss';
import 'antd/dist/antd.css';

import { fetchAllComment, addComment, deleteComment, updateComment } from '../redux/Comment/action'

const { TextArea } = Input;

const Homepage = () => {
    const realDispatch = useDispatch();
    const history = useHistory();

    const [allComment, setallComment] = useState([])
    const [post, setpost] = useState('')
    const [postid, setpostId] = useState('')
    const [activateUpdate, setActivateUpdate] = useState(false)
    const data = useSelector((state) => state);

    const { commentData: { allComments, loading, addCommentSuccess, updateCommentSuccess, deleteCommentSuccess }, userData: { isAuthenticated,loggedInUser } } = data

    useEffect(() => {

        realDispatch(fetchAllComment())

    }, [])
    useEffect(() => {

        if (!loading) {
            setallComment(allComments.comments)
        }
    }, [loading])

    useEffect(() => {
        if (addCommentSuccess) {

            setpost('')
        }
        if (deleteCommentSuccess) {
            alert('Comment deleted')
        }
        if (updateCommentSuccess) {
            setpostId('')
            setpost('')
            setActivateUpdate(false)
            alert('Comment updated')
        }
    }, [addCommentSuccess, deleteCommentSuccess, updateCommentSuccess])

    const handleChange = (e) => {
        const value = e.target.value;
        setpost({
            ...post,
            [e.target.name]: value
        });
    };

    const handleSubmitPost = () => {
        realDispatch(addComment(post))
    }
    const handleDelete = id => {
        if (window.confirm("Are you sure you want to delete this comment ?")) {

            realDispatch(deleteComment(id))
        }


    }

    const handleEdit = ({ id, comment }) => {
       
        window.scrollTo(0, 0)
        setActivateUpdate(true)
        setpost(comment)
        setpostId(id)

    }
    const handleUpdate = () => {
        if (post === '' || post === undefined || post === null) {
            alert('You can not submit empty field')
        } else {
            realDispatch(updateComment({ post: post, id: postid }))
        }
    }

    const [filteredResult, setfilteredResult] = useState([{ name: 'paul' }, { name: 'paul' }])
    return (
        <div className='parent'>
            {
                isAuthenticated ? (<div className='post-container'>
                    <textarea name='comment' placeholder='Add comment' value={post} onChange={(e) => setpost(e.target.value)} />
                    {activateUpdate ? <button onClick={handleUpdate}>update</button> : <button onClick={handleSubmitPost}>Post</button>}

                </div>) : null
            }

            <div style={{ marginTop: '65px', marginBottom: '25px' }}>

                <p className='search-title'>Comments: </p>
                {
                    loading ? <p>Loading...</p> : null
                }

                {
                    allComment && allComment.length > 0 ?
                        (
                            <div>
                                <List
                                    itemLayout="horizontal"
                                    dataSource={allComment}
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
                                                description={item.comment}
                                                onClick={() => history.push({ pathname: `/comments/${item.id}`, data: item.comment })}

                                            />
                                            <div>
                                                {
                                                item.userid === data.userData.user.id ? (<DeleteOutlined onClick={handleDelete.bind(this, item.id)} style={{ fontSize: '20px', marginRight: '20px' }} />): null
                                            }
                                                {
                                                    item.userid === data.userData.user.id ? (<EditOutlined onClick={handleEdit.bind(this, { id: item.id, comment: item.comment, item })} style={{ fontSize: '22px', marginRight: '20px' }} />): null
                                            }
                                               
                                               
                                            </div>
                                        </List.Item>

                                    )}
                                />

                            </div>

                        ) : null
                }

            </div>
        </div>
    )
}
export default Homepage;