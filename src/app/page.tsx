// import axios from 'axios';
import styles from './page.module.css';

import { fetchData } from '../../lib/api';
import ExchangeRate from './ExchangeRate';
const dummydata = [
    {
        result: 1,
        cur_unit: 'AED',
        ttb: '371.05',
        tts: '378.54',
        deal_bas_r: '374.8',
        bkpr: '374',
        yy_efee_r: '0',
        ten_dd_efee_r: '0',
        kftc_bkpr: '374',
        kftc_deal_bas_r: '374.8',
        cur_nm: '아랍에미리트 디르함',
    },
    {
        result: 1,
        cur_unit: 'AUD',
        ttb: '889.1',
        tts: '907.07',
        deal_bas_r: '898.09',
        bkpr: '898',
        yy_efee_r: '0',
        ten_dd_efee_r: '0',
        kftc_bkpr: '898',
        kftc_deal_bas_r: '898.09',
        cur_nm: '호주 달러',
    },
    {
        result: 1,
        cur_unit: 'BHD',
        ttb: '3,615.04',
        tts: '3,688.07',
        deal_bas_r: '3,651.56',
        bkpr: '3,651',
        yy_efee_r: '0',
        ten_dd_efee_r: '0',
        kftc_bkpr: '3,651',
        kftc_deal_bas_r: '3,651.56',
        cur_nm: '바레인 디나르',
    },
    {
        result: 1,
        cur_unit: 'BND',
        ttb: '1,002.96',
        tts: '1,023.23',
        deal_bas_r: '1,013.1',
        bkpr: '1,013',
        yy_efee_r: '0',
        ten_dd_efee_r: '0',
        kftc_bkpr: '1,013',
        kftc_deal_bas_r: '1,013.1',
        cur_nm: '브루나이 달러',
    },
    {
        result: 1,
        cur_unit: 'CAD',
        ttb: '997.93',
        tts: '1,018.1',
        deal_bas_r: '1,008.02',
        bkpr: '1,008',
        yy_efee_r: '0',
        ten_dd_efee_r: '0',
        kftc_bkpr: '1,008',
        kftc_deal_bas_r: '1,008.02',
        cur_nm: '캐나다 달러',
    },
    {
        result: 1,
        cur_unit: 'CHF',
        ttb: '1,493.68',
        tts: '1,523.85',
        deal_bas_r: '1,508.77',
        bkpr: '1,508',
        yy_efee_r: '0',
        ten_dd_efee_r: '0',
        kftc_bkpr: '1,508',
        kftc_deal_bas_r: '1,508.77',
        cur_nm: '스위스 프랑',
    },
    {
        result: 1,
        cur_unit: 'CNH',
        ttb: '187.61',
        tts: '191.4',
        deal_bas_r: '189.51',
        bkpr: '189',
        yy_efee_r: '0',
        ten_dd_efee_r: '0',
        kftc_bkpr: '189',
        kftc_deal_bas_r: '189.51',
        cur_nm: '위안화',
    },
    {
        result: 1,
        cur_unit: 'DKK',
        ttb: '196.06',
        tts: '200.03',
        deal_bas_r: '198.05',
        bkpr: '198',
        yy_efee_r: '0',
        ten_dd_efee_r: '0',
        kftc_bkpr: '198',
        kftc_deal_bas_r: '198.05',
        cur_nm: '덴마아크 크로네',
    },
    {
        result: 1,
        cur_unit: 'EUR',
        ttb: '1,462.31',
        tts: '1,491.86',
        deal_bas_r: '1,477.09',
        bkpr: '1,477',
        yy_efee_r: '0',
        ten_dd_efee_r: '0',
        kftc_bkpr: '1,477',
        kftc_deal_bas_r: '1,477.09',
        cur_nm: '유로',
    },
    {
        result: 1,
        cur_unit: 'GBP',
        ttb: '1,705.1',
        tts: '1,739.55',
        deal_bas_r: '1,722.33',
        bkpr: '1,722',
        yy_efee_r: '0',
        ten_dd_efee_r: '0',
        kftc_bkpr: '1,722',
        kftc_deal_bas_r: '1,722.33',
        cur_nm: '영국 파운드',
    },
    {
        result: 1,
        cur_unit: 'HKD',
        ttb: '174.11',
        tts: '177.62',
        deal_bas_r: '175.87',
        bkpr: '175',
        yy_efee_r: '0',
        ten_dd_efee_r: '0',
        kftc_bkpr: '175',
        kftc_deal_bas_r: '175.87',
        cur_nm: '홍콩 달러',
    },
    {
        result: 1,
        cur_unit: 'IDR(100)',
        ttb: '8.41',
        tts: '8.58',
        deal_bas_r: '8.5',
        bkpr: '8',
        yy_efee_r: '0',
        ten_dd_efee_r: '0',
        kftc_bkpr: '8',
        kftc_deal_bas_r: '8.5',
        cur_nm: '인도네시아 루피아',
    },
    {
        result: 1,
        cur_unit: 'JPY(100)',
        ttb: '875.94',
        tts: '893.63',
        deal_bas_r: '884.79',
        bkpr: '884',
        yy_efee_r: '0',
        ten_dd_efee_r: '0',
        kftc_bkpr: '884',
        kftc_deal_bas_r: '884.79',
        cur_nm: '일본 옌',
    },
    {
        result: 1,
        cur_unit: 'KRW',
        ttb: '0',
        tts: '0',
        deal_bas_r: '1',
        bkpr: '1',
        yy_efee_r: '0',
        ten_dd_efee_r: '0',
        kftc_bkpr: '1',
        kftc_deal_bas_r: '1',
        cur_nm: '한국 원',
    },
    {
        result: 1,
        cur_unit: 'KWD',
        ttb: '4,427.95',
        tts: '4,517.4',
        deal_bas_r: '4,472.68',
        bkpr: '4,472',
        yy_efee_r: '0',
        ten_dd_efee_r: '0',
        kftc_bkpr: '4,472',
        kftc_deal_bas_r: '4,472.68',
        cur_nm: '쿠웨이트 디나르',
    },
    {
        result: 1,
        cur_unit: 'MYR',
        ttb: '285.25',
        tts: '291.02',
        deal_bas_r: '288.14',
        bkpr: '288',
        yy_efee_r: '0',
        ten_dd_efee_r: '0',
        kftc_bkpr: '288',
        kftc_deal_bas_r: '288.14',
        cur_nm: '말레이지아 링기트',
    },
    {
        result: 1,
        cur_unit: 'NOK',
        ttb: '124.32',
        tts: '126.83',
        deal_bas_r: '125.58',
        bkpr: '125',
        yy_efee_r: '0',
        ten_dd_efee_r: '0',
        kftc_bkpr: '125',
        kftc_deal_bas_r: '125.58',
        cur_nm: '노르웨이 크로네',
    },
    {
        result: 1,
        cur_unit: 'NZD',
        ttb: '811.97',
        tts: '828.38',
        deal_bas_r: '820.18',
        bkpr: '820',
        yy_efee_r: '0',
        ten_dd_efee_r: '0',
        kftc_bkpr: '820',
        kftc_deal_bas_r: '820.18',
        cur_nm: '뉴질랜드 달러',
    },
    {
        result: 1,
        cur_unit: 'SAR',
        ttb: '363.35',
        tts: '370.7',
        deal_bas_r: '367.03',
        bkpr: '367',
        yy_efee_r: '0',
        ten_dd_efee_r: '0',
        kftc_bkpr: '367',
        kftc_deal_bas_r: '367.03',
        cur_nm: '사우디 리얄',
    },
    {
        result: 1,
        cur_unit: 'SEK',
        ttb: '125.2',
        tts: '127.73',
        deal_bas_r: '126.47',
        bkpr: '126',
        yy_efee_r: '0',
        ten_dd_efee_r: '0',
        kftc_bkpr: '126',
        kftc_deal_bas_r: '126.47',
        cur_nm: '스웨덴 크로나',
    },
    {
        result: 1,
        cur_unit: 'SGD',
        ttb: '1,002.96',
        tts: '1,023.23',
        deal_bas_r: '1,013.1',
        bkpr: '1,013',
        yy_efee_r: '0',
        ten_dd_efee_r: '0',
        kftc_bkpr: '1,013',
        kftc_deal_bas_r: '1,013.1',
        cur_nm: '싱가포르 달러',
    },
    {
        result: 1,
        cur_unit: 'THB',
        ttb: '36.81',
        tts: '37.56',
        deal_bas_r: '37.19',
        bkpr: '37',
        yy_efee_r: '0',
        ten_dd_efee_r: '0',
        kftc_bkpr: '37',
        kftc_deal_bas_r: '37.19',
        cur_nm: '태국 바트',
    },
    {
        result: 1,
        cur_unit: 'USD',
        ttb: '1,362.83',
        tts: '1,390.36',
        deal_bas_r: '1,376.6',
        bkpr: '1,376',
        yy_efee_r: '0',
        ten_dd_efee_r: '0',
        kftc_bkpr: '1,376',
        kftc_deal_bas_r: '1,376.6',
        cur_nm: '미국 달러',
    },
];
const Home = async () => {
    // const data = await fetchData();
    const data = dummydata;

    return (
        <main>
            <h1 className={styles.title}>금융 대시보드</h1>
            <div className={styles.wrapper}>
                <section className={styles.board_left}>
                    <ExchangeRate data={dummydata} />
                    <div>여긴 뭐하지</div>
                </section>
                <section className={styles.board_center}>
                    <div>뉴스 기사 하나</div>
                </section>
                <section className={styles.board_right}>
                    <div>경제 기사 목록</div>
                    <div></div>
                </section>
            </div>
        </main>
    );
};
export default Home;
