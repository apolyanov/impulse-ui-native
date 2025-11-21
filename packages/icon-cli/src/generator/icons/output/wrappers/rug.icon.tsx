import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { RugBoldIcon } from "../bold";
        import { RugDuotoneIcon } from "../duotone";
        import { RugFillIcon } from "../fill";
        import { RugLightIcon } from "../light";
        import { RugRegularIcon } from "../regular";
        import { RugThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const RugIcon = memo(function Rug(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: RugBoldIcon,
            duotone: RugDuotoneIcon,
            fill: RugFillIcon,
            light: RugLightIcon,
            regular: RugRegularIcon,
            thin: RugThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
