import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { LegoBoldIcon } from "../bold";
        import { LegoDuotoneIcon } from "../duotone";
        import { LegoFillIcon } from "../fill";
        import { LegoLightIcon } from "../light";
        import { LegoRegularIcon } from "../regular";
        import { LegoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const LegoIcon = memo(function Lego(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: LegoBoldIcon,
            duotone: LegoDuotoneIcon,
            fill: LegoFillIcon,
            light: LegoLightIcon,
            regular: LegoRegularIcon,
            thin: LegoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
