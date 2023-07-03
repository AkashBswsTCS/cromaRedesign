import React from "react";

const sizeClasses = {
  txtPlusJakartaSansRomanMedium1878Gray60001:
    "font-medium font-plusjakartasans",
  txtInterSemiBold24: "font-inter font-semibold",
  txtPlusJakartaSansRomanSemiBold1878: "font-plusjakartasans font-semibold",
  txtInterBold21: "font-bold font-inter",
  txtInterBold22: "font-bold font-inter",
  txtInterBold23: "font-bold font-inter",
  txtBarlowMediumItalic40: "font-barlow font-medium italic",
  txtPlusJakartaSansRomanBold5633Black900: "font-bold font-plusjakartasans",
  txtPlusJakartaSansMedium2465: "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanMedium2112: "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanBold16Black900: "font-bold font-plusjakartasans",
  txtBarlowSemiBold45: "font-barlow font-semibold",
  txtPlusJakartaSansRomanBold26: "font-bold font-plusjakartasans",
  txtBarlowMediumItalic14: "font-barlow font-medium italic",
  txtPlusJakartaSansRomanBold2465: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold1643: "font-plusjakartasans font-semibold",
  txtInterBold16: "font-bold font-inter",
  txtInterMedium17: "font-inter font-medium",
  txtInterBold16Gray10003: "font-bold font-inter",
  txtPlusJakartaSansRomanBold3756Black900: "font-bold font-plusjakartasans",
  txtInterMedium20: "font-inter font-medium",
  txtPlusJakartaSansRomanMedium1878: "font-medium font-plusjakartasans",
  txtPlusJakartaSansMedium2699: "font-medium font-plusjakartasans",
  txtAdaminaRegular1643Gray70001: "font-adamina font-normal",
  txtInterRegular32Gray50001: "font-inter font-normal",
  txtPlusJakartaSansRomanBold3756: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold2582: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanMedium17: "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanBold16: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold29: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanBold26Black900: "font-bold font-plusjakartasans",
  txtInterExtraLight12: "font-inter font-thin",
  txtPlusJakartaSansMedium2465Black900: "font-medium font-plusjakartasans",
  txtBarlowBlackItalic108: "font-barlow font-black italic",
  txtPlusJakartaSansRomanSemiBold29Black900:
    "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanBold2465Black900: "font-bold font-plusjakartasans",
  txtAdaminaRegular1643: "font-adamina font-normal",
  txtPlusJakartaSansRomanBold1878: "font-bold font-plusjakartasans",
  txtAlatsiRegular2817: "font-alatsi font-normal",
  txtPlusJakartaSansMedium3286: "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold2112: "font-plusjakartasans font-semibold",
  txtBarlowBold16: "font-barlow font-bold",
  txtInterRegular32: "font-inter font-normal",
  txtInterSemiBold13: "font-inter font-semibold",
  txtPlusJakartaSansBold1526Black900: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanMedium1878Black900: "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanMedium2112Black900: "font-medium font-plusjakartasans",
  txtInterSemiBold21: "font-inter font-semibold",
  txtPlusJakartaSansRegular1995: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanBold5633: "font-bold font-plusjakartasans",
  txtPlusJakartaSansBold1526: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold2112Black900:
    "font-plusjakartasans font-semibold",
  txtInterExtraBold60: "font-extrabold font-inter",
  txtPlusJakartaSansBold176: "font-bold font-plusjakartasans",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
