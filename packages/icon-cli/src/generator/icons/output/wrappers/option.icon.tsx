import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { OptionBoldIcon } from "../bold";
        import { OptionDuotoneIcon } from "../duotone";
        import { OptionFillIcon } from "../fill";
        import { OptionLightIcon } from "../light";
        import { OptionRegularIcon } from "../regular";
        import { OptionThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const OptionIcon = memo(function Option(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: OptionBoldIcon,
            duotone: OptionDuotoneIcon,
            fill: OptionFillIcon,
            light: OptionLightIcon,
            regular: OptionRegularIcon,
            thin: OptionThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
