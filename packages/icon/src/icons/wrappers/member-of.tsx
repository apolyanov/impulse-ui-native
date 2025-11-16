import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MemberOfBold } from "../bold";
import { MemberOfDuotone } from "../duotone";
import { MemberOfFill } from "../fill";
import { MemberOfLight } from "../light";
import { MemberOfRegular } from "../regular";
import { MemberOfThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MemberOf = memo(function MemberOf(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MemberOfBold,
      duotone: MemberOfDuotone,
      fill: MemberOfFill,
      light: MemberOfLight,
      regular: MemberOfRegular,
      thin: MemberOfThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
