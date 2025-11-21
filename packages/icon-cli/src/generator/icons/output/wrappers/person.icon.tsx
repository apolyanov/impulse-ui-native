import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PersonBoldIcon } from "../bold";
        import { PersonDuotoneIcon } from "../duotone";
        import { PersonFillIcon } from "../fill";
        import { PersonLightIcon } from "../light";
        import { PersonRegularIcon } from "../regular";
        import { PersonThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PersonIcon = memo(function Person(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PersonBoldIcon,
            duotone: PersonDuotoneIcon,
            fill: PersonFillIcon,
            light: PersonLightIcon,
            regular: PersonRegularIcon,
            thin: PersonThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
