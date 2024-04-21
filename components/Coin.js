import React, { useState } from 'react';
import './crypto.css'

function Coin() {
  const [isLoading, setIsLoading] = useState(false);
  const [bitcoinData, setBitcoinData] = useState(null);
  const [ethereumData, setEthereumData] = useState(null);
  const [litecoinData, setLitecoinData] = useState(null);
  const [bnbData, setBnbData] = useState(null);
  const [rippleData, setRippleData] = useState(null);
  const [cardanoData, setCardanoData] = useState(null);
  const [solanaData, setSolanaData] = useState(null);
  const [polkadotData, setPolkadotData] = useState(null);
  const [dogecoinData, setDogecoinData] = useState(null);
  const [avalancheData, setAvalancheData] = useState(null);



  const coinsView2 = () => {
    setIsLoading(true);
    fetch('/cryptos2')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
     
        const cryptoSetters = {
          'bitcoin': setBitcoinData,
          'ethereum': setEthereumData,
          'bnb':setBnbData,
          'ripple':setRippleData,
          'cardano':setCardanoData,
          'solana':setSolanaData,
          'polkadot':setPolkadotData,
          'dogecoin':setDogecoinData,
          'avalanche':setAvalancheData,
          'litecoin': setLitecoinData,
        };

    
        Object.entries(cryptoSetters).forEach(([id, setter]) => {
          const cryptoInfo = data.find(crypto => crypto.id === id);
          if (cryptoInfo) 
                setter(cryptoInfo);
                setIsLoading(false);
        });

      })
      .catch(error => {
        console.error('Error fetching data:', error);
        
      });
  };

 
  function debounce(func, wait) {
    
    let timeout;
    return function(...args) {
      const later = () => {
        clearTimeout(timeout);
        func.apply(this, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  

 
  const debouncedCoinsView2 = debounce(coinsView2, 1000);

  return (
    <div className="app-container">
       

      <div className="crypto-checker">
        <h1><button onClick={debouncedCoinsView2} className="check-button">{isLoading ? 'Cargando...' : 'Check Cryptocoins'}</button></h1>
        <div className="crypto-data">
          {bitcoinData && (
            <div className="crypto-card">
              <h2>Bitcoin (BTC)</h2>
              <img src={bitcoinData.image.small} className="crypto-image"/>
              <p>Actual Price (USD): ${bitcoinData.market_data.current_price.usd}</p>
              <p>Maximum Transaction 24 hrs (USD): ${bitcoinData.market_data.high_24h.usd}</p>
              <p>Maximum Transaction 24 hrs (USD): ${bitcoinData.market_data.low_24h.usd}</p>
              <p>Change Percentage 24 hrs (USD): ${bitcoinData.market_data.price_change_percentage_24h }</p>
              <p>Exchange For Many 24 hrs (USD): ${bitcoinData.market_data.total_volume.usd}</p>
              <p>Global Market Ranking (USD): ${bitcoinData.market_cap_rank}</p>
              <p>Genesis Coin Year (USD): ${bitcoinData.genesis_date}</p>
            </div>
          )}
          {ethereumData && (
            <div className="crypto-card">
              <h2>Ethereum (ETH)</h2>
              <img src={ethereumData.image.small} className="crypto-image"/>
              <p>Actual Price (USD): ${ethereumData.market_data.current_price.usd}</p>
              <p>Maximum Transaction 24 hrs (USD): ${ethereumData.market_data.high_24h.usd}</p>
              <p>Minimum Transaction 24 hrs (USD): ${ethereumData.market_data.low_24h.usd}</p>
              <p>Change Percentage 24 hrs (USD): ${ethereumData.market_data.price_change_percentage_24h }</p>
              <p>Exchange For Many 24 hrs (USD): ${ethereumData.market_data.total_volume.usd}</p>
              <p>Global Market Ranking {ethereumData.market_cap_rank}</p>
              <p>Genesis Coin Year (USD): ${ethereumData.genesis_date}</p>
            </div>
          )}
          
          {bnbData && (
            <div className="crypto-card">
              <h2>Bnb (LTC)</h2>
<img src={bnb.image.small} className="crypto-image"/>
              <p>Actual Price (USD): ${bnbData.market_data.current_price.usd}</p>
              <p>Maximum Transaction 24 hrs (USD): ${bnbData.market_data.high_24h.usd}</p>
              <p>Minimum Transaction 24 hrs (USD): ${bnbData.market_data.low_24h.usd}</p>
              <p>Change Percentage 24 hrs (USD): ${bnbData.market_data.price_change_percentage_24h }</p>
              <p>Exchange For Many 24 hrs (USD): ${bnbData.market_data.total_volume.usd}</p>
              <p>Global Market Ranking {bnbData.market_cap_rank}</p>
              <p>Genesis Coin Year (USD): ${bnbData.genesis_date}</p>
            </div>
          )}
          {rippleData && (
            <div className="crypto-card">
              <h2>Ripple (LTC)</h2>
<img src={rippleData.image.small} className="crypto-image"/>
              <p>Actual Price (USD): ${rippleData.market_data.current_price.usd}</p>
              <p>Maximum Transaction 24 hrs (USD): ${rippleData.market_data.high_24h.usd}</p>
              <p>Minimum Transaction 24 hrs (USD): ${rippleData.market_data.low_24h.usd}</p>
              <p>Change Percentage 24 hrs (USD): ${rippleData.market_data.price_change_percentage_24h }</p>
              <p>Exchange For Many 24 hrs (USD): ${rippleData.market_data.total_volume.usd}</p>
              <p>Global Market Ranking {rippleData.market_cap_rank}</p>
              <p>Genesis Coin Year (USD): ${rippleData.genesis_date}</p>
            </div>
          )}
          {cardanoData && (
            <div className="crypto-card">
              <h2>Cardano (LTC)</h2>
<img src={cardanoData.image.small} className="crypto-image"/>
              <p>Actual Price (USD): ${cardanoData.market_data.current_price.usd}</p>
              <p>Maximum Transaction 24 hrs (USD): ${cardanoData.market_data.high_24h.usd}</p>
              <p>Minimum Transaction 24 hrs (USD): ${cardanoData.market_data.low_24h.usd}</p>
              <p>Change Percentage 24 hrs (USD): ${cardanoData.market_data.price_change_percentage_24h }</p>
              <p>Exchange For Many 24 hrs (USD): ${cardanoData.market_data.total_volume.usd}</p>
              <p>Global Market Ranking {cardanoData.market_cap_rank}</p>
              <p>Genesis Coin Year (USD): ${cardanoData.genesis_date}</p>
            </div>
          )}
          {solanaData && (
            <div className="crypto-card">
              <h2>Solana (LTC)</h2>
<img src={solanaData.image.small} className="crypto-image"/>
              <p>Actual Price (USD): ${solanaData.market_data.current_price.usd}</p>
              <p>Maximum Transaction 24 hrs (USD): ${solanaData.market_data.high_24h.usd}</p>
              <p>Minimum Transaction 24 hrs (USD): ${solanaData.market_data.low_24h.usd}</p>
              <p>Change Percentage 24 hrs (USD): ${solanaData.market_data.price_change_percentage_24h }</p>
              <p>Exchange For Many 24 hrs (USD): ${solanaData.market_data.total_volume.usd}</p>
              <p>Global Market Ranking {solanaData.market_cap_rank}</p>
              <p>Genesis Coin Year (USD): ${solanaData.genesis_date}</p>
            </div>
          )}
          {polkadotData && (
            <div className="crypto-card">
              <h2>Polkadot (LTC)</h2>
<img src={polkadotData.image.small} className="crypto-image"/>
              <p>Actual Price (USD): ${polkadotData.market_data.current_price.usd}</p>
              <p>Maximum Transaction 24 hrs (USD): ${polkadotData.market_data.high_24h.usd}</p>
              <p>Minimum Transaction 24 hrs (USD): ${polkadotData.market_data.low_24h.usd}</p>
              <p>Change Percentage 24 hrs (USD): ${polkadotData.market_data.price_change_percentage_24h }</p>
              <p>Exchange For Many 24 hrs (USD): ${polkadotData.market_data.total_volume.usd}</p>
              <p>Global Market Ranking {polkadotData.market_cap_rank}</p>
              <p>Genesis Coin Year (USD): ${polkadotData.genesis_date}</p>
            </div>
          )}
          {dogecoinData && (
            <div className="crypto-card">
              <h2>Dogecoin (LTC)</h2>
<img src={dogecoinData.image.small} className="crypto-image"/>
              <p>Actual Price (USD): ${dogecoinData.market_data.current_price.usd}</p>
              <p>Maximum Transaction 24 hrs (USD): ${dogecoinData.market_data.high_24h.usd}</p>
              <p>Minimum Transaction 24 hrs (USD): ${dogecoinData.market_data.low_24h.usd}</p>
              <p>Change Percentage 24 hrs (USD): ${dogecoinData.market_data.price_change_percentage_24h }</p>
              <p>Exchange For Many 24 hrs (USD): ${dogecoinData.market_data.total_volume.usd}</p>
              <p>Global Market Ranking {dogecoinData.market_cap_rank}</p>
              <p>Genesis Coin Year (USD): ${dogecoinData.genesis_date}</p>
            </div>
          )}
          {avalancheData && (
            <div className="crypto-card">
              <h2>Avalanche (LTC)</h2>
<img src={avalancheData.image.small} className="crypto-image"/>
              <p>Actual Price (USD): ${avalancheData.market_data.current_price.usd}</p>
              <p>Maximum Transaction 24 hrs (USD): ${avalancheData.market_data.high_24h.usd}</p>
              <p>Minimum Transaction 24 hrs (USD): ${avalancheData.market_data.low_24h.usd}</p>
              <p>Change Percentage 24 hrs (USD): ${avalancheData.market_data.price_change_percentage_24h }</p>
              <p>Exchange For Many 24 hrs (USD): ${avalancheData.market_data.total_volume.usd}</p>
              <p>Global Market Ranking {avalancheData.market_cap_rank}</p>
              <p>Genesis Coin Year (USD): ${avalancheData.genesis_date}</p>
            </div>
          )}
          {litecoinData && (
            <div className="crypto-card">
              <h2>Litecoin (LTC)</h2>
<img src={litecoinData.image.small} className="crypto-image"/>
              <p>Actual Price (USD): ${litecoinData.market_data.current_price.usd}</p>
              <p>Maximum Transaction 24 hrs (USD): ${litecoinData.market_data.high_24h.usd}</p>
              <p>Minimum Transaction 24 hrs (USD): ${litecoinData.market_data.low_24h.usd}</p>
              <p>Change Percentage 24 hrs (USD): ${litecoinData.market_data.price_change_percentage_24h }</p>
              <p>Exchange For Many 24 hrs(USD): ${litecoinData.market_data.total_volume.usd}</p>
              <p>Global Market Ranking  {litecoinData.market_cap_rank}</p>
              <p>Genesis Coin Year {litecoinData.genesis_date}</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default Coin;


