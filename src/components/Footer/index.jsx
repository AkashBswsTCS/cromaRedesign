import React from "react";

import { Button, Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-[99px] ml-[139px] mr-[79px] mt-[38px] w-[88%]">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[24%] md:w-full">
              <Img
                className="h-[37px]"
                src="images/img_cromalogo.svg"
                alt="cromalogo_One"
              />
              <Text
                className="leading-[163.00%] md:ml-[0] ml-[7px] mt-[55px] text-[16.43px] text-white-A700 w-[76%] sm:w-full"
                size="txtPlusJakartaSansRomanSemiBold1643"
              >
                © Copyright 2023 Croma. All rights reserved
              </Text>
              <Text
                className="mt-[68px] sm:text-[24.17px] md:text-[26.17px] text-[28.17px] text-white-A700 tracking-[-0.35px]"
                size="txtAlatsiRegular2817"
              >
                Any Queries?
              </Text>
              <div className="flex flex-row items-start justify-between mt-[18px] w-full">
                <Text
                  className="mt-3 text-[16.43px] text-white-A700_87"
                  size="txtAdaminaRegular1643"
                >
                  Let me help you
                </Text>
                <Button className="bg-blue_gray-900 flex h-[58px] items-center justify-center p-[23px] sm:px-5 rounded-[50%] w-[58px]">
                  <Img
                    src="images/img_arrowright_white_a700.svg"
                    alt="arrowright"
                  />
                </Button>
              </div>
              <Line className="bg-white-A700_63 h-px w-full" />
            </div>
            <div className="flex md:flex-1 flex-col gap-8 items-start justify-start md:ml-[0] ml-[154px] w-[12%] md:w-full">
              <Text
                className="sm:text-[17.13px] md:text-[19.13px] text-[21.13px] text-white-A700 tracking-[-0.27px]"
                size="txtPlusJakartaSansRomanSemiBold2112"
              >
                Inside Croma
              </Text>
              <ul className="flex flex-col items-start justify-start w-full common-column-list">
                <li>
                  <Text
                    className="text-[16.43px] text-gray-700_01"
                    size="txtAdaminaRegular1643Gray70001"
                  >
                    Terms and Conditions
                  </Text>
                </li>
                <li>
                  <Text
                    className="mt-[25px] text-[16.43px] text-gray-700_01"
                    size="txtAdaminaRegular1643Gray70001"
                  >
                    Privacy Policy
                  </Text>
                </li>
                <li>
                  <Text
                    className="mt-[23px] text-[16.43px] text-gray-700_01"
                    size="txtAdaminaRegular1643Gray70001"
                  >
                    Cancellation Policy
                  </Text>
                </li>
                <li>
                  <Text
                    className="mt-[21px] text-[16.43px] text-gray-700_01"
                    size="txtAdaminaRegular1643Gray70001"
                  >
                    Guest Rules
                  </Text>
                </li>
                <li>
                  <Text
                    className="mt-6 text-[16.43px] text-gray-700_01"
                    size="txtAdaminaRegular1643Gray70001"
                  >
                    Reservation Guide
                  </Text>
                </li>
              </ul>
            </div>
            <div className="flex md:flex-1 flex-col gap-[34px] items-start justify-start md:ml-[0] ml-[72px] w-[6%] md:w-full">
              <Text
                className="sm:text-[17.13px] md:text-[19.13px] text-[21.13px] text-white-A700 tracking-[-0.27px]"
                size="txtPlusJakartaSansRomanSemiBold2112"
              >
                About
              </Text>
              <ul className="flex flex-col items-start justify-start w-full common-column-list">
                <li>
                  <Text
                    className="text-[16.43px] text-gray-700_01"
                    size="txtAdaminaRegular1643Gray70001"
                  >
                    Our Story
                  </Text>
                </li>
                <li>
                  <Text
                    className="mt-[21px] text-[16.43px] text-gray-700_01"
                    size="txtAdaminaRegular1643Gray70001"
                  >
                    Contact Us
                  </Text>
                </li>
                <li>
                  <Text
                    className="mt-[25px] text-[16.43px] text-gray-700_01"
                    size="txtAdaminaRegular1643Gray70001"
                  >
                    Blog
                  </Text>
                </li>
                <li>
                  <Text
                    className="mt-[23px] text-[16.43px] text-gray-700_01"
                    size="txtAdaminaRegular1643Gray70001"
                  >
                    F.A.Q
                  </Text>
                </li>
              </ul>
            </div>
            <ul className="flex md:flex-1 flex-col items-start justify-start mb-[9px] md:ml-[0] ml-[97px] w-[37%] md:w-full common-column-list">
              <li>
                <div className="flex flex-row sm:gap-10 items-start justify-between">
                  <Text
                    className="mt-[37px] sm:text-[17.13px] md:text-[19.13px] text-[21.13px] text-white-A700 tracking-[-0.27px]"
                    size="txtPlusJakartaSansRomanSemiBold2112"
                  >
                    Products
                  </Text>
                  <Button className="bg-blue_gray-900 flex h-[58px] items-center justify-center mb-[5px] p-[17px] rounded-[50%] w-[58px]">
                    <Img
                      className="h-[23px]"
                      src="images/img_arrowup.svg"
                      alt="arrowup"
                    />
                  </Button>
                </div>
              </li>
              <li>
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[77px] items-start justify-start mt-8">
                  <Text
                    className="text-[16.43px] text-gray-700_01"
                    size="txtAdaminaRegular1643Gray70001"
                  >
                    Televisions & Accessories
                  </Text>
                  <Text
                    className="text-[16.43px] text-gray-700_01"
                    size="txtAdaminaRegular1643Gray70001"
                  >
                    Grooming & Personal care
                  </Text>
                </div>
              </li>
              <li>
                <div className="flex flex-row items-start justify-between mt-[21px]">
                  <Text
                    className="mt-0.5 text-[16.43px] text-gray-700_01"
                    size="txtAdaminaRegular1643Gray70001"
                  >
                    Home Appliances
                  </Text>
                  <Text
                    className="mb-0.5 text-[16.43px] text-gray-700_01"
                    size="txtAdaminaRegular1643Gray70001"
                  >
                    Camera & Accessories
                  </Text>
                </div>
              </li>
              <li>
                <div className="flex flex-row items-center justify-between mt-[22px]">
                  <Text
                    className="text-[16.43px] text-gray-700_01"
                    size="txtAdaminaRegular1643Gray70001"
                  >
                    Phones & Wearables
                  </Text>
                  <Text
                    className="text-[16.43px] text-gray-700_01"
                    size="txtAdaminaRegular1643Gray70001"
                  >
                    Smart Devices
                  </Text>
                </div>
              </li>
              <li>
                <div className="flex flex-row items-center justify-between mt-[25px]">
                  <Text
                    className="text-[16.43px] text-gray-700_01"
                    size="txtAdaminaRegular1643Gray70001"
                  >
                    Computer & Tablets
                  </Text>
                  <Text
                    className="text-[16.43px] text-gray-700_01"
                    size="txtAdaminaRegular1643Gray70001"
                  >
                    Gaming
                  </Text>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-[119px] items-start justify-start mt-[22px]">
                  <Text
                    className="mt-0.5 text-[16.43px] text-gray-700_01"
                    size="txtAdaminaRegular1643Gray70001"
                  >
                    Computer & Tablets
                  </Text>
                  <Text
                    className="mb-0.5 text-[16.43px] text-gray-700_01"
                    size="txtAdaminaRegular1643Gray70001"
                  >
                    Accessories
                  </Text>
                </div>
              </li>
              <li>
                <div className="flex flex-row items-center justify-between mt-6">
                  <Text
                    className="text-[16.43px] text-gray-700_01"
                    size="txtAdaminaRegular1643Gray70001"
                  >
                    Computer & Tablets
                  </Text>
                  <Text
                    className="text-[16.43px] text-gray-700_01"
                    size="txtAdaminaRegular1643Gray70001"
                  >
                    Top Brands
                  </Text>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
