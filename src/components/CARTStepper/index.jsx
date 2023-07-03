import React from "react";

import { Button, Img, Text } from "components";

const CARTStepper = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute h-10 inset-y-[0] left-[0] my-auto w-[67%]">
          <Button className="absolute border border-solid border-teal-A400 flex h-10 inset-y-[0] items-center justify-center left-[0] my-auto p-[13px] rounded-lg shadow-bs w-10">
            <Img src="images/img_subtractbutton.svg" alt="subtractbutton" />
          </Button>
          <div className="absolute flex flex-col md:h-auto h-full inset-y-[0] items-center justify-center my-auto p-1.5 right-[0] w-10">
            <Text
              className="text-base text-center text-gray-100_03 w-[7px]"
              size="txtInterBold16Gray10003"
            >
              {props?.oneOne}
            </Text>
          </div>
        </div>
        <Button className="absolute border border-solid border-teal-A400 flex h-10 inset-y-[0] items-center justify-center my-auto p-[13px] right-[0] rounded-lg shadow-bs w-10">
          <Img className="h-3" src="images/img_plus.svg" alt="plus" />
        </Button>
      </div>
    </>
  );
};

CARTStepper.defaultProps = { oneOne: "1" };

export default CARTStepper;
