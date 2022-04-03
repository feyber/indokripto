import styles from "../styles/Searchbar.module.css";
import TextyAnim from "rc-texty";

const Searchbar = ({ ...rest }) => {
  return (
    <>
      <div className="w-full flex mx-auto justify-center items-center">
        <div className="flex mx-auto flex-row w-full mb-6 md:mb-12 items-center justify-center md:justify-between">
          <TextyAnim className="hidden md:block text-lg mb-5 md:mb-0 md:text-xl lg:text-3xl font-bold text-white  text-center">
            Top 50 Harga Kripto Hari ini
          </TextyAnim>
          <h1 className="md:hidden text-xl mr-2 font-bold text-white text-center flex items-center justify-center">
            Top 50 Kripto
          </h1>
          <div className="flex w-28 text-center md:w-80 border-0 md:px-3">
            <input className={styles.coin__input} {...rest} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
