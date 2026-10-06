import { memo } from "react";

import type { CardProps } from "../types";
import { Card } from "./card-parts";

export const CardComponent = memo(function CardComponent({
  children,
  header,
  media,
  footer,
  ...props
}: CardProps) {
  return (
    <Card.Root {...props}>
      {media !== null && media !== undefined ? (
        <Card.Media>{media}</Card.Media>
      ) : null}
      {header !== null && header !== undefined ? (
        <Card.Header>{header}</Card.Header>
      ) : null}
      <Card.Content>{children}</Card.Content>
      {footer !== null && footer !== undefined ? (
        <Card.Footer>{footer}</Card.Footer>
      ) : null}
    </Card.Root>
  );
});
