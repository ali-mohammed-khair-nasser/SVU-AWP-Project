import { IEntity } from './'

export class Entity implements IEntity {
  getSendableProperties(): Partial<Entity> {
    return {}
  }
}
