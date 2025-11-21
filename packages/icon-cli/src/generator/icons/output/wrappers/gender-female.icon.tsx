import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GenderFemaleBoldIcon } from "../bold";
        import { GenderFemaleDuotoneIcon } from "../duotone";
        import { GenderFemaleFillIcon } from "../fill";
        import { GenderFemaleLightIcon } from "../light";
        import { GenderFemaleRegularIcon } from "../regular";
        import { GenderFemaleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GenderFemaleIcon = memo(function GenderFemale(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GenderFemaleBoldIcon,
            duotone: GenderFemaleDuotoneIcon,
            fill: GenderFemaleFillIcon,
            light: GenderFemaleLightIcon,
            regular: GenderFemaleRegularIcon,
            thin: GenderFemaleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
