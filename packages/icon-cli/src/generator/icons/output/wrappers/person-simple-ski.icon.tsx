import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PersonSimpleSkiBoldIcon } from "../bold";
        import { PersonSimpleSkiDuotoneIcon } from "../duotone";
        import { PersonSimpleSkiFillIcon } from "../fill";
        import { PersonSimpleSkiLightIcon } from "../light";
        import { PersonSimpleSkiRegularIcon } from "../regular";
        import { PersonSimpleSkiThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PersonSimpleSkiIcon = memo(function PersonSimpleSki(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PersonSimpleSkiBoldIcon,
            duotone: PersonSimpleSkiDuotoneIcon,
            fill: PersonSimpleSkiFillIcon,
            light: PersonSimpleSkiLightIcon,
            regular: PersonSimpleSkiRegularIcon,
            thin: PersonSimpleSkiThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
