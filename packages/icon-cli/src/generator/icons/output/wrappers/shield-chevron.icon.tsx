import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ShieldChevronBoldIcon } from "../bold";
        import { ShieldChevronDuotoneIcon } from "../duotone";
        import { ShieldChevronFillIcon } from "../fill";
        import { ShieldChevronLightIcon } from "../light";
        import { ShieldChevronRegularIcon } from "../regular";
        import { ShieldChevronThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ShieldChevronIcon = memo(function ShieldChevron(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ShieldChevronBoldIcon,
            duotone: ShieldChevronDuotoneIcon,
            fill: ShieldChevronFillIcon,
            light: ShieldChevronLightIcon,
            regular: ShieldChevronRegularIcon,
            thin: ShieldChevronThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
