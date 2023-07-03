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
  Switch,
  Text,
} from "components";

const kolkataOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const currencyOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Home1Page = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <div className="font-plusjakartasans h-[5590px] mx-auto relative w-full">
        <div className="absolute h-[5590px] md:h-[6928px] inset-[0] justify-center m-auto max-w-[1648px] md:px-5 w-full">
          <div className="absolute flex md:flex-col flex-row md:gap-10 h-full inset-[0] items-start justify-between m-auto overflow-auto w-full">
            <div className="flex relative w-full">
              <div className="h-[5590px] sm:h-[6820px] md:h-[6881px] m-auto w-[98%] md:w-full">
                <div className="h-[5590px] md:h-[5855px] m-auto w-full">
                  <div className="h-[5590px] m-auto w-full">
                    <Img
                      className="h-[5590px] m-auto object-cover"
                      src="images/img_newgradientbghome.png"
                      alt="newgradientbgho"
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[1673px] inset-x-[0] items-end justify-start mx-auto top-[17%] w-[89%]">
                      <div className="flex flex-col items-center justify-start rounded-[71px] shadow-bs2 w-[26%] md:w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Img
                            className="h-[143px] md:h-auto rounded-[50%] w-[143px]"
                            src="images/img_rectangle2.png"
                            alt="rectangleTwo"
                          />
                          <div className="flex flex-col gap-[11px] items-start justify-start">
                            <Text
                              className="sm:text-[20.65px] md:text-[22.65px] text-[24.65px] text-white-A700 tracking-[0.49px]"
                              size="txtPlusJakartaSansMedium2465"
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
                      <div className="flex flex-col items-start justify-start mr-1 w-full">
                        <Text
                          className="leading-[123.40%] sm:text-[42.33px] md:text-[48.33px] text-[56.33px] text-shadow-ts text-white-A700 tracking-[1.13px]"
                          size="txtPlusJakartaSansRomanBold5633"
                        >
                          <>
                            Explore what
                            <br />
                            you want.
                          </>
                        </Text>
                        <Button className="bg-gray-900 cursor-pointer font-bold min-w-[76px] md:ml-[0] ml-[822px] mt-16 py-2 rounded-[17px] text-[12.91px] text-center text-white-A700 tracking-[4.52px]">
                          NEW
                        </Button>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-6 md:ml-[0] mt-[7px] w-[65%] md:w-full">
                          <Text
                            className="sm:text-[25px] md:text-[27px] text-[29px] text-shadow-ts text-white-A700"
                            size="txtPlusJakartaSansRomanSemiBold29"
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
                        <Line className="bg-gray-900_01 h-px mt-[18px] shadow-bs1 w-full" />
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[68px] w-[81%] md:w-full">
                          <div className="bg-gray-900_26 flex flex-col gap-[39px] justify-center p-6 sm:px-5 rounded-[35px] w-[33%] md:w-full">
                            <div className="bg-blue_gray-900 flex flex-col h-[104px] items-center justify-end mr-[221px] mt-[158px] p-[25px] sm:px-5 rounded-[50%] w-[104px]">
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[51px] items-start justify-start p-[7px] w-[51px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_transfer1.svg')",
                                }}
                              >
                                <Img
                                  className="h-7 md:h-auto mb-2 object-cover w-[65%]"
                                  src="images/img_images1.png"
                                  alt="imagesOne"
                                />
                              </div>
                            </div>
                            <Text
                              className="mb-9 ml-2 md:ml-[0] mr-[22px] sm:text-[28.86px] md:text-[30.86px] text-[32.86px] text-white-A700 tracking-[0.66px]"
                              size="txtPlusJakartaSansMedium3286"
                            >
                              <span className="text-white-A700 font-plusjakartasans text-left font-semibold">
                                <>
                                  Save an extra
                                  <br />
                                </>
                              </span>
                              <span className="text-white-A700 font-plusjakartasans text-left font-extrabold">
                                ₹‎10000
                              </span>
                              <span className="md:text-[22px] sm:text-xl text-red-500 font-plusjakartasans text-left text-2xl font-semibold italic">
                                *
                              </span>
                              <span className="md:text-[23px] sm:text-[21px] text-white-A700 font-plusjakartasans text-left text-[25px] font-bold">
                                {" "}
                              </span>
                              <span className="text-white-A700 font-plusjakartasans text-left font-bold">
                                on
                              </span>
                              <span className="md:text-[23px] sm:text-[21px] text-white-A700 font-plusjakartasans text-left text-[25px] font-bold">
                                {" "}
                              </span>
                              <span className="text-white-A700 font-plusjakartasans text-left font-semibold">
                                <>
                                  every <br />
                                  most products in
                                  <br />
                                  April.
                                </>
                              </span>
                            </Text>
                          </div>
                          <div className="h-[551px] md:ml-[0] ml-[22px] relative rounded-[35px] shadow-bs1 w-[33%] md:w-full">
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
                          <div className="h-[551px] md:ml-[0] ml-[21px] relative rounded-[35px] shadow-bs1 w-[33%] md:w-full">
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[2%] w-[93%]">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                      <Img
                        className="h-[41px]"
                        src="images/img_cromalogo.svg"
                        alt="cromalogo"
                      />
                      <Button className="cursor-pointer font-semibold leading-[normal] min-w-[221px] md:ml-[0] ml-[393px] rounded-[11px] shadow-bs1 text-[17px] text-center text-white-A700 tracking-[0.34px]">
                        BEST OFFERS AT CROMA
                      </Button>
                      <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[287px] shadow-bs1 w-[8%] md:w-full">
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
                      <Img
                        className="h-[57px] md:h-auto md:ml-[0] ml-[146px] object-cover w-[57px]"
                        src="images/img_group2782.png"
                        alt="group2782"
                      />
                      <Img
                        className="common-pointer h-[57px] md:ml-[0] ml-[27px] w-[57px]"
                        src="images/img_computer.svg"
                        alt="computer"
                        onClick={() => navigate("/cart")}
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[38px] rounded-[41px] shadow-bs1 w-[52%] md:w-full">
                      <div className="bg-gray-900_5e flex flex-row sm:gap-10 items-center justify-between p-[7px] rounded-[41px] w-full">
                        <div className="flex flex-col items-center justify-start ml-[27px]">
                          <Text
                            className="text-[18.78px] text-white-A700 tracking-[0.19px]"
                            size="txtPlusJakartaSansRomanMedium1878"
                          >
                            Where you want to go?
                          </Text>
                        </div>
                        <Button className="bg-blue_gray-900_02 flex h-[68px] items-center justify-center mr-[5px] p-[19px] rounded-[50%] w-[68px]">
                          <Img
                            className="h-7"
                            src="images/img_search_teal_a400.svg"
                            alt="search"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[61px] w-[98%] md:w-full">
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
                        className="md:ml-[0] ml-[3px] w-full"
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
                                  className="common-pointer absolute bg-white-A700_6d flex h-[53px] inset-y-[0] items-center justify-center my-auto p-4 right-[1%] rounded-[26px] w-[53px]"
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
                      <PagerIndicator
                        className="flex h-[7px] justify-center md:ml-[0] ml-[686px] mt-[33px] w-[53px]"
                        count={3}
                        activeCss="inline-block cursor-pointer rounded-[50%] h-[7px] bg-teal-A400 w-[7px]"
                        activeIndex={sliderState}
                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[7px] bg-white-A700_2b w-[7px]"
                        sliderRef={sliderRef}
                        selectedWrapperCss="inline-block md:ml-[0] mx-[7.98px] sm:ml-[0]"
                        unselectedWrapperCss="inline-block md:ml-[0] mx-[7.98px] sm:ml-[0]"
                      />
                      <div className="flex flex-col items-center justify-start mt-[141px] shadow-bs1 w-[30%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-[38px] items-start justify-between w-full">
                          <div
                            className="bg-cover bg-no-repeat flex sm:flex-1 flex-col h-[167px] items-center justify-end p-[3px] w-[166px] sm:w-full"
                            style={{
                              backgroundImage: "url('images/img_group145.svg')",
                            }}
                          >
                            <Img
                              className="h-[133px] md:h-auto mb-2 mt-[19px] object-cover rounded-[66px] w-full"
                              src="images/img_rectangle2_133x159.png"
                              alt="rectangleTwo_One"
                            />
                          </div>
                          <div className="flex flex-col gap-3.5 items-start justify-start sm:mt-0 mt-[23px]">
                            <Text
                              className="sm:text-[20.65px] md:text-[22.65px] text-[24.65px] text-white-A700 tracking-[0.49px]"
                              size="txtPlusJakartaSansRomanBold2465"
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
                      <Text
                        className="mt-[139px] sm:text-[33.56px] md:text-[35.56px] text-[37.56px] text-shadow-ts text-white-A700 tracking-[0.75px]"
                        size="txtPlusJakartaSansRomanBold3756"
                      >
                        Best offers at Croma
                      </Text>
                      <Button className="border border-gray-900_03 border-solid cursor-pointer font-semibold min-w-[247px] md:ml-[0] ml-[614px] mt-[730px] py-[21px] rounded-[35px] sm:text-[17.13px] md:text-[19.13px] text-[21.13px] text-center text-white-A700">
                        More Offers
                      </Button>
                      <div className="flex flex-row gap-[19px] items-start justify-end md:ml-[0] ml-[1242px] mt-[930px] w-[14%] md:w-full">
                        <Text
                          className="text-[18.78px] text-gray-500 text-shadow-ts tracking-[0.38px]"
                          size="txtPlusJakartaSansRomanSemiBold1878"
                        >
                          All best matches
                        </Text>
                        <Img
                          className="h-[29px] w-[29px]"
                          src="images/img_arrowright.svg"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[25px] w-[97%] md:w-full">
                      <Line className="bg-white-A700 h-px shadow-bs1 w-[15%]" />
                      <div className="flex flex-col items-center justify-start mt-[756px] shadow-bs1 w-full">
                        <div className="flex flex-col md:gap-10 gap-[61px] items-center justify-start w-full">
                          <div className="h-[394px] relative w-full">
                            <Img
                              className="h-[394px] m-auto object-cover rounded-[35px] w-full"
                              src="images/img_rectangle3.png"
                              alt="rectangleThree"
                            />
                            <Button
                              className="bg-white-A700 bottom-[9%] cursor-pointer flex items-center justify-center min-w-[215px] px-[35px] py-[19px] right-[7%] rounded-[32px]"
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
                                  className="absolute left-[5%] text-[15.26px] text-white-A700 top-[14%] tracking-[4.88px]"
                                  size="txtPlusJakartaSansBold1526"
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
                      <div className="flex md:flex-col flex-row gap-[49px] items-center justify-center md:ml-[0] ml-[349px] mt-[142px] w-[53%] md:w-full">
                        <div className="bg-gray-900_04 flex flex-col h-[77px] items-center justify-start p-[18px] rounded-[38px] w-[77px]">
                          <Img
                            className="h-[38px] w-[38px]"
                            src="images/img_airplane.svg"
                            alt="airplane"
                          />
                        </div>
                        <Text
                          className="sm:text-[17.13px] md:text-[19.13px] text-[21.13px] text-center text-white-A700"
                          size="txtPlusJakartaSansRomanMedium2112"
                        >
                          <span className="text-white-A700 font-plusjakartasans font-medium">
                            Our support team can assist you with reservation
                          </span>
                          <span className="text-white-A700 font-plusjakartasans font-bold">
                            {" "}
                            0 850 132 21 41
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col h-max inset-[0] justify-center m-auto w-[93%]">
                  <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[245px] w-[54%] md:w-full">
                    <div className="flex flex-col items-start justify-start pb-[205px] md:pr-10 sm:pr-5 pr-[205px] rounded-[28px]">
                      <div className="flex flex-col items-start justify-end mb-[31px] p-2 rounded-[21px]">
                        <Text
                          className="ml-0.5 md:ml-[0] mt-1 text-base text-white-A700"
                          size="txtPlusJakartaSansRomanBold16"
                        >
                          MENU
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-[15px] mt-[11px] w-3.5"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[39px] items-start justify-center md:ml-[0] ml-[564px] mt-[538px] w-[28%] md:w-full">
                    <Img
                      className="h-[173px] md:h-auto object-cover w-[39%] sm:w-full"
                      src="images/img_uphotoroom1.png"
                      alt="uphotoroomOne"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start sm:mt-0 mt-9 shadow-bs2">
                      <Text
                        className="sm:text-[20.65px] md:text-[22.65px] text-[24.65px] text-white-A700 tracking-[0.49px]"
                        size="txtPlusJakartaSansMedium2465"
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
                  <List
                    className="sm:flex-col flex-row gap-[18px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 mt-[245px] w-[96%]"
                    orientation="horizontal"
                  >
                    <div className="flex md:h-[627px] h-[631px] justify-end relative rounded-[23px] shadow-bs1 w-full">
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
                      <div className="absolute border border-gray-900_05 border-solid flex flex-col gap-9 h-full inset-[0] items-center justify-center m-auto p-[23px] sm:px-5 rounded-[23px] w-full">
                        <Img
                          className="h-[282px] md:h-auto object-cover rounded-[34px] w-full"
                          src="images/img_rectangle285.png"
                          alt="rectangle285"
                        />
                        <div className="flex flex-col items-start justify-start mb-[19px] w-[91%] md:w-full">
                          <Img
                            className="h-[21px] ml-0.5 md:ml-[0]"
                            src="images/img_group.svg"
                            alt="group"
                          />
                          <Text
                            className="mt-[27px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700 tracking-[0.52px]"
                            size="txtPlusJakartaSansRomanBold26"
                          >
                            Apple iPhone 14 Pro{" "}
                          </Text>
                          <Text
                            className="ml-1.5 md:ml-[0] mt-4 sm:text-[17.13px] md:text-[19.13px] text-[21.13px] text-right text-white-A700 tracking-[0.42px]"
                            size="txtPlusJakartaSansRomanSemiBold2112"
                          >
                            From ₹129900.00* before trade‑in
                          </Text>
                          <Button className="bg-gray-900_03 flex h-[71px] items-center justify-center md:ml-[0] ml-[315px] mt-[49px] p-[21px] sm:px-5 rounded-[35px] w-[71px]">
                            <Img
                              className="h-7"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:h-[625px] h-[631px] justify-end relative rounded-[23px] shadow-bs1 w-full">
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
                      <div className="absolute border border-gray-900_05 border-solid flex flex-col h-full inset-[0] justify-center m-auto p-[23px] sm:px-5 rounded-[23px] w-full">
                        <Img
                          className="h-[282px] sm:h-auto object-cover rounded-[34px] w-full"
                          src="images/img_rectangle285_282x422.png"
                          alt="rectangle285"
                        />
                        <div className="flex flex-col items-start justify-start ml-5 md:ml-[0] mt-[35px] w-[84%] md:w-full">
                          <Img
                            className="h-[21px] ml-0.5 md:ml-[0]"
                            src="images/img_group.svg"
                            alt="group"
                          />
                          <Text
                            className="mt-6 md:text-2xl sm:text-[22px] text-[26px] text-white-A700 tracking-[0.52px]"
                            size="txtPlusJakartaSansRomanBold26"
                          >
                            IFB Executive ZXS
                          </Text>
                          <Text
                            className="ml-2.5 md:ml-[0] mt-4 sm:text-[17.13px] md:text-[19.13px] text-[21.13px] text-right text-white-A700 tracking-[0.42px]"
                            size="txtPlusJakartaSansRomanSemiBold2112"
                          >
                            From ₹61191.00* before trade‑in
                          </Text>
                        </div>
                        <Button className="bg-gray-900_03 flex h-[71px] items-center justify-center mb-[19px] md:ml-[0] ml-[335px] mr-4 mt-[51px] p-[21px] sm:px-5 rounded-[35px] w-[71px]">
                          <Img
                            className="h-7"
                            src="images/img_location.svg"
                            alt="location"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex md:h-[627px] h-[631px] justify-end relative rounded-[23px] shadow-bs1 w-full">
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
                      <div className="absolute border border-gray-900_05 border-solid flex flex-col gap-9 h-full inset-[0] items-center justify-center m-auto p-[23px] sm:px-5 rounded-[23px] w-full">
                        <Img
                          className="h-[282px] md:h-auto object-cover rounded-[34px] w-full"
                          src="images/img_rectangle285_1.png"
                          alt="rectangle285"
                        />
                        <div className="flex flex-col items-start justify-start mb-[19px] w-[91%] md:w-full">
                          <Img
                            className="h-[21px] ml-0.5 md:ml-[0]"
                            src="images/img_group.svg"
                            alt="group"
                          />
                          <Text
                            className="mt-[26px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700 tracking-[0.52px]"
                            size="txtPlusJakartaSansRomanBold26"
                          >
                            IFB 656 ETC/E RCT
                          </Text>
                          <Text
                            className="ml-1.5 md:ml-[0] mt-[15px] sm:text-[17.13px] md:text-[19.13px] text-[21.13px] text-right text-white-A700 tracking-[0.42px]"
                            size="txtPlusJakartaSansRomanSemiBold2112"
                          >
                            From ₹69000.00* before trade‑in
                          </Text>
                          <Button className="bg-gray-900_03 flex h-[71px] items-center justify-center md:ml-[0] ml-[315px] mt-[51px] p-[21px] sm:px-5 rounded-[35px] w-[71px]">
                            <Img
                              className="h-7"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </List>
                  <div className="h-[508px] md:h-[668px] md:ml-[0] ml-[37px] mt-40 relative w-[93%] md:w-full">
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
                            <div className="inline-block cursor-pointer rounded-[50%] h-1.5 bg-white-A700 w-1.5 relative" />
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
                      activeCss="inline-block cursor-pointer rounded-[50%] h-1.5 bg-white-A700 w-1.5 relative"
                      activeIndex={sliderState1}
                      inactiveCss="inline-block cursor-pointer rounded-[50%] h-1.5 bg-white-A700_2b w-1.5 relative"
                      sliderRef={sliderRef1}
                      selectedWrapperCss="inline-block mx-[8.04px]"
                      unselectedWrapperCss="inline-block mx-[8.04px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[53px] mt-[2468px] w-[97%] md:w-full">
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
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between ml-[undefinedpx] mr-[280px] mt-[121px] w-[56%] z-[1]">
                <div className="flex flex-col items-start justify-start sm:mt-0 mt-[5px] pb-[236px] md:pr-10 sm:pr-5 pr-[236px] rounded-[28px] w-2/5 sm:w-full">
                  <Button className="cursor-pointer font-bold min-w-[116px] py-2.5 rounded-[21px] text-base text-center text-white-A700">
                    CATEGORY
                  </Button>
                </div>
                <Switch
                  onColor="#393939"
                  offColor="#393939"
                  onHandleColor="#808080"
                  offHandleColor="#808080"
                  value={true}
                  className="w-[10%]"
                />
              </div>
              <div className="ml-[-100.48px] mt-[1357px] overflow-x-auto w-[28%] z-[1]">
                <div className="flex md:h-[627px] h-[631px] justify-end relative w-full">
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
                  <div className="absolute border border-gray-900_05 border-solid flex flex-col gap-9 h-full inset-[0] items-center justify-center m-auto p-[23px] sm:px-5 rounded-[23px] w-full">
                    <Img
                      className="h-[282px] md:h-auto object-cover rounded-[34px] w-full"
                      src="images/img_rectangle285.png"
                      alt="rectangle285"
                    />
                    <div className="flex flex-col items-start justify-start mb-[19px] w-[91%] md:w-full">
                      <Img
                        className="h-[21px] ml-0.5 md:ml-[0]"
                        src="images/img_group.svg"
                        alt="group"
                      />
                      <Text
                        className="mt-[27px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700 tracking-[0.52px]"
                        size="txtPlusJakartaSansRomanBold26"
                      >
                        Apple iPhone 14 Pro{" "}
                      </Text>
                      <Text
                        className="ml-1.5 md:ml-[0] mt-4 sm:text-[17.13px] md:text-[19.13px] text-[21.13px] text-right text-white-A700 tracking-[0.42px]"
                        size="txtPlusJakartaSansRomanSemiBold2112"
                      >
                        From ₹129900.00* before trade‑in
                      </Text>
                      <Button className="bg-gray-900_03 flex h-[71px] items-center justify-center md:ml-[0] ml-[315px] mt-[49px] p-[21px] sm:px-5 rounded-[35px] w-[71px]">
                        <Img
                          className="h-7"
                          src="images/img_clock.svg"
                          alt="clock_One"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="h-[7px] md:mt-0 mt-[804px]"
              src="images/img_clock_white_a700.svg"
              alt="clock_Two"
            />
          </div>
          <div className="absolute bottom-[34%] flex flex-col items-center justify-start right-[0] rounded-[35px] shadow-bs1 w-[23%]">
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
        <div className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-end mx-auto p-[21px] sm:px-5 shadow-bs1 top-[0] w-full">
          <Text
            className="text-[18.78px] text-gray-600_01"
            size="txtPlusJakartaSansRomanMedium1878Gray60001"
          >
            Get the most up-to-date information on the measures.
          </Text>
          <Text
            className="md:ml-[0] ml-[13px] text-[18.78px] text-white-A700"
            size="txtPlusJakartaSansRomanBold1878"
          >
            Whatsapp
          </Text>
          <Img
            className="h-[21px] ml-1 md:ml-[0] w-[21px]"
            src="images/img_upload_white_a700.svg"
            alt="upload"
          />
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
          <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[38px] mr-32 md:px-5 w-[9%] md:w-full">
            <SelectBox
              className="font-semibold leading-[normal] text-[16.43px] text-left text-white-A700 tracking-[0.33px] w-full"
              placeholderClassName="text-white-A700"
              indicator={
                <Img
                  className="h-7 mr-[0] w-7"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="groupFive_One"
              options={currencyOptionsList}
              isSearchable={false}
              placeholder="Currency - ₹"
            />
          </div>
        </div>
        <div className="absolute bg-gradient1  bottom-[34%] flex flex-col items-start justify-start p-[30px] md:px-5 right-[0] w-[11%]">
          <div className="bg-white-A700 flex flex-col h-[100px] items-center justify-start mb-[186px] mt-[203px] p-[30px] sm:px-5 rounded-[50%] w-[100px]">
            <Img
              className="h-[37px] w-[37px]"
              src="images/img_arrowright_blue_gray_800_37x37.svg"
              alt="arrowright_Two"
            />
          </div>
        </div>
        <Img
          className="absolute bottom-[10%] h-[2351px] left-[0] object-cover"
          src="images/img_group2761.png"
          alt="group2761"
        />
        <div className="absolute bg-gradient1  flex flex-col items-end justify-start p-[33px] md:px-5 right-[0] top-[24%] w-[11%]">
          <div
            className="common-pointer bg-white-A700 flex flex-col h-[100px] items-center justify-start my-[231px] p-[30px] sm:px-5 rounded-[50%] w-[100px]"
            onClick={() => navigate("/home2scrolllower")}
          >
            <Img
              className="h-[37px] w-[37px]"
              src="images/img_arrowright_blue_gray_800_37x37.svg"
              alt="arrowright_Three"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
