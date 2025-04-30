"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import Container from "../common/Container";

const Hero: React.FC = () => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const t = useTranslations("HomePage");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 },
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Container
        className="md:py-22.5 flex z-10 relative"
        backgroundClassName="mt-28 md:mt-0"
      >
        <div className="md:pt-40 md:pb-16 text-center md:text-start pl-3.5">
          <p className="py-1.5 md:py-2 px-3.5 border border-primary-red rounded-full w-fit mx-auto md:mx-0 mb-6">
            <span className="text-base/6 font-medium font-instrument-sans text-black">
              {t("TRUSTED_BY")}
            </span>
          </p>
          <h1 className="text-dark-gunmetal font-inter max-w-3xl rtl:max-w-2xl text-[44px]/11 px-6 md:px-0 md:text-[78px]/23 font-bold md:tracking-[-4px]">
            <span>{t("HERO_TITLE")}&nbsp;</span>
            <span className="text-primary-red">MAKYEE</span>
          </h1>
          <p className="text-dark-gunmetal font-inter text-[19px]/6 font-medium py-6">
            <span>{t("HERO_DESCRIPTION")}</span>
          </p>
          <div
            ref={buttonRef}
            className="flex flex-col items-center md:flex-row gap-5"
          >
            <div
              className={`transform transition-all duration-700 ease-out ${
                isVisible
                  ? "scale-100 opacity-100 translate-y-0"
                  : "scale-75 opacity-0 translate-y-1/2"
              }`}
            >
              <Image
                src="/asset/apple-store.svg"
                width={185}
                height={55}
                alt="apple store"
              />
            </div>
            <div
              className={`transform transition-all duration-700 ease-out ${
                isVisible
                  ? "scale-100 opacity-100 translate-y-0"
                  : "scale-75 opacity-0 translate-y-1/2"
              }`}
            >
              <Image
                src="/asset/google-play.svg"
                width={185}
                height={55}
                alt="google play"
              />
            </div>
          </div>
        </div>
        <Image
          src="/asset/hero.png"
          width={700}
          height={750}
          className="absolute hidden md:block ltr:-right-17.5 rtl:-left-17.5 -top-5 scale-x-95"
          quality={100}
          alt="hero-desktop-mobiles-screens"
        />
      </Container>
      <Image
        src="/asset/hero-mobile.png"
        className="mt-10 md:hidden"
        width={700}
        height={750}
        quality={100}
        alt="mobiles-screens"
      />
      <div className="bg-white w-full h-36 z-30 absolute -bottom-15 hidden md:block" />
    </div>
  );
};

export default Hero;
