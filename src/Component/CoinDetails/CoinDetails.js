import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState({})
    useEffect(() => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCoin(data))
    }, [id])
    return (
        <div className='px-4 h-[70vh] pt-20 pb-24 mx-auto mx-w-7xl md:pz-2'>
            <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 content-center'>
                <div className='order-1 md:order-2'>
                    <h1 className='text-3xl'>General Information:</h1><hr />
                    <h1 className=''>Coin Name : {coin.name}</h1>
                    <h5 className=''>Market Cap Rank:  {coin.market_cap_rank}</h5>
                    <h5 className=''>Origin:  {coin.country_origin ? coin.country_origin : 'Not Found'}</h5>
                    <h1 className='text-3xl'>Source</h1><hr />
                    <h5 className=''>Community Score:  {coin.community_score}</h5>
                    <h5 className=''>Developer Score:  {coin.developer_score}</h5>
                    <h5 className=''>Liquidity Score:  {coin.liquidity_score}</h5>

                </div>
                <div className='flex justify-center items-center order-2 md:order-1'>
                    <img src={coin.image?.large} alt="" />
                </div>

            </div>
        </div>
    );
};

export default CoinDetails;