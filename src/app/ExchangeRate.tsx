'use client';
import { ExchangeProps, ExRate } from './types';
import styles from './exchangeRate.module.css';
import React, { useEffect, useState } from 'react';
const ExchangeRate: React.FC<ExchangeProps> = ({ data }) => {
    const [nation, setNation] = useState<ExRate | undefined>(
        data.find((it) => it.cur_unit === 'USD')
    );
    const [amount, setAmount] = useState(0);
    const [gAmount, setGAmount] = useState(0);
    const handleChange = (event: any) => {
        setNation(data.find((it) => it.cur_unit === event.target.value));
    };
    const strToNum = (s: string) => {
        return parseFloat(s.replace(',', ''));
    };
    const rate = strToNum(nation ? nation.deal_bas_r : '0');
    const handleAmountChange = (event: any) => {
        const newAmount = event.target.value;
        setAmount(newAmount);
        setGAmount(Number((newAmount / rate).toFixed(1)));
    };

    const handleGAmountChange = (event: any) => {
        const newGAmount = event.target.value;
        setGAmount(newGAmount);
        setAmount(Number((newGAmount * rate).toFixed(1)));
    };
    console.log('he');
    return (
        <div className={styles.exchange}>
            <select
                value={nation?.cur_unit}
                onChange={handleChange}
            >
                {data.map((it: ExRate, idx: number) => (
                    <option
                        key={idx}
                        value={it.cur_unit}
                    >
                        {it.cur_nm}
                    </option>
                ))}
            </select>
            <br />
            <input
                value={amount || ''}
                type="number"
                // onChange={(e) => setAmount(Number(e.target.value))}
                onChange={handleAmountChange}
            />
            <p>환율 : {nation?.deal_bas_r}</p>
            <p>
                {amount ? (amount / rate).toFixed(1) : ''}
                {nation?.cur_unit}
            </p>
            <input
                value={gAmount || ''}
                type="number"
                // onChange={(e) => setGAmount(Number(e.target.value))}
                onChange={handleGAmountChange}
            />
            <p>USD</p>
        </div>
    );
};
export default ExchangeRate;
