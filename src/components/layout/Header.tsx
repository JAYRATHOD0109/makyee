"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Container from "../common/Container";

const Header: React.FC = () => {
  const t = useTranslations("Header");

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors ${
        scrolled ? "backdrop-blur-sm bg-white/30" : "bg-white"
      }`}
    >
      <nav>
        <Container className="py-8 px-4 md:px-15 md:py-4 flex justify-between items-center">
          <Link href="#">
            <Image src="/asset/logo.svg" width={97} height={24} alt="logo" />
          </Link>
          <div className="hidden md:block">
            <Link href="#" className="pr-5">
              <span className="font-instrument-sans text-primary-black text-[17px] leading-6.5 font-semibold">
                {t("LIST_1")}
              </span>
            </Link>
            <Link href="#" className="px-5">
              <span className="font-instrument-sans text-primary-black text-[17px] leading-6.5 font-semibold">
                {t("LIST_2")}
              </span>
            </Link>
            <Link href="#" className="pl-5">
              <span className="font-instrument-sans text-primary-black text-[17px] leading-6.5 font-semibold">
                {t("LIST_3")}
              </span>
            </Link>
          </div>
          <button className="bg-primary-red py-2 px-5.5 rounded-xl hidden md:block">
            <span className="text-[17px] leading-6.5 text-white font-instrument-sans font-semibold">
              {t("BUTTON_TEXT")}
            </span>
          </button>
          <div className="md:hidden">
            <Image
              src="/asset/mobile-menu.svg"
              width={24}
              height={24}
              alt="logo"
            />
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
