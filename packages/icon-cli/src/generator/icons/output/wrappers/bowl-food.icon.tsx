import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BowlFoodBoldIcon } from "../bold";
        import { BowlFoodDuotoneIcon } from "../duotone";
        import { BowlFoodFillIcon } from "../fill";
        import { BowlFoodLightIcon } from "../light";
        import { BowlFoodRegularIcon } from "../regular";
        import { BowlFoodThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BowlFoodIcon = memo(function BowlFood(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BowlFoodBoldIcon,
            duotone: BowlFoodDuotoneIcon,
            fill: BowlFoodFillIcon,
            light: BowlFoodLightIcon,
            regular: BowlFoodRegularIcon,
            thin: BowlFoodThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
