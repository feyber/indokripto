import CoinList from "../components/CoinList";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

export default function Home({ coinsData }) {
  const [search, setSearch] = useState("");

  const filteredCoins = coinsData.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div className="coin__app bg-transparent text-xs md:text-base">
      <SearchBar
        type="text"
        placeholder="Cari Koinmu"
        onChange={handleChange}
      />
      <CoinList coinsData={filteredCoins} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=50&page=1&sparkline=false"
  );

  const coinsData = await res.json();

  return {
    props: {
      coinsData,
    },
  };
};
