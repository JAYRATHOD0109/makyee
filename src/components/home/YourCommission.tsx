import { useTranslations } from "next-intl";
import Container from "../common/Container";

const YourCommission: React.FC = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="relative">
      <div className="absolute -left-20 top-52 w-96 h-96 overflow-hidden opacity-90 -z-10">
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(252,231,243,1) 0%, rgba(252,231,243,0.5) 50%, rgba(255,255,255,0) 80%)",
          }}
        ></div>
      </div>
      <Container className="pt-20 md:pt-30">
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
    </div>
  );
};

export default YourCommission;
