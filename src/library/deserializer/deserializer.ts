
export type CanMake<E, M> = (entity: E) => M

export type DeserializerStack<M> = { [key: string]: () => void };

export abstract class Deserializer<E, M > {
  /**
   * Holds instance of entity model
   */
  protected entityModel: M;

  /**
   * Stack of syncronous deserializing functions.
   *
   * @RULES
   * There is one rule applied on every function added in deserializer stack:
   * - Every function must be syncronous. Use `middlewares` for asyncronous tasks.
   *
   */
  protected abstract deserializers: DeserializerStack<M>;

  constructor(private readonly entity: E, private makeModel: CanMake<E, M>) {
    this.entityModel = this.makeModel({
      ...this.entity,
    });
  }



  /**
   * Executes all syncronous functions from the `deserializers` stack
   * And return entity model after deserialization
   * @returns
   *
   */
  deserialize(): M {
    const deserializerTasks = Object.keys(this.deserializers);

    if (deserializerTasks.length === 0) {
      return this.entityModel;
    }

    deserializerTasks.forEach((task) => {
      this.deserializers[task]();
    });

    return this.entityModel;
  }
}