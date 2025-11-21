import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ShieldPlusBoldIcon } from "../bold";
        import { ShieldPlusDuotoneIcon } from "../duotone";
        import { ShieldPlusFillIcon } from "../fill";
        import { ShieldPlusLightIcon } from "../light";
        import { ShieldPlusRegularIcon } from "../regular";
        import { ShieldPlusThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ShieldPlusIcon = memo(function ShieldPlus(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ShieldPlusBoldIcon,
            duotone: ShieldPlusDuotoneIcon,
            fill: ShieldPlusFillIcon,
            light: ShieldPlusLightIcon,
            regular: ShieldPlusRegularIcon,
            thin: ShieldPlusThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
