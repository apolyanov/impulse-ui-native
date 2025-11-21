import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TowelBoldIcon } from "../bold";
        import { TowelDuotoneIcon } from "../duotone";
        import { TowelFillIcon } from "../fill";
        import { TowelLightIcon } from "../light";
        import { TowelRegularIcon } from "../regular";
        import { TowelThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TowelIcon = memo(function Towel(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TowelBoldIcon,
            duotone: TowelDuotoneIcon,
            fill: TowelFillIcon,
            light: TowelLightIcon,
            regular: TowelRegularIcon,
            thin: TowelThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
