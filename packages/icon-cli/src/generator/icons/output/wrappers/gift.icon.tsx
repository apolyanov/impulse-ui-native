import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GiftBoldIcon } from "../bold";
        import { GiftDuotoneIcon } from "../duotone";
        import { GiftFillIcon } from "../fill";
        import { GiftLightIcon } from "../light";
        import { GiftRegularIcon } from "../regular";
        import { GiftThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GiftIcon = memo(function Gift(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GiftBoldIcon,
            duotone: GiftDuotoneIcon,
            fill: GiftFillIcon,
            light: GiftLightIcon,
            regular: GiftRegularIcon,
            thin: GiftThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
