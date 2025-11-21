import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CheckFatBoldIcon } from "../bold";
        import { CheckFatDuotoneIcon } from "../duotone";
        import { CheckFatFillIcon } from "../fill";
        import { CheckFatLightIcon } from "../light";
        import { CheckFatRegularIcon } from "../regular";
        import { CheckFatThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CheckFatIcon = memo(function CheckFat(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CheckFatBoldIcon,
            duotone: CheckFatDuotoneIcon,
            fill: CheckFatFillIcon,
            light: CheckFatLightIcon,
            regular: CheckFatRegularIcon,
            thin: CheckFatThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
