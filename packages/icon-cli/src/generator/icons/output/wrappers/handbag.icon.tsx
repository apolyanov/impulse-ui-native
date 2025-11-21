import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { HandbagBoldIcon } from "../bold";
        import { HandbagDuotoneIcon } from "../duotone";
        import { HandbagFillIcon } from "../fill";
        import { HandbagLightIcon } from "../light";
        import { HandbagRegularIcon } from "../regular";
        import { HandbagThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const HandbagIcon = memo(function Handbag(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: HandbagBoldIcon,
            duotone: HandbagDuotoneIcon,
            fill: HandbagFillIcon,
            light: HandbagLightIcon,
            regular: HandbagRegularIcon,
            thin: HandbagThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
