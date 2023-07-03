import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, SelectBox, Text } from "components";
import Header1 from "components/Header1";

const kolkataOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PDPgoldOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex font-plusjakartasans h-[1586px] justify-end mx-auto relative w-full">
        <div className="h-[1861px] md:h-[2819px] mt-auto mx-auto md:px-5 w-full">
          <div className="absolute sm:h-[1371px] h-[1586px] md:h-[2819px] inset-x-[0] mx-auto top-[0] w-full">
            <div
              className="bg-cover bg-no-repeat sm:h-[1371px] h-[1586px] md:h-[2819px] m-auto p-16 md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group104.svg')" }}
            >
              <div className="flex flex-col md:gap-10 gap-[137px] h-full justify-start m-auto w-[92%]">
                <div className="md:h-[1540px] sm:h-[868px] h-[877px] mr-2.5 relative w-full">
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[98%]">
                    <div className="flex flex-col md:gap-10 gap-[95px] justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[72%] md:w-full">
                        <Img
                          className="common-pointer h-[41px]"
                          src="images/img_cromalogo.svg"
                          alt="cromalogo"
                          onClick={() => navigate("/")}
                        />
                        <div className="flex flex-col items-center justify-start rounded-[25px] shadow-bs1">
                          <div className="bg-gray-900_19 flex flex-row items-center justify-between p-1 rounded-[25px] w-full">
                            <div className="flex flex-col items-center justify-start ml-[31px]">
                              <Text
                                className="text-[17px] text-white-A700_99 tracking-[0.17px]"
                                size="txtPlusJakartaSansRomanMedium17"
                              >
                                Where you want to go?
                              </Text>
                            </div>
                            <Button className="bg-blue_gray-900_02 flex h-[42px] items-center justify-center mr-[3px] p-3 rounded-[50%] w-[42px]">
                              <Img
                                className="h-[17px]"
                                src="images/img_search.svg"
                                alt="search"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col font-barlow gap-[11px] items-start justify-start md:ml-[0] ml-[114px] w-[93%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-3/4 md:w-full">
                          <div className="flex flex-col justify-start w-3/4 md:w-full">
                            <Text
                              className="italic md:ml-[0] ml-[15px] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-100_01 tracking-[6.00px]"
                              size="txtBarlowMediumItalic40"
                            >
                              APPLE{" "}
                            </Text>
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="h-[260px] md:ml-[0] ml-[5px] relative w-full">
                                <Text
                                  className="absolute h-full inset-y-[0] italic left-[0] my-auto md:text-5xl text-[108px] text-white-A700 w-[95%] sm:w-full"
                                  size="txtBarlowBlackItalic108"
                                >
                                  <>
                                    iPHONE 14 <br />
                                    PRO
                                  </>
                                </Text>
                                <Img
                                  className="absolute bottom-[8%] h-[100px] object-cover right-[0] w-[100px]"
                                  src="images/img_ellipse2.png"
                                  alt="ellipseFour"
                                />
                              </div>
                              <Text
                                className="mt-[29px] sm:text-[35px] md:text-[41px] text-[45px] text-white-A700"
                                size="txtBarlowSemiBold45"
                              >
                                <span className="md:text-[34px] sm:text-[32px] text-white-A700 font-barlow text-left text-4xl font-semibold">
                                  ₹129900.00*
                                </span>
                                <span className="text-white-A700 font-barlow text-left font-semibold">
                                  {" "}
                                </span>
                                <span className="text-white-A700 font-barlow text-left text-xl font-semibold">
                                  ONWARDS
                                </span>
                              </Text>
                              <div className="h-[203px] md:h-[221px] mt-[18px] relative w-[56%] sm:w-full">
                                <Text
                                  className="absolute h-full inset-[0] italic justify-center leading-[218.50%] m-auto text-blue_gray-300_01 text-sm tracking-[0.70px] w-full"
                                  size="txtBarlowMediumItalic14"
                                >
                                  From ₹20650.00/mo.Per Month with instant
                                  savings Footnote§§ and No Cost EMI Footnote§
                                  or ₹129900.00Footnote‡
                                </Text>
                                <Img
                                  className="common-pointer absolute bottom-[7%] h-[65px] left-[1%] object-cover w-[65px]"
                                  src="images/img_img1.png"
                                  alt="imgOne"
                                  onClick={() => navigate("/pdppurple")}
                                />
                                <div className="absolute bottom-[9%] flex flex-row gap-8 items-center justify-center right-[11%] w-[39%]">
                                  <Img
                                    className="common-pointer h-[66px] md:h-auto object-cover w-[66px]"
                                    src="images/img_img1.png"
                                    alt="imgOne_One"
                                    onClick={() => navigate("/pdpwhiteone")}
                                  />
                                  <Img
                                    className="common-pointer h-[66px] md:h-auto object-cover w-[66px]"
                                    src="images/img_img1_66x66.png"
                                    alt="imgOne_Two"
                                    onClick={() => navigate("/pdpblackone")}
                                  />
                                </div>
                                <Img
                                  className="absolute bottom-[7%] h-[66px] left-[26%] object-cover w-[66px]"
                                  src="images/img_img1.png"
                                  alt="imgOne_Three"
                                />
                                <Img
                                  className="absolute bottom-[4%] h-[76px] left-1/4 w-[76px]"
                                  src="images/img_contrast.svg"
                                  alt="contrast"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col md:gap-10 gap-[108px] justify-start w-[26%] md:w-full">
                            <div className="bg-blue_gray-100_26 blue_gray_200_black_900_00_border4 h-[254px] outline outline-[1px] rounded-[127px] w-[255px]"></div>
                            <Img
                              className="h-[200px] md:h-auto md:ml-[0] ml-[43px] object-cover w-[201px] sm:w-full"
                              src="images/img_ellipse2.png"
                              alt="ellipseTwo"
                            />
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <Button
                            className="common-pointer bg-blue_gray-200_01 cursor-pointer font-bold leading-[normal] min-w-[164px] md:mt-0 mt-[50px] py-3.5 rounded-[20px] text-base text-black-900 text-center"
                            onClick={() => navigate("/pdpgoldwithcartitem")}
                          >
                            ADD TO CART
                          </Button>
                          <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[41px] md:mt-0 mt-[50px] rounded-[20px] shadow-bs14 w-[12%] md:w-full">
                            <div className="bg-blue_gray-200_01 flex flex-col items-center justify-end p-[13px] rounded-[20px] w-full">
                              <Text
                                className="text-base text-black-900"
                                size="txtBarlowBold16"
                              >
                                BUY NOW
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-[75px] md:h-auto mb-[22px] md:ml-[0] ml-[361px] object-cover"
                            src="images/img_shadow.png"
                            alt="shadow"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-[57px] right-[8%] top-[0] w-[57px]">
                    <Img
                      className="h-[57px] m-auto rounded-[50%] w-[57px]"
                      src="images/img_group2772.svg"
                      alt="group2772"
                    />
                    <Img
                      className="absolute h-[27px] inset-x-[0] mx-auto object-cover top-[23%] w-7"
                      src="images/img_group4.png"
                      alt="groupFour"
                    />
                  </div>
                  <Line className="absolute bg-blue_gray-900_01 h-[68px] right-[14%] shadow-bs1 top-[0] w-px" />
                  <div className="absolute flex md:flex-col flex-row md:gap-5 items-start justify-start right-[16%] top-[1%] w-[58%]">
                    <div className="flex flex-col items-start justify-start pb-[236px] md:pr-10 sm:pr-5 pr-[236px] rounded-[28px] w-[43%] md:w-full">
                      <Button className="bg-black-900 cursor-pointer font-bold min-w-[116px] py-2.5 text-base text-center text-white-A700">
                        CATEGORY
                      </Button>
                    </div>
                    <Img
                      className="h-[17px] md:ml-[0] ml-[368px] md:mt-0 mt-[11px]"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                    <div className="flex flex-col items-center justify-start ml-3 md:ml-[0] md:mt-0 mt-1.5 shadow-bs1 w-[13%] md:w-full">
                      <SelectBox
                        className="font-semibold leading-[normal] text-[18.78px] text-left text-white-A700 tracking-[0.38px] w-full"
                        placeholderClassName="text-white-A700"
                        indicator={
                          <Img
                            className="h-7 mr-[0] w-7"
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="groupFive"
                        options={kolkataOptionsList}
                        isSearchable={false}
                        placeholder="Kolkata"
                      />
                    </div>
                  </div>
                  <Img
                    className="common-pointer absolute h-[57px] right-[1%] top-[0] w-[57px]"
                    src="images/img_group2755_gray_900_02.svg"
                    alt="group2755"
                    onClick={() => navigate("/cart")}
                  />
                  <div className="absolute bg-blue_gray-100_26 blue_gray_200_02_black_900_00_border4 h-[218px] outline outline-[1px] right-[0] rounded-[109px] top-[26%] w-[219px]"></div>
                </div>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[75px] w-[96%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-9 w-[24%] md:w-full">
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
                      <div className="flex flex-row font-adamina items-start justify-between mt-[18px] w-full">
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
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[154px] md:mt-0 mt-9">
                      <Text
                        className="sm:text-[17.13px] md:text-[19.13px] text-[21.13px] text-white-A700 tracking-[-0.27px]"
                        size="txtPlusJakartaSansRomanSemiBold2112"
                      >
                        Inside Croma
                      </Text>
                      <a
                        href="javascript:"
                        className="mt-8 text-[16.43px] text-gray-700_01"
                      >
                        <Text size="txtAdaminaRegular1643Gray70001">
                          Terms and Conditions
                        </Text>
                      </a>
                      <a
                        href="javascript:"
                        className="mt-[25px] text-[16.43px] text-gray-700_01"
                      >
                        <Text size="txtAdaminaRegular1643Gray70001">
                          Privacy Policy
                        </Text>
                      </a>
                      <a
                        href="javascript:"
                        className="mt-[23px] text-[16.43px] text-gray-700_01"
                      >
                        <Text size="txtAdaminaRegular1643Gray70001">
                          Cancellation Policy
                        </Text>
                      </a>
                      <Text
                        className="mt-[21px] text-[16.43px] text-gray-700_01"
                        size="txtAdaminaRegular1643Gray70001"
                      >
                        Guest Rules
                      </Text>
                      <Text
                        className="mt-6 text-[16.43px] text-gray-700_01"
                        size="txtAdaminaRegular1643Gray70001"
                      >
                        Reservation Guide
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[72px] md:mt-0 mt-9">
                      <Text
                        className="sm:text-[17.13px] md:text-[19.13px] text-[21.13px] text-white-A700 tracking-[-0.27px]"
                        size="txtPlusJakartaSansRomanSemiBold2112"
                      >
                        About
                      </Text>
                      <Text
                        className="mt-[34px] text-[16.43px] text-gray-700_01"
                        size="txtAdaminaRegular1643Gray70001"
                      >
                        Our Story
                      </Text>
                      <a
                        href="javascript:"
                        className="mt-[21px] text-[16.43px] text-gray-700_01"
                      >
                        <Text size="txtAdaminaRegular1643Gray70001">
                          Contact Us
                        </Text>
                      </a>
                      <Text
                        className="mt-[25px] text-[16.43px] text-gray-700_01"
                        size="txtAdaminaRegular1643Gray70001"
                      >
                        Blog
                      </Text>
                      <Text
                        className="mt-[23px] text-[16.43px] text-gray-700_01"
                        size="txtAdaminaRegular1643Gray70001"
                      >
                        F.A.Q
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col items-start justify-start mb-[9px] md:ml-[0] ml-[97px] w-[37%] md:w-full">
                      <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
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
                      <div className="flex sm:flex-col flex-row font-adamina sm:gap-10 gap-[77px] items-start justify-start mt-8 w-[90%] md:w-full">
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
                      <div className="flex flex-row font-adamina items-start justify-between mt-[21px] w-[84%] md:w-full">
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
                      <div className="flex flex-row font-adamina items-center justify-between mt-[22px] w-[73%] md:w-full">
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
                      <div className="flex flex-row font-adamina items-center justify-between mt-[25px] w-[63%] md:w-full">
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
                      <div className="flex flex-row font-adamina gap-[119px] items-start justify-start mt-[22px] w-[68%] md:w-full">
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
                      <div className="flex flex-row font-adamina items-center justify-between mt-6 w-[68%] md:w-full">
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col items-start justify-start left-[19%] pb-[205px] md:pr-10 sm:pr-5 pr-[205px] rounded-[28px] top-[8%] w-[18%]">
                <Button className="bg-black-900 cursor-pointer font-bold mb-[31px] min-w-[83px] py-2.5 text-base text-center text-white-A700">
                  MENU
                </Button>
              </div>
            </div>
            <div className="absolute flex flex-col inset-x-[0] items-start justify-end mx-auto pr-5 py-5 shadow-bs1 top-[0] w-full">
              <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center mt-0.5 w-full" />
            </div>
          </div>
          <div className="absolute flex flex-col h-full inset-y-[0] items-start justify-start my-auto md:pr-10 sm:pr-5 pr-[181px] py-[181px] right-[0] rotate-[90deg] w-2/5">
            <Img
              className="h-[606px] md:h-auto mb-[766px] mt-[127px] object-cover w-full"
              src="images/img_iphone14prof.png"
              alt="iphone14prof"
            />
          </div>
        </div>
        <Img
          className="absolute h-[1014px] inset-x-[0] mx-auto object-cover top-[4%] w-full"
          src="images/img_bg.png"
          alt="bg"
        />
      </div>
    </>
  );
};

export default PDPgoldOnePage;
