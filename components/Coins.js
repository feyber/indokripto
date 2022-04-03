import Link from "next/link";

const Coins = ({
  name,
  id,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <>
      <div className="w-full mx-auto items-center justify-center  text-black bg-white transform md:hover:scale-100 md:hover:translate-x-5 duration-700  md:hover:bg-indigo-100 shadow-2xl mb-1 rounded hidden md:block">
        <Link href={`/coin/${id}`}>
          <a>
            <div className="w-11/12 md:grid md:grid-cols-7 md:-rows-2 items-center md:gap-1 md:p-4 p-8">
              <div className="flex mx-auto mb-4 md:mb-0">
                <img
                  src={image}
                  alt={name}
                  width="25"
                  height="25"
                  className="md:w-12 md:h-12"
                />
              </div>
              <h1>{name}</h1>
              <p>{symbol}</p>
              <div>
                <h1 className="-ml-8">Harga:</h1>
                <p className="md:-ml-8">
                  <span className="">Rp. </span>
                  {price.toLocaleString()}
                </p>
              </div>
              <p className="md:w-36 md:-ml-4 text-center">
                Naik/turun(%){volume.toLocaleString}
              </p>
              {priceChange < 0 ? (
                <p className="text-red-500" ml-2>
                  {priceChange.toFixed(2)} %
                </p>
              ) : (
                <p className="text-green-700">{priceChange.toFixed(2)} %</p>
              )}
              <div>
                <h1 className="-ml-5">Market Cap.</h1>
                <div>
                  <span className="-ml-5 mr-1">Rp.</span>
                  {marketcap.toLocaleString()}
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>

      {/* mobile */}
      <div className="md:hidden bg-white w-full mt-1 rounded flex items-center justify-center px-6 py-6">
        <Link href={`/coin/${id}`}>
          <div className="flex flex-col gap-2 px-2">
            <div className="flex items-center justify-center">
              <img
                src={image}
                alt={name}
                width="25"
                height="25"
                className="w-12 h-12"
              />
            </div>
            <div className="flex flex-col text-black text-lg items-center justify-center font-extrabold">
              <h1>{name}</h1>
              <p>{symbol}</p>
            </div>
            <div className="flex flex-col text-black text-lg">
              <h1 className="font-semibold">Harga:</h1>
              <p className="">
                <span className="">Rp. </span>
                {price.toLocaleString()}
              </p>
            </div>
            <div className="flex flex-col text-black text-lg">
              <p className="font-semibold">
                Pasar naik/turun:{volume.toLocaleString}
              </p>
              {priceChange < 0 ? (
                <p className="text-red-500" ml-2>
                  {priceChange.toFixed(2)} %
                </p>
              ) : (
                <p className="text-green-700">{priceChange.toFixed(2)} %</p>
              )}
            </div>
            <div className="flex flex-col text-black text-lg">
              <h1 className="">Market Cap.</h1>
              <div>
                <span className="">Rp.</span>
                {marketcap.toLocaleString()}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Coins;
