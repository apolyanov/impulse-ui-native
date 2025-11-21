import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PersonSimpleTaiChiBoldIcon } from "../bold";
        import { PersonSimpleTaiChiDuotoneIcon } from "../duotone";
        import { PersonSimpleTaiChiFillIcon } from "../fill";
        import { PersonSimpleTaiChiLightIcon } from "../light";
        import { PersonSimpleTaiChiRegularIcon } from "../regular";
        import { PersonSimpleTaiChiThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PersonSimpleTaiChiIcon = memo(function PersonSimpleTaiChi(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PersonSimpleTaiChiBoldIcon,
            duotone: PersonSimpleTaiChiDuotoneIcon,
            fill: PersonSimpleTaiChiFillIcon,
            light: PersonSimpleTaiChiLightIcon,
            regular: PersonSimpleTaiChiRegularIcon,
            thin: PersonSimpleTaiChiThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
