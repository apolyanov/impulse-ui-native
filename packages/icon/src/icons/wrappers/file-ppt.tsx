import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FilePptBold } from "../bold";
import { FilePptDuotone } from "../duotone";
import { FilePptFill } from "../fill";
import { FilePptLight } from "../light";
import { FilePptRegular } from "../regular";
import { FilePptThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FilePpt = memo(function FilePpt(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FilePptBold,
      duotone: FilePptDuotone,
      fill: FilePptFill,
      light: FilePptLight,
      regular: FilePptRegular,
      thin: FilePptThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
