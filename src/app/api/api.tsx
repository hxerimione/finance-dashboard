'use client';
import axios from 'axios';
import { useState } from 'react';
import { parseString } from 'xml2js';

const fetchRSS = async () => {
    const [feed, setFeed] = useState<any>(null);

    try {
        // Axios를 이용해 RSS 데이터를 불러옵니다.
        const response = await axios.get('https://www.mk.co.kr/rss/30100041/', {
            headers: {
                'Content-Type': 'application/xml; charset=utf-8',
            },
            responseType: 'text',
        });

        // xml2js를 사용하여 XML 데이터를 JS 객체로 파싱합니다.
        parseString(response.data, { explicitArray: false }, (err, result) => {
            if (err) {
                console.error('Error parsing XML:', err);
                return;
            }
            setFeed(result.rss.channel);
            console.log(feed);
        });
    } catch (error) {
        console.error('Error fetching RSS:', error);
    }
    return feed;
};

export default fetchRSS;
