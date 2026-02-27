import type { TypographyProps } from "@/Types/ComponentTypes";

const Typography = ({
  variant,
  text,
  extraClasses,
  sizeVariant,
  colorVariant,
  dualColorVariant,
  finalTextClasses,
}: TypographyProps) => {
  const initialText = text.toString().split(" ").slice(0, -2).join(" ");
  const finalText = text.toString().split(" ").slice(-2).join(" ");

  let sizeClass = "";
  let colorClass = "";

  switch (sizeVariant) {
    case "small":
      sizeClass = "text-sm";
      break;
    case "medium":
      sizeClass = "text-lg";
      break;
    case "large":
      sizeClass = "text-xl";
      break;
    case "xl":
      sizeClass = "text-3xl";
      break;
    case "xl-alt":
      sizeClass = "text-4xl";
      break;
    case "xxl":
      sizeClass = "text-4oxl";
      break;
    case "giant":
      sizeClass = "text-6xl";
      break;
    case "huge":
      sizeClass = "text-7xl";
      break;
    default:
      sizeClass = "text-base";
  }

  switch (colorVariant) {
    case "primary":
      colorClass = "text-primary";
      break;
    case "primary-light":
      colorClass = "text-primary-light";
      break;
    case "secondary":
      colorClass = "text-secondary";
      break;
    case "accent":
      colorClass = "text-accent";
      break;
    case "info":
      colorClass = "text-info";
      break;
    case "black":
      colorClass = "text-black";
      break;
    case "white":
      colorClass = "text-white";
      break;
    default:
      colorClass = "";
  }

  switch (variant) {
    case "h1":
      return (
        <h1
          className={`${sizeClass} ${colorClass} ${extraClasses ? extraClasses : ""}`}
        >
          {dualColorVariant ? (
            <>
              {initialText}{" "}
              <span className={`${finalTextClasses ? finalTextClasses : ""}`}>
                {finalText}
              </span>
            </>
          ) : (
            text
          )}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`${sizeClass} ${colorClass} ${extraClasses ? extraClasses : ""}`}
        >
          {dualColorVariant ? (
            <>
              {initialText}{" "}
              <span className={`${finalTextClasses ? finalTextClasses : ""}`}>
                {finalText}
              </span>
            </>
          ) : (
            text
          )}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`${sizeClass} ${colorClass} ${extraClasses ? extraClasses : ""}`}
        >
          {dualColorVariant ? (
            <>
              {initialText}{" "}
              <span className={`${finalTextClasses ? finalTextClasses : ""}`}>
                {finalText}
              </span>
            </>
          ) : (
            text
          )}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={`${sizeClass} ${colorClass} ${extraClasses ? extraClasses : ""}`}
        >
          {dualColorVariant ? (
            <>
              {initialText}{" "}
              <span className={`${finalTextClasses ? finalTextClasses : ""}`}>
                {finalText}
              </span>
            </>
          ) : (
            text
          )}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={`${sizeClass} ${colorClass} ${extraClasses ? extraClasses : ""}`}
        >
          {dualColorVariant ? (
            <>
              {initialText}{" "}
              <span className={`${finalTextClasses ? finalTextClasses : ""}`}>
                {finalText}
              </span>
            </>
          ) : (
            text
          )}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={`${sizeClass} ${colorClass} ${extraClasses ? extraClasses : ""}`}
        >
          {dualColorVariant ? (
            <>
              {initialText}{" "}
              <span className={`${finalTextClasses ? finalTextClasses : ""}`}>
                {finalText}
              </span>
            </>
          ) : (
            text
          )}
        </h6>
      );
    case "p":
      return (
        <p
          className={`${sizeClass} ${colorClass} ${extraClasses ? extraClasses : ""}`}
        >
          {dualColorVariant ? (
            <>
              {initialText}{" "}
              <span className={`${finalTextClasses ? finalTextClasses : ""}`}>
                {finalText}
              </span>
            </>
          ) : (
            text
          )}
        </p>
      );
    case "span":
      return (
        <span
          className={`${sizeClass} ${colorClass} ${extraClasses ? extraClasses : ""}`}
        >
          {dualColorVariant ? (
            <>
              {initialText}{" "}
              <span className={`${finalTextClasses ? finalTextClasses : ""}`}>
                {finalText}
              </span>
            </>
          ) : (
            text
          )}
        </span>
      );
    default:
      return (
        <p
          className={`${sizeClass} ${colorClass} ${extraClasses ? extraClasses : ""}`}
        >
          {dualColorVariant ? (
            <>
              {initialText}{" "}
              <span className={`${finalTextClasses ? finalTextClasses : ""}`}>
                {finalText}
              </span>
            </>
          ) : (
            text
          )}
        </p>
      );
  }
};

export default Typography;
