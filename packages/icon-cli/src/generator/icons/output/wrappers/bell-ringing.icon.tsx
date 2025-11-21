import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BellRingingBoldIcon } from "../bold";
        import { BellRingingDuotoneIcon } from "../duotone";
        import { BellRingingFillIcon } from "../fill";
        import { BellRingingLightIcon } from "../light";
        import { BellRingingRegularIcon } from "../regular";
        import { BellRingingThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BellRingingIcon = memo(function BellRinging(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BellRingingBoldIcon,
            duotone: BellRingingDuotoneIcon,
            fill: BellRingingFillIcon,
            light: BellRingingLightIcon,
            regular: BellRingingRegularIcon,
            thin: BellRingingThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
