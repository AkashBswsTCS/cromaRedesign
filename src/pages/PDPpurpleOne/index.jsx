import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const kolkataOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PDPpurpleOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 font-plusjakartasans h-[1586px] mx-auto relative w-full">
        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
          <div className="md:h-[199px] h-[70px] md:px-5 relative w-full">
            <div className="absolute bottom-[20%] flex flex-col items-center justify-start left-[0] w-[6%] sm:w-full">
              <SelectBox
                className="font-semibold leading-[normal] text-[16.43px] text-left text-white-A700 tracking-[0.33px] w-full"
                placeholderClassName="text-white-A700"
                indicator={
                  <Img
                    className="h-7 mr-[0] w-7"
                    src="images/img_arrowdown_white_a700.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="language"
                options={languageOptionsList}
                isSearchable={false}
                placeholder="English"
              />
            </div>
            <Img
              className="absolute h-[70px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_rectangle758.png"
              alt="rectangle758"
            />
            <Header1 className="absolute flex md:flex-col flex-row md:gap-5 inset-y-[0] items-center justify-center left-[0] my-auto w-full" />
          </div>
          <div className="flex flex-col mt-[3px] md:px-5 relative w-full">
            <div className="h-[1014px] sm:h-[867px] md:h-[893px] mx-auto w-full">
              <div className="flex flex-col md:gap-10 gap-[108px] h-full justify-start ml-auto mr-[492px] my-auto w-[16%]">
                <div className="bg-blue_gray-100_26 blue_gray_200_black_900_00_border h-[254px] outline outline-[1px] rounded-[127px] w-[255px]"></div>
                <Img
                  className="h-[200px] md:h-auto md:ml-[0] ml-[43px] object-cover w-[201px] sm:w-full"
                  src="images/img_ellipse2.png"
                  alt="ellipseTwo"
                />
              </div>
              <div className="absolute bg-gradient4  h-[1014px] sm:h-[867px] md:h-[893px] inset-[0] justify-center m-auto p-8 sm:px-5 w-full">
                <div className="sm:h-[867px] h-[877px] md:h-[893px] mx-auto w-[90%] md:w-full">
                  <div className="absolute flex flex-col md:gap-10 gap-[95px] h-max inset-[0] justify-center m-auto w-[99%]">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[72%] md:w-full">
                      <Img
                        className="common-pointer h-[41px]"
                        src="images/img_cromalogo.svg"
                        alt="cromalogo"
                        onClick={() => navigate("/")}
                      />
                      <div className="flex flex-col items-center justify-start rounded-[25px] shadow-bs1">
                        <div className="bg-gray-900 flex flex-row items-center justify-between p-1 rounded-[25px] w-full">
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
                    <div className="font-barlow md:h-[722px] h-[723px] md:ml-[0] ml-[114px] relative w-[93%] md:w-full">
                      <Img
                        className="absolute bottom-[3%] h-[75px] object-cover right-[0]"
                        src="images/img_shadow.png"
                        alt="shadow"
                      />
                      <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[56%]">
                        <div className="flex flex-col justify-start w-full">
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
                                From ₹20650.00/mo.Per Month with instant savings
                                Footnote§§ and No Cost EMI Footnote§ or
                                ₹129900.00Footnote‡
                              </Text>
                              <Img
                                className="absolute bottom-[7%] h-[65px] left-[1%] object-cover w-[65px]"
                                src="images/img_img1.png"
                                alt="imgOne"
                              />
                              <div className="absolute bottom-[7%] flex flex-row gap-8 items-start justify-center right-[12%] w-[62%]">
                                <Img
                                  className="common-pointer h-[66px] md:h-auto mt-[3px] object-cover w-[66px]"
                                  src="images/img_img1.png"
                                  alt="imgOne_One"
                                  onClick={() => navigate("/pdpgoldtwo")}
                                />
                                <Img
                                  className="common-pointer h-[66px] md:h-auto mb-[3px] object-cover w-[66px]"
                                  src="images/img_img1.png"
                                  alt="imgOne_Two"
                                  onClick={() => navigate("/pdpwhitetwo")}
                                />
                                <Img
                                  className="common-pointer h-[66px] md:h-auto mb-[3px] object-cover w-[66px]"
                                  src="images/img_img1_66x66.png"
                                  alt="imgOne_Three"
                                  onClick={() => navigate("/pdpblack")}
                                />
                              </div>
                              <Img
                                className="absolute bottom-[3%] h-[76px] left-[0] w-[76px]"
                                src="images/img_contrast.svg"
                                alt="contrast"
                              />
                            </div>
                            <div className="flex flex-row gap-[41px] items-center justify-start ml-0.5 md:ml-[0] mt-[61px] w-[49%] md:w-full">
                              <Button
                                className="common-pointer bg-blue_gray-200_01 cursor-pointer font-bold leading-[normal] min-w-[164px] py-3.5 rounded-[20px] text-base text-black-900 text-center"
                                onClick={() =>
                                  navigate("/pdppurplewithcartitem")
                                }
                              >
                                ADD TO CART
                              </Button>
                              <div className="flex flex-col items-center justify-start rounded-[20px] shadow-bs14 w-[45%]">
                                <div className="bg-blue_gray-200_01 flex flex-col items-center justify-end p-[13px] rounded-[20px] w-full">
                                  <Text
                                    className="text-base text-black-900"
                                    size="txtBarlowBold16"
                                  >
                                    BUY NOW
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[57px] object-cover right-[7%] top-[0] w-[57px]"
                    src="images/img_favorites.png"
                    alt="favorites"
                  />
                  <Line className="absolute bg-blue_gray-900_01 h-[68px] right-[13%] shadow-bs1 top-[0] w-px" />
                  <div className="absolute flex md:flex-col flex-row md:gap-5 items-start justify-start right-[15%] top-[1%] w-[59%]">
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
                    className="absolute h-[57px] right-[0] top-[0] w-[57px]"
                    src="images/img_group2755_gray_900_02.svg"
                    alt="group2755"
                  />
                  <div className="absolute bg-blue_gray-100_26 blue_gray_200_02_black_900_00_border h-[162px] outline outline-[1px] right-[2%] rounded-[81px] top-[33%] w-[163px]"></div>
                </div>
                <div className="absolute flex flex-col items-start justify-start left-[19%] pb-[205px] md:pr-10 sm:pr-5 pr-[205px] rounded-[28px] top-[4%] w-[18%]">
                  <Button className="bg-black-900 cursor-pointer font-bold mb-[31px] min-w-[83px] py-2.5 text-base text-center text-white-A700">
                    MENU
                  </Button>
                </div>
              </div>
            </div>
            <Footer className="bg-gray-900_03 flex items-center justify-center mt-[-6px] mx-auto w-full z-[1]" />
          </div>
        </div>
        <div className="absolute bottom-[0] flex flex-col items-start justify-start pr-[246px] md:px-5 py-[246px] right-[0] w-2/5">
          <Img
            className="h-[695px] md:h-auto mb-[471px] object-cover w-[99%]"
            src="images/img_iphone14prom.png"
            alt="iphone14prom"
          />
        </div>
      </div>
    </>
  );
};

export default PDPpurpleOnePage;
