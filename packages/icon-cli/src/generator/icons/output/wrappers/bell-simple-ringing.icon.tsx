import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BellSimpleRingingBoldIcon } from "../bold";
        import { BellSimpleRingingDuotoneIcon } from "../duotone";
        import { BellSimpleRingingFillIcon } from "../fill";
        import { BellSimpleRingingLightIcon } from "../light";
        import { BellSimpleRingingRegularIcon } from "../regular";
        import { BellSimpleRingingThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BellSimpleRingingIcon = memo(function BellSimpleRinging(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BellSimpleRingingBoldIcon,
            duotone: BellSimpleRingingDuotoneIcon,
            fill: BellSimpleRingingFillIcon,
            light: BellSimpleRingingLightIcon,
            regular: BellSimpleRingingRegularIcon,
            thin: BellSimpleRingingThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
