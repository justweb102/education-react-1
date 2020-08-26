import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

let App = () => {
    return (
        <div>
            <h1>Hello!!</h1>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList />
            <PostAddForm />
        </div>
    )
}

export default App;