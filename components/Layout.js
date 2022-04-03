import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const Layout = ({
  children,
  title = "Informasi Real Time Kripto di Indonesia",
}) => {
  return (
    <div className="layout bg-gray-100 w-full flex flex-col items-center justify-center md:p-12 p-3 -mb-20">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header flex items-start justify-start p-4">
        <Tilt>
          <Link href="/" passHref>
            <div className="cursor-pointer">
              <h2 className="hidden text-gray-50 text-3xl text-center md:mb-2 -mb-20 ">
                Informasi Kripto Dalam Rupiah
              </h2>
              <div className="">
                <a className="">
                  <Image
                    src="/bitcoin.png"
                    alt="logo bitcoin"
                    width="75"
                    height="75"
                  />
                  <Image
                    src="/ethereum.png"
                    alt="logo ethereum"
                    width="75"
                    height="75"
                  />
                  <Image
                    src="/tether.png"
                    alt="logo tether"
                    width="75"
                    height="75"
                  />
                  <Image
                    src="/litecoin.png"
                    alt="logo litecoin"
                    width="75"
                    height="75"
                  />
                </a>
              </div>
            </div>
          </Link>
        </Tilt>
      </header>
      <main className="flex flex-col w-full bg-gray-900 md:w-11/12 py-4 md:py-8 md:px-12 bg-opacity-80 rounded-2xl shadow-2xl m-2 justify-center items-center">
        {children}
      </main>
      <footer className="w-full p-8 flex flex-col items-center justify-center">
        <div>
          <p className="text-center md:text-lg text-xs">
            Copyright &copy; {new Date().getFullYear()}{" "}
            <a href="https://feyber.online" className="underline text-gray-800">
              Feyber
            </a>
          </p>
          <p className="text-center md:text-lg text-xs">
            Original Contributors:{" "}
            <a
              href="https://medium.com/geekculture/cryptocurrency-price-tracker-in-nextjs-b38789dcbd92"
              className="underline text-gray-800"
            >
              Nabendu Biswas
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
