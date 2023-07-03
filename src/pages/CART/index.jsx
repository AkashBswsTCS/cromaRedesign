import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, SelectBox, Text } from "components";
import CARTStepper from "components/CARTStepper";

const kolkataOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CARTPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 font-plusjakartasans h-[1876px] mx-auto relative w-full">
        <div className="md:h-[1760px] h-[1876px] sm:h-[748px] m-auto md:px-5 w-full">
          <div className="absolute bg-black-900 bottom-[0] flex flex-col inset-x-[0] items-end justify-end mx-auto pt-[19px] px-[19px] w-full">
            <Img
              className="h-[296px] mt-[17px]"
              src="images/img_vector7.svg"
              alt="vectorSeven"
            />
          </div>
          <div
            className="absolute bg-cover bg-no-repeat h-[1584px] md:h-[1760px] sm:h-[748px] inset-x-[0] mx-auto p-[46px] md:px-10 sm:px-5 top-[0] w-full"
            style={{ backgroundImage: "url('images/img_group126.png')" }}
          >
            <div className="absolute font-plusjakartasans sm:h-[277px] h-[291px] md:h-[412px] inset-x-[0] mx-auto top-[7%] w-[90%] md:w-full">
              <div className="flex flex-col m-auto w-full">
                <div className="flex flex-col items-center justify-start mx-auto w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Img
                      className="common-pointer h-[41px] md:mt-0 mt-[9px]"
                      src="images/img_cromalogo.svg"
                      alt="cromalogo"
                      onClick={() => navigate("/")}
                    />
                    <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[413px] md:mt-0 mt-2 rounded-[25px] shadow-bs1 w-[32%] md:w-full">
                      <div className="bg-gray-900_30 flex flex-row items-center justify-between p-1 rounded-[25px] w-full">
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
                    <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[107px] md:mt-0 mt-[19px] shadow-bs1 w-[8%] md:w-full">
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
                    <Line className="bg-blue_gray-900_01 h-[68px] md:h-px md:ml-[0] ml-[21px] shadow-bs1 md:w-full w-px" />
                    <Line className="bg-blue_gray-900_01 h-[68px] md:h-px shadow-bs1 md:w-full w-px" />
                    <Img
                      className="h-[57px] md:ml-[0] ml-[141px] md:mt-0 mt-1 w-[57px]"
                      src="images/img_group2755.svg"
                      alt="group2755"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start ml-[409px] mt-[-55.07px] pb-[236px] md:pr-10 sm:pr-5 pr-[236px] rounded-[28px] w-1/4 z-[1]">
                  <Button className="bg-transparent cursor-pointer font-bold min-w-[116px] py-2.5 text-base text-center text-white-A700">
                    CATEGORY
                  </Button>
                </div>
              </div>
              <div className="absolute bottom-[0] flex flex-col items-start justify-start left-[17%] pb-[205px] md:pr-10 sm:pr-5 pr-[205px] rounded-[28px] w-1/5">
                <div className="flex flex-col items-start justify-end mb-[31px] p-2">
                  <Text
                    className="ml-0.5 md:ml-[0] mt-1 text-base text-white-A700"
                    size="txtPlusJakartaSansRomanBold16"
                  >
                    MENU
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="absolute bg-clip-text bg-gradient2  left-[5%] md:text-5xl text-6xl text-transparent top-[16%]"
              size="txtInterExtraBold60"
            >
              Cart
            </Text>
            <div className="absolute bottom-[22%] flex md:flex-col flex-row font-inter md:gap-10 items-start justify-between left-[5%] w-[58%]">
              <div className="flex flex-col gap-14 items-center justify-start md:mt-0 mt-[62px]">
                <div className="flex flex-col md:gap-10 gap-[65px] items-center justify-start w-full">
                  <div className="flex flex-col md:gap-10 gap-[65px] justify-start w-full">
                    <Line className="bg-blue_gray-900_01 h-px md:ml-[0] ml-[222px] mr-[269px] rotate-[-180deg] shadow-bs1 w-2/5" />
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="bg-white-A700_05 flex flex-col items-start justify-start p-[31px] sm:px-5 rounded-[98px] shadow-bs12 w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 gap-[69px] items-center justify-start mb-[7px] md:ml-[0] ml-[13px] w-[92%] md:w-full">
                          <div className="md:h-56 h-[237px] relative w-[28%] md:w-full">
                            <Img
                              className="absolute bottom-[0] h-[202px] inset-x-[0] mx-auto"
                              src="images/img_img.svg"
                              alt="img"
                            />
                            <Img
                              className="common-pointer absolute h-56 inset-x-[0] mx-auto object-cover top-[0] w-3/4"
                              src="images/img_iphone14prom.png"
                              alt="iphone14prom"
                              onClick={() => navigate("/pdppurpleone")}
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start mb-1.5 w-[63%] md:w-full">
                            <div className="h-[108px] md:h-[91px] relative w-[78%]">
                              <Text
                                className="common-pointer absolute inset-x-[0] leading-[140.00%] mx-auto sm:text-[19px] md:text-[21px] text-[23px] text-white-A700 top-[0] w-full"
                                size="txtInterBold23"
                                onClick={() => navigate("/pdppurpleone")}
                              >
                                <span className="text-white-A700 font-inter text-left font-bold">
                                  Apple -{" "}
                                </span>
                                <span className="text-white-A700 font-inter text-left font-bold">
                                  iPhone 14 Pro 256GB{" "}
                                </span>
                                <span className="text-white-A700 font-inter text-left text-xl font-semibold">
                                  Deep Purple
                                </span>
                              </Text>
                              <Text
                                className="absolute bg-clip-text bg-gradient3  bottom-[0] left-[2%] text-base text-transparent"
                                size="txtInterBold16"
                              >
                                ₹ 1,39,900.00
                              </Text>
                            </div>
                            <Text
                              className="leading-[16.00px] md:ml-[0] ml-[7px] mt-[18px] text-white-A700 text-xs"
                              size="txtInterExtraLight12"
                            >
                              <>
                                Get up to ₹11669.00 savings with eligible
                                card(s)^
                                <br />
                                Pay 15% pa for 6 months:^
                                <br />
                                ₹22317.00/mo.^
                              </>
                            </Text>
                            <div className="flex flex-row items-center justify-between mt-[5px] w-full">
                              <div className="h-10 relative w-[29%]">
                                <Text
                                  className="ml-auto mr-[17px] mt-[9px] text-[13px] text-gray-900_07"
                                  size="txtInterSemiBold13"
                                >
                                  1
                                </Text>
                                <CARTStepper className="absolute h-10 inset-[0] m-auto w-[120px]" />
                              </div>
                              <Img
                                className="h-[39px] rounded-[18px]"
                                src="images/img_trash.svg"
                                alt="trash"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
                    <div className="bg-white-A700_05 flex flex-col items-center justify-end p-1.5 rounded-[45px] shadow-bs12 w-full">
                      <div className="flex flex-col gap-[7px] items-center justify-start mt-5 w-[89%] md:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                          <Img
                            className="h-[34px]"
                            src="images/img_cut.svg"
                            alt="cut"
                          />
                          <Text
                            className="sm:ml-[0] ml-[17px] sm:mt-0 mt-2 sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                            size="txtInterSemiBold21"
                          >
                            Add gift wrapping and card
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[279px] sm:mt-0 mt-1.5 sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                            size="txtInterSemiBold21"
                          >
                            Add
                          </Text>
                        </div>
                        <Text
                          className="text-[13px] text-gray-900_07"
                          size="txtInterSemiBold13"
                        >
                          1
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
                  <div className="bg-white-A700_05 flex flex-col items-center justify-end p-1.5 rounded-[45px] shadow-bs12 w-full">
                    <div className="flex flex-col items-center justify-start mt-5 w-[90%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                        <Img
                          className="h-[37px] w-[37px]"
                          src="images/img_rewind.svg"
                          alt="rewind"
                        />
                        <Text
                          className="mb-0.5 md:ml-[0] ml-[13px] md:mt-0 mt-2 sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                          size="txtInterSemiBold21"
                        >
                          Find out how soon you can get this item
                        </Text>
                        <SelectBox
                          className="md:flex-1 font-semibold md:ml-[0] ml-[84px] md:mt-0 mt-1.5 sm:text-[17px] md:text-[19px] text-[21px] text-left text-white-A700 w-[18%] md:w-full"
                          placeholderClassName="text-white-A700"
                          indicator={
                            <Img
                              className="h-7 mr-[0] w-7"
                              src="images/img_arrowdown.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="language"
                          options={languageOptionsList}
                          isSearchable={false}
                          placeholder="Pincode "
                        />
                      </div>
                      <Text
                        className="mt-1 text-[13px] text-gray-900_07"
                        size="txtInterSemiBold13"
                      >
                        1
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Line className="bg-blue_gray-900_01 h-[597px] md:h-px mb-[151px] shadow-bs1 md:w-full w-px" />
            </div>
            <div className="absolute flex flex-col font-inter items-center justify-start left-[7%] top-1/4 w-[44%]">
              <div className="bg-white-A700_05 flex md:flex-col flex-row md:gap-5 items-start justify-end p-1.5 rounded-[45px] shadow-bs12 w-full">
                <Img
                  className="h-[34px] md:mt-0 my-[21px] w-[34px]"
                  src="images/img_computer_white_a700.svg"
                  alt="computer"
                />
                <Text
                  className="md:ml-[0] ml-[23px] md:mt-0 mt-7 sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                  size="txtInterSemiBold21"
                >
                  Apply Coupon
                </Text>
                <Text
                  className="md:ml-[0] ml-[120px] md:mt-0 mt-[61px] text-[13px] text-gray-900_07"
                  size="txtInterSemiBold13"
                >
                  1
                </Text>
                <Img
                  className="h-7 md:ml-[0] ml-[305px] mr-[29px] md:mt-0 mt-[25px] w-7"
                  src="images/img_arrowright_teal_a400.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-[57px] items-end justify-start p-3 right-[12%] top-[7%] w-[57px]"
              style={{ backgroundImage: "url('images/img_group2772.svg')" }}
            >
              <Img
                className="h-[25px] md:h-auto my-0.5 object-cover"
                src="images/img_group4.png"
                alt="groupFour"
              />
            </div>
            <Img
              className="absolute h-14 right-[7%] top-[7%]"
              src="images/img_computer_gray_900_02.svg"
              alt="computer_One"
            />
            <div className="absolute flex flex-col font-inter items-center justify-start right-[3%] top-[24%] w-[34%]">
              <div className="bg-white-A700_05 flex flex-col items-start justify-start p-[35px] sm:px-5 rounded-[35px] shadow-bs12 w-full">
                <Text
                  className="ml-3 md:ml-[0] sm:text-[17px] md:text-[19px] text-[21px] text-white-A700_a1"
                  size="txtInterBold21"
                >
                  Shipping Address
                </Text>
                <Text
                  className="leading-[23.00px] ml-3 md:ml-[0] mt-[21px] text-[17px] text-white-A700"
                  size="txtInterMedium17"
                >
                  <>
                    Chhottuu
                    <br />
                    ANURAG APARTMENT, BC79,NEAR KAMAL PARK, KESTOPUR BC 79,
                    OPPOSITE OF THE SOLEUS GYM, North 24 Parganas, West Bengal -
                    700101| Mobile: 7001759167
                  </>
                </Text>
                <div className="md:h-[114px] h-[33px] mb-2 md:ml-[0] ml-[18px] mt-[78px] relative w-[57%]">
                  <SelectBox
                    className="absolute bottom-[0] font-semibold inset-x-[0] mx-auto text-[18.5px] text-left text-white-A700_a1 w-full"
                    placeholderClassName="text-white-A700_a1"
                    indicator={
                      <Img
                        className="h-7 mr-[0] w-7 right-[0] absolute"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="language_One"
                    options={languageOneOptionsList}
                    isSearchable={false}
                    placeholder="Any other address?  Choose"
                  />
                  <Text
                    className="absolute right-[18%] text-[13px] text-gray-900_07 top-[0]"
                    size="txtInterSemiBold13"
                  >
                    1
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[23%] flex font-inter md:h-[459px] h-[462px] sm:h-[646px] justify-end right-[3%] w-[34%] sm:w-full">
              <div className="bg-teal-A400_02 flex flex-col h-full items-end justify-start mb-[46px] mt-auto mx-auto p-[33px] sm:px-5 rounded-[38px] shadow-bs13 w-[83%]">
                <Img
                  className="h-2.5 mr-[113px] w-[11px]"
                  src="images/img_upload_black_900.svg"
                  alt="upload"
                />
              </div>
              <div className="absolute bg-white-A700_05 flex flex-col h-full inset-[0] items-center justify-center m-auto p-12 md:px-10 sm:px-5 rounded-[35px] shadow-bs12 w-full">
                <div className="flex flex-col items-start justify-start mb-[22px] w-full">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-[21px] text-white-A700_a1"
                    size="txtInterBold21"
                  >
                    Order Summary ( 1 item )
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly mt-16 w-full">
                    <Text
                      className="leading-[23.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtInterBold22"
                    >
                      <>
                        Original Price
                        <br />
                        <br />
                        Delivery
                        <br />
                        <br />
                        Total
                      </>
                    </Text>
                    <Text
                      className="leading-[23.00px] text-right text-white-A700 text-xl"
                      size="txtInterMedium20"
                    >
                      <>
                        ₹1,39,900.00
                        <br />
                        <br />
                        Free
                        <br />
                        <br />
                        ₹1,39,900.00
                      </>
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[183px] mt-[52px] text-2xl md:text-[22px] text-black-900 text-right sm:text-xl"
                    size="txtInterSemiBold24"
                  >
                    Checkout
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[3%] flex flex-col inset-x-[0] items-center justify-start max-w-[1471px] mx-auto md:px-5 w-full">
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
                    alt="arrowright_One"
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
                <Text size="txtAdaminaRegular1643Gray70001">Contact Us</Text>
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
        <header className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto md:px-5 shadow-bs1 top-[0] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mr-[127px] my-[21px] md:pl-10 sm:pl-5 pl-[231px] w-[93%]">
            <div className="flex md:flex-col flex-row gap-[13px] items-center justify-center w-[47%] md:w-full">
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
                  alt="upload_One"
                />
              </div>
            </div>
            <a
              href="javascript:"
              className="md:ml-[0] ml-[362px] text-[16.43px] text-white-A700 tracking-[0.33px]"
            >
              <Text size="txtPlusJakartaSansRomanSemiBold1643">Contact Us</Text>
            </a>
            <Text
              className="ml-9 md:ml-[0] text-[16.43px] text-white-A700 tracking-[0.33px]"
              size="txtPlusJakartaSansRomanSemiBold1643"
            >
              Blog
            </Text>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[38px] w-[11%] md:w-full">
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
          </div>
        </header>
      </div>
    </>
  );
};

export default CARTPage;
