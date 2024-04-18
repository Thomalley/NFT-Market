import { Skeleton } from '@nextui-org/react';
import React from 'react';

const SkeletonTopCreator = () => (
  <div className="max-w-[300px] flex items-center w-full gap-3">
    <div>
      <Skeleton className="rounded-full size-20" />
    </div>
    <div className="w-full flex flex-col gap-2">
      <Skeleton className="h-3 w-3/5 rounded-lg" />
      <Skeleton className="h-3 w-4/5 rounded-lg" />
    </div>
  </div>
);

export default SkeletonTopCreator;
