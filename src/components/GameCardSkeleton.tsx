import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card>
      <Skeleton height="165px" />
      <CardBody>
        <SkeletonText height="84px" />
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;
