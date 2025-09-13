import { BorderProps } from './border.types';
import { ColorProps } from './color.types';
import { ShadowProps } from './shadow.types';
import { SpacingProps } from './spacing.types';
import { TypographyProps } from './typography.types';

export type StyleProps = Partial<
  SpacingProps & ColorProps & ShadowProps & BorderProps & TypographyProps
>;

export type StylePropKey = keyof StyleProps;
