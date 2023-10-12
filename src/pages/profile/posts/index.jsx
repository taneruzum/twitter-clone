import React from 'react'
import PropTypes, { array, object } from 'prop-types'
import Post from '~/components/post'


export default function MyPosts({ post }) {

    return (
        <>
            {post.map((p,index) => <Post post={p} key={index} />)}
        </>
    )
}
MyPosts.propTypes = {
    post: PropTypes.array,
}
