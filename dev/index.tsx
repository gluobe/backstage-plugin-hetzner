import { createDevApp } from '@backstage/dev-utils';
import { hetznerCloudPlugin, HetznerCloudPage } from '../src/plugin';

createDevApp()
  .registerPlugin(hetznerCloudPlugin)
  .addPage({
    element: <HetznerCloudPage />,
    title: 'Root Page',
    path: '/hetzner-cloud',
  })
  .render();
