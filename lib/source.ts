import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/docs',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  source: docs.toFumadocsSource(),
});
