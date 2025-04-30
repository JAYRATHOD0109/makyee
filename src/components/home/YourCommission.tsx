import { useTranslations } from "next-intl";
import Image from "next/image";
import Container from "../common/Container";

const YourCommission: React.FC = () => {
  const t = useTranslations("HomePage");

  return (
    <>
      <Container className="pt-20 px-4 md:px-0 md:pt-30 relative overflow-hidden">
        <div className="pb-8">
          <span className="text-primary-red text-base/6 font-semibold pb-4 text-center block font-plus-jakarta-sans">
            {t("YOUR_COMMISSION")}
          </span>
          <h2 className="text-dark-gunmetal text-4xl md:text-5xl/15 font-bold pb-4 text-center block font-plus-jakarta-sans">
            <span>{t("THE_DIFFERENCES")}</span>
          </h2>
          <span className="text-black text-base/6 font-semibold text-center block font-plus-jakarta-sans">
            {t("WITH_OUR_MAKYEE_PRO")}
          </span>
        </div>
        <div className="flex justify-center items-center gap-8">
          <div className="max-w-75 w-full text-center">
            <span className="font-plus-jakarta-sans font-semibold text-base/6 text-black pb-4 block">
              {t("AVERAGE_BROKERAGE")}
            </span>
            <span className="font-plus-jakarta-sans font-semibold text-[40px]/14 text-dark-gunmetal block">
              50%
            </span>
          </div>
          <div className="max-w-75 w-full text-center">
            <span className="font-plus-jakarta-sans font-semibold text-base/6 text-black pb-4 block">
              {t("MAKYEE_PRO")}
            </span>
            <span className="font-plus-jakarta-sans font-semibold text-[64px]/14 text-primary-red block pb-10">
              80%
            </span>
            <p className="flex flex-col md:flex-row justify-center">
              <span className="font-plus-jakarta-sans font-bold text-[32px]/14 text-dark-gunmetal -mt-6">
                {t("UP_TO")}&nbsp;
              </span>
              <span className="font-plus-jakarta-sans font-bold inline-block text-5xl/14 text-dark-gunmetal">
                100%
              </span>
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <p className="text-lg/6.5 text-center mt-10 md:mt-16 font-instrument-sans text-[#131315] font-medium">
          We were featured in
        </p>
        <div className="py-3 md:py-4 my-6 md:my-8 relative overflow-hidden max-w-205 mx-auto">
          <div className="relative flex animate-slide-left">
            <div className="flex-shrink-0 gap-5 md:gap-10 flex mx-5 justify-around space-x-6 w-[1440px]">
              <Image
                src="/asset/lovin-dubai.svg"
                alt="company_name"
                width={150}
                height={40}
              />
              <Image
                src="/asset/property-news.svg"
                alt="company_name"
                width={150}
                height={40}
              />
              <Image
                src="/asset/real-estate-today.svg"
                alt="company_name"
                width={150}
                height={40}
              />
              <Image
                src="/asset/uae-stories.svg"
                alt="company_name"
                width={150}
                height={40}
              />
              <Image
                src="/asset/bazaar.svg"
                alt="company_name"
                width={150}
                height={40}
              />
              <Image
                src="/asset/gulf-time.svg"
                alt="company_name"
                width={150}
                height={40}
              />
            </div>
            <div className="flex-shrink-0 gap-5 md:gap-10 flex mx-5 justify-around space-x-6 w-[1440px]">
              <Image
                src="/asset/lovin-dubai.svg"
                alt="company_name"
                width={150}
                height={40}
              />
              <Image
                src="/asset/property-news.svg"
                alt="company_name"
                width={150}
                height={40}
              />
              <Image
                src="/asset/real-estate-today.svg"
                alt="company_name"
                width={150}
                height={40}
              />
              <Image
                src="/asset/uae-stories.svg"
                alt="company_name"
                width={150}
                height={40}
              />
              <Image
                src="/asset/bazaar.svg"
                alt="company_name"
                width={150}
                height={40}
              />
              <Image
                src="/asset/gulf-time.svg"
                alt="company_name"
                width={150}
                height={40}
              />
            </div>
            <div className="flex-shrink-0 gap-5 md:gap-10 flex mx-5 justify-around space-x-6 w-[1440px]">
              <Image
                src="/asset/lovin-dubai.svg"
                alt="company_name"
                width={150}
                height={40}
              />
              <Image
                src="/asset/property-news.svg"
                alt="company_name"
                width={150}
                height={40}
              />
              <Image
                src="/asset/real-estate-today.svg"
                alt="company_name"
                width={150}
                height={40}
              />
              <Image
                src="/asset/uae-stories.svg"
                alt="company_name"
                width={150}
                height={40}
              />
              <Image
                src="/asset/bazaar.svg"
                alt="company_name"
                width={150}
                height={40}
              />
              <Image
                src="/asset/gulf-time.svg"
                alt="company_name"
                width={150}
                height={40}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default YourCommission;
