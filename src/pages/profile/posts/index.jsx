import React from 'react'
import PropTypes, { array, object } from 'prop-types'
import Post from '~/components/post'


export default function MyPosts({ post }) {

    return (
        <>
            {post.map((p) => <Post post={p} />)}
        </>
    )
}
MyPosts.propTypes = {
    post: PropTypes.array,
}
