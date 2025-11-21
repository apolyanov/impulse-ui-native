import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TShirtBoldIcon } from "../bold";
        import { TShirtDuotoneIcon } from "../duotone";
        import { TShirtFillIcon } from "../fill";
        import { TShirtLightIcon } from "../light";
        import { TShirtRegularIcon } from "../regular";
        import { TShirtThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TShirtIcon = memo(function TShirt(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TShirtBoldIcon,
            duotone: TShirtDuotoneIcon,
            fill: TShirtFillIcon,
            light: TShirtLightIcon,
            regular: TShirtRegularIcon,
            thin: TShirtThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
