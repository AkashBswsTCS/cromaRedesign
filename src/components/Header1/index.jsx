import React from "react";

import { Img, Text } from "components";

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row gap-[13px] items-center justify-center md:ml-[0] ml-[231px] w-2/5 md:w-full">
          <Text
            className="text-[18.78px] text-gray-600_01"
            size="txtPlusJakartaSansRomanMedium1878Gray60001"
          >
            Get the most up-to-date information on the measures.
          </Text>
          <div className="flex flex-row items-start justify-evenly w-1/5 md:w-full">
            <Text
              className="text-[18.78px] text-white-A700"
              size="txtPlusJakartaSansRomanBold1878"
            >
              Whatsapp
            </Text>
            <Img
              className="h-[21px] mt-[3px] w-[21px]"
              src="images/img_upload_white_a700.svg"
              alt="upload"
            />
          </div>
        </div>
        <Text
          className="mb-[5px] md:ml-[0] ml-[362px] text-[16.43px] text-white-A700 tracking-[0.33px]"
          size="txtPlusJakartaSansRomanSemiBold1643"
        >
          Contact Us
        </Text>
        <Text
          className="ml-9 md:ml-[0] md:mt-0 my-[3px] text-[16.43px] text-white-A700 tracking-[0.33px]"
          size="txtPlusJakartaSansRomanSemiBold1643"
        >
          Blog
        </Text>
        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[38px] w-[9%] md:w-full">
          <div className="flex flex-row gap-2 items-center justify-between w-full">
            <Text
              className="text-[16.43px] text-white-A700 tracking-[0.33px]"
              size="txtPlusJakartaSansRomanSemiBold1643"
            >
              Currency - ₹
            </Text>
            <Img
              className="h-7 w-7"
              src="images/img_arrowdown.svg"
              alt="arrowdown"
            />
          </div>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
