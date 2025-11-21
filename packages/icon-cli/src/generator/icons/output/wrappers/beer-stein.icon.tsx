import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BeerSteinBoldIcon } from "../bold";
        import { BeerSteinDuotoneIcon } from "../duotone";
        import { BeerSteinFillIcon } from "../fill";
        import { BeerSteinLightIcon } from "../light";
        import { BeerSteinRegularIcon } from "../regular";
        import { BeerSteinThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BeerSteinIcon = memo(function BeerStein(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BeerSteinBoldIcon,
            duotone: BeerSteinDuotoneIcon,
            fill: BeerSteinFillIcon,
            light: BeerSteinLightIcon,
            regular: BeerSteinRegularIcon,
            thin: BeerSteinThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
