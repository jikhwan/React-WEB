import React, { useCallback, useState, useRef, useEffect } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../reducers/post";
import useInput from "../hooks/useInput";



const PostForm = () => {
    const { addPostDone, addPostLoading } = useSelector((state) => state.post)
    const { imagePaths } = useSelector((state) => state.post)
    const [text, onChangeText, setText] = useInput('')

    useEffect(() => {
        if(addPostDone){
            setText('')
        }
    }, [addPostDone])


    const dispatch = useDispatch();
    
    const onSubmit = useCallback(() => {
        dispatch(addPost(text))
    }, [text])

    const imageInput = useRef();
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current])

    return (
        <Form style={{ margin: '10px 0 20px' }} encType='multipart/form-data' onFinish={onSubmit}>
            <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder='쉽지 않네,,'/>
            <div>
                <input type='file' multiple hidden ref={imageInput}/>
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>  
                <Button 
                    type="primary" 
                    style={{ float: 'right' }} 
                    htmlType="submit"
                    loading={addPostLoading}
                    >레고레고</Button>
            </div>
            <div>
                {imagePaths.map((v) => (
                    <div key={v} style={{ display: 'inline-block' }}>
                        <img src={v} style={{ width: '200px' }} alt={v} />
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>

                ))}
            </div>
        </Form>
    )
}

export default PostForm