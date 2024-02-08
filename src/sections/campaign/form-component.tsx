"use client";
import { saveCampaignUserInterest } from "@/services/campaign";
import { useEffect, useRef, useState } from "react";
import ReactHtmlParser from "react-html-parser";

type FieldConfigModel = {
  fullName: boolean;
  email: boolean;
  mobileNumber: boolean;
  city: boolean;
  jobTitle: boolean;
  companyOrg: boolean;
};

type CountryCodeModel = { flag: string; name: string; code: string };

type UserDataModel = {
  fullName: string;
  email: string;
  countryCode: CountryCodeModel | null;
  mobileNumber: string;
  city: string;
  jobTitle: string;
  companyOrg: string;
  mathAnswer: string;
};

type UserDataErrorModel = {
  fullName: string;
  email: string;
  countryCode: string;
  mobileNumber: string;
  city: string;
  jobTitle: string;
  companyOrg: string;
  mathAnswer: string;
};

const DropdownArrow = (
  <svg
    className="w-2.5 h-2.5 ms-1"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 6"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m1 1 4 4 4-4"
    />
  </svg>
);

const FormComponent = ({
  campaignId,
  title,
  disclaimer,
  button_label,
  countryCodeOptions,
  jobTitleOptions,
  fieldConfig,
}: {
  campaignId: number;
  title: string;
  disclaimer: string;
  button_label: string;
  countryCodeOptions: CountryCodeModel[];
  jobTitleOptions: string[];
  fieldConfig: FieldConfigModel;
}) => {
  // generate random number
  const generateRandomNumber = (): number => Math.floor(Math.random() * 20);

  // math question state variables
  const [mathQues1, setMathQues1] = useState<number>(0);
  const [mathQues2, setMathQues2] = useState<number>(0);

  // set initial math question value
  useEffect(() => {
    setMathQues1(generateRandomNumber());
    setMathQues2(generateRandomNumber());
  }, []);

  // code for country code dropdown
  const [toogleCountryCodeDropdown, setToogleCountryCodeDropdown] =
    useState(false);
  const countryCodeDropdownRef = useRef<any>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        countryCodeDropdownRef.current &&
        !countryCodeDropdownRef.current?.contains(event.target)
      ) {
        setToogleCountryCodeDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [countryCodeDropdownRef]);

  // user form data state variable
  const [userData, setUserData] = useState<UserDataModel>({
    fullName: "",
    email: "",
    countryCode: null,
    mobileNumber: "",
    city: "",
    jobTitle: "",
    companyOrg: "",
    mathAnswer: "",
  });

  // user form data error state variable
  const [userDataError, setUserDataError] = useState<UserDataErrorModel>({
    fullName: "",
    email: "",
    countryCode: "",
    mobileNumber: "",
    city: "",
    jobTitle: "",
    companyOrg: "",
    mathAnswer: "",
  });

  // set initial mobile number code as India
  useEffect(() => {
    const countryCodeIndian = countryCodeOptions.find(
      (obj) => obj.code === "+91"
    );
    if (countryCodeIndian) {
      setUserData((prev) => ({ ...prev, countryCode: countryCodeIndian }));
    }
  }, [countryCodeOptions]);

  // handle full name change
  const handleFullNameChange = (val: string) => {
    let text = val
      .trimStart()
      .replace("  ", " ")
      .replace(/[^\w\s]/gi, "")
      .replace(/_/g, "")
      .replace(/[0-9]/g, "");
    setUserData((prev) => ({ ...prev, fullName: text }));

    // error message manage
    let errMsg = "";
    if (!text) {
      errMsg = "Please enter full name";
    }
    setUserDataError((prev) => ({ ...prev, fullName: errMsg }));
  };

  // handle email change
  const handleEmailChange = (val: string) => {
    let text = val.replace(" ", "");
    setUserData((prev) => ({ ...prev, email: text }));

    // error message manage
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let errMsg = "";
    if (!text) {
      errMsg = "Please enter email";
    } else if (!emailRegex.test(text)) {
      errMsg = "Please enter a valid email";
    }
    setUserDataError((prev) => ({ ...prev, email: errMsg }));
  };

  // handle country code change
  const handleCountryCodeChange = (val: CountryCodeModel) => {
    setUserData((prev) => ({ ...prev, countryCode: val }));
  };

  // handle mobile number change
  const handleMobileNumberChange = (val: string) => {
    let text = val
      .trimStart()
      .replace("  ", " ")
      .replace(/[^0-9-\s]/g, "")
      .replace("--", "-");
    setUserData((prev) => ({ ...prev, mobileNumber: text }));

    // error message manage
    let errMsg = "";
    if (!text) {
      errMsg = "Please enter mobile number";
    }
    setUserDataError((prev) => ({ ...prev, mobileNumber: errMsg }));
  };

  // handle city change
  const handleCityChange = (val: string) => {
    let text = val
      .trimStart()
      .replace("  ", " ")
      .replace(/[^\w\s]/gi, "")
      .replace(/_/g, "")
      .replace(/[0-9]/g, "");
    setUserData((prev) => ({ ...prev, city: text }));

    // error message manage
    let errMsg = "";
    if (!text) {
      errMsg = "Please enter city";
    }
    setUserDataError((prev) => ({ ...prev, city: errMsg }));
  };

  // handle job title change
  const handleJobTitleChange = (val: string) => {
    setUserData((prev) => ({ ...prev, jobTitle: val }));
  };

  // handle company org change
  const handleComapnyOrgChange = (val: string) => {
    let text = val
      .trimStart()
      .replace("  ", " ")
      .replace(/[^\w\s]/gi, "")
      .replace(/_/g, "")
      .replace(/[0-9]/g, "");
    setUserData((prev) => ({ ...prev, companyOrg: text }));

    // error message manage
    let errMsg = "";
    if (!text) {
      errMsg = "Please enter Company/Organization";
    }
    setUserDataError((prev) => ({ ...prev, companyOrg: errMsg }));
  };

  // handle math answer change
  const handleMathAnswerChange = (val: string) => {
    setUserData((prev) => ({ ...prev, mathAnswer: val }));

    setUserDataError((prev) => ({ ...prev, mathAnswer: "" })); // resetting error
  };

  // handle submit button disabled
  const [enableSubmitBtn, setEnableSubmitBtn] = useState<boolean>(false);
  useEffect(() => {
    if (
      (fieldConfig.fullName &&
        (!userData.fullName || userDataError.fullName)) ||
      (fieldConfig.email && (!userData.email || userDataError.email)) ||
      (fieldConfig.mobileNumber &&
        (!userData.countryCode ||
          !userData.mobileNumber ||
          userDataError.mobileNumber)) ||
      (fieldConfig.city && (!userData.city || userDataError.city)) ||
      (fieldConfig.jobTitle && !userData.jobTitle) ||
      (fieldConfig.companyOrg &&
        (!userData.companyOrg || userDataError.companyOrg)) ||
      !userData.mathAnswer
    ) {
      setEnableSubmitBtn(false);
    } else {
      setEnableSubmitBtn(true);
    }
  }, [fieldConfig, userData, userDataError]);

  // state variable for form submittion message
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  // handle submit
  const handleSubmit = async () => {
    // verify match captca
    if (mathQues1 + mathQues2 !== Number(userData.mathAnswer)) {
      const errMsg = "The answer you entered for the CAPTCHA was not correct.";
      setUserDataError((prev) => ({ ...prev, mathAnswer: errMsg }));

      setMathQues1(generateRandomNumber()); // regenerating match question 1
      setMathQues2(generateRandomNumber()); // regenerating match question 2

      return;
    }

    // saving user details
    try {
      const payload = {
        fullName: userData.fullName,
        email: userData.email,
        countryCode: userData.countryCode?.code,
        mobileNumber: userData.mobileNumber,
        city: userData.city,
        jobTitle: userData.jobTitle,
        companyOrg: userData.companyOrg,
      };

      const response = await saveCampaignUserInterest(campaignId, payload);
      if (response?.ok) {
        const data = await response?.json();
        setSuccessMessage(data?.message || "");
        setFormSubmitted(true);
      } else {
        const data = await response?.json();
        const errorMessgae = data?.error?.message || "Something went wrong";

        alert(errorMessgae);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="bg-white shadow-[0_20px_36px_0_rgba(0,0,0,0.04)] p-[16px] phablet:p-[24px] tablet:p-[28px] desktop:p-[32px]">
      {!formSubmitted ? (
        <>
          {/* title */}
          <div className="border-b border-greyscale-200 pb-[8px]">
            <p className="font-semibold text-greyscale-700 text-[28px] phablet:text-[34px] tablet:text-[38px] desktop:text-[42px]">
              {title}
            </p>
          </div>

          <div className="flex flex-col mt-[16px] gap-[16px]">
            {/* full name */}
            {fieldConfig.fullName ? (
              <div className="gap-[4px]">
                <input
                  placeholder="Full Name"
                  className={`bg-greyscale-50 p-[16px] outline-none w-full border-[1px] text-[14px] ${
                    userDataError.fullName
                      ? "border-red-300"
                      : "border-transparent"
                  }`}
                  value={userData.fullName}
                  onChange={(e) => handleFullNameChange(e.target.value)}
                />

                {userDataError.fullName && (
                  <p className="text-[12px] text-red-500">
                    {userDataError.fullName}
                  </p>
                )}
              </div>
            ) : null}

            {/* email */}
            {fieldConfig.email ? (
              <div className="gap-[4px]">
                <input
                  placeholder="Email"
                  className={`bg-greyscale-50 p-[16px] outline-none w-full border-[1px] text-[14px] ${
                    userDataError.email
                      ? "border-red-300"
                      : "border-transparent"
                  }`}
                  value={userData.email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                />

                {userDataError.email && (
                  <p className="text-[12px] text-red-500">
                    {userDataError.email}
                  </p>
                )}
              </div>
            ) : null}

            {/* country code and mobile number */}
            {fieldConfig.mobileNumber ? (
              <div className="gap-[4px]">
                <div
                  className={`bg-greyscale-50 flex relative border-[1px] ${
                    userDataError.mobileNumber
                      ? "border-red-300"
                      : "border-transparent"
                  }`}
                >
                  {/* country code */}
                  <button
                    className="pl-[16px] py-[16px] inline-flex items-center gap-[4px]"
                    onClick={() =>
                      setToogleCountryCodeDropdown(!toogleCountryCodeDropdown)
                    }
                  >
                    {userData.countryCode?.flag}
                    <p className="text-[14px]">{userData.countryCode?.code}</p>
                    {DropdownArrow}
                  </button>
                  {toogleCountryCodeDropdown ? (
                    <div
                      className="z-10 absolute top-[50px] bg-white shadow-[0_20px_36px_0_rgba(0,0,0,0.04)] w-[90%] max-h-[200px] overflow-y-auto scrollbar"
                      ref={countryCodeDropdownRef}
                    >
                      <ul className="p-[8px]">
                        {countryCodeOptions.map((obj, idx) => (
                          <li key={idx}>
                            <button
                              className={`flex items-center gap-[8px] w-full p-[8px] hover:bg-slate-100 ${
                                obj.code === userData.countryCode?.code
                                  ? "bg-slate-50 font-medium"
                                  : ""
                              }`}
                              onClick={() => {
                                handleCountryCodeChange(obj);
                                setToogleCountryCodeDropdown(false);
                              }}
                            >
                              {obj.flag}
                              <p className="text-greyscale-700 truncate text-[14px]">
                                {obj.name} ({obj.code})
                              </p>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {/* mobile number */}
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="bg-transparent p-[16px] outline-none w-full text-[14px]"
                    value={userData.mobileNumber}
                    onChange={(e) => handleMobileNumberChange(e.target.value)}
                  />
                </div>

                {userDataError.mobileNumber && (
                  <p className="text-[12px] text-red-500">
                    {userDataError.mobileNumber}
                  </p>
                )}
              </div>
            ) : null}

            {/* city */}
            {fieldConfig.city ? (
              <div className="gap-[4px]">
                <input
                  placeholder="City"
                  className={`bg-greyscale-50 p-[16px] outline-none w-full border-[1px] text-[14px] ${
                    userDataError.city ? "border-red-300" : "border-transparent"
                  }`}
                  value={userData.city}
                  onChange={(e) => handleCityChange(e.target.value)}
                />

                {userDataError.city && (
                  <p className="text-[12px] text-red-500">
                    {userDataError.city}
                  </p>
                )}
              </div>
            ) : null}

            {/* job title */}
            {fieldConfig.jobTitle ? (
              <div className="bg-greyscale-50 pr-[16px]">
                <select
                  className={`bg-transparent p-[16px] outline-none w-full truncate text-[14px] ${
                    !userData.jobTitle ? "text-greyscale-200" : ""
                  }`}
                  value={userData.jobTitle}
                  onChange={(e) => handleJobTitleChange(e.target.value)}
                >
                  <option value="" disabled>
                    Job Title
                  </option>
                  {jobTitleOptions.map((val, idx) => (
                    <option value={val} key={idx}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
            ) : null}

            {/* company/organization */}
            {fieldConfig.companyOrg ? (
              <div className="gap-[4px]">
                <input
                  placeholder="Company/Organization"
                  className={`bg-greyscale-50 p-[16px] outline-none w-full border-[1px] text-[14px] ${
                    userDataError.companyOrg
                      ? "border-red-300"
                      : "border-transparent"
                  }`}
                  value={userData.companyOrg}
                  onChange={(e) => handleComapnyOrgChange(e.target.value)}
                />

                {userDataError.companyOrg && (
                  <p className="text-[12px] text-red-500">
                    {userDataError.companyOrg}
                  </p>
                )}
              </div>
            ) : null}

            {/* math question */}
            <div className="flex gap-[16px]">
              <p className="text-greyscale-700 text-[14px] phablet:text-[16px] tablet:text-[18px] sm:whitespace-nowrap sm:mt-[16px]">
                {`Math question ${mathQues1} + ${mathQues2} =`}
              </p>

              <div className="gap-[4px] w-full">
                <input
                  type="number"
                  className={`bg-greyscale-50 p-[16px] outline-none min-w-[80px] w-full border-[1px] text-[14px] ${
                    userDataError.mathAnswer
                      ? "border-red-300"
                      : "border-transparent"
                  } [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
                  value={userData.mathAnswer}
                  onChange={(e) => handleMathAnswerChange(e.target.value)}
                />

                {userDataError.mathAnswer && (
                  <p className="text-[12px] text-red-500">
                    {userDataError.mathAnswer}
                  </p>
                )}
              </div>
            </div>

            {/* disclaimer */}
            <p className="text-greyscale-200 font-medium text-[14px]">
              {ReactHtmlParser(disclaimer)}
            </p>
          </div>

          {/* sumbit cta */}
          <button
            className={`text-[14px] font-bold p-[16px] text-center w-full mt-[16px] text-white ${
              enableSubmitBtn
                ? "bg-wealth-orange hover:opacity-90"
                : "bg-greyscale-300 cursor-not-allowed"
            }`}
            disabled={!enableSubmitBtn}
            onClick={handleSubmit}
          >
            {button_label}
          </button>
        </>
      ) : (
        <div className="flex flex-col gap-[24px] tablet:min-h-[650px]">
          <p className="text-greyscale-700 whitespace-pre-wrap">
            {successMessage}
          </p>
          <button onClick={() => window.location.reload()} className="w-fit">
            <p className="text-blue-500 hover:font-medium underline">
              Back to form
            </p>
          </button>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
