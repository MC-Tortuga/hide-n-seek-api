import {HideAndSeekApiApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {HideAndSeekApiApplication};

export async function main(options?: ApplicationConfig) {
  const app = new HideAndSeekApiApplication(options);
  await app.boot();
  await app.start();
  return app;
}
