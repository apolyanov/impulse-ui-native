import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { EggCrackBoldIcon } from "../bold";
        import { EggCrackDuotoneIcon } from "../duotone";
        import { EggCrackFillIcon } from "../fill";
        import { EggCrackLightIcon } from "../light";
        import { EggCrackRegularIcon } from "../regular";
        import { EggCrackThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const EggCrackIcon = memo(function EggCrack(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: EggCrackBoldIcon,
            duotone: EggCrackDuotoneIcon,
            fill: EggCrackFillIcon,
            light: EggCrackLightIcon,
            regular: EggCrackRegularIcon,
            thin: EggCrackThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
