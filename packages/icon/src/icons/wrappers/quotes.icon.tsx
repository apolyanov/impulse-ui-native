import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { QuotesBoldIcon } from "../bold/quotes-bold.icon";
import { QuotesDuotoneIcon } from "../duotone/quotes-duotone.icon";
import { QuotesFillIcon } from "../fill/quotes-fill.icon";
import { QuotesLightIcon } from "../light/quotes-light.icon";
import { QuotesRegularIcon } from "../regular/quotes-regular.icon";
import { QuotesThinIcon } from "../thin/quotes-thin.icon";

export const QuotesIcon = memo(function Quotes(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: QuotesBoldIcon,
      duotone: QuotesDuotoneIcon,
      fill: QuotesFillIcon,
      light: QuotesLightIcon,
      regular: QuotesRegularIcon,
      thin: QuotesThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
