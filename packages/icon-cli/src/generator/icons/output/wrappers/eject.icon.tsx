import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { EjectBoldIcon } from "../bold";
        import { EjectDuotoneIcon } from "../duotone";
        import { EjectFillIcon } from "../fill";
        import { EjectLightIcon } from "../light";
        import { EjectRegularIcon } from "../regular";
        import { EjectThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const EjectIcon = memo(function Eject(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: EjectBoldIcon,
            duotone: EjectDuotoneIcon,
            fill: EjectFillIcon,
            light: EjectLightIcon,
            regular: EjectRegularIcon,
            thin: EjectThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
