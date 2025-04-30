"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Container from "../common/Container";

const RealEstateExperience = () => {
  const [startCount, setStartCount] = useState<boolean>(false);
  const [listed, setListed] = useState<number>(5993);
  const [users, setUsers] = useState<number>(3234);
  const [developers, setDevelopers] = useState<number>(43);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const t = useTranslations("HomePage");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (startCount) {
      const listedTarget = 5993;
      const usersTarget = 3234;
      const developersTarget = 43;

      const duration = 4000; // 2 seconds
      const frameRate = 30; // 30 frames per second
      const totalFrames = Math.round((duration / 1000) * frameRate);

      let frame = 0;

      const counter = setInterval(() => {
        frame++;

        setListed(() => {
          const progress = Math.min(frame / totalFrames, 1);
          return Math.floor(4490 + (listedTarget - 4490) * progress);
        });

        setUsers(() => {
          const progress = Math.min(frame / totalFrames, 1);
          return Math.floor(3077 + (usersTarget - 3068) * progress);
        });

        setDevelopers(() => {
          const progress = Math.min(frame / totalFrames, 1);
          return Math.floor(17 + (developersTarget - 17) * progress);
        });

        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, 1000 / frameRate);
    }
  }, [startCount]);

  return (
    <Container className="pt-20 px-4 pb-8 md:px-0 md:pt-7.5 md:pb-45.5">
      <div ref={containerRef}>
        <Image
          src="/asset/makyee-logo.svg"
          width={108}
          height={108}
          alt="logo"
          className="pb-4 md:pb-2 mx-auto"
        />
        <h2 className="font-inter font-bold text-[22px]/6.5 md:text-5xl/14 text-black text-center">
          <span>{t("ESTATE_EXPERIENCE")}</span>
        </h2>
        <div className="pt-12.5 md:pt-20 flex flex-col md:flex-row items-center justify-center">
          <div className="max-w-75 w-full text-center">
            <span className="font-inter font-bold text-5xl/14 text-black block pb-3">
              {listed.toLocaleString()}+
            </span>
            <span className="block font-instrument-sans font-medium text-lg/7 text-[#797B85]">
              {t("LISTED_PROPERTY")}
            </span>
          </div>
          <hr className="w-64 md:w-25 h-px bg-[#C9CACE] my-5 md:my-8 border-t-0 md:rotate-90" />
          <div className="max-w-75 w-full text-center">
            <span className="font-inter font-bold text-5xl/14 text-black block pb-3">
              {users.toLocaleString()}+
            </span>
            <span className="block font-instrument-sans font-medium text-lg/7 text-[#797B85]">
              {t("VERIFIED_USERS")}
            </span>
          </div>
          <hr className="w-64 md:w-25 h-px bg-[#C9CACE] my-5 md:my-8 border-t-0 md:rotate-90" />
          <div className="max-w-75 w-full text-center">
            <span className="font-inter font-bold text-5xl/14 text-black block pb-3">
              {developers.toLocaleString()}+
            </span>
            <span className="block font-instrument-sans font-medium text-lg/7 text-[#797B85]">
              {t("DEVELOPERS")}
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RealEstateExperience;
