import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import firebase from '../firebase';
import { useSelector } from 'react-redux';

import { getDatabase, ref, set, remove, push, child } from "firebase/database";
import { getStorage, ref as strRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import './style.css';
import Logo from './img/C&Clogo.png';

const Chatroom = () => {

    const chatRoom = useSelector(state => state.chatRoom.currentChatRoom)
    const user = useSelector(state => state.user.currentUser)
    const [content, setContent] = useState("")
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(false)
    const [percentage, setPercentage] = useState(0)
    const messagesRef = ref(getDatabase(), "messages")
    const inputOpenImageRef = useRef();
    // const storageRef = ref(getStorage());
    const typingRef = ref(getDatabase(), "typing")
    const isPrivateChatRoom = useSelector(state => state.chatRoom.isPrivateChatRoom)
    
    const handleChange = (event) => {
        setContent(event.target.value)
    }

    const createMessage = (fileUrl = null) => {
        const message = {
            timestamp: new Date(),
            user: {
                id: user.uid,
                name: user.displayName,
                image: user.photoURL
            }
        }

        if (fileUrl !== null) {
            message["image"] = fileUrl;
        } else {
            message["content"] = content;
        }

        return message;
    }

    const handleSubmit = async () => {
        if (!content) {
            setErrors(prev => prev.concat("Type contents first"))
            return;
        }
        setLoading(true);
        //firebase에 메시지를 저장하는 부분 
        try {
            // await messagesRef.child(chatRoom.id).push().set(createMessage())
            await set(push(child(messagesRef, chatRoom.id)), createMessage())

            // typingRef.child(chatRoom.id).child(user.uid).remove();
            await remove(child(typingRef, `${chatRoom.id}/${user.uid}`));
            setLoading(false)
            setContent("")
            setErrors([])
        } catch (error) {
            setErrors(pre => pre.concat(error.message))
            setLoading(false)
            setTimeout(() => {
                setErrors([])
            }, 5000);
        }
    }

    const handleOpenImageRef = () => {
        inputOpenImageRef.current.click()
    }

    const getPath = () => {
        if (isPrivateChatRoom) {
            return `/message/private/${chatRoom.id}`
        } else {
            return `/message/public`
        }
    }

    const handleUploadImage = (event) => {
        const file = event.target.files[0];
        const storage = getStorage();

        const filePath = `${getPath()}/${file.name}`;
        console.log('filePath', filePath);
        const metadata = { contentType: file.type }
        setLoading(true)
        try {
            // https://firebase.google.com/docs/storage/web/upload-files#full_example
            // Upload file and metadata to the object 'images/mountains.jpg'
            const storageRef = strRef(storage, filePath);
            const uploadTask = uploadBytesResumable(storageRef, file, metadata);

            // Listen for state changes, errors, and completion of the upload.
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;
                        case 'storage/canceled':
                            // User canceled the upload
                            break;

                        // ...

                        case 'storage/unknown':
                            // Unknown error occurred, inspect error.serverResponse
                            break;
                    }
                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        // console.log('File available at', downloadURL);
                        set(push(child(messagesRef, chatRoom.id)), createMessage(downloadURL))
                        setLoading(false)
                    });
                }
            );
        } catch (error) {
            console.log(error)
        }
    }

    const handleKeyDown = (event) => {

        if (event.ctrlKey && event.keyCode === 13) {
            handleSubmit();
        }

        const userUid = user.uid;
        if (content) {
            set(ref(getDatabase(), `typing/${chatRoom.id}/${user.uid}`), {
                userUid: user.displayName
            })
        } else {
            remove(ref(getDatabase(), `typing/${chatRoom.id}/${user.uid}`))
        }
    }

    return(
        <React.Fragment>
            <div className="CR-body">
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
                <header className="header">
                    <span className="wrapper">
                        <Link to="/Chat" className="back-link">
                            <i className="fa fa-chevron-left fa-2x"></i>
                        </Link>
                    </span>
                    <h1 className="header-title">채팅</h1>
                    <div className="header-icons">
                        <span>
                            <i className="fas fa-search fa-lg"></i>
                        </span>
                        <span>
                            <i className="fas fa-cog fa-lg"></i>
                        </span>
                    </div>
                </header>
                <main className="chats">
                    <ul className="chatlist-me">
                        <li className="chats_chat">
                            <div className="chats-content">
                                <img src={Logo} className="img-me"/>
                                <div className="chat-priview">
                                    <h3 className="chatuser-me">
                                        사자
                                    </h3>
                                    <span className="chat-last-message-me">
                                        Hi
                                    </span>
                                </div>
                            </div>
                            <span className="chat-date-time-me">
                                08:55
                            </span>
                        </li>
                    </ul>
                    <ul className="chatlist-you">
                        <li className="chats_chat">
                            <div className="chats-content">
                                <img src={Logo} className="img-you"/>
                                <div className="chat-priview">
                                    <h3 className="chatuser-you">
                                        호랑이
                                    </h3>
                                    <span className="chat-last-message-you">
                                        Bye
                                    </span>
                                </div>
                            </div>
                            <span className="chat-date-time-you">
                                05:45
                            </span>
                        </li>
                    </ul>
                </main>
                <nav className="CR-nav">
                    <Row>
                        <Col>
                            <button
                                onClick={handleOpenImageRef}
                                className="upload"
                                style={{ width: '100%' }}
                                disabled={loading ? true : false}
                            >
                                사진
                            </button>
                        </Col>
                    </Row>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control
                                onKeyDown={handleKeyDown}
                                value={content}
                                onChange={handleChange}
                                as="textarea"
                                rows={3} />
                        </Form.Group>
                    </Form>

                    {
                        !(percentage === 0 || percentage === 100) &&
                        <ProgressBar variant="warning" label={`${percentage}%`} now={percentage} />
                    }

                    <div>
                        {errors.map(errorMsg => <p style={{ color: 'red' }} key={errorMsg}>
                            {errorMsg}
                        </p>)}
                    </div>

                    <Row>
                        <Col>
                            <button
                                onClick={handleSubmit}
                                className="send"
                                style={{ width: '100%' }}
                                disabled={loading ? true : false}
                            >
                                보내기
                            </button>
                        </Col>
                    </Row>

                    <input
                        accept="image/jpeg, image/png"
                        style={{ display: 'none' }}
                        type="file"
                        ref={inputOpenImageRef}
                        onChange={handleUploadImage}
                    />

                </nav>
                <div id="no-mobile">
                    <span>화면이 너무 큽니다.</span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Chatroom;