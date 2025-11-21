import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BathtubBoldIcon } from "../bold";
        import { BathtubDuotoneIcon } from "../duotone";
        import { BathtubFillIcon } from "../fill";
        import { BathtubLightIcon } from "../light";
        import { BathtubRegularIcon } from "../regular";
        import { BathtubThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BathtubIcon = memo(function Bathtub(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BathtubBoldIcon,
            duotone: BathtubDuotoneIcon,
            fill: BathtubFillIcon,
            light: BathtubLightIcon,
            regular: BathtubRegularIcon,
            thin: BathtubThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
