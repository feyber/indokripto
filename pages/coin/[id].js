import styles from "../../styles/Coin.module.css";

const Coin = ({ coin }) => {
  return (
    <div className="bg-white w-full rounded-xl">
      <div className={styles.coin__page}>
        <div className="flex flex-col justify-center items-center">
          <img
            src={coin.image.large}
            alt={coin.name}
            className={styles.coin__image}
          />
          <h1 className={styles.coin__name}>
            Nama: <span className="font-bold text-xl">{coin.name}</span>
          </h1>
          <p className={styles.coin__ticker}>
            Simbol: <span className="font-bold text-xl">{coin.symbol}</span>
          </p>
          <p className="flex text-2xl font-bold tracking-wider">
            <p className=" mr-1">Rp.</p>
            {coin.market_data.current_price.idr.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
    `);
  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}
