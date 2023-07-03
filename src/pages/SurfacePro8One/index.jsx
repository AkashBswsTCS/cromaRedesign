import React from "react";

import { Img, Line, Text } from "components";

const SurfacePro8OnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto p-[84px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[813px] mb-[42px] mx-auto w-full">
          <div className="flex flex-row items-center justify-between w-[88%] md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
              size="txtInterRegular32"
            >
              1
            </Text>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-500_01"
              size="txtInterRegular32Gray50001"
            >
              2
            </Text>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-500_01"
              size="txtInterRegular32Gray50001"
            >
              3
            </Text>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-500_01"
              size="txtInterRegular32Gray50001"
            >
              4
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly mt-[13px] w-full">
            <div className="md:h-[115px] h-[116px] relative w-[29%] md:w-full">
              <Line className="absolute bg-black-900_66 h-[3px] inset-y-[0] my-auto right-[0] w-[56%]" />
              <div className="absolute bg-white-A700 border-[3px] border-green-800 border-solid flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto p-[34px] sm:px-5 rounded-[58px] shadow-bs7 w-[117px]">
                <Img
                  className="h-[43px] md:h-auto my-0.5 object-cover w-full"
                  src="images/img_image1_43x49.png"
                  alt="imageOne"
                />
              </div>
            </div>
            <div className="bg-white-A700 border border-black-900_66 border-solid flex md:flex-1 flex-col items-center justify-start p-[34px] sm:px-5 rounded-[58px] w-[117px] md:w-full">
              <Img
                className="h-[43px] md:h-auto my-0.5 object-cover w-full"
                src="images/img_image2.png"
                alt="imageTwo"
              />
            </div>
            <Line className="bg-black-900_49 h-[3px] md:mt-0 my-[57px] rotate-[1deg] w-[15%]" />
            <div className="md:h-[115px] h-[116px] relative w-[43%] md:w-full">
              <Line className="absolute bg-black-900_49 h-[3px] inset-y-[0] left-[26%] my-auto w-[43%]" />
              <div className="absolute bg-white-A700 border border-black-900_49 border-solid flex flex-col h-full inset-y-[0] items-center justify-start my-auto p-[34px] sm:px-5 right-[0] rounded-[58px] w-[117px]">
                <Img
                  className="h-[43px] md:h-auto my-0.5 object-cover w-full"
                  src="images/img_image4.png"
                  alt="imageFour"
                />
              </div>
              <div className="absolute bg-white-A700 border border-black-900_49 border-solid flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto p-[34px] sm:px-5 rounded-[58px] w-[117px]">
                <Img
                  className="h-[43px] md:h-auto my-0.5 object-cover w-full"
                  src="images/img_image3_43x49.png"
                  alt="imageThree"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[30px] w-[98%] md:w-full">
            <Text
              className="mb-[3px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
              size="txtInterRegular32"
            >
              Cart
            </Text>
            <Text
              className="md:ml-[0] ml-[150px] md:mt-0 mt-[3px] md:text-3xl sm:text-[28px] text-[32px] text-gray-500_01"
              size="txtInterRegular32Gray50001"
            >
              Billing
            </Text>
            <Text
              className="md:ml-[0] ml-[124px] md:mt-0 mt-[3px] md:text-3xl sm:text-[28px] text-[32px] text-gray-500_01"
              size="txtInterRegular32Gray50001"
            >
              Shipping
            </Text>
            <Text
              className="ml-24 md:ml-[0] md:mt-0 mt-[3px] md:text-3xl sm:text-[28px] text-[32px] text-gray-500_01"
              size="txtInterRegular32Gray50001"
            >
              Payment
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default SurfacePro8OnePage;
