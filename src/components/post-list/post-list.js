import React from 'react';
// import PostListItem from '../post-list-item';
// import Pli from '../pli';
import PostListItem from '../post-list-item';

let PostList = () => {
    return (
        <ul className="app-list list-group">
            <PostListItem />
            <PostListItem />
            <PostListItem />
        </ul>
    )
}

export default PostList;