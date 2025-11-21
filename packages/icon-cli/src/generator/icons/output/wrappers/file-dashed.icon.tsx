import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FileDashedBoldIcon } from "../bold";
        import { FileDashedDuotoneIcon } from "../duotone";
        import { FileDashedFillIcon } from "../fill";
        import { FileDashedLightIcon } from "../light";
        import { FileDashedRegularIcon } from "../regular";
        import { FileDashedThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FileDashedIcon = memo(function FileDashed(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FileDashedBoldIcon,
            duotone: FileDashedDuotoneIcon,
            fill: FileDashedFillIcon,
            light: FileDashedLightIcon,
            regular: FileDashedRegularIcon,
            thin: FileDashedThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
