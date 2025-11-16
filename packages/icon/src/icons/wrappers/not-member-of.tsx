import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NotMemberOfBold } from "../bold";
import { NotMemberOfDuotone } from "../duotone";
import { NotMemberOfFill } from "../fill";
import { NotMemberOfLight } from "../light";
import { NotMemberOfRegular } from "../regular";
import { NotMemberOfThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NotMemberOf = memo(function NotMemberOf(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NotMemberOfBold,
      duotone: NotMemberOfDuotone,
      fill: NotMemberOfFill,
      light: NotMemberOfLight,
      regular: NotMemberOfRegular,
      thin: NotMemberOfThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
