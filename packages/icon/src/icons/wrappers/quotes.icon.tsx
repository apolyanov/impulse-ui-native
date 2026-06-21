import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { QuotesBoldIcon } from "../bold";
import { QuotesDuotoneIcon } from "../duotone";
import { QuotesFillIcon } from "../fill";
import { QuotesLightIcon } from "../light";
import { QuotesRegularIcon } from "../regular";
import { QuotesThinIcon } from "../thin";

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
