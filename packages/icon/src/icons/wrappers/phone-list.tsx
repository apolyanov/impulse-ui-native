import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PhoneListBold } from "../bold";
import { PhoneListDuotone } from "../duotone";
import { PhoneListFill } from "../fill";
import { PhoneListLight } from "../light";
import { PhoneListRegular } from "../regular";
import { PhoneListThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PhoneList = memo(function PhoneList(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PhoneListBold,
      duotone: PhoneListDuotone,
      fill: PhoneListFill,
      light: PhoneListLight,
      regular: PhoneListRegular,
      thin: PhoneListThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
