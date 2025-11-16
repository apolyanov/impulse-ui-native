import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ListDashesBold } from "../bold";
import { ListDashesDuotone } from "../duotone";
import { ListDashesFill } from "../fill";
import { ListDashesLight } from "../light";
import { ListDashesRegular } from "../regular";
import { ListDashesThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ListDashes = memo(function ListDashes(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ListDashesBold,
      duotone: ListDashesDuotone,
      fill: ListDashesFill,
      light: ListDashesLight,
      regular: ListDashesRegular,
      thin: ListDashesThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
