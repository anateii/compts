import React from "react";
import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  rounded,
  outline,
}) {
  const classes = className("flex items-center px-3 py-1.5 border text-white", {
    "border-blue-500 bg-blue-500 ": primary,
    "border-gray-900 bg-gray-900 ": secondary,
    "border-green-500 bg-green-500 ": success,
    "border-yellow-500 bg-yellow-500 ": danger,
    "border-red-500 bg-red-500": warning,
    "rounded-full": rounded,
    "bg-white": outline,
    "text-cyan-500": outline && primary,
    "text-gray-800": outline && secondary,
    "text-green-500": outline && success,
    "text-yellow-500": outline && danger,
    "text-red-600": outline && warning,
  });

  return <button className={classes}>{children}</button>;
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one between primary, secondary, success, warning, danger can have value equal to true"
      );
    }
  },
};

export default Button;
