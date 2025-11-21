import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PillBoldIcon } from "../bold";
        import { PillDuotoneIcon } from "../duotone";
        import { PillFillIcon } from "../fill";
        import { PillLightIcon } from "../light";
        import { PillRegularIcon } from "../regular";
        import { PillThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PillIcon = memo(function Pill(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PillBoldIcon,
            duotone: PillDuotoneIcon,
            fill: PillFillIcon,
            light: PillLightIcon,
            regular: PillRegularIcon,
            thin: PillThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
