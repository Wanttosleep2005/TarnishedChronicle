import { graceForEntityId } from '../src/renderer/src/lib/derive.ts';

const rampart = graceForEntityId(10002955);
if (rampart?.name !== 'Rampart Tower') {
  throw new Error(`运行时赐福 ID 未映射到 Rampart Tower:${rampart?.name ?? 'missing'}`);
}

const direct = graceForEntityId(10001955);
if (direct?.name !== 'Rampart Tower') {
  throw new Error(`目录赐福 ID 映射异常:${direct?.name ?? 'missing'}`);
}

console.log('赐福实体 ID 映射通过');
