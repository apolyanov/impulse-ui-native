import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { MedalMilitaryBoldIcon } from "../bold";
        import { MedalMilitaryDuotoneIcon } from "../duotone";
        import { MedalMilitaryFillIcon } from "../fill";
        import { MedalMilitaryLightIcon } from "../light";
        import { MedalMilitaryRegularIcon } from "../regular";
        import { MedalMilitaryThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const MedalMilitaryIcon = memo(function MedalMilitary(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: MedalMilitaryBoldIcon,
            duotone: MedalMilitaryDuotoneIcon,
            fill: MedalMilitaryFillIcon,
            light: MedalMilitaryLightIcon,
            regular: MedalMilitaryRegularIcon,
            thin: MedalMilitaryThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
