import Image from "next/image";
import Link from "next/link";
import Container from "../common/Container";
import { useTranslations } from "next-intl";

const Footer: React.FC = () => {
  const t = useTranslations("Footer");

  return (
    <Container
      backgroundClassName="bg-[#fafafa]"
      className="pt-15 pb-18 md:pt-20 md:pb-10"
    >
      <Image
        src="/asset/logo-big.svg"
        width={198}
        height={44}
        alt="logo"
        className="mx-auto"
      />
      <p className="max-w-67.5 mx-auto mt-6 mb-7.5 text-center">
        <span className="text-black text-lg/7.5 font-semibold font-inter">
          {t("BUY_SELL")}
        </span>
      </p>
      <p className="bg-[#18181A] py-4 px-5 w-fit flex items-center gap-1.5 rounded-xl mx-auto mb-5 md:mb-15">
        <span>
          <Image src="/asset/mail.svg" width={24} height={26} alt="mail" />
        </span>
        <span className="text-[17px] font-medium font-instrument-sans leading-6.5 text-white">
          hello@makyee.com
        </span>
      </p>
      <div className="flex items-center justify-center pb-5 md:pb-0">
        <span className="text-[#94969D] text-[13px]/4.5 md:text-lg/7 font-medium mr-3.5 md:mr-4.5 hidden md:block">
          {t("ITEM_1")}
        </span>
        <div className="size-0.5 md:size-1 bg-[#28282C] rounded-full mr-3.5 md:mr-5 hidden md:block" />
        <span className="text-[#94969D] text-[13px]/4.5 md:text-lg/7 font-medium mr-4.5">
          {t("ITEM_2")}
        </span>
        <div className="size-0.5 md:size-1 bg-[#28282C] rounded-full mr-3.5 md:mr-5" />
        <span className="text-[#94969D] text-[13px]/4.5 md:text-lg/7 font-medium mr-4.5">
          {t("ITEM_3")}
        </span>
        <div className="size-0.5 md:size-1 bg-[#28282C] rounded-full mr-3.5 md:mr-5" />
        <span className="text-[#94969D] text-[13px]/4.5 md:text-lg/7 font-medium mr-4.5">
          {t("ITEM_4")}
        </span>
        <div className="size-0.5 md:size-1 bg-[#28282C] rounded-full mr-3.5 md:mr-5" />
        <span className="text-[#94969D] text-[13px]/4.5 md:text-lg/7 font-medium">
          {t("ITEM_5")}
        </span>
      </div>
      <hr className="text-[#1D1D20] mt-15 mb-10 h-px hidden md:block" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <span className="text-[#94969D] text-lg/7 font-medium md:block hidden">
          {t("DESIGN_BY")}
        </span>
        <div className="flex gap-2.5">
          <div className="size-11 flex justify-center items-center bg-[#18181A] rounded-xl">
            <Link href="#">
              <Image
                src="/asset/linkdeln.svg"
                width={24}
                height={24}
                alt="linkdeln"
              />
            </Link>
          </div>
          <div className="size-11 flex justify-center items-center bg-[#18181A] rounded-xl">
            <Link href="#">
              <Image
                src="/asset/twitter.svg"
                width={24}
                height={24}
                alt="twitter"
              />
            </Link>
          </div>
          <div className="size-11 flex justify-center items-center bg-[#18181A] rounded-xl">
            <Link href="#">
              <Image
                src="/asset/instagram.svg"
                width={24}
                height={24}
                alt="instagram"
              />
            </Link>
          </div>
        </div>
        <span className="text-[#94969D] text-base/6 font-medium md:hidden block">
          © 2025 Makyee. All Rights Reserved.
        </span>
        <span className="text-[#94969D] text-lg/7 font-medium">
          {t("PRIVACY_POLICY")}
        </span>
      </div>
    </Container>
  );
};

export default Footer;
