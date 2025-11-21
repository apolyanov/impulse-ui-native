import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { LessThanBoldIcon } from "../bold";
        import { LessThanDuotoneIcon } from "../duotone";
        import { LessThanFillIcon } from "../fill";
        import { LessThanLightIcon } from "../light";
        import { LessThanRegularIcon } from "../regular";
        import { LessThanThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const LessThanIcon = memo(function LessThan(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: LessThanBoldIcon,
            duotone: LessThanDuotoneIcon,
            fill: LessThanFillIcon,
            light: LessThanLightIcon,
            regular: LessThanRegularIcon,
            thin: LessThanThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
