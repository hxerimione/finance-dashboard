import React, { useEffect, useState } from 'react';
import { fetchRSS } from '../../../lib/api';

const RssFeed = async () => {
    const feed: any = await fetchRSS();
    return (
        <div>
            <h1>News Feed</h1>
            {feed ? (
                <ul>
                    {feed.item.map((item: any, index: number) => (
                        <li key={index}>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                'Loading...'
            )}
        </div>
    );
};

export default RssFeed;
