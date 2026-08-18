import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FilePyBoldIcon } from "../bold/file-py-bold.icon";
import { FilePyDuotoneIcon } from "../duotone/file-py-duotone.icon";
import { FilePyFillIcon } from "../fill/file-py-fill.icon";
import { FilePyLightIcon } from "../light/file-py-light.icon";
import { FilePyRegularIcon } from "../regular/file-py-regular.icon";
import { FilePyThinIcon } from "../thin/file-py-thin.icon";

export const FilePyIcon = memo(function FilePy(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FilePyBoldIcon,
      duotone: FilePyDuotoneIcon,
      fill: FilePyFillIcon,
      light: FilePyLightIcon,
      regular: FilePyRegularIcon,
      thin: FilePyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
