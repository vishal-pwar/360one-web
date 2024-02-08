import { Link } from "@/ui";
import Image from "next/image";
import FormComponent from "./form-component";

type CountryCodeModel = { flag: string; name: string; code: string };

type FieldConfigModel = {
  fullName: boolean;
  email: boolean;
  mobileNumber: boolean;
  city: boolean;
  jobTitle: boolean;
  companyOrg: boolean;
};

const CampaignSection = async ({ responseData }: { responseData: any }) => {
  const campaignId: number = responseData?.[0].id;

  const campaignObj = responseData?.[0].attributes;

  const background_color: string = campaignObj?.background_color || "";
  const logo: string = campaignObj?.logo?.data?.attributes?.url || "";
  const image_mobile: string =
    campaignObj?.image_mobile?.data?.attributes?.url || "";
  const image_phablet: string =
    campaignObj?.image_phablet?.data?.attributes?.url || "";
  const image_tablet: string =
    campaignObj?.image_tablet?.data?.attributes?.url || "";
  const image_desktop: string =
    campaignObj?.image_desktop?.data?.attributes?.url || "";

  const title: string = campaignObj?.title || "";
  const disclaimer: string = campaignObj?.disclaimer || "";
  const button_label: string = campaignObj?.button_label || "";

  const countryCodeOptions: CountryCodeModel[] = Array.isArray(
    campaignObj?.country_code_options
  )
    ? campaignObj.country_code_options.map((obj: any) => ({
        flag: obj.flag || "",
        name: obj.name || "",
        code: obj.code || "",
      }))
    : [];

  const jobTitleOptions: string[] = Array.isArray(
    campaignObj?.job_title_options
  )
    ? campaignObj.job_title_options.map((txt: string) => txt?.toString() || "")
    : [];

  const fieldConfig: FieldConfigModel = {
    fullName: campaignObj?.show_field_fullName,
    email: campaignObj?.show_field_email,
    mobileNumber: campaignObj?.show_field_mobileNumber,
    city: campaignObj?.show_field_city,
    jobTitle: campaignObj?.show_field_jobTitle,
    companyOrg: campaignObj?.show_field_companyOrg,
  };

  return (
    <div
      style={{ backgroundColor: background_color }}
      className={`p-[16px] phablet:p-[24px] tablet:p-[28px] desktop:p-[32px]`}
    >
      {/* header */}
      <Link href="/" className="w-fit">
        <div className="w-[45px] phablet:w-[57px] tablet:w-[73px] desktop:w-[100px]">
          <Image
            alt="logo"
            src={logo}
            className="h-full w-full object-fill"
            width={0}
            height={0}
            priority
          />
        </div>
      </Link>

      {/* body */}
      <section className="flex flex-col tablet:flex-row gap-[24px] mt-[40px]">
        {/* image section */}
        <div
          style={{
            "--image-url-mobile": `url(${image_mobile})`,
            "--image-url-phablet": `url(${image_phablet})`,
            "--image-url-tablet": `url(${image_tablet})`,
            "--image-url-desktop": `url(${image_desktop})`,
          }}
          className="bg-[image:var(--image-url-mobile)] phablet:bg-[image:var(--image-url-phablet)] tablet:bg-[image:var(--image-url-tablet)] desktop:bg-[image:var(--image-url-desktop)] bg-cover bg-center h-[450px] phablet:h-[550px] tablet:h-auto tablet:self-stretch w-full tablet:w-[65%] desktop:w-[65%]"
        />

        {/* form section */}
        <div className="w-full tablet:w-[35%] desktop:w-[35%]">
          <FormComponent
            campaignId={campaignId}
            title={title}
            disclaimer={disclaimer}
            button_label={button_label}
            countryCodeOptions={countryCodeOptions}
            jobTitleOptions={jobTitleOptions}
            fieldConfig={fieldConfig}
          />
        </div>
      </section>
    </div>
  );
};

export default CampaignSection;
