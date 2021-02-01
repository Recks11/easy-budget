import {
  createStore,
  get,
  set,
  clear,
  UseStore
} from 'idb-keyval';

export class PersistentStore {
  private readonly store: UseStore

  constructor () {
    this.store = createStore('budget-db', 'budget-store')
  }

  public async set(key: string, val: unknown) {
    await set(key, val, this.store)
  }

  public async get<T>(key: string): Promise<T> {
    return await get(key, this.store) as T
  }

  async clearStore () {
    await clear(this.store)
  }
}
