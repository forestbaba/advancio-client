import React, { useEffect, useState } from 'react'
import './styles.scss'
import { fetchCommentReply, addCommentReply } from '../redux/Comment/action';
import { useDispatch, useSelector} from 'react-redux'
import { Select, Input, List, Avatar, Button, Spin, Alert, Tabs } from 'antd';


const Comment = (props) => {
    const realDispatch = useDispatch()
    const [allCommentRep, setallCommentRep] = useState([])
    const [reply, setReply] = useState('')
    const cdata = useSelector((state) => state);

    const { commentData: { allCommentReply, loading, addCommentReplySuccess }, userData: { isAuthenticated } } = cdata



    const { data } = props.location
    const { id } = props.match.params
    useEffect(() => {
        realDispatch(fetchCommentReply(id))
        
    }, [])

    useEffect(() => {
        if (!loading) {
            setallCommentRep(allCommentReply.comments)
        }
    }, [loading])

    useEffect(() => {
        
        if (addCommentReplySuccess) {
            setReply('')
        }
    }, [addCommentReplySuccess])

    const handleSubmitReply = () => {
        realDispatch(addCommentReply({
            id,
            reply
        }))
    }
    return (
        <div className='parent'>
            {
                isAuthenticated ? (<div className='post-container'>
                    <textarea name='commentReply' placeholder='Reply to comment...' value={reply} onChange={(e) => setReply(e.target.value)} />
                    <button onClick={handleSubmitReply}>Post</button>
                </div>) : null
            }

            <p style={{fontSize:'20px', fontWeight:'bold',paddingTop:'15px', paddingBottom:'15px'}}>{data}</p>

            {
                    allCommentRep && allCommentRep.length > 0 ?
                        (
                            <List
                                itemLayout="horizontal"
                                dataSource={allCommentRep}
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
                                            description={item.comment_reply}
                                        />
                                        <div>
                                          
                                        </div>
                                    </List.Item>
                                )}
                            />
                        ) : <p>*No replies*</p>
                }

        </div>
    )
}
export default Comment;