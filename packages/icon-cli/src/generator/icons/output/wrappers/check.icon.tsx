import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CheckBoldIcon } from "../bold";
        import { CheckDuotoneIcon } from "../duotone";
        import { CheckFillIcon } from "../fill";
        import { CheckLightIcon } from "../light";
        import { CheckRegularIcon } from "../regular";
        import { CheckThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CheckIcon = memo(function Check(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CheckBoldIcon,
            duotone: CheckDuotoneIcon,
            fill: CheckFillIcon,
            light: CheckLightIcon,
            regular: CheckRegularIcon,
            thin: CheckThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
