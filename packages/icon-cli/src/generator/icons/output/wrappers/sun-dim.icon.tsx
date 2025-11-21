import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SunDimBoldIcon } from "../bold";
        import { SunDimDuotoneIcon } from "../duotone";
        import { SunDimFillIcon } from "../fill";
        import { SunDimLightIcon } from "../light";
        import { SunDimRegularIcon } from "../regular";
        import { SunDimThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SunDimIcon = memo(function SunDim(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SunDimBoldIcon,
            duotone: SunDimDuotoneIcon,
            fill: SunDimFillIcon,
            light: SunDimLightIcon,
            regular: SunDimRegularIcon,
            thin: SunDimThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
