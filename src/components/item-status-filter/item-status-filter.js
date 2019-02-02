import React from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component{

    render(){
        return (<div className="btn-group">
            <button className="btn btn-info" type='button'>All</button>
            <button className="btn btn-outline-secondary" type='button'>Active</button>
            <button className="btn btn-outline-secondary" type='button'>Done</button>
        </div>);
    }
}