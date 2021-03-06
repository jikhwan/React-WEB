import React, { useCallback, useState, useRef } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../reducers/post";
import PropTypes from 'prop-types'
import Link from "next/dist/client/link";

const PostCardContent = ({ postData }) => (
    <div>
        {postData.split(/(#[^\s#]+)/g).map((v, i) => {
          if(v.match(/(#[^\s#]+)/)) {
              return <Link href={`/hashtag/${v.slice(1)}`} key={i}><a>{v}</a></Link>
          }
          return v;
        })}
    </div>
)

PostCardContent.propTypes = { postData: PropTypes.string.isRequired }

export default PostCardContent