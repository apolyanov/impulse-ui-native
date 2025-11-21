import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CropBoldIcon } from "../bold";
        import { CropDuotoneIcon } from "../duotone";
        import { CropFillIcon } from "../fill";
        import { CropLightIcon } from "../light";
        import { CropRegularIcon } from "../regular";
        import { CropThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CropIcon = memo(function Crop(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CropBoldIcon,
            duotone: CropDuotoneIcon,
            fill: CropFillIcon,
            light: CropLightIcon,
            regular: CropRegularIcon,
            thin: CropThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
