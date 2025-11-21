import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PictureInPictureBoldIcon } from "../bold";
import { PictureInPictureDuotoneIcon } from "../duotone";
import { PictureInPictureFillIcon } from "../fill";
import { PictureInPictureLightIcon } from "../light";
import { PictureInPictureRegularIcon } from "../regular";
import { PictureInPictureThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PictureInPictureIcon = memo(function PictureInPicture(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PictureInPictureBoldIcon,
      duotone: PictureInPictureDuotoneIcon,
      fill: PictureInPictureFillIcon,
      light: PictureInPictureLightIcon,
      regular: PictureInPictureRegularIcon,
      thin: PictureInPictureThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
