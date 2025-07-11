
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model chargingStation
 * 
 */
export type chargingStation = $Result.DefaultSelection<Prisma.$chargingStationPayload>
/**
 * Model Sessions
 * 
 */
export type Sessions = $Result.DefaultSelection<Prisma.$SessionsPayload>
/**
 * Model Transactions
 * 
 */
export type Transactions = $Result.DefaultSelection<Prisma.$TransactionsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  OEM: 'OEM',
  Reseller: 'Reseller',
  Operator: 'Operator',
  EndUser: 'EndUser'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TransactionStatus: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chargingStation`: Exposes CRUD operations for the **chargingStation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChargingStations
    * const chargingStations = await prisma.chargingStation.findMany()
    * ```
    */
  get chargingStation(): Prisma.chargingStationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **Sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.SessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **Transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.TransactionsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    chargingStation: 'chargingStation',
    Sessions: 'Sessions',
    Transactions: 'Transactions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "chargingStation" | "sessions" | "transactions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      chargingStation: {
        payload: Prisma.$chargingStationPayload<ExtArgs>
        fields: Prisma.chargingStationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chargingStationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chargingStationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chargingStationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chargingStationPayload>
          }
          findFirst: {
            args: Prisma.chargingStationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chargingStationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chargingStationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chargingStationPayload>
          }
          findMany: {
            args: Prisma.chargingStationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chargingStationPayload>[]
          }
          create: {
            args: Prisma.chargingStationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chargingStationPayload>
          }
          createMany: {
            args: Prisma.chargingStationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chargingStationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chargingStationPayload>[]
          }
          delete: {
            args: Prisma.chargingStationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chargingStationPayload>
          }
          update: {
            args: Prisma.chargingStationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chargingStationPayload>
          }
          deleteMany: {
            args: Prisma.chargingStationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chargingStationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chargingStationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chargingStationPayload>[]
          }
          upsert: {
            args: Prisma.chargingStationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chargingStationPayload>
          }
          aggregate: {
            args: Prisma.ChargingStationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChargingStation>
          }
          groupBy: {
            args: Prisma.chargingStationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChargingStationGroupByOutputType>[]
          }
          count: {
            args: Prisma.chargingStationCountArgs<ExtArgs>
            result: $Utils.Optional<ChargingStationCountAggregateOutputType> | number
          }
        }
      }
      Sessions: {
        payload: Prisma.$SessionsPayload<ExtArgs>
        fields: Prisma.SessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          findFirst: {
            args: Prisma.SessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          findMany: {
            args: Prisma.SessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          create: {
            args: Prisma.SessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          createMany: {
            args: Prisma.SessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          delete: {
            args: Prisma.SessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          update: {
            args: Prisma.SessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          deleteMany: {
            args: Prisma.SessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          upsert: {
            args: Prisma.SessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.SessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
      Transactions: {
        payload: Prisma.$TransactionsPayload<ExtArgs>
        fields: Prisma.TransactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findFirst: {
            args: Prisma.TransactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findMany: {
            args: Prisma.TransactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          create: {
            args: Prisma.TransactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          createMany: {
            args: Prisma.TransactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          delete: {
            args: Prisma.TransactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          update: {
            args: Prisma.TransactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          deleteMany: {
            args: Prisma.TransactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          upsert: {
            args: Prisma.TransactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.TransactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    chargingStation?: chargingStationOmit
    sessions?: SessionsOmit
    transactions?: TransactionsOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ownedStations: number
    reselledStations: number
    operatedStations: number
    previuoslyConnectedStatoins: number
    session: number
    transaction: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedStations?: boolean | UserCountOutputTypeCountOwnedStationsArgs
    reselledStations?: boolean | UserCountOutputTypeCountReselledStationsArgs
    operatedStations?: boolean | UserCountOutputTypeCountOperatedStationsArgs
    previuoslyConnectedStatoins?: boolean | UserCountOutputTypeCountPreviuoslyConnectedStatoinsArgs
    session?: boolean | UserCountOutputTypeCountSessionArgs
    transaction?: boolean | UserCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedStationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chargingStationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReselledStationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chargingStationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOperatedStationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chargingStationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPreviuoslyConnectedStatoinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chargingStationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }


  /**
   * Count Type ChargingStationCountOutputType
   */

  export type ChargingStationCountOutputType = {
    session: number
  }

  export type ChargingStationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ChargingStationCountOutputTypeCountSessionArgs
  }

  // Custom InputTypes
  /**
   * ChargingStationCountOutputType without action
   */
  export type ChargingStationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingStationCountOutputType
     */
    select?: ChargingStationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChargingStationCountOutputType without action
   */
  export type ChargingStationCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionsWhereInput
  }


  /**
   * Models
   */

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
    linkedOEM: number | null
    linkedReseller: number | null
    linkedOperator: number | null
    points: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    linkedOEM: number | null
    linkedReseller: number | null
    linkedOperator: number | null
    points: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    linkedOEM: number | null
    linkedReseller: number | null
    linkedOperator: number | null
    points: bigint | null
    vehicle: string | null
    gstNumber: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    linkedOEM: number | null
    linkedReseller: number | null
    linkedOperator: number | null
    points: bigint | null
    vehicle: string | null
    gstNumber: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    role: number
    linkedOEM: number
    linkedReseller: number
    linkedOperator: number
    points: number
    vehicle: number
    gstNumber: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    linkedOEM?: true
    linkedReseller?: true
    linkedOperator?: true
    points?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    linkedOEM?: true
    linkedReseller?: true
    linkedOperator?: true
    points?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    linkedOEM?: true
    linkedReseller?: true
    linkedOperator?: true
    points?: true
    vehicle?: true
    gstNumber?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    linkedOEM?: true
    linkedReseller?: true
    linkedOperator?: true
    points?: true
    vehicle?: true
    gstNumber?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    linkedOEM?: true
    linkedReseller?: true
    linkedOperator?: true
    points?: true
    vehicle?: true
    gstNumber?: true
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
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    linkedOEM: number | null
    linkedReseller: number | null
    linkedOperator: number | null
    points: bigint | null
    vehicle: string | null
    gstNumber: string | null
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
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    linkedOEM?: boolean
    linkedReseller?: boolean
    linkedOperator?: boolean
    points?: boolean
    vehicle?: boolean
    gstNumber?: boolean
    ownedStations?: boolean | User$ownedStationsArgs<ExtArgs>
    reselledStations?: boolean | User$reselledStationsArgs<ExtArgs>
    operatedStations?: boolean | User$operatedStationsArgs<ExtArgs>
    previuoslyConnectedStatoins?: boolean | User$previuoslyConnectedStatoinsArgs<ExtArgs>
    session?: boolean | User$sessionArgs<ExtArgs>
    transaction?: boolean | User$transactionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    linkedOEM?: boolean
    linkedReseller?: boolean
    linkedOperator?: boolean
    points?: boolean
    vehicle?: boolean
    gstNumber?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    linkedOEM?: boolean
    linkedReseller?: boolean
    linkedOperator?: boolean
    points?: boolean
    vehicle?: boolean
    gstNumber?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    linkedOEM?: boolean
    linkedReseller?: boolean
    linkedOperator?: boolean
    points?: boolean
    vehicle?: boolean
    gstNumber?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "role" | "linkedOEM" | "linkedReseller" | "linkedOperator" | "points" | "vehicle" | "gstNumber", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedStations?: boolean | User$ownedStationsArgs<ExtArgs>
    reselledStations?: boolean | User$reselledStationsArgs<ExtArgs>
    operatedStations?: boolean | User$operatedStationsArgs<ExtArgs>
    previuoslyConnectedStatoins?: boolean | User$previuoslyConnectedStatoinsArgs<ExtArgs>
    session?: boolean | User$sessionArgs<ExtArgs>
    transaction?: boolean | User$transactionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ownedStations: Prisma.$chargingStationPayload<ExtArgs>[]
      reselledStations: Prisma.$chargingStationPayload<ExtArgs>[]
      operatedStations: Prisma.$chargingStationPayload<ExtArgs>[]
      previuoslyConnectedStatoins: Prisma.$chargingStationPayload<ExtArgs>[]
      session: Prisma.$SessionsPayload<ExtArgs>[]
      transaction: Prisma.$TransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      password: string
      role: $Enums.Role
      linkedOEM: number | null
      linkedReseller: number | null
      linkedOperator: number | null
      points: bigint | null
      vehicle: string | null
      gstNumber: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ownedStations<T extends User$ownedStationsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedStationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chargingStationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reselledStations<T extends User$reselledStationsArgs<ExtArgs> = {}>(args?: Subset<T, User$reselledStationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chargingStationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    operatedStations<T extends User$operatedStationsArgs<ExtArgs> = {}>(args?: Subset<T, User$operatedStationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chargingStationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    previuoslyConnectedStatoins<T extends User$previuoslyConnectedStatoinsArgs<ExtArgs> = {}>(args?: Subset<T, User$previuoslyConnectedStatoinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chargingStationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    session<T extends User$sessionArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transaction<T extends User$transactionArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly linkedOEM: FieldRef<"User", 'Int'>
    readonly linkedReseller: FieldRef<"User", 'Int'>
    readonly linkedOperator: FieldRef<"User", 'Int'>
    readonly points: FieldRef<"User", 'BigInt'>
    readonly vehicle: FieldRef<"User", 'String'>
    readonly gstNumber: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ownedStations
   */
  export type User$ownedStationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chargingStation
     */
    select?: chargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chargingStation
     */
    omit?: chargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chargingStationInclude<ExtArgs> | null
    where?: chargingStationWhereInput
    orderBy?: chargingStationOrderByWithRelationInput | chargingStationOrderByWithRelationInput[]
    cursor?: chargingStationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChargingStationScalarFieldEnum | ChargingStationScalarFieldEnum[]
  }

  /**
   * User.reselledStations
   */
  export type User$reselledStationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chargingStation
     */
    select?: chargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chargingStation
     */
    omit?: chargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chargingStationInclude<ExtArgs> | null
    where?: chargingStationWhereInput
    orderBy?: chargingStationOrderByWithRelationInput | chargingStationOrderByWithRelationInput[]
    cursor?: chargingStationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChargingStationScalarFieldEnum | ChargingStationScalarFieldEnum[]
  }

  /**
   * User.operatedStations
   */
  export type User$operatedStationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chargingStation
     */
    select?: chargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chargingStation
     */
    omit?: chargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chargingStationInclude<ExtArgs> | null
    where?: chargingStationWhereInput
    orderBy?: chargingStationOrderByWithRelationInput | chargingStationOrderByWithRelationInput[]
    cursor?: chargingStationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChargingStationScalarFieldEnum | ChargingStationScalarFieldEnum[]
  }

  /**
   * User.previuoslyConnectedStatoins
   */
  export type User$previuoslyConnectedStatoinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chargingStation
     */
    select?: chargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chargingStation
     */
    omit?: chargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chargingStationInclude<ExtArgs> | null
    where?: chargingStationWhereInput
    orderBy?: chargingStationOrderByWithRelationInput | chargingStationOrderByWithRelationInput[]
    cursor?: chargingStationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChargingStationScalarFieldEnum | ChargingStationScalarFieldEnum[]
  }

  /**
   * User.session
   */
  export type User$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    where?: SessionsWhereInput
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    cursor?: SessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * User.transaction
   */
  export type User$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model chargingStation
   */

  export type AggregateChargingStation = {
    _count: ChargingStationCountAggregateOutputType | null
    _avg: ChargingStationAvgAggregateOutputType | null
    _sum: ChargingStationSumAggregateOutputType | null
    _min: ChargingStationMinAggregateOutputType | null
    _max: ChargingStationMaxAggregateOutputType | null
  }

  export type ChargingStationAvgAggregateOutputType = {
    id: number | null
    OEMId: number | null
    resellerId: number | null
    operatorId: number | null
    connectedUserID: number | null
    totalEnergyConsumption: number | null
    healthPercentage: number | null
  }

  export type ChargingStationSumAggregateOutputType = {
    id: number | null
    OEMId: number | null
    resellerId: number | null
    operatorId: number | null
    connectedUserID: number | null
    totalEnergyConsumption: bigint | null
    healthPercentage: number | null
  }

  export type ChargingStationMinAggregateOutputType = {
    id: number | null
    location: string | null
    OEMId: number | null
    resellerId: number | null
    operatorId: number | null
    connectedUserID: number | null
    totalEnergyConsumption: bigint | null
    healthPercentage: number | null
    isOccupied: boolean | null
    isActive: boolean | null
    isFaulty: boolean | null
  }

  export type ChargingStationMaxAggregateOutputType = {
    id: number | null
    location: string | null
    OEMId: number | null
    resellerId: number | null
    operatorId: number | null
    connectedUserID: number | null
    totalEnergyConsumption: bigint | null
    healthPercentage: number | null
    isOccupied: boolean | null
    isActive: boolean | null
    isFaulty: boolean | null
  }

  export type ChargingStationCountAggregateOutputType = {
    id: number
    location: number
    OEMId: number
    resellerId: number
    operatorId: number
    connectedUserID: number
    totalEnergyConsumption: number
    healthPercentage: number
    isOccupied: number
    isActive: number
    isFaulty: number
    _all: number
  }


  export type ChargingStationAvgAggregateInputType = {
    id?: true
    OEMId?: true
    resellerId?: true
    operatorId?: true
    connectedUserID?: true
    totalEnergyConsumption?: true
    healthPercentage?: true
  }

  export type ChargingStationSumAggregateInputType = {
    id?: true
    OEMId?: true
    resellerId?: true
    operatorId?: true
    connectedUserID?: true
    totalEnergyConsumption?: true
    healthPercentage?: true
  }

  export type ChargingStationMinAggregateInputType = {
    id?: true
    location?: true
    OEMId?: true
    resellerId?: true
    operatorId?: true
    connectedUserID?: true
    totalEnergyConsumption?: true
    healthPercentage?: true
    isOccupied?: true
    isActive?: true
    isFaulty?: true
  }

  export type ChargingStationMaxAggregateInputType = {
    id?: true
    location?: true
    OEMId?: true
    resellerId?: true
    operatorId?: true
    connectedUserID?: true
    totalEnergyConsumption?: true
    healthPercentage?: true
    isOccupied?: true
    isActive?: true
    isFaulty?: true
  }

  export type ChargingStationCountAggregateInputType = {
    id?: true
    location?: true
    OEMId?: true
    resellerId?: true
    operatorId?: true
    connectedUserID?: true
    totalEnergyConsumption?: true
    healthPercentage?: true
    isOccupied?: true
    isActive?: true
    isFaulty?: true
    _all?: true
  }

  export type ChargingStationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chargingStation to aggregate.
     */
    where?: chargingStationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chargingStations to fetch.
     */
    orderBy?: chargingStationOrderByWithRelationInput | chargingStationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chargingStationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chargingStations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chargingStations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chargingStations
    **/
    _count?: true | ChargingStationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChargingStationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChargingStationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChargingStationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChargingStationMaxAggregateInputType
  }

  export type GetChargingStationAggregateType<T extends ChargingStationAggregateArgs> = {
        [P in keyof T & keyof AggregateChargingStation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChargingStation[P]>
      : GetScalarType<T[P], AggregateChargingStation[P]>
  }




  export type chargingStationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chargingStationWhereInput
    orderBy?: chargingStationOrderByWithAggregationInput | chargingStationOrderByWithAggregationInput[]
    by: ChargingStationScalarFieldEnum[] | ChargingStationScalarFieldEnum
    having?: chargingStationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChargingStationCountAggregateInputType | true
    _avg?: ChargingStationAvgAggregateInputType
    _sum?: ChargingStationSumAggregateInputType
    _min?: ChargingStationMinAggregateInputType
    _max?: ChargingStationMaxAggregateInputType
  }

  export type ChargingStationGroupByOutputType = {
    id: number
    location: string
    OEMId: number
    resellerId: number
    operatorId: number
    connectedUserID: number | null
    totalEnergyConsumption: bigint
    healthPercentage: number
    isOccupied: boolean
    isActive: boolean
    isFaulty: boolean
    _count: ChargingStationCountAggregateOutputType | null
    _avg: ChargingStationAvgAggregateOutputType | null
    _sum: ChargingStationSumAggregateOutputType | null
    _min: ChargingStationMinAggregateOutputType | null
    _max: ChargingStationMaxAggregateOutputType | null
  }

  type GetChargingStationGroupByPayload<T extends chargingStationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChargingStationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChargingStationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChargingStationGroupByOutputType[P]>
            : GetScalarType<T[P], ChargingStationGroupByOutputType[P]>
        }
      >
    >


  export type chargingStationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    OEMId?: boolean
    resellerId?: boolean
    operatorId?: boolean
    connectedUserID?: boolean
    totalEnergyConsumption?: boolean
    healthPercentage?: boolean
    isOccupied?: boolean
    isActive?: boolean
    isFaulty?: boolean
    OEM?: boolean | UserDefaultArgs<ExtArgs>
    reseller?: boolean | UserDefaultArgs<ExtArgs>
    operator?: boolean | UserDefaultArgs<ExtArgs>
    connectedUser?: boolean | chargingStation$connectedUserArgs<ExtArgs>
    session?: boolean | chargingStation$sessionArgs<ExtArgs>
    _count?: boolean | ChargingStationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chargingStation"]>

  export type chargingStationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    OEMId?: boolean
    resellerId?: boolean
    operatorId?: boolean
    connectedUserID?: boolean
    totalEnergyConsumption?: boolean
    healthPercentage?: boolean
    isOccupied?: boolean
    isActive?: boolean
    isFaulty?: boolean
    OEM?: boolean | UserDefaultArgs<ExtArgs>
    reseller?: boolean | UserDefaultArgs<ExtArgs>
    operator?: boolean | UserDefaultArgs<ExtArgs>
    connectedUser?: boolean | chargingStation$connectedUserArgs<ExtArgs>
  }, ExtArgs["result"]["chargingStation"]>

  export type chargingStationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    OEMId?: boolean
    resellerId?: boolean
    operatorId?: boolean
    connectedUserID?: boolean
    totalEnergyConsumption?: boolean
    healthPercentage?: boolean
    isOccupied?: boolean
    isActive?: boolean
    isFaulty?: boolean
    OEM?: boolean | UserDefaultArgs<ExtArgs>
    reseller?: boolean | UserDefaultArgs<ExtArgs>
    operator?: boolean | UserDefaultArgs<ExtArgs>
    connectedUser?: boolean | chargingStation$connectedUserArgs<ExtArgs>
  }, ExtArgs["result"]["chargingStation"]>

  export type chargingStationSelectScalar = {
    id?: boolean
    location?: boolean
    OEMId?: boolean
    resellerId?: boolean
    operatorId?: boolean
    connectedUserID?: boolean
    totalEnergyConsumption?: boolean
    healthPercentage?: boolean
    isOccupied?: boolean
    isActive?: boolean
    isFaulty?: boolean
  }

  export type chargingStationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "location" | "OEMId" | "resellerId" | "operatorId" | "connectedUserID" | "totalEnergyConsumption" | "healthPercentage" | "isOccupied" | "isActive" | "isFaulty", ExtArgs["result"]["chargingStation"]>
  export type chargingStationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OEM?: boolean | UserDefaultArgs<ExtArgs>
    reseller?: boolean | UserDefaultArgs<ExtArgs>
    operator?: boolean | UserDefaultArgs<ExtArgs>
    connectedUser?: boolean | chargingStation$connectedUserArgs<ExtArgs>
    session?: boolean | chargingStation$sessionArgs<ExtArgs>
    _count?: boolean | ChargingStationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type chargingStationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OEM?: boolean | UserDefaultArgs<ExtArgs>
    reseller?: boolean | UserDefaultArgs<ExtArgs>
    operator?: boolean | UserDefaultArgs<ExtArgs>
    connectedUser?: boolean | chargingStation$connectedUserArgs<ExtArgs>
  }
  export type chargingStationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OEM?: boolean | UserDefaultArgs<ExtArgs>
    reseller?: boolean | UserDefaultArgs<ExtArgs>
    operator?: boolean | UserDefaultArgs<ExtArgs>
    connectedUser?: boolean | chargingStation$connectedUserArgs<ExtArgs>
  }

  export type $chargingStationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chargingStation"
    objects: {
      OEM: Prisma.$UserPayload<ExtArgs>
      reseller: Prisma.$UserPayload<ExtArgs>
      operator: Prisma.$UserPayload<ExtArgs>
      connectedUser: Prisma.$UserPayload<ExtArgs> | null
      session: Prisma.$SessionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      location: string
      OEMId: number
      resellerId: number
      operatorId: number
      connectedUserID: number | null
      totalEnergyConsumption: bigint
      healthPercentage: number
      isOccupied: boolean
      isActive: boolean
      isFaulty: boolean
    }, ExtArgs["result"]["chargingStation"]>
    composites: {}
  }

  type chargingStationGetPayload<S extends boolean | null | undefined | chargingStationDefaultArgs> = $Result.GetResult<Prisma.$chargingStationPayload, S>

  type chargingStationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chargingStationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChargingStationCountAggregateInputType | true
    }

  export interface chargingStationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chargingStation'], meta: { name: 'chargingStation' } }
    /**
     * Find zero or one ChargingStation that matches the filter.
     * @param {chargingStationFindUniqueArgs} args - Arguments to find a ChargingStation
     * @example
     * // Get one ChargingStation
     * const chargingStation = await prisma.chargingStation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chargingStationFindUniqueArgs>(args: SelectSubset<T, chargingStationFindUniqueArgs<ExtArgs>>): Prisma__chargingStationClient<$Result.GetResult<Prisma.$chargingStationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChargingStation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chargingStationFindUniqueOrThrowArgs} args - Arguments to find a ChargingStation
     * @example
     * // Get one ChargingStation
     * const chargingStation = await prisma.chargingStation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chargingStationFindUniqueOrThrowArgs>(args: SelectSubset<T, chargingStationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chargingStationClient<$Result.GetResult<Prisma.$chargingStationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChargingStation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chargingStationFindFirstArgs} args - Arguments to find a ChargingStation
     * @example
     * // Get one ChargingStation
     * const chargingStation = await prisma.chargingStation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chargingStationFindFirstArgs>(args?: SelectSubset<T, chargingStationFindFirstArgs<ExtArgs>>): Prisma__chargingStationClient<$Result.GetResult<Prisma.$chargingStationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChargingStation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chargingStationFindFirstOrThrowArgs} args - Arguments to find a ChargingStation
     * @example
     * // Get one ChargingStation
     * const chargingStation = await prisma.chargingStation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chargingStationFindFirstOrThrowArgs>(args?: SelectSubset<T, chargingStationFindFirstOrThrowArgs<ExtArgs>>): Prisma__chargingStationClient<$Result.GetResult<Prisma.$chargingStationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChargingStations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chargingStationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChargingStations
     * const chargingStations = await prisma.chargingStation.findMany()
     * 
     * // Get first 10 ChargingStations
     * const chargingStations = await prisma.chargingStation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chargingStationWithIdOnly = await prisma.chargingStation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chargingStationFindManyArgs>(args?: SelectSubset<T, chargingStationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chargingStationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChargingStation.
     * @param {chargingStationCreateArgs} args - Arguments to create a ChargingStation.
     * @example
     * // Create one ChargingStation
     * const ChargingStation = await prisma.chargingStation.create({
     *   data: {
     *     // ... data to create a ChargingStation
     *   }
     * })
     * 
     */
    create<T extends chargingStationCreateArgs>(args: SelectSubset<T, chargingStationCreateArgs<ExtArgs>>): Prisma__chargingStationClient<$Result.GetResult<Prisma.$chargingStationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChargingStations.
     * @param {chargingStationCreateManyArgs} args - Arguments to create many ChargingStations.
     * @example
     * // Create many ChargingStations
     * const chargingStation = await prisma.chargingStation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chargingStationCreateManyArgs>(args?: SelectSubset<T, chargingStationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChargingStations and returns the data saved in the database.
     * @param {chargingStationCreateManyAndReturnArgs} args - Arguments to create many ChargingStations.
     * @example
     * // Create many ChargingStations
     * const chargingStation = await prisma.chargingStation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChargingStations and only return the `id`
     * const chargingStationWithIdOnly = await prisma.chargingStation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chargingStationCreateManyAndReturnArgs>(args?: SelectSubset<T, chargingStationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chargingStationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChargingStation.
     * @param {chargingStationDeleteArgs} args - Arguments to delete one ChargingStation.
     * @example
     * // Delete one ChargingStation
     * const ChargingStation = await prisma.chargingStation.delete({
     *   where: {
     *     // ... filter to delete one ChargingStation
     *   }
     * })
     * 
     */
    delete<T extends chargingStationDeleteArgs>(args: SelectSubset<T, chargingStationDeleteArgs<ExtArgs>>): Prisma__chargingStationClient<$Result.GetResult<Prisma.$chargingStationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChargingStation.
     * @param {chargingStationUpdateArgs} args - Arguments to update one ChargingStation.
     * @example
     * // Update one ChargingStation
     * const chargingStation = await prisma.chargingStation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chargingStationUpdateArgs>(args: SelectSubset<T, chargingStationUpdateArgs<ExtArgs>>): Prisma__chargingStationClient<$Result.GetResult<Prisma.$chargingStationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChargingStations.
     * @param {chargingStationDeleteManyArgs} args - Arguments to filter ChargingStations to delete.
     * @example
     * // Delete a few ChargingStations
     * const { count } = await prisma.chargingStation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chargingStationDeleteManyArgs>(args?: SelectSubset<T, chargingStationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChargingStations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chargingStationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChargingStations
     * const chargingStation = await prisma.chargingStation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chargingStationUpdateManyArgs>(args: SelectSubset<T, chargingStationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChargingStations and returns the data updated in the database.
     * @param {chargingStationUpdateManyAndReturnArgs} args - Arguments to update many ChargingStations.
     * @example
     * // Update many ChargingStations
     * const chargingStation = await prisma.chargingStation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChargingStations and only return the `id`
     * const chargingStationWithIdOnly = await prisma.chargingStation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends chargingStationUpdateManyAndReturnArgs>(args: SelectSubset<T, chargingStationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chargingStationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChargingStation.
     * @param {chargingStationUpsertArgs} args - Arguments to update or create a ChargingStation.
     * @example
     * // Update or create a ChargingStation
     * const chargingStation = await prisma.chargingStation.upsert({
     *   create: {
     *     // ... data to create a ChargingStation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChargingStation we want to update
     *   }
     * })
     */
    upsert<T extends chargingStationUpsertArgs>(args: SelectSubset<T, chargingStationUpsertArgs<ExtArgs>>): Prisma__chargingStationClient<$Result.GetResult<Prisma.$chargingStationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChargingStations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chargingStationCountArgs} args - Arguments to filter ChargingStations to count.
     * @example
     * // Count the number of ChargingStations
     * const count = await prisma.chargingStation.count({
     *   where: {
     *     // ... the filter for the ChargingStations we want to count
     *   }
     * })
    **/
    count<T extends chargingStationCountArgs>(
      args?: Subset<T, chargingStationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChargingStationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChargingStation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargingStationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChargingStationAggregateArgs>(args: Subset<T, ChargingStationAggregateArgs>): Prisma.PrismaPromise<GetChargingStationAggregateType<T>>

    /**
     * Group by ChargingStation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chargingStationGroupByArgs} args - Group by arguments.
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
      T extends chargingStationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chargingStationGroupByArgs['orderBy'] }
        : { orderBy?: chargingStationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, chargingStationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChargingStationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chargingStation model
   */
  readonly fields: chargingStationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chargingStation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chargingStationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    OEM<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reseller<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    operator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    connectedUser<T extends chargingStation$connectedUserArgs<ExtArgs> = {}>(args?: Subset<T, chargingStation$connectedUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    session<T extends chargingStation$sessionArgs<ExtArgs> = {}>(args?: Subset<T, chargingStation$sessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chargingStation model
   */
  interface chargingStationFieldRefs {
    readonly id: FieldRef<"chargingStation", 'Int'>
    readonly location: FieldRef<"chargingStation", 'String'>
    readonly OEMId: FieldRef<"chargingStation", 'Int'>
    readonly resellerId: FieldRef<"chargingStation", 'Int'>
    readonly operatorId: FieldRef<"chargingStation", 'Int'>
    readonly connectedUserID: FieldRef<"chargingStation", 'Int'>
    readonly totalEnergyConsumption: FieldRef<"chargingStation", 'BigInt'>
    readonly healthPercentage: FieldRef<"chargingStation", 'Int'>
    readonly isOccupied: FieldRef<"chargingStation", 'Boolean'>
    readonly isActive: FieldRef<"chargingStation", 'Boolean'>
    readonly isFaulty: FieldRef<"chargingStation", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * chargingStation findUnique
   */
  export type chargingStationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chargingStation
     */
    select?: chargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chargingStation
     */
    omit?: chargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chargingStationInclude<ExtArgs> | null
    /**
     * Filter, which chargingStation to fetch.
     */
    where: chargingStationWhereUniqueInput
  }

  /**
   * chargingStation findUniqueOrThrow
   */
  export type chargingStationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chargingStation
     */
    select?: chargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chargingStation
     */
    omit?: chargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chargingStationInclude<ExtArgs> | null
    /**
     * Filter, which chargingStation to fetch.
     */
    where: chargingStationWhereUniqueInput
  }

  /**
   * chargingStation findFirst
   */
  export type chargingStationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chargingStation
     */
    select?: chargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chargingStation
     */
    omit?: chargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chargingStationInclude<ExtArgs> | null
    /**
     * Filter, which chargingStation to fetch.
     */
    where?: chargingStationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chargingStations to fetch.
     */
    orderBy?: chargingStationOrderByWithRelationInput | chargingStationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chargingStations.
     */
    cursor?: chargingStationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chargingStations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chargingStations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chargingStations.
     */
    distinct?: ChargingStationScalarFieldEnum | ChargingStationScalarFieldEnum[]
  }

  /**
   * chargingStation findFirstOrThrow
   */
  export type chargingStationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chargingStation
     */
    select?: chargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chargingStation
     */
    omit?: chargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chargingStationInclude<ExtArgs> | null
    /**
     * Filter, which chargingStation to fetch.
     */
    where?: chargingStationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chargingStations to fetch.
     */
    orderBy?: chargingStationOrderByWithRelationInput | chargingStationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chargingStations.
     */
    cursor?: chargingStationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chargingStations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chargingStations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chargingStations.
     */
    distinct?: ChargingStationScalarFieldEnum | ChargingStationScalarFieldEnum[]
  }

  /**
   * chargingStation findMany
   */
  export type chargingStationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chargingStation
     */
    select?: chargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chargingStation
     */
    omit?: chargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chargingStationInclude<ExtArgs> | null
    /**
     * Filter, which chargingStations to fetch.
     */
    where?: chargingStationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chargingStations to fetch.
     */
    orderBy?: chargingStationOrderByWithRelationInput | chargingStationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chargingStations.
     */
    cursor?: chargingStationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chargingStations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chargingStations.
     */
    skip?: number
    distinct?: ChargingStationScalarFieldEnum | ChargingStationScalarFieldEnum[]
  }

  /**
   * chargingStation create
   */
  export type chargingStationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chargingStation
     */
    select?: chargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chargingStation
     */
    omit?: chargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chargingStationInclude<ExtArgs> | null
    /**
     * The data needed to create a chargingStation.
     */
    data: XOR<chargingStationCreateInput, chargingStationUncheckedCreateInput>
  }

  /**
   * chargingStation createMany
   */
  export type chargingStationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chargingStations.
     */
    data: chargingStationCreateManyInput | chargingStationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chargingStation createManyAndReturn
   */
  export type chargingStationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chargingStation
     */
    select?: chargingStationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chargingStation
     */
    omit?: chargingStationOmit<ExtArgs> | null
    /**
     * The data used to create many chargingStations.
     */
    data: chargingStationCreateManyInput | chargingStationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chargingStationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * chargingStation update
   */
  export type chargingStationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chargingStation
     */
    select?: chargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chargingStation
     */
    omit?: chargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chargingStationInclude<ExtArgs> | null
    /**
     * The data needed to update a chargingStation.
     */
    data: XOR<chargingStationUpdateInput, chargingStationUncheckedUpdateInput>
    /**
     * Choose, which chargingStation to update.
     */
    where: chargingStationWhereUniqueInput
  }

  /**
   * chargingStation updateMany
   */
  export type chargingStationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chargingStations.
     */
    data: XOR<chargingStationUpdateManyMutationInput, chargingStationUncheckedUpdateManyInput>
    /**
     * Filter which chargingStations to update
     */
    where?: chargingStationWhereInput
    /**
     * Limit how many chargingStations to update.
     */
    limit?: number
  }

  /**
   * chargingStation updateManyAndReturn
   */
  export type chargingStationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chargingStation
     */
    select?: chargingStationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chargingStation
     */
    omit?: chargingStationOmit<ExtArgs> | null
    /**
     * The data used to update chargingStations.
     */
    data: XOR<chargingStationUpdateManyMutationInput, chargingStationUncheckedUpdateManyInput>
    /**
     * Filter which chargingStations to update
     */
    where?: chargingStationWhereInput
    /**
     * Limit how many chargingStations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chargingStationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * chargingStation upsert
   */
  export type chargingStationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chargingStation
     */
    select?: chargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chargingStation
     */
    omit?: chargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chargingStationInclude<ExtArgs> | null
    /**
     * The filter to search for the chargingStation to update in case it exists.
     */
    where: chargingStationWhereUniqueInput
    /**
     * In case the chargingStation found by the `where` argument doesn't exist, create a new chargingStation with this data.
     */
    create: XOR<chargingStationCreateInput, chargingStationUncheckedCreateInput>
    /**
     * In case the chargingStation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chargingStationUpdateInput, chargingStationUncheckedUpdateInput>
  }

  /**
   * chargingStation delete
   */
  export type chargingStationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chargingStation
     */
    select?: chargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chargingStation
     */
    omit?: chargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chargingStationInclude<ExtArgs> | null
    /**
     * Filter which chargingStation to delete.
     */
    where: chargingStationWhereUniqueInput
  }

  /**
   * chargingStation deleteMany
   */
  export type chargingStationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chargingStations to delete
     */
    where?: chargingStationWhereInput
    /**
     * Limit how many chargingStations to delete.
     */
    limit?: number
  }

  /**
   * chargingStation.connectedUser
   */
  export type chargingStation$connectedUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * chargingStation.session
   */
  export type chargingStation$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    where?: SessionsWhereInput
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    cursor?: SessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * chargingStation without action
   */
  export type chargingStationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chargingStation
     */
    select?: chargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chargingStation
     */
    omit?: chargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chargingStationInclude<ExtArgs> | null
  }


  /**
   * Model Sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsAvgAggregateOutputType = {
    id: number | null
    stationId: number | null
    userId: number | null
    pointsUsed: number | null
    energyConsumption: number | null
  }

  export type SessionsSumAggregateOutputType = {
    id: number | null
    stationId: number | null
    userId: number | null
    pointsUsed: bigint | null
    energyConsumption: number | null
  }

  export type SessionsMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    totalTime: string | null
    isActive: boolean | null
    location: string | null
    stationId: number | null
    userId: number | null
    transactionID: string | null
    pointsUsed: bigint | null
    energyConsumption: number | null
  }

  export type SessionsMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    totalTime: string | null
    isActive: boolean | null
    location: string | null
    stationId: number | null
    userId: number | null
    transactionID: string | null
    pointsUsed: bigint | null
    energyConsumption: number | null
  }

  export type SessionsCountAggregateOutputType = {
    id: number
    createdAt: number
    totalTime: number
    isActive: number
    location: number
    stationId: number
    userId: number
    transactionID: number
    pointsUsed: number
    energyConsumption: number
    _all: number
  }


  export type SessionsAvgAggregateInputType = {
    id?: true
    stationId?: true
    userId?: true
    pointsUsed?: true
    energyConsumption?: true
  }

  export type SessionsSumAggregateInputType = {
    id?: true
    stationId?: true
    userId?: true
    pointsUsed?: true
    energyConsumption?: true
  }

  export type SessionsMinAggregateInputType = {
    id?: true
    createdAt?: true
    totalTime?: true
    isActive?: true
    location?: true
    stationId?: true
    userId?: true
    transactionID?: true
    pointsUsed?: true
    energyConsumption?: true
  }

  export type SessionsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    totalTime?: true
    isActive?: true
    location?: true
    stationId?: true
    userId?: true
    transactionID?: true
    pointsUsed?: true
    energyConsumption?: true
  }

  export type SessionsCountAggregateInputType = {
    id?: true
    createdAt?: true
    totalTime?: true
    isActive?: true
    location?: true
    stationId?: true
    userId?: true
    transactionID?: true
    pointsUsed?: true
    energyConsumption?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to aggregate.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type SessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionsWhereInput
    orderBy?: SessionsOrderByWithAggregationInput | SessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: SessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _avg?: SessionsAvgAggregateInputType
    _sum?: SessionsSumAggregateInputType
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    id: number
    createdAt: Date
    totalTime: string
    isActive: boolean
    location: string
    stationId: number
    userId: number
    transactionID: string | null
    pointsUsed: bigint
    energyConsumption: number
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends SessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type SessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    totalTime?: boolean
    isActive?: boolean
    location?: boolean
    stationId?: boolean
    userId?: boolean
    transactionID?: boolean
    pointsUsed?: boolean
    energyConsumption?: boolean
    chargingStation?: boolean | chargingStationDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type SessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    totalTime?: boolean
    isActive?: boolean
    location?: boolean
    stationId?: boolean
    userId?: boolean
    transactionID?: boolean
    pointsUsed?: boolean
    energyConsumption?: boolean
    chargingStation?: boolean | chargingStationDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type SessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    totalTime?: boolean
    isActive?: boolean
    location?: boolean
    stationId?: boolean
    userId?: boolean
    transactionID?: boolean
    pointsUsed?: boolean
    energyConsumption?: boolean
    chargingStation?: boolean | chargingStationDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type SessionsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    totalTime?: boolean
    isActive?: boolean
    location?: boolean
    stationId?: boolean
    userId?: boolean
    transactionID?: boolean
    pointsUsed?: boolean
    energyConsumption?: boolean
  }

  export type SessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "totalTime" | "isActive" | "location" | "stationId" | "userId" | "transactionID" | "pointsUsed" | "energyConsumption", ExtArgs["result"]["sessions"]>
  export type SessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chargingStation?: boolean | chargingStationDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chargingStation?: boolean | chargingStationDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chargingStation?: boolean | chargingStationDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sessions"
    objects: {
      chargingStation: Prisma.$chargingStationPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      totalTime: string
      isActive: boolean
      location: string
      stationId: number
      userId: number
      transactionID: string | null
      pointsUsed: bigint
      energyConsumption: number
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type SessionsGetPayload<S extends boolean | null | undefined | SessionsDefaultArgs> = $Result.GetResult<Prisma.$SessionsPayload, S>

  type SessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface SessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sessions'], meta: { name: 'Sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {SessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionsFindUniqueArgs>(args: SelectSubset<T, SessionsFindUniqueArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionsFindFirstArgs>(args?: SelectSubset<T, SessionsFindFirstArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionsWithIdOnly = await prisma.sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionsFindManyArgs>(args?: SelectSubset<T, SessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessions.
     * @param {SessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
     */
    create<T extends SessionsCreateArgs>(args: SelectSubset<T, SessionsCreateArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionsCreateManyArgs>(args?: SelectSubset<T, SessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionsCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sessions.
     * @param {SessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
     */
    delete<T extends SessionsDeleteArgs>(args: SelectSubset<T, SessionsDeleteArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessions.
     * @param {SessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionsUpdateArgs>(args: SelectSubset<T, SessionsUpdateArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionsDeleteManyArgs>(args?: SelectSubset<T, SessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionsUpdateManyArgs>(args: SelectSubset<T, SessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionsUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sessions.
     * @param {SessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends SessionsUpsertArgs>(args: SelectSubset<T, SessionsUpsertArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionsCountArgs>(
      args?: Subset<T, SessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsGroupByArgs} args - Group by arguments.
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
      T extends SessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionsGroupByArgs['orderBy'] }
        : { orderBy?: SessionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sessions model
   */
  readonly fields: SessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chargingStation<T extends chargingStationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, chargingStationDefaultArgs<ExtArgs>>): Prisma__chargingStationClient<$Result.GetResult<Prisma.$chargingStationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sessions model
   */
  interface SessionsFieldRefs {
    readonly id: FieldRef<"Sessions", 'Int'>
    readonly createdAt: FieldRef<"Sessions", 'DateTime'>
    readonly totalTime: FieldRef<"Sessions", 'String'>
    readonly isActive: FieldRef<"Sessions", 'Boolean'>
    readonly location: FieldRef<"Sessions", 'String'>
    readonly stationId: FieldRef<"Sessions", 'Int'>
    readonly userId: FieldRef<"Sessions", 'Int'>
    readonly transactionID: FieldRef<"Sessions", 'String'>
    readonly pointsUsed: FieldRef<"Sessions", 'BigInt'>
    readonly energyConsumption: FieldRef<"Sessions", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Sessions findUnique
   */
  export type SessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions findUniqueOrThrow
   */
  export type SessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions findFirst
   */
  export type SessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions findFirstOrThrow
   */
  export type SessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions findMany
   */
  export type SessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions create
   */
  export type SessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Sessions.
     */
    data: XOR<SessionsCreateInput, SessionsUncheckedCreateInput>
  }

  /**
   * Sessions createMany
   */
  export type SessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionsCreateManyInput | SessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sessions createManyAndReturn
   */
  export type SessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionsCreateManyInput | SessionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sessions update
   */
  export type SessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Sessions.
     */
    data: XOR<SessionsUpdateInput, SessionsUncheckedUpdateInput>
    /**
     * Choose, which Sessions to update.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions updateMany
   */
  export type SessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Sessions updateManyAndReturn
   */
  export type SessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sessions upsert
   */
  export type SessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Sessions to update in case it exists.
     */
    where: SessionsWhereUniqueInput
    /**
     * In case the Sessions found by the `where` argument doesn't exist, create a new Sessions with this data.
     */
    create: XOR<SessionsCreateInput, SessionsUncheckedCreateInput>
    /**
     * In case the Sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionsUpdateInput, SessionsUncheckedUpdateInput>
  }

  /**
   * Sessions delete
   */
  export type SessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter which Sessions to delete.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions deleteMany
   */
  export type SessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Sessions without action
   */
  export type SessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
  }


  /**
   * Model Transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    coinsPurchased: number | null
    amountPaid: number | null
  }

  export type TransactionsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    coinsPurchased: bigint | null
    amountPaid: number | null
  }

  export type TransactionsMinAggregateOutputType = {
    id: number | null
    transactionId: string | null
    createdAt: Date | null
    status: $Enums.TransactionStatus | null
    userId: number | null
    coinsPurchased: bigint | null
    amountPaid: number | null
  }

  export type TransactionsMaxAggregateOutputType = {
    id: number | null
    transactionId: string | null
    createdAt: Date | null
    status: $Enums.TransactionStatus | null
    userId: number | null
    coinsPurchased: bigint | null
    amountPaid: number | null
  }

  export type TransactionsCountAggregateOutputType = {
    id: number
    transactionId: number
    createdAt: number
    status: number
    userId: number
    coinsPurchased: number
    amountPaid: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    id?: true
    userId?: true
    coinsPurchased?: true
    amountPaid?: true
  }

  export type TransactionsSumAggregateInputType = {
    id?: true
    userId?: true
    coinsPurchased?: true
    amountPaid?: true
  }

  export type TransactionsMinAggregateInputType = {
    id?: true
    transactionId?: true
    createdAt?: true
    status?: true
    userId?: true
    coinsPurchased?: true
    amountPaid?: true
  }

  export type TransactionsMaxAggregateInputType = {
    id?: true
    transactionId?: true
    createdAt?: true
    status?: true
    userId?: true
    coinsPurchased?: true
    amountPaid?: true
  }

  export type TransactionsCountAggregateInputType = {
    id?: true
    transactionId?: true
    createdAt?: true
    status?: true
    userId?: true
    coinsPurchased?: true
    amountPaid?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to aggregate.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type TransactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithAggregationInput | TransactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: TransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    id: number
    transactionId: string
    createdAt: Date
    status: $Enums.TransactionStatus
    userId: number
    coinsPurchased: bigint
    amountPaid: number
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends TransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type TransactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    createdAt?: boolean
    status?: boolean
    userId?: boolean
    coinsPurchased?: boolean
    amountPaid?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    createdAt?: boolean
    status?: boolean
    userId?: boolean
    coinsPurchased?: boolean
    amountPaid?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    createdAt?: boolean
    status?: boolean
    userId?: boolean
    coinsPurchased?: boolean
    amountPaid?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectScalar = {
    id?: boolean
    transactionId?: boolean
    createdAt?: boolean
    status?: boolean
    userId?: boolean
    coinsPurchased?: boolean
    amountPaid?: boolean
  }

  export type TransactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transactionId" | "createdAt" | "status" | "userId" | "coinsPurchased" | "amountPaid", ExtArgs["result"]["transactions"]>
  export type TransactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transactions"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      transactionId: string
      createdAt: Date
      status: $Enums.TransactionStatus
      userId: number
      coinsPurchased: bigint
      amountPaid: number
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type TransactionsGetPayload<S extends boolean | null | undefined | TransactionsDefaultArgs> = $Result.GetResult<Prisma.$TransactionsPayload, S>

  type TransactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface TransactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transactions'], meta: { name: 'Transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {TransactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionsFindUniqueArgs>(args: SelectSubset<T, TransactionsFindUniqueArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionsFindFirstArgs>(args?: SelectSubset<T, TransactionsFindFirstArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionsWithIdOnly = await prisma.transactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionsFindManyArgs>(args?: SelectSubset<T, TransactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transactions.
     * @param {TransactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends TransactionsCreateArgs>(args: SelectSubset<T, TransactionsCreateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionsCreateManyArgs>(args?: SelectSubset<T, TransactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionsCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transactions.
     * @param {TransactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends TransactionsDeleteArgs>(args: SelectSubset<T, TransactionsDeleteArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transactions.
     * @param {TransactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionsUpdateArgs>(args: SelectSubset<T, TransactionsUpdateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionsDeleteManyArgs>(args?: SelectSubset<T, TransactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionsUpdateManyArgs>(args: SelectSubset<T, TransactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionsUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transactions.
     * @param {TransactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends TransactionsUpsertArgs>(args: SelectSubset<T, TransactionsUpsertArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionsCountArgs>(
      args?: Subset<T, TransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsGroupByArgs} args - Group by arguments.
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
      T extends TransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionsGroupByArgs['orderBy'] }
        : { orderBy?: TransactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transactions model
   */
  readonly fields: TransactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transactions model
   */
  interface TransactionsFieldRefs {
    readonly id: FieldRef<"Transactions", 'Int'>
    readonly transactionId: FieldRef<"Transactions", 'String'>
    readonly createdAt: FieldRef<"Transactions", 'DateTime'>
    readonly status: FieldRef<"Transactions", 'TransactionStatus'>
    readonly userId: FieldRef<"Transactions", 'Int'>
    readonly coinsPurchased: FieldRef<"Transactions", 'BigInt'>
    readonly amountPaid: FieldRef<"Transactions", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Transactions findUnique
   */
  export type TransactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findUniqueOrThrow
   */
  export type TransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findFirst
   */
  export type TransactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findFirstOrThrow
   */
  export type TransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findMany
   */
  export type TransactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions create
   */
  export type TransactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Transactions.
     */
    data: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
  }

  /**
   * Transactions createMany
   */
  export type TransactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transactions createManyAndReturn
   */
  export type TransactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transactions update
   */
  export type TransactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Transactions.
     */
    data: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
    /**
     * Choose, which Transactions to update.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions updateMany
   */
  export type TransactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionsWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transactions updateManyAndReturn
   */
  export type TransactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionsWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transactions upsert
   */
  export type TransactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Transactions to update in case it exists.
     */
    where: TransactionsWhereUniqueInput
    /**
     * In case the Transactions found by the `where` argument doesn't exist, create a new Transactions with this data.
     */
    create: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
    /**
     * In case the Transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
  }

  /**
   * Transactions delete
   */
  export type TransactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter which Transactions to delete.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions deleteMany
   */
  export type TransactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionsWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transactions without action
   */
  export type TransactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    role: 'role',
    linkedOEM: 'linkedOEM',
    linkedReseller: 'linkedReseller',
    linkedOperator: 'linkedOperator',
    points: 'points',
    vehicle: 'vehicle',
    gstNumber: 'gstNumber'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChargingStationScalarFieldEnum: {
    id: 'id',
    location: 'location',
    OEMId: 'OEMId',
    resellerId: 'resellerId',
    operatorId: 'operatorId',
    connectedUserID: 'connectedUserID',
    totalEnergyConsumption: 'totalEnergyConsumption',
    healthPercentage: 'healthPercentage',
    isOccupied: 'isOccupied',
    isActive: 'isActive',
    isFaulty: 'isFaulty'
  };

  export type ChargingStationScalarFieldEnum = (typeof ChargingStationScalarFieldEnum)[keyof typeof ChargingStationScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    totalTime: 'totalTime',
    isActive: 'isActive',
    location: 'location',
    stationId: 'stationId',
    userId: 'userId',
    transactionID: 'transactionID',
    pointsUsed: 'pointsUsed',
    energyConsumption: 'energyConsumption'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    id: 'id',
    transactionId: 'transactionId',
    createdAt: 'createdAt',
    status: 'status',
    userId: 'userId',
    coinsPurchased: 'coinsPurchased',
    amountPaid: 'amountPaid'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    linkedOEM?: IntNullableFilter<"User"> | number | null
    linkedReseller?: IntNullableFilter<"User"> | number | null
    linkedOperator?: IntNullableFilter<"User"> | number | null
    points?: BigIntNullableFilter<"User"> | bigint | number | null
    vehicle?: StringNullableFilter<"User"> | string | null
    gstNumber?: StringNullableFilter<"User"> | string | null
    ownedStations?: ChargingStationListRelationFilter
    reselledStations?: ChargingStationListRelationFilter
    operatedStations?: ChargingStationListRelationFilter
    previuoslyConnectedStatoins?: ChargingStationListRelationFilter
    session?: SessionsListRelationFilter
    transaction?: TransactionsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    linkedOEM?: SortOrderInput | SortOrder
    linkedReseller?: SortOrderInput | SortOrder
    linkedOperator?: SortOrderInput | SortOrder
    points?: SortOrderInput | SortOrder
    vehicle?: SortOrderInput | SortOrder
    gstNumber?: SortOrderInput | SortOrder
    ownedStations?: chargingStationOrderByRelationAggregateInput
    reselledStations?: chargingStationOrderByRelationAggregateInput
    operatedStations?: chargingStationOrderByRelationAggregateInput
    previuoslyConnectedStatoins?: chargingStationOrderByRelationAggregateInput
    session?: SessionsOrderByRelationAggregateInput
    transaction?: TransactionsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    linkedOEM?: IntNullableFilter<"User"> | number | null
    linkedReseller?: IntNullableFilter<"User"> | number | null
    linkedOperator?: IntNullableFilter<"User"> | number | null
    points?: BigIntNullableFilter<"User"> | bigint | number | null
    vehicle?: StringNullableFilter<"User"> | string | null
    gstNumber?: StringNullableFilter<"User"> | string | null
    ownedStations?: ChargingStationListRelationFilter
    reselledStations?: ChargingStationListRelationFilter
    operatedStations?: ChargingStationListRelationFilter
    previuoslyConnectedStatoins?: ChargingStationListRelationFilter
    session?: SessionsListRelationFilter
    transaction?: TransactionsListRelationFilter
  }, "id" | "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    linkedOEM?: SortOrderInput | SortOrder
    linkedReseller?: SortOrderInput | SortOrder
    linkedOperator?: SortOrderInput | SortOrder
    points?: SortOrderInput | SortOrder
    vehicle?: SortOrderInput | SortOrder
    gstNumber?: SortOrderInput | SortOrder
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
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    linkedOEM?: IntNullableWithAggregatesFilter<"User"> | number | null
    linkedReseller?: IntNullableWithAggregatesFilter<"User"> | number | null
    linkedOperator?: IntNullableWithAggregatesFilter<"User"> | number | null
    points?: BigIntNullableWithAggregatesFilter<"User"> | bigint | number | null
    vehicle?: StringNullableWithAggregatesFilter<"User"> | string | null
    gstNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type chargingStationWhereInput = {
    AND?: chargingStationWhereInput | chargingStationWhereInput[]
    OR?: chargingStationWhereInput[]
    NOT?: chargingStationWhereInput | chargingStationWhereInput[]
    id?: IntFilter<"chargingStation"> | number
    location?: StringFilter<"chargingStation"> | string
    OEMId?: IntFilter<"chargingStation"> | number
    resellerId?: IntFilter<"chargingStation"> | number
    operatorId?: IntFilter<"chargingStation"> | number
    connectedUserID?: IntNullableFilter<"chargingStation"> | number | null
    totalEnergyConsumption?: BigIntFilter<"chargingStation"> | bigint | number
    healthPercentage?: IntFilter<"chargingStation"> | number
    isOccupied?: BoolFilter<"chargingStation"> | boolean
    isActive?: BoolFilter<"chargingStation"> | boolean
    isFaulty?: BoolFilter<"chargingStation"> | boolean
    OEM?: XOR<UserScalarRelationFilter, UserWhereInput>
    reseller?: XOR<UserScalarRelationFilter, UserWhereInput>
    operator?: XOR<UserScalarRelationFilter, UserWhereInput>
    connectedUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    session?: SessionsListRelationFilter
  }

  export type chargingStationOrderByWithRelationInput = {
    id?: SortOrder
    location?: SortOrder
    OEMId?: SortOrder
    resellerId?: SortOrder
    operatorId?: SortOrder
    connectedUserID?: SortOrderInput | SortOrder
    totalEnergyConsumption?: SortOrder
    healthPercentage?: SortOrder
    isOccupied?: SortOrder
    isActive?: SortOrder
    isFaulty?: SortOrder
    OEM?: UserOrderByWithRelationInput
    reseller?: UserOrderByWithRelationInput
    operator?: UserOrderByWithRelationInput
    connectedUser?: UserOrderByWithRelationInput
    session?: SessionsOrderByRelationAggregateInput
  }

  export type chargingStationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: chargingStationWhereInput | chargingStationWhereInput[]
    OR?: chargingStationWhereInput[]
    NOT?: chargingStationWhereInput | chargingStationWhereInput[]
    location?: StringFilter<"chargingStation"> | string
    OEMId?: IntFilter<"chargingStation"> | number
    resellerId?: IntFilter<"chargingStation"> | number
    operatorId?: IntFilter<"chargingStation"> | number
    connectedUserID?: IntNullableFilter<"chargingStation"> | number | null
    totalEnergyConsumption?: BigIntFilter<"chargingStation"> | bigint | number
    healthPercentage?: IntFilter<"chargingStation"> | number
    isOccupied?: BoolFilter<"chargingStation"> | boolean
    isActive?: BoolFilter<"chargingStation"> | boolean
    isFaulty?: BoolFilter<"chargingStation"> | boolean
    OEM?: XOR<UserScalarRelationFilter, UserWhereInput>
    reseller?: XOR<UserScalarRelationFilter, UserWhereInput>
    operator?: XOR<UserScalarRelationFilter, UserWhereInput>
    connectedUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    session?: SessionsListRelationFilter
  }, "id" | "id">

  export type chargingStationOrderByWithAggregationInput = {
    id?: SortOrder
    location?: SortOrder
    OEMId?: SortOrder
    resellerId?: SortOrder
    operatorId?: SortOrder
    connectedUserID?: SortOrderInput | SortOrder
    totalEnergyConsumption?: SortOrder
    healthPercentage?: SortOrder
    isOccupied?: SortOrder
    isActive?: SortOrder
    isFaulty?: SortOrder
    _count?: chargingStationCountOrderByAggregateInput
    _avg?: chargingStationAvgOrderByAggregateInput
    _max?: chargingStationMaxOrderByAggregateInput
    _min?: chargingStationMinOrderByAggregateInput
    _sum?: chargingStationSumOrderByAggregateInput
  }

  export type chargingStationScalarWhereWithAggregatesInput = {
    AND?: chargingStationScalarWhereWithAggregatesInput | chargingStationScalarWhereWithAggregatesInput[]
    OR?: chargingStationScalarWhereWithAggregatesInput[]
    NOT?: chargingStationScalarWhereWithAggregatesInput | chargingStationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chargingStation"> | number
    location?: StringWithAggregatesFilter<"chargingStation"> | string
    OEMId?: IntWithAggregatesFilter<"chargingStation"> | number
    resellerId?: IntWithAggregatesFilter<"chargingStation"> | number
    operatorId?: IntWithAggregatesFilter<"chargingStation"> | number
    connectedUserID?: IntNullableWithAggregatesFilter<"chargingStation"> | number | null
    totalEnergyConsumption?: BigIntWithAggregatesFilter<"chargingStation"> | bigint | number
    healthPercentage?: IntWithAggregatesFilter<"chargingStation"> | number
    isOccupied?: BoolWithAggregatesFilter<"chargingStation"> | boolean
    isActive?: BoolWithAggregatesFilter<"chargingStation"> | boolean
    isFaulty?: BoolWithAggregatesFilter<"chargingStation"> | boolean
  }

  export type SessionsWhereInput = {
    AND?: SessionsWhereInput | SessionsWhereInput[]
    OR?: SessionsWhereInput[]
    NOT?: SessionsWhereInput | SessionsWhereInput[]
    id?: IntFilter<"Sessions"> | number
    createdAt?: DateTimeFilter<"Sessions"> | Date | string
    totalTime?: StringFilter<"Sessions"> | string
    isActive?: BoolFilter<"Sessions"> | boolean
    location?: StringFilter<"Sessions"> | string
    stationId?: IntFilter<"Sessions"> | number
    userId?: IntFilter<"Sessions"> | number
    transactionID?: StringNullableFilter<"Sessions"> | string | null
    pointsUsed?: BigIntFilter<"Sessions"> | bigint | number
    energyConsumption?: FloatFilter<"Sessions"> | number
    chargingStation?: XOR<ChargingStationScalarRelationFilter, chargingStationWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    totalTime?: SortOrder
    isActive?: SortOrder
    location?: SortOrder
    stationId?: SortOrder
    userId?: SortOrder
    transactionID?: SortOrderInput | SortOrder
    pointsUsed?: SortOrder
    energyConsumption?: SortOrder
    chargingStation?: chargingStationOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type SessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SessionsWhereInput | SessionsWhereInput[]
    OR?: SessionsWhereInput[]
    NOT?: SessionsWhereInput | SessionsWhereInput[]
    createdAt?: DateTimeFilter<"Sessions"> | Date | string
    totalTime?: StringFilter<"Sessions"> | string
    isActive?: BoolFilter<"Sessions"> | boolean
    location?: StringFilter<"Sessions"> | string
    stationId?: IntFilter<"Sessions"> | number
    userId?: IntFilter<"Sessions"> | number
    transactionID?: StringNullableFilter<"Sessions"> | string | null
    pointsUsed?: BigIntFilter<"Sessions"> | bigint | number
    energyConsumption?: FloatFilter<"Sessions"> | number
    chargingStation?: XOR<ChargingStationScalarRelationFilter, chargingStationWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id">

  export type SessionsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    totalTime?: SortOrder
    isActive?: SortOrder
    location?: SortOrder
    stationId?: SortOrder
    userId?: SortOrder
    transactionID?: SortOrderInput | SortOrder
    pointsUsed?: SortOrder
    energyConsumption?: SortOrder
    _count?: SessionsCountOrderByAggregateInput
    _avg?: SessionsAvgOrderByAggregateInput
    _max?: SessionsMaxOrderByAggregateInput
    _min?: SessionsMinOrderByAggregateInput
    _sum?: SessionsSumOrderByAggregateInput
  }

  export type SessionsScalarWhereWithAggregatesInput = {
    AND?: SessionsScalarWhereWithAggregatesInput | SessionsScalarWhereWithAggregatesInput[]
    OR?: SessionsScalarWhereWithAggregatesInput[]
    NOT?: SessionsScalarWhereWithAggregatesInput | SessionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sessions"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Sessions"> | Date | string
    totalTime?: StringWithAggregatesFilter<"Sessions"> | string
    isActive?: BoolWithAggregatesFilter<"Sessions"> | boolean
    location?: StringWithAggregatesFilter<"Sessions"> | string
    stationId?: IntWithAggregatesFilter<"Sessions"> | number
    userId?: IntWithAggregatesFilter<"Sessions"> | number
    transactionID?: StringNullableWithAggregatesFilter<"Sessions"> | string | null
    pointsUsed?: BigIntWithAggregatesFilter<"Sessions"> | bigint | number
    energyConsumption?: FloatWithAggregatesFilter<"Sessions"> | number
  }

  export type TransactionsWhereInput = {
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    id?: IntFilter<"Transactions"> | number
    transactionId?: StringFilter<"Transactions"> | string
    createdAt?: DateTimeFilter<"Transactions"> | Date | string
    status?: EnumTransactionStatusFilter<"Transactions"> | $Enums.TransactionStatus
    userId?: IntFilter<"Transactions"> | number
    coinsPurchased?: BigIntFilter<"Transactions"> | bigint | number
    amountPaid?: FloatFilter<"Transactions"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TransactionsOrderByWithRelationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    coinsPurchased?: SortOrder
    amountPaid?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TransactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    transactionId?: StringFilter<"Transactions"> | string
    createdAt?: DateTimeFilter<"Transactions"> | Date | string
    status?: EnumTransactionStatusFilter<"Transactions"> | $Enums.TransactionStatus
    userId?: IntFilter<"Transactions"> | number
    coinsPurchased?: BigIntFilter<"Transactions"> | bigint | number
    amountPaid?: FloatFilter<"Transactions"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id">

  export type TransactionsOrderByWithAggregationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    coinsPurchased?: SortOrder
    amountPaid?: SortOrder
    _count?: TransactionsCountOrderByAggregateInput
    _avg?: TransactionsAvgOrderByAggregateInput
    _max?: TransactionsMaxOrderByAggregateInput
    _min?: TransactionsMinOrderByAggregateInput
    _sum?: TransactionsSumOrderByAggregateInput
  }

  export type TransactionsScalarWhereWithAggregatesInput = {
    AND?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    OR?: TransactionsScalarWhereWithAggregatesInput[]
    NOT?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transactions"> | number
    transactionId?: StringWithAggregatesFilter<"Transactions"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Transactions"> | Date | string
    status?: EnumTransactionStatusWithAggregatesFilter<"Transactions"> | $Enums.TransactionStatus
    userId?: IntWithAggregatesFilter<"Transactions"> | number
    coinsPurchased?: BigIntWithAggregatesFilter<"Transactions"> | bigint | number
    amountPaid?: FloatWithAggregatesFilter<"Transactions"> | number
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    linkedOEM?: number | null
    linkedReseller?: number | null
    linkedOperator?: number | null
    points?: bigint | number | null
    vehicle?: string | null
    gstNumber?: string | null
    ownedStations?: chargingStationCreateNestedManyWithoutOEMInput
    reselledStations?: chargingStationCreateNestedManyWithoutResellerInput
    operatedStations?: chargingStationCreateNestedManyWithoutOperatorInput
    previuoslyConnectedStatoins?: chargingStationCreateNestedManyWithoutConnectedUserInput
    session?: SessionsCreateNestedManyWithoutUserInput
    transaction?: TransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    linkedOEM?: number | null
    linkedReseller?: number | null
    linkedOperator?: number | null
    points?: bigint | number | null
    vehicle?: string | null
    gstNumber?: string | null
    ownedStations?: chargingStationUncheckedCreateNestedManyWithoutOEMInput
    reselledStations?: chargingStationUncheckedCreateNestedManyWithoutResellerInput
    operatedStations?: chargingStationUncheckedCreateNestedManyWithoutOperatorInput
    previuoslyConnectedStatoins?: chargingStationUncheckedCreateNestedManyWithoutConnectedUserInput
    session?: SessionsUncheckedCreateNestedManyWithoutUserInput
    transaction?: TransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    linkedOEM?: NullableIntFieldUpdateOperationsInput | number | null
    linkedReseller?: NullableIntFieldUpdateOperationsInput | number | null
    linkedOperator?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownedStations?: chargingStationUpdateManyWithoutOEMNestedInput
    reselledStations?: chargingStationUpdateManyWithoutResellerNestedInput
    operatedStations?: chargingStationUpdateManyWithoutOperatorNestedInput
    previuoslyConnectedStatoins?: chargingStationUpdateManyWithoutConnectedUserNestedInput
    session?: SessionsUpdateManyWithoutUserNestedInput
    transaction?: TransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    linkedOEM?: NullableIntFieldUpdateOperationsInput | number | null
    linkedReseller?: NullableIntFieldUpdateOperationsInput | number | null
    linkedOperator?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownedStations?: chargingStationUncheckedUpdateManyWithoutOEMNestedInput
    reselledStations?: chargingStationUncheckedUpdateManyWithoutResellerNestedInput
    operatedStations?: chargingStationUncheckedUpdateManyWithoutOperatorNestedInput
    previuoslyConnectedStatoins?: chargingStationUncheckedUpdateManyWithoutConnectedUserNestedInput
    session?: SessionsUncheckedUpdateManyWithoutUserNestedInput
    transaction?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    linkedOEM?: number | null
    linkedReseller?: number | null
    linkedOperator?: number | null
    points?: bigint | number | null
    vehicle?: string | null
    gstNumber?: string | null
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    linkedOEM?: NullableIntFieldUpdateOperationsInput | number | null
    linkedReseller?: NullableIntFieldUpdateOperationsInput | number | null
    linkedOperator?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    linkedOEM?: NullableIntFieldUpdateOperationsInput | number | null
    linkedReseller?: NullableIntFieldUpdateOperationsInput | number | null
    linkedOperator?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type chargingStationCreateInput = {
    location: string
    totalEnergyConsumption: bigint | number
    healthPercentage: number
    isOccupied: boolean
    isActive: boolean
    isFaulty: boolean
    OEM: UserCreateNestedOneWithoutOwnedStationsInput
    reseller: UserCreateNestedOneWithoutReselledStationsInput
    operator: UserCreateNestedOneWithoutOperatedStationsInput
    connectedUser?: UserCreateNestedOneWithoutPreviuoslyConnectedStatoinsInput
    session?: SessionsCreateNestedManyWithoutChargingStationInput
  }

  export type chargingStationUncheckedCreateInput = {
    id?: number
    location: string
    OEMId: number
    resellerId: number
    operatorId: number
    connectedUserID?: number | null
    totalEnergyConsumption: bigint | number
    healthPercentage: number
    isOccupied: boolean
    isActive: boolean
    isFaulty: boolean
    session?: SessionsUncheckedCreateNestedManyWithoutChargingStationInput
  }

  export type chargingStationUpdateInput = {
    location?: StringFieldUpdateOperationsInput | string
    totalEnergyConsumption?: BigIntFieldUpdateOperationsInput | bigint | number
    healthPercentage?: IntFieldUpdateOperationsInput | number
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFaulty?: BoolFieldUpdateOperationsInput | boolean
    OEM?: UserUpdateOneRequiredWithoutOwnedStationsNestedInput
    reseller?: UserUpdateOneRequiredWithoutReselledStationsNestedInput
    operator?: UserUpdateOneRequiredWithoutOperatedStationsNestedInput
    connectedUser?: UserUpdateOneWithoutPreviuoslyConnectedStatoinsNestedInput
    session?: SessionsUpdateManyWithoutChargingStationNestedInput
  }

  export type chargingStationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    OEMId?: IntFieldUpdateOperationsInput | number
    resellerId?: IntFieldUpdateOperationsInput | number
    operatorId?: IntFieldUpdateOperationsInput | number
    connectedUserID?: NullableIntFieldUpdateOperationsInput | number | null
    totalEnergyConsumption?: BigIntFieldUpdateOperationsInput | bigint | number
    healthPercentage?: IntFieldUpdateOperationsInput | number
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFaulty?: BoolFieldUpdateOperationsInput | boolean
    session?: SessionsUncheckedUpdateManyWithoutChargingStationNestedInput
  }

  export type chargingStationCreateManyInput = {
    id?: number
    location: string
    OEMId: number
    resellerId: number
    operatorId: number
    connectedUserID?: number | null
    totalEnergyConsumption: bigint | number
    healthPercentage: number
    isOccupied: boolean
    isActive: boolean
    isFaulty: boolean
  }

  export type chargingStationUpdateManyMutationInput = {
    location?: StringFieldUpdateOperationsInput | string
    totalEnergyConsumption?: BigIntFieldUpdateOperationsInput | bigint | number
    healthPercentage?: IntFieldUpdateOperationsInput | number
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFaulty?: BoolFieldUpdateOperationsInput | boolean
  }

  export type chargingStationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    OEMId?: IntFieldUpdateOperationsInput | number
    resellerId?: IntFieldUpdateOperationsInput | number
    operatorId?: IntFieldUpdateOperationsInput | number
    connectedUserID?: NullableIntFieldUpdateOperationsInput | number | null
    totalEnergyConsumption?: BigIntFieldUpdateOperationsInput | bigint | number
    healthPercentage?: IntFieldUpdateOperationsInput | number
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFaulty?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionsCreateInput = {
    createdAt?: Date | string
    totalTime: string
    isActive: boolean
    location: string
    transactionID?: string | null
    pointsUsed?: bigint | number
    energyConsumption?: number
    chargingStation: chargingStationCreateNestedOneWithoutSessionInput
    User: UserCreateNestedOneWithoutSessionInput
  }

  export type SessionsUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    totalTime: string
    isActive: boolean
    location: string
    stationId: number
    userId: number
    transactionID?: string | null
    pointsUsed?: bigint | number
    energyConsumption?: number
  }

  export type SessionsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    transactionID?: NullableStringFieldUpdateOperationsInput | string | null
    pointsUsed?: BigIntFieldUpdateOperationsInput | bigint | number
    energyConsumption?: FloatFieldUpdateOperationsInput | number
    chargingStation?: chargingStationUpdateOneRequiredWithoutSessionNestedInput
    User?: UserUpdateOneRequiredWithoutSessionNestedInput
  }

  export type SessionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    stationId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    transactionID?: NullableStringFieldUpdateOperationsInput | string | null
    pointsUsed?: BigIntFieldUpdateOperationsInput | bigint | number
    energyConsumption?: FloatFieldUpdateOperationsInput | number
  }

  export type SessionsCreateManyInput = {
    id?: number
    createdAt?: Date | string
    totalTime: string
    isActive: boolean
    location: string
    stationId: number
    userId: number
    transactionID?: string | null
    pointsUsed?: bigint | number
    energyConsumption?: number
  }

  export type SessionsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    transactionID?: NullableStringFieldUpdateOperationsInput | string | null
    pointsUsed?: BigIntFieldUpdateOperationsInput | bigint | number
    energyConsumption?: FloatFieldUpdateOperationsInput | number
  }

  export type SessionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    stationId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    transactionID?: NullableStringFieldUpdateOperationsInput | string | null
    pointsUsed?: BigIntFieldUpdateOperationsInput | bigint | number
    energyConsumption?: FloatFieldUpdateOperationsInput | number
  }

  export type TransactionsCreateInput = {
    transactionId: string
    createdAt?: Date | string
    status?: $Enums.TransactionStatus
    coinsPurchased: bigint | number
    amountPaid: number
    user: UserCreateNestedOneWithoutTransactionInput
  }

  export type TransactionsUncheckedCreateInput = {
    id?: number
    transactionId: string
    createdAt?: Date | string
    status?: $Enums.TransactionStatus
    userId: number
    coinsPurchased: bigint | number
    amountPaid: number
  }

  export type TransactionsUpdateInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    coinsPurchased?: BigIntFieldUpdateOperationsInput | bigint | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    userId?: IntFieldUpdateOperationsInput | number
    coinsPurchased?: BigIntFieldUpdateOperationsInput | bigint | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
  }

  export type TransactionsCreateManyInput = {
    id?: number
    transactionId: string
    createdAt?: Date | string
    status?: $Enums.TransactionStatus
    userId: number
    coinsPurchased: bigint | number
    amountPaid: number
  }

  export type TransactionsUpdateManyMutationInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    coinsPurchased?: BigIntFieldUpdateOperationsInput | bigint | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
  }

  export type TransactionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    userId?: IntFieldUpdateOperationsInput | number
    coinsPurchased?: BigIntFieldUpdateOperationsInput | bigint | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ChargingStationListRelationFilter = {
    every?: chargingStationWhereInput
    some?: chargingStationWhereInput
    none?: chargingStationWhereInput
  }

  export type SessionsListRelationFilter = {
    every?: SessionsWhereInput
    some?: SessionsWhereInput
    none?: SessionsWhereInput
  }

  export type TransactionsListRelationFilter = {
    every?: TransactionsWhereInput
    some?: TransactionsWhereInput
    none?: TransactionsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type chargingStationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    linkedOEM?: SortOrder
    linkedReseller?: SortOrder
    linkedOperator?: SortOrder
    points?: SortOrder
    vehicle?: SortOrder
    gstNumber?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    linkedOEM?: SortOrder
    linkedReseller?: SortOrder
    linkedOperator?: SortOrder
    points?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    linkedOEM?: SortOrder
    linkedReseller?: SortOrder
    linkedOperator?: SortOrder
    points?: SortOrder
    vehicle?: SortOrder
    gstNumber?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    linkedOEM?: SortOrder
    linkedReseller?: SortOrder
    linkedOperator?: SortOrder
    points?: SortOrder
    vehicle?: SortOrder
    gstNumber?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    linkedOEM?: SortOrder
    linkedReseller?: SortOrder
    linkedOperator?: SortOrder
    points?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type chargingStationCountOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    OEMId?: SortOrder
    resellerId?: SortOrder
    operatorId?: SortOrder
    connectedUserID?: SortOrder
    totalEnergyConsumption?: SortOrder
    healthPercentage?: SortOrder
    isOccupied?: SortOrder
    isActive?: SortOrder
    isFaulty?: SortOrder
  }

  export type chargingStationAvgOrderByAggregateInput = {
    id?: SortOrder
    OEMId?: SortOrder
    resellerId?: SortOrder
    operatorId?: SortOrder
    connectedUserID?: SortOrder
    totalEnergyConsumption?: SortOrder
    healthPercentage?: SortOrder
  }

  export type chargingStationMaxOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    OEMId?: SortOrder
    resellerId?: SortOrder
    operatorId?: SortOrder
    connectedUserID?: SortOrder
    totalEnergyConsumption?: SortOrder
    healthPercentage?: SortOrder
    isOccupied?: SortOrder
    isActive?: SortOrder
    isFaulty?: SortOrder
  }

  export type chargingStationMinOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    OEMId?: SortOrder
    resellerId?: SortOrder
    operatorId?: SortOrder
    connectedUserID?: SortOrder
    totalEnergyConsumption?: SortOrder
    healthPercentage?: SortOrder
    isOccupied?: SortOrder
    isActive?: SortOrder
    isFaulty?: SortOrder
  }

  export type chargingStationSumOrderByAggregateInput = {
    id?: SortOrder
    OEMId?: SortOrder
    resellerId?: SortOrder
    operatorId?: SortOrder
    connectedUserID?: SortOrder
    totalEnergyConsumption?: SortOrder
    healthPercentage?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ChargingStationScalarRelationFilter = {
    is?: chargingStationWhereInput
    isNot?: chargingStationWhereInput
  }

  export type SessionsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    totalTime?: SortOrder
    isActive?: SortOrder
    location?: SortOrder
    stationId?: SortOrder
    userId?: SortOrder
    transactionID?: SortOrder
    pointsUsed?: SortOrder
    energyConsumption?: SortOrder
  }

  export type SessionsAvgOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    userId?: SortOrder
    pointsUsed?: SortOrder
    energyConsumption?: SortOrder
  }

  export type SessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    totalTime?: SortOrder
    isActive?: SortOrder
    location?: SortOrder
    stationId?: SortOrder
    userId?: SortOrder
    transactionID?: SortOrder
    pointsUsed?: SortOrder
    energyConsumption?: SortOrder
  }

  export type SessionsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    totalTime?: SortOrder
    isActive?: SortOrder
    location?: SortOrder
    stationId?: SortOrder
    userId?: SortOrder
    transactionID?: SortOrder
    pointsUsed?: SortOrder
    energyConsumption?: SortOrder
  }

  export type SessionsSumOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    userId?: SortOrder
    pointsUsed?: SortOrder
    energyConsumption?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type TransactionsCountOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    coinsPurchased?: SortOrder
    amountPaid?: SortOrder
  }

  export type TransactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    coinsPurchased?: SortOrder
    amountPaid?: SortOrder
  }

  export type TransactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    coinsPurchased?: SortOrder
    amountPaid?: SortOrder
  }

  export type TransactionsMinOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    coinsPurchased?: SortOrder
    amountPaid?: SortOrder
  }

  export type TransactionsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    coinsPurchased?: SortOrder
    amountPaid?: SortOrder
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type chargingStationCreateNestedManyWithoutOEMInput = {
    create?: XOR<chargingStationCreateWithoutOEMInput, chargingStationUncheckedCreateWithoutOEMInput> | chargingStationCreateWithoutOEMInput[] | chargingStationUncheckedCreateWithoutOEMInput[]
    connectOrCreate?: chargingStationCreateOrConnectWithoutOEMInput | chargingStationCreateOrConnectWithoutOEMInput[]
    createMany?: chargingStationCreateManyOEMInputEnvelope
    connect?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
  }

  export type chargingStationCreateNestedManyWithoutResellerInput = {
    create?: XOR<chargingStationCreateWithoutResellerInput, chargingStationUncheckedCreateWithoutResellerInput> | chargingStationCreateWithoutResellerInput[] | chargingStationUncheckedCreateWithoutResellerInput[]
    connectOrCreate?: chargingStationCreateOrConnectWithoutResellerInput | chargingStationCreateOrConnectWithoutResellerInput[]
    createMany?: chargingStationCreateManyResellerInputEnvelope
    connect?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
  }

  export type chargingStationCreateNestedManyWithoutOperatorInput = {
    create?: XOR<chargingStationCreateWithoutOperatorInput, chargingStationUncheckedCreateWithoutOperatorInput> | chargingStationCreateWithoutOperatorInput[] | chargingStationUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: chargingStationCreateOrConnectWithoutOperatorInput | chargingStationCreateOrConnectWithoutOperatorInput[]
    createMany?: chargingStationCreateManyOperatorInputEnvelope
    connect?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
  }

  export type chargingStationCreateNestedManyWithoutConnectedUserInput = {
    create?: XOR<chargingStationCreateWithoutConnectedUserInput, chargingStationUncheckedCreateWithoutConnectedUserInput> | chargingStationCreateWithoutConnectedUserInput[] | chargingStationUncheckedCreateWithoutConnectedUserInput[]
    connectOrCreate?: chargingStationCreateOrConnectWithoutConnectedUserInput | chargingStationCreateOrConnectWithoutConnectedUserInput[]
    createMany?: chargingStationCreateManyConnectedUserInputEnvelope
    connect?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
  }

  export type SessionsCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput> | SessionsCreateWithoutUserInput[] | SessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutUserInput | SessionsCreateOrConnectWithoutUserInput[]
    createMany?: SessionsCreateManyUserInputEnvelope
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
  }

  export type TransactionsCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type chargingStationUncheckedCreateNestedManyWithoutOEMInput = {
    create?: XOR<chargingStationCreateWithoutOEMInput, chargingStationUncheckedCreateWithoutOEMInput> | chargingStationCreateWithoutOEMInput[] | chargingStationUncheckedCreateWithoutOEMInput[]
    connectOrCreate?: chargingStationCreateOrConnectWithoutOEMInput | chargingStationCreateOrConnectWithoutOEMInput[]
    createMany?: chargingStationCreateManyOEMInputEnvelope
    connect?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
  }

  export type chargingStationUncheckedCreateNestedManyWithoutResellerInput = {
    create?: XOR<chargingStationCreateWithoutResellerInput, chargingStationUncheckedCreateWithoutResellerInput> | chargingStationCreateWithoutResellerInput[] | chargingStationUncheckedCreateWithoutResellerInput[]
    connectOrCreate?: chargingStationCreateOrConnectWithoutResellerInput | chargingStationCreateOrConnectWithoutResellerInput[]
    createMany?: chargingStationCreateManyResellerInputEnvelope
    connect?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
  }

  export type chargingStationUncheckedCreateNestedManyWithoutOperatorInput = {
    create?: XOR<chargingStationCreateWithoutOperatorInput, chargingStationUncheckedCreateWithoutOperatorInput> | chargingStationCreateWithoutOperatorInput[] | chargingStationUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: chargingStationCreateOrConnectWithoutOperatorInput | chargingStationCreateOrConnectWithoutOperatorInput[]
    createMany?: chargingStationCreateManyOperatorInputEnvelope
    connect?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
  }

  export type chargingStationUncheckedCreateNestedManyWithoutConnectedUserInput = {
    create?: XOR<chargingStationCreateWithoutConnectedUserInput, chargingStationUncheckedCreateWithoutConnectedUserInput> | chargingStationCreateWithoutConnectedUserInput[] | chargingStationUncheckedCreateWithoutConnectedUserInput[]
    connectOrCreate?: chargingStationCreateOrConnectWithoutConnectedUserInput | chargingStationCreateOrConnectWithoutConnectedUserInput[]
    createMany?: chargingStationCreateManyConnectedUserInputEnvelope
    connect?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
  }

  export type SessionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput> | SessionsCreateWithoutUserInput[] | SessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutUserInput | SessionsCreateOrConnectWithoutUserInput[]
    createMany?: SessionsCreateManyUserInputEnvelope
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type chargingStationUpdateManyWithoutOEMNestedInput = {
    create?: XOR<chargingStationCreateWithoutOEMInput, chargingStationUncheckedCreateWithoutOEMInput> | chargingStationCreateWithoutOEMInput[] | chargingStationUncheckedCreateWithoutOEMInput[]
    connectOrCreate?: chargingStationCreateOrConnectWithoutOEMInput | chargingStationCreateOrConnectWithoutOEMInput[]
    upsert?: chargingStationUpsertWithWhereUniqueWithoutOEMInput | chargingStationUpsertWithWhereUniqueWithoutOEMInput[]
    createMany?: chargingStationCreateManyOEMInputEnvelope
    set?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    disconnect?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    delete?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    connect?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    update?: chargingStationUpdateWithWhereUniqueWithoutOEMInput | chargingStationUpdateWithWhereUniqueWithoutOEMInput[]
    updateMany?: chargingStationUpdateManyWithWhereWithoutOEMInput | chargingStationUpdateManyWithWhereWithoutOEMInput[]
    deleteMany?: chargingStationScalarWhereInput | chargingStationScalarWhereInput[]
  }

  export type chargingStationUpdateManyWithoutResellerNestedInput = {
    create?: XOR<chargingStationCreateWithoutResellerInput, chargingStationUncheckedCreateWithoutResellerInput> | chargingStationCreateWithoutResellerInput[] | chargingStationUncheckedCreateWithoutResellerInput[]
    connectOrCreate?: chargingStationCreateOrConnectWithoutResellerInput | chargingStationCreateOrConnectWithoutResellerInput[]
    upsert?: chargingStationUpsertWithWhereUniqueWithoutResellerInput | chargingStationUpsertWithWhereUniqueWithoutResellerInput[]
    createMany?: chargingStationCreateManyResellerInputEnvelope
    set?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    disconnect?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    delete?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    connect?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    update?: chargingStationUpdateWithWhereUniqueWithoutResellerInput | chargingStationUpdateWithWhereUniqueWithoutResellerInput[]
    updateMany?: chargingStationUpdateManyWithWhereWithoutResellerInput | chargingStationUpdateManyWithWhereWithoutResellerInput[]
    deleteMany?: chargingStationScalarWhereInput | chargingStationScalarWhereInput[]
  }

  export type chargingStationUpdateManyWithoutOperatorNestedInput = {
    create?: XOR<chargingStationCreateWithoutOperatorInput, chargingStationUncheckedCreateWithoutOperatorInput> | chargingStationCreateWithoutOperatorInput[] | chargingStationUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: chargingStationCreateOrConnectWithoutOperatorInput | chargingStationCreateOrConnectWithoutOperatorInput[]
    upsert?: chargingStationUpsertWithWhereUniqueWithoutOperatorInput | chargingStationUpsertWithWhereUniqueWithoutOperatorInput[]
    createMany?: chargingStationCreateManyOperatorInputEnvelope
    set?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    disconnect?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    delete?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    connect?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    update?: chargingStationUpdateWithWhereUniqueWithoutOperatorInput | chargingStationUpdateWithWhereUniqueWithoutOperatorInput[]
    updateMany?: chargingStationUpdateManyWithWhereWithoutOperatorInput | chargingStationUpdateManyWithWhereWithoutOperatorInput[]
    deleteMany?: chargingStationScalarWhereInput | chargingStationScalarWhereInput[]
  }

  export type chargingStationUpdateManyWithoutConnectedUserNestedInput = {
    create?: XOR<chargingStationCreateWithoutConnectedUserInput, chargingStationUncheckedCreateWithoutConnectedUserInput> | chargingStationCreateWithoutConnectedUserInput[] | chargingStationUncheckedCreateWithoutConnectedUserInput[]
    connectOrCreate?: chargingStationCreateOrConnectWithoutConnectedUserInput | chargingStationCreateOrConnectWithoutConnectedUserInput[]
    upsert?: chargingStationUpsertWithWhereUniqueWithoutConnectedUserInput | chargingStationUpsertWithWhereUniqueWithoutConnectedUserInput[]
    createMany?: chargingStationCreateManyConnectedUserInputEnvelope
    set?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    disconnect?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    delete?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    connect?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    update?: chargingStationUpdateWithWhereUniqueWithoutConnectedUserInput | chargingStationUpdateWithWhereUniqueWithoutConnectedUserInput[]
    updateMany?: chargingStationUpdateManyWithWhereWithoutConnectedUserInput | chargingStationUpdateManyWithWhereWithoutConnectedUserInput[]
    deleteMany?: chargingStationScalarWhereInput | chargingStationScalarWhereInput[]
  }

  export type SessionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput> | SessionsCreateWithoutUserInput[] | SessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutUserInput | SessionsCreateOrConnectWithoutUserInput[]
    upsert?: SessionsUpsertWithWhereUniqueWithoutUserInput | SessionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionsCreateManyUserInputEnvelope
    set?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    disconnect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    delete?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    update?: SessionsUpdateWithWhereUniqueWithoutUserInput | SessionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionsUpdateManyWithWhereWithoutUserInput | SessionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
  }

  export type TransactionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutUserInput | TransactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutUserInput | TransactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutUserInput | TransactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type chargingStationUncheckedUpdateManyWithoutOEMNestedInput = {
    create?: XOR<chargingStationCreateWithoutOEMInput, chargingStationUncheckedCreateWithoutOEMInput> | chargingStationCreateWithoutOEMInput[] | chargingStationUncheckedCreateWithoutOEMInput[]
    connectOrCreate?: chargingStationCreateOrConnectWithoutOEMInput | chargingStationCreateOrConnectWithoutOEMInput[]
    upsert?: chargingStationUpsertWithWhereUniqueWithoutOEMInput | chargingStationUpsertWithWhereUniqueWithoutOEMInput[]
    createMany?: chargingStationCreateManyOEMInputEnvelope
    set?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    disconnect?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    delete?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    connect?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    update?: chargingStationUpdateWithWhereUniqueWithoutOEMInput | chargingStationUpdateWithWhereUniqueWithoutOEMInput[]
    updateMany?: chargingStationUpdateManyWithWhereWithoutOEMInput | chargingStationUpdateManyWithWhereWithoutOEMInput[]
    deleteMany?: chargingStationScalarWhereInput | chargingStationScalarWhereInput[]
  }

  export type chargingStationUncheckedUpdateManyWithoutResellerNestedInput = {
    create?: XOR<chargingStationCreateWithoutResellerInput, chargingStationUncheckedCreateWithoutResellerInput> | chargingStationCreateWithoutResellerInput[] | chargingStationUncheckedCreateWithoutResellerInput[]
    connectOrCreate?: chargingStationCreateOrConnectWithoutResellerInput | chargingStationCreateOrConnectWithoutResellerInput[]
    upsert?: chargingStationUpsertWithWhereUniqueWithoutResellerInput | chargingStationUpsertWithWhereUniqueWithoutResellerInput[]
    createMany?: chargingStationCreateManyResellerInputEnvelope
    set?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    disconnect?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    delete?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    connect?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    update?: chargingStationUpdateWithWhereUniqueWithoutResellerInput | chargingStationUpdateWithWhereUniqueWithoutResellerInput[]
    updateMany?: chargingStationUpdateManyWithWhereWithoutResellerInput | chargingStationUpdateManyWithWhereWithoutResellerInput[]
    deleteMany?: chargingStationScalarWhereInput | chargingStationScalarWhereInput[]
  }

  export type chargingStationUncheckedUpdateManyWithoutOperatorNestedInput = {
    create?: XOR<chargingStationCreateWithoutOperatorInput, chargingStationUncheckedCreateWithoutOperatorInput> | chargingStationCreateWithoutOperatorInput[] | chargingStationUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: chargingStationCreateOrConnectWithoutOperatorInput | chargingStationCreateOrConnectWithoutOperatorInput[]
    upsert?: chargingStationUpsertWithWhereUniqueWithoutOperatorInput | chargingStationUpsertWithWhereUniqueWithoutOperatorInput[]
    createMany?: chargingStationCreateManyOperatorInputEnvelope
    set?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    disconnect?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    delete?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    connect?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    update?: chargingStationUpdateWithWhereUniqueWithoutOperatorInput | chargingStationUpdateWithWhereUniqueWithoutOperatorInput[]
    updateMany?: chargingStationUpdateManyWithWhereWithoutOperatorInput | chargingStationUpdateManyWithWhereWithoutOperatorInput[]
    deleteMany?: chargingStationScalarWhereInput | chargingStationScalarWhereInput[]
  }

  export type chargingStationUncheckedUpdateManyWithoutConnectedUserNestedInput = {
    create?: XOR<chargingStationCreateWithoutConnectedUserInput, chargingStationUncheckedCreateWithoutConnectedUserInput> | chargingStationCreateWithoutConnectedUserInput[] | chargingStationUncheckedCreateWithoutConnectedUserInput[]
    connectOrCreate?: chargingStationCreateOrConnectWithoutConnectedUserInput | chargingStationCreateOrConnectWithoutConnectedUserInput[]
    upsert?: chargingStationUpsertWithWhereUniqueWithoutConnectedUserInput | chargingStationUpsertWithWhereUniqueWithoutConnectedUserInput[]
    createMany?: chargingStationCreateManyConnectedUserInputEnvelope
    set?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    disconnect?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    delete?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    connect?: chargingStationWhereUniqueInput | chargingStationWhereUniqueInput[]
    update?: chargingStationUpdateWithWhereUniqueWithoutConnectedUserInput | chargingStationUpdateWithWhereUniqueWithoutConnectedUserInput[]
    updateMany?: chargingStationUpdateManyWithWhereWithoutConnectedUserInput | chargingStationUpdateManyWithWhereWithoutConnectedUserInput[]
    deleteMany?: chargingStationScalarWhereInput | chargingStationScalarWhereInput[]
  }

  export type SessionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput> | SessionsCreateWithoutUserInput[] | SessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutUserInput | SessionsCreateOrConnectWithoutUserInput[]
    upsert?: SessionsUpsertWithWhereUniqueWithoutUserInput | SessionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionsCreateManyUserInputEnvelope
    set?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    disconnect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    delete?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    update?: SessionsUpdateWithWhereUniqueWithoutUserInput | SessionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionsUpdateManyWithWhereWithoutUserInput | SessionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutUserInput | TransactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutUserInput | TransactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutUserInput | TransactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOwnedStationsInput = {
    create?: XOR<UserCreateWithoutOwnedStationsInput, UserUncheckedCreateWithoutOwnedStationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedStationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReselledStationsInput = {
    create?: XOR<UserCreateWithoutReselledStationsInput, UserUncheckedCreateWithoutReselledStationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReselledStationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOperatedStationsInput = {
    create?: XOR<UserCreateWithoutOperatedStationsInput, UserUncheckedCreateWithoutOperatedStationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOperatedStationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPreviuoslyConnectedStatoinsInput = {
    create?: XOR<UserCreateWithoutPreviuoslyConnectedStatoinsInput, UserUncheckedCreateWithoutPreviuoslyConnectedStatoinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreviuoslyConnectedStatoinsInput
    connect?: UserWhereUniqueInput
  }

  export type SessionsCreateNestedManyWithoutChargingStationInput = {
    create?: XOR<SessionsCreateWithoutChargingStationInput, SessionsUncheckedCreateWithoutChargingStationInput> | SessionsCreateWithoutChargingStationInput[] | SessionsUncheckedCreateWithoutChargingStationInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutChargingStationInput | SessionsCreateOrConnectWithoutChargingStationInput[]
    createMany?: SessionsCreateManyChargingStationInputEnvelope
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
  }

  export type SessionsUncheckedCreateNestedManyWithoutChargingStationInput = {
    create?: XOR<SessionsCreateWithoutChargingStationInput, SessionsUncheckedCreateWithoutChargingStationInput> | SessionsCreateWithoutChargingStationInput[] | SessionsUncheckedCreateWithoutChargingStationInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutChargingStationInput | SessionsCreateOrConnectWithoutChargingStationInput[]
    createMany?: SessionsCreateManyChargingStationInputEnvelope
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutOwnedStationsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedStationsInput, UserUncheckedCreateWithoutOwnedStationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedStationsInput
    upsert?: UserUpsertWithoutOwnedStationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedStationsInput, UserUpdateWithoutOwnedStationsInput>, UserUncheckedUpdateWithoutOwnedStationsInput>
  }

  export type UserUpdateOneRequiredWithoutReselledStationsNestedInput = {
    create?: XOR<UserCreateWithoutReselledStationsInput, UserUncheckedCreateWithoutReselledStationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReselledStationsInput
    upsert?: UserUpsertWithoutReselledStationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReselledStationsInput, UserUpdateWithoutReselledStationsInput>, UserUncheckedUpdateWithoutReselledStationsInput>
  }

  export type UserUpdateOneRequiredWithoutOperatedStationsNestedInput = {
    create?: XOR<UserCreateWithoutOperatedStationsInput, UserUncheckedCreateWithoutOperatedStationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOperatedStationsInput
    upsert?: UserUpsertWithoutOperatedStationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOperatedStationsInput, UserUpdateWithoutOperatedStationsInput>, UserUncheckedUpdateWithoutOperatedStationsInput>
  }

  export type UserUpdateOneWithoutPreviuoslyConnectedStatoinsNestedInput = {
    create?: XOR<UserCreateWithoutPreviuoslyConnectedStatoinsInput, UserUncheckedCreateWithoutPreviuoslyConnectedStatoinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreviuoslyConnectedStatoinsInput
    upsert?: UserUpsertWithoutPreviuoslyConnectedStatoinsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreviuoslyConnectedStatoinsInput, UserUpdateWithoutPreviuoslyConnectedStatoinsInput>, UserUncheckedUpdateWithoutPreviuoslyConnectedStatoinsInput>
  }

  export type SessionsUpdateManyWithoutChargingStationNestedInput = {
    create?: XOR<SessionsCreateWithoutChargingStationInput, SessionsUncheckedCreateWithoutChargingStationInput> | SessionsCreateWithoutChargingStationInput[] | SessionsUncheckedCreateWithoutChargingStationInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutChargingStationInput | SessionsCreateOrConnectWithoutChargingStationInput[]
    upsert?: SessionsUpsertWithWhereUniqueWithoutChargingStationInput | SessionsUpsertWithWhereUniqueWithoutChargingStationInput[]
    createMany?: SessionsCreateManyChargingStationInputEnvelope
    set?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    disconnect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    delete?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    update?: SessionsUpdateWithWhereUniqueWithoutChargingStationInput | SessionsUpdateWithWhereUniqueWithoutChargingStationInput[]
    updateMany?: SessionsUpdateManyWithWhereWithoutChargingStationInput | SessionsUpdateManyWithWhereWithoutChargingStationInput[]
    deleteMany?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
  }

  export type SessionsUncheckedUpdateManyWithoutChargingStationNestedInput = {
    create?: XOR<SessionsCreateWithoutChargingStationInput, SessionsUncheckedCreateWithoutChargingStationInput> | SessionsCreateWithoutChargingStationInput[] | SessionsUncheckedCreateWithoutChargingStationInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutChargingStationInput | SessionsCreateOrConnectWithoutChargingStationInput[]
    upsert?: SessionsUpsertWithWhereUniqueWithoutChargingStationInput | SessionsUpsertWithWhereUniqueWithoutChargingStationInput[]
    createMany?: SessionsCreateManyChargingStationInputEnvelope
    set?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    disconnect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    delete?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    update?: SessionsUpdateWithWhereUniqueWithoutChargingStationInput | SessionsUpdateWithWhereUniqueWithoutChargingStationInput[]
    updateMany?: SessionsUpdateManyWithWhereWithoutChargingStationInput | SessionsUpdateManyWithWhereWithoutChargingStationInput[]
    deleteMany?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
  }

  export type chargingStationCreateNestedOneWithoutSessionInput = {
    create?: XOR<chargingStationCreateWithoutSessionInput, chargingStationUncheckedCreateWithoutSessionInput>
    connectOrCreate?: chargingStationCreateOrConnectWithoutSessionInput
    connect?: chargingStationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSessionInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type chargingStationUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<chargingStationCreateWithoutSessionInput, chargingStationUncheckedCreateWithoutSessionInput>
    connectOrCreate?: chargingStationCreateOrConnectWithoutSessionInput
    upsert?: chargingStationUpsertWithoutSessionInput
    connect?: chargingStationWhereUniqueInput
    update?: XOR<XOR<chargingStationUpdateToOneWithWhereWithoutSessionInput, chargingStationUpdateWithoutSessionInput>, chargingStationUncheckedUpdateWithoutSessionInput>
  }

  export type UserUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    upsert?: UserUpsertWithoutSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionInput, UserUpdateWithoutSessionInput>, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserCreateNestedOneWithoutTransactionInput = {
    create?: XOR<UserCreateWithoutTransactionInput, UserUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type UserUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<UserCreateWithoutTransactionInput, UserUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionInput
    upsert?: UserUpsertWithoutTransactionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionInput, UserUpdateWithoutTransactionInput>, UserUncheckedUpdateWithoutTransactionInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type chargingStationCreateWithoutOEMInput = {
    location: string
    totalEnergyConsumption: bigint | number
    healthPercentage: number
    isOccupied: boolean
    isActive: boolean
    isFaulty: boolean
    reseller: UserCreateNestedOneWithoutReselledStationsInput
    operator: UserCreateNestedOneWithoutOperatedStationsInput
    connectedUser?: UserCreateNestedOneWithoutPreviuoslyConnectedStatoinsInput
    session?: SessionsCreateNestedManyWithoutChargingStationInput
  }

  export type chargingStationUncheckedCreateWithoutOEMInput = {
    id?: number
    location: string
    resellerId: number
    operatorId: number
    connectedUserID?: number | null
    totalEnergyConsumption: bigint | number
    healthPercentage: number
    isOccupied: boolean
    isActive: boolean
    isFaulty: boolean
    session?: SessionsUncheckedCreateNestedManyWithoutChargingStationInput
  }

  export type chargingStationCreateOrConnectWithoutOEMInput = {
    where: chargingStationWhereUniqueInput
    create: XOR<chargingStationCreateWithoutOEMInput, chargingStationUncheckedCreateWithoutOEMInput>
  }

  export type chargingStationCreateManyOEMInputEnvelope = {
    data: chargingStationCreateManyOEMInput | chargingStationCreateManyOEMInput[]
    skipDuplicates?: boolean
  }

  export type chargingStationCreateWithoutResellerInput = {
    location: string
    totalEnergyConsumption: bigint | number
    healthPercentage: number
    isOccupied: boolean
    isActive: boolean
    isFaulty: boolean
    OEM: UserCreateNestedOneWithoutOwnedStationsInput
    operator: UserCreateNestedOneWithoutOperatedStationsInput
    connectedUser?: UserCreateNestedOneWithoutPreviuoslyConnectedStatoinsInput
    session?: SessionsCreateNestedManyWithoutChargingStationInput
  }

  export type chargingStationUncheckedCreateWithoutResellerInput = {
    id?: number
    location: string
    OEMId: number
    operatorId: number
    connectedUserID?: number | null
    totalEnergyConsumption: bigint | number
    healthPercentage: number
    isOccupied: boolean
    isActive: boolean
    isFaulty: boolean
    session?: SessionsUncheckedCreateNestedManyWithoutChargingStationInput
  }

  export type chargingStationCreateOrConnectWithoutResellerInput = {
    where: chargingStationWhereUniqueInput
    create: XOR<chargingStationCreateWithoutResellerInput, chargingStationUncheckedCreateWithoutResellerInput>
  }

  export type chargingStationCreateManyResellerInputEnvelope = {
    data: chargingStationCreateManyResellerInput | chargingStationCreateManyResellerInput[]
    skipDuplicates?: boolean
  }

  export type chargingStationCreateWithoutOperatorInput = {
    location: string
    totalEnergyConsumption: bigint | number
    healthPercentage: number
    isOccupied: boolean
    isActive: boolean
    isFaulty: boolean
    OEM: UserCreateNestedOneWithoutOwnedStationsInput
    reseller: UserCreateNestedOneWithoutReselledStationsInput
    connectedUser?: UserCreateNestedOneWithoutPreviuoslyConnectedStatoinsInput
    session?: SessionsCreateNestedManyWithoutChargingStationInput
  }

  export type chargingStationUncheckedCreateWithoutOperatorInput = {
    id?: number
    location: string
    OEMId: number
    resellerId: number
    connectedUserID?: number | null
    totalEnergyConsumption: bigint | number
    healthPercentage: number
    isOccupied: boolean
    isActive: boolean
    isFaulty: boolean
    session?: SessionsUncheckedCreateNestedManyWithoutChargingStationInput
  }

  export type chargingStationCreateOrConnectWithoutOperatorInput = {
    where: chargingStationWhereUniqueInput
    create: XOR<chargingStationCreateWithoutOperatorInput, chargingStationUncheckedCreateWithoutOperatorInput>
  }

  export type chargingStationCreateManyOperatorInputEnvelope = {
    data: chargingStationCreateManyOperatorInput | chargingStationCreateManyOperatorInput[]
    skipDuplicates?: boolean
  }

  export type chargingStationCreateWithoutConnectedUserInput = {
    location: string
    totalEnergyConsumption: bigint | number
    healthPercentage: number
    isOccupied: boolean
    isActive: boolean
    isFaulty: boolean
    OEM: UserCreateNestedOneWithoutOwnedStationsInput
    reseller: UserCreateNestedOneWithoutReselledStationsInput
    operator: UserCreateNestedOneWithoutOperatedStationsInput
    session?: SessionsCreateNestedManyWithoutChargingStationInput
  }

  export type chargingStationUncheckedCreateWithoutConnectedUserInput = {
    id?: number
    location: string
    OEMId: number
    resellerId: number
    operatorId: number
    totalEnergyConsumption: bigint | number
    healthPercentage: number
    isOccupied: boolean
    isActive: boolean
    isFaulty: boolean
    session?: SessionsUncheckedCreateNestedManyWithoutChargingStationInput
  }

  export type chargingStationCreateOrConnectWithoutConnectedUserInput = {
    where: chargingStationWhereUniqueInput
    create: XOR<chargingStationCreateWithoutConnectedUserInput, chargingStationUncheckedCreateWithoutConnectedUserInput>
  }

  export type chargingStationCreateManyConnectedUserInputEnvelope = {
    data: chargingStationCreateManyConnectedUserInput | chargingStationCreateManyConnectedUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionsCreateWithoutUserInput = {
    createdAt?: Date | string
    totalTime: string
    isActive: boolean
    location: string
    transactionID?: string | null
    pointsUsed?: bigint | number
    energyConsumption?: number
    chargingStation: chargingStationCreateNestedOneWithoutSessionInput
  }

  export type SessionsUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    totalTime: string
    isActive: boolean
    location: string
    stationId: number
    transactionID?: string | null
    pointsUsed?: bigint | number
    energyConsumption?: number
  }

  export type SessionsCreateOrConnectWithoutUserInput = {
    where: SessionsWhereUniqueInput
    create: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput>
  }

  export type SessionsCreateManyUserInputEnvelope = {
    data: SessionsCreateManyUserInput | SessionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionsCreateWithoutUserInput = {
    transactionId: string
    createdAt?: Date | string
    status?: $Enums.TransactionStatus
    coinsPurchased: bigint | number
    amountPaid: number
  }

  export type TransactionsUncheckedCreateWithoutUserInput = {
    id?: number
    transactionId: string
    createdAt?: Date | string
    status?: $Enums.TransactionStatus
    coinsPurchased: bigint | number
    amountPaid: number
  }

  export type TransactionsCreateOrConnectWithoutUserInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput>
  }

  export type TransactionsCreateManyUserInputEnvelope = {
    data: TransactionsCreateManyUserInput | TransactionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type chargingStationUpsertWithWhereUniqueWithoutOEMInput = {
    where: chargingStationWhereUniqueInput
    update: XOR<chargingStationUpdateWithoutOEMInput, chargingStationUncheckedUpdateWithoutOEMInput>
    create: XOR<chargingStationCreateWithoutOEMInput, chargingStationUncheckedCreateWithoutOEMInput>
  }

  export type chargingStationUpdateWithWhereUniqueWithoutOEMInput = {
    where: chargingStationWhereUniqueInput
    data: XOR<chargingStationUpdateWithoutOEMInput, chargingStationUncheckedUpdateWithoutOEMInput>
  }

  export type chargingStationUpdateManyWithWhereWithoutOEMInput = {
    where: chargingStationScalarWhereInput
    data: XOR<chargingStationUpdateManyMutationInput, chargingStationUncheckedUpdateManyWithoutOEMInput>
  }

  export type chargingStationScalarWhereInput = {
    AND?: chargingStationScalarWhereInput | chargingStationScalarWhereInput[]
    OR?: chargingStationScalarWhereInput[]
    NOT?: chargingStationScalarWhereInput | chargingStationScalarWhereInput[]
    id?: IntFilter<"chargingStation"> | number
    location?: StringFilter<"chargingStation"> | string
    OEMId?: IntFilter<"chargingStation"> | number
    resellerId?: IntFilter<"chargingStation"> | number
    operatorId?: IntFilter<"chargingStation"> | number
    connectedUserID?: IntNullableFilter<"chargingStation"> | number | null
    totalEnergyConsumption?: BigIntFilter<"chargingStation"> | bigint | number
    healthPercentage?: IntFilter<"chargingStation"> | number
    isOccupied?: BoolFilter<"chargingStation"> | boolean
    isActive?: BoolFilter<"chargingStation"> | boolean
    isFaulty?: BoolFilter<"chargingStation"> | boolean
  }

  export type chargingStationUpsertWithWhereUniqueWithoutResellerInput = {
    where: chargingStationWhereUniqueInput
    update: XOR<chargingStationUpdateWithoutResellerInput, chargingStationUncheckedUpdateWithoutResellerInput>
    create: XOR<chargingStationCreateWithoutResellerInput, chargingStationUncheckedCreateWithoutResellerInput>
  }

  export type chargingStationUpdateWithWhereUniqueWithoutResellerInput = {
    where: chargingStationWhereUniqueInput
    data: XOR<chargingStationUpdateWithoutResellerInput, chargingStationUncheckedUpdateWithoutResellerInput>
  }

  export type chargingStationUpdateManyWithWhereWithoutResellerInput = {
    where: chargingStationScalarWhereInput
    data: XOR<chargingStationUpdateManyMutationInput, chargingStationUncheckedUpdateManyWithoutResellerInput>
  }

  export type chargingStationUpsertWithWhereUniqueWithoutOperatorInput = {
    where: chargingStationWhereUniqueInput
    update: XOR<chargingStationUpdateWithoutOperatorInput, chargingStationUncheckedUpdateWithoutOperatorInput>
    create: XOR<chargingStationCreateWithoutOperatorInput, chargingStationUncheckedCreateWithoutOperatorInput>
  }

  export type chargingStationUpdateWithWhereUniqueWithoutOperatorInput = {
    where: chargingStationWhereUniqueInput
    data: XOR<chargingStationUpdateWithoutOperatorInput, chargingStationUncheckedUpdateWithoutOperatorInput>
  }

  export type chargingStationUpdateManyWithWhereWithoutOperatorInput = {
    where: chargingStationScalarWhereInput
    data: XOR<chargingStationUpdateManyMutationInput, chargingStationUncheckedUpdateManyWithoutOperatorInput>
  }

  export type chargingStationUpsertWithWhereUniqueWithoutConnectedUserInput = {
    where: chargingStationWhereUniqueInput
    update: XOR<chargingStationUpdateWithoutConnectedUserInput, chargingStationUncheckedUpdateWithoutConnectedUserInput>
    create: XOR<chargingStationCreateWithoutConnectedUserInput, chargingStationUncheckedCreateWithoutConnectedUserInput>
  }

  export type chargingStationUpdateWithWhereUniqueWithoutConnectedUserInput = {
    where: chargingStationWhereUniqueInput
    data: XOR<chargingStationUpdateWithoutConnectedUserInput, chargingStationUncheckedUpdateWithoutConnectedUserInput>
  }

  export type chargingStationUpdateManyWithWhereWithoutConnectedUserInput = {
    where: chargingStationScalarWhereInput
    data: XOR<chargingStationUpdateManyMutationInput, chargingStationUncheckedUpdateManyWithoutConnectedUserInput>
  }

  export type SessionsUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionsWhereUniqueInput
    update: XOR<SessionsUpdateWithoutUserInput, SessionsUncheckedUpdateWithoutUserInput>
    create: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput>
  }

  export type SessionsUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionsWhereUniqueInput
    data: XOR<SessionsUpdateWithoutUserInput, SessionsUncheckedUpdateWithoutUserInput>
  }

  export type SessionsUpdateManyWithWhereWithoutUserInput = {
    where: SessionsScalarWhereInput
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionsScalarWhereInput = {
    AND?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
    OR?: SessionsScalarWhereInput[]
    NOT?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
    id?: IntFilter<"Sessions"> | number
    createdAt?: DateTimeFilter<"Sessions"> | Date | string
    totalTime?: StringFilter<"Sessions"> | string
    isActive?: BoolFilter<"Sessions"> | boolean
    location?: StringFilter<"Sessions"> | string
    stationId?: IntFilter<"Sessions"> | number
    userId?: IntFilter<"Sessions"> | number
    transactionID?: StringNullableFilter<"Sessions"> | string | null
    pointsUsed?: BigIntFilter<"Sessions"> | bigint | number
    energyConsumption?: FloatFilter<"Sessions"> | number
  }

  export type TransactionsUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutUserInput, TransactionsUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutUserInput, TransactionsUncheckedUpdateWithoutUserInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutUserInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionsScalarWhereInput = {
    AND?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    OR?: TransactionsScalarWhereInput[]
    NOT?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    id?: IntFilter<"Transactions"> | number
    transactionId?: StringFilter<"Transactions"> | string
    createdAt?: DateTimeFilter<"Transactions"> | Date | string
    status?: EnumTransactionStatusFilter<"Transactions"> | $Enums.TransactionStatus
    userId?: IntFilter<"Transactions"> | number
    coinsPurchased?: BigIntFilter<"Transactions"> | bigint | number
    amountPaid?: FloatFilter<"Transactions"> | number
  }

  export type UserCreateWithoutOwnedStationsInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    linkedOEM?: number | null
    linkedReseller?: number | null
    linkedOperator?: number | null
    points?: bigint | number | null
    vehicle?: string | null
    gstNumber?: string | null
    reselledStations?: chargingStationCreateNestedManyWithoutResellerInput
    operatedStations?: chargingStationCreateNestedManyWithoutOperatorInput
    previuoslyConnectedStatoins?: chargingStationCreateNestedManyWithoutConnectedUserInput
    session?: SessionsCreateNestedManyWithoutUserInput
    transaction?: TransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedStationsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    linkedOEM?: number | null
    linkedReseller?: number | null
    linkedOperator?: number | null
    points?: bigint | number | null
    vehicle?: string | null
    gstNumber?: string | null
    reselledStations?: chargingStationUncheckedCreateNestedManyWithoutResellerInput
    operatedStations?: chargingStationUncheckedCreateNestedManyWithoutOperatorInput
    previuoslyConnectedStatoins?: chargingStationUncheckedCreateNestedManyWithoutConnectedUserInput
    session?: SessionsUncheckedCreateNestedManyWithoutUserInput
    transaction?: TransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedStationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedStationsInput, UserUncheckedCreateWithoutOwnedStationsInput>
  }

  export type UserCreateWithoutReselledStationsInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    linkedOEM?: number | null
    linkedReseller?: number | null
    linkedOperator?: number | null
    points?: bigint | number | null
    vehicle?: string | null
    gstNumber?: string | null
    ownedStations?: chargingStationCreateNestedManyWithoutOEMInput
    operatedStations?: chargingStationCreateNestedManyWithoutOperatorInput
    previuoslyConnectedStatoins?: chargingStationCreateNestedManyWithoutConnectedUserInput
    session?: SessionsCreateNestedManyWithoutUserInput
    transaction?: TransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReselledStationsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    linkedOEM?: number | null
    linkedReseller?: number | null
    linkedOperator?: number | null
    points?: bigint | number | null
    vehicle?: string | null
    gstNumber?: string | null
    ownedStations?: chargingStationUncheckedCreateNestedManyWithoutOEMInput
    operatedStations?: chargingStationUncheckedCreateNestedManyWithoutOperatorInput
    previuoslyConnectedStatoins?: chargingStationUncheckedCreateNestedManyWithoutConnectedUserInput
    session?: SessionsUncheckedCreateNestedManyWithoutUserInput
    transaction?: TransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReselledStationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReselledStationsInput, UserUncheckedCreateWithoutReselledStationsInput>
  }

  export type UserCreateWithoutOperatedStationsInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    linkedOEM?: number | null
    linkedReseller?: number | null
    linkedOperator?: number | null
    points?: bigint | number | null
    vehicle?: string | null
    gstNumber?: string | null
    ownedStations?: chargingStationCreateNestedManyWithoutOEMInput
    reselledStations?: chargingStationCreateNestedManyWithoutResellerInput
    previuoslyConnectedStatoins?: chargingStationCreateNestedManyWithoutConnectedUserInput
    session?: SessionsCreateNestedManyWithoutUserInput
    transaction?: TransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOperatedStationsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    linkedOEM?: number | null
    linkedReseller?: number | null
    linkedOperator?: number | null
    points?: bigint | number | null
    vehicle?: string | null
    gstNumber?: string | null
    ownedStations?: chargingStationUncheckedCreateNestedManyWithoutOEMInput
    reselledStations?: chargingStationUncheckedCreateNestedManyWithoutResellerInput
    previuoslyConnectedStatoins?: chargingStationUncheckedCreateNestedManyWithoutConnectedUserInput
    session?: SessionsUncheckedCreateNestedManyWithoutUserInput
    transaction?: TransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOperatedStationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOperatedStationsInput, UserUncheckedCreateWithoutOperatedStationsInput>
  }

  export type UserCreateWithoutPreviuoslyConnectedStatoinsInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    linkedOEM?: number | null
    linkedReseller?: number | null
    linkedOperator?: number | null
    points?: bigint | number | null
    vehicle?: string | null
    gstNumber?: string | null
    ownedStations?: chargingStationCreateNestedManyWithoutOEMInput
    reselledStations?: chargingStationCreateNestedManyWithoutResellerInput
    operatedStations?: chargingStationCreateNestedManyWithoutOperatorInput
    session?: SessionsCreateNestedManyWithoutUserInput
    transaction?: TransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPreviuoslyConnectedStatoinsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    linkedOEM?: number | null
    linkedReseller?: number | null
    linkedOperator?: number | null
    points?: bigint | number | null
    vehicle?: string | null
    gstNumber?: string | null
    ownedStations?: chargingStationUncheckedCreateNestedManyWithoutOEMInput
    reselledStations?: chargingStationUncheckedCreateNestedManyWithoutResellerInput
    operatedStations?: chargingStationUncheckedCreateNestedManyWithoutOperatorInput
    session?: SessionsUncheckedCreateNestedManyWithoutUserInput
    transaction?: TransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPreviuoslyConnectedStatoinsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreviuoslyConnectedStatoinsInput, UserUncheckedCreateWithoutPreviuoslyConnectedStatoinsInput>
  }

  export type SessionsCreateWithoutChargingStationInput = {
    createdAt?: Date | string
    totalTime: string
    isActive: boolean
    location: string
    transactionID?: string | null
    pointsUsed?: bigint | number
    energyConsumption?: number
    User: UserCreateNestedOneWithoutSessionInput
  }

  export type SessionsUncheckedCreateWithoutChargingStationInput = {
    id?: number
    createdAt?: Date | string
    totalTime: string
    isActive: boolean
    location: string
    userId: number
    transactionID?: string | null
    pointsUsed?: bigint | number
    energyConsumption?: number
  }

  export type SessionsCreateOrConnectWithoutChargingStationInput = {
    where: SessionsWhereUniqueInput
    create: XOR<SessionsCreateWithoutChargingStationInput, SessionsUncheckedCreateWithoutChargingStationInput>
  }

  export type SessionsCreateManyChargingStationInputEnvelope = {
    data: SessionsCreateManyChargingStationInput | SessionsCreateManyChargingStationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedStationsInput = {
    update: XOR<UserUpdateWithoutOwnedStationsInput, UserUncheckedUpdateWithoutOwnedStationsInput>
    create: XOR<UserCreateWithoutOwnedStationsInput, UserUncheckedCreateWithoutOwnedStationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedStationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedStationsInput, UserUncheckedUpdateWithoutOwnedStationsInput>
  }

  export type UserUpdateWithoutOwnedStationsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    linkedOEM?: NullableIntFieldUpdateOperationsInput | number | null
    linkedReseller?: NullableIntFieldUpdateOperationsInput | number | null
    linkedOperator?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    reselledStations?: chargingStationUpdateManyWithoutResellerNestedInput
    operatedStations?: chargingStationUpdateManyWithoutOperatorNestedInput
    previuoslyConnectedStatoins?: chargingStationUpdateManyWithoutConnectedUserNestedInput
    session?: SessionsUpdateManyWithoutUserNestedInput
    transaction?: TransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedStationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    linkedOEM?: NullableIntFieldUpdateOperationsInput | number | null
    linkedReseller?: NullableIntFieldUpdateOperationsInput | number | null
    linkedOperator?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    reselledStations?: chargingStationUncheckedUpdateManyWithoutResellerNestedInput
    operatedStations?: chargingStationUncheckedUpdateManyWithoutOperatorNestedInput
    previuoslyConnectedStatoins?: chargingStationUncheckedUpdateManyWithoutConnectedUserNestedInput
    session?: SessionsUncheckedUpdateManyWithoutUserNestedInput
    transaction?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReselledStationsInput = {
    update: XOR<UserUpdateWithoutReselledStationsInput, UserUncheckedUpdateWithoutReselledStationsInput>
    create: XOR<UserCreateWithoutReselledStationsInput, UserUncheckedCreateWithoutReselledStationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReselledStationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReselledStationsInput, UserUncheckedUpdateWithoutReselledStationsInput>
  }

  export type UserUpdateWithoutReselledStationsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    linkedOEM?: NullableIntFieldUpdateOperationsInput | number | null
    linkedReseller?: NullableIntFieldUpdateOperationsInput | number | null
    linkedOperator?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownedStations?: chargingStationUpdateManyWithoutOEMNestedInput
    operatedStations?: chargingStationUpdateManyWithoutOperatorNestedInput
    previuoslyConnectedStatoins?: chargingStationUpdateManyWithoutConnectedUserNestedInput
    session?: SessionsUpdateManyWithoutUserNestedInput
    transaction?: TransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReselledStationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    linkedOEM?: NullableIntFieldUpdateOperationsInput | number | null
    linkedReseller?: NullableIntFieldUpdateOperationsInput | number | null
    linkedOperator?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownedStations?: chargingStationUncheckedUpdateManyWithoutOEMNestedInput
    operatedStations?: chargingStationUncheckedUpdateManyWithoutOperatorNestedInput
    previuoslyConnectedStatoins?: chargingStationUncheckedUpdateManyWithoutConnectedUserNestedInput
    session?: SessionsUncheckedUpdateManyWithoutUserNestedInput
    transaction?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutOperatedStationsInput = {
    update: XOR<UserUpdateWithoutOperatedStationsInput, UserUncheckedUpdateWithoutOperatedStationsInput>
    create: XOR<UserCreateWithoutOperatedStationsInput, UserUncheckedCreateWithoutOperatedStationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOperatedStationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOperatedStationsInput, UserUncheckedUpdateWithoutOperatedStationsInput>
  }

  export type UserUpdateWithoutOperatedStationsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    linkedOEM?: NullableIntFieldUpdateOperationsInput | number | null
    linkedReseller?: NullableIntFieldUpdateOperationsInput | number | null
    linkedOperator?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownedStations?: chargingStationUpdateManyWithoutOEMNestedInput
    reselledStations?: chargingStationUpdateManyWithoutResellerNestedInput
    previuoslyConnectedStatoins?: chargingStationUpdateManyWithoutConnectedUserNestedInput
    session?: SessionsUpdateManyWithoutUserNestedInput
    transaction?: TransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOperatedStationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    linkedOEM?: NullableIntFieldUpdateOperationsInput | number | null
    linkedReseller?: NullableIntFieldUpdateOperationsInput | number | null
    linkedOperator?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownedStations?: chargingStationUncheckedUpdateManyWithoutOEMNestedInput
    reselledStations?: chargingStationUncheckedUpdateManyWithoutResellerNestedInput
    previuoslyConnectedStatoins?: chargingStationUncheckedUpdateManyWithoutConnectedUserNestedInput
    session?: SessionsUncheckedUpdateManyWithoutUserNestedInput
    transaction?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutPreviuoslyConnectedStatoinsInput = {
    update: XOR<UserUpdateWithoutPreviuoslyConnectedStatoinsInput, UserUncheckedUpdateWithoutPreviuoslyConnectedStatoinsInput>
    create: XOR<UserCreateWithoutPreviuoslyConnectedStatoinsInput, UserUncheckedCreateWithoutPreviuoslyConnectedStatoinsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreviuoslyConnectedStatoinsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreviuoslyConnectedStatoinsInput, UserUncheckedUpdateWithoutPreviuoslyConnectedStatoinsInput>
  }

  export type UserUpdateWithoutPreviuoslyConnectedStatoinsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    linkedOEM?: NullableIntFieldUpdateOperationsInput | number | null
    linkedReseller?: NullableIntFieldUpdateOperationsInput | number | null
    linkedOperator?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownedStations?: chargingStationUpdateManyWithoutOEMNestedInput
    reselledStations?: chargingStationUpdateManyWithoutResellerNestedInput
    operatedStations?: chargingStationUpdateManyWithoutOperatorNestedInput
    session?: SessionsUpdateManyWithoutUserNestedInput
    transaction?: TransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPreviuoslyConnectedStatoinsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    linkedOEM?: NullableIntFieldUpdateOperationsInput | number | null
    linkedReseller?: NullableIntFieldUpdateOperationsInput | number | null
    linkedOperator?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownedStations?: chargingStationUncheckedUpdateManyWithoutOEMNestedInput
    reselledStations?: chargingStationUncheckedUpdateManyWithoutResellerNestedInput
    operatedStations?: chargingStationUncheckedUpdateManyWithoutOperatorNestedInput
    session?: SessionsUncheckedUpdateManyWithoutUserNestedInput
    transaction?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionsUpsertWithWhereUniqueWithoutChargingStationInput = {
    where: SessionsWhereUniqueInput
    update: XOR<SessionsUpdateWithoutChargingStationInput, SessionsUncheckedUpdateWithoutChargingStationInput>
    create: XOR<SessionsCreateWithoutChargingStationInput, SessionsUncheckedCreateWithoutChargingStationInput>
  }

  export type SessionsUpdateWithWhereUniqueWithoutChargingStationInput = {
    where: SessionsWhereUniqueInput
    data: XOR<SessionsUpdateWithoutChargingStationInput, SessionsUncheckedUpdateWithoutChargingStationInput>
  }

  export type SessionsUpdateManyWithWhereWithoutChargingStationInput = {
    where: SessionsScalarWhereInput
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyWithoutChargingStationInput>
  }

  export type chargingStationCreateWithoutSessionInput = {
    location: string
    totalEnergyConsumption: bigint | number
    healthPercentage: number
    isOccupied: boolean
    isActive: boolean
    isFaulty: boolean
    OEM: UserCreateNestedOneWithoutOwnedStationsInput
    reseller: UserCreateNestedOneWithoutReselledStationsInput
    operator: UserCreateNestedOneWithoutOperatedStationsInput
    connectedUser?: UserCreateNestedOneWithoutPreviuoslyConnectedStatoinsInput
  }

  export type chargingStationUncheckedCreateWithoutSessionInput = {
    id?: number
    location: string
    OEMId: number
    resellerId: number
    operatorId: number
    connectedUserID?: number | null
    totalEnergyConsumption: bigint | number
    healthPercentage: number
    isOccupied: boolean
    isActive: boolean
    isFaulty: boolean
  }

  export type chargingStationCreateOrConnectWithoutSessionInput = {
    where: chargingStationWhereUniqueInput
    create: XOR<chargingStationCreateWithoutSessionInput, chargingStationUncheckedCreateWithoutSessionInput>
  }

  export type UserCreateWithoutSessionInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    linkedOEM?: number | null
    linkedReseller?: number | null
    linkedOperator?: number | null
    points?: bigint | number | null
    vehicle?: string | null
    gstNumber?: string | null
    ownedStations?: chargingStationCreateNestedManyWithoutOEMInput
    reselledStations?: chargingStationCreateNestedManyWithoutResellerInput
    operatedStations?: chargingStationCreateNestedManyWithoutOperatorInput
    previuoslyConnectedStatoins?: chargingStationCreateNestedManyWithoutConnectedUserInput
    transaction?: TransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    linkedOEM?: number | null
    linkedReseller?: number | null
    linkedOperator?: number | null
    points?: bigint | number | null
    vehicle?: string | null
    gstNumber?: string | null
    ownedStations?: chargingStationUncheckedCreateNestedManyWithoutOEMInput
    reselledStations?: chargingStationUncheckedCreateNestedManyWithoutResellerInput
    operatedStations?: chargingStationUncheckedCreateNestedManyWithoutOperatorInput
    previuoslyConnectedStatoins?: chargingStationUncheckedCreateNestedManyWithoutConnectedUserInput
    transaction?: TransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
  }

  export type chargingStationUpsertWithoutSessionInput = {
    update: XOR<chargingStationUpdateWithoutSessionInput, chargingStationUncheckedUpdateWithoutSessionInput>
    create: XOR<chargingStationCreateWithoutSessionInput, chargingStationUncheckedCreateWithoutSessionInput>
    where?: chargingStationWhereInput
  }

  export type chargingStationUpdateToOneWithWhereWithoutSessionInput = {
    where?: chargingStationWhereInput
    data: XOR<chargingStationUpdateWithoutSessionInput, chargingStationUncheckedUpdateWithoutSessionInput>
  }

  export type chargingStationUpdateWithoutSessionInput = {
    location?: StringFieldUpdateOperationsInput | string
    totalEnergyConsumption?: BigIntFieldUpdateOperationsInput | bigint | number
    healthPercentage?: IntFieldUpdateOperationsInput | number
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFaulty?: BoolFieldUpdateOperationsInput | boolean
    OEM?: UserUpdateOneRequiredWithoutOwnedStationsNestedInput
    reseller?: UserUpdateOneRequiredWithoutReselledStationsNestedInput
    operator?: UserUpdateOneRequiredWithoutOperatedStationsNestedInput
    connectedUser?: UserUpdateOneWithoutPreviuoslyConnectedStatoinsNestedInput
  }

  export type chargingStationUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    OEMId?: IntFieldUpdateOperationsInput | number
    resellerId?: IntFieldUpdateOperationsInput | number
    operatorId?: IntFieldUpdateOperationsInput | number
    connectedUserID?: NullableIntFieldUpdateOperationsInput | number | null
    totalEnergyConsumption?: BigIntFieldUpdateOperationsInput | bigint | number
    healthPercentage?: IntFieldUpdateOperationsInput | number
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFaulty?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpsertWithoutSessionInput = {
    update: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserUpdateWithoutSessionInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    linkedOEM?: NullableIntFieldUpdateOperationsInput | number | null
    linkedReseller?: NullableIntFieldUpdateOperationsInput | number | null
    linkedOperator?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownedStations?: chargingStationUpdateManyWithoutOEMNestedInput
    reselledStations?: chargingStationUpdateManyWithoutResellerNestedInput
    operatedStations?: chargingStationUpdateManyWithoutOperatorNestedInput
    previuoslyConnectedStatoins?: chargingStationUpdateManyWithoutConnectedUserNestedInput
    transaction?: TransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    linkedOEM?: NullableIntFieldUpdateOperationsInput | number | null
    linkedReseller?: NullableIntFieldUpdateOperationsInput | number | null
    linkedOperator?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownedStations?: chargingStationUncheckedUpdateManyWithoutOEMNestedInput
    reselledStations?: chargingStationUncheckedUpdateManyWithoutResellerNestedInput
    operatedStations?: chargingStationUncheckedUpdateManyWithoutOperatorNestedInput
    previuoslyConnectedStatoins?: chargingStationUncheckedUpdateManyWithoutConnectedUserNestedInput
    transaction?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTransactionInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    linkedOEM?: number | null
    linkedReseller?: number | null
    linkedOperator?: number | null
    points?: bigint | number | null
    vehicle?: string | null
    gstNumber?: string | null
    ownedStations?: chargingStationCreateNestedManyWithoutOEMInput
    reselledStations?: chargingStationCreateNestedManyWithoutResellerInput
    operatedStations?: chargingStationCreateNestedManyWithoutOperatorInput
    previuoslyConnectedStatoins?: chargingStationCreateNestedManyWithoutConnectedUserInput
    session?: SessionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    linkedOEM?: number | null
    linkedReseller?: number | null
    linkedOperator?: number | null
    points?: bigint | number | null
    vehicle?: string | null
    gstNumber?: string | null
    ownedStations?: chargingStationUncheckedCreateNestedManyWithoutOEMInput
    reselledStations?: chargingStationUncheckedCreateNestedManyWithoutResellerInput
    operatedStations?: chargingStationUncheckedCreateNestedManyWithoutOperatorInput
    previuoslyConnectedStatoins?: chargingStationUncheckedCreateNestedManyWithoutConnectedUserInput
    session?: SessionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionInput, UserUncheckedCreateWithoutTransactionInput>
  }

  export type UserUpsertWithoutTransactionInput = {
    update: XOR<UserUpdateWithoutTransactionInput, UserUncheckedUpdateWithoutTransactionInput>
    create: XOR<UserCreateWithoutTransactionInput, UserUncheckedCreateWithoutTransactionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionInput, UserUncheckedUpdateWithoutTransactionInput>
  }

  export type UserUpdateWithoutTransactionInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    linkedOEM?: NullableIntFieldUpdateOperationsInput | number | null
    linkedReseller?: NullableIntFieldUpdateOperationsInput | number | null
    linkedOperator?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownedStations?: chargingStationUpdateManyWithoutOEMNestedInput
    reselledStations?: chargingStationUpdateManyWithoutResellerNestedInput
    operatedStations?: chargingStationUpdateManyWithoutOperatorNestedInput
    previuoslyConnectedStatoins?: chargingStationUpdateManyWithoutConnectedUserNestedInput
    session?: SessionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    linkedOEM?: NullableIntFieldUpdateOperationsInput | number | null
    linkedReseller?: NullableIntFieldUpdateOperationsInput | number | null
    linkedOperator?: NullableIntFieldUpdateOperationsInput | number | null
    points?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownedStations?: chargingStationUncheckedUpdateManyWithoutOEMNestedInput
    reselledStations?: chargingStationUncheckedUpdateManyWithoutResellerNestedInput
    operatedStations?: chargingStationUncheckedUpdateManyWithoutOperatorNestedInput
    previuoslyConnectedStatoins?: chargingStationUncheckedUpdateManyWithoutConnectedUserNestedInput
    session?: SessionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type chargingStationCreateManyOEMInput = {
    id?: number
    location: string
    resellerId: number
    operatorId: number
    connectedUserID?: number | null
    totalEnergyConsumption: bigint | number
    healthPercentage: number
    isOccupied: boolean
    isActive: boolean
    isFaulty: boolean
  }

  export type chargingStationCreateManyResellerInput = {
    id?: number
    location: string
    OEMId: number
    operatorId: number
    connectedUserID?: number | null
    totalEnergyConsumption: bigint | number
    healthPercentage: number
    isOccupied: boolean
    isActive: boolean
    isFaulty: boolean
  }

  export type chargingStationCreateManyOperatorInput = {
    id?: number
    location: string
    OEMId: number
    resellerId: number
    connectedUserID?: number | null
    totalEnergyConsumption: bigint | number
    healthPercentage: number
    isOccupied: boolean
    isActive: boolean
    isFaulty: boolean
  }

  export type chargingStationCreateManyConnectedUserInput = {
    id?: number
    location: string
    OEMId: number
    resellerId: number
    operatorId: number
    totalEnergyConsumption: bigint | number
    healthPercentage: number
    isOccupied: boolean
    isActive: boolean
    isFaulty: boolean
  }

  export type SessionsCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    totalTime: string
    isActive: boolean
    location: string
    stationId: number
    transactionID?: string | null
    pointsUsed?: bigint | number
    energyConsumption?: number
  }

  export type TransactionsCreateManyUserInput = {
    id?: number
    transactionId: string
    createdAt?: Date | string
    status?: $Enums.TransactionStatus
    coinsPurchased: bigint | number
    amountPaid: number
  }

  export type chargingStationUpdateWithoutOEMInput = {
    location?: StringFieldUpdateOperationsInput | string
    totalEnergyConsumption?: BigIntFieldUpdateOperationsInput | bigint | number
    healthPercentage?: IntFieldUpdateOperationsInput | number
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFaulty?: BoolFieldUpdateOperationsInput | boolean
    reseller?: UserUpdateOneRequiredWithoutReselledStationsNestedInput
    operator?: UserUpdateOneRequiredWithoutOperatedStationsNestedInput
    connectedUser?: UserUpdateOneWithoutPreviuoslyConnectedStatoinsNestedInput
    session?: SessionsUpdateManyWithoutChargingStationNestedInput
  }

  export type chargingStationUncheckedUpdateWithoutOEMInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    resellerId?: IntFieldUpdateOperationsInput | number
    operatorId?: IntFieldUpdateOperationsInput | number
    connectedUserID?: NullableIntFieldUpdateOperationsInput | number | null
    totalEnergyConsumption?: BigIntFieldUpdateOperationsInput | bigint | number
    healthPercentage?: IntFieldUpdateOperationsInput | number
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFaulty?: BoolFieldUpdateOperationsInput | boolean
    session?: SessionsUncheckedUpdateManyWithoutChargingStationNestedInput
  }

  export type chargingStationUncheckedUpdateManyWithoutOEMInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    resellerId?: IntFieldUpdateOperationsInput | number
    operatorId?: IntFieldUpdateOperationsInput | number
    connectedUserID?: NullableIntFieldUpdateOperationsInput | number | null
    totalEnergyConsumption?: BigIntFieldUpdateOperationsInput | bigint | number
    healthPercentage?: IntFieldUpdateOperationsInput | number
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFaulty?: BoolFieldUpdateOperationsInput | boolean
  }

  export type chargingStationUpdateWithoutResellerInput = {
    location?: StringFieldUpdateOperationsInput | string
    totalEnergyConsumption?: BigIntFieldUpdateOperationsInput | bigint | number
    healthPercentage?: IntFieldUpdateOperationsInput | number
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFaulty?: BoolFieldUpdateOperationsInput | boolean
    OEM?: UserUpdateOneRequiredWithoutOwnedStationsNestedInput
    operator?: UserUpdateOneRequiredWithoutOperatedStationsNestedInput
    connectedUser?: UserUpdateOneWithoutPreviuoslyConnectedStatoinsNestedInput
    session?: SessionsUpdateManyWithoutChargingStationNestedInput
  }

  export type chargingStationUncheckedUpdateWithoutResellerInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    OEMId?: IntFieldUpdateOperationsInput | number
    operatorId?: IntFieldUpdateOperationsInput | number
    connectedUserID?: NullableIntFieldUpdateOperationsInput | number | null
    totalEnergyConsumption?: BigIntFieldUpdateOperationsInput | bigint | number
    healthPercentage?: IntFieldUpdateOperationsInput | number
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFaulty?: BoolFieldUpdateOperationsInput | boolean
    session?: SessionsUncheckedUpdateManyWithoutChargingStationNestedInput
  }

  export type chargingStationUncheckedUpdateManyWithoutResellerInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    OEMId?: IntFieldUpdateOperationsInput | number
    operatorId?: IntFieldUpdateOperationsInput | number
    connectedUserID?: NullableIntFieldUpdateOperationsInput | number | null
    totalEnergyConsumption?: BigIntFieldUpdateOperationsInput | bigint | number
    healthPercentage?: IntFieldUpdateOperationsInput | number
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFaulty?: BoolFieldUpdateOperationsInput | boolean
  }

  export type chargingStationUpdateWithoutOperatorInput = {
    location?: StringFieldUpdateOperationsInput | string
    totalEnergyConsumption?: BigIntFieldUpdateOperationsInput | bigint | number
    healthPercentage?: IntFieldUpdateOperationsInput | number
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFaulty?: BoolFieldUpdateOperationsInput | boolean
    OEM?: UserUpdateOneRequiredWithoutOwnedStationsNestedInput
    reseller?: UserUpdateOneRequiredWithoutReselledStationsNestedInput
    connectedUser?: UserUpdateOneWithoutPreviuoslyConnectedStatoinsNestedInput
    session?: SessionsUpdateManyWithoutChargingStationNestedInput
  }

  export type chargingStationUncheckedUpdateWithoutOperatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    OEMId?: IntFieldUpdateOperationsInput | number
    resellerId?: IntFieldUpdateOperationsInput | number
    connectedUserID?: NullableIntFieldUpdateOperationsInput | number | null
    totalEnergyConsumption?: BigIntFieldUpdateOperationsInput | bigint | number
    healthPercentage?: IntFieldUpdateOperationsInput | number
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFaulty?: BoolFieldUpdateOperationsInput | boolean
    session?: SessionsUncheckedUpdateManyWithoutChargingStationNestedInput
  }

  export type chargingStationUncheckedUpdateManyWithoutOperatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    OEMId?: IntFieldUpdateOperationsInput | number
    resellerId?: IntFieldUpdateOperationsInput | number
    connectedUserID?: NullableIntFieldUpdateOperationsInput | number | null
    totalEnergyConsumption?: BigIntFieldUpdateOperationsInput | bigint | number
    healthPercentage?: IntFieldUpdateOperationsInput | number
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFaulty?: BoolFieldUpdateOperationsInput | boolean
  }

  export type chargingStationUpdateWithoutConnectedUserInput = {
    location?: StringFieldUpdateOperationsInput | string
    totalEnergyConsumption?: BigIntFieldUpdateOperationsInput | bigint | number
    healthPercentage?: IntFieldUpdateOperationsInput | number
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFaulty?: BoolFieldUpdateOperationsInput | boolean
    OEM?: UserUpdateOneRequiredWithoutOwnedStationsNestedInput
    reseller?: UserUpdateOneRequiredWithoutReselledStationsNestedInput
    operator?: UserUpdateOneRequiredWithoutOperatedStationsNestedInput
    session?: SessionsUpdateManyWithoutChargingStationNestedInput
  }

  export type chargingStationUncheckedUpdateWithoutConnectedUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    OEMId?: IntFieldUpdateOperationsInput | number
    resellerId?: IntFieldUpdateOperationsInput | number
    operatorId?: IntFieldUpdateOperationsInput | number
    totalEnergyConsumption?: BigIntFieldUpdateOperationsInput | bigint | number
    healthPercentage?: IntFieldUpdateOperationsInput | number
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFaulty?: BoolFieldUpdateOperationsInput | boolean
    session?: SessionsUncheckedUpdateManyWithoutChargingStationNestedInput
  }

  export type chargingStationUncheckedUpdateManyWithoutConnectedUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    OEMId?: IntFieldUpdateOperationsInput | number
    resellerId?: IntFieldUpdateOperationsInput | number
    operatorId?: IntFieldUpdateOperationsInput | number
    totalEnergyConsumption?: BigIntFieldUpdateOperationsInput | bigint | number
    healthPercentage?: IntFieldUpdateOperationsInput | number
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFaulty?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionsUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    transactionID?: NullableStringFieldUpdateOperationsInput | string | null
    pointsUsed?: BigIntFieldUpdateOperationsInput | bigint | number
    energyConsumption?: FloatFieldUpdateOperationsInput | number
    chargingStation?: chargingStationUpdateOneRequiredWithoutSessionNestedInput
  }

  export type SessionsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    stationId?: IntFieldUpdateOperationsInput | number
    transactionID?: NullableStringFieldUpdateOperationsInput | string | null
    pointsUsed?: BigIntFieldUpdateOperationsInput | bigint | number
    energyConsumption?: FloatFieldUpdateOperationsInput | number
  }

  export type SessionsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    stationId?: IntFieldUpdateOperationsInput | number
    transactionID?: NullableStringFieldUpdateOperationsInput | string | null
    pointsUsed?: BigIntFieldUpdateOperationsInput | bigint | number
    energyConsumption?: FloatFieldUpdateOperationsInput | number
  }

  export type TransactionsUpdateWithoutUserInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    coinsPurchased?: BigIntFieldUpdateOperationsInput | bigint | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
  }

  export type TransactionsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    coinsPurchased?: BigIntFieldUpdateOperationsInput | bigint | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
  }

  export type TransactionsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    coinsPurchased?: BigIntFieldUpdateOperationsInput | bigint | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
  }

  export type SessionsCreateManyChargingStationInput = {
    id?: number
    createdAt?: Date | string
    totalTime: string
    isActive: boolean
    location: string
    userId: number
    transactionID?: string | null
    pointsUsed?: bigint | number
    energyConsumption?: number
  }

  export type SessionsUpdateWithoutChargingStationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    transactionID?: NullableStringFieldUpdateOperationsInput | string | null
    pointsUsed?: BigIntFieldUpdateOperationsInput | bigint | number
    energyConsumption?: FloatFieldUpdateOperationsInput | number
    User?: UserUpdateOneRequiredWithoutSessionNestedInput
  }

  export type SessionsUncheckedUpdateWithoutChargingStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    transactionID?: NullableStringFieldUpdateOperationsInput | string | null
    pointsUsed?: BigIntFieldUpdateOperationsInput | bigint | number
    energyConsumption?: FloatFieldUpdateOperationsInput | number
  }

  export type SessionsUncheckedUpdateManyWithoutChargingStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    transactionID?: NullableStringFieldUpdateOperationsInput | string | null
    pointsUsed?: BigIntFieldUpdateOperationsInput | bigint | number
    energyConsumption?: FloatFieldUpdateOperationsInput | number
  }



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