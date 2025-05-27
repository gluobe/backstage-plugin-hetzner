import {
  createComponentExtension,
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const hetznerCloudPlugin = createPlugin({
  id: 'hetzner',
  routes: {
    root: rootRouteRef,
  },
});

export const EntityHetznerCloudContent = hetznerCloudPlugin.provide(
  createComponentExtension({
    component: {
      lazy: () =>
        import('./components/Resource/ResourcesCard').then(
          (m) => m.ResourcesCard
        ),
    },
  })
);

export const HetznerCloudPage = hetznerCloudPlugin.provide(
  createRoutableExtension({
    name: 'HetznerCloudPage',
    component: () =>
      import('./components/HetznerOverview/OverviewPage').then(
        (m) => m.OverviewPage
      ),
    mountPoint: rootRouteRef,
  })
);
