import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';
import Spinner from '../Spinner/Spinner';

const Coins = () => {
    const [coins, setCoin] = useState([]);
    const [spinner, setSpinner] = useState(false)
    useEffect(() => {
        setSpinner(true)
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => setCoin(data))
        setSpinner(false)
    }, [])
    return (
        <>{spinner ? <Spinner /> :
            <div>
                <div className='px-4 pt-10 mx-auto max-w-7xl md:px-2'>
                    <p className="text-center font-bold text-3xl">Available Coins</p><hr />
                    <p className="text-center font-bold text-xl">Coins</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center mt-5'>
                        {
                            coins.map(coin => <CoinCard key={coin.id} coin={coin}></CoinCard>)
                        }
                    </div>


                </div>


            </div>}</>
    );
};

export default Coins;