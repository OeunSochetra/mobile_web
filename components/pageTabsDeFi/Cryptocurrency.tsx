import React from "react";
import Image from "next/image";
import CryptoMoney from "../shared/money/CryptoMoney";
import Money from "../shared/money/Money";
import { faker } from "@faker-js/faker";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const Cryptocurrency = () => {
  const randomMoney = faker.finance.amount();

  const SlideImage = [
    {
      src: "/assets/swiper/p1.jpg",
      alt: "p1",
    },
    {
      src: "/assets/swiper/p2.png",
      alt: "p2",
    },
    {
      src: "/assets/swiper/p3.jpg",
      alt: "p3",
    },
    {
      src: "/assets/swiper/p4.jpg",
      alt: "p4",
    },
  ];

  return (
    <div className="flex flex-col gap-5 w-full">
      <Swiper
        slidesPerView={4}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          340: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
      >
        {SlideImage.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              className="rounded-lg"
              width={500}
              height={500}
              src={slide.src}
              alt={slide.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* icon one */}
      <div className="flex items-center justify-between gap-4 ">
        <div className="flex items-center justify-around gap-4 ">
          <Image
            src="/assets/cryptocurrency/bitcoin.png"
            width={40}
            height={40}
            alt="Bitcoin Logo"
            className=" object-contain"
          />
          <CryptoMoney
            CryptocurrencyName="Bitcoin "
            firstMoney={randomMoney}
            lastMOney={randomMoney}
          />
        </div>
        <div>
          <Money
            sizeMain="medium"
            sizeLast="small"
            mainMoney={randomMoney}
            lastMoney="23.34"
            plusMoney={randomMoney}
          ></Money>
        </div>
      </div>
      {/* icon two */}
      <div className="flex items-center justify-between gap-4 ">
        <div className="flex items-center justify-around gap-4">
          <Image
            src="/assets/cryptocurrency/ethereum.png"
            width={40}
            height={40}
            alt="Bitcoin Logo"
            className=" object-contain"
          />
          <CryptoMoney
            CryptocurrencyName="Ethereum "
            firstMoney={randomMoney}
            lastMOney={randomMoney}
          />
        </div>
        <div>
          <Money
            sizeMain="medium"
            sizeLast="small"
            mainMoney={randomMoney}
            lastMoney="98"
            plusMoney={randomMoney}
          ></Money>
        </div>
      </div>
      {/* icon tree */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center justify-around gap-4 ">
          <Image
            src="/assets/cryptocurrency/tether.png"
            width={40}
            height={40}
            alt="Bitcoin Logo"
            className=" object-contain"
          />
          <CryptoMoney
            CryptocurrencyName="Tether "
            firstMoney={randomMoney}
            lastMOney={randomMoney}
          />
        </div>
        <div>
          <Money
            sizeMain="medium"
            sizeLast="small"
            mainMoney={randomMoney}
            lastMoney="12.20"
            plusMoney={randomMoney}
          ></Money>
        </div>
      </div>
    </div>
  );
};

export default Cryptocurrency;
