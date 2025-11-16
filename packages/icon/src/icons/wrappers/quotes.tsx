import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { QuotesBold } from "../bold";
import { QuotesDuotone } from "../duotone";
import { QuotesFill } from "../fill";
import { QuotesLight } from "../light";
import { QuotesRegular } from "../regular";
import { QuotesThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Quotes = memo(function Quotes(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: QuotesBold,
      duotone: QuotesDuotone,
      fill: QuotesFill,
      light: QuotesLight,
      regular: QuotesRegular,
      thin: QuotesThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
