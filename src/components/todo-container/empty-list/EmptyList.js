import React from 'react';
import "./empty-list.scss";

export default function EmptyList() {
    return (
        <div className="empty-list">
            <i className="fas fa-exclamation-triangle"></i>
            <p>
                The list is empty now!!
            </p>
        </div>
    )
}
