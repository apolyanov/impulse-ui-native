import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SpadeBoldIcon } from "../bold";
        import { SpadeDuotoneIcon } from "../duotone";
        import { SpadeFillIcon } from "../fill";
        import { SpadeLightIcon } from "../light";
        import { SpadeRegularIcon } from "../regular";
        import { SpadeThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SpadeIcon = memo(function Spade(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SpadeBoldIcon,
            duotone: SpadeDuotoneIcon,
            fill: SpadeFillIcon,
            light: SpadeLightIcon,
            regular: SpadeRegularIcon,
            thin: SpadeThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
