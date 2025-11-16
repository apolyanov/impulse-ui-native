import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextOutdentBold } from "../bold";
import { TextOutdentDuotone } from "../duotone";
import { TextOutdentFill } from "../fill";
import { TextOutdentLight } from "../light";
import { TextOutdentRegular } from "../regular";
import { TextOutdentThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextOutdent = memo(function TextOutdent(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextOutdentBold,
      duotone: TextOutdentDuotone,
      fill: TextOutdentFill,
      light: TextOutdentLight,
      regular: TextOutdentRegular,
      thin: TextOutdentThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
