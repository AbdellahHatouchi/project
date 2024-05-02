
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Zone
 * 
 */
export type Zone = $Result.DefaultSelection<Prisma.$ZonePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Observations
 * 
 */
export type Observations = $Result.DefaultSelection<Prisma.$ObservationsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Zones
 * const zones = await prisma.zone.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Zones
   * const zones = await prisma.zone.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.zone`: Exposes CRUD operations for the **Zone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Zones
    * const zones = await prisma.zone.findMany()
    * ```
    */
  get zone(): Prisma.ZoneDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.observations`: Exposes CRUD operations for the **Observations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Observations
    * const observations = await prisma.observations.findMany()
    * ```
    */
  get observations(): Prisma.ObservationsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.13.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Zone: 'Zone',
    User: 'User',
    Observations: 'Observations'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'zone' | 'user' | 'observations'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Zone: {
        payload: Prisma.$ZonePayload<ExtArgs>
        fields: Prisma.ZoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZoneFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ZonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZoneFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          findFirst: {
            args: Prisma.ZoneFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ZonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZoneFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          findMany: {
            args: Prisma.ZoneFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>[]
          }
          create: {
            args: Prisma.ZoneCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          createMany: {
            args: Prisma.ZoneCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ZoneDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          update: {
            args: Prisma.ZoneUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          deleteMany: {
            args: Prisma.ZoneDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ZoneUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ZoneUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          aggregate: {
            args: Prisma.ZoneAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateZone>
          }
          groupBy: {
            args: Prisma.ZoneGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ZoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZoneCountArgs<ExtArgs>,
            result: $Utils.Optional<ZoneCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Observations: {
        payload: Prisma.$ObservationsPayload<ExtArgs>
        fields: Prisma.ObservationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObservationsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ObservationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObservationsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ObservationsPayload>
          }
          findFirst: {
            args: Prisma.ObservationsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ObservationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObservationsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ObservationsPayload>
          }
          findMany: {
            args: Prisma.ObservationsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ObservationsPayload>[]
          }
          create: {
            args: Prisma.ObservationsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ObservationsPayload>
          }
          createMany: {
            args: Prisma.ObservationsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ObservationsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ObservationsPayload>
          }
          update: {
            args: Prisma.ObservationsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ObservationsPayload>
          }
          deleteMany: {
            args: Prisma.ObservationsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ObservationsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ObservationsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ObservationsPayload>
          }
          aggregate: {
            args: Prisma.ObservationsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateObservations>
          }
          groupBy: {
            args: Prisma.ObservationsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ObservationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObservationsCountArgs<ExtArgs>,
            result: $Utils.Optional<ObservationsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ZoneCountOutputType
   */

  export type ZoneCountOutputType = {
    employees: number
    observation: number
  }

  export type ZoneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | ZoneCountOutputTypeCountEmployeesArgs
    observation?: boolean | ZoneCountOutputTypeCountObservationArgs
  }

  // Custom InputTypes
  /**
   * ZoneCountOutputType without action
   */
  export type ZoneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneCountOutputType
     */
    select?: ZoneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ZoneCountOutputType without action
   */
  export type ZoneCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObservationsWhereInput
  }

  /**
   * ZoneCountOutputType without action
   */
  export type ZoneCountOutputTypeCountObservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObservationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Zone
   */

  export type AggregateZone = {
    _count: ZoneCountAggregateOutputType | null
    _avg: ZoneAvgAggregateOutputType | null
    _sum: ZoneSumAggregateOutputType | null
    _min: ZoneMinAggregateOutputType | null
    _max: ZoneMaxAggregateOutputType | null
  }

  export type ZoneAvgAggregateOutputType = {
    id: number | null
  }

  export type ZoneSumAggregateOutputType = {
    id: number | null
  }

  export type ZoneMinAggregateOutputType = {
    id: number | null
    name: string | null
    leaderFullName: string | null
    eNumberLeader: string | null
  }

  export type ZoneMaxAggregateOutputType = {
    id: number | null
    name: string | null
    leaderFullName: string | null
    eNumberLeader: string | null
  }

  export type ZoneCountAggregateOutputType = {
    id: number
    name: number
    leaderFullName: number
    eNumberLeader: number
    _all: number
  }


  export type ZoneAvgAggregateInputType = {
    id?: true
  }

  export type ZoneSumAggregateInputType = {
    id?: true
  }

  export type ZoneMinAggregateInputType = {
    id?: true
    name?: true
    leaderFullName?: true
    eNumberLeader?: true
  }

  export type ZoneMaxAggregateInputType = {
    id?: true
    name?: true
    leaderFullName?: true
    eNumberLeader?: true
  }

  export type ZoneCountAggregateInputType = {
    id?: true
    name?: true
    leaderFullName?: true
    eNumberLeader?: true
    _all?: true
  }

  export type ZoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zone to aggregate.
     */
    where?: ZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zones to fetch.
     */
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Zones
    **/
    _count?: true | ZoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZoneMaxAggregateInputType
  }

  export type GetZoneAggregateType<T extends ZoneAggregateArgs> = {
        [P in keyof T & keyof AggregateZone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZone[P]>
      : GetScalarType<T[P], AggregateZone[P]>
  }




  export type ZoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZoneWhereInput
    orderBy?: ZoneOrderByWithAggregationInput | ZoneOrderByWithAggregationInput[]
    by: ZoneScalarFieldEnum[] | ZoneScalarFieldEnum
    having?: ZoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZoneCountAggregateInputType | true
    _avg?: ZoneAvgAggregateInputType
    _sum?: ZoneSumAggregateInputType
    _min?: ZoneMinAggregateInputType
    _max?: ZoneMaxAggregateInputType
  }

  export type ZoneGroupByOutputType = {
    id: number
    name: string
    leaderFullName: string
    eNumberLeader: string
    _count: ZoneCountAggregateOutputType | null
    _avg: ZoneAvgAggregateOutputType | null
    _sum: ZoneSumAggregateOutputType | null
    _min: ZoneMinAggregateOutputType | null
    _max: ZoneMaxAggregateOutputType | null
  }

  type GetZoneGroupByPayload<T extends ZoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZoneGroupByOutputType[P]>
            : GetScalarType<T[P], ZoneGroupByOutputType[P]>
        }
      >
    >


  export type ZoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    leaderFullName?: boolean
    eNumberLeader?: boolean
    employees?: boolean | Zone$employeesArgs<ExtArgs>
    observation?: boolean | Zone$observationArgs<ExtArgs>
    _count?: boolean | ZoneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zone"]>

  export type ZoneSelectScalar = {
    id?: boolean
    name?: boolean
    leaderFullName?: boolean
    eNumberLeader?: boolean
  }


  export type ZoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | Zone$employeesArgs<ExtArgs>
    observation?: boolean | Zone$observationArgs<ExtArgs>
    _count?: boolean | ZoneCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ZonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Zone"
    objects: {
      employees: Prisma.$ObservationsPayload<ExtArgs>[]
      observation: Prisma.$ObservationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      leaderFullName: string
      eNumberLeader: string
    }, ExtArgs["result"]["zone"]>
    composites: {}
  }


  type ZoneGetPayload<S extends boolean | null | undefined | ZoneDefaultArgs> = $Result.GetResult<Prisma.$ZonePayload, S>

  type ZoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ZoneFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ZoneCountAggregateInputType | true
    }

  export interface ZoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Zone'], meta: { name: 'Zone' } }
    /**
     * Find zero or one Zone that matches the filter.
     * @param {ZoneFindUniqueArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ZoneFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ZoneFindUniqueArgs<ExtArgs>>
    ): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Zone that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ZoneFindUniqueOrThrowArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ZoneFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ZoneFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Zone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneFindFirstArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ZoneFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ZoneFindFirstArgs<ExtArgs>>
    ): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Zone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneFindFirstOrThrowArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ZoneFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ZoneFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Zones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Zones
     * const zones = await prisma.zone.findMany()
     * 
     * // Get first 10 Zones
     * const zones = await prisma.zone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zoneWithIdOnly = await prisma.zone.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ZoneFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ZoneFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Zone.
     * @param {ZoneCreateArgs} args - Arguments to create a Zone.
     * @example
     * // Create one Zone
     * const Zone = await prisma.zone.create({
     *   data: {
     *     // ... data to create a Zone
     *   }
     * })
     * 
    **/
    create<T extends ZoneCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ZoneCreateArgs<ExtArgs>>
    ): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Zones.
     *     @param {ZoneCreateManyArgs} args - Arguments to create many Zones.
     *     @example
     *     // Create many Zones
     *     const zone = await prisma.zone.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ZoneCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ZoneCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Zone.
     * @param {ZoneDeleteArgs} args - Arguments to delete one Zone.
     * @example
     * // Delete one Zone
     * const Zone = await prisma.zone.delete({
     *   where: {
     *     // ... filter to delete one Zone
     *   }
     * })
     * 
    **/
    delete<T extends ZoneDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ZoneDeleteArgs<ExtArgs>>
    ): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Zone.
     * @param {ZoneUpdateArgs} args - Arguments to update one Zone.
     * @example
     * // Update one Zone
     * const zone = await prisma.zone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ZoneUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ZoneUpdateArgs<ExtArgs>>
    ): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Zones.
     * @param {ZoneDeleteManyArgs} args - Arguments to filter Zones to delete.
     * @example
     * // Delete a few Zones
     * const { count } = await prisma.zone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ZoneDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ZoneDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Zones
     * const zone = await prisma.zone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ZoneUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ZoneUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Zone.
     * @param {ZoneUpsertArgs} args - Arguments to update or create a Zone.
     * @example
     * // Update or create a Zone
     * const zone = await prisma.zone.upsert({
     *   create: {
     *     // ... data to create a Zone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Zone we want to update
     *   }
     * })
    **/
    upsert<T extends ZoneUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ZoneUpsertArgs<ExtArgs>>
    ): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Zones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneCountArgs} args - Arguments to filter Zones to count.
     * @example
     * // Count the number of Zones
     * const count = await prisma.zone.count({
     *   where: {
     *     // ... the filter for the Zones we want to count
     *   }
     * })
    **/
    count<T extends ZoneCountArgs>(
      args?: Subset<T, ZoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Zone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZoneAggregateArgs>(args: Subset<T, ZoneAggregateArgs>): Prisma.PrismaPromise<GetZoneAggregateType<T>>

    /**
     * Group by Zone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZoneGroupByArgs['orderBy'] }
        : { orderBy?: ZoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Zone model
   */
  readonly fields: ZoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Zone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    employees<T extends Zone$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Zone$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObservationsPayload<ExtArgs>, T, 'findMany'> | Null>;

    observation<T extends Zone$observationArgs<ExtArgs> = {}>(args?: Subset<T, Zone$observationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObservationsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Zone model
   */ 
  interface ZoneFieldRefs {
    readonly id: FieldRef<"Zone", 'Int'>
    readonly name: FieldRef<"Zone", 'String'>
    readonly leaderFullName: FieldRef<"Zone", 'String'>
    readonly eNumberLeader: FieldRef<"Zone", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Zone findUnique
   */
  export type ZoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zone to fetch.
     */
    where: ZoneWhereUniqueInput
  }

  /**
   * Zone findUniqueOrThrow
   */
  export type ZoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zone to fetch.
     */
    where: ZoneWhereUniqueInput
  }

  /**
   * Zone findFirst
   */
  export type ZoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zone to fetch.
     */
    where?: ZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zones to fetch.
     */
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zones.
     */
    cursor?: ZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zones.
     */
    distinct?: ZoneScalarFieldEnum | ZoneScalarFieldEnum[]
  }

  /**
   * Zone findFirstOrThrow
   */
  export type ZoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zone to fetch.
     */
    where?: ZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zones to fetch.
     */
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zones.
     */
    cursor?: ZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zones.
     */
    distinct?: ZoneScalarFieldEnum | ZoneScalarFieldEnum[]
  }

  /**
   * Zone findMany
   */
  export type ZoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zones to fetch.
     */
    where?: ZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zones to fetch.
     */
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Zones.
     */
    cursor?: ZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zones.
     */
    skip?: number
    distinct?: ZoneScalarFieldEnum | ZoneScalarFieldEnum[]
  }

  /**
   * Zone create
   */
  export type ZoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Zone.
     */
    data: XOR<ZoneCreateInput, ZoneUncheckedCreateInput>
  }

  /**
   * Zone createMany
   */
  export type ZoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Zones.
     */
    data: ZoneCreateManyInput | ZoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Zone update
   */
  export type ZoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Zone.
     */
    data: XOR<ZoneUpdateInput, ZoneUncheckedUpdateInput>
    /**
     * Choose, which Zone to update.
     */
    where: ZoneWhereUniqueInput
  }

  /**
   * Zone updateMany
   */
  export type ZoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Zones.
     */
    data: XOR<ZoneUpdateManyMutationInput, ZoneUncheckedUpdateManyInput>
    /**
     * Filter which Zones to update
     */
    where?: ZoneWhereInput
  }

  /**
   * Zone upsert
   */
  export type ZoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Zone to update in case it exists.
     */
    where: ZoneWhereUniqueInput
    /**
     * In case the Zone found by the `where` argument doesn't exist, create a new Zone with this data.
     */
    create: XOR<ZoneCreateInput, ZoneUncheckedCreateInput>
    /**
     * In case the Zone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZoneUpdateInput, ZoneUncheckedUpdateInput>
  }

  /**
   * Zone delete
   */
  export type ZoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter which Zone to delete.
     */
    where: ZoneWhereUniqueInput
  }

  /**
   * Zone deleteMany
   */
  export type ZoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zones to delete
     */
    where?: ZoneWhereInput
  }

  /**
   * Zone.employees
   */
  export type Zone$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observations
     */
    select?: ObservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationsInclude<ExtArgs> | null
    where?: ObservationsWhereInput
    orderBy?: ObservationsOrderByWithRelationInput | ObservationsOrderByWithRelationInput[]
    cursor?: ObservationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObservationsScalarFieldEnum | ObservationsScalarFieldEnum[]
  }

  /**
   * Zone.observation
   */
  export type Zone$observationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observations
     */
    select?: ObservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationsInclude<ExtArgs> | null
    where?: ObservationsWhereInput
    orderBy?: ObservationsOrderByWithRelationInput | ObservationsOrderByWithRelationInput[]
    cursor?: ObservationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObservationsScalarFieldEnum | ObservationsScalarFieldEnum[]
  }

  /**
   * Zone without action
   */
  export type ZoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    isAdmin: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    isAdmin?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    isAdmin?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    isAdmin?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    isAdmin: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
  }



  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      isAdmin: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model Observations
   */

  export type AggregateObservations = {
    _count: ObservationsCountAggregateOutputType | null
    _avg: ObservationsAvgAggregateOutputType | null
    _sum: ObservationsSumAggregateOutputType | null
    _min: ObservationsMinAggregateOutputType | null
    _max: ObservationsMaxAggregateOutputType | null
  }

  export type ObservationsAvgAggregateOutputType = {
    id: number | null
    employeeZone: number | null
    observationZone: number | null
  }

  export type ObservationsSumAggregateOutputType = {
    id: number | null
    employeeZone: number | null
    observationZone: number | null
  }

  export type ObservationsMinAggregateOutputType = {
    id: number | null
    employeeFirstName: string | null
    employeeLastName: string | null
    employeeEnumber: string | null
    employeeFunctionality: string | null
    employeeZone: number | null
    nameLeaderEmployeeZone: string | null
    observationZone: number | null
    nameLeaderObservationZone: string | null
    observation: string | null
    suggestion: string | null
    adminCommentaire: string | null
    isAccepted: boolean | null
    isResolved: boolean | null
  }

  export type ObservationsMaxAggregateOutputType = {
    id: number | null
    employeeFirstName: string | null
    employeeLastName: string | null
    employeeEnumber: string | null
    employeeFunctionality: string | null
    employeeZone: number | null
    nameLeaderEmployeeZone: string | null
    observationZone: number | null
    nameLeaderObservationZone: string | null
    observation: string | null
    suggestion: string | null
    adminCommentaire: string | null
    isAccepted: boolean | null
    isResolved: boolean | null
  }

  export type ObservationsCountAggregateOutputType = {
    id: number
    employeeFirstName: number
    employeeLastName: number
    employeeEnumber: number
    employeeFunctionality: number
    employeeZone: number
    nameLeaderEmployeeZone: number
    observationZone: number
    nameLeaderObservationZone: number
    observation: number
    suggestion: number
    adminCommentaire: number
    isAccepted: number
    isResolved: number
    _all: number
  }


  export type ObservationsAvgAggregateInputType = {
    id?: true
    employeeZone?: true
    observationZone?: true
  }

  export type ObservationsSumAggregateInputType = {
    id?: true
    employeeZone?: true
    observationZone?: true
  }

  export type ObservationsMinAggregateInputType = {
    id?: true
    employeeFirstName?: true
    employeeLastName?: true
    employeeEnumber?: true
    employeeFunctionality?: true
    employeeZone?: true
    nameLeaderEmployeeZone?: true
    observationZone?: true
    nameLeaderObservationZone?: true
    observation?: true
    suggestion?: true
    adminCommentaire?: true
    isAccepted?: true
    isResolved?: true
  }

  export type ObservationsMaxAggregateInputType = {
    id?: true
    employeeFirstName?: true
    employeeLastName?: true
    employeeEnumber?: true
    employeeFunctionality?: true
    employeeZone?: true
    nameLeaderEmployeeZone?: true
    observationZone?: true
    nameLeaderObservationZone?: true
    observation?: true
    suggestion?: true
    adminCommentaire?: true
    isAccepted?: true
    isResolved?: true
  }

  export type ObservationsCountAggregateInputType = {
    id?: true
    employeeFirstName?: true
    employeeLastName?: true
    employeeEnumber?: true
    employeeFunctionality?: true
    employeeZone?: true
    nameLeaderEmployeeZone?: true
    observationZone?: true
    nameLeaderObservationZone?: true
    observation?: true
    suggestion?: true
    adminCommentaire?: true
    isAccepted?: true
    isResolved?: true
    _all?: true
  }

  export type ObservationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Observations to aggregate.
     */
    where?: ObservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Observations to fetch.
     */
    orderBy?: ObservationsOrderByWithRelationInput | ObservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Observations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Observations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Observations
    **/
    _count?: true | ObservationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ObservationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ObservationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObservationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObservationsMaxAggregateInputType
  }

  export type GetObservationsAggregateType<T extends ObservationsAggregateArgs> = {
        [P in keyof T & keyof AggregateObservations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObservations[P]>
      : GetScalarType<T[P], AggregateObservations[P]>
  }




  export type ObservationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObservationsWhereInput
    orderBy?: ObservationsOrderByWithAggregationInput | ObservationsOrderByWithAggregationInput[]
    by: ObservationsScalarFieldEnum[] | ObservationsScalarFieldEnum
    having?: ObservationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObservationsCountAggregateInputType | true
    _avg?: ObservationsAvgAggregateInputType
    _sum?: ObservationsSumAggregateInputType
    _min?: ObservationsMinAggregateInputType
    _max?: ObservationsMaxAggregateInputType
  }

  export type ObservationsGroupByOutputType = {
    id: number
    employeeFirstName: string
    employeeLastName: string
    employeeEnumber: string
    employeeFunctionality: string
    employeeZone: number
    nameLeaderEmployeeZone: string
    observationZone: number
    nameLeaderObservationZone: string
    observation: string
    suggestion: string
    adminCommentaire: string
    isAccepted: boolean
    isResolved: boolean
    _count: ObservationsCountAggregateOutputType | null
    _avg: ObservationsAvgAggregateOutputType | null
    _sum: ObservationsSumAggregateOutputType | null
    _min: ObservationsMinAggregateOutputType | null
    _max: ObservationsMaxAggregateOutputType | null
  }

  type GetObservationsGroupByPayload<T extends ObservationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObservationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObservationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObservationsGroupByOutputType[P]>
            : GetScalarType<T[P], ObservationsGroupByOutputType[P]>
        }
      >
    >


  export type ObservationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeFirstName?: boolean
    employeeLastName?: boolean
    employeeEnumber?: boolean
    employeeFunctionality?: boolean
    employeeZone?: boolean
    nameLeaderEmployeeZone?: boolean
    observationZone?: boolean
    nameLeaderObservationZone?: boolean
    observation?: boolean
    suggestion?: boolean
    adminCommentaire?: boolean
    isAccepted?: boolean
    isResolved?: boolean
    employeeZoneRelation?: boolean | ZoneDefaultArgs<ExtArgs>
    observationZoneRelation?: boolean | ZoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["observations"]>

  export type ObservationsSelectScalar = {
    id?: boolean
    employeeFirstName?: boolean
    employeeLastName?: boolean
    employeeEnumber?: boolean
    employeeFunctionality?: boolean
    employeeZone?: boolean
    nameLeaderEmployeeZone?: boolean
    observationZone?: boolean
    nameLeaderObservationZone?: boolean
    observation?: boolean
    suggestion?: boolean
    adminCommentaire?: boolean
    isAccepted?: boolean
    isResolved?: boolean
  }


  export type ObservationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employeeZoneRelation?: boolean | ZoneDefaultArgs<ExtArgs>
    observationZoneRelation?: boolean | ZoneDefaultArgs<ExtArgs>
  }


  export type $ObservationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Observations"
    objects: {
      employeeZoneRelation: Prisma.$ZonePayload<ExtArgs>
      observationZoneRelation: Prisma.$ZonePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employeeFirstName: string
      employeeLastName: string
      employeeEnumber: string
      employeeFunctionality: string
      employeeZone: number
      nameLeaderEmployeeZone: string
      observationZone: number
      nameLeaderObservationZone: string
      observation: string
      suggestion: string
      adminCommentaire: string
      isAccepted: boolean
      isResolved: boolean
    }, ExtArgs["result"]["observations"]>
    composites: {}
  }


  type ObservationsGetPayload<S extends boolean | null | undefined | ObservationsDefaultArgs> = $Result.GetResult<Prisma.$ObservationsPayload, S>

  type ObservationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ObservationsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ObservationsCountAggregateInputType | true
    }

  export interface ObservationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Observations'], meta: { name: 'Observations' } }
    /**
     * Find zero or one Observations that matches the filter.
     * @param {ObservationsFindUniqueArgs} args - Arguments to find a Observations
     * @example
     * // Get one Observations
     * const observations = await prisma.observations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ObservationsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ObservationsFindUniqueArgs<ExtArgs>>
    ): Prisma__ObservationsClient<$Result.GetResult<Prisma.$ObservationsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Observations that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ObservationsFindUniqueOrThrowArgs} args - Arguments to find a Observations
     * @example
     * // Get one Observations
     * const observations = await prisma.observations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ObservationsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ObservationsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ObservationsClient<$Result.GetResult<Prisma.$ObservationsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Observations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationsFindFirstArgs} args - Arguments to find a Observations
     * @example
     * // Get one Observations
     * const observations = await prisma.observations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ObservationsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ObservationsFindFirstArgs<ExtArgs>>
    ): Prisma__ObservationsClient<$Result.GetResult<Prisma.$ObservationsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Observations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationsFindFirstOrThrowArgs} args - Arguments to find a Observations
     * @example
     * // Get one Observations
     * const observations = await prisma.observations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ObservationsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ObservationsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ObservationsClient<$Result.GetResult<Prisma.$ObservationsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Observations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Observations
     * const observations = await prisma.observations.findMany()
     * 
     * // Get first 10 Observations
     * const observations = await prisma.observations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const observationsWithIdOnly = await prisma.observations.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ObservationsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ObservationsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObservationsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Observations.
     * @param {ObservationsCreateArgs} args - Arguments to create a Observations.
     * @example
     * // Create one Observations
     * const Observations = await prisma.observations.create({
     *   data: {
     *     // ... data to create a Observations
     *   }
     * })
     * 
    **/
    create<T extends ObservationsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ObservationsCreateArgs<ExtArgs>>
    ): Prisma__ObservationsClient<$Result.GetResult<Prisma.$ObservationsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Observations.
     *     @param {ObservationsCreateManyArgs} args - Arguments to create many Observations.
     *     @example
     *     // Create many Observations
     *     const observations = await prisma.observations.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ObservationsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ObservationsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Observations.
     * @param {ObservationsDeleteArgs} args - Arguments to delete one Observations.
     * @example
     * // Delete one Observations
     * const Observations = await prisma.observations.delete({
     *   where: {
     *     // ... filter to delete one Observations
     *   }
     * })
     * 
    **/
    delete<T extends ObservationsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ObservationsDeleteArgs<ExtArgs>>
    ): Prisma__ObservationsClient<$Result.GetResult<Prisma.$ObservationsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Observations.
     * @param {ObservationsUpdateArgs} args - Arguments to update one Observations.
     * @example
     * // Update one Observations
     * const observations = await prisma.observations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ObservationsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ObservationsUpdateArgs<ExtArgs>>
    ): Prisma__ObservationsClient<$Result.GetResult<Prisma.$ObservationsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Observations.
     * @param {ObservationsDeleteManyArgs} args - Arguments to filter Observations to delete.
     * @example
     * // Delete a few Observations
     * const { count } = await prisma.observations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ObservationsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ObservationsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Observations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Observations
     * const observations = await prisma.observations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ObservationsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ObservationsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Observations.
     * @param {ObservationsUpsertArgs} args - Arguments to update or create a Observations.
     * @example
     * // Update or create a Observations
     * const observations = await prisma.observations.upsert({
     *   create: {
     *     // ... data to create a Observations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Observations we want to update
     *   }
     * })
    **/
    upsert<T extends ObservationsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ObservationsUpsertArgs<ExtArgs>>
    ): Prisma__ObservationsClient<$Result.GetResult<Prisma.$ObservationsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Observations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationsCountArgs} args - Arguments to filter Observations to count.
     * @example
     * // Count the number of Observations
     * const count = await prisma.observations.count({
     *   where: {
     *     // ... the filter for the Observations we want to count
     *   }
     * })
    **/
    count<T extends ObservationsCountArgs>(
      args?: Subset<T, ObservationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObservationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Observations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ObservationsAggregateArgs>(args: Subset<T, ObservationsAggregateArgs>): Prisma.PrismaPromise<GetObservationsAggregateType<T>>

    /**
     * Group by Observations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ObservationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObservationsGroupByArgs['orderBy'] }
        : { orderBy?: ObservationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ObservationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObservationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Observations model
   */
  readonly fields: ObservationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Observations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObservationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    employeeZoneRelation<T extends ZoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZoneDefaultArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    observationZoneRelation<T extends ZoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZoneDefaultArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Observations model
   */ 
  interface ObservationsFieldRefs {
    readonly id: FieldRef<"Observations", 'Int'>
    readonly employeeFirstName: FieldRef<"Observations", 'String'>
    readonly employeeLastName: FieldRef<"Observations", 'String'>
    readonly employeeEnumber: FieldRef<"Observations", 'String'>
    readonly employeeFunctionality: FieldRef<"Observations", 'String'>
    readonly employeeZone: FieldRef<"Observations", 'Int'>
    readonly nameLeaderEmployeeZone: FieldRef<"Observations", 'String'>
    readonly observationZone: FieldRef<"Observations", 'Int'>
    readonly nameLeaderObservationZone: FieldRef<"Observations", 'String'>
    readonly observation: FieldRef<"Observations", 'String'>
    readonly suggestion: FieldRef<"Observations", 'String'>
    readonly adminCommentaire: FieldRef<"Observations", 'String'>
    readonly isAccepted: FieldRef<"Observations", 'Boolean'>
    readonly isResolved: FieldRef<"Observations", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Observations findUnique
   */
  export type ObservationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observations
     */
    select?: ObservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationsInclude<ExtArgs> | null
    /**
     * Filter, which Observations to fetch.
     */
    where: ObservationsWhereUniqueInput
  }

  /**
   * Observations findUniqueOrThrow
   */
  export type ObservationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observations
     */
    select?: ObservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationsInclude<ExtArgs> | null
    /**
     * Filter, which Observations to fetch.
     */
    where: ObservationsWhereUniqueInput
  }

  /**
   * Observations findFirst
   */
  export type ObservationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observations
     */
    select?: ObservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationsInclude<ExtArgs> | null
    /**
     * Filter, which Observations to fetch.
     */
    where?: ObservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Observations to fetch.
     */
    orderBy?: ObservationsOrderByWithRelationInput | ObservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Observations.
     */
    cursor?: ObservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Observations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Observations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Observations.
     */
    distinct?: ObservationsScalarFieldEnum | ObservationsScalarFieldEnum[]
  }

  /**
   * Observations findFirstOrThrow
   */
  export type ObservationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observations
     */
    select?: ObservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationsInclude<ExtArgs> | null
    /**
     * Filter, which Observations to fetch.
     */
    where?: ObservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Observations to fetch.
     */
    orderBy?: ObservationsOrderByWithRelationInput | ObservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Observations.
     */
    cursor?: ObservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Observations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Observations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Observations.
     */
    distinct?: ObservationsScalarFieldEnum | ObservationsScalarFieldEnum[]
  }

  /**
   * Observations findMany
   */
  export type ObservationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observations
     */
    select?: ObservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationsInclude<ExtArgs> | null
    /**
     * Filter, which Observations to fetch.
     */
    where?: ObservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Observations to fetch.
     */
    orderBy?: ObservationsOrderByWithRelationInput | ObservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Observations.
     */
    cursor?: ObservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Observations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Observations.
     */
    skip?: number
    distinct?: ObservationsScalarFieldEnum | ObservationsScalarFieldEnum[]
  }

  /**
   * Observations create
   */
  export type ObservationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observations
     */
    select?: ObservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Observations.
     */
    data: XOR<ObservationsCreateInput, ObservationsUncheckedCreateInput>
  }

  /**
   * Observations createMany
   */
  export type ObservationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Observations.
     */
    data: ObservationsCreateManyInput | ObservationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Observations update
   */
  export type ObservationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observations
     */
    select?: ObservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Observations.
     */
    data: XOR<ObservationsUpdateInput, ObservationsUncheckedUpdateInput>
    /**
     * Choose, which Observations to update.
     */
    where: ObservationsWhereUniqueInput
  }

  /**
   * Observations updateMany
   */
  export type ObservationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Observations.
     */
    data: XOR<ObservationsUpdateManyMutationInput, ObservationsUncheckedUpdateManyInput>
    /**
     * Filter which Observations to update
     */
    where?: ObservationsWhereInput
  }

  /**
   * Observations upsert
   */
  export type ObservationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observations
     */
    select?: ObservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Observations to update in case it exists.
     */
    where: ObservationsWhereUniqueInput
    /**
     * In case the Observations found by the `where` argument doesn't exist, create a new Observations with this data.
     */
    create: XOR<ObservationsCreateInput, ObservationsUncheckedCreateInput>
    /**
     * In case the Observations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObservationsUpdateInput, ObservationsUncheckedUpdateInput>
  }

  /**
   * Observations delete
   */
  export type ObservationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observations
     */
    select?: ObservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationsInclude<ExtArgs> | null
    /**
     * Filter which Observations to delete.
     */
    where: ObservationsWhereUniqueInput
  }

  /**
   * Observations deleteMany
   */
  export type ObservationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Observations to delete
     */
    where?: ObservationsWhereInput
  }

  /**
   * Observations without action
   */
  export type ObservationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observations
     */
    select?: ObservationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ZoneScalarFieldEnum: {
    id: 'id',
    name: 'name',
    leaderFullName: 'leaderFullName',
    eNumberLeader: 'eNumberLeader'
  };

  export type ZoneScalarFieldEnum = (typeof ZoneScalarFieldEnum)[keyof typeof ZoneScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    isAdmin: 'isAdmin'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ObservationsScalarFieldEnum: {
    id: 'id',
    employeeFirstName: 'employeeFirstName',
    employeeLastName: 'employeeLastName',
    employeeEnumber: 'employeeEnumber',
    employeeFunctionality: 'employeeFunctionality',
    employeeZone: 'employeeZone',
    nameLeaderEmployeeZone: 'nameLeaderEmployeeZone',
    observationZone: 'observationZone',
    nameLeaderObservationZone: 'nameLeaderObservationZone',
    observation: 'observation',
    suggestion: 'suggestion',
    adminCommentaire: 'adminCommentaire',
    isAccepted: 'isAccepted',
    isResolved: 'isResolved'
  };

  export type ObservationsScalarFieldEnum = (typeof ObservationsScalarFieldEnum)[keyof typeof ObservationsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ZoneWhereInput = {
    AND?: ZoneWhereInput | ZoneWhereInput[]
    OR?: ZoneWhereInput[]
    NOT?: ZoneWhereInput | ZoneWhereInput[]
    id?: IntFilter<"Zone"> | number
    name?: StringFilter<"Zone"> | string
    leaderFullName?: StringFilter<"Zone"> | string
    eNumberLeader?: StringFilter<"Zone"> | string
    employees?: ObservationsListRelationFilter
    observation?: ObservationsListRelationFilter
  }

  export type ZoneOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    leaderFullName?: SortOrder
    eNumberLeader?: SortOrder
    employees?: ObservationsOrderByRelationAggregateInput
    observation?: ObservationsOrderByRelationAggregateInput
  }

  export type ZoneWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ZoneWhereInput | ZoneWhereInput[]
    OR?: ZoneWhereInput[]
    NOT?: ZoneWhereInput | ZoneWhereInput[]
    name?: StringFilter<"Zone"> | string
    leaderFullName?: StringFilter<"Zone"> | string
    eNumberLeader?: StringFilter<"Zone"> | string
    employees?: ObservationsListRelationFilter
    observation?: ObservationsListRelationFilter
  }, "id">

  export type ZoneOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    leaderFullName?: SortOrder
    eNumberLeader?: SortOrder
    _count?: ZoneCountOrderByAggregateInput
    _avg?: ZoneAvgOrderByAggregateInput
    _max?: ZoneMaxOrderByAggregateInput
    _min?: ZoneMinOrderByAggregateInput
    _sum?: ZoneSumOrderByAggregateInput
  }

  export type ZoneScalarWhereWithAggregatesInput = {
    AND?: ZoneScalarWhereWithAggregatesInput | ZoneScalarWhereWithAggregatesInput[]
    OR?: ZoneScalarWhereWithAggregatesInput[]
    NOT?: ZoneScalarWhereWithAggregatesInput | ZoneScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Zone"> | number
    name?: StringWithAggregatesFilter<"Zone"> | string
    leaderFullName?: StringWithAggregatesFilter<"Zone"> | string
    eNumberLeader?: StringWithAggregatesFilter<"Zone"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type ObservationsWhereInput = {
    AND?: ObservationsWhereInput | ObservationsWhereInput[]
    OR?: ObservationsWhereInput[]
    NOT?: ObservationsWhereInput | ObservationsWhereInput[]
    id?: IntFilter<"Observations"> | number
    employeeFirstName?: StringFilter<"Observations"> | string
    employeeLastName?: StringFilter<"Observations"> | string
    employeeEnumber?: StringFilter<"Observations"> | string
    employeeFunctionality?: StringFilter<"Observations"> | string
    employeeZone?: IntFilter<"Observations"> | number
    nameLeaderEmployeeZone?: StringFilter<"Observations"> | string
    observationZone?: IntFilter<"Observations"> | number
    nameLeaderObservationZone?: StringFilter<"Observations"> | string
    observation?: StringFilter<"Observations"> | string
    suggestion?: StringFilter<"Observations"> | string
    adminCommentaire?: StringFilter<"Observations"> | string
    isAccepted?: BoolFilter<"Observations"> | boolean
    isResolved?: BoolFilter<"Observations"> | boolean
    employeeZoneRelation?: XOR<ZoneRelationFilter, ZoneWhereInput>
    observationZoneRelation?: XOR<ZoneRelationFilter, ZoneWhereInput>
  }

  export type ObservationsOrderByWithRelationInput = {
    id?: SortOrder
    employeeFirstName?: SortOrder
    employeeLastName?: SortOrder
    employeeEnumber?: SortOrder
    employeeFunctionality?: SortOrder
    employeeZone?: SortOrder
    nameLeaderEmployeeZone?: SortOrder
    observationZone?: SortOrder
    nameLeaderObservationZone?: SortOrder
    observation?: SortOrder
    suggestion?: SortOrder
    adminCommentaire?: SortOrder
    isAccepted?: SortOrder
    isResolved?: SortOrder
    employeeZoneRelation?: ZoneOrderByWithRelationInput
    observationZoneRelation?: ZoneOrderByWithRelationInput
  }

  export type ObservationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ObservationsWhereInput | ObservationsWhereInput[]
    OR?: ObservationsWhereInput[]
    NOT?: ObservationsWhereInput | ObservationsWhereInput[]
    employeeFirstName?: StringFilter<"Observations"> | string
    employeeLastName?: StringFilter<"Observations"> | string
    employeeEnumber?: StringFilter<"Observations"> | string
    employeeFunctionality?: StringFilter<"Observations"> | string
    employeeZone?: IntFilter<"Observations"> | number
    nameLeaderEmployeeZone?: StringFilter<"Observations"> | string
    observationZone?: IntFilter<"Observations"> | number
    nameLeaderObservationZone?: StringFilter<"Observations"> | string
    observation?: StringFilter<"Observations"> | string
    suggestion?: StringFilter<"Observations"> | string
    adminCommentaire?: StringFilter<"Observations"> | string
    isAccepted?: BoolFilter<"Observations"> | boolean
    isResolved?: BoolFilter<"Observations"> | boolean
    employeeZoneRelation?: XOR<ZoneRelationFilter, ZoneWhereInput>
    observationZoneRelation?: XOR<ZoneRelationFilter, ZoneWhereInput>
  }, "id">

  export type ObservationsOrderByWithAggregationInput = {
    id?: SortOrder
    employeeFirstName?: SortOrder
    employeeLastName?: SortOrder
    employeeEnumber?: SortOrder
    employeeFunctionality?: SortOrder
    employeeZone?: SortOrder
    nameLeaderEmployeeZone?: SortOrder
    observationZone?: SortOrder
    nameLeaderObservationZone?: SortOrder
    observation?: SortOrder
    suggestion?: SortOrder
    adminCommentaire?: SortOrder
    isAccepted?: SortOrder
    isResolved?: SortOrder
    _count?: ObservationsCountOrderByAggregateInput
    _avg?: ObservationsAvgOrderByAggregateInput
    _max?: ObservationsMaxOrderByAggregateInput
    _min?: ObservationsMinOrderByAggregateInput
    _sum?: ObservationsSumOrderByAggregateInput
  }

  export type ObservationsScalarWhereWithAggregatesInput = {
    AND?: ObservationsScalarWhereWithAggregatesInput | ObservationsScalarWhereWithAggregatesInput[]
    OR?: ObservationsScalarWhereWithAggregatesInput[]
    NOT?: ObservationsScalarWhereWithAggregatesInput | ObservationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Observations"> | number
    employeeFirstName?: StringWithAggregatesFilter<"Observations"> | string
    employeeLastName?: StringWithAggregatesFilter<"Observations"> | string
    employeeEnumber?: StringWithAggregatesFilter<"Observations"> | string
    employeeFunctionality?: StringWithAggregatesFilter<"Observations"> | string
    employeeZone?: IntWithAggregatesFilter<"Observations"> | number
    nameLeaderEmployeeZone?: StringWithAggregatesFilter<"Observations"> | string
    observationZone?: IntWithAggregatesFilter<"Observations"> | number
    nameLeaderObservationZone?: StringWithAggregatesFilter<"Observations"> | string
    observation?: StringWithAggregatesFilter<"Observations"> | string
    suggestion?: StringWithAggregatesFilter<"Observations"> | string
    adminCommentaire?: StringWithAggregatesFilter<"Observations"> | string
    isAccepted?: BoolWithAggregatesFilter<"Observations"> | boolean
    isResolved?: BoolWithAggregatesFilter<"Observations"> | boolean
  }

  export type ZoneCreateInput = {
    name: string
    leaderFullName: string
    eNumberLeader: string
    employees?: ObservationsCreateNestedManyWithoutEmployeeZoneRelationInput
    observation?: ObservationsCreateNestedManyWithoutObservationZoneRelationInput
  }

  export type ZoneUncheckedCreateInput = {
    id?: number
    name: string
    leaderFullName: string
    eNumberLeader: string
    employees?: ObservationsUncheckedCreateNestedManyWithoutEmployeeZoneRelationInput
    observation?: ObservationsUncheckedCreateNestedManyWithoutObservationZoneRelationInput
  }

  export type ZoneUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    leaderFullName?: StringFieldUpdateOperationsInput | string
    eNumberLeader?: StringFieldUpdateOperationsInput | string
    employees?: ObservationsUpdateManyWithoutEmployeeZoneRelationNestedInput
    observation?: ObservationsUpdateManyWithoutObservationZoneRelationNestedInput
  }

  export type ZoneUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    leaderFullName?: StringFieldUpdateOperationsInput | string
    eNumberLeader?: StringFieldUpdateOperationsInput | string
    employees?: ObservationsUncheckedUpdateManyWithoutEmployeeZoneRelationNestedInput
    observation?: ObservationsUncheckedUpdateManyWithoutObservationZoneRelationNestedInput
  }

  export type ZoneCreateManyInput = {
    id?: number
    name: string
    leaderFullName: string
    eNumberLeader: string
  }

  export type ZoneUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    leaderFullName?: StringFieldUpdateOperationsInput | string
    eNumberLeader?: StringFieldUpdateOperationsInput | string
  }

  export type ZoneUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    leaderFullName?: StringFieldUpdateOperationsInput | string
    eNumberLeader?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    isAdmin?: boolean
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    isAdmin?: boolean
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    isAdmin?: boolean
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ObservationsCreateInput = {
    employeeFirstName: string
    employeeLastName: string
    employeeEnumber: string
    employeeFunctionality: string
    nameLeaderEmployeeZone: string
    nameLeaderObservationZone: string
    observation: string
    suggestion: string
    adminCommentaire: string
    isAccepted?: boolean
    isResolved?: boolean
    employeeZoneRelation: ZoneCreateNestedOneWithoutEmployeesInput
    observationZoneRelation: ZoneCreateNestedOneWithoutObservationInput
  }

  export type ObservationsUncheckedCreateInput = {
    id?: number
    employeeFirstName: string
    employeeLastName: string
    employeeEnumber: string
    employeeFunctionality: string
    employeeZone: number
    nameLeaderEmployeeZone: string
    observationZone: number
    nameLeaderObservationZone: string
    observation: string
    suggestion: string
    adminCommentaire: string
    isAccepted?: boolean
    isResolved?: boolean
  }

  export type ObservationsUpdateInput = {
    employeeFirstName?: StringFieldUpdateOperationsInput | string
    employeeLastName?: StringFieldUpdateOperationsInput | string
    employeeEnumber?: StringFieldUpdateOperationsInput | string
    employeeFunctionality?: StringFieldUpdateOperationsInput | string
    nameLeaderEmployeeZone?: StringFieldUpdateOperationsInput | string
    nameLeaderObservationZone?: StringFieldUpdateOperationsInput | string
    observation?: StringFieldUpdateOperationsInput | string
    suggestion?: StringFieldUpdateOperationsInput | string
    adminCommentaire?: StringFieldUpdateOperationsInput | string
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    employeeZoneRelation?: ZoneUpdateOneRequiredWithoutEmployeesNestedInput
    observationZoneRelation?: ZoneUpdateOneRequiredWithoutObservationNestedInput
  }

  export type ObservationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeFirstName?: StringFieldUpdateOperationsInput | string
    employeeLastName?: StringFieldUpdateOperationsInput | string
    employeeEnumber?: StringFieldUpdateOperationsInput | string
    employeeFunctionality?: StringFieldUpdateOperationsInput | string
    employeeZone?: IntFieldUpdateOperationsInput | number
    nameLeaderEmployeeZone?: StringFieldUpdateOperationsInput | string
    observationZone?: IntFieldUpdateOperationsInput | number
    nameLeaderObservationZone?: StringFieldUpdateOperationsInput | string
    observation?: StringFieldUpdateOperationsInput | string
    suggestion?: StringFieldUpdateOperationsInput | string
    adminCommentaire?: StringFieldUpdateOperationsInput | string
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    isResolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ObservationsCreateManyInput = {
    id?: number
    employeeFirstName: string
    employeeLastName: string
    employeeEnumber: string
    employeeFunctionality: string
    employeeZone: number
    nameLeaderEmployeeZone: string
    observationZone: number
    nameLeaderObservationZone: string
    observation: string
    suggestion: string
    adminCommentaire: string
    isAccepted?: boolean
    isResolved?: boolean
  }

  export type ObservationsUpdateManyMutationInput = {
    employeeFirstName?: StringFieldUpdateOperationsInput | string
    employeeLastName?: StringFieldUpdateOperationsInput | string
    employeeEnumber?: StringFieldUpdateOperationsInput | string
    employeeFunctionality?: StringFieldUpdateOperationsInput | string
    nameLeaderEmployeeZone?: StringFieldUpdateOperationsInput | string
    nameLeaderObservationZone?: StringFieldUpdateOperationsInput | string
    observation?: StringFieldUpdateOperationsInput | string
    suggestion?: StringFieldUpdateOperationsInput | string
    adminCommentaire?: StringFieldUpdateOperationsInput | string
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    isResolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ObservationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeFirstName?: StringFieldUpdateOperationsInput | string
    employeeLastName?: StringFieldUpdateOperationsInput | string
    employeeEnumber?: StringFieldUpdateOperationsInput | string
    employeeFunctionality?: StringFieldUpdateOperationsInput | string
    employeeZone?: IntFieldUpdateOperationsInput | number
    nameLeaderEmployeeZone?: StringFieldUpdateOperationsInput | string
    observationZone?: IntFieldUpdateOperationsInput | number
    nameLeaderObservationZone?: StringFieldUpdateOperationsInput | string
    observation?: StringFieldUpdateOperationsInput | string
    suggestion?: StringFieldUpdateOperationsInput | string
    adminCommentaire?: StringFieldUpdateOperationsInput | string
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    isResolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ObservationsListRelationFilter = {
    every?: ObservationsWhereInput
    some?: ObservationsWhereInput
    none?: ObservationsWhereInput
  }

  export type ObservationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ZoneCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    leaderFullName?: SortOrder
    eNumberLeader?: SortOrder
  }

  export type ZoneAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ZoneMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    leaderFullName?: SortOrder
    eNumberLeader?: SortOrder
  }

  export type ZoneMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    leaderFullName?: SortOrder
    eNumberLeader?: SortOrder
  }

  export type ZoneSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ZoneRelationFilter = {
    is?: ZoneWhereInput
    isNot?: ZoneWhereInput
  }

  export type ObservationsCountOrderByAggregateInput = {
    id?: SortOrder
    employeeFirstName?: SortOrder
    employeeLastName?: SortOrder
    employeeEnumber?: SortOrder
    employeeFunctionality?: SortOrder
    employeeZone?: SortOrder
    nameLeaderEmployeeZone?: SortOrder
    observationZone?: SortOrder
    nameLeaderObservationZone?: SortOrder
    observation?: SortOrder
    suggestion?: SortOrder
    adminCommentaire?: SortOrder
    isAccepted?: SortOrder
    isResolved?: SortOrder
  }

  export type ObservationsAvgOrderByAggregateInput = {
    id?: SortOrder
    employeeZone?: SortOrder
    observationZone?: SortOrder
  }

  export type ObservationsMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeFirstName?: SortOrder
    employeeLastName?: SortOrder
    employeeEnumber?: SortOrder
    employeeFunctionality?: SortOrder
    employeeZone?: SortOrder
    nameLeaderEmployeeZone?: SortOrder
    observationZone?: SortOrder
    nameLeaderObservationZone?: SortOrder
    observation?: SortOrder
    suggestion?: SortOrder
    adminCommentaire?: SortOrder
    isAccepted?: SortOrder
    isResolved?: SortOrder
  }

  export type ObservationsMinOrderByAggregateInput = {
    id?: SortOrder
    employeeFirstName?: SortOrder
    employeeLastName?: SortOrder
    employeeEnumber?: SortOrder
    employeeFunctionality?: SortOrder
    employeeZone?: SortOrder
    nameLeaderEmployeeZone?: SortOrder
    observationZone?: SortOrder
    nameLeaderObservationZone?: SortOrder
    observation?: SortOrder
    suggestion?: SortOrder
    adminCommentaire?: SortOrder
    isAccepted?: SortOrder
    isResolved?: SortOrder
  }

  export type ObservationsSumOrderByAggregateInput = {
    id?: SortOrder
    employeeZone?: SortOrder
    observationZone?: SortOrder
  }

  export type ObservationsCreateNestedManyWithoutEmployeeZoneRelationInput = {
    create?: XOR<ObservationsCreateWithoutEmployeeZoneRelationInput, ObservationsUncheckedCreateWithoutEmployeeZoneRelationInput> | ObservationsCreateWithoutEmployeeZoneRelationInput[] | ObservationsUncheckedCreateWithoutEmployeeZoneRelationInput[]
    connectOrCreate?: ObservationsCreateOrConnectWithoutEmployeeZoneRelationInput | ObservationsCreateOrConnectWithoutEmployeeZoneRelationInput[]
    createMany?: ObservationsCreateManyEmployeeZoneRelationInputEnvelope
    connect?: ObservationsWhereUniqueInput | ObservationsWhereUniqueInput[]
  }

  export type ObservationsCreateNestedManyWithoutObservationZoneRelationInput = {
    create?: XOR<ObservationsCreateWithoutObservationZoneRelationInput, ObservationsUncheckedCreateWithoutObservationZoneRelationInput> | ObservationsCreateWithoutObservationZoneRelationInput[] | ObservationsUncheckedCreateWithoutObservationZoneRelationInput[]
    connectOrCreate?: ObservationsCreateOrConnectWithoutObservationZoneRelationInput | ObservationsCreateOrConnectWithoutObservationZoneRelationInput[]
    createMany?: ObservationsCreateManyObservationZoneRelationInputEnvelope
    connect?: ObservationsWhereUniqueInput | ObservationsWhereUniqueInput[]
  }

  export type ObservationsUncheckedCreateNestedManyWithoutEmployeeZoneRelationInput = {
    create?: XOR<ObservationsCreateWithoutEmployeeZoneRelationInput, ObservationsUncheckedCreateWithoutEmployeeZoneRelationInput> | ObservationsCreateWithoutEmployeeZoneRelationInput[] | ObservationsUncheckedCreateWithoutEmployeeZoneRelationInput[]
    connectOrCreate?: ObservationsCreateOrConnectWithoutEmployeeZoneRelationInput | ObservationsCreateOrConnectWithoutEmployeeZoneRelationInput[]
    createMany?: ObservationsCreateManyEmployeeZoneRelationInputEnvelope
    connect?: ObservationsWhereUniqueInput | ObservationsWhereUniqueInput[]
  }

  export type ObservationsUncheckedCreateNestedManyWithoutObservationZoneRelationInput = {
    create?: XOR<ObservationsCreateWithoutObservationZoneRelationInput, ObservationsUncheckedCreateWithoutObservationZoneRelationInput> | ObservationsCreateWithoutObservationZoneRelationInput[] | ObservationsUncheckedCreateWithoutObservationZoneRelationInput[]
    connectOrCreate?: ObservationsCreateOrConnectWithoutObservationZoneRelationInput | ObservationsCreateOrConnectWithoutObservationZoneRelationInput[]
    createMany?: ObservationsCreateManyObservationZoneRelationInputEnvelope
    connect?: ObservationsWhereUniqueInput | ObservationsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ObservationsUpdateManyWithoutEmployeeZoneRelationNestedInput = {
    create?: XOR<ObservationsCreateWithoutEmployeeZoneRelationInput, ObservationsUncheckedCreateWithoutEmployeeZoneRelationInput> | ObservationsCreateWithoutEmployeeZoneRelationInput[] | ObservationsUncheckedCreateWithoutEmployeeZoneRelationInput[]
    connectOrCreate?: ObservationsCreateOrConnectWithoutEmployeeZoneRelationInput | ObservationsCreateOrConnectWithoutEmployeeZoneRelationInput[]
    upsert?: ObservationsUpsertWithWhereUniqueWithoutEmployeeZoneRelationInput | ObservationsUpsertWithWhereUniqueWithoutEmployeeZoneRelationInput[]
    createMany?: ObservationsCreateManyEmployeeZoneRelationInputEnvelope
    set?: ObservationsWhereUniqueInput | ObservationsWhereUniqueInput[]
    disconnect?: ObservationsWhereUniqueInput | ObservationsWhereUniqueInput[]
    delete?: ObservationsWhereUniqueInput | ObservationsWhereUniqueInput[]
    connect?: ObservationsWhereUniqueInput | ObservationsWhereUniqueInput[]
    update?: ObservationsUpdateWithWhereUniqueWithoutEmployeeZoneRelationInput | ObservationsUpdateWithWhereUniqueWithoutEmployeeZoneRelationInput[]
    updateMany?: ObservationsUpdateManyWithWhereWithoutEmployeeZoneRelationInput | ObservationsUpdateManyWithWhereWithoutEmployeeZoneRelationInput[]
    deleteMany?: ObservationsScalarWhereInput | ObservationsScalarWhereInput[]
  }

  export type ObservationsUpdateManyWithoutObservationZoneRelationNestedInput = {
    create?: XOR<ObservationsCreateWithoutObservationZoneRelationInput, ObservationsUncheckedCreateWithoutObservationZoneRelationInput> | ObservationsCreateWithoutObservationZoneRelationInput[] | ObservationsUncheckedCreateWithoutObservationZoneRelationInput[]
    connectOrCreate?: ObservationsCreateOrConnectWithoutObservationZoneRelationInput | ObservationsCreateOrConnectWithoutObservationZoneRelationInput[]
    upsert?: ObservationsUpsertWithWhereUniqueWithoutObservationZoneRelationInput | ObservationsUpsertWithWhereUniqueWithoutObservationZoneRelationInput[]
    createMany?: ObservationsCreateManyObservationZoneRelationInputEnvelope
    set?: ObservationsWhereUniqueInput | ObservationsWhereUniqueInput[]
    disconnect?: ObservationsWhereUniqueInput | ObservationsWhereUniqueInput[]
    delete?: ObservationsWhereUniqueInput | ObservationsWhereUniqueInput[]
    connect?: ObservationsWhereUniqueInput | ObservationsWhereUniqueInput[]
    update?: ObservationsUpdateWithWhereUniqueWithoutObservationZoneRelationInput | ObservationsUpdateWithWhereUniqueWithoutObservationZoneRelationInput[]
    updateMany?: ObservationsUpdateManyWithWhereWithoutObservationZoneRelationInput | ObservationsUpdateManyWithWhereWithoutObservationZoneRelationInput[]
    deleteMany?: ObservationsScalarWhereInput | ObservationsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ObservationsUncheckedUpdateManyWithoutEmployeeZoneRelationNestedInput = {
    create?: XOR<ObservationsCreateWithoutEmployeeZoneRelationInput, ObservationsUncheckedCreateWithoutEmployeeZoneRelationInput> | ObservationsCreateWithoutEmployeeZoneRelationInput[] | ObservationsUncheckedCreateWithoutEmployeeZoneRelationInput[]
    connectOrCreate?: ObservationsCreateOrConnectWithoutEmployeeZoneRelationInput | ObservationsCreateOrConnectWithoutEmployeeZoneRelationInput[]
    upsert?: ObservationsUpsertWithWhereUniqueWithoutEmployeeZoneRelationInput | ObservationsUpsertWithWhereUniqueWithoutEmployeeZoneRelationInput[]
    createMany?: ObservationsCreateManyEmployeeZoneRelationInputEnvelope
    set?: ObservationsWhereUniqueInput | ObservationsWhereUniqueInput[]
    disconnect?: ObservationsWhereUniqueInput | ObservationsWhereUniqueInput[]
    delete?: ObservationsWhereUniqueInput | ObservationsWhereUniqueInput[]
    connect?: ObservationsWhereUniqueInput | ObservationsWhereUniqueInput[]
    update?: ObservationsUpdateWithWhereUniqueWithoutEmployeeZoneRelationInput | ObservationsUpdateWithWhereUniqueWithoutEmployeeZoneRelationInput[]
    updateMany?: ObservationsUpdateManyWithWhereWithoutEmployeeZoneRelationInput | ObservationsUpdateManyWithWhereWithoutEmployeeZoneRelationInput[]
    deleteMany?: ObservationsScalarWhereInput | ObservationsScalarWhereInput[]
  }

  export type ObservationsUncheckedUpdateManyWithoutObservationZoneRelationNestedInput = {
    create?: XOR<ObservationsCreateWithoutObservationZoneRelationInput, ObservationsUncheckedCreateWithoutObservationZoneRelationInput> | ObservationsCreateWithoutObservationZoneRelationInput[] | ObservationsUncheckedCreateWithoutObservationZoneRelationInput[]
    connectOrCreate?: ObservationsCreateOrConnectWithoutObservationZoneRelationInput | ObservationsCreateOrConnectWithoutObservationZoneRelationInput[]
    upsert?: ObservationsUpsertWithWhereUniqueWithoutObservationZoneRelationInput | ObservationsUpsertWithWhereUniqueWithoutObservationZoneRelationInput[]
    createMany?: ObservationsCreateManyObservationZoneRelationInputEnvelope
    set?: ObservationsWhereUniqueInput | ObservationsWhereUniqueInput[]
    disconnect?: ObservationsWhereUniqueInput | ObservationsWhereUniqueInput[]
    delete?: ObservationsWhereUniqueInput | ObservationsWhereUniqueInput[]
    connect?: ObservationsWhereUniqueInput | ObservationsWhereUniqueInput[]
    update?: ObservationsUpdateWithWhereUniqueWithoutObservationZoneRelationInput | ObservationsUpdateWithWhereUniqueWithoutObservationZoneRelationInput[]
    updateMany?: ObservationsUpdateManyWithWhereWithoutObservationZoneRelationInput | ObservationsUpdateManyWithWhereWithoutObservationZoneRelationInput[]
    deleteMany?: ObservationsScalarWhereInput | ObservationsScalarWhereInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ZoneCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<ZoneCreateWithoutEmployeesInput, ZoneUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: ZoneCreateOrConnectWithoutEmployeesInput
    connect?: ZoneWhereUniqueInput
  }

  export type ZoneCreateNestedOneWithoutObservationInput = {
    create?: XOR<ZoneCreateWithoutObservationInput, ZoneUncheckedCreateWithoutObservationInput>
    connectOrCreate?: ZoneCreateOrConnectWithoutObservationInput
    connect?: ZoneWhereUniqueInput
  }

  export type ZoneUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<ZoneCreateWithoutEmployeesInput, ZoneUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: ZoneCreateOrConnectWithoutEmployeesInput
    upsert?: ZoneUpsertWithoutEmployeesInput
    connect?: ZoneWhereUniqueInput
    update?: XOR<XOR<ZoneUpdateToOneWithWhereWithoutEmployeesInput, ZoneUpdateWithoutEmployeesInput>, ZoneUncheckedUpdateWithoutEmployeesInput>
  }

  export type ZoneUpdateOneRequiredWithoutObservationNestedInput = {
    create?: XOR<ZoneCreateWithoutObservationInput, ZoneUncheckedCreateWithoutObservationInput>
    connectOrCreate?: ZoneCreateOrConnectWithoutObservationInput
    upsert?: ZoneUpsertWithoutObservationInput
    connect?: ZoneWhereUniqueInput
    update?: XOR<XOR<ZoneUpdateToOneWithWhereWithoutObservationInput, ZoneUpdateWithoutObservationInput>, ZoneUncheckedUpdateWithoutObservationInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ObservationsCreateWithoutEmployeeZoneRelationInput = {
    employeeFirstName: string
    employeeLastName: string
    employeeEnumber: string
    employeeFunctionality: string
    nameLeaderEmployeeZone: string
    nameLeaderObservationZone: string
    observation: string
    suggestion: string
    adminCommentaire: string
    isAccepted?: boolean
    isResolved?: boolean
    observationZoneRelation: ZoneCreateNestedOneWithoutObservationInput
  }

  export type ObservationsUncheckedCreateWithoutEmployeeZoneRelationInput = {
    id?: number
    employeeFirstName: string
    employeeLastName: string
    employeeEnumber: string
    employeeFunctionality: string
    nameLeaderEmployeeZone: string
    observationZone: number
    nameLeaderObservationZone: string
    observation: string
    suggestion: string
    adminCommentaire: string
    isAccepted?: boolean
    isResolved?: boolean
  }

  export type ObservationsCreateOrConnectWithoutEmployeeZoneRelationInput = {
    where: ObservationsWhereUniqueInput
    create: XOR<ObservationsCreateWithoutEmployeeZoneRelationInput, ObservationsUncheckedCreateWithoutEmployeeZoneRelationInput>
  }

  export type ObservationsCreateManyEmployeeZoneRelationInputEnvelope = {
    data: ObservationsCreateManyEmployeeZoneRelationInput | ObservationsCreateManyEmployeeZoneRelationInput[]
    skipDuplicates?: boolean
  }

  export type ObservationsCreateWithoutObservationZoneRelationInput = {
    employeeFirstName: string
    employeeLastName: string
    employeeEnumber: string
    employeeFunctionality: string
    nameLeaderEmployeeZone: string
    nameLeaderObservationZone: string
    observation: string
    suggestion: string
    adminCommentaire: string
    isAccepted?: boolean
    isResolved?: boolean
    employeeZoneRelation: ZoneCreateNestedOneWithoutEmployeesInput
  }

  export type ObservationsUncheckedCreateWithoutObservationZoneRelationInput = {
    id?: number
    employeeFirstName: string
    employeeLastName: string
    employeeEnumber: string
    employeeFunctionality: string
    employeeZone: number
    nameLeaderEmployeeZone: string
    nameLeaderObservationZone: string
    observation: string
    suggestion: string
    adminCommentaire: string
    isAccepted?: boolean
    isResolved?: boolean
  }

  export type ObservationsCreateOrConnectWithoutObservationZoneRelationInput = {
    where: ObservationsWhereUniqueInput
    create: XOR<ObservationsCreateWithoutObservationZoneRelationInput, ObservationsUncheckedCreateWithoutObservationZoneRelationInput>
  }

  export type ObservationsCreateManyObservationZoneRelationInputEnvelope = {
    data: ObservationsCreateManyObservationZoneRelationInput | ObservationsCreateManyObservationZoneRelationInput[]
    skipDuplicates?: boolean
  }

  export type ObservationsUpsertWithWhereUniqueWithoutEmployeeZoneRelationInput = {
    where: ObservationsWhereUniqueInput
    update: XOR<ObservationsUpdateWithoutEmployeeZoneRelationInput, ObservationsUncheckedUpdateWithoutEmployeeZoneRelationInput>
    create: XOR<ObservationsCreateWithoutEmployeeZoneRelationInput, ObservationsUncheckedCreateWithoutEmployeeZoneRelationInput>
  }

  export type ObservationsUpdateWithWhereUniqueWithoutEmployeeZoneRelationInput = {
    where: ObservationsWhereUniqueInput
    data: XOR<ObservationsUpdateWithoutEmployeeZoneRelationInput, ObservationsUncheckedUpdateWithoutEmployeeZoneRelationInput>
  }

  export type ObservationsUpdateManyWithWhereWithoutEmployeeZoneRelationInput = {
    where: ObservationsScalarWhereInput
    data: XOR<ObservationsUpdateManyMutationInput, ObservationsUncheckedUpdateManyWithoutEmployeeZoneRelationInput>
  }

  export type ObservationsScalarWhereInput = {
    AND?: ObservationsScalarWhereInput | ObservationsScalarWhereInput[]
    OR?: ObservationsScalarWhereInput[]
    NOT?: ObservationsScalarWhereInput | ObservationsScalarWhereInput[]
    id?: IntFilter<"Observations"> | number
    employeeFirstName?: StringFilter<"Observations"> | string
    employeeLastName?: StringFilter<"Observations"> | string
    employeeEnumber?: StringFilter<"Observations"> | string
    employeeFunctionality?: StringFilter<"Observations"> | string
    employeeZone?: IntFilter<"Observations"> | number
    nameLeaderEmployeeZone?: StringFilter<"Observations"> | string
    observationZone?: IntFilter<"Observations"> | number
    nameLeaderObservationZone?: StringFilter<"Observations"> | string
    observation?: StringFilter<"Observations"> | string
    suggestion?: StringFilter<"Observations"> | string
    adminCommentaire?: StringFilter<"Observations"> | string
    isAccepted?: BoolFilter<"Observations"> | boolean
    isResolved?: BoolFilter<"Observations"> | boolean
  }

  export type ObservationsUpsertWithWhereUniqueWithoutObservationZoneRelationInput = {
    where: ObservationsWhereUniqueInput
    update: XOR<ObservationsUpdateWithoutObservationZoneRelationInput, ObservationsUncheckedUpdateWithoutObservationZoneRelationInput>
    create: XOR<ObservationsCreateWithoutObservationZoneRelationInput, ObservationsUncheckedCreateWithoutObservationZoneRelationInput>
  }

  export type ObservationsUpdateWithWhereUniqueWithoutObservationZoneRelationInput = {
    where: ObservationsWhereUniqueInput
    data: XOR<ObservationsUpdateWithoutObservationZoneRelationInput, ObservationsUncheckedUpdateWithoutObservationZoneRelationInput>
  }

  export type ObservationsUpdateManyWithWhereWithoutObservationZoneRelationInput = {
    where: ObservationsScalarWhereInput
    data: XOR<ObservationsUpdateManyMutationInput, ObservationsUncheckedUpdateManyWithoutObservationZoneRelationInput>
  }

  export type ZoneCreateWithoutEmployeesInput = {
    name: string
    leaderFullName: string
    eNumberLeader: string
    observation?: ObservationsCreateNestedManyWithoutObservationZoneRelationInput
  }

  export type ZoneUncheckedCreateWithoutEmployeesInput = {
    id?: number
    name: string
    leaderFullName: string
    eNumberLeader: string
    observation?: ObservationsUncheckedCreateNestedManyWithoutObservationZoneRelationInput
  }

  export type ZoneCreateOrConnectWithoutEmployeesInput = {
    where: ZoneWhereUniqueInput
    create: XOR<ZoneCreateWithoutEmployeesInput, ZoneUncheckedCreateWithoutEmployeesInput>
  }

  export type ZoneCreateWithoutObservationInput = {
    name: string
    leaderFullName: string
    eNumberLeader: string
    employees?: ObservationsCreateNestedManyWithoutEmployeeZoneRelationInput
  }

  export type ZoneUncheckedCreateWithoutObservationInput = {
    id?: number
    name: string
    leaderFullName: string
    eNumberLeader: string
    employees?: ObservationsUncheckedCreateNestedManyWithoutEmployeeZoneRelationInput
  }

  export type ZoneCreateOrConnectWithoutObservationInput = {
    where: ZoneWhereUniqueInput
    create: XOR<ZoneCreateWithoutObservationInput, ZoneUncheckedCreateWithoutObservationInput>
  }

  export type ZoneUpsertWithoutEmployeesInput = {
    update: XOR<ZoneUpdateWithoutEmployeesInput, ZoneUncheckedUpdateWithoutEmployeesInput>
    create: XOR<ZoneCreateWithoutEmployeesInput, ZoneUncheckedCreateWithoutEmployeesInput>
    where?: ZoneWhereInput
  }

  export type ZoneUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: ZoneWhereInput
    data: XOR<ZoneUpdateWithoutEmployeesInput, ZoneUncheckedUpdateWithoutEmployeesInput>
  }

  export type ZoneUpdateWithoutEmployeesInput = {
    name?: StringFieldUpdateOperationsInput | string
    leaderFullName?: StringFieldUpdateOperationsInput | string
    eNumberLeader?: StringFieldUpdateOperationsInput | string
    observation?: ObservationsUpdateManyWithoutObservationZoneRelationNestedInput
  }

  export type ZoneUncheckedUpdateWithoutEmployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    leaderFullName?: StringFieldUpdateOperationsInput | string
    eNumberLeader?: StringFieldUpdateOperationsInput | string
    observation?: ObservationsUncheckedUpdateManyWithoutObservationZoneRelationNestedInput
  }

  export type ZoneUpsertWithoutObservationInput = {
    update: XOR<ZoneUpdateWithoutObservationInput, ZoneUncheckedUpdateWithoutObservationInput>
    create: XOR<ZoneCreateWithoutObservationInput, ZoneUncheckedCreateWithoutObservationInput>
    where?: ZoneWhereInput
  }

  export type ZoneUpdateToOneWithWhereWithoutObservationInput = {
    where?: ZoneWhereInput
    data: XOR<ZoneUpdateWithoutObservationInput, ZoneUncheckedUpdateWithoutObservationInput>
  }

  export type ZoneUpdateWithoutObservationInput = {
    name?: StringFieldUpdateOperationsInput | string
    leaderFullName?: StringFieldUpdateOperationsInput | string
    eNumberLeader?: StringFieldUpdateOperationsInput | string
    employees?: ObservationsUpdateManyWithoutEmployeeZoneRelationNestedInput
  }

  export type ZoneUncheckedUpdateWithoutObservationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    leaderFullName?: StringFieldUpdateOperationsInput | string
    eNumberLeader?: StringFieldUpdateOperationsInput | string
    employees?: ObservationsUncheckedUpdateManyWithoutEmployeeZoneRelationNestedInput
  }

  export type ObservationsCreateManyEmployeeZoneRelationInput = {
    id?: number
    employeeFirstName: string
    employeeLastName: string
    employeeEnumber: string
    employeeFunctionality: string
    nameLeaderEmployeeZone: string
    observationZone: number
    nameLeaderObservationZone: string
    observation: string
    suggestion: string
    adminCommentaire: string
    isAccepted?: boolean
    isResolved?: boolean
  }

  export type ObservationsCreateManyObservationZoneRelationInput = {
    id?: number
    employeeFirstName: string
    employeeLastName: string
    employeeEnumber: string
    employeeFunctionality: string
    employeeZone: number
    nameLeaderEmployeeZone: string
    nameLeaderObservationZone: string
    observation: string
    suggestion: string
    adminCommentaire: string
    isAccepted?: boolean
    isResolved?: boolean
  }

  export type ObservationsUpdateWithoutEmployeeZoneRelationInput = {
    employeeFirstName?: StringFieldUpdateOperationsInput | string
    employeeLastName?: StringFieldUpdateOperationsInput | string
    employeeEnumber?: StringFieldUpdateOperationsInput | string
    employeeFunctionality?: StringFieldUpdateOperationsInput | string
    nameLeaderEmployeeZone?: StringFieldUpdateOperationsInput | string
    nameLeaderObservationZone?: StringFieldUpdateOperationsInput | string
    observation?: StringFieldUpdateOperationsInput | string
    suggestion?: StringFieldUpdateOperationsInput | string
    adminCommentaire?: StringFieldUpdateOperationsInput | string
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    observationZoneRelation?: ZoneUpdateOneRequiredWithoutObservationNestedInput
  }

  export type ObservationsUncheckedUpdateWithoutEmployeeZoneRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeFirstName?: StringFieldUpdateOperationsInput | string
    employeeLastName?: StringFieldUpdateOperationsInput | string
    employeeEnumber?: StringFieldUpdateOperationsInput | string
    employeeFunctionality?: StringFieldUpdateOperationsInput | string
    nameLeaderEmployeeZone?: StringFieldUpdateOperationsInput | string
    observationZone?: IntFieldUpdateOperationsInput | number
    nameLeaderObservationZone?: StringFieldUpdateOperationsInput | string
    observation?: StringFieldUpdateOperationsInput | string
    suggestion?: StringFieldUpdateOperationsInput | string
    adminCommentaire?: StringFieldUpdateOperationsInput | string
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    isResolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ObservationsUncheckedUpdateManyWithoutEmployeeZoneRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeFirstName?: StringFieldUpdateOperationsInput | string
    employeeLastName?: StringFieldUpdateOperationsInput | string
    employeeEnumber?: StringFieldUpdateOperationsInput | string
    employeeFunctionality?: StringFieldUpdateOperationsInput | string
    nameLeaderEmployeeZone?: StringFieldUpdateOperationsInput | string
    observationZone?: IntFieldUpdateOperationsInput | number
    nameLeaderObservationZone?: StringFieldUpdateOperationsInput | string
    observation?: StringFieldUpdateOperationsInput | string
    suggestion?: StringFieldUpdateOperationsInput | string
    adminCommentaire?: StringFieldUpdateOperationsInput | string
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    isResolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ObservationsUpdateWithoutObservationZoneRelationInput = {
    employeeFirstName?: StringFieldUpdateOperationsInput | string
    employeeLastName?: StringFieldUpdateOperationsInput | string
    employeeEnumber?: StringFieldUpdateOperationsInput | string
    employeeFunctionality?: StringFieldUpdateOperationsInput | string
    nameLeaderEmployeeZone?: StringFieldUpdateOperationsInput | string
    nameLeaderObservationZone?: StringFieldUpdateOperationsInput | string
    observation?: StringFieldUpdateOperationsInput | string
    suggestion?: StringFieldUpdateOperationsInput | string
    adminCommentaire?: StringFieldUpdateOperationsInput | string
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    employeeZoneRelation?: ZoneUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type ObservationsUncheckedUpdateWithoutObservationZoneRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeFirstName?: StringFieldUpdateOperationsInput | string
    employeeLastName?: StringFieldUpdateOperationsInput | string
    employeeEnumber?: StringFieldUpdateOperationsInput | string
    employeeFunctionality?: StringFieldUpdateOperationsInput | string
    employeeZone?: IntFieldUpdateOperationsInput | number
    nameLeaderEmployeeZone?: StringFieldUpdateOperationsInput | string
    nameLeaderObservationZone?: StringFieldUpdateOperationsInput | string
    observation?: StringFieldUpdateOperationsInput | string
    suggestion?: StringFieldUpdateOperationsInput | string
    adminCommentaire?: StringFieldUpdateOperationsInput | string
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    isResolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ObservationsUncheckedUpdateManyWithoutObservationZoneRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeFirstName?: StringFieldUpdateOperationsInput | string
    employeeLastName?: StringFieldUpdateOperationsInput | string
    employeeEnumber?: StringFieldUpdateOperationsInput | string
    employeeFunctionality?: StringFieldUpdateOperationsInput | string
    employeeZone?: IntFieldUpdateOperationsInput | number
    nameLeaderEmployeeZone?: StringFieldUpdateOperationsInput | string
    nameLeaderObservationZone?: StringFieldUpdateOperationsInput | string
    observation?: StringFieldUpdateOperationsInput | string
    suggestion?: StringFieldUpdateOperationsInput | string
    adminCommentaire?: StringFieldUpdateOperationsInput | string
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    isResolved?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ZoneCountOutputTypeDefaultArgs instead
     */
    export type ZoneCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ZoneCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ZoneDefaultArgs instead
     */
    export type ZoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ZoneDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ObservationsDefaultArgs instead
     */
    export type ObservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ObservationsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}