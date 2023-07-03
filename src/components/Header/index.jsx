import React from "react";

import { Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Text
          className="md:ml-[0] ml-[209px] md:mt-0 my-[22px] text-[18.78px] text-gray-600_01"
          size="txtPlusJakartaSansRomanMedium1878Gray60001"
        >
          Get the most up-to-date information on the measures.
        </Text>
        <Text
          className="md:ml-[0] ml-[13px] md:mt-0 my-[22px] text-[18.78px] text-white-A700"
          size="txtPlusJakartaSansRomanBold1878"
        >
          Whatsapp
        </Text>
        <Img
          className="h-[21px] ml-1 md:ml-[0] md:mt-0 my-6 w-[21px]"
          src="images/img_upload_white_a700.svg"
          alt="upload"
        />
        <Text
          className="mb-[26px] md:ml-[0] ml-[362px] md:mt-0 mt-[22px] text-[16.43px] text-white-A700 tracking-[0.33px]"
          size="txtPlusJakartaSansRomanSemiBold1643"
        >
          Contact Us
        </Text>
        <Text
          className="ml-9 md:ml-[0] md:mt-0 my-6 text-[16.43px] text-white-A700 tracking-[0.33px]"
          size="txtPlusJakartaSansRomanSemiBold1643"
        >
          Blog
        </Text>
        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[38px] mr-[149px] md:mt-0 my-[21px] w-[9%] md:w-full">
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

Header.defaultProps = {};

export default Header;
