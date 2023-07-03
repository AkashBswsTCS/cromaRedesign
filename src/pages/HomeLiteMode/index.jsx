import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  SelectBox,
  Slider,
  Text,
} from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const kolkataOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HomeLiteModePage = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-plusjakartasans items-center justify-end mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs8 w-full" />
        <div className="h-[657px] sm:h-[693px] md:h-[873px] max-w-[1510px] mt-[43px] mx-auto md:px-5 relative w-full">
          <div className="absolute flex flex-col items-center justify-start right-[11%] top-[0] w-[9%]">
            <div className="flex flex-row gap-[22px] items-end justify-between w-full">
              <Line className="bg-blue_gray-900_01 h-[68px] shadow-bs1 w-px" />
              <Img
                className="common-pointer h-[54px] md:h-auto mb-[3px] mt-[11px] object-cover"
                src="images/img_group2786.png"
                alt="group2786"
                onClick={() => navigate("/")}
              />
            </div>
          </div>
          <div className="flex flex-row gap-3 h-full items-start justify-center ml-auto mr-[317px] mt-[19px] w-[10%]">
            <Img
              className="h-[15px] mt-1 w-3.5"
              src="images/img_eye_black_900.svg"
              alt="eye"
            />
            <div className="flex flex-col items-center justify-start shadow-bs1 w-[81%] sm:w-full">
              <SelectBox
                className="font-semibold leading-[normal] text-[18.78px] text-black-900 text-left tracking-[0.38px] w-full"
                placeholderClassName="text-black-900"
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
          <div className="absolute sm:h-[650px] h-[652px] md:h-[830px] inset-[0] justify-center m-auto w-full">
            <div className="sm:h-[650px] h-[652px] md:h-[830px] m-auto w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Img
                      className="h-[41px] md:mt-0 mt-1"
                      src="images/img_cromalogo_white_a700.svg"
                      alt="cromalogo"
                    />
                    <Button className="cursor-pointer font-semibold leading-[normal] min-w-[221px] md:ml-[0] ml-[393px] md:mt-0 mt-4 rounded-[11px] shadow-bs1 text-[17px] text-black-900 text-center tracking-[0.34px]">
                      BEST OFFERS AT CROMA
                    </Button>
                    <Img
                      className="h-[57px] md:h-auto md:ml-[0] ml-[566px] object-cover w-[57px]"
                      src="images/img_group2785.png"
                      alt="group2785"
                    />
                    <Img
                      className="common-pointer h-[57px] md:ml-[0] ml-[29px] w-[57px]"
                      src="images/img_question.svg"
                      alt="question"
                      onClick={() => navigate("/cart")}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start mt-10 rounded-[41px] shadow-bs9 w-[52%] md:w-full">
                    <div className="bg-white-A700 flex flex-row sm:gap-10 items-center justify-between p-[7px] rounded-[41px] w-full">
                      <div className="flex flex-col items-center justify-start ml-[27px]">
                        <Text
                          className="text-[18.78px] text-black-900 tracking-[0.19px]"
                          size="txtPlusJakartaSansRomanMedium1878Black900"
                        >
                          Where you want to go?
                        </Text>
                      </div>
                      <Button className="bg-gray-100 flex h-[68px] items-center justify-center mr-[5px] p-[19px] rounded-[50%] w-[68px]">
                        <Img
                          className="h-7"
                          src="images/img_search_teal_a400.svg"
                          alt="search"
                        />
                      </Button>
                    </div>
                  </div>
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    activeIndex={sliderState}
                    responsive={{
                      0: { items: 1 },
                      550: { items: 1 },
                      1050: { items: 1 },
                    }}
                    onSlideChanged={(e) => {
                      setsliderState(e?.item);
                    }}
                    ref={sliderRef}
                    className="mt-[61px] w-[98%]"
                    items={[...Array(3)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="flex flex-col items-center justify-start mx-2.5">
                          <div className="h-[410px] relative w-full">
                            <Img
                              className="h-[410px] m-auto object-cover rounded-[86px] w-full"
                              src="images/img_image1.png"
                              alt="imageOne"
                            />
                            <Button
                              className="common-pointer absolute bg-black-900_6d flex h-[53px] inset-y-[0] items-center justify-center my-auto p-4 right-[1%] rounded-[26px] w-[53px]"
                              onClick={() => navigate("/home1scrollupper")}
                            >
                              <Img
                                className="h-[19px]"
                                src="images/img_arrowright_blue_gray_800.svg"
                                alt="arrowright"
                              />
                            </Button>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                    renderDotsItem={({ isActive }) => {
                      if (isActive) {
                        return (
                          <div className="inline-block cursor-pointer rounded-[50%] h-[7px] bg-teal-A400 w-[7px]" />
                        );
                      }
                      return (
                        <div
                          className="inline-block cursor-pointer rounded-[50%] h-[7px] bg-white-A700_2b w-[7px]"
                          role="button"
                          tabIndex={0}
                        />
                      );
                    }}
                  />
                </div>
              </div>
              <div className="absolute flex flex-col items-start justify-start left-[16%] pb-[205px] md:pr-10 sm:pr-5 pr-[205px] rounded-[28px] top-[1%] w-1/5">
                <div className="flex flex-col items-start justify-end mb-[31px] p-2 rounded-[21px]">
                  <Text
                    className="ml-0.5 md:ml-[0] mt-1 text-base text-black-900"
                    size="txtPlusJakartaSansRomanBold16Black900"
                  >
                    MENU
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col items-start justify-start left-[26%] pb-[236px] md:pr-10 sm:pr-5 pr-[236px] rounded-[28px] top-[1%] w-1/4">
              <Button className="cursor-pointer font-bold min-w-[116px] py-2.5 rounded-[21px] text-base text-black-900 text-center">
                CATEGORY
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end mt-[33px] overflow-auto w-full">
          <div className="md:ml-[0] ml-[803px] overflow-x-auto w-[93%]">
            <div className="flex flex-row md:gap-10 items-center justify-between w-full">
              <PagerIndicator
                className="flex h-[7px] w-[53px]"
                count={3}
                activeCss="inline-block cursor-pointer rounded-[50%] h-[7px] bg-teal-A400 w-[7px]"
                activeIndex={sliderState}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-[7px] bg-white-A700_2b w-[7px]"
                sliderRef={sliderRef}
                selectedWrapperCss="inline-block mx-[7.98px]"
                unselectedWrapperCss="inline-block mx-[7.98px]"
              />
              <Img
                className="h-[7px]"
                src="images/img_arrowup_white_a700.svg"
                alt="arrowup"
              />
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[140px] items-start justify-start max-w-[1425px] mt-[127px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start shadow-bs10 w-[31%] md:w-full">
                <div className="flex sm:flex-col flex-row gap-[38px] items-start justify-between w-full">
                  <div
                    className="bg-cover bg-no-repeat flex sm:flex-1 flex-col h-[167px] items-center justify-start p-[3px] w-[166px] sm:w-full"
                    style={{
                      backgroundImage: "url('images/img_group145.svg')",
                    }}
                  >
                    <Img
                      className="h-[133px] md:h-auto my-[13px] object-cover rounded-[66px] w-full"
                      src="images/img_rectangle2_1.png"
                      alt="rectangleTwo"
                    />
                  </div>
                  <div className="flex flex-col gap-3.5 items-start justify-start sm:mt-0 mt-[23px]">
                    <Text
                      className="sm:text-[20.65px] md:text-[22.65px] text-[24.65px] text-black-900 tracking-[0.49px]"
                      size="txtPlusJakartaSansRomanBold2465Black900"
                    >
                      <>
                        Don’t wait for
                        <br />
                        out of stock!
                      </>
                    </Text>
                    <Text
                      className="text-[19.95px] text-blue_gray-300"
                      size="txtPlusJakartaSansRegular1995"
                    >
                      Hurry! Get the best deals
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 sm:flex-col flex-row gap-[39px] items-start justify-center mb-2 w-[30%] md:w-full">
                <Img
                  className="h-[173px] md:h-auto object-cover w-[39%] sm:w-full"
                  src="images/img_uphotoroom1.png"
                  alt="uphotoroomOne"
                />
                <div className="flex flex-col gap-3 items-start justify-start sm:mt-0 mt-9">
                  <Text
                    className="sm:text-[20.65px] md:text-[22.65px] text-[24.65px] text-black-900 tracking-[0.49px]"
                    size="txtPlusJakartaSansMedium2465Black900"
                  >
                    <>
                      Ready for <br />
                      Neucoins?{" "}
                    </>
                  </Text>
                  <Text
                    className="text-[19.95px] text-blue_gray-300"
                    size="txtPlusJakartaSansRegular1995"
                  >
                    <>
                      Get upto 10% Neucoins <br />
                      on every purchase
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start rounded-[71px] shadow-bs2 w-[27%] md:w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Img
                    className="h-[143px] md:h-auto rounded-[50%] w-[143px]"
                    src="images/img_rectangle2.png"
                    alt="rectangleTwo_One"
                  />
                  <div className="flex flex-col gap-[11px] items-start justify-start">
                    <Text
                      className="sm:text-[20.65px] md:text-[22.65px] text-[24.65px] text-black-900 tracking-[0.49px]"
                      size="txtPlusJakartaSansMedium2465Black900"
                    >
                      <>
                        Special gift for <br />
                        loved ones
                      </>
                    </Text>
                    <Text
                      className="text-[19.95px] text-blue_gray-300"
                      size="txtPlusJakartaSansRegular1995"
                    >
                      <>
                        Take your dream.
                        <br />
                        Time to purchase.
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="sm:text-[33.56px] md:text-[35.56px] text-[37.56px] text-black-900 text-shadow-ts tracking-[0.75px]"
              size="txtPlusJakartaSansRomanBold3756Black900"
            >
              Best offers at Croma
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[18px] items-center justify-end md:ml-[0] ml-[74px] mt-[51px] md:px-5 w-[96%] md:w-full">
            <List
              className="sm:flex-col flex-row gap-[18px] grid md:grid-cols-1 grid-cols-2 w-3/5 md:w-full"
              orientation="horizontal"
            >
              <div className="hover:cursor-pointer hover:flex flex md:h-[627px] h-[631px] hover:justify-end justify-end sm:ml-[0] hover:mx-0 hover:relative relative rounded-[23px] hover:shadow-bs11 shadow-bs11 hover:w-full w-full">
                <Button
                  className="common-pointer absolute bg-teal-A700 cursor-pointer flex items-center justify-center mb-[43px] min-w-[215px] ml-10 mt-auto px-[35px] py-[19px] rounded-[32px] shadow-bs3"
                  onClick={() => navigate("/pdppurpleone")}
                  rightIcon={
                    <div className="h-3 mt-1.5 mb-[7px] ml-[9px] w-3 bg-black-900 left-[2%] absolute inset-y-[1%]">
                      <Img
                        className="h-3 absolute"
                        src="images/img_upload.svg"
                        alt="upload"
                      />
                    </div>
                  }
                >
                  <div className="font-semibold sm:px-5 text-[19.95px] text-center text-gray-900_03">
                    Know more{" "}
                  </div>
                </Button>
                <div className="absolute border border-gray-900_47 border-solid flex flex-col gap-9 h-full inset-[0] items-center justify-center m-auto p-[23px] sm:px-5 rounded-[23px] w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover rounded-[34px] w-full"
                    src="images/img_rectangle285.png"
                    alt="rectangle285"
                  />
                  <div className="flex flex-col items-start justify-start mb-[19px] w-[91%] md:w-full">
                    <Img
                      className="h-[21px] ml-0.5 md:ml-[0]"
                      src="images/img_group_gray_100_01.svg"
                      alt="group"
                    />
                    <Text
                      className="mt-[27px] md:text-2xl sm:text-[22px] text-[26px] text-black-900 tracking-[0.52px]"
                      size="txtPlusJakartaSansRomanBold26Black900"
                    >
                      Apple iPhone 14 Pro{" "}
                    </Text>
                    <Text
                      className="ml-1.5 md:ml-[0] mt-4 sm:text-[17.13px] md:text-[19.13px] text-[21.13px] text-black-900 text-right tracking-[0.42px]"
                      size="txtPlusJakartaSansRomanSemiBold2112Black900"
                    >
                      From ₹129900.00* before trade‑in
                    </Text>
                    <Button className="bg-gray-100_01 flex h-[71px] items-center justify-center md:ml-[0] ml-[315px] mt-[49px] p-[21px] sm:px-5 rounded-[35px] w-[71px]">
                      <Img
                        className="h-7"
                        src="images/img_location.svg"
                        alt="location"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer hover:flex flex md:h-[625px] h-[631px] hover:justify-end justify-end sm:ml-[0] hover:mx-0 hover:relative relative rounded-[23px] hover:shadow-bs11 shadow-bs11 hover:w-full w-full">
                <Button
                  className="absolute bg-teal-A700 cursor-pointer flex items-center justify-center mb-[43px] min-w-[215px] ml-10 mt-auto px-[35px] py-[19px] rounded-[32px] shadow-bs4"
                  rightIcon={
                    <div className="h-3 mt-1.5 mb-[7px] ml-[9px] w-3 bg-black-900 left-[2%] absolute inset-y-[1%]">
                      <Img
                        className="h-3 absolute"
                        src="images/img_upload.svg"
                        alt="upload"
                      />
                    </div>
                  }
                >
                  <div className="font-semibold sm:px-5 text-[19.95px] text-center text-gray-900_03">
                    Know more{" "}
                  </div>
                </Button>
                <div className="absolute border border-gray-900_47 border-solid flex flex-col h-full inset-[0] justify-center m-auto p-[23px] sm:px-5 rounded-[23px] w-full">
                  <Img
                    className="h-[282px] sm:h-auto object-cover rounded-[34px] w-full"
                    src="images/img_rectangle285_282x422.png"
                    alt="rectangle285"
                  />
                  <div className="flex flex-col items-start justify-start ml-5 md:ml-[0] mt-[35px] w-[84%] md:w-full">
                    <Img
                      className="h-[21px] ml-0.5 md:ml-[0]"
                      src="images/img_group_gray_100_01.svg"
                      alt="group"
                    />
                    <Text
                      className="mt-6 md:text-2xl sm:text-[22px] text-[26px] text-black-900 tracking-[0.52px]"
                      size="txtPlusJakartaSansRomanBold26Black900"
                    >
                      IFB Executive ZXS
                    </Text>
                    <Text
                      className="ml-2.5 md:ml-[0] mt-4 sm:text-[17.13px] md:text-[19.13px] text-[21.13px] text-black-900 text-right tracking-[0.42px]"
                      size="txtPlusJakartaSansRomanSemiBold2112Black900"
                    >
                      From ₹61191.00* before trade‑in
                    </Text>
                  </div>
                  <Button className="bg-gray-100_01 flex h-[71px] items-center justify-center mb-[19px] md:ml-[0] ml-[335px] mr-4 mt-[51px] p-[21px] sm:px-5 rounded-[35px] w-[71px]">
                    <Img
                      className="h-7"
                      src="images/img_location.svg"
                      alt="location"
                    />
                  </Button>
                </div>
              </div>
            </List>
            <div className="overflow-x-auto w-3/5">
              <div className="flex relative w-full">
                <div className="flex my-auto w-[67%] md:w-full">
                  <div className="flex md:h-[627px] h-[631px] justify-end my-auto rounded-[23px] shadow-bs1 w-[74%] sm:w-full">
                    <Button
                      className="absolute bg-teal-A700 cursor-pointer flex items-center justify-center mb-[43px] min-w-[215px] ml-10 mt-auto px-[35px] py-[19px] rounded-[32px] shadow-bs5"
                      rightIcon={
                        <div className="h-3 mt-1.5 mb-[7px] ml-[9px] w-3 bg-black-900 left-[2%] absolute inset-y-[1%]">
                          <Img
                            className="h-3 absolute"
                            src="images/img_upload.svg"
                            alt="upload"
                          />
                        </div>
                      }
                    >
                      <div className="font-semibold sm:px-5 text-[19.95px] text-center text-gray-900_03">
                        Know more{" "}
                      </div>
                    </Button>
                    <div className="absolute border border-gray-900_47 border-solid flex flex-col gap-9 h-full inset-[0] items-center justify-center m-auto p-[23px] sm:px-5 rounded-[23px] w-full">
                      <Img
                        className="h-[282px] md:h-auto object-cover rounded-[34px] w-full"
                        src="images/img_rectangle285_1.png"
                        alt="rectangle285"
                      />
                      <div className="flex flex-col items-start justify-start mb-[19px] w-[91%] md:w-full">
                        <Img
                          className="h-[21px] ml-0.5 md:ml-[0]"
                          src="images/img_group_gray_100_01_21x138.svg"
                          alt="group"
                        />
                        <Text
                          className="mt-[26px] md:text-2xl sm:text-[22px] text-[26px] text-black-900 tracking-[0.52px]"
                          size="txtPlusJakartaSansRomanBold26Black900"
                        >
                          IFB 656 ETC/E RCT
                        </Text>
                        <Text
                          className="ml-1.5 md:ml-[0] mt-[15px] sm:text-[17.13px] md:text-[19.13px] text-[21.13px] text-black-900 text-right tracking-[0.42px]"
                          size="txtPlusJakartaSansRomanSemiBold2112Black900"
                        >
                          From ₹69000.00* before trade‑in
                        </Text>
                        <Button className="bg-gray-100_01 flex h-[71px] items-center justify-center md:ml-[0] ml-[315px] mt-[51px] p-[21px] sm:px-5 rounded-[35px] w-[71px]">
                          <Img
                            className="h-7"
                            src="images/img_location.svg"
                            alt="location"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-[631px] ml-[-9px] my-auto object-cover w-[28%] z-[1]"
                    src="images/img_rectangle760.png"
                    alt="rectangle760"
                  />
                </div>
                <div className="flex md:h-[623px] h-[631px] justify-end ml-[-149.48px] my-auto w-1/2 sm:w-full z-[1]">
                  <Button
                    className="absolute bg-teal-A400 cursor-pointer flex items-center justify-center mb-[43px] min-w-[215px] ml-10 mt-auto px-[35px] py-[19px] rounded-[32px]"
                    rightIcon={
                      <div className="h-3 mt-1.5 mb-[7px] ml-[9px] w-3 bg-black-900 left-[2%] absolute inset-y-[1%]">
                        <Img
                          className="h-3 absolute"
                          src="images/img_upload.svg"
                          alt="upload"
                        />
                      </div>
                    }
                  >
                    <div className="font-semibold sm:px-5 text-[19.95px] text-center text-gray-900_03">
                      Know more{" "}
                    </div>
                  </Button>
                  <div className="absolute border border-gray-900_47 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[15px] rounded-[23px] w-full">
                    <div className="h-[343px] md:h-[347px] mt-2 relative w-[98%] sm:w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[99%]">
                        <div className="flex flex-col gap-9 justify-start w-full">
                          <Img
                            className="h-[282px] sm:h-auto object-cover rounded-bl-[34px] rounded-br-[34px] w-full"
                            src="images/img_rectangle285.png"
                            alt="rectangle285_One"
                          />
                          <Img
                            className="h-[21px] md:ml-[0] ml-[22px]"
                            src="images/img_group.svg"
                            alt="group_One"
                          />
                        </div>
                      </div>
                      <div
                        className="common-pointer absolute bg-gray-100_01 bottom-[0] flex flex-col h-[100px] items-center justify-start left-[0] p-[30px] sm:px-5 rounded-[50%] w-[100px]"
                        onClick={() => navigate("/home2scrolllower")}
                      >
                        <Img
                          className="h-[37px] w-[37px]"
                          src="images/img_arrowright_blue_gray_800_37x37.svg"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                    <Text
                      className="mt-[23px] md:text-2xl sm:text-[22px] text-[26px] text-black-900 tracking-[0.52px]"
                      size="txtPlusJakartaSansRomanBold26Black900"
                    >
                      Apple iPhone 14 Pro{" "}
                    </Text>
                    <Text
                      className="mt-4 sm:text-[17.13px] md:text-[19.13px] text-[21.13px] text-black-900 text-right tracking-[0.42px]"
                      size="txtPlusJakartaSansRomanSemiBold2112Black900"
                    >
                      From ₹129900.00* before trade‑in
                    </Text>
                    <Button className="bg-gray-900_03 flex h-[71px] items-center justify-center mb-[27px] mt-[49px] p-[21px] sm:px-5 rounded-[35px] w-[71px]">
                      <Img
                        className="h-7"
                        src="images/img_favorite.svg"
                        alt="favorite"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button className="border border-gray-900_47_01 border-solid cursor-pointer font-semibold min-w-[247px] md:ml-[0] ml-[731px] mr-[711px] mt-12 py-[21px] rounded-[35px] sm:text-[17.13px] md:text-[19.13px] text-[21.13px] text-black-900 text-center">
            More Offers
          </Button>
          <div className="h-[508px] md:h-[549px] max-w-[1404px] mt-[41px] mx-auto md:px-5 relative w-full">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState1}
              responsive={{
                0: { items: 1 },
                550: { items: 1 },
                1050: { items: 1 },
              }}
              onSlideChanged={(e) => {
                setsliderState1(e?.item);
              }}
              ref={sliderRef1}
              className="m-auto w-full"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex flex-col items-center justify-start mx-2.5 pb-9 shadow-bs1">
                    <Img
                      className="h-[471px] md:h-auto object-cover rounded-bl-[182px] rounded-br-[182px] w-full"
                      src="images/img_image3.png"
                      alt="imageThree"
                    />
                  </div>
                </React.Fragment>
              ))}
              renderDotsItem={({ isActive }) => {
                if (isActive) {
                  return (
                    <div className="inline-block cursor-pointer rounded-[50%] h-1.5 bg-black-900 w-1.5 relative" />
                  );
                }
                return (
                  <div
                    className="inline-block cursor-pointer rounded-[50%] h-1.5 bg-white-A700_2b w-1.5 relative"
                    role="button"
                    tabIndex={0}
                  />
                );
              }}
            />
            <PagerIndicator
              className="absolute bottom-[0] flex h-1.5 right-[46%] w-[52px]"
              count={3}
              activeCss="inline-block cursor-pointer rounded-[50%] h-1.5 bg-black-900 w-1.5 relative"
              activeIndex={sliderState1}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-1.5 bg-white-A700_2b w-1.5 relative"
              sliderRef={sliderRef1}
              selectedWrapperCss="inline-block mx-[8.04px]"
              unselectedWrapperCss="inline-block mx-[8.04px]"
            />
          </div>
          <div className="flex flex-col gap-[13px] items-center justify-start mt-[15px] w-full">
            <div className="sm:h-[2351px] h-[2414px] md:h-[4720px] md:px-5 relative w-full">
              <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[138px] inset-x-[0] items-center justify-start mx-auto w-full">
                <div className="md:h-[2909px] sm:h-[930px] h-[931px] relative w-[93%] md:w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="leading-[123.40%] sm:text-[42.33px] md:text-[48.33px] text-[56.33px] text-black-900 text-shadow-ts tracking-[1.13px]"
                        size="txtPlusJakartaSansRomanBold5633Black900"
                      >
                        <>
                          Explore what
                          <br />
                          you want.
                        </>
                      </Text>
                      <Button className="bg-gray-100_01 cursor-pointer font-bold min-w-[76px] md:ml-[0] ml-[822px] mt-16 py-2 rounded-[17px] text-[12.91px] text-center text-red-A700 tracking-[4.52px]">
                        NEW
                      </Button>
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-6 md:ml-[0] mt-[7px] w-3/5 md:w-full">
                        <Text
                          className="sm:text-[25px] md:text-[27px] text-[29px] text-black-900 text-shadow-ts"
                          size="txtPlusJakartaSansRomanSemiBold29Black900"
                        >
                          New arrivals
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[62px] md:mt-0 mt-[7px] sm:text-[21.82px] md:text-[23.82px] text-[25.82px] text-gray-700 text-shadow-ts"
                          size="txtPlusJakartaSansRomanSemiBold2582"
                        >
                          Mobiles
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[46px] md:mt-0 mt-[3px] sm:text-[21.82px] md:text-[23.82px] text-[25.82px] text-gray-700 text-shadow-ts"
                          size="txtPlusJakartaSansRomanSemiBold2582"
                        >
                          Speakers
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[45px] md:mt-0 mt-[3px] sm:text-[21.82px] md:text-[23.82px] text-[25.82px] text-gray-700 text-shadow-ts"
                          size="txtPlusJakartaSansRomanSemiBold2582"
                        >
                          Laptops
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[55px] md:mt-0 mt-[7px] sm:text-[21.82px] md:text-[23.82px] text-[25.82px] text-gray-700 text-shadow-ts"
                          size="txtPlusJakartaSansRomanSemiBold2582"
                        >
                          Washing machines
                        </Text>
                      </div>
                      <Line className="bg-gray-900_01 h-px mt-[18px] shadow-bs1 w-[93%]" />
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[68px] w-full">
                        <div className="bg-gray-100_01 flex md:flex-1 flex-col gap-[39px] justify-center p-6 sm:px-5 rounded-[35px] w-[24%] md:w-full">
                          <div className="bg-gray-300 flex flex-col h-[104px] items-center justify-end mr-[221px] mt-[158px] p-[25px] sm:px-5 rounded-[50%] w-[104px]">
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[51px] items-start justify-start p-[7px] w-[51px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_transfer1_black_900.svg')",
                              }}
                            >
                              <Img
                                className="h-7 md:h-auto mb-2 object-cover w-[65%]"
                                src="images/img_images1_28x24.png"
                                alt="imagesOne"
                              />
                            </div>
                          </div>
                          <Text
                            className="mb-9 ml-2 md:ml-[0] mr-[22px] sm:text-[28.86px] md:text-[30.86px] text-[32.86px] text-white-A700 tracking-[0.66px]"
                            size="txtPlusJakartaSansMedium3286"
                          >
                            <span className="text-black-900 font-plusjakartasans text-left font-semibold">
                              <>
                                Save an extra
                                <br />
                              </>
                            </span>
                            <span className="text-black-900 font-plusjakartasans text-left font-extrabold">
                              ₹‎10000
                            </span>
                            <span className="md:text-[22px] sm:text-xl text-red-500 font-plusjakartasans text-left text-2xl font-semibold italic">
                              *
                            </span>
                            <span className="md:text-[23px] sm:text-[21px] text-black-900 font-plusjakartasans text-left text-[25px] font-bold">
                              {" "}
                            </span>
                            <span className="text-black-900 font-plusjakartasans text-left font-bold">
                              on
                            </span>
                            <span className="md:text-[23px] sm:text-[21px] text-black-900 font-plusjakartasans text-left text-[25px] font-bold">
                              {" "}
                            </span>
                            <span className="text-black-900 font-plusjakartasans text-left font-semibold">
                              <>
                                every <br />
                                most products in
                                <br />
                                April.
                              </>
                            </span>
                          </Text>
                        </div>
                        <div className="h-[551px] relative rounded-[35px] shadow-bs1 w-[24%] md:w-full">
                          <Img
                            className="h-[551px] m-auto object-cover rounded-[35px] w-full"
                            src="images/img_rectangle9.png"
                            alt="rectangleNine"
                          />
                          <div className="absolute h-[551px] inset-[0] justify-center m-auto w-full">
                            <Img
                              className="h-[551px] m-auto object-cover rounded-[35px] w-full"
                              src="images/img_rectangle8.png"
                              alt="rectangleEight"
                            />
                            <div className="absolute bg-gradient  bottom-[0] flex flex-col gap-[19px] inset-x-[0] items-start justify-center mx-auto p-[17px] rounded-[35px] w-full">
                              <Text
                                className="leading-[37.00px] md:ml-[0] ml-[15px] mt-[92px] sm:text-[22.99px] md:text-[24.99px] text-[26.99px] text-white-A700 tracking-[0.54px] w-[96%] sm:w-full"
                                size="txtPlusJakartaSansMedium2699"
                              >
                                Bose QuietComfort® 45 Headphones
                              </Text>
                              <Text
                                className="mb-12 md:ml-[0] ml-[15px] text-[17.6px] text-white-A700 tracking-[3.52px]"
                                size="txtPlusJakartaSansBold176"
                              >
                                BOSE
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="h-[551px] relative rounded-[35px] shadow-bs1 w-[24%] md:w-full">
                          <Img
                            className="h-[551px] m-auto object-cover rounded-[35px] w-full"
                            src="images/img_rectangle10.png"
                            alt="rectangleTen"
                          />
                          <div className="absolute bg-gradient  bottom-[0] flex flex-col gap-[22px] inset-x-[0] items-start justify-center mx-auto p-8 sm:px-5 rounded-[35px] w-full">
                            <Text
                              className="mt-[86px] sm:text-[22.99px] md:text-[24.99px] text-[26.99px] text-white-A700 tracking-[0.54px]"
                              size="txtPlusJakartaSansMedium2699"
                            >
                              <span className="text-red-A700 font-plusjakartasans text-left font-medium">
                                New
                              </span>
                              <span className="text-white-A700 font-plusjakartasans text-left font-medium">
                                <>
                                  {" "}
                                  MacBook Air 15″
                                  <br /> with M2 chip
                                  <br /> from ₹134900.00
                                </>
                              </span>
                              <a
                                href="javascript:"
                                className="text-white-A700 font-plusjakartasans text-left font-medium underline"
                              >
                                *
                              </a>
                            </Text>
                            <Text
                              className="mb-[33px] text-[17.6px] text-white-A700 tracking-[3.52px]"
                              size="txtPlusJakartaSansBold176"
                            >
                              APPLE
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-col items-center justify-start rounded-[35px] shadow-bs1 w-[24%] md:w-full">
                          <div className="h-[551px] relative w-full">
                            <Img
                              className="h-[551px] m-auto object-cover rounded-[35px] w-full"
                              src="images/img_rectangle11.png"
                              alt="rectangleEleven"
                            />
                            <div className="absolute bg-gradient  bottom-[0] flex flex-col md:gap-10 gap-[85px] inset-x-[0] items-start justify-center mx-auto p-8 sm:px-5 rounded-[35px] w-full">
                              <Text
                                className="mt-9 sm:text-[22.99px] md:text-[24.99px] text-[26.99px] text-white-A700 tracking-[0.54px]"
                                size="txtPlusJakartaSansMedium2699"
                              >
                                <>
                                  Samsung Galaxy
                                  <br />
                                  S23 Ultra
                                </>
                              </Text>
                              <Text
                                className="mb-[34px] text-[17.6px] text-white-A700 tracking-[3.52px]"
                                size="txtPlusJakartaSansBold176"
                              >
                                SAMSUNG
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-row gap-[19px] items-start justify-center right-[5%] top-[27%] w-[14%]">
                    <Text
                      className="text-[18.78px] text-gray-500 text-shadow-ts tracking-[0.38px]"
                      size="txtPlusJakartaSansRomanSemiBold1878"
                    >
                      All best matches
                    </Text>
                    <Img
                      className="h-[29px] w-[29px]"
                      src="images/img_arrowright.svg"
                      alt="arrowright_One"
                    />
                  </div>
                  <Line className="absolute bg-black-900 h-px left-[0] shadow-bs1 top-[33%] w-[14%]" />
                </div>
                <div className="flex flex-col md:gap-10 gap-[114px] justify-start w-full">
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[83px] shadow-bs1 w-[86%] md:w-full">
                    <div className="flex flex-col md:gap-10 gap-[61px] items-center justify-start w-full">
                      <div className="h-[394px] relative w-full">
                        <Img
                          className="h-[394px] m-auto object-cover rounded-[35px] w-full"
                          src="images/img_rectangle3.png"
                          alt="rectangleThree"
                        />
                        <Button
                          className="bg-black-900 bottom-[9%] cursor-pointer flex items-center justify-center min-w-[215px] px-[35px] py-[19px] right-[7%] rounded-[32px]"
                          rightIcon={
                            <div className="h-3 mt-1.5 mb-[7px] ml-[9px] w-3 bg-black-900 left-[1%] absolute inset-y-[2%]">
                              <Img
                                className="h-3 absolute"
                                src="images/img_upload.svg"
                                alt="upload"
                              />
                            </div>
                          }
                        >
                          <div className="font-semibold sm:px-5 text-[19.95px] text-center text-gray-900_03">
                            Know more{" "}
                          </div>
                        </Button>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[26px] items-center justify-between w-[98%] md:w-full">
                        <div className="h-[533px] relative w-[62%] md:w-full">
                          <Img
                            className="h-[532px] ml-[5px] my-auto object-cover rounded-[35px] w-[81%]"
                            src="images/img_rectangle4.png"
                            alt="rectangleFour"
                          />
                          <div className="absolute h-[533px] inset-[0] justify-center m-auto w-full">
                            <Img
                              className="h-[533px] m-auto object-cover rounded-[35px] w-full"
                              src="images/img_rectangle5.png"
                              alt="rectangleFive"
                            />
                            <Text
                              className="absolute left-[5%] text-[15.26px] text-black-900 top-[14%] tracking-[4.88px]"
                              size="txtPlusJakartaSansBold1526Black900"
                            >
                              UNIQUE HOMES
                            </Text>
                          </div>
                        </div>
                        <div className="h-[532px] relative w-[38%] md:w-full">
                          <Img
                            className="h-[532px] m-auto object-cover rounded-[35px] w-full"
                            src="images/img_rectangle5_532x526.png"
                            alt="rectangleFive_One"
                          />
                          <Img
                            className="absolute h-[532px] inset-[0] justify-center m-auto object-cover rounded-[35px] w-full"
                            src="images/img_rectangle6.png"
                            alt="rectangleSix"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100_01 flex flex-col items-center justify-start p-7 sm:px-5 w-full">
                    <div className="flex md:flex-col flex-row gap-[49px] items-center justify-center w-[47%] md:w-full">
                      <div className="bg-blue_gray-100 flex flex-col h-[77px] items-center justify-start p-[18px] rounded-[38px] w-[77px]">
                        <Img
                          className="h-[38px] w-[38px]"
                          src="images/img_airplane_black_900.svg"
                          alt="airplane"
                        />
                      </div>
                      <Text
                        className="sm:text-[17.13px] md:text-[19.13px] text-[21.13px] text-black-900 text-center"
                        size="txtPlusJakartaSansRomanMedium2112Black900"
                      >
                        <span className="text-black-900 font-plusjakartasans font-medium">
                          Our support team can assist you with reservation
                        </span>
                        <span className="text-black-900 font-plusjakartasans font-bold">
                          {" "}
                          0 850 132 21 41
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gradient1  flex flex-col items-start justify-start p-[30px] sm:px-5 right-[0] top-[20%] w-[11%]">
                <div className="bg-gray-100_01 flex flex-col h-[100px] items-center justify-start mb-[186px] mt-[203px] p-[30px] sm:px-5 rounded-[50%] w-[100px]">
                  <Img
                    className="h-[37px] w-[37px]"
                    src="images/img_arrowright_blue_gray_800_37x37.svg"
                    alt="arrowright_Two"
                  />
                </div>
              </div>
              <Img
                className="absolute h-[2351px] inset-y-[0] left-[0] my-auto object-cover"
                src="images/img_group2761_black_900.png"
                alt="group2761"
              />
            </div>
            <Footer className="bg-gray-100_01 flex items-center justify-center md:px-5 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLiteModePage;
