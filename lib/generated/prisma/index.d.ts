
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
 * Model Education
 * 
 */
export type Education = $Result.DefaultSelection<Prisma.$EducationPayload>
/**
 * Model Award
 * 
 */
export type Award = $Result.DefaultSelection<Prisma.$AwardPayload>
/**
 * Model RelevantCourse
 * 
 */
export type RelevantCourse = $Result.DefaultSelection<Prisma.$RelevantCoursePayload>
/**
 * Model Experience
 * 
 */
export type Experience = $Result.DefaultSelection<Prisma.$ExperiencePayload>
/**
 * Model ExperienceProject
 * 
 */
export type ExperienceProject = $Result.DefaultSelection<Prisma.$ExperienceProjectPayload>
/**
 * Model ProjectTechnology
 * 
 */
export type ProjectTechnology = $Result.DefaultSelection<Prisma.$ProjectTechnologyPayload>
/**
 * Model ExperienceProjectBullet
 * 
 */
export type ExperienceProjectBullet = $Result.DefaultSelection<Prisma.$ExperienceProjectBulletPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectTech
 * 
 */
export type ProjectTech = $Result.DefaultSelection<Prisma.$ProjectTechPayload>
/**
 * Model ProjectBullet
 * 
 */
export type ProjectBullet = $Result.DefaultSelection<Prisma.$ProjectBulletPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Educations
 * const educations = await prisma.education.findMany()
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
   * // Fetch zero or more Educations
   * const educations = await prisma.education.findMany()
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
   * `prisma.education`: Exposes CRUD operations for the **Education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.EducationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.award`: Exposes CRUD operations for the **Award** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Awards
    * const awards = await prisma.award.findMany()
    * ```
    */
  get award(): Prisma.AwardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relevantCourse`: Exposes CRUD operations for the **RelevantCourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RelevantCourses
    * const relevantCourses = await prisma.relevantCourse.findMany()
    * ```
    */
  get relevantCourse(): Prisma.RelevantCourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **Experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.ExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experienceProject`: Exposes CRUD operations for the **ExperienceProject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExperienceProjects
    * const experienceProjects = await prisma.experienceProject.findMany()
    * ```
    */
  get experienceProject(): Prisma.ExperienceProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectTechnology`: Exposes CRUD operations for the **ProjectTechnology** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectTechnologies
    * const projectTechnologies = await prisma.projectTechnology.findMany()
    * ```
    */
  get projectTechnology(): Prisma.ProjectTechnologyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experienceProjectBullet`: Exposes CRUD operations for the **ExperienceProjectBullet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExperienceProjectBullets
    * const experienceProjectBullets = await prisma.experienceProjectBullet.findMany()
    * ```
    */
  get experienceProjectBullet(): Prisma.ExperienceProjectBulletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectTech`: Exposes CRUD operations for the **ProjectTech** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectTeches
    * const projectTeches = await prisma.projectTech.findMany()
    * ```
    */
  get projectTech(): Prisma.ProjectTechDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectBullet`: Exposes CRUD operations for the **ProjectBullet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectBullets
    * const projectBullets = await prisma.projectBullet.findMany()
    * ```
    */
  get projectBullet(): Prisma.ProjectBulletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    Education: 'Education',
    Award: 'Award',
    RelevantCourse: 'RelevantCourse',
    Experience: 'Experience',
    ExperienceProject: 'ExperienceProject',
    ProjectTechnology: 'ProjectTechnology',
    ExperienceProjectBullet: 'ExperienceProjectBullet',
    Project: 'Project',
    ProjectTech: 'ProjectTech',
    ProjectBullet: 'ProjectBullet',
    Skill: 'Skill'
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
      modelProps: "education" | "award" | "relevantCourse" | "experience" | "experienceProject" | "projectTechnology" | "experienceProjectBullet" | "project" | "projectTech" | "projectBullet" | "skill"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Education: {
        payload: Prisma.$EducationPayload<ExtArgs>
        fields: Prisma.EducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findFirst: {
            args: Prisma.EducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findMany: {
            args: Prisma.EducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          create: {
            args: Prisma.EducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          createMany: {
            args: Prisma.EducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EducationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          delete: {
            args: Prisma.EducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          update: {
            args: Prisma.EducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          deleteMany: {
            args: Prisma.EducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EducationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          upsert: {
            args: Prisma.EducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation>
          }
          groupBy: {
            args: Prisma.EducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationCountArgs<ExtArgs>
            result: $Utils.Optional<EducationCountAggregateOutputType> | number
          }
        }
      }
      Award: {
        payload: Prisma.$AwardPayload<ExtArgs>
        fields: Prisma.AwardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AwardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AwardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          findFirst: {
            args: Prisma.AwardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AwardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          findMany: {
            args: Prisma.AwardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>[]
          }
          create: {
            args: Prisma.AwardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          createMany: {
            args: Prisma.AwardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AwardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>[]
          }
          delete: {
            args: Prisma.AwardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          update: {
            args: Prisma.AwardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          deleteMany: {
            args: Prisma.AwardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AwardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AwardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>[]
          }
          upsert: {
            args: Prisma.AwardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          aggregate: {
            args: Prisma.AwardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAward>
          }
          groupBy: {
            args: Prisma.AwardGroupByArgs<ExtArgs>
            result: $Utils.Optional<AwardGroupByOutputType>[]
          }
          count: {
            args: Prisma.AwardCountArgs<ExtArgs>
            result: $Utils.Optional<AwardCountAggregateOutputType> | number
          }
        }
      }
      RelevantCourse: {
        payload: Prisma.$RelevantCoursePayload<ExtArgs>
        fields: Prisma.RelevantCourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelevantCourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelevantCoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelevantCourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelevantCoursePayload>
          }
          findFirst: {
            args: Prisma.RelevantCourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelevantCoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelevantCourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelevantCoursePayload>
          }
          findMany: {
            args: Prisma.RelevantCourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelevantCoursePayload>[]
          }
          create: {
            args: Prisma.RelevantCourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelevantCoursePayload>
          }
          createMany: {
            args: Prisma.RelevantCourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RelevantCourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelevantCoursePayload>[]
          }
          delete: {
            args: Prisma.RelevantCourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelevantCoursePayload>
          }
          update: {
            args: Prisma.RelevantCourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelevantCoursePayload>
          }
          deleteMany: {
            args: Prisma.RelevantCourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RelevantCourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RelevantCourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelevantCoursePayload>[]
          }
          upsert: {
            args: Prisma.RelevantCourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelevantCoursePayload>
          }
          aggregate: {
            args: Prisma.RelevantCourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelevantCourse>
          }
          groupBy: {
            args: Prisma.RelevantCourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<RelevantCourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelevantCourseCountArgs<ExtArgs>
            result: $Utils.Optional<RelevantCourseCountAggregateOutputType> | number
          }
        }
      }
      Experience: {
        payload: Prisma.$ExperiencePayload<ExtArgs>
        fields: Prisma.ExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findFirst: {
            args: Prisma.ExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findMany: {
            args: Prisma.ExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          create: {
            args: Prisma.ExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          createMany: {
            args: Prisma.ExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          delete: {
            args: Prisma.ExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          update: {
            args: Prisma.ExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          deleteMany: {
            args: Prisma.ExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          upsert: {
            args: Prisma.ExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.ExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      ExperienceProject: {
        payload: Prisma.$ExperienceProjectPayload<ExtArgs>
        fields: Prisma.ExperienceProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceProjectPayload>
          }
          findFirst: {
            args: Prisma.ExperienceProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceProjectPayload>
          }
          findMany: {
            args: Prisma.ExperienceProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceProjectPayload>[]
          }
          create: {
            args: Prisma.ExperienceProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceProjectPayload>
          }
          createMany: {
            args: Prisma.ExperienceProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExperienceProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceProjectPayload>[]
          }
          delete: {
            args: Prisma.ExperienceProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceProjectPayload>
          }
          update: {
            args: Prisma.ExperienceProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceProjectPayload>
          }
          deleteMany: {
            args: Prisma.ExperienceProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExperienceProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceProjectPayload>[]
          }
          upsert: {
            args: Prisma.ExperienceProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceProjectPayload>
          }
          aggregate: {
            args: Prisma.ExperienceProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperienceProject>
          }
          groupBy: {
            args: Prisma.ExperienceProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienceProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectTechnology: {
        payload: Prisma.$ProjectTechnologyPayload<ExtArgs>
        fields: Prisma.ProjectTechnologyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectTechnologyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectTechnologyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>
          }
          findFirst: {
            args: Prisma.ProjectTechnologyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectTechnologyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>
          }
          findMany: {
            args: Prisma.ProjectTechnologyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>[]
          }
          create: {
            args: Prisma.ProjectTechnologyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>
          }
          createMany: {
            args: Prisma.ProjectTechnologyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectTechnologyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>[]
          }
          delete: {
            args: Prisma.ProjectTechnologyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>
          }
          update: {
            args: Prisma.ProjectTechnologyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>
          }
          deleteMany: {
            args: Prisma.ProjectTechnologyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectTechnologyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectTechnologyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>[]
          }
          upsert: {
            args: Prisma.ProjectTechnologyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechnologyPayload>
          }
          aggregate: {
            args: Prisma.ProjectTechnologyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectTechnology>
          }
          groupBy: {
            args: Prisma.ProjectTechnologyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectTechnologyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectTechnologyCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectTechnologyCountAggregateOutputType> | number
          }
        }
      }
      ExperienceProjectBullet: {
        payload: Prisma.$ExperienceProjectBulletPayload<ExtArgs>
        fields: Prisma.ExperienceProjectBulletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceProjectBulletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceProjectBulletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceProjectBulletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceProjectBulletPayload>
          }
          findFirst: {
            args: Prisma.ExperienceProjectBulletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceProjectBulletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceProjectBulletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceProjectBulletPayload>
          }
          findMany: {
            args: Prisma.ExperienceProjectBulletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceProjectBulletPayload>[]
          }
          create: {
            args: Prisma.ExperienceProjectBulletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceProjectBulletPayload>
          }
          createMany: {
            args: Prisma.ExperienceProjectBulletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExperienceProjectBulletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceProjectBulletPayload>[]
          }
          delete: {
            args: Prisma.ExperienceProjectBulletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceProjectBulletPayload>
          }
          update: {
            args: Prisma.ExperienceProjectBulletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceProjectBulletPayload>
          }
          deleteMany: {
            args: Prisma.ExperienceProjectBulletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceProjectBulletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExperienceProjectBulletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceProjectBulletPayload>[]
          }
          upsert: {
            args: Prisma.ExperienceProjectBulletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceProjectBulletPayload>
          }
          aggregate: {
            args: Prisma.ExperienceProjectBulletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperienceProjectBullet>
          }
          groupBy: {
            args: Prisma.ExperienceProjectBulletGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceProjectBulletGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienceProjectBulletCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceProjectBulletCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectTech: {
        payload: Prisma.$ProjectTechPayload<ExtArgs>
        fields: Prisma.ProjectTechFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectTechFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectTechFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechPayload>
          }
          findFirst: {
            args: Prisma.ProjectTechFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectTechFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechPayload>
          }
          findMany: {
            args: Prisma.ProjectTechFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechPayload>[]
          }
          create: {
            args: Prisma.ProjectTechCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechPayload>
          }
          createMany: {
            args: Prisma.ProjectTechCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectTechCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechPayload>[]
          }
          delete: {
            args: Prisma.ProjectTechDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechPayload>
          }
          update: {
            args: Prisma.ProjectTechUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechPayload>
          }
          deleteMany: {
            args: Prisma.ProjectTechDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectTechUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectTechUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechPayload>[]
          }
          upsert: {
            args: Prisma.ProjectTechUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechPayload>
          }
          aggregate: {
            args: Prisma.ProjectTechAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectTech>
          }
          groupBy: {
            args: Prisma.ProjectTechGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectTechGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectTechCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectTechCountAggregateOutputType> | number
          }
        }
      }
      ProjectBullet: {
        payload: Prisma.$ProjectBulletPayload<ExtArgs>
        fields: Prisma.ProjectBulletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectBulletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectBulletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectBulletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectBulletPayload>
          }
          findFirst: {
            args: Prisma.ProjectBulletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectBulletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectBulletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectBulletPayload>
          }
          findMany: {
            args: Prisma.ProjectBulletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectBulletPayload>[]
          }
          create: {
            args: Prisma.ProjectBulletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectBulletPayload>
          }
          createMany: {
            args: Prisma.ProjectBulletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectBulletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectBulletPayload>[]
          }
          delete: {
            args: Prisma.ProjectBulletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectBulletPayload>
          }
          update: {
            args: Prisma.ProjectBulletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectBulletPayload>
          }
          deleteMany: {
            args: Prisma.ProjectBulletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectBulletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectBulletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectBulletPayload>[]
          }
          upsert: {
            args: Prisma.ProjectBulletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectBulletPayload>
          }
          aggregate: {
            args: Prisma.ProjectBulletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectBullet>
          }
          groupBy: {
            args: Prisma.ProjectBulletGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectBulletGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectBulletCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectBulletCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
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
    education?: EducationOmit
    award?: AwardOmit
    relevantCourse?: RelevantCourseOmit
    experience?: ExperienceOmit
    experienceProject?: ExperienceProjectOmit
    projectTechnology?: ProjectTechnologyOmit
    experienceProjectBullet?: ExperienceProjectBulletOmit
    project?: ProjectOmit
    projectTech?: ProjectTechOmit
    projectBullet?: ProjectBulletOmit
    skill?: SkillOmit
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
   * Count Type EducationCountOutputType
   */

  export type EducationCountOutputType = {
    awards: number
    relevantCourses: number
  }

  export type EducationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    awards?: boolean | EducationCountOutputTypeCountAwardsArgs
    relevantCourses?: boolean | EducationCountOutputTypeCountRelevantCoursesArgs
  }

  // Custom InputTypes
  /**
   * EducationCountOutputType without action
   */
  export type EducationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationCountOutputType
     */
    select?: EducationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EducationCountOutputType without action
   */
  export type EducationCountOutputTypeCountAwardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AwardWhereInput
  }

  /**
   * EducationCountOutputType without action
   */
  export type EducationCountOutputTypeCountRelevantCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelevantCourseWhereInput
  }


  /**
   * Count Type ExperienceCountOutputType
   */

  export type ExperienceCountOutputType = {
    projects: number
  }

  export type ExperienceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | ExperienceCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * ExperienceCountOutputType without action
   */
  export type ExperienceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceCountOutputType
     */
    select?: ExperienceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExperienceCountOutputType without action
   */
  export type ExperienceCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceProjectWhereInput
  }


  /**
   * Count Type ExperienceProjectCountOutputType
   */

  export type ExperienceProjectCountOutputType = {
    technologies: number
    bullets: number
  }

  export type ExperienceProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technologies?: boolean | ExperienceProjectCountOutputTypeCountTechnologiesArgs
    bullets?: boolean | ExperienceProjectCountOutputTypeCountBulletsArgs
  }

  // Custom InputTypes
  /**
   * ExperienceProjectCountOutputType without action
   */
  export type ExperienceProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProjectCountOutputType
     */
    select?: ExperienceProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExperienceProjectCountOutputType without action
   */
  export type ExperienceProjectCountOutputTypeCountTechnologiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTechnologyWhereInput
  }

  /**
   * ExperienceProjectCountOutputType without action
   */
  export type ExperienceProjectCountOutputTypeCountBulletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceProjectBulletWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    technologies: number
    bullets: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technologies?: boolean | ProjectCountOutputTypeCountTechnologiesArgs
    bullets?: boolean | ProjectCountOutputTypeCountBulletsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTechnologiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTechWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountBulletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectBulletWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _avg: EducationAvgAggregateOutputType | null
    _sum: EducationSumAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationAvgAggregateOutputType = {
    id: number | null
    gpa: number | null
  }

  export type EducationSumAggregateOutputType = {
    id: number | null
    gpa: number | null
  }

  export type EducationMinAggregateOutputType = {
    id: number | null
    degree: string | null
    schoolName: string | null
    gpa: number | null
    startDate: string | null
    endDate: string | null
  }

  export type EducationMaxAggregateOutputType = {
    id: number | null
    degree: string | null
    schoolName: string | null
    gpa: number | null
    startDate: string | null
    endDate: string | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    degree: number
    schoolName: number
    gpa: number
    startDate: number
    endDate: number
    _all: number
  }


  export type EducationAvgAggregateInputType = {
    id?: true
    gpa?: true
  }

  export type EducationSumAggregateInputType = {
    id?: true
    gpa?: true
  }

  export type EducationMinAggregateInputType = {
    id?: true
    degree?: true
    schoolName?: true
    gpa?: true
    startDate?: true
    endDate?: true
  }

  export type EducationMaxAggregateInputType = {
    id?: true
    degree?: true
    schoolName?: true
    gpa?: true
    startDate?: true
    endDate?: true
  }

  export type EducationCountAggregateInputType = {
    id?: true
    degree?: true
    schoolName?: true
    gpa?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type EducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Education to aggregate.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EducationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EducationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type EducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithAggregationInput | EducationOrderByWithAggregationInput[]
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum
    having?: EducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _avg?: EducationAvgAggregateInputType
    _sum?: EducationSumAggregateInputType
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }

  export type EducationGroupByOutputType = {
    id: number
    degree: string
    schoolName: string
    gpa: number
    startDate: string
    endDate: string
    _count: EducationCountAggregateOutputType | null
    _avg: EducationAvgAggregateOutputType | null
    _sum: EducationSumAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends EducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type EducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    degree?: boolean
    schoolName?: boolean
    gpa?: boolean
    startDate?: boolean
    endDate?: boolean
    awards?: boolean | Education$awardsArgs<ExtArgs>
    relevantCourses?: boolean | Education$relevantCoursesArgs<ExtArgs>
    _count?: boolean | EducationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    degree?: boolean
    schoolName?: boolean
    gpa?: boolean
    startDate?: boolean
    endDate?: boolean
  }, ExtArgs["result"]["education"]>

  export type EducationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    degree?: boolean
    schoolName?: boolean
    gpa?: boolean
    startDate?: boolean
    endDate?: boolean
  }, ExtArgs["result"]["education"]>

  export type EducationSelectScalar = {
    id?: boolean
    degree?: boolean
    schoolName?: boolean
    gpa?: boolean
    startDate?: boolean
    endDate?: boolean
  }

  export type EducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "degree" | "schoolName" | "gpa" | "startDate" | "endDate", ExtArgs["result"]["education"]>
  export type EducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    awards?: boolean | Education$awardsArgs<ExtArgs>
    relevantCourses?: boolean | Education$relevantCoursesArgs<ExtArgs>
    _count?: boolean | EducationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EducationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EducationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Education"
    objects: {
      awards: Prisma.$AwardPayload<ExtArgs>[]
      relevantCourses: Prisma.$RelevantCoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      degree: string
      schoolName: string
      gpa: number
      startDate: string
      endDate: string
    }, ExtArgs["result"]["education"]>
    composites: {}
  }

  type EducationGetPayload<S extends boolean | null | undefined | EducationDefaultArgs> = $Result.GetResult<Prisma.$EducationPayload, S>

  type EducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationCountAggregateInputType | true
    }

  export interface EducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Education'], meta: { name: 'Education' } }
    /**
     * Find zero or one Education that matches the filter.
     * @param {EducationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationFindUniqueArgs>(args: SelectSubset<T, EducationFindUniqueArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Education that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EducationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationFindFirstArgs>(args?: SelectSubset<T, EducationFindFirstArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationFindManyArgs>(args?: SelectSubset<T, EducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Education.
     * @param {EducationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
     */
    create<T extends EducationCreateArgs>(args: SelectSubset<T, EducationCreateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Educations.
     * @param {EducationCreateManyArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationCreateManyArgs>(args?: SelectSubset<T, EducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Educations and returns the data saved in the database.
     * @param {EducationCreateManyAndReturnArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EducationCreateManyAndReturnArgs>(args?: SelectSubset<T, EducationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Education.
     * @param {EducationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
     */
    delete<T extends EducationDeleteArgs>(args: SelectSubset<T, EducationDeleteArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Education.
     * @param {EducationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationUpdateArgs>(args: SelectSubset<T, EducationUpdateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Educations.
     * @param {EducationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationDeleteManyArgs>(args?: SelectSubset<T, EducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationUpdateManyArgs>(args: SelectSubset<T, EducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations and returns the data updated in the database.
     * @param {EducationUpdateManyAndReturnArgs} args - Arguments to update many Educations.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.updateManyAndReturn({
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
    updateManyAndReturn<T extends EducationUpdateManyAndReturnArgs>(args: SelectSubset<T, EducationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Education.
     * @param {EducationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
     */
    upsert<T extends EducationUpsertArgs>(args: SelectSubset<T, EducationUpsertArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationCountArgs>(
      args?: Subset<T, EducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationGroupByArgs} args - Group by arguments.
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
      T extends EducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationGroupByArgs['orderBy'] }
        : { orderBy?: EducationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Education model
   */
  readonly fields: EducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    awards<T extends Education$awardsArgs<ExtArgs> = {}>(args?: Subset<T, Education$awardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relevantCourses<T extends Education$relevantCoursesArgs<ExtArgs> = {}>(args?: Subset<T, Education$relevantCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelevantCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Education model
   */
  interface EducationFieldRefs {
    readonly id: FieldRef<"Education", 'Int'>
    readonly degree: FieldRef<"Education", 'String'>
    readonly schoolName: FieldRef<"Education", 'String'>
    readonly gpa: FieldRef<"Education", 'Float'>
    readonly startDate: FieldRef<"Education", 'String'>
    readonly endDate: FieldRef<"Education", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Education findUnique
   */
  export type EducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findUniqueOrThrow
   */
  export type EducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findFirst
   */
  export type EducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findFirstOrThrow
   */
  export type EducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findMany
   */
  export type EducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Educations to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education create
   */
  export type EducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to create a Education.
     */
    data: XOR<EducationCreateInput, EducationUncheckedCreateInput>
  }

  /**
   * Education createMany
   */
  export type EducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
  }

  /**
   * Education createManyAndReturn
   */
  export type EducationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
  }

  /**
   * Education update
   */
  export type EducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to update a Education.
     */
    data: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
    /**
     * Choose, which Education to update.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education updateMany
   */
  export type EducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
  }

  /**
   * Education updateManyAndReturn
   */
  export type EducationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
  }

  /**
   * Education upsert
   */
  export type EducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The filter to search for the Education to update in case it exists.
     */
    where: EducationWhereUniqueInput
    /**
     * In case the Education found by the `where` argument doesn't exist, create a new Education with this data.
     */
    create: XOR<EducationCreateInput, EducationUncheckedCreateInput>
    /**
     * In case the Education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
  }

  /**
   * Education delete
   */
  export type EducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter which Education to delete.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education deleteMany
   */
  export type EducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Educations to delete
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to delete.
     */
    limit?: number
  }

  /**
   * Education.awards
   */
  export type Education$awardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    where?: AwardWhereInput
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    cursor?: AwardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AwardScalarFieldEnum | AwardScalarFieldEnum[]
  }

  /**
   * Education.relevantCourses
   */
  export type Education$relevantCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelevantCourse
     */
    select?: RelevantCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelevantCourse
     */
    omit?: RelevantCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelevantCourseInclude<ExtArgs> | null
    where?: RelevantCourseWhereInput
    orderBy?: RelevantCourseOrderByWithRelationInput | RelevantCourseOrderByWithRelationInput[]
    cursor?: RelevantCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelevantCourseScalarFieldEnum | RelevantCourseScalarFieldEnum[]
  }

  /**
   * Education without action
   */
  export type EducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
  }


  /**
   * Model Award
   */

  export type AggregateAward = {
    _count: AwardCountAggregateOutputType | null
    _avg: AwardAvgAggregateOutputType | null
    _sum: AwardSumAggregateOutputType | null
    _min: AwardMinAggregateOutputType | null
    _max: AwardMaxAggregateOutputType | null
  }

  export type AwardAvgAggregateOutputType = {
    id: number | null
    educationId: number | null
  }

  export type AwardSumAggregateOutputType = {
    id: number | null
    educationId: number | null
  }

  export type AwardMinAggregateOutputType = {
    id: number | null
    text: string | null
    educationId: number | null
  }

  export type AwardMaxAggregateOutputType = {
    id: number | null
    text: string | null
    educationId: number | null
  }

  export type AwardCountAggregateOutputType = {
    id: number
    text: number
    educationId: number
    _all: number
  }


  export type AwardAvgAggregateInputType = {
    id?: true
    educationId?: true
  }

  export type AwardSumAggregateInputType = {
    id?: true
    educationId?: true
  }

  export type AwardMinAggregateInputType = {
    id?: true
    text?: true
    educationId?: true
  }

  export type AwardMaxAggregateInputType = {
    id?: true
    text?: true
    educationId?: true
  }

  export type AwardCountAggregateInputType = {
    id?: true
    text?: true
    educationId?: true
    _all?: true
  }

  export type AwardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Award to aggregate.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Awards
    **/
    _count?: true | AwardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AwardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AwardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AwardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AwardMaxAggregateInputType
  }

  export type GetAwardAggregateType<T extends AwardAggregateArgs> = {
        [P in keyof T & keyof AggregateAward]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAward[P]>
      : GetScalarType<T[P], AggregateAward[P]>
  }




  export type AwardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AwardWhereInput
    orderBy?: AwardOrderByWithAggregationInput | AwardOrderByWithAggregationInput[]
    by: AwardScalarFieldEnum[] | AwardScalarFieldEnum
    having?: AwardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AwardCountAggregateInputType | true
    _avg?: AwardAvgAggregateInputType
    _sum?: AwardSumAggregateInputType
    _min?: AwardMinAggregateInputType
    _max?: AwardMaxAggregateInputType
  }

  export type AwardGroupByOutputType = {
    id: number
    text: string
    educationId: number
    _count: AwardCountAggregateOutputType | null
    _avg: AwardAvgAggregateOutputType | null
    _sum: AwardSumAggregateOutputType | null
    _min: AwardMinAggregateOutputType | null
    _max: AwardMaxAggregateOutputType | null
  }

  type GetAwardGroupByPayload<T extends AwardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AwardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AwardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AwardGroupByOutputType[P]>
            : GetScalarType<T[P], AwardGroupByOutputType[P]>
        }
      >
    >


  export type AwardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    educationId?: boolean
    education?: boolean | EducationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["award"]>

  export type AwardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    educationId?: boolean
    education?: boolean | EducationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["award"]>

  export type AwardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    educationId?: boolean
    education?: boolean | EducationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["award"]>

  export type AwardSelectScalar = {
    id?: boolean
    text?: boolean
    educationId?: boolean
  }

  export type AwardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "educationId", ExtArgs["result"]["award"]>
  export type AwardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    education?: boolean | EducationDefaultArgs<ExtArgs>
  }
  export type AwardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    education?: boolean | EducationDefaultArgs<ExtArgs>
  }
  export type AwardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    education?: boolean | EducationDefaultArgs<ExtArgs>
  }

  export type $AwardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Award"
    objects: {
      education: Prisma.$EducationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      educationId: number
    }, ExtArgs["result"]["award"]>
    composites: {}
  }

  type AwardGetPayload<S extends boolean | null | undefined | AwardDefaultArgs> = $Result.GetResult<Prisma.$AwardPayload, S>

  type AwardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AwardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AwardCountAggregateInputType | true
    }

  export interface AwardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Award'], meta: { name: 'Award' } }
    /**
     * Find zero or one Award that matches the filter.
     * @param {AwardFindUniqueArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AwardFindUniqueArgs>(args: SelectSubset<T, AwardFindUniqueArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Award that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AwardFindUniqueOrThrowArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AwardFindUniqueOrThrowArgs>(args: SelectSubset<T, AwardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Award that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardFindFirstArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AwardFindFirstArgs>(args?: SelectSubset<T, AwardFindFirstArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Award that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardFindFirstOrThrowArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AwardFindFirstOrThrowArgs>(args?: SelectSubset<T, AwardFindFirstOrThrowArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Awards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Awards
     * const awards = await prisma.award.findMany()
     * 
     * // Get first 10 Awards
     * const awards = await prisma.award.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const awardWithIdOnly = await prisma.award.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AwardFindManyArgs>(args?: SelectSubset<T, AwardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Award.
     * @param {AwardCreateArgs} args - Arguments to create a Award.
     * @example
     * // Create one Award
     * const Award = await prisma.award.create({
     *   data: {
     *     // ... data to create a Award
     *   }
     * })
     * 
     */
    create<T extends AwardCreateArgs>(args: SelectSubset<T, AwardCreateArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Awards.
     * @param {AwardCreateManyArgs} args - Arguments to create many Awards.
     * @example
     * // Create many Awards
     * const award = await prisma.award.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AwardCreateManyArgs>(args?: SelectSubset<T, AwardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Awards and returns the data saved in the database.
     * @param {AwardCreateManyAndReturnArgs} args - Arguments to create many Awards.
     * @example
     * // Create many Awards
     * const award = await prisma.award.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Awards and only return the `id`
     * const awardWithIdOnly = await prisma.award.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AwardCreateManyAndReturnArgs>(args?: SelectSubset<T, AwardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Award.
     * @param {AwardDeleteArgs} args - Arguments to delete one Award.
     * @example
     * // Delete one Award
     * const Award = await prisma.award.delete({
     *   where: {
     *     // ... filter to delete one Award
     *   }
     * })
     * 
     */
    delete<T extends AwardDeleteArgs>(args: SelectSubset<T, AwardDeleteArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Award.
     * @param {AwardUpdateArgs} args - Arguments to update one Award.
     * @example
     * // Update one Award
     * const award = await prisma.award.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AwardUpdateArgs>(args: SelectSubset<T, AwardUpdateArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Awards.
     * @param {AwardDeleteManyArgs} args - Arguments to filter Awards to delete.
     * @example
     * // Delete a few Awards
     * const { count } = await prisma.award.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AwardDeleteManyArgs>(args?: SelectSubset<T, AwardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Awards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Awards
     * const award = await prisma.award.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AwardUpdateManyArgs>(args: SelectSubset<T, AwardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Awards and returns the data updated in the database.
     * @param {AwardUpdateManyAndReturnArgs} args - Arguments to update many Awards.
     * @example
     * // Update many Awards
     * const award = await prisma.award.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Awards and only return the `id`
     * const awardWithIdOnly = await prisma.award.updateManyAndReturn({
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
    updateManyAndReturn<T extends AwardUpdateManyAndReturnArgs>(args: SelectSubset<T, AwardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Award.
     * @param {AwardUpsertArgs} args - Arguments to update or create a Award.
     * @example
     * // Update or create a Award
     * const award = await prisma.award.upsert({
     *   create: {
     *     // ... data to create a Award
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Award we want to update
     *   }
     * })
     */
    upsert<T extends AwardUpsertArgs>(args: SelectSubset<T, AwardUpsertArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Awards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardCountArgs} args - Arguments to filter Awards to count.
     * @example
     * // Count the number of Awards
     * const count = await prisma.award.count({
     *   where: {
     *     // ... the filter for the Awards we want to count
     *   }
     * })
    **/
    count<T extends AwardCountArgs>(
      args?: Subset<T, AwardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AwardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Award.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AwardAggregateArgs>(args: Subset<T, AwardAggregateArgs>): Prisma.PrismaPromise<GetAwardAggregateType<T>>

    /**
     * Group by Award.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardGroupByArgs} args - Group by arguments.
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
      T extends AwardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AwardGroupByArgs['orderBy'] }
        : { orderBy?: AwardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AwardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAwardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Award model
   */
  readonly fields: AwardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Award.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AwardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    education<T extends EducationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EducationDefaultArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Award model
   */
  interface AwardFieldRefs {
    readonly id: FieldRef<"Award", 'Int'>
    readonly text: FieldRef<"Award", 'String'>
    readonly educationId: FieldRef<"Award", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Award findUnique
   */
  export type AwardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award findUniqueOrThrow
   */
  export type AwardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award findFirst
   */
  export type AwardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Awards.
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Awards.
     */
    distinct?: AwardScalarFieldEnum | AwardScalarFieldEnum[]
  }

  /**
   * Award findFirstOrThrow
   */
  export type AwardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Awards.
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Awards.
     */
    distinct?: AwardScalarFieldEnum | AwardScalarFieldEnum[]
  }

  /**
   * Award findMany
   */
  export type AwardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Awards to fetch.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Awards.
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    distinct?: AwardScalarFieldEnum | AwardScalarFieldEnum[]
  }

  /**
   * Award create
   */
  export type AwardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * The data needed to create a Award.
     */
    data: XOR<AwardCreateInput, AwardUncheckedCreateInput>
  }

  /**
   * Award createMany
   */
  export type AwardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Awards.
     */
    data: AwardCreateManyInput | AwardCreateManyInput[]
  }

  /**
   * Award createManyAndReturn
   */
  export type AwardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * The data used to create many Awards.
     */
    data: AwardCreateManyInput | AwardCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Award update
   */
  export type AwardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * The data needed to update a Award.
     */
    data: XOR<AwardUpdateInput, AwardUncheckedUpdateInput>
    /**
     * Choose, which Award to update.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award updateMany
   */
  export type AwardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Awards.
     */
    data: XOR<AwardUpdateManyMutationInput, AwardUncheckedUpdateManyInput>
    /**
     * Filter which Awards to update
     */
    where?: AwardWhereInput
    /**
     * Limit how many Awards to update.
     */
    limit?: number
  }

  /**
   * Award updateManyAndReturn
   */
  export type AwardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * The data used to update Awards.
     */
    data: XOR<AwardUpdateManyMutationInput, AwardUncheckedUpdateManyInput>
    /**
     * Filter which Awards to update
     */
    where?: AwardWhereInput
    /**
     * Limit how many Awards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Award upsert
   */
  export type AwardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * The filter to search for the Award to update in case it exists.
     */
    where: AwardWhereUniqueInput
    /**
     * In case the Award found by the `where` argument doesn't exist, create a new Award with this data.
     */
    create: XOR<AwardCreateInput, AwardUncheckedCreateInput>
    /**
     * In case the Award was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AwardUpdateInput, AwardUncheckedUpdateInput>
  }

  /**
   * Award delete
   */
  export type AwardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter which Award to delete.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award deleteMany
   */
  export type AwardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Awards to delete
     */
    where?: AwardWhereInput
    /**
     * Limit how many Awards to delete.
     */
    limit?: number
  }

  /**
   * Award without action
   */
  export type AwardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
  }


  /**
   * Model RelevantCourse
   */

  export type AggregateRelevantCourse = {
    _count: RelevantCourseCountAggregateOutputType | null
    _avg: RelevantCourseAvgAggregateOutputType | null
    _sum: RelevantCourseSumAggregateOutputType | null
    _min: RelevantCourseMinAggregateOutputType | null
    _max: RelevantCourseMaxAggregateOutputType | null
  }

  export type RelevantCourseAvgAggregateOutputType = {
    id: number | null
    educationId: number | null
  }

  export type RelevantCourseSumAggregateOutputType = {
    id: number | null
    educationId: number | null
  }

  export type RelevantCourseMinAggregateOutputType = {
    id: number | null
    name: string | null
    educationId: number | null
  }

  export type RelevantCourseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    educationId: number | null
  }

  export type RelevantCourseCountAggregateOutputType = {
    id: number
    name: number
    educationId: number
    _all: number
  }


  export type RelevantCourseAvgAggregateInputType = {
    id?: true
    educationId?: true
  }

  export type RelevantCourseSumAggregateInputType = {
    id?: true
    educationId?: true
  }

  export type RelevantCourseMinAggregateInputType = {
    id?: true
    name?: true
    educationId?: true
  }

  export type RelevantCourseMaxAggregateInputType = {
    id?: true
    name?: true
    educationId?: true
  }

  export type RelevantCourseCountAggregateInputType = {
    id?: true
    name?: true
    educationId?: true
    _all?: true
  }

  export type RelevantCourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelevantCourse to aggregate.
     */
    where?: RelevantCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelevantCourses to fetch.
     */
    orderBy?: RelevantCourseOrderByWithRelationInput | RelevantCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelevantCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelevantCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelevantCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RelevantCourses
    **/
    _count?: true | RelevantCourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RelevantCourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RelevantCourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelevantCourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelevantCourseMaxAggregateInputType
  }

  export type GetRelevantCourseAggregateType<T extends RelevantCourseAggregateArgs> = {
        [P in keyof T & keyof AggregateRelevantCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelevantCourse[P]>
      : GetScalarType<T[P], AggregateRelevantCourse[P]>
  }




  export type RelevantCourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelevantCourseWhereInput
    orderBy?: RelevantCourseOrderByWithAggregationInput | RelevantCourseOrderByWithAggregationInput[]
    by: RelevantCourseScalarFieldEnum[] | RelevantCourseScalarFieldEnum
    having?: RelevantCourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelevantCourseCountAggregateInputType | true
    _avg?: RelevantCourseAvgAggregateInputType
    _sum?: RelevantCourseSumAggregateInputType
    _min?: RelevantCourseMinAggregateInputType
    _max?: RelevantCourseMaxAggregateInputType
  }

  export type RelevantCourseGroupByOutputType = {
    id: number
    name: string
    educationId: number
    _count: RelevantCourseCountAggregateOutputType | null
    _avg: RelevantCourseAvgAggregateOutputType | null
    _sum: RelevantCourseSumAggregateOutputType | null
    _min: RelevantCourseMinAggregateOutputType | null
    _max: RelevantCourseMaxAggregateOutputType | null
  }

  type GetRelevantCourseGroupByPayload<T extends RelevantCourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelevantCourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelevantCourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelevantCourseGroupByOutputType[P]>
            : GetScalarType<T[P], RelevantCourseGroupByOutputType[P]>
        }
      >
    >


  export type RelevantCourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    educationId?: boolean
    education?: boolean | EducationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relevantCourse"]>

  export type RelevantCourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    educationId?: boolean
    education?: boolean | EducationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relevantCourse"]>

  export type RelevantCourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    educationId?: boolean
    education?: boolean | EducationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relevantCourse"]>

  export type RelevantCourseSelectScalar = {
    id?: boolean
    name?: boolean
    educationId?: boolean
  }

  export type RelevantCourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "educationId", ExtArgs["result"]["relevantCourse"]>
  export type RelevantCourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    education?: boolean | EducationDefaultArgs<ExtArgs>
  }
  export type RelevantCourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    education?: boolean | EducationDefaultArgs<ExtArgs>
  }
  export type RelevantCourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    education?: boolean | EducationDefaultArgs<ExtArgs>
  }

  export type $RelevantCoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RelevantCourse"
    objects: {
      education: Prisma.$EducationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      educationId: number
    }, ExtArgs["result"]["relevantCourse"]>
    composites: {}
  }

  type RelevantCourseGetPayload<S extends boolean | null | undefined | RelevantCourseDefaultArgs> = $Result.GetResult<Prisma.$RelevantCoursePayload, S>

  type RelevantCourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RelevantCourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RelevantCourseCountAggregateInputType | true
    }

  export interface RelevantCourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RelevantCourse'], meta: { name: 'RelevantCourse' } }
    /**
     * Find zero or one RelevantCourse that matches the filter.
     * @param {RelevantCourseFindUniqueArgs} args - Arguments to find a RelevantCourse
     * @example
     * // Get one RelevantCourse
     * const relevantCourse = await prisma.relevantCourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelevantCourseFindUniqueArgs>(args: SelectSubset<T, RelevantCourseFindUniqueArgs<ExtArgs>>): Prisma__RelevantCourseClient<$Result.GetResult<Prisma.$RelevantCoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RelevantCourse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RelevantCourseFindUniqueOrThrowArgs} args - Arguments to find a RelevantCourse
     * @example
     * // Get one RelevantCourse
     * const relevantCourse = await prisma.relevantCourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelevantCourseFindUniqueOrThrowArgs>(args: SelectSubset<T, RelevantCourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RelevantCourseClient<$Result.GetResult<Prisma.$RelevantCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RelevantCourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelevantCourseFindFirstArgs} args - Arguments to find a RelevantCourse
     * @example
     * // Get one RelevantCourse
     * const relevantCourse = await prisma.relevantCourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelevantCourseFindFirstArgs>(args?: SelectSubset<T, RelevantCourseFindFirstArgs<ExtArgs>>): Prisma__RelevantCourseClient<$Result.GetResult<Prisma.$RelevantCoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RelevantCourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelevantCourseFindFirstOrThrowArgs} args - Arguments to find a RelevantCourse
     * @example
     * // Get one RelevantCourse
     * const relevantCourse = await prisma.relevantCourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelevantCourseFindFirstOrThrowArgs>(args?: SelectSubset<T, RelevantCourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__RelevantCourseClient<$Result.GetResult<Prisma.$RelevantCoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RelevantCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelevantCourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RelevantCourses
     * const relevantCourses = await prisma.relevantCourse.findMany()
     * 
     * // Get first 10 RelevantCourses
     * const relevantCourses = await prisma.relevantCourse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relevantCourseWithIdOnly = await prisma.relevantCourse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RelevantCourseFindManyArgs>(args?: SelectSubset<T, RelevantCourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelevantCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RelevantCourse.
     * @param {RelevantCourseCreateArgs} args - Arguments to create a RelevantCourse.
     * @example
     * // Create one RelevantCourse
     * const RelevantCourse = await prisma.relevantCourse.create({
     *   data: {
     *     // ... data to create a RelevantCourse
     *   }
     * })
     * 
     */
    create<T extends RelevantCourseCreateArgs>(args: SelectSubset<T, RelevantCourseCreateArgs<ExtArgs>>): Prisma__RelevantCourseClient<$Result.GetResult<Prisma.$RelevantCoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RelevantCourses.
     * @param {RelevantCourseCreateManyArgs} args - Arguments to create many RelevantCourses.
     * @example
     * // Create many RelevantCourses
     * const relevantCourse = await prisma.relevantCourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RelevantCourseCreateManyArgs>(args?: SelectSubset<T, RelevantCourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RelevantCourses and returns the data saved in the database.
     * @param {RelevantCourseCreateManyAndReturnArgs} args - Arguments to create many RelevantCourses.
     * @example
     * // Create many RelevantCourses
     * const relevantCourse = await prisma.relevantCourse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RelevantCourses and only return the `id`
     * const relevantCourseWithIdOnly = await prisma.relevantCourse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RelevantCourseCreateManyAndReturnArgs>(args?: SelectSubset<T, RelevantCourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelevantCoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RelevantCourse.
     * @param {RelevantCourseDeleteArgs} args - Arguments to delete one RelevantCourse.
     * @example
     * // Delete one RelevantCourse
     * const RelevantCourse = await prisma.relevantCourse.delete({
     *   where: {
     *     // ... filter to delete one RelevantCourse
     *   }
     * })
     * 
     */
    delete<T extends RelevantCourseDeleteArgs>(args: SelectSubset<T, RelevantCourseDeleteArgs<ExtArgs>>): Prisma__RelevantCourseClient<$Result.GetResult<Prisma.$RelevantCoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RelevantCourse.
     * @param {RelevantCourseUpdateArgs} args - Arguments to update one RelevantCourse.
     * @example
     * // Update one RelevantCourse
     * const relevantCourse = await prisma.relevantCourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RelevantCourseUpdateArgs>(args: SelectSubset<T, RelevantCourseUpdateArgs<ExtArgs>>): Prisma__RelevantCourseClient<$Result.GetResult<Prisma.$RelevantCoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RelevantCourses.
     * @param {RelevantCourseDeleteManyArgs} args - Arguments to filter RelevantCourses to delete.
     * @example
     * // Delete a few RelevantCourses
     * const { count } = await prisma.relevantCourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RelevantCourseDeleteManyArgs>(args?: SelectSubset<T, RelevantCourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelevantCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelevantCourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RelevantCourses
     * const relevantCourse = await prisma.relevantCourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RelevantCourseUpdateManyArgs>(args: SelectSubset<T, RelevantCourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelevantCourses and returns the data updated in the database.
     * @param {RelevantCourseUpdateManyAndReturnArgs} args - Arguments to update many RelevantCourses.
     * @example
     * // Update many RelevantCourses
     * const relevantCourse = await prisma.relevantCourse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RelevantCourses and only return the `id`
     * const relevantCourseWithIdOnly = await prisma.relevantCourse.updateManyAndReturn({
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
    updateManyAndReturn<T extends RelevantCourseUpdateManyAndReturnArgs>(args: SelectSubset<T, RelevantCourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelevantCoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RelevantCourse.
     * @param {RelevantCourseUpsertArgs} args - Arguments to update or create a RelevantCourse.
     * @example
     * // Update or create a RelevantCourse
     * const relevantCourse = await prisma.relevantCourse.upsert({
     *   create: {
     *     // ... data to create a RelevantCourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RelevantCourse we want to update
     *   }
     * })
     */
    upsert<T extends RelevantCourseUpsertArgs>(args: SelectSubset<T, RelevantCourseUpsertArgs<ExtArgs>>): Prisma__RelevantCourseClient<$Result.GetResult<Prisma.$RelevantCoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RelevantCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelevantCourseCountArgs} args - Arguments to filter RelevantCourses to count.
     * @example
     * // Count the number of RelevantCourses
     * const count = await prisma.relevantCourse.count({
     *   where: {
     *     // ... the filter for the RelevantCourses we want to count
     *   }
     * })
    **/
    count<T extends RelevantCourseCountArgs>(
      args?: Subset<T, RelevantCourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelevantCourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RelevantCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelevantCourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RelevantCourseAggregateArgs>(args: Subset<T, RelevantCourseAggregateArgs>): Prisma.PrismaPromise<GetRelevantCourseAggregateType<T>>

    /**
     * Group by RelevantCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelevantCourseGroupByArgs} args - Group by arguments.
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
      T extends RelevantCourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelevantCourseGroupByArgs['orderBy'] }
        : { orderBy?: RelevantCourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RelevantCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelevantCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RelevantCourse model
   */
  readonly fields: RelevantCourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RelevantCourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelevantCourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    education<T extends EducationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EducationDefaultArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RelevantCourse model
   */
  interface RelevantCourseFieldRefs {
    readonly id: FieldRef<"RelevantCourse", 'Int'>
    readonly name: FieldRef<"RelevantCourse", 'String'>
    readonly educationId: FieldRef<"RelevantCourse", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RelevantCourse findUnique
   */
  export type RelevantCourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelevantCourse
     */
    select?: RelevantCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelevantCourse
     */
    omit?: RelevantCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelevantCourseInclude<ExtArgs> | null
    /**
     * Filter, which RelevantCourse to fetch.
     */
    where: RelevantCourseWhereUniqueInput
  }

  /**
   * RelevantCourse findUniqueOrThrow
   */
  export type RelevantCourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelevantCourse
     */
    select?: RelevantCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelevantCourse
     */
    omit?: RelevantCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelevantCourseInclude<ExtArgs> | null
    /**
     * Filter, which RelevantCourse to fetch.
     */
    where: RelevantCourseWhereUniqueInput
  }

  /**
   * RelevantCourse findFirst
   */
  export type RelevantCourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelevantCourse
     */
    select?: RelevantCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelevantCourse
     */
    omit?: RelevantCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelevantCourseInclude<ExtArgs> | null
    /**
     * Filter, which RelevantCourse to fetch.
     */
    where?: RelevantCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelevantCourses to fetch.
     */
    orderBy?: RelevantCourseOrderByWithRelationInput | RelevantCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelevantCourses.
     */
    cursor?: RelevantCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelevantCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelevantCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelevantCourses.
     */
    distinct?: RelevantCourseScalarFieldEnum | RelevantCourseScalarFieldEnum[]
  }

  /**
   * RelevantCourse findFirstOrThrow
   */
  export type RelevantCourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelevantCourse
     */
    select?: RelevantCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelevantCourse
     */
    omit?: RelevantCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelevantCourseInclude<ExtArgs> | null
    /**
     * Filter, which RelevantCourse to fetch.
     */
    where?: RelevantCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelevantCourses to fetch.
     */
    orderBy?: RelevantCourseOrderByWithRelationInput | RelevantCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelevantCourses.
     */
    cursor?: RelevantCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelevantCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelevantCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelevantCourses.
     */
    distinct?: RelevantCourseScalarFieldEnum | RelevantCourseScalarFieldEnum[]
  }

  /**
   * RelevantCourse findMany
   */
  export type RelevantCourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelevantCourse
     */
    select?: RelevantCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelevantCourse
     */
    omit?: RelevantCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelevantCourseInclude<ExtArgs> | null
    /**
     * Filter, which RelevantCourses to fetch.
     */
    where?: RelevantCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelevantCourses to fetch.
     */
    orderBy?: RelevantCourseOrderByWithRelationInput | RelevantCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RelevantCourses.
     */
    cursor?: RelevantCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelevantCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelevantCourses.
     */
    skip?: number
    distinct?: RelevantCourseScalarFieldEnum | RelevantCourseScalarFieldEnum[]
  }

  /**
   * RelevantCourse create
   */
  export type RelevantCourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelevantCourse
     */
    select?: RelevantCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelevantCourse
     */
    omit?: RelevantCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelevantCourseInclude<ExtArgs> | null
    /**
     * The data needed to create a RelevantCourse.
     */
    data: XOR<RelevantCourseCreateInput, RelevantCourseUncheckedCreateInput>
  }

  /**
   * RelevantCourse createMany
   */
  export type RelevantCourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RelevantCourses.
     */
    data: RelevantCourseCreateManyInput | RelevantCourseCreateManyInput[]
  }

  /**
   * RelevantCourse createManyAndReturn
   */
  export type RelevantCourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelevantCourse
     */
    select?: RelevantCourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RelevantCourse
     */
    omit?: RelevantCourseOmit<ExtArgs> | null
    /**
     * The data used to create many RelevantCourses.
     */
    data: RelevantCourseCreateManyInput | RelevantCourseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelevantCourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RelevantCourse update
   */
  export type RelevantCourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelevantCourse
     */
    select?: RelevantCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelevantCourse
     */
    omit?: RelevantCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelevantCourseInclude<ExtArgs> | null
    /**
     * The data needed to update a RelevantCourse.
     */
    data: XOR<RelevantCourseUpdateInput, RelevantCourseUncheckedUpdateInput>
    /**
     * Choose, which RelevantCourse to update.
     */
    where: RelevantCourseWhereUniqueInput
  }

  /**
   * RelevantCourse updateMany
   */
  export type RelevantCourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RelevantCourses.
     */
    data: XOR<RelevantCourseUpdateManyMutationInput, RelevantCourseUncheckedUpdateManyInput>
    /**
     * Filter which RelevantCourses to update
     */
    where?: RelevantCourseWhereInput
    /**
     * Limit how many RelevantCourses to update.
     */
    limit?: number
  }

  /**
   * RelevantCourse updateManyAndReturn
   */
  export type RelevantCourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelevantCourse
     */
    select?: RelevantCourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RelevantCourse
     */
    omit?: RelevantCourseOmit<ExtArgs> | null
    /**
     * The data used to update RelevantCourses.
     */
    data: XOR<RelevantCourseUpdateManyMutationInput, RelevantCourseUncheckedUpdateManyInput>
    /**
     * Filter which RelevantCourses to update
     */
    where?: RelevantCourseWhereInput
    /**
     * Limit how many RelevantCourses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelevantCourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RelevantCourse upsert
   */
  export type RelevantCourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelevantCourse
     */
    select?: RelevantCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelevantCourse
     */
    omit?: RelevantCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelevantCourseInclude<ExtArgs> | null
    /**
     * The filter to search for the RelevantCourse to update in case it exists.
     */
    where: RelevantCourseWhereUniqueInput
    /**
     * In case the RelevantCourse found by the `where` argument doesn't exist, create a new RelevantCourse with this data.
     */
    create: XOR<RelevantCourseCreateInput, RelevantCourseUncheckedCreateInput>
    /**
     * In case the RelevantCourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelevantCourseUpdateInput, RelevantCourseUncheckedUpdateInput>
  }

  /**
   * RelevantCourse delete
   */
  export type RelevantCourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelevantCourse
     */
    select?: RelevantCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelevantCourse
     */
    omit?: RelevantCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelevantCourseInclude<ExtArgs> | null
    /**
     * Filter which RelevantCourse to delete.
     */
    where: RelevantCourseWhereUniqueInput
  }

  /**
   * RelevantCourse deleteMany
   */
  export type RelevantCourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelevantCourses to delete
     */
    where?: RelevantCourseWhereInput
    /**
     * Limit how many RelevantCourses to delete.
     */
    limit?: number
  }

  /**
   * RelevantCourse without action
   */
  export type RelevantCourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelevantCourse
     */
    select?: RelevantCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelevantCourse
     */
    omit?: RelevantCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelevantCourseInclude<ExtArgs> | null
  }


  /**
   * Model Experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceAvgAggregateOutputType = {
    id: number | null
  }

  export type ExperienceSumAggregateOutputType = {
    id: number | null
  }

  export type ExperienceMinAggregateOutputType = {
    id: number | null
    title: string | null
    company: string | null
    location: string | null
    startDate: string | null
    endDate: string | null
  }

  export type ExperienceMaxAggregateOutputType = {
    id: number | null
    title: string | null
    company: string | null
    location: string | null
    startDate: string | null
    endDate: string | null
  }

  export type ExperienceCountAggregateOutputType = {
    id: number
    title: number
    company: number
    location: number
    startDate: number
    endDate: number
    _all: number
  }


  export type ExperienceAvgAggregateInputType = {
    id?: true
  }

  export type ExperienceSumAggregateInputType = {
    id?: true
  }

  export type ExperienceMinAggregateInputType = {
    id?: true
    title?: true
    company?: true
    location?: true
    startDate?: true
    endDate?: true
  }

  export type ExperienceMaxAggregateInputType = {
    id?: true
    title?: true
    company?: true
    location?: true
    startDate?: true
    endDate?: true
  }

  export type ExperienceCountAggregateInputType = {
    id?: true
    title?: true
    company?: true
    location?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experience to aggregate.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type ExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithAggregationInput | ExperienceOrderByWithAggregationInput[]
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: ExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _avg?: ExperienceAvgAggregateInputType
    _sum?: ExperienceSumAggregateInputType
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    id: number
    title: string
    company: string
    location: string
    startDate: string
    endDate: string
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends ExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    projects?: boolean | Experience$projectsArgs<ExtArgs>
    _count?: boolean | ExperienceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectScalar = {
    id?: boolean
    title?: boolean
    company?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
  }

  export type ExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "company" | "location" | "startDate" | "endDate", ExtArgs["result"]["experience"]>
  export type ExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | Experience$projectsArgs<ExtArgs>
    _count?: boolean | ExperienceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExperienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Experience"
    objects: {
      projects: Prisma.$ExperienceProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      company: string
      location: string
      startDate: string
      endDate: string
    }, ExtArgs["result"]["experience"]>
    composites: {}
  }

  type ExperienceGetPayload<S extends boolean | null | undefined | ExperienceDefaultArgs> = $Result.GetResult<Prisma.$ExperiencePayload, S>

  type ExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface ExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experience'], meta: { name: 'Experience' } }
    /**
     * Find zero or one Experience that matches the filter.
     * @param {ExperienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceFindUniqueArgs>(args: SelectSubset<T, ExperienceFindUniqueArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Experience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceFindFirstArgs>(args?: SelectSubset<T, ExperienceFindFirstArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienceFindManyArgs>(args?: SelectSubset<T, ExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Experience.
     * @param {ExperienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
     */
    create<T extends ExperienceCreateArgs>(args: SelectSubset<T, ExperienceCreateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Experiences.
     * @param {ExperienceCreateManyArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienceCreateManyArgs>(args?: SelectSubset<T, ExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Experiences and returns the data saved in the database.
     * @param {ExperienceCreateManyAndReturnArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, ExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Experience.
     * @param {ExperienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
     */
    delete<T extends ExperienceDeleteArgs>(args: SelectSubset<T, ExperienceDeleteArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Experience.
     * @param {ExperienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienceUpdateArgs>(args: SelectSubset<T, ExperienceUpdateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Experiences.
     * @param {ExperienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienceDeleteManyArgs>(args?: SelectSubset<T, ExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienceUpdateManyArgs>(args: SelectSubset<T, ExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences and returns the data updated in the database.
     * @param {ExperienceUpdateManyAndReturnArgs} args - Arguments to update many Experiences.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, ExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Experience.
     * @param {ExperienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceUpsertArgs>(args: SelectSubset<T, ExperienceUpsertArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends ExperienceCountArgs>(
      args?: Subset<T, ExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceGroupByArgs} args - Group by arguments.
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
      T extends ExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experience model
   */
  readonly fields: ExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends Experience$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Experience$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienceProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Experience model
   */
  interface ExperienceFieldRefs {
    readonly id: FieldRef<"Experience", 'Int'>
    readonly title: FieldRef<"Experience", 'String'>
    readonly company: FieldRef<"Experience", 'String'>
    readonly location: FieldRef<"Experience", 'String'>
    readonly startDate: FieldRef<"Experience", 'String'>
    readonly endDate: FieldRef<"Experience", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Experience findUnique
   */
  export type ExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findUniqueOrThrow
   */
  export type ExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findFirst
   */
  export type ExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findFirstOrThrow
   */
  export type ExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findMany
   */
  export type ExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience create
   */
  export type ExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a Experience.
     */
    data: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
  }

  /**
   * Experience createMany
   */
  export type ExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
  }

  /**
   * Experience createManyAndReturn
   */
  export type ExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
  }

  /**
   * Experience update
   */
  export type ExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a Experience.
     */
    data: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
    /**
     * Choose, which Experience to update.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience updateMany
   */
  export type ExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
  }

  /**
   * Experience updateManyAndReturn
   */
  export type ExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
  }

  /**
   * Experience upsert
   */
  export type ExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the Experience to update in case it exists.
     */
    where: ExperienceWhereUniqueInput
    /**
     * In case the Experience found by the `where` argument doesn't exist, create a new Experience with this data.
     */
    create: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
    /**
     * In case the Experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
  }

  /**
   * Experience delete
   */
  export type ExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter which Experience to delete.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience deleteMany
   */
  export type ExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiences to delete
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to delete.
     */
    limit?: number
  }

  /**
   * Experience.projects
   */
  export type Experience$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProject
     */
    select?: ExperienceProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProject
     */
    omit?: ExperienceProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectInclude<ExtArgs> | null
    where?: ExperienceProjectWhereInput
    orderBy?: ExperienceProjectOrderByWithRelationInput | ExperienceProjectOrderByWithRelationInput[]
    cursor?: ExperienceProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienceProjectScalarFieldEnum | ExperienceProjectScalarFieldEnum[]
  }

  /**
   * Experience without action
   */
  export type ExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
  }


  /**
   * Model ExperienceProject
   */

  export type AggregateExperienceProject = {
    _count: ExperienceProjectCountAggregateOutputType | null
    _avg: ExperienceProjectAvgAggregateOutputType | null
    _sum: ExperienceProjectSumAggregateOutputType | null
    _min: ExperienceProjectMinAggregateOutputType | null
    _max: ExperienceProjectMaxAggregateOutputType | null
  }

  export type ExperienceProjectAvgAggregateOutputType = {
    id: number | null
    experienceId: number | null
  }

  export type ExperienceProjectSumAggregateOutputType = {
    id: number | null
    experienceId: number | null
  }

  export type ExperienceProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    experienceId: number | null
  }

  export type ExperienceProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    experienceId: number | null
  }

  export type ExperienceProjectCountAggregateOutputType = {
    id: number
    name: number
    experienceId: number
    _all: number
  }


  export type ExperienceProjectAvgAggregateInputType = {
    id?: true
    experienceId?: true
  }

  export type ExperienceProjectSumAggregateInputType = {
    id?: true
    experienceId?: true
  }

  export type ExperienceProjectMinAggregateInputType = {
    id?: true
    name?: true
    experienceId?: true
  }

  export type ExperienceProjectMaxAggregateInputType = {
    id?: true
    name?: true
    experienceId?: true
  }

  export type ExperienceProjectCountAggregateInputType = {
    id?: true
    name?: true
    experienceId?: true
    _all?: true
  }

  export type ExperienceProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExperienceProject to aggregate.
     */
    where?: ExperienceProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienceProjects to fetch.
     */
    orderBy?: ExperienceProjectOrderByWithRelationInput | ExperienceProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienceProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienceProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExperienceProjects
    **/
    _count?: true | ExperienceProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienceProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienceProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceProjectMaxAggregateInputType
  }

  export type GetExperienceProjectAggregateType<T extends ExperienceProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateExperienceProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperienceProject[P]>
      : GetScalarType<T[P], AggregateExperienceProject[P]>
  }




  export type ExperienceProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceProjectWhereInput
    orderBy?: ExperienceProjectOrderByWithAggregationInput | ExperienceProjectOrderByWithAggregationInput[]
    by: ExperienceProjectScalarFieldEnum[] | ExperienceProjectScalarFieldEnum
    having?: ExperienceProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceProjectCountAggregateInputType | true
    _avg?: ExperienceProjectAvgAggregateInputType
    _sum?: ExperienceProjectSumAggregateInputType
    _min?: ExperienceProjectMinAggregateInputType
    _max?: ExperienceProjectMaxAggregateInputType
  }

  export type ExperienceProjectGroupByOutputType = {
    id: number
    name: string
    experienceId: number
    _count: ExperienceProjectCountAggregateOutputType | null
    _avg: ExperienceProjectAvgAggregateOutputType | null
    _sum: ExperienceProjectSumAggregateOutputType | null
    _min: ExperienceProjectMinAggregateOutputType | null
    _max: ExperienceProjectMaxAggregateOutputType | null
  }

  type GetExperienceProjectGroupByPayload<T extends ExperienceProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceProjectGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    experienceId?: boolean
    experience?: boolean | ExperienceDefaultArgs<ExtArgs>
    technologies?: boolean | ExperienceProject$technologiesArgs<ExtArgs>
    bullets?: boolean | ExperienceProject$bulletsArgs<ExtArgs>
    _count?: boolean | ExperienceProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experienceProject"]>

  export type ExperienceProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    experienceId?: boolean
    experience?: boolean | ExperienceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experienceProject"]>

  export type ExperienceProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    experienceId?: boolean
    experience?: boolean | ExperienceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experienceProject"]>

  export type ExperienceProjectSelectScalar = {
    id?: boolean
    name?: boolean
    experienceId?: boolean
  }

  export type ExperienceProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "experienceId", ExtArgs["result"]["experienceProject"]>
  export type ExperienceProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experience?: boolean | ExperienceDefaultArgs<ExtArgs>
    technologies?: boolean | ExperienceProject$technologiesArgs<ExtArgs>
    bullets?: boolean | ExperienceProject$bulletsArgs<ExtArgs>
    _count?: boolean | ExperienceProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExperienceProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experience?: boolean | ExperienceDefaultArgs<ExtArgs>
  }
  export type ExperienceProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experience?: boolean | ExperienceDefaultArgs<ExtArgs>
  }

  export type $ExperienceProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExperienceProject"
    objects: {
      experience: Prisma.$ExperiencePayload<ExtArgs>
      technologies: Prisma.$ProjectTechnologyPayload<ExtArgs>[]
      bullets: Prisma.$ExperienceProjectBulletPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      experienceId: number
    }, ExtArgs["result"]["experienceProject"]>
    composites: {}
  }

  type ExperienceProjectGetPayload<S extends boolean | null | undefined | ExperienceProjectDefaultArgs> = $Result.GetResult<Prisma.$ExperienceProjectPayload, S>

  type ExperienceProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperienceProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceProjectCountAggregateInputType | true
    }

  export interface ExperienceProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExperienceProject'], meta: { name: 'ExperienceProject' } }
    /**
     * Find zero or one ExperienceProject that matches the filter.
     * @param {ExperienceProjectFindUniqueArgs} args - Arguments to find a ExperienceProject
     * @example
     * // Get one ExperienceProject
     * const experienceProject = await prisma.experienceProject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceProjectFindUniqueArgs>(args: SelectSubset<T, ExperienceProjectFindUniqueArgs<ExtArgs>>): Prisma__ExperienceProjectClient<$Result.GetResult<Prisma.$ExperienceProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExperienceProject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienceProjectFindUniqueOrThrowArgs} args - Arguments to find a ExperienceProject
     * @example
     * // Get one ExperienceProject
     * const experienceProject = await prisma.experienceProject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienceProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienceProjectClient<$Result.GetResult<Prisma.$ExperienceProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExperienceProject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceProjectFindFirstArgs} args - Arguments to find a ExperienceProject
     * @example
     * // Get one ExperienceProject
     * const experienceProject = await prisma.experienceProject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceProjectFindFirstArgs>(args?: SelectSubset<T, ExperienceProjectFindFirstArgs<ExtArgs>>): Prisma__ExperienceProjectClient<$Result.GetResult<Prisma.$ExperienceProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExperienceProject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceProjectFindFirstOrThrowArgs} args - Arguments to find a ExperienceProject
     * @example
     * // Get one ExperienceProject
     * const experienceProject = await prisma.experienceProject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienceProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienceProjectClient<$Result.GetResult<Prisma.$ExperienceProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExperienceProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExperienceProjects
     * const experienceProjects = await prisma.experienceProject.findMany()
     * 
     * // Get first 10 ExperienceProjects
     * const experienceProjects = await prisma.experienceProject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceProjectWithIdOnly = await prisma.experienceProject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienceProjectFindManyArgs>(args?: SelectSubset<T, ExperienceProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienceProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExperienceProject.
     * @param {ExperienceProjectCreateArgs} args - Arguments to create a ExperienceProject.
     * @example
     * // Create one ExperienceProject
     * const ExperienceProject = await prisma.experienceProject.create({
     *   data: {
     *     // ... data to create a ExperienceProject
     *   }
     * })
     * 
     */
    create<T extends ExperienceProjectCreateArgs>(args: SelectSubset<T, ExperienceProjectCreateArgs<ExtArgs>>): Prisma__ExperienceProjectClient<$Result.GetResult<Prisma.$ExperienceProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExperienceProjects.
     * @param {ExperienceProjectCreateManyArgs} args - Arguments to create many ExperienceProjects.
     * @example
     * // Create many ExperienceProjects
     * const experienceProject = await prisma.experienceProject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienceProjectCreateManyArgs>(args?: SelectSubset<T, ExperienceProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExperienceProjects and returns the data saved in the database.
     * @param {ExperienceProjectCreateManyAndReturnArgs} args - Arguments to create many ExperienceProjects.
     * @example
     * // Create many ExperienceProjects
     * const experienceProject = await prisma.experienceProject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExperienceProjects and only return the `id`
     * const experienceProjectWithIdOnly = await prisma.experienceProject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExperienceProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ExperienceProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienceProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExperienceProject.
     * @param {ExperienceProjectDeleteArgs} args - Arguments to delete one ExperienceProject.
     * @example
     * // Delete one ExperienceProject
     * const ExperienceProject = await prisma.experienceProject.delete({
     *   where: {
     *     // ... filter to delete one ExperienceProject
     *   }
     * })
     * 
     */
    delete<T extends ExperienceProjectDeleteArgs>(args: SelectSubset<T, ExperienceProjectDeleteArgs<ExtArgs>>): Prisma__ExperienceProjectClient<$Result.GetResult<Prisma.$ExperienceProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExperienceProject.
     * @param {ExperienceProjectUpdateArgs} args - Arguments to update one ExperienceProject.
     * @example
     * // Update one ExperienceProject
     * const experienceProject = await prisma.experienceProject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienceProjectUpdateArgs>(args: SelectSubset<T, ExperienceProjectUpdateArgs<ExtArgs>>): Prisma__ExperienceProjectClient<$Result.GetResult<Prisma.$ExperienceProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExperienceProjects.
     * @param {ExperienceProjectDeleteManyArgs} args - Arguments to filter ExperienceProjects to delete.
     * @example
     * // Delete a few ExperienceProjects
     * const { count } = await prisma.experienceProject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienceProjectDeleteManyArgs>(args?: SelectSubset<T, ExperienceProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExperienceProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExperienceProjects
     * const experienceProject = await prisma.experienceProject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienceProjectUpdateManyArgs>(args: SelectSubset<T, ExperienceProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExperienceProjects and returns the data updated in the database.
     * @param {ExperienceProjectUpdateManyAndReturnArgs} args - Arguments to update many ExperienceProjects.
     * @example
     * // Update many ExperienceProjects
     * const experienceProject = await prisma.experienceProject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExperienceProjects and only return the `id`
     * const experienceProjectWithIdOnly = await prisma.experienceProject.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExperienceProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ExperienceProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienceProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExperienceProject.
     * @param {ExperienceProjectUpsertArgs} args - Arguments to update or create a ExperienceProject.
     * @example
     * // Update or create a ExperienceProject
     * const experienceProject = await prisma.experienceProject.upsert({
     *   create: {
     *     // ... data to create a ExperienceProject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExperienceProject we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceProjectUpsertArgs>(args: SelectSubset<T, ExperienceProjectUpsertArgs<ExtArgs>>): Prisma__ExperienceProjectClient<$Result.GetResult<Prisma.$ExperienceProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExperienceProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceProjectCountArgs} args - Arguments to filter ExperienceProjects to count.
     * @example
     * // Count the number of ExperienceProjects
     * const count = await prisma.experienceProject.count({
     *   where: {
     *     // ... the filter for the ExperienceProjects we want to count
     *   }
     * })
    **/
    count<T extends ExperienceProjectCountArgs>(
      args?: Subset<T, ExperienceProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExperienceProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExperienceProjectAggregateArgs>(args: Subset<T, ExperienceProjectAggregateArgs>): Prisma.PrismaPromise<GetExperienceProjectAggregateType<T>>

    /**
     * Group by ExperienceProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceProjectGroupByArgs} args - Group by arguments.
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
      T extends ExperienceProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceProjectGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExperienceProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExperienceProject model
   */
  readonly fields: ExperienceProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExperienceProject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    experience<T extends ExperienceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExperienceDefaultArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    technologies<T extends ExperienceProject$technologiesArgs<ExtArgs> = {}>(args?: Subset<T, ExperienceProject$technologiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bullets<T extends ExperienceProject$bulletsArgs<ExtArgs> = {}>(args?: Subset<T, ExperienceProject$bulletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienceProjectBulletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ExperienceProject model
   */
  interface ExperienceProjectFieldRefs {
    readonly id: FieldRef<"ExperienceProject", 'Int'>
    readonly name: FieldRef<"ExperienceProject", 'String'>
    readonly experienceId: FieldRef<"ExperienceProject", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ExperienceProject findUnique
   */
  export type ExperienceProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProject
     */
    select?: ExperienceProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProject
     */
    omit?: ExperienceProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceProject to fetch.
     */
    where: ExperienceProjectWhereUniqueInput
  }

  /**
   * ExperienceProject findUniqueOrThrow
   */
  export type ExperienceProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProject
     */
    select?: ExperienceProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProject
     */
    omit?: ExperienceProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceProject to fetch.
     */
    where: ExperienceProjectWhereUniqueInput
  }

  /**
   * ExperienceProject findFirst
   */
  export type ExperienceProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProject
     */
    select?: ExperienceProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProject
     */
    omit?: ExperienceProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceProject to fetch.
     */
    where?: ExperienceProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienceProjects to fetch.
     */
    orderBy?: ExperienceProjectOrderByWithRelationInput | ExperienceProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExperienceProjects.
     */
    cursor?: ExperienceProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienceProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienceProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExperienceProjects.
     */
    distinct?: ExperienceProjectScalarFieldEnum | ExperienceProjectScalarFieldEnum[]
  }

  /**
   * ExperienceProject findFirstOrThrow
   */
  export type ExperienceProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProject
     */
    select?: ExperienceProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProject
     */
    omit?: ExperienceProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceProject to fetch.
     */
    where?: ExperienceProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienceProjects to fetch.
     */
    orderBy?: ExperienceProjectOrderByWithRelationInput | ExperienceProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExperienceProjects.
     */
    cursor?: ExperienceProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienceProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienceProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExperienceProjects.
     */
    distinct?: ExperienceProjectScalarFieldEnum | ExperienceProjectScalarFieldEnum[]
  }

  /**
   * ExperienceProject findMany
   */
  export type ExperienceProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProject
     */
    select?: ExperienceProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProject
     */
    omit?: ExperienceProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceProjects to fetch.
     */
    where?: ExperienceProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienceProjects to fetch.
     */
    orderBy?: ExperienceProjectOrderByWithRelationInput | ExperienceProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExperienceProjects.
     */
    cursor?: ExperienceProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienceProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienceProjects.
     */
    skip?: number
    distinct?: ExperienceProjectScalarFieldEnum | ExperienceProjectScalarFieldEnum[]
  }

  /**
   * ExperienceProject create
   */
  export type ExperienceProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProject
     */
    select?: ExperienceProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProject
     */
    omit?: ExperienceProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a ExperienceProject.
     */
    data: XOR<ExperienceProjectCreateInput, ExperienceProjectUncheckedCreateInput>
  }

  /**
   * ExperienceProject createMany
   */
  export type ExperienceProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExperienceProjects.
     */
    data: ExperienceProjectCreateManyInput | ExperienceProjectCreateManyInput[]
  }

  /**
   * ExperienceProject createManyAndReturn
   */
  export type ExperienceProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProject
     */
    select?: ExperienceProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProject
     */
    omit?: ExperienceProjectOmit<ExtArgs> | null
    /**
     * The data used to create many ExperienceProjects.
     */
    data: ExperienceProjectCreateManyInput | ExperienceProjectCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExperienceProject update
   */
  export type ExperienceProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProject
     */
    select?: ExperienceProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProject
     */
    omit?: ExperienceProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a ExperienceProject.
     */
    data: XOR<ExperienceProjectUpdateInput, ExperienceProjectUncheckedUpdateInput>
    /**
     * Choose, which ExperienceProject to update.
     */
    where: ExperienceProjectWhereUniqueInput
  }

  /**
   * ExperienceProject updateMany
   */
  export type ExperienceProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExperienceProjects.
     */
    data: XOR<ExperienceProjectUpdateManyMutationInput, ExperienceProjectUncheckedUpdateManyInput>
    /**
     * Filter which ExperienceProjects to update
     */
    where?: ExperienceProjectWhereInput
    /**
     * Limit how many ExperienceProjects to update.
     */
    limit?: number
  }

  /**
   * ExperienceProject updateManyAndReturn
   */
  export type ExperienceProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProject
     */
    select?: ExperienceProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProject
     */
    omit?: ExperienceProjectOmit<ExtArgs> | null
    /**
     * The data used to update ExperienceProjects.
     */
    data: XOR<ExperienceProjectUpdateManyMutationInput, ExperienceProjectUncheckedUpdateManyInput>
    /**
     * Filter which ExperienceProjects to update
     */
    where?: ExperienceProjectWhereInput
    /**
     * Limit how many ExperienceProjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExperienceProject upsert
   */
  export type ExperienceProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProject
     */
    select?: ExperienceProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProject
     */
    omit?: ExperienceProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the ExperienceProject to update in case it exists.
     */
    where: ExperienceProjectWhereUniqueInput
    /**
     * In case the ExperienceProject found by the `where` argument doesn't exist, create a new ExperienceProject with this data.
     */
    create: XOR<ExperienceProjectCreateInput, ExperienceProjectUncheckedCreateInput>
    /**
     * In case the ExperienceProject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceProjectUpdateInput, ExperienceProjectUncheckedUpdateInput>
  }

  /**
   * ExperienceProject delete
   */
  export type ExperienceProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProject
     */
    select?: ExperienceProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProject
     */
    omit?: ExperienceProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectInclude<ExtArgs> | null
    /**
     * Filter which ExperienceProject to delete.
     */
    where: ExperienceProjectWhereUniqueInput
  }

  /**
   * ExperienceProject deleteMany
   */
  export type ExperienceProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExperienceProjects to delete
     */
    where?: ExperienceProjectWhereInput
    /**
     * Limit how many ExperienceProjects to delete.
     */
    limit?: number
  }

  /**
   * ExperienceProject.technologies
   */
  export type ExperienceProject$technologiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    where?: ProjectTechnologyWhereInput
    orderBy?: ProjectTechnologyOrderByWithRelationInput | ProjectTechnologyOrderByWithRelationInput[]
    cursor?: ProjectTechnologyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectTechnologyScalarFieldEnum | ProjectTechnologyScalarFieldEnum[]
  }

  /**
   * ExperienceProject.bullets
   */
  export type ExperienceProject$bulletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProjectBullet
     */
    select?: ExperienceProjectBulletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProjectBullet
     */
    omit?: ExperienceProjectBulletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectBulletInclude<ExtArgs> | null
    where?: ExperienceProjectBulletWhereInput
    orderBy?: ExperienceProjectBulletOrderByWithRelationInput | ExperienceProjectBulletOrderByWithRelationInput[]
    cursor?: ExperienceProjectBulletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienceProjectBulletScalarFieldEnum | ExperienceProjectBulletScalarFieldEnum[]
  }

  /**
   * ExperienceProject without action
   */
  export type ExperienceProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProject
     */
    select?: ExperienceProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProject
     */
    omit?: ExperienceProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectTechnology
   */

  export type AggregateProjectTechnology = {
    _count: ProjectTechnologyCountAggregateOutputType | null
    _avg: ProjectTechnologyAvgAggregateOutputType | null
    _sum: ProjectTechnologySumAggregateOutputType | null
    _min: ProjectTechnologyMinAggregateOutputType | null
    _max: ProjectTechnologyMaxAggregateOutputType | null
  }

  export type ProjectTechnologyAvgAggregateOutputType = {
    id: number | null
    experienceProjectId: number | null
  }

  export type ProjectTechnologySumAggregateOutputType = {
    id: number | null
    experienceProjectId: number | null
  }

  export type ProjectTechnologyMinAggregateOutputType = {
    id: number | null
    name: string | null
    experienceProjectId: number | null
  }

  export type ProjectTechnologyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    experienceProjectId: number | null
  }

  export type ProjectTechnologyCountAggregateOutputType = {
    id: number
    name: number
    experienceProjectId: number
    _all: number
  }


  export type ProjectTechnologyAvgAggregateInputType = {
    id?: true
    experienceProjectId?: true
  }

  export type ProjectTechnologySumAggregateInputType = {
    id?: true
    experienceProjectId?: true
  }

  export type ProjectTechnologyMinAggregateInputType = {
    id?: true
    name?: true
    experienceProjectId?: true
  }

  export type ProjectTechnologyMaxAggregateInputType = {
    id?: true
    name?: true
    experienceProjectId?: true
  }

  export type ProjectTechnologyCountAggregateInputType = {
    id?: true
    name?: true
    experienceProjectId?: true
    _all?: true
  }

  export type ProjectTechnologyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTechnology to aggregate.
     */
    where?: ProjectTechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTechnologies to fetch.
     */
    orderBy?: ProjectTechnologyOrderByWithRelationInput | ProjectTechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectTechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTechnologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTechnologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectTechnologies
    **/
    _count?: true | ProjectTechnologyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectTechnologyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectTechnologySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectTechnologyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectTechnologyMaxAggregateInputType
  }

  export type GetProjectTechnologyAggregateType<T extends ProjectTechnologyAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectTechnology]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectTechnology[P]>
      : GetScalarType<T[P], AggregateProjectTechnology[P]>
  }




  export type ProjectTechnologyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTechnologyWhereInput
    orderBy?: ProjectTechnologyOrderByWithAggregationInput | ProjectTechnologyOrderByWithAggregationInput[]
    by: ProjectTechnologyScalarFieldEnum[] | ProjectTechnologyScalarFieldEnum
    having?: ProjectTechnologyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectTechnologyCountAggregateInputType | true
    _avg?: ProjectTechnologyAvgAggregateInputType
    _sum?: ProjectTechnologySumAggregateInputType
    _min?: ProjectTechnologyMinAggregateInputType
    _max?: ProjectTechnologyMaxAggregateInputType
  }

  export type ProjectTechnologyGroupByOutputType = {
    id: number
    name: string
    experienceProjectId: number
    _count: ProjectTechnologyCountAggregateOutputType | null
    _avg: ProjectTechnologyAvgAggregateOutputType | null
    _sum: ProjectTechnologySumAggregateOutputType | null
    _min: ProjectTechnologyMinAggregateOutputType | null
    _max: ProjectTechnologyMaxAggregateOutputType | null
  }

  type GetProjectTechnologyGroupByPayload<T extends ProjectTechnologyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectTechnologyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectTechnologyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectTechnologyGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectTechnologyGroupByOutputType[P]>
        }
      >
    >


  export type ProjectTechnologySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    experienceProjectId?: boolean
    experienceProject?: boolean | ExperienceProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTechnology"]>

  export type ProjectTechnologySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    experienceProjectId?: boolean
    experienceProject?: boolean | ExperienceProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTechnology"]>

  export type ProjectTechnologySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    experienceProjectId?: boolean
    experienceProject?: boolean | ExperienceProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTechnology"]>

  export type ProjectTechnologySelectScalar = {
    id?: boolean
    name?: boolean
    experienceProjectId?: boolean
  }

  export type ProjectTechnologyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "experienceProjectId", ExtArgs["result"]["projectTechnology"]>
  export type ProjectTechnologyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experienceProject?: boolean | ExperienceProjectDefaultArgs<ExtArgs>
  }
  export type ProjectTechnologyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experienceProject?: boolean | ExperienceProjectDefaultArgs<ExtArgs>
  }
  export type ProjectTechnologyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experienceProject?: boolean | ExperienceProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectTechnologyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectTechnology"
    objects: {
      experienceProject: Prisma.$ExperienceProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      experienceProjectId: number
    }, ExtArgs["result"]["projectTechnology"]>
    composites: {}
  }

  type ProjectTechnologyGetPayload<S extends boolean | null | undefined | ProjectTechnologyDefaultArgs> = $Result.GetResult<Prisma.$ProjectTechnologyPayload, S>

  type ProjectTechnologyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectTechnologyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectTechnologyCountAggregateInputType | true
    }

  export interface ProjectTechnologyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectTechnology'], meta: { name: 'ProjectTechnology' } }
    /**
     * Find zero or one ProjectTechnology that matches the filter.
     * @param {ProjectTechnologyFindUniqueArgs} args - Arguments to find a ProjectTechnology
     * @example
     * // Get one ProjectTechnology
     * const projectTechnology = await prisma.projectTechnology.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectTechnologyFindUniqueArgs>(args: SelectSubset<T, ProjectTechnologyFindUniqueArgs<ExtArgs>>): Prisma__ProjectTechnologyClient<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectTechnology that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectTechnologyFindUniqueOrThrowArgs} args - Arguments to find a ProjectTechnology
     * @example
     * // Get one ProjectTechnology
     * const projectTechnology = await prisma.projectTechnology.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectTechnologyFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectTechnologyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectTechnologyClient<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectTechnology that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechnologyFindFirstArgs} args - Arguments to find a ProjectTechnology
     * @example
     * // Get one ProjectTechnology
     * const projectTechnology = await prisma.projectTechnology.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectTechnologyFindFirstArgs>(args?: SelectSubset<T, ProjectTechnologyFindFirstArgs<ExtArgs>>): Prisma__ProjectTechnologyClient<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectTechnology that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechnologyFindFirstOrThrowArgs} args - Arguments to find a ProjectTechnology
     * @example
     * // Get one ProjectTechnology
     * const projectTechnology = await prisma.projectTechnology.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectTechnologyFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectTechnologyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectTechnologyClient<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectTechnologies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechnologyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectTechnologies
     * const projectTechnologies = await prisma.projectTechnology.findMany()
     * 
     * // Get first 10 ProjectTechnologies
     * const projectTechnologies = await prisma.projectTechnology.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectTechnologyWithIdOnly = await prisma.projectTechnology.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectTechnologyFindManyArgs>(args?: SelectSubset<T, ProjectTechnologyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectTechnology.
     * @param {ProjectTechnologyCreateArgs} args - Arguments to create a ProjectTechnology.
     * @example
     * // Create one ProjectTechnology
     * const ProjectTechnology = await prisma.projectTechnology.create({
     *   data: {
     *     // ... data to create a ProjectTechnology
     *   }
     * })
     * 
     */
    create<T extends ProjectTechnologyCreateArgs>(args: SelectSubset<T, ProjectTechnologyCreateArgs<ExtArgs>>): Prisma__ProjectTechnologyClient<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectTechnologies.
     * @param {ProjectTechnologyCreateManyArgs} args - Arguments to create many ProjectTechnologies.
     * @example
     * // Create many ProjectTechnologies
     * const projectTechnology = await prisma.projectTechnology.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectTechnologyCreateManyArgs>(args?: SelectSubset<T, ProjectTechnologyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectTechnologies and returns the data saved in the database.
     * @param {ProjectTechnologyCreateManyAndReturnArgs} args - Arguments to create many ProjectTechnologies.
     * @example
     * // Create many ProjectTechnologies
     * const projectTechnology = await prisma.projectTechnology.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectTechnologies and only return the `id`
     * const projectTechnologyWithIdOnly = await prisma.projectTechnology.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectTechnologyCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectTechnologyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectTechnology.
     * @param {ProjectTechnologyDeleteArgs} args - Arguments to delete one ProjectTechnology.
     * @example
     * // Delete one ProjectTechnology
     * const ProjectTechnology = await prisma.projectTechnology.delete({
     *   where: {
     *     // ... filter to delete one ProjectTechnology
     *   }
     * })
     * 
     */
    delete<T extends ProjectTechnologyDeleteArgs>(args: SelectSubset<T, ProjectTechnologyDeleteArgs<ExtArgs>>): Prisma__ProjectTechnologyClient<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectTechnology.
     * @param {ProjectTechnologyUpdateArgs} args - Arguments to update one ProjectTechnology.
     * @example
     * // Update one ProjectTechnology
     * const projectTechnology = await prisma.projectTechnology.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectTechnologyUpdateArgs>(args: SelectSubset<T, ProjectTechnologyUpdateArgs<ExtArgs>>): Prisma__ProjectTechnologyClient<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectTechnologies.
     * @param {ProjectTechnologyDeleteManyArgs} args - Arguments to filter ProjectTechnologies to delete.
     * @example
     * // Delete a few ProjectTechnologies
     * const { count } = await prisma.projectTechnology.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectTechnologyDeleteManyArgs>(args?: SelectSubset<T, ProjectTechnologyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTechnologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechnologyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectTechnologies
     * const projectTechnology = await prisma.projectTechnology.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectTechnologyUpdateManyArgs>(args: SelectSubset<T, ProjectTechnologyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTechnologies and returns the data updated in the database.
     * @param {ProjectTechnologyUpdateManyAndReturnArgs} args - Arguments to update many ProjectTechnologies.
     * @example
     * // Update many ProjectTechnologies
     * const projectTechnology = await prisma.projectTechnology.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectTechnologies and only return the `id`
     * const projectTechnologyWithIdOnly = await prisma.projectTechnology.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectTechnologyUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectTechnologyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectTechnology.
     * @param {ProjectTechnologyUpsertArgs} args - Arguments to update or create a ProjectTechnology.
     * @example
     * // Update or create a ProjectTechnology
     * const projectTechnology = await prisma.projectTechnology.upsert({
     *   create: {
     *     // ... data to create a ProjectTechnology
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectTechnology we want to update
     *   }
     * })
     */
    upsert<T extends ProjectTechnologyUpsertArgs>(args: SelectSubset<T, ProjectTechnologyUpsertArgs<ExtArgs>>): Prisma__ProjectTechnologyClient<$Result.GetResult<Prisma.$ProjectTechnologyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectTechnologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechnologyCountArgs} args - Arguments to filter ProjectTechnologies to count.
     * @example
     * // Count the number of ProjectTechnologies
     * const count = await prisma.projectTechnology.count({
     *   where: {
     *     // ... the filter for the ProjectTechnologies we want to count
     *   }
     * })
    **/
    count<T extends ProjectTechnologyCountArgs>(
      args?: Subset<T, ProjectTechnologyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectTechnologyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectTechnology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechnologyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectTechnologyAggregateArgs>(args: Subset<T, ProjectTechnologyAggregateArgs>): Prisma.PrismaPromise<GetProjectTechnologyAggregateType<T>>

    /**
     * Group by ProjectTechnology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechnologyGroupByArgs} args - Group by arguments.
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
      T extends ProjectTechnologyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectTechnologyGroupByArgs['orderBy'] }
        : { orderBy?: ProjectTechnologyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectTechnologyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectTechnologyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectTechnology model
   */
  readonly fields: ProjectTechnologyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectTechnology.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectTechnologyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    experienceProject<T extends ExperienceProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExperienceProjectDefaultArgs<ExtArgs>>): Prisma__ExperienceProjectClient<$Result.GetResult<Prisma.$ExperienceProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectTechnology model
   */
  interface ProjectTechnologyFieldRefs {
    readonly id: FieldRef<"ProjectTechnology", 'Int'>
    readonly name: FieldRef<"ProjectTechnology", 'String'>
    readonly experienceProjectId: FieldRef<"ProjectTechnology", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProjectTechnology findUnique
   */
  export type ProjectTechnologyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTechnology to fetch.
     */
    where: ProjectTechnologyWhereUniqueInput
  }

  /**
   * ProjectTechnology findUniqueOrThrow
   */
  export type ProjectTechnologyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTechnology to fetch.
     */
    where: ProjectTechnologyWhereUniqueInput
  }

  /**
   * ProjectTechnology findFirst
   */
  export type ProjectTechnologyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTechnology to fetch.
     */
    where?: ProjectTechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTechnologies to fetch.
     */
    orderBy?: ProjectTechnologyOrderByWithRelationInput | ProjectTechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTechnologies.
     */
    cursor?: ProjectTechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTechnologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTechnologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTechnologies.
     */
    distinct?: ProjectTechnologyScalarFieldEnum | ProjectTechnologyScalarFieldEnum[]
  }

  /**
   * ProjectTechnology findFirstOrThrow
   */
  export type ProjectTechnologyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTechnology to fetch.
     */
    where?: ProjectTechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTechnologies to fetch.
     */
    orderBy?: ProjectTechnologyOrderByWithRelationInput | ProjectTechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTechnologies.
     */
    cursor?: ProjectTechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTechnologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTechnologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTechnologies.
     */
    distinct?: ProjectTechnologyScalarFieldEnum | ProjectTechnologyScalarFieldEnum[]
  }

  /**
   * ProjectTechnology findMany
   */
  export type ProjectTechnologyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTechnologies to fetch.
     */
    where?: ProjectTechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTechnologies to fetch.
     */
    orderBy?: ProjectTechnologyOrderByWithRelationInput | ProjectTechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectTechnologies.
     */
    cursor?: ProjectTechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTechnologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTechnologies.
     */
    skip?: number
    distinct?: ProjectTechnologyScalarFieldEnum | ProjectTechnologyScalarFieldEnum[]
  }

  /**
   * ProjectTechnology create
   */
  export type ProjectTechnologyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectTechnology.
     */
    data: XOR<ProjectTechnologyCreateInput, ProjectTechnologyUncheckedCreateInput>
  }

  /**
   * ProjectTechnology createMany
   */
  export type ProjectTechnologyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectTechnologies.
     */
    data: ProjectTechnologyCreateManyInput | ProjectTechnologyCreateManyInput[]
  }

  /**
   * ProjectTechnology createManyAndReturn
   */
  export type ProjectTechnologyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectTechnologies.
     */
    data: ProjectTechnologyCreateManyInput | ProjectTechnologyCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectTechnology update
   */
  export type ProjectTechnologyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectTechnology.
     */
    data: XOR<ProjectTechnologyUpdateInput, ProjectTechnologyUncheckedUpdateInput>
    /**
     * Choose, which ProjectTechnology to update.
     */
    where: ProjectTechnologyWhereUniqueInput
  }

  /**
   * ProjectTechnology updateMany
   */
  export type ProjectTechnologyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectTechnologies.
     */
    data: XOR<ProjectTechnologyUpdateManyMutationInput, ProjectTechnologyUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTechnologies to update
     */
    where?: ProjectTechnologyWhereInput
    /**
     * Limit how many ProjectTechnologies to update.
     */
    limit?: number
  }

  /**
   * ProjectTechnology updateManyAndReturn
   */
  export type ProjectTechnologyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * The data used to update ProjectTechnologies.
     */
    data: XOR<ProjectTechnologyUpdateManyMutationInput, ProjectTechnologyUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTechnologies to update
     */
    where?: ProjectTechnologyWhereInput
    /**
     * Limit how many ProjectTechnologies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectTechnology upsert
   */
  export type ProjectTechnologyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectTechnology to update in case it exists.
     */
    where: ProjectTechnologyWhereUniqueInput
    /**
     * In case the ProjectTechnology found by the `where` argument doesn't exist, create a new ProjectTechnology with this data.
     */
    create: XOR<ProjectTechnologyCreateInput, ProjectTechnologyUncheckedCreateInput>
    /**
     * In case the ProjectTechnology was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectTechnologyUpdateInput, ProjectTechnologyUncheckedUpdateInput>
  }

  /**
   * ProjectTechnology delete
   */
  export type ProjectTechnologyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
    /**
     * Filter which ProjectTechnology to delete.
     */
    where: ProjectTechnologyWhereUniqueInput
  }

  /**
   * ProjectTechnology deleteMany
   */
  export type ProjectTechnologyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTechnologies to delete
     */
    where?: ProjectTechnologyWhereInput
    /**
     * Limit how many ProjectTechnologies to delete.
     */
    limit?: number
  }

  /**
   * ProjectTechnology without action
   */
  export type ProjectTechnologyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTechnology
     */
    select?: ProjectTechnologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechnology
     */
    omit?: ProjectTechnologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechnologyInclude<ExtArgs> | null
  }


  /**
   * Model ExperienceProjectBullet
   */

  export type AggregateExperienceProjectBullet = {
    _count: ExperienceProjectBulletCountAggregateOutputType | null
    _avg: ExperienceProjectBulletAvgAggregateOutputType | null
    _sum: ExperienceProjectBulletSumAggregateOutputType | null
    _min: ExperienceProjectBulletMinAggregateOutputType | null
    _max: ExperienceProjectBulletMaxAggregateOutputType | null
  }

  export type ExperienceProjectBulletAvgAggregateOutputType = {
    id: number | null
    experienceProjectId: number | null
  }

  export type ExperienceProjectBulletSumAggregateOutputType = {
    id: number | null
    experienceProjectId: number | null
  }

  export type ExperienceProjectBulletMinAggregateOutputType = {
    id: number | null
    text: string | null
    experienceProjectId: number | null
  }

  export type ExperienceProjectBulletMaxAggregateOutputType = {
    id: number | null
    text: string | null
    experienceProjectId: number | null
  }

  export type ExperienceProjectBulletCountAggregateOutputType = {
    id: number
    text: number
    experienceProjectId: number
    _all: number
  }


  export type ExperienceProjectBulletAvgAggregateInputType = {
    id?: true
    experienceProjectId?: true
  }

  export type ExperienceProjectBulletSumAggregateInputType = {
    id?: true
    experienceProjectId?: true
  }

  export type ExperienceProjectBulletMinAggregateInputType = {
    id?: true
    text?: true
    experienceProjectId?: true
  }

  export type ExperienceProjectBulletMaxAggregateInputType = {
    id?: true
    text?: true
    experienceProjectId?: true
  }

  export type ExperienceProjectBulletCountAggregateInputType = {
    id?: true
    text?: true
    experienceProjectId?: true
    _all?: true
  }

  export type ExperienceProjectBulletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExperienceProjectBullet to aggregate.
     */
    where?: ExperienceProjectBulletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienceProjectBullets to fetch.
     */
    orderBy?: ExperienceProjectBulletOrderByWithRelationInput | ExperienceProjectBulletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceProjectBulletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienceProjectBullets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienceProjectBullets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExperienceProjectBullets
    **/
    _count?: true | ExperienceProjectBulletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienceProjectBulletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienceProjectBulletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceProjectBulletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceProjectBulletMaxAggregateInputType
  }

  export type GetExperienceProjectBulletAggregateType<T extends ExperienceProjectBulletAggregateArgs> = {
        [P in keyof T & keyof AggregateExperienceProjectBullet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperienceProjectBullet[P]>
      : GetScalarType<T[P], AggregateExperienceProjectBullet[P]>
  }




  export type ExperienceProjectBulletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceProjectBulletWhereInput
    orderBy?: ExperienceProjectBulletOrderByWithAggregationInput | ExperienceProjectBulletOrderByWithAggregationInput[]
    by: ExperienceProjectBulletScalarFieldEnum[] | ExperienceProjectBulletScalarFieldEnum
    having?: ExperienceProjectBulletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceProjectBulletCountAggregateInputType | true
    _avg?: ExperienceProjectBulletAvgAggregateInputType
    _sum?: ExperienceProjectBulletSumAggregateInputType
    _min?: ExperienceProjectBulletMinAggregateInputType
    _max?: ExperienceProjectBulletMaxAggregateInputType
  }

  export type ExperienceProjectBulletGroupByOutputType = {
    id: number
    text: string
    experienceProjectId: number
    _count: ExperienceProjectBulletCountAggregateOutputType | null
    _avg: ExperienceProjectBulletAvgAggregateOutputType | null
    _sum: ExperienceProjectBulletSumAggregateOutputType | null
    _min: ExperienceProjectBulletMinAggregateOutputType | null
    _max: ExperienceProjectBulletMaxAggregateOutputType | null
  }

  type GetExperienceProjectBulletGroupByPayload<T extends ExperienceProjectBulletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceProjectBulletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceProjectBulletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceProjectBulletGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceProjectBulletGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceProjectBulletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    experienceProjectId?: boolean
    experienceProject?: boolean | ExperienceProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experienceProjectBullet"]>

  export type ExperienceProjectBulletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    experienceProjectId?: boolean
    experienceProject?: boolean | ExperienceProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experienceProjectBullet"]>

  export type ExperienceProjectBulletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    experienceProjectId?: boolean
    experienceProject?: boolean | ExperienceProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experienceProjectBullet"]>

  export type ExperienceProjectBulletSelectScalar = {
    id?: boolean
    text?: boolean
    experienceProjectId?: boolean
  }

  export type ExperienceProjectBulletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "experienceProjectId", ExtArgs["result"]["experienceProjectBullet"]>
  export type ExperienceProjectBulletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experienceProject?: boolean | ExperienceProjectDefaultArgs<ExtArgs>
  }
  export type ExperienceProjectBulletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experienceProject?: boolean | ExperienceProjectDefaultArgs<ExtArgs>
  }
  export type ExperienceProjectBulletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experienceProject?: boolean | ExperienceProjectDefaultArgs<ExtArgs>
  }

  export type $ExperienceProjectBulletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExperienceProjectBullet"
    objects: {
      experienceProject: Prisma.$ExperienceProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      experienceProjectId: number
    }, ExtArgs["result"]["experienceProjectBullet"]>
    composites: {}
  }

  type ExperienceProjectBulletGetPayload<S extends boolean | null | undefined | ExperienceProjectBulletDefaultArgs> = $Result.GetResult<Prisma.$ExperienceProjectBulletPayload, S>

  type ExperienceProjectBulletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperienceProjectBulletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceProjectBulletCountAggregateInputType | true
    }

  export interface ExperienceProjectBulletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExperienceProjectBullet'], meta: { name: 'ExperienceProjectBullet' } }
    /**
     * Find zero or one ExperienceProjectBullet that matches the filter.
     * @param {ExperienceProjectBulletFindUniqueArgs} args - Arguments to find a ExperienceProjectBullet
     * @example
     * // Get one ExperienceProjectBullet
     * const experienceProjectBullet = await prisma.experienceProjectBullet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceProjectBulletFindUniqueArgs>(args: SelectSubset<T, ExperienceProjectBulletFindUniqueArgs<ExtArgs>>): Prisma__ExperienceProjectBulletClient<$Result.GetResult<Prisma.$ExperienceProjectBulletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExperienceProjectBullet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienceProjectBulletFindUniqueOrThrowArgs} args - Arguments to find a ExperienceProjectBullet
     * @example
     * // Get one ExperienceProjectBullet
     * const experienceProjectBullet = await prisma.experienceProjectBullet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceProjectBulletFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienceProjectBulletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienceProjectBulletClient<$Result.GetResult<Prisma.$ExperienceProjectBulletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExperienceProjectBullet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceProjectBulletFindFirstArgs} args - Arguments to find a ExperienceProjectBullet
     * @example
     * // Get one ExperienceProjectBullet
     * const experienceProjectBullet = await prisma.experienceProjectBullet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceProjectBulletFindFirstArgs>(args?: SelectSubset<T, ExperienceProjectBulletFindFirstArgs<ExtArgs>>): Prisma__ExperienceProjectBulletClient<$Result.GetResult<Prisma.$ExperienceProjectBulletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExperienceProjectBullet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceProjectBulletFindFirstOrThrowArgs} args - Arguments to find a ExperienceProjectBullet
     * @example
     * // Get one ExperienceProjectBullet
     * const experienceProjectBullet = await prisma.experienceProjectBullet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceProjectBulletFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienceProjectBulletFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienceProjectBulletClient<$Result.GetResult<Prisma.$ExperienceProjectBulletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExperienceProjectBullets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceProjectBulletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExperienceProjectBullets
     * const experienceProjectBullets = await prisma.experienceProjectBullet.findMany()
     * 
     * // Get first 10 ExperienceProjectBullets
     * const experienceProjectBullets = await prisma.experienceProjectBullet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceProjectBulletWithIdOnly = await prisma.experienceProjectBullet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienceProjectBulletFindManyArgs>(args?: SelectSubset<T, ExperienceProjectBulletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienceProjectBulletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExperienceProjectBullet.
     * @param {ExperienceProjectBulletCreateArgs} args - Arguments to create a ExperienceProjectBullet.
     * @example
     * // Create one ExperienceProjectBullet
     * const ExperienceProjectBullet = await prisma.experienceProjectBullet.create({
     *   data: {
     *     // ... data to create a ExperienceProjectBullet
     *   }
     * })
     * 
     */
    create<T extends ExperienceProjectBulletCreateArgs>(args: SelectSubset<T, ExperienceProjectBulletCreateArgs<ExtArgs>>): Prisma__ExperienceProjectBulletClient<$Result.GetResult<Prisma.$ExperienceProjectBulletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExperienceProjectBullets.
     * @param {ExperienceProjectBulletCreateManyArgs} args - Arguments to create many ExperienceProjectBullets.
     * @example
     * // Create many ExperienceProjectBullets
     * const experienceProjectBullet = await prisma.experienceProjectBullet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienceProjectBulletCreateManyArgs>(args?: SelectSubset<T, ExperienceProjectBulletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExperienceProjectBullets and returns the data saved in the database.
     * @param {ExperienceProjectBulletCreateManyAndReturnArgs} args - Arguments to create many ExperienceProjectBullets.
     * @example
     * // Create many ExperienceProjectBullets
     * const experienceProjectBullet = await prisma.experienceProjectBullet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExperienceProjectBullets and only return the `id`
     * const experienceProjectBulletWithIdOnly = await prisma.experienceProjectBullet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExperienceProjectBulletCreateManyAndReturnArgs>(args?: SelectSubset<T, ExperienceProjectBulletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienceProjectBulletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExperienceProjectBullet.
     * @param {ExperienceProjectBulletDeleteArgs} args - Arguments to delete one ExperienceProjectBullet.
     * @example
     * // Delete one ExperienceProjectBullet
     * const ExperienceProjectBullet = await prisma.experienceProjectBullet.delete({
     *   where: {
     *     // ... filter to delete one ExperienceProjectBullet
     *   }
     * })
     * 
     */
    delete<T extends ExperienceProjectBulletDeleteArgs>(args: SelectSubset<T, ExperienceProjectBulletDeleteArgs<ExtArgs>>): Prisma__ExperienceProjectBulletClient<$Result.GetResult<Prisma.$ExperienceProjectBulletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExperienceProjectBullet.
     * @param {ExperienceProjectBulletUpdateArgs} args - Arguments to update one ExperienceProjectBullet.
     * @example
     * // Update one ExperienceProjectBullet
     * const experienceProjectBullet = await prisma.experienceProjectBullet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienceProjectBulletUpdateArgs>(args: SelectSubset<T, ExperienceProjectBulletUpdateArgs<ExtArgs>>): Prisma__ExperienceProjectBulletClient<$Result.GetResult<Prisma.$ExperienceProjectBulletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExperienceProjectBullets.
     * @param {ExperienceProjectBulletDeleteManyArgs} args - Arguments to filter ExperienceProjectBullets to delete.
     * @example
     * // Delete a few ExperienceProjectBullets
     * const { count } = await prisma.experienceProjectBullet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienceProjectBulletDeleteManyArgs>(args?: SelectSubset<T, ExperienceProjectBulletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExperienceProjectBullets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceProjectBulletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExperienceProjectBullets
     * const experienceProjectBullet = await prisma.experienceProjectBullet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienceProjectBulletUpdateManyArgs>(args: SelectSubset<T, ExperienceProjectBulletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExperienceProjectBullets and returns the data updated in the database.
     * @param {ExperienceProjectBulletUpdateManyAndReturnArgs} args - Arguments to update many ExperienceProjectBullets.
     * @example
     * // Update many ExperienceProjectBullets
     * const experienceProjectBullet = await prisma.experienceProjectBullet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExperienceProjectBullets and only return the `id`
     * const experienceProjectBulletWithIdOnly = await prisma.experienceProjectBullet.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExperienceProjectBulletUpdateManyAndReturnArgs>(args: SelectSubset<T, ExperienceProjectBulletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienceProjectBulletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExperienceProjectBullet.
     * @param {ExperienceProjectBulletUpsertArgs} args - Arguments to update or create a ExperienceProjectBullet.
     * @example
     * // Update or create a ExperienceProjectBullet
     * const experienceProjectBullet = await prisma.experienceProjectBullet.upsert({
     *   create: {
     *     // ... data to create a ExperienceProjectBullet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExperienceProjectBullet we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceProjectBulletUpsertArgs>(args: SelectSubset<T, ExperienceProjectBulletUpsertArgs<ExtArgs>>): Prisma__ExperienceProjectBulletClient<$Result.GetResult<Prisma.$ExperienceProjectBulletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExperienceProjectBullets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceProjectBulletCountArgs} args - Arguments to filter ExperienceProjectBullets to count.
     * @example
     * // Count the number of ExperienceProjectBullets
     * const count = await prisma.experienceProjectBullet.count({
     *   where: {
     *     // ... the filter for the ExperienceProjectBullets we want to count
     *   }
     * })
    **/
    count<T extends ExperienceProjectBulletCountArgs>(
      args?: Subset<T, ExperienceProjectBulletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceProjectBulletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExperienceProjectBullet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceProjectBulletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExperienceProjectBulletAggregateArgs>(args: Subset<T, ExperienceProjectBulletAggregateArgs>): Prisma.PrismaPromise<GetExperienceProjectBulletAggregateType<T>>

    /**
     * Group by ExperienceProjectBullet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceProjectBulletGroupByArgs} args - Group by arguments.
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
      T extends ExperienceProjectBulletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceProjectBulletGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceProjectBulletGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExperienceProjectBulletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceProjectBulletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExperienceProjectBullet model
   */
  readonly fields: ExperienceProjectBulletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExperienceProjectBullet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceProjectBulletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    experienceProject<T extends ExperienceProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExperienceProjectDefaultArgs<ExtArgs>>): Prisma__ExperienceProjectClient<$Result.GetResult<Prisma.$ExperienceProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExperienceProjectBullet model
   */
  interface ExperienceProjectBulletFieldRefs {
    readonly id: FieldRef<"ExperienceProjectBullet", 'Int'>
    readonly text: FieldRef<"ExperienceProjectBullet", 'String'>
    readonly experienceProjectId: FieldRef<"ExperienceProjectBullet", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ExperienceProjectBullet findUnique
   */
  export type ExperienceProjectBulletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProjectBullet
     */
    select?: ExperienceProjectBulletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProjectBullet
     */
    omit?: ExperienceProjectBulletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectBulletInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceProjectBullet to fetch.
     */
    where: ExperienceProjectBulletWhereUniqueInput
  }

  /**
   * ExperienceProjectBullet findUniqueOrThrow
   */
  export type ExperienceProjectBulletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProjectBullet
     */
    select?: ExperienceProjectBulletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProjectBullet
     */
    omit?: ExperienceProjectBulletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectBulletInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceProjectBullet to fetch.
     */
    where: ExperienceProjectBulletWhereUniqueInput
  }

  /**
   * ExperienceProjectBullet findFirst
   */
  export type ExperienceProjectBulletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProjectBullet
     */
    select?: ExperienceProjectBulletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProjectBullet
     */
    omit?: ExperienceProjectBulletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectBulletInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceProjectBullet to fetch.
     */
    where?: ExperienceProjectBulletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienceProjectBullets to fetch.
     */
    orderBy?: ExperienceProjectBulletOrderByWithRelationInput | ExperienceProjectBulletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExperienceProjectBullets.
     */
    cursor?: ExperienceProjectBulletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienceProjectBullets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienceProjectBullets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExperienceProjectBullets.
     */
    distinct?: ExperienceProjectBulletScalarFieldEnum | ExperienceProjectBulletScalarFieldEnum[]
  }

  /**
   * ExperienceProjectBullet findFirstOrThrow
   */
  export type ExperienceProjectBulletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProjectBullet
     */
    select?: ExperienceProjectBulletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProjectBullet
     */
    omit?: ExperienceProjectBulletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectBulletInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceProjectBullet to fetch.
     */
    where?: ExperienceProjectBulletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienceProjectBullets to fetch.
     */
    orderBy?: ExperienceProjectBulletOrderByWithRelationInput | ExperienceProjectBulletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExperienceProjectBullets.
     */
    cursor?: ExperienceProjectBulletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienceProjectBullets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienceProjectBullets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExperienceProjectBullets.
     */
    distinct?: ExperienceProjectBulletScalarFieldEnum | ExperienceProjectBulletScalarFieldEnum[]
  }

  /**
   * ExperienceProjectBullet findMany
   */
  export type ExperienceProjectBulletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProjectBullet
     */
    select?: ExperienceProjectBulletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProjectBullet
     */
    omit?: ExperienceProjectBulletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectBulletInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceProjectBullets to fetch.
     */
    where?: ExperienceProjectBulletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienceProjectBullets to fetch.
     */
    orderBy?: ExperienceProjectBulletOrderByWithRelationInput | ExperienceProjectBulletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExperienceProjectBullets.
     */
    cursor?: ExperienceProjectBulletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienceProjectBullets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienceProjectBullets.
     */
    skip?: number
    distinct?: ExperienceProjectBulletScalarFieldEnum | ExperienceProjectBulletScalarFieldEnum[]
  }

  /**
   * ExperienceProjectBullet create
   */
  export type ExperienceProjectBulletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProjectBullet
     */
    select?: ExperienceProjectBulletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProjectBullet
     */
    omit?: ExperienceProjectBulletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectBulletInclude<ExtArgs> | null
    /**
     * The data needed to create a ExperienceProjectBullet.
     */
    data: XOR<ExperienceProjectBulletCreateInput, ExperienceProjectBulletUncheckedCreateInput>
  }

  /**
   * ExperienceProjectBullet createMany
   */
  export type ExperienceProjectBulletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExperienceProjectBullets.
     */
    data: ExperienceProjectBulletCreateManyInput | ExperienceProjectBulletCreateManyInput[]
  }

  /**
   * ExperienceProjectBullet createManyAndReturn
   */
  export type ExperienceProjectBulletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProjectBullet
     */
    select?: ExperienceProjectBulletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProjectBullet
     */
    omit?: ExperienceProjectBulletOmit<ExtArgs> | null
    /**
     * The data used to create many ExperienceProjectBullets.
     */
    data: ExperienceProjectBulletCreateManyInput | ExperienceProjectBulletCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectBulletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExperienceProjectBullet update
   */
  export type ExperienceProjectBulletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProjectBullet
     */
    select?: ExperienceProjectBulletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProjectBullet
     */
    omit?: ExperienceProjectBulletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectBulletInclude<ExtArgs> | null
    /**
     * The data needed to update a ExperienceProjectBullet.
     */
    data: XOR<ExperienceProjectBulletUpdateInput, ExperienceProjectBulletUncheckedUpdateInput>
    /**
     * Choose, which ExperienceProjectBullet to update.
     */
    where: ExperienceProjectBulletWhereUniqueInput
  }

  /**
   * ExperienceProjectBullet updateMany
   */
  export type ExperienceProjectBulletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExperienceProjectBullets.
     */
    data: XOR<ExperienceProjectBulletUpdateManyMutationInput, ExperienceProjectBulletUncheckedUpdateManyInput>
    /**
     * Filter which ExperienceProjectBullets to update
     */
    where?: ExperienceProjectBulletWhereInput
    /**
     * Limit how many ExperienceProjectBullets to update.
     */
    limit?: number
  }

  /**
   * ExperienceProjectBullet updateManyAndReturn
   */
  export type ExperienceProjectBulletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProjectBullet
     */
    select?: ExperienceProjectBulletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProjectBullet
     */
    omit?: ExperienceProjectBulletOmit<ExtArgs> | null
    /**
     * The data used to update ExperienceProjectBullets.
     */
    data: XOR<ExperienceProjectBulletUpdateManyMutationInput, ExperienceProjectBulletUncheckedUpdateManyInput>
    /**
     * Filter which ExperienceProjectBullets to update
     */
    where?: ExperienceProjectBulletWhereInput
    /**
     * Limit how many ExperienceProjectBullets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectBulletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExperienceProjectBullet upsert
   */
  export type ExperienceProjectBulletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProjectBullet
     */
    select?: ExperienceProjectBulletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProjectBullet
     */
    omit?: ExperienceProjectBulletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectBulletInclude<ExtArgs> | null
    /**
     * The filter to search for the ExperienceProjectBullet to update in case it exists.
     */
    where: ExperienceProjectBulletWhereUniqueInput
    /**
     * In case the ExperienceProjectBullet found by the `where` argument doesn't exist, create a new ExperienceProjectBullet with this data.
     */
    create: XOR<ExperienceProjectBulletCreateInput, ExperienceProjectBulletUncheckedCreateInput>
    /**
     * In case the ExperienceProjectBullet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceProjectBulletUpdateInput, ExperienceProjectBulletUncheckedUpdateInput>
  }

  /**
   * ExperienceProjectBullet delete
   */
  export type ExperienceProjectBulletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProjectBullet
     */
    select?: ExperienceProjectBulletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProjectBullet
     */
    omit?: ExperienceProjectBulletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectBulletInclude<ExtArgs> | null
    /**
     * Filter which ExperienceProjectBullet to delete.
     */
    where: ExperienceProjectBulletWhereUniqueInput
  }

  /**
   * ExperienceProjectBullet deleteMany
   */
  export type ExperienceProjectBulletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExperienceProjectBullets to delete
     */
    where?: ExperienceProjectBulletWhereInput
    /**
     * Limit how many ExperienceProjectBullets to delete.
     */
    limit?: number
  }

  /**
   * ExperienceProjectBullet without action
   */
  export type ExperienceProjectBulletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceProjectBullet
     */
    select?: ExperienceProjectBulletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceProjectBullet
     */
    omit?: ExperienceProjectBulletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceProjectBulletInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    date: string | null
    githubLink: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    date: string | null
    githubLink: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    date: number
    githubLink: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    date?: true
    githubLink?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    date?: true
    githubLink?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    date?: true
    githubLink?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    name: string
    date: string
    githubLink: string | null
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    githubLink?: boolean
    technologies?: boolean | Project$technologiesArgs<ExtArgs>
    bullets?: boolean | Project$bulletsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    githubLink?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    githubLink?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    date?: boolean
    githubLink?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "date" | "githubLink", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technologies?: boolean | Project$technologiesArgs<ExtArgs>
    bullets?: boolean | Project$bulletsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      technologies: Prisma.$ProjectTechPayload<ExtArgs>[]
      bullets: Prisma.$ProjectBulletPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      date: string
      githubLink: string | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    technologies<T extends Project$technologiesArgs<ExtArgs> = {}>(args?: Subset<T, Project$technologiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTechPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bullets<T extends Project$bulletsArgs<ExtArgs> = {}>(args?: Subset<T, Project$bulletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectBulletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly name: FieldRef<"Project", 'String'>
    readonly date: FieldRef<"Project", 'String'>
    readonly githubLink: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.technologies
   */
  export type Project$technologiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechInclude<ExtArgs> | null
    where?: ProjectTechWhereInput
    orderBy?: ProjectTechOrderByWithRelationInput | ProjectTechOrderByWithRelationInput[]
    cursor?: ProjectTechWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectTechScalarFieldEnum | ProjectTechScalarFieldEnum[]
  }

  /**
   * Project.bullets
   */
  export type Project$bulletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectBullet
     */
    select?: ProjectBulletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectBullet
     */
    omit?: ProjectBulletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectBulletInclude<ExtArgs> | null
    where?: ProjectBulletWhereInput
    orderBy?: ProjectBulletOrderByWithRelationInput | ProjectBulletOrderByWithRelationInput[]
    cursor?: ProjectBulletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectBulletScalarFieldEnum | ProjectBulletScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectTech
   */

  export type AggregateProjectTech = {
    _count: ProjectTechCountAggregateOutputType | null
    _avg: ProjectTechAvgAggregateOutputType | null
    _sum: ProjectTechSumAggregateOutputType | null
    _min: ProjectTechMinAggregateOutputType | null
    _max: ProjectTechMaxAggregateOutputType | null
  }

  export type ProjectTechAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type ProjectTechSumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type ProjectTechMinAggregateOutputType = {
    id: number | null
    name: string | null
    projectId: number | null
  }

  export type ProjectTechMaxAggregateOutputType = {
    id: number | null
    name: string | null
    projectId: number | null
  }

  export type ProjectTechCountAggregateOutputType = {
    id: number
    name: number
    projectId: number
    _all: number
  }


  export type ProjectTechAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type ProjectTechSumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type ProjectTechMinAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
  }

  export type ProjectTechMaxAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
  }

  export type ProjectTechCountAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    _all?: true
  }

  export type ProjectTechAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTech to aggregate.
     */
    where?: ProjectTechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTeches to fetch.
     */
    orderBy?: ProjectTechOrderByWithRelationInput | ProjectTechOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectTechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTeches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTeches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectTeches
    **/
    _count?: true | ProjectTechCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectTechAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectTechSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectTechMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectTechMaxAggregateInputType
  }

  export type GetProjectTechAggregateType<T extends ProjectTechAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectTech]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectTech[P]>
      : GetScalarType<T[P], AggregateProjectTech[P]>
  }




  export type ProjectTechGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTechWhereInput
    orderBy?: ProjectTechOrderByWithAggregationInput | ProjectTechOrderByWithAggregationInput[]
    by: ProjectTechScalarFieldEnum[] | ProjectTechScalarFieldEnum
    having?: ProjectTechScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectTechCountAggregateInputType | true
    _avg?: ProjectTechAvgAggregateInputType
    _sum?: ProjectTechSumAggregateInputType
    _min?: ProjectTechMinAggregateInputType
    _max?: ProjectTechMaxAggregateInputType
  }

  export type ProjectTechGroupByOutputType = {
    id: number
    name: string
    projectId: number
    _count: ProjectTechCountAggregateOutputType | null
    _avg: ProjectTechAvgAggregateOutputType | null
    _sum: ProjectTechSumAggregateOutputType | null
    _min: ProjectTechMinAggregateOutputType | null
    _max: ProjectTechMaxAggregateOutputType | null
  }

  type GetProjectTechGroupByPayload<T extends ProjectTechGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectTechGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectTechGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectTechGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectTechGroupByOutputType[P]>
        }
      >
    >


  export type ProjectTechSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTech"]>

  export type ProjectTechSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTech"]>

  export type ProjectTechSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTech"]>

  export type ProjectTechSelectScalar = {
    id?: boolean
    name?: boolean
    projectId?: boolean
  }

  export type ProjectTechOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "projectId", ExtArgs["result"]["projectTech"]>
  export type ProjectTechInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectTechIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectTechIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectTechPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectTech"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      projectId: number
    }, ExtArgs["result"]["projectTech"]>
    composites: {}
  }

  type ProjectTechGetPayload<S extends boolean | null | undefined | ProjectTechDefaultArgs> = $Result.GetResult<Prisma.$ProjectTechPayload, S>

  type ProjectTechCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectTechFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectTechCountAggregateInputType | true
    }

  export interface ProjectTechDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectTech'], meta: { name: 'ProjectTech' } }
    /**
     * Find zero or one ProjectTech that matches the filter.
     * @param {ProjectTechFindUniqueArgs} args - Arguments to find a ProjectTech
     * @example
     * // Get one ProjectTech
     * const projectTech = await prisma.projectTech.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectTechFindUniqueArgs>(args: SelectSubset<T, ProjectTechFindUniqueArgs<ExtArgs>>): Prisma__ProjectTechClient<$Result.GetResult<Prisma.$ProjectTechPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectTech that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectTechFindUniqueOrThrowArgs} args - Arguments to find a ProjectTech
     * @example
     * // Get one ProjectTech
     * const projectTech = await prisma.projectTech.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectTechFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectTechFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectTechClient<$Result.GetResult<Prisma.$ProjectTechPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectTech that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechFindFirstArgs} args - Arguments to find a ProjectTech
     * @example
     * // Get one ProjectTech
     * const projectTech = await prisma.projectTech.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectTechFindFirstArgs>(args?: SelectSubset<T, ProjectTechFindFirstArgs<ExtArgs>>): Prisma__ProjectTechClient<$Result.GetResult<Prisma.$ProjectTechPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectTech that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechFindFirstOrThrowArgs} args - Arguments to find a ProjectTech
     * @example
     * // Get one ProjectTech
     * const projectTech = await prisma.projectTech.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectTechFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectTechFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectTechClient<$Result.GetResult<Prisma.$ProjectTechPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectTeches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectTeches
     * const projectTeches = await prisma.projectTech.findMany()
     * 
     * // Get first 10 ProjectTeches
     * const projectTeches = await prisma.projectTech.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectTechWithIdOnly = await prisma.projectTech.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectTechFindManyArgs>(args?: SelectSubset<T, ProjectTechFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTechPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectTech.
     * @param {ProjectTechCreateArgs} args - Arguments to create a ProjectTech.
     * @example
     * // Create one ProjectTech
     * const ProjectTech = await prisma.projectTech.create({
     *   data: {
     *     // ... data to create a ProjectTech
     *   }
     * })
     * 
     */
    create<T extends ProjectTechCreateArgs>(args: SelectSubset<T, ProjectTechCreateArgs<ExtArgs>>): Prisma__ProjectTechClient<$Result.GetResult<Prisma.$ProjectTechPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectTeches.
     * @param {ProjectTechCreateManyArgs} args - Arguments to create many ProjectTeches.
     * @example
     * // Create many ProjectTeches
     * const projectTech = await prisma.projectTech.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectTechCreateManyArgs>(args?: SelectSubset<T, ProjectTechCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectTeches and returns the data saved in the database.
     * @param {ProjectTechCreateManyAndReturnArgs} args - Arguments to create many ProjectTeches.
     * @example
     * // Create many ProjectTeches
     * const projectTech = await prisma.projectTech.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectTeches and only return the `id`
     * const projectTechWithIdOnly = await prisma.projectTech.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectTechCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectTechCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTechPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectTech.
     * @param {ProjectTechDeleteArgs} args - Arguments to delete one ProjectTech.
     * @example
     * // Delete one ProjectTech
     * const ProjectTech = await prisma.projectTech.delete({
     *   where: {
     *     // ... filter to delete one ProjectTech
     *   }
     * })
     * 
     */
    delete<T extends ProjectTechDeleteArgs>(args: SelectSubset<T, ProjectTechDeleteArgs<ExtArgs>>): Prisma__ProjectTechClient<$Result.GetResult<Prisma.$ProjectTechPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectTech.
     * @param {ProjectTechUpdateArgs} args - Arguments to update one ProjectTech.
     * @example
     * // Update one ProjectTech
     * const projectTech = await prisma.projectTech.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectTechUpdateArgs>(args: SelectSubset<T, ProjectTechUpdateArgs<ExtArgs>>): Prisma__ProjectTechClient<$Result.GetResult<Prisma.$ProjectTechPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectTeches.
     * @param {ProjectTechDeleteManyArgs} args - Arguments to filter ProjectTeches to delete.
     * @example
     * // Delete a few ProjectTeches
     * const { count } = await prisma.projectTech.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectTechDeleteManyArgs>(args?: SelectSubset<T, ProjectTechDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTeches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectTeches
     * const projectTech = await prisma.projectTech.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectTechUpdateManyArgs>(args: SelectSubset<T, ProjectTechUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTeches and returns the data updated in the database.
     * @param {ProjectTechUpdateManyAndReturnArgs} args - Arguments to update many ProjectTeches.
     * @example
     * // Update many ProjectTeches
     * const projectTech = await prisma.projectTech.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectTeches and only return the `id`
     * const projectTechWithIdOnly = await prisma.projectTech.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectTechUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectTechUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTechPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectTech.
     * @param {ProjectTechUpsertArgs} args - Arguments to update or create a ProjectTech.
     * @example
     * // Update or create a ProjectTech
     * const projectTech = await prisma.projectTech.upsert({
     *   create: {
     *     // ... data to create a ProjectTech
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectTech we want to update
     *   }
     * })
     */
    upsert<T extends ProjectTechUpsertArgs>(args: SelectSubset<T, ProjectTechUpsertArgs<ExtArgs>>): Prisma__ProjectTechClient<$Result.GetResult<Prisma.$ProjectTechPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectTeches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechCountArgs} args - Arguments to filter ProjectTeches to count.
     * @example
     * // Count the number of ProjectTeches
     * const count = await prisma.projectTech.count({
     *   where: {
     *     // ... the filter for the ProjectTeches we want to count
     *   }
     * })
    **/
    count<T extends ProjectTechCountArgs>(
      args?: Subset<T, ProjectTechCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectTechCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectTech.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectTechAggregateArgs>(args: Subset<T, ProjectTechAggregateArgs>): Prisma.PrismaPromise<GetProjectTechAggregateType<T>>

    /**
     * Group by ProjectTech.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechGroupByArgs} args - Group by arguments.
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
      T extends ProjectTechGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectTechGroupByArgs['orderBy'] }
        : { orderBy?: ProjectTechGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectTechGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectTechGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectTech model
   */
  readonly fields: ProjectTechFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectTech.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectTechClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectTech model
   */
  interface ProjectTechFieldRefs {
    readonly id: FieldRef<"ProjectTech", 'Int'>
    readonly name: FieldRef<"ProjectTech", 'String'>
    readonly projectId: FieldRef<"ProjectTech", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProjectTech findUnique
   */
  export type ProjectTechFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTech to fetch.
     */
    where: ProjectTechWhereUniqueInput
  }

  /**
   * ProjectTech findUniqueOrThrow
   */
  export type ProjectTechFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTech to fetch.
     */
    where: ProjectTechWhereUniqueInput
  }

  /**
   * ProjectTech findFirst
   */
  export type ProjectTechFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTech to fetch.
     */
    where?: ProjectTechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTeches to fetch.
     */
    orderBy?: ProjectTechOrderByWithRelationInput | ProjectTechOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTeches.
     */
    cursor?: ProjectTechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTeches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTeches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTeches.
     */
    distinct?: ProjectTechScalarFieldEnum | ProjectTechScalarFieldEnum[]
  }

  /**
   * ProjectTech findFirstOrThrow
   */
  export type ProjectTechFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTech to fetch.
     */
    where?: ProjectTechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTeches to fetch.
     */
    orderBy?: ProjectTechOrderByWithRelationInput | ProjectTechOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTeches.
     */
    cursor?: ProjectTechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTeches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTeches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTeches.
     */
    distinct?: ProjectTechScalarFieldEnum | ProjectTechScalarFieldEnum[]
  }

  /**
   * ProjectTech findMany
   */
  export type ProjectTechFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTeches to fetch.
     */
    where?: ProjectTechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTeches to fetch.
     */
    orderBy?: ProjectTechOrderByWithRelationInput | ProjectTechOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectTeches.
     */
    cursor?: ProjectTechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTeches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTeches.
     */
    skip?: number
    distinct?: ProjectTechScalarFieldEnum | ProjectTechScalarFieldEnum[]
  }

  /**
   * ProjectTech create
   */
  export type ProjectTechCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectTech.
     */
    data: XOR<ProjectTechCreateInput, ProjectTechUncheckedCreateInput>
  }

  /**
   * ProjectTech createMany
   */
  export type ProjectTechCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectTeches.
     */
    data: ProjectTechCreateManyInput | ProjectTechCreateManyInput[]
  }

  /**
   * ProjectTech createManyAndReturn
   */
  export type ProjectTechCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectTeches.
     */
    data: ProjectTechCreateManyInput | ProjectTechCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectTech update
   */
  export type ProjectTechUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectTech.
     */
    data: XOR<ProjectTechUpdateInput, ProjectTechUncheckedUpdateInput>
    /**
     * Choose, which ProjectTech to update.
     */
    where: ProjectTechWhereUniqueInput
  }

  /**
   * ProjectTech updateMany
   */
  export type ProjectTechUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectTeches.
     */
    data: XOR<ProjectTechUpdateManyMutationInput, ProjectTechUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTeches to update
     */
    where?: ProjectTechWhereInput
    /**
     * Limit how many ProjectTeches to update.
     */
    limit?: number
  }

  /**
   * ProjectTech updateManyAndReturn
   */
  export type ProjectTechUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * The data used to update ProjectTeches.
     */
    data: XOR<ProjectTechUpdateManyMutationInput, ProjectTechUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTeches to update
     */
    where?: ProjectTechWhereInput
    /**
     * Limit how many ProjectTeches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectTech upsert
   */
  export type ProjectTechUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectTech to update in case it exists.
     */
    where: ProjectTechWhereUniqueInput
    /**
     * In case the ProjectTech found by the `where` argument doesn't exist, create a new ProjectTech with this data.
     */
    create: XOR<ProjectTechCreateInput, ProjectTechUncheckedCreateInput>
    /**
     * In case the ProjectTech was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectTechUpdateInput, ProjectTechUncheckedUpdateInput>
  }

  /**
   * ProjectTech delete
   */
  export type ProjectTechDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechInclude<ExtArgs> | null
    /**
     * Filter which ProjectTech to delete.
     */
    where: ProjectTechWhereUniqueInput
  }

  /**
   * ProjectTech deleteMany
   */
  export type ProjectTechDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTeches to delete
     */
    where?: ProjectTechWhereInput
    /**
     * Limit how many ProjectTeches to delete.
     */
    limit?: number
  }

  /**
   * ProjectTech without action
   */
  export type ProjectTechDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechInclude<ExtArgs> | null
  }


  /**
   * Model ProjectBullet
   */

  export type AggregateProjectBullet = {
    _count: ProjectBulletCountAggregateOutputType | null
    _avg: ProjectBulletAvgAggregateOutputType | null
    _sum: ProjectBulletSumAggregateOutputType | null
    _min: ProjectBulletMinAggregateOutputType | null
    _max: ProjectBulletMaxAggregateOutputType | null
  }

  export type ProjectBulletAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type ProjectBulletSumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type ProjectBulletMinAggregateOutputType = {
    id: number | null
    text: string | null
    projectId: number | null
  }

  export type ProjectBulletMaxAggregateOutputType = {
    id: number | null
    text: string | null
    projectId: number | null
  }

  export type ProjectBulletCountAggregateOutputType = {
    id: number
    text: number
    projectId: number
    _all: number
  }


  export type ProjectBulletAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type ProjectBulletSumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type ProjectBulletMinAggregateInputType = {
    id?: true
    text?: true
    projectId?: true
  }

  export type ProjectBulletMaxAggregateInputType = {
    id?: true
    text?: true
    projectId?: true
  }

  export type ProjectBulletCountAggregateInputType = {
    id?: true
    text?: true
    projectId?: true
    _all?: true
  }

  export type ProjectBulletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectBullet to aggregate.
     */
    where?: ProjectBulletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectBullets to fetch.
     */
    orderBy?: ProjectBulletOrderByWithRelationInput | ProjectBulletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectBulletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectBullets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectBullets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectBullets
    **/
    _count?: true | ProjectBulletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectBulletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectBulletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectBulletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectBulletMaxAggregateInputType
  }

  export type GetProjectBulletAggregateType<T extends ProjectBulletAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectBullet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectBullet[P]>
      : GetScalarType<T[P], AggregateProjectBullet[P]>
  }




  export type ProjectBulletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectBulletWhereInput
    orderBy?: ProjectBulletOrderByWithAggregationInput | ProjectBulletOrderByWithAggregationInput[]
    by: ProjectBulletScalarFieldEnum[] | ProjectBulletScalarFieldEnum
    having?: ProjectBulletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectBulletCountAggregateInputType | true
    _avg?: ProjectBulletAvgAggregateInputType
    _sum?: ProjectBulletSumAggregateInputType
    _min?: ProjectBulletMinAggregateInputType
    _max?: ProjectBulletMaxAggregateInputType
  }

  export type ProjectBulletGroupByOutputType = {
    id: number
    text: string
    projectId: number
    _count: ProjectBulletCountAggregateOutputType | null
    _avg: ProjectBulletAvgAggregateOutputType | null
    _sum: ProjectBulletSumAggregateOutputType | null
    _min: ProjectBulletMinAggregateOutputType | null
    _max: ProjectBulletMaxAggregateOutputType | null
  }

  type GetProjectBulletGroupByPayload<T extends ProjectBulletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectBulletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectBulletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectBulletGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectBulletGroupByOutputType[P]>
        }
      >
    >


  export type ProjectBulletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectBullet"]>

  export type ProjectBulletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectBullet"]>

  export type ProjectBulletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectBullet"]>

  export type ProjectBulletSelectScalar = {
    id?: boolean
    text?: boolean
    projectId?: boolean
  }

  export type ProjectBulletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "projectId", ExtArgs["result"]["projectBullet"]>
  export type ProjectBulletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectBulletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectBulletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectBulletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectBullet"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      projectId: number
    }, ExtArgs["result"]["projectBullet"]>
    composites: {}
  }

  type ProjectBulletGetPayload<S extends boolean | null | undefined | ProjectBulletDefaultArgs> = $Result.GetResult<Prisma.$ProjectBulletPayload, S>

  type ProjectBulletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectBulletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectBulletCountAggregateInputType | true
    }

  export interface ProjectBulletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectBullet'], meta: { name: 'ProjectBullet' } }
    /**
     * Find zero or one ProjectBullet that matches the filter.
     * @param {ProjectBulletFindUniqueArgs} args - Arguments to find a ProjectBullet
     * @example
     * // Get one ProjectBullet
     * const projectBullet = await prisma.projectBullet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectBulletFindUniqueArgs>(args: SelectSubset<T, ProjectBulletFindUniqueArgs<ExtArgs>>): Prisma__ProjectBulletClient<$Result.GetResult<Prisma.$ProjectBulletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectBullet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectBulletFindUniqueOrThrowArgs} args - Arguments to find a ProjectBullet
     * @example
     * // Get one ProjectBullet
     * const projectBullet = await prisma.projectBullet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectBulletFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectBulletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectBulletClient<$Result.GetResult<Prisma.$ProjectBulletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectBullet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectBulletFindFirstArgs} args - Arguments to find a ProjectBullet
     * @example
     * // Get one ProjectBullet
     * const projectBullet = await prisma.projectBullet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectBulletFindFirstArgs>(args?: SelectSubset<T, ProjectBulletFindFirstArgs<ExtArgs>>): Prisma__ProjectBulletClient<$Result.GetResult<Prisma.$ProjectBulletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectBullet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectBulletFindFirstOrThrowArgs} args - Arguments to find a ProjectBullet
     * @example
     * // Get one ProjectBullet
     * const projectBullet = await prisma.projectBullet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectBulletFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectBulletFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectBulletClient<$Result.GetResult<Prisma.$ProjectBulletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectBullets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectBulletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectBullets
     * const projectBullets = await prisma.projectBullet.findMany()
     * 
     * // Get first 10 ProjectBullets
     * const projectBullets = await prisma.projectBullet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectBulletWithIdOnly = await prisma.projectBullet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectBulletFindManyArgs>(args?: SelectSubset<T, ProjectBulletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectBulletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectBullet.
     * @param {ProjectBulletCreateArgs} args - Arguments to create a ProjectBullet.
     * @example
     * // Create one ProjectBullet
     * const ProjectBullet = await prisma.projectBullet.create({
     *   data: {
     *     // ... data to create a ProjectBullet
     *   }
     * })
     * 
     */
    create<T extends ProjectBulletCreateArgs>(args: SelectSubset<T, ProjectBulletCreateArgs<ExtArgs>>): Prisma__ProjectBulletClient<$Result.GetResult<Prisma.$ProjectBulletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectBullets.
     * @param {ProjectBulletCreateManyArgs} args - Arguments to create many ProjectBullets.
     * @example
     * // Create many ProjectBullets
     * const projectBullet = await prisma.projectBullet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectBulletCreateManyArgs>(args?: SelectSubset<T, ProjectBulletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectBullets and returns the data saved in the database.
     * @param {ProjectBulletCreateManyAndReturnArgs} args - Arguments to create many ProjectBullets.
     * @example
     * // Create many ProjectBullets
     * const projectBullet = await prisma.projectBullet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectBullets and only return the `id`
     * const projectBulletWithIdOnly = await prisma.projectBullet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectBulletCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectBulletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectBulletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectBullet.
     * @param {ProjectBulletDeleteArgs} args - Arguments to delete one ProjectBullet.
     * @example
     * // Delete one ProjectBullet
     * const ProjectBullet = await prisma.projectBullet.delete({
     *   where: {
     *     // ... filter to delete one ProjectBullet
     *   }
     * })
     * 
     */
    delete<T extends ProjectBulletDeleteArgs>(args: SelectSubset<T, ProjectBulletDeleteArgs<ExtArgs>>): Prisma__ProjectBulletClient<$Result.GetResult<Prisma.$ProjectBulletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectBullet.
     * @param {ProjectBulletUpdateArgs} args - Arguments to update one ProjectBullet.
     * @example
     * // Update one ProjectBullet
     * const projectBullet = await prisma.projectBullet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectBulletUpdateArgs>(args: SelectSubset<T, ProjectBulletUpdateArgs<ExtArgs>>): Prisma__ProjectBulletClient<$Result.GetResult<Prisma.$ProjectBulletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectBullets.
     * @param {ProjectBulletDeleteManyArgs} args - Arguments to filter ProjectBullets to delete.
     * @example
     * // Delete a few ProjectBullets
     * const { count } = await prisma.projectBullet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectBulletDeleteManyArgs>(args?: SelectSubset<T, ProjectBulletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectBullets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectBulletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectBullets
     * const projectBullet = await prisma.projectBullet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectBulletUpdateManyArgs>(args: SelectSubset<T, ProjectBulletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectBullets and returns the data updated in the database.
     * @param {ProjectBulletUpdateManyAndReturnArgs} args - Arguments to update many ProjectBullets.
     * @example
     * // Update many ProjectBullets
     * const projectBullet = await prisma.projectBullet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectBullets and only return the `id`
     * const projectBulletWithIdOnly = await prisma.projectBullet.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectBulletUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectBulletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectBulletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectBullet.
     * @param {ProjectBulletUpsertArgs} args - Arguments to update or create a ProjectBullet.
     * @example
     * // Update or create a ProjectBullet
     * const projectBullet = await prisma.projectBullet.upsert({
     *   create: {
     *     // ... data to create a ProjectBullet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectBullet we want to update
     *   }
     * })
     */
    upsert<T extends ProjectBulletUpsertArgs>(args: SelectSubset<T, ProjectBulletUpsertArgs<ExtArgs>>): Prisma__ProjectBulletClient<$Result.GetResult<Prisma.$ProjectBulletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectBullets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectBulletCountArgs} args - Arguments to filter ProjectBullets to count.
     * @example
     * // Count the number of ProjectBullets
     * const count = await prisma.projectBullet.count({
     *   where: {
     *     // ... the filter for the ProjectBullets we want to count
     *   }
     * })
    **/
    count<T extends ProjectBulletCountArgs>(
      args?: Subset<T, ProjectBulletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectBulletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectBullet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectBulletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectBulletAggregateArgs>(args: Subset<T, ProjectBulletAggregateArgs>): Prisma.PrismaPromise<GetProjectBulletAggregateType<T>>

    /**
     * Group by ProjectBullet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectBulletGroupByArgs} args - Group by arguments.
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
      T extends ProjectBulletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectBulletGroupByArgs['orderBy'] }
        : { orderBy?: ProjectBulletGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectBulletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectBulletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectBullet model
   */
  readonly fields: ProjectBulletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectBullet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectBulletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectBullet model
   */
  interface ProjectBulletFieldRefs {
    readonly id: FieldRef<"ProjectBullet", 'Int'>
    readonly text: FieldRef<"ProjectBullet", 'String'>
    readonly projectId: FieldRef<"ProjectBullet", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProjectBullet findUnique
   */
  export type ProjectBulletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectBullet
     */
    select?: ProjectBulletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectBullet
     */
    omit?: ProjectBulletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectBulletInclude<ExtArgs> | null
    /**
     * Filter, which ProjectBullet to fetch.
     */
    where: ProjectBulletWhereUniqueInput
  }

  /**
   * ProjectBullet findUniqueOrThrow
   */
  export type ProjectBulletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectBullet
     */
    select?: ProjectBulletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectBullet
     */
    omit?: ProjectBulletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectBulletInclude<ExtArgs> | null
    /**
     * Filter, which ProjectBullet to fetch.
     */
    where: ProjectBulletWhereUniqueInput
  }

  /**
   * ProjectBullet findFirst
   */
  export type ProjectBulletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectBullet
     */
    select?: ProjectBulletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectBullet
     */
    omit?: ProjectBulletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectBulletInclude<ExtArgs> | null
    /**
     * Filter, which ProjectBullet to fetch.
     */
    where?: ProjectBulletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectBullets to fetch.
     */
    orderBy?: ProjectBulletOrderByWithRelationInput | ProjectBulletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectBullets.
     */
    cursor?: ProjectBulletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectBullets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectBullets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectBullets.
     */
    distinct?: ProjectBulletScalarFieldEnum | ProjectBulletScalarFieldEnum[]
  }

  /**
   * ProjectBullet findFirstOrThrow
   */
  export type ProjectBulletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectBullet
     */
    select?: ProjectBulletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectBullet
     */
    omit?: ProjectBulletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectBulletInclude<ExtArgs> | null
    /**
     * Filter, which ProjectBullet to fetch.
     */
    where?: ProjectBulletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectBullets to fetch.
     */
    orderBy?: ProjectBulletOrderByWithRelationInput | ProjectBulletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectBullets.
     */
    cursor?: ProjectBulletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectBullets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectBullets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectBullets.
     */
    distinct?: ProjectBulletScalarFieldEnum | ProjectBulletScalarFieldEnum[]
  }

  /**
   * ProjectBullet findMany
   */
  export type ProjectBulletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectBullet
     */
    select?: ProjectBulletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectBullet
     */
    omit?: ProjectBulletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectBulletInclude<ExtArgs> | null
    /**
     * Filter, which ProjectBullets to fetch.
     */
    where?: ProjectBulletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectBullets to fetch.
     */
    orderBy?: ProjectBulletOrderByWithRelationInput | ProjectBulletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectBullets.
     */
    cursor?: ProjectBulletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectBullets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectBullets.
     */
    skip?: number
    distinct?: ProjectBulletScalarFieldEnum | ProjectBulletScalarFieldEnum[]
  }

  /**
   * ProjectBullet create
   */
  export type ProjectBulletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectBullet
     */
    select?: ProjectBulletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectBullet
     */
    omit?: ProjectBulletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectBulletInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectBullet.
     */
    data: XOR<ProjectBulletCreateInput, ProjectBulletUncheckedCreateInput>
  }

  /**
   * ProjectBullet createMany
   */
  export type ProjectBulletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectBullets.
     */
    data: ProjectBulletCreateManyInput | ProjectBulletCreateManyInput[]
  }

  /**
   * ProjectBullet createManyAndReturn
   */
  export type ProjectBulletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectBullet
     */
    select?: ProjectBulletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectBullet
     */
    omit?: ProjectBulletOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectBullets.
     */
    data: ProjectBulletCreateManyInput | ProjectBulletCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectBulletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectBullet update
   */
  export type ProjectBulletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectBullet
     */
    select?: ProjectBulletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectBullet
     */
    omit?: ProjectBulletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectBulletInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectBullet.
     */
    data: XOR<ProjectBulletUpdateInput, ProjectBulletUncheckedUpdateInput>
    /**
     * Choose, which ProjectBullet to update.
     */
    where: ProjectBulletWhereUniqueInput
  }

  /**
   * ProjectBullet updateMany
   */
  export type ProjectBulletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectBullets.
     */
    data: XOR<ProjectBulletUpdateManyMutationInput, ProjectBulletUncheckedUpdateManyInput>
    /**
     * Filter which ProjectBullets to update
     */
    where?: ProjectBulletWhereInput
    /**
     * Limit how many ProjectBullets to update.
     */
    limit?: number
  }

  /**
   * ProjectBullet updateManyAndReturn
   */
  export type ProjectBulletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectBullet
     */
    select?: ProjectBulletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectBullet
     */
    omit?: ProjectBulletOmit<ExtArgs> | null
    /**
     * The data used to update ProjectBullets.
     */
    data: XOR<ProjectBulletUpdateManyMutationInput, ProjectBulletUncheckedUpdateManyInput>
    /**
     * Filter which ProjectBullets to update
     */
    where?: ProjectBulletWhereInput
    /**
     * Limit how many ProjectBullets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectBulletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectBullet upsert
   */
  export type ProjectBulletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectBullet
     */
    select?: ProjectBulletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectBullet
     */
    omit?: ProjectBulletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectBulletInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectBullet to update in case it exists.
     */
    where: ProjectBulletWhereUniqueInput
    /**
     * In case the ProjectBullet found by the `where` argument doesn't exist, create a new ProjectBullet with this data.
     */
    create: XOR<ProjectBulletCreateInput, ProjectBulletUncheckedCreateInput>
    /**
     * In case the ProjectBullet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectBulletUpdateInput, ProjectBulletUncheckedUpdateInput>
  }

  /**
   * ProjectBullet delete
   */
  export type ProjectBulletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectBullet
     */
    select?: ProjectBulletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectBullet
     */
    omit?: ProjectBulletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectBulletInclude<ExtArgs> | null
    /**
     * Filter which ProjectBullet to delete.
     */
    where: ProjectBulletWhereUniqueInput
  }

  /**
   * ProjectBullet deleteMany
   */
  export type ProjectBulletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectBullets to delete
     */
    where?: ProjectBulletWhereInput
    /**
     * Limit how many ProjectBullets to delete.
     */
    limit?: number
  }

  /**
   * ProjectBullet without action
   */
  export type ProjectBulletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectBullet
     */
    select?: ProjectBulletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectBullet
     */
    omit?: ProjectBulletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectBulletInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillAvgAggregateOutputType = {
    id: number | null
  }

  export type SkillSumAggregateOutputType = {
    id: number | null
  }

  export type SkillMinAggregateOutputType = {
    id: number | null
    name: string | null
    category: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: number | null
    name: string | null
    category: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    category: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    id?: true
  }

  export type SkillSumAggregateInputType = {
    id?: true
  }

  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _avg?: SkillAvgAggregateInputType
    _sum?: SkillSumAggregateInputType
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: number
    name: string
    category: string
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category", ExtArgs["result"]["skill"]>

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      category: string
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
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
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
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
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'Int'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly category: FieldRef<"Skill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EducationScalarFieldEnum: {
    id: 'id',
    degree: 'degree',
    schoolName: 'schoolName',
    gpa: 'gpa',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const AwardScalarFieldEnum: {
    id: 'id',
    text: 'text',
    educationId: 'educationId'
  };

  export type AwardScalarFieldEnum = (typeof AwardScalarFieldEnum)[keyof typeof AwardScalarFieldEnum]


  export const RelevantCourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    educationId: 'educationId'
  };

  export type RelevantCourseScalarFieldEnum = (typeof RelevantCourseScalarFieldEnum)[keyof typeof RelevantCourseScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    company: 'company',
    location: 'location',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const ExperienceProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    experienceId: 'experienceId'
  };

  export type ExperienceProjectScalarFieldEnum = (typeof ExperienceProjectScalarFieldEnum)[keyof typeof ExperienceProjectScalarFieldEnum]


  export const ProjectTechnologyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    experienceProjectId: 'experienceProjectId'
  };

  export type ProjectTechnologyScalarFieldEnum = (typeof ProjectTechnologyScalarFieldEnum)[keyof typeof ProjectTechnologyScalarFieldEnum]


  export const ExperienceProjectBulletScalarFieldEnum: {
    id: 'id',
    text: 'text',
    experienceProjectId: 'experienceProjectId'
  };

  export type ExperienceProjectBulletScalarFieldEnum = (typeof ExperienceProjectBulletScalarFieldEnum)[keyof typeof ExperienceProjectBulletScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    date: 'date',
    githubLink: 'githubLink'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectTechScalarFieldEnum: {
    id: 'id',
    name: 'name',
    projectId: 'projectId'
  };

  export type ProjectTechScalarFieldEnum = (typeof ProjectTechScalarFieldEnum)[keyof typeof ProjectTechScalarFieldEnum]


  export const ProjectBulletScalarFieldEnum: {
    id: 'id',
    text: 'text',
    projectId: 'projectId'
  };

  export type ProjectBulletScalarFieldEnum = (typeof ProjectBulletScalarFieldEnum)[keyof typeof ProjectBulletScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type EducationWhereInput = {
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    id?: IntFilter<"Education"> | number
    degree?: StringFilter<"Education"> | string
    schoolName?: StringFilter<"Education"> | string
    gpa?: FloatFilter<"Education"> | number
    startDate?: StringFilter<"Education"> | string
    endDate?: StringFilter<"Education"> | string
    awards?: AwardListRelationFilter
    relevantCourses?: RelevantCourseListRelationFilter
  }

  export type EducationOrderByWithRelationInput = {
    id?: SortOrder
    degree?: SortOrder
    schoolName?: SortOrder
    gpa?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    awards?: AwardOrderByRelationAggregateInput
    relevantCourses?: RelevantCourseOrderByRelationAggregateInput
  }

  export type EducationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    degree?: StringFilter<"Education"> | string
    schoolName?: StringFilter<"Education"> | string
    gpa?: FloatFilter<"Education"> | number
    startDate?: StringFilter<"Education"> | string
    endDate?: StringFilter<"Education"> | string
    awards?: AwardListRelationFilter
    relevantCourses?: RelevantCourseListRelationFilter
  }, "id">

  export type EducationOrderByWithAggregationInput = {
    id?: SortOrder
    degree?: SortOrder
    schoolName?: SortOrder
    gpa?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    _count?: EducationCountOrderByAggregateInput
    _avg?: EducationAvgOrderByAggregateInput
    _max?: EducationMaxOrderByAggregateInput
    _min?: EducationMinOrderByAggregateInput
    _sum?: EducationSumOrderByAggregateInput
  }

  export type EducationScalarWhereWithAggregatesInput = {
    AND?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    OR?: EducationScalarWhereWithAggregatesInput[]
    NOT?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Education"> | number
    degree?: StringWithAggregatesFilter<"Education"> | string
    schoolName?: StringWithAggregatesFilter<"Education"> | string
    gpa?: FloatWithAggregatesFilter<"Education"> | number
    startDate?: StringWithAggregatesFilter<"Education"> | string
    endDate?: StringWithAggregatesFilter<"Education"> | string
  }

  export type AwardWhereInput = {
    AND?: AwardWhereInput | AwardWhereInput[]
    OR?: AwardWhereInput[]
    NOT?: AwardWhereInput | AwardWhereInput[]
    id?: IntFilter<"Award"> | number
    text?: StringFilter<"Award"> | string
    educationId?: IntFilter<"Award"> | number
    education?: XOR<EducationScalarRelationFilter, EducationWhereInput>
  }

  export type AwardOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    educationId?: SortOrder
    education?: EducationOrderByWithRelationInput
  }

  export type AwardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AwardWhereInput | AwardWhereInput[]
    OR?: AwardWhereInput[]
    NOT?: AwardWhereInput | AwardWhereInput[]
    text?: StringFilter<"Award"> | string
    educationId?: IntFilter<"Award"> | number
    education?: XOR<EducationScalarRelationFilter, EducationWhereInput>
  }, "id">

  export type AwardOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    educationId?: SortOrder
    _count?: AwardCountOrderByAggregateInput
    _avg?: AwardAvgOrderByAggregateInput
    _max?: AwardMaxOrderByAggregateInput
    _min?: AwardMinOrderByAggregateInput
    _sum?: AwardSumOrderByAggregateInput
  }

  export type AwardScalarWhereWithAggregatesInput = {
    AND?: AwardScalarWhereWithAggregatesInput | AwardScalarWhereWithAggregatesInput[]
    OR?: AwardScalarWhereWithAggregatesInput[]
    NOT?: AwardScalarWhereWithAggregatesInput | AwardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Award"> | number
    text?: StringWithAggregatesFilter<"Award"> | string
    educationId?: IntWithAggregatesFilter<"Award"> | number
  }

  export type RelevantCourseWhereInput = {
    AND?: RelevantCourseWhereInput | RelevantCourseWhereInput[]
    OR?: RelevantCourseWhereInput[]
    NOT?: RelevantCourseWhereInput | RelevantCourseWhereInput[]
    id?: IntFilter<"RelevantCourse"> | number
    name?: StringFilter<"RelevantCourse"> | string
    educationId?: IntFilter<"RelevantCourse"> | number
    education?: XOR<EducationScalarRelationFilter, EducationWhereInput>
  }

  export type RelevantCourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    educationId?: SortOrder
    education?: EducationOrderByWithRelationInput
  }

  export type RelevantCourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RelevantCourseWhereInput | RelevantCourseWhereInput[]
    OR?: RelevantCourseWhereInput[]
    NOT?: RelevantCourseWhereInput | RelevantCourseWhereInput[]
    name?: StringFilter<"RelevantCourse"> | string
    educationId?: IntFilter<"RelevantCourse"> | number
    education?: XOR<EducationScalarRelationFilter, EducationWhereInput>
  }, "id">

  export type RelevantCourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    educationId?: SortOrder
    _count?: RelevantCourseCountOrderByAggregateInput
    _avg?: RelevantCourseAvgOrderByAggregateInput
    _max?: RelevantCourseMaxOrderByAggregateInput
    _min?: RelevantCourseMinOrderByAggregateInput
    _sum?: RelevantCourseSumOrderByAggregateInput
  }

  export type RelevantCourseScalarWhereWithAggregatesInput = {
    AND?: RelevantCourseScalarWhereWithAggregatesInput | RelevantCourseScalarWhereWithAggregatesInput[]
    OR?: RelevantCourseScalarWhereWithAggregatesInput[]
    NOT?: RelevantCourseScalarWhereWithAggregatesInput | RelevantCourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RelevantCourse"> | number
    name?: StringWithAggregatesFilter<"RelevantCourse"> | string
    educationId?: IntWithAggregatesFilter<"RelevantCourse"> | number
  }

  export type ExperienceWhereInput = {
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    id?: IntFilter<"Experience"> | number
    title?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    location?: StringFilter<"Experience"> | string
    startDate?: StringFilter<"Experience"> | string
    endDate?: StringFilter<"Experience"> | string
    projects?: ExperienceProjectListRelationFilter
  }

  export type ExperienceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    projects?: ExperienceProjectOrderByRelationAggregateInput
  }

  export type ExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    title?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    location?: StringFilter<"Experience"> | string
    startDate?: StringFilter<"Experience"> | string
    endDate?: StringFilter<"Experience"> | string
    projects?: ExperienceProjectListRelationFilter
  }, "id">

  export type ExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    _count?: ExperienceCountOrderByAggregateInput
    _avg?: ExperienceAvgOrderByAggregateInput
    _max?: ExperienceMaxOrderByAggregateInput
    _min?: ExperienceMinOrderByAggregateInput
    _sum?: ExperienceSumOrderByAggregateInput
  }

  export type ExperienceScalarWhereWithAggregatesInput = {
    AND?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    OR?: ExperienceScalarWhereWithAggregatesInput[]
    NOT?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Experience"> | number
    title?: StringWithAggregatesFilter<"Experience"> | string
    company?: StringWithAggregatesFilter<"Experience"> | string
    location?: StringWithAggregatesFilter<"Experience"> | string
    startDate?: StringWithAggregatesFilter<"Experience"> | string
    endDate?: StringWithAggregatesFilter<"Experience"> | string
  }

  export type ExperienceProjectWhereInput = {
    AND?: ExperienceProjectWhereInput | ExperienceProjectWhereInput[]
    OR?: ExperienceProjectWhereInput[]
    NOT?: ExperienceProjectWhereInput | ExperienceProjectWhereInput[]
    id?: IntFilter<"ExperienceProject"> | number
    name?: StringFilter<"ExperienceProject"> | string
    experienceId?: IntFilter<"ExperienceProject"> | number
    experience?: XOR<ExperienceScalarRelationFilter, ExperienceWhereInput>
    technologies?: ProjectTechnologyListRelationFilter
    bullets?: ExperienceProjectBulletListRelationFilter
  }

  export type ExperienceProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    experienceId?: SortOrder
    experience?: ExperienceOrderByWithRelationInput
    technologies?: ProjectTechnologyOrderByRelationAggregateInput
    bullets?: ExperienceProjectBulletOrderByRelationAggregateInput
  }

  export type ExperienceProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExperienceProjectWhereInput | ExperienceProjectWhereInput[]
    OR?: ExperienceProjectWhereInput[]
    NOT?: ExperienceProjectWhereInput | ExperienceProjectWhereInput[]
    name?: StringFilter<"ExperienceProject"> | string
    experienceId?: IntFilter<"ExperienceProject"> | number
    experience?: XOR<ExperienceScalarRelationFilter, ExperienceWhereInput>
    technologies?: ProjectTechnologyListRelationFilter
    bullets?: ExperienceProjectBulletListRelationFilter
  }, "id">

  export type ExperienceProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    experienceId?: SortOrder
    _count?: ExperienceProjectCountOrderByAggregateInput
    _avg?: ExperienceProjectAvgOrderByAggregateInput
    _max?: ExperienceProjectMaxOrderByAggregateInput
    _min?: ExperienceProjectMinOrderByAggregateInput
    _sum?: ExperienceProjectSumOrderByAggregateInput
  }

  export type ExperienceProjectScalarWhereWithAggregatesInput = {
    AND?: ExperienceProjectScalarWhereWithAggregatesInput | ExperienceProjectScalarWhereWithAggregatesInput[]
    OR?: ExperienceProjectScalarWhereWithAggregatesInput[]
    NOT?: ExperienceProjectScalarWhereWithAggregatesInput | ExperienceProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExperienceProject"> | number
    name?: StringWithAggregatesFilter<"ExperienceProject"> | string
    experienceId?: IntWithAggregatesFilter<"ExperienceProject"> | number
  }

  export type ProjectTechnologyWhereInput = {
    AND?: ProjectTechnologyWhereInput | ProjectTechnologyWhereInput[]
    OR?: ProjectTechnologyWhereInput[]
    NOT?: ProjectTechnologyWhereInput | ProjectTechnologyWhereInput[]
    id?: IntFilter<"ProjectTechnology"> | number
    name?: StringFilter<"ProjectTechnology"> | string
    experienceProjectId?: IntFilter<"ProjectTechnology"> | number
    experienceProject?: XOR<ExperienceProjectScalarRelationFilter, ExperienceProjectWhereInput>
  }

  export type ProjectTechnologyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    experienceProjectId?: SortOrder
    experienceProject?: ExperienceProjectOrderByWithRelationInput
  }

  export type ProjectTechnologyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectTechnologyWhereInput | ProjectTechnologyWhereInput[]
    OR?: ProjectTechnologyWhereInput[]
    NOT?: ProjectTechnologyWhereInput | ProjectTechnologyWhereInput[]
    name?: StringFilter<"ProjectTechnology"> | string
    experienceProjectId?: IntFilter<"ProjectTechnology"> | number
    experienceProject?: XOR<ExperienceProjectScalarRelationFilter, ExperienceProjectWhereInput>
  }, "id">

  export type ProjectTechnologyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    experienceProjectId?: SortOrder
    _count?: ProjectTechnologyCountOrderByAggregateInput
    _avg?: ProjectTechnologyAvgOrderByAggregateInput
    _max?: ProjectTechnologyMaxOrderByAggregateInput
    _min?: ProjectTechnologyMinOrderByAggregateInput
    _sum?: ProjectTechnologySumOrderByAggregateInput
  }

  export type ProjectTechnologyScalarWhereWithAggregatesInput = {
    AND?: ProjectTechnologyScalarWhereWithAggregatesInput | ProjectTechnologyScalarWhereWithAggregatesInput[]
    OR?: ProjectTechnologyScalarWhereWithAggregatesInput[]
    NOT?: ProjectTechnologyScalarWhereWithAggregatesInput | ProjectTechnologyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectTechnology"> | number
    name?: StringWithAggregatesFilter<"ProjectTechnology"> | string
    experienceProjectId?: IntWithAggregatesFilter<"ProjectTechnology"> | number
  }

  export type ExperienceProjectBulletWhereInput = {
    AND?: ExperienceProjectBulletWhereInput | ExperienceProjectBulletWhereInput[]
    OR?: ExperienceProjectBulletWhereInput[]
    NOT?: ExperienceProjectBulletWhereInput | ExperienceProjectBulletWhereInput[]
    id?: IntFilter<"ExperienceProjectBullet"> | number
    text?: StringFilter<"ExperienceProjectBullet"> | string
    experienceProjectId?: IntFilter<"ExperienceProjectBullet"> | number
    experienceProject?: XOR<ExperienceProjectScalarRelationFilter, ExperienceProjectWhereInput>
  }

  export type ExperienceProjectBulletOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    experienceProjectId?: SortOrder
    experienceProject?: ExperienceProjectOrderByWithRelationInput
  }

  export type ExperienceProjectBulletWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExperienceProjectBulletWhereInput | ExperienceProjectBulletWhereInput[]
    OR?: ExperienceProjectBulletWhereInput[]
    NOT?: ExperienceProjectBulletWhereInput | ExperienceProjectBulletWhereInput[]
    text?: StringFilter<"ExperienceProjectBullet"> | string
    experienceProjectId?: IntFilter<"ExperienceProjectBullet"> | number
    experienceProject?: XOR<ExperienceProjectScalarRelationFilter, ExperienceProjectWhereInput>
  }, "id">

  export type ExperienceProjectBulletOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    experienceProjectId?: SortOrder
    _count?: ExperienceProjectBulletCountOrderByAggregateInput
    _avg?: ExperienceProjectBulletAvgOrderByAggregateInput
    _max?: ExperienceProjectBulletMaxOrderByAggregateInput
    _min?: ExperienceProjectBulletMinOrderByAggregateInput
    _sum?: ExperienceProjectBulletSumOrderByAggregateInput
  }

  export type ExperienceProjectBulletScalarWhereWithAggregatesInput = {
    AND?: ExperienceProjectBulletScalarWhereWithAggregatesInput | ExperienceProjectBulletScalarWhereWithAggregatesInput[]
    OR?: ExperienceProjectBulletScalarWhereWithAggregatesInput[]
    NOT?: ExperienceProjectBulletScalarWhereWithAggregatesInput | ExperienceProjectBulletScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExperienceProjectBullet"> | number
    text?: StringWithAggregatesFilter<"ExperienceProjectBullet"> | string
    experienceProjectId?: IntWithAggregatesFilter<"ExperienceProjectBullet"> | number
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    date?: StringFilter<"Project"> | string
    githubLink?: StringNullableFilter<"Project"> | string | null
    technologies?: ProjectTechListRelationFilter
    bullets?: ProjectBulletListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    githubLink?: SortOrderInput | SortOrder
    technologies?: ProjectTechOrderByRelationAggregateInput
    bullets?: ProjectBulletOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    date?: StringFilter<"Project"> | string
    githubLink?: StringNullableFilter<"Project"> | string | null
    technologies?: ProjectTechListRelationFilter
    bullets?: ProjectBulletListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    githubLink?: SortOrderInput | SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    name?: StringWithAggregatesFilter<"Project"> | string
    date?: StringWithAggregatesFilter<"Project"> | string
    githubLink?: StringNullableWithAggregatesFilter<"Project"> | string | null
  }

  export type ProjectTechWhereInput = {
    AND?: ProjectTechWhereInput | ProjectTechWhereInput[]
    OR?: ProjectTechWhereInput[]
    NOT?: ProjectTechWhereInput | ProjectTechWhereInput[]
    id?: IntFilter<"ProjectTech"> | number
    name?: StringFilter<"ProjectTech"> | string
    projectId?: IntFilter<"ProjectTech"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectTechOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectTechWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectTechWhereInput | ProjectTechWhereInput[]
    OR?: ProjectTechWhereInput[]
    NOT?: ProjectTechWhereInput | ProjectTechWhereInput[]
    name?: StringFilter<"ProjectTech"> | string
    projectId?: IntFilter<"ProjectTech"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ProjectTechOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    _count?: ProjectTechCountOrderByAggregateInput
    _avg?: ProjectTechAvgOrderByAggregateInput
    _max?: ProjectTechMaxOrderByAggregateInput
    _min?: ProjectTechMinOrderByAggregateInput
    _sum?: ProjectTechSumOrderByAggregateInput
  }

  export type ProjectTechScalarWhereWithAggregatesInput = {
    AND?: ProjectTechScalarWhereWithAggregatesInput | ProjectTechScalarWhereWithAggregatesInput[]
    OR?: ProjectTechScalarWhereWithAggregatesInput[]
    NOT?: ProjectTechScalarWhereWithAggregatesInput | ProjectTechScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectTech"> | number
    name?: StringWithAggregatesFilter<"ProjectTech"> | string
    projectId?: IntWithAggregatesFilter<"ProjectTech"> | number
  }

  export type ProjectBulletWhereInput = {
    AND?: ProjectBulletWhereInput | ProjectBulletWhereInput[]
    OR?: ProjectBulletWhereInput[]
    NOT?: ProjectBulletWhereInput | ProjectBulletWhereInput[]
    id?: IntFilter<"ProjectBullet"> | number
    text?: StringFilter<"ProjectBullet"> | string
    projectId?: IntFilter<"ProjectBullet"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectBulletOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectBulletWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectBulletWhereInput | ProjectBulletWhereInput[]
    OR?: ProjectBulletWhereInput[]
    NOT?: ProjectBulletWhereInput | ProjectBulletWhereInput[]
    text?: StringFilter<"ProjectBullet"> | string
    projectId?: IntFilter<"ProjectBullet"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ProjectBulletOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    projectId?: SortOrder
    _count?: ProjectBulletCountOrderByAggregateInput
    _avg?: ProjectBulletAvgOrderByAggregateInput
    _max?: ProjectBulletMaxOrderByAggregateInput
    _min?: ProjectBulletMinOrderByAggregateInput
    _sum?: ProjectBulletSumOrderByAggregateInput
  }

  export type ProjectBulletScalarWhereWithAggregatesInput = {
    AND?: ProjectBulletScalarWhereWithAggregatesInput | ProjectBulletScalarWhereWithAggregatesInput[]
    OR?: ProjectBulletScalarWhereWithAggregatesInput[]
    NOT?: ProjectBulletScalarWhereWithAggregatesInput | ProjectBulletScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectBullet"> | number
    text?: StringWithAggregatesFilter<"ProjectBullet"> | string
    projectId?: IntWithAggregatesFilter<"ProjectBullet"> | number
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: IntFilter<"Skill"> | number
    name?: StringFilter<"Skill"> | string
    category?: StringFilter<"Skill"> | string
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    name?: StringFilter<"Skill"> | string
    category?: StringFilter<"Skill"> | string
  }, "id">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _avg?: SkillAvgOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
    _sum?: SkillSumOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Skill"> | number
    name?: StringWithAggregatesFilter<"Skill"> | string
    category?: StringWithAggregatesFilter<"Skill"> | string
  }

  export type EducationCreateInput = {
    degree: string
    schoolName: string
    gpa: number
    startDate: string
    endDate: string
    awards?: AwardCreateNestedManyWithoutEducationInput
    relevantCourses?: RelevantCourseCreateNestedManyWithoutEducationInput
  }

  export type EducationUncheckedCreateInput = {
    id?: number
    degree: string
    schoolName: string
    gpa: number
    startDate: string
    endDate: string
    awards?: AwardUncheckedCreateNestedManyWithoutEducationInput
    relevantCourses?: RelevantCourseUncheckedCreateNestedManyWithoutEducationInput
  }

  export type EducationUpdateInput = {
    degree?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    awards?: AwardUpdateManyWithoutEducationNestedInput
    relevantCourses?: RelevantCourseUpdateManyWithoutEducationNestedInput
  }

  export type EducationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    degree?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    awards?: AwardUncheckedUpdateManyWithoutEducationNestedInput
    relevantCourses?: RelevantCourseUncheckedUpdateManyWithoutEducationNestedInput
  }

  export type EducationCreateManyInput = {
    id?: number
    degree: string
    schoolName: string
    gpa: number
    startDate: string
    endDate: string
  }

  export type EducationUpdateManyMutationInput = {
    degree?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
  }

  export type EducationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    degree?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
  }

  export type AwardCreateInput = {
    text: string
    education: EducationCreateNestedOneWithoutAwardsInput
  }

  export type AwardUncheckedCreateInput = {
    id?: number
    text: string
    educationId: number
  }

  export type AwardUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    education?: EducationUpdateOneRequiredWithoutAwardsNestedInput
  }

  export type AwardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    educationId?: IntFieldUpdateOperationsInput | number
  }

  export type AwardCreateManyInput = {
    id?: number
    text: string
    educationId: number
  }

  export type AwardUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type AwardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    educationId?: IntFieldUpdateOperationsInput | number
  }

  export type RelevantCourseCreateInput = {
    name: string
    education: EducationCreateNestedOneWithoutRelevantCoursesInput
  }

  export type RelevantCourseUncheckedCreateInput = {
    id?: number
    name: string
    educationId: number
  }

  export type RelevantCourseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    education?: EducationUpdateOneRequiredWithoutRelevantCoursesNestedInput
  }

  export type RelevantCourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    educationId?: IntFieldUpdateOperationsInput | number
  }

  export type RelevantCourseCreateManyInput = {
    id?: number
    name: string
    educationId: number
  }

  export type RelevantCourseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RelevantCourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    educationId?: IntFieldUpdateOperationsInput | number
  }

  export type ExperienceCreateInput = {
    title: string
    company: string
    location: string
    startDate: string
    endDate: string
    projects?: ExperienceProjectCreateNestedManyWithoutExperienceInput
  }

  export type ExperienceUncheckedCreateInput = {
    id?: number
    title: string
    company: string
    location: string
    startDate: string
    endDate: string
    projects?: ExperienceProjectUncheckedCreateNestedManyWithoutExperienceInput
  }

  export type ExperienceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    projects?: ExperienceProjectUpdateManyWithoutExperienceNestedInput
  }

  export type ExperienceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    projects?: ExperienceProjectUncheckedUpdateManyWithoutExperienceNestedInput
  }

  export type ExperienceCreateManyInput = {
    id?: number
    title: string
    company: string
    location: string
    startDate: string
    endDate: string
  }

  export type ExperienceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceProjectCreateInput = {
    name: string
    experience: ExperienceCreateNestedOneWithoutProjectsInput
    technologies?: ProjectTechnologyCreateNestedManyWithoutExperienceProjectInput
    bullets?: ExperienceProjectBulletCreateNestedManyWithoutExperienceProjectInput
  }

  export type ExperienceProjectUncheckedCreateInput = {
    id?: number
    name: string
    experienceId: number
    technologies?: ProjectTechnologyUncheckedCreateNestedManyWithoutExperienceProjectInput
    bullets?: ExperienceProjectBulletUncheckedCreateNestedManyWithoutExperienceProjectInput
  }

  export type ExperienceProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    experience?: ExperienceUpdateOneRequiredWithoutProjectsNestedInput
    technologies?: ProjectTechnologyUpdateManyWithoutExperienceProjectNestedInput
    bullets?: ExperienceProjectBulletUpdateManyWithoutExperienceProjectNestedInput
  }

  export type ExperienceProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    experienceId?: IntFieldUpdateOperationsInput | number
    technologies?: ProjectTechnologyUncheckedUpdateManyWithoutExperienceProjectNestedInput
    bullets?: ExperienceProjectBulletUncheckedUpdateManyWithoutExperienceProjectNestedInput
  }

  export type ExperienceProjectCreateManyInput = {
    id?: number
    name: string
    experienceId: number
  }

  export type ExperienceProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    experienceId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectTechnologyCreateInput = {
    name: string
    experienceProject: ExperienceProjectCreateNestedOneWithoutTechnologiesInput
  }

  export type ProjectTechnologyUncheckedCreateInput = {
    id?: number
    name: string
    experienceProjectId: number
  }

  export type ProjectTechnologyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    experienceProject?: ExperienceProjectUpdateOneRequiredWithoutTechnologiesNestedInput
  }

  export type ProjectTechnologyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    experienceProjectId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectTechnologyCreateManyInput = {
    id?: number
    name: string
    experienceProjectId: number
  }

  export type ProjectTechnologyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTechnologyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    experienceProjectId?: IntFieldUpdateOperationsInput | number
  }

  export type ExperienceProjectBulletCreateInput = {
    text: string
    experienceProject: ExperienceProjectCreateNestedOneWithoutBulletsInput
  }

  export type ExperienceProjectBulletUncheckedCreateInput = {
    id?: number
    text: string
    experienceProjectId: number
  }

  export type ExperienceProjectBulletUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    experienceProject?: ExperienceProjectUpdateOneRequiredWithoutBulletsNestedInput
  }

  export type ExperienceProjectBulletUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    experienceProjectId?: IntFieldUpdateOperationsInput | number
  }

  export type ExperienceProjectBulletCreateManyInput = {
    id?: number
    text: string
    experienceProjectId: number
  }

  export type ExperienceProjectBulletUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceProjectBulletUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    experienceProjectId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectCreateInput = {
    name: string
    date: string
    githubLink?: string | null
    technologies?: ProjectTechCreateNestedManyWithoutProjectInput
    bullets?: ProjectBulletCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    name: string
    date: string
    githubLink?: string | null
    technologies?: ProjectTechUncheckedCreateNestedManyWithoutProjectInput
    bullets?: ProjectBulletUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    githubLink?: NullableStringFieldUpdateOperationsInput | string | null
    technologies?: ProjectTechUpdateManyWithoutProjectNestedInput
    bullets?: ProjectBulletUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    githubLink?: NullableStringFieldUpdateOperationsInput | string | null
    technologies?: ProjectTechUncheckedUpdateManyWithoutProjectNestedInput
    bullets?: ProjectBulletUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    name: string
    date: string
    githubLink?: string | null
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    githubLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    githubLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectTechCreateInput = {
    name: string
    project: ProjectCreateNestedOneWithoutTechnologiesInput
  }

  export type ProjectTechUncheckedCreateInput = {
    id?: number
    name: string
    projectId: number
  }

  export type ProjectTechUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutTechnologiesNestedInput
  }

  export type ProjectTechUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectTechCreateManyInput = {
    id?: number
    name: string
    projectId: number
  }

  export type ProjectTechUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTechUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectBulletCreateInput = {
    text: string
    project: ProjectCreateNestedOneWithoutBulletsInput
  }

  export type ProjectBulletUncheckedCreateInput = {
    id?: number
    text: string
    projectId: number
  }

  export type ProjectBulletUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutBulletsNestedInput
  }

  export type ProjectBulletUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectBulletCreateManyInput = {
    id?: number
    text: string
    projectId: number
  }

  export type ProjectBulletUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectBulletUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type SkillCreateInput = {
    name: string
    category: string
  }

  export type SkillUncheckedCreateInput = {
    id?: number
    name: string
    category: string
  }

  export type SkillUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type SkillCreateManyInput = {
    id?: number
    name: string
    category: string
  }

  export type SkillUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AwardListRelationFilter = {
    every?: AwardWhereInput
    some?: AwardWhereInput
    none?: AwardWhereInput
  }

  export type RelevantCourseListRelationFilter = {
    every?: RelevantCourseWhereInput
    some?: RelevantCourseWhereInput
    none?: RelevantCourseWhereInput
  }

  export type AwardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RelevantCourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EducationCountOrderByAggregateInput = {
    id?: SortOrder
    degree?: SortOrder
    schoolName?: SortOrder
    gpa?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type EducationAvgOrderByAggregateInput = {
    id?: SortOrder
    gpa?: SortOrder
  }

  export type EducationMaxOrderByAggregateInput = {
    id?: SortOrder
    degree?: SortOrder
    schoolName?: SortOrder
    gpa?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type EducationMinOrderByAggregateInput = {
    id?: SortOrder
    degree?: SortOrder
    schoolName?: SortOrder
    gpa?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type EducationSumOrderByAggregateInput = {
    id?: SortOrder
    gpa?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type EducationScalarRelationFilter = {
    is?: EducationWhereInput
    isNot?: EducationWhereInput
  }

  export type AwardCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    educationId?: SortOrder
  }

  export type AwardAvgOrderByAggregateInput = {
    id?: SortOrder
    educationId?: SortOrder
  }

  export type AwardMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    educationId?: SortOrder
  }

  export type AwardMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    educationId?: SortOrder
  }

  export type AwardSumOrderByAggregateInput = {
    id?: SortOrder
    educationId?: SortOrder
  }

  export type RelevantCourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    educationId?: SortOrder
  }

  export type RelevantCourseAvgOrderByAggregateInput = {
    id?: SortOrder
    educationId?: SortOrder
  }

  export type RelevantCourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    educationId?: SortOrder
  }

  export type RelevantCourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    educationId?: SortOrder
  }

  export type RelevantCourseSumOrderByAggregateInput = {
    id?: SortOrder
    educationId?: SortOrder
  }

  export type ExperienceProjectListRelationFilter = {
    every?: ExperienceProjectWhereInput
    some?: ExperienceProjectWhereInput
    none?: ExperienceProjectWhereInput
  }

  export type ExperienceProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type ExperienceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type ExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type ExperienceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExperienceScalarRelationFilter = {
    is?: ExperienceWhereInput
    isNot?: ExperienceWhereInput
  }

  export type ProjectTechnologyListRelationFilter = {
    every?: ProjectTechnologyWhereInput
    some?: ProjectTechnologyWhereInput
    none?: ProjectTechnologyWhereInput
  }

  export type ExperienceProjectBulletListRelationFilter = {
    every?: ExperienceProjectBulletWhereInput
    some?: ExperienceProjectBulletWhereInput
    none?: ExperienceProjectBulletWhereInput
  }

  export type ProjectTechnologyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExperienceProjectBulletOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExperienceProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    experienceId?: SortOrder
  }

  export type ExperienceProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    experienceId?: SortOrder
  }

  export type ExperienceProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    experienceId?: SortOrder
  }

  export type ExperienceProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    experienceId?: SortOrder
  }

  export type ExperienceProjectSumOrderByAggregateInput = {
    id?: SortOrder
    experienceId?: SortOrder
  }

  export type ExperienceProjectScalarRelationFilter = {
    is?: ExperienceProjectWhereInput
    isNot?: ExperienceProjectWhereInput
  }

  export type ProjectTechnologyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    experienceProjectId?: SortOrder
  }

  export type ProjectTechnologyAvgOrderByAggregateInput = {
    id?: SortOrder
    experienceProjectId?: SortOrder
  }

  export type ProjectTechnologyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    experienceProjectId?: SortOrder
  }

  export type ProjectTechnologyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    experienceProjectId?: SortOrder
  }

  export type ProjectTechnologySumOrderByAggregateInput = {
    id?: SortOrder
    experienceProjectId?: SortOrder
  }

  export type ExperienceProjectBulletCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    experienceProjectId?: SortOrder
  }

  export type ExperienceProjectBulletAvgOrderByAggregateInput = {
    id?: SortOrder
    experienceProjectId?: SortOrder
  }

  export type ExperienceProjectBulletMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    experienceProjectId?: SortOrder
  }

  export type ExperienceProjectBulletMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    experienceProjectId?: SortOrder
  }

  export type ExperienceProjectBulletSumOrderByAggregateInput = {
    id?: SortOrder
    experienceProjectId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProjectTechListRelationFilter = {
    every?: ProjectTechWhereInput
    some?: ProjectTechWhereInput
    none?: ProjectTechWhereInput
  }

  export type ProjectBulletListRelationFilter = {
    every?: ProjectBulletWhereInput
    some?: ProjectBulletWhereInput
    none?: ProjectBulletWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectTechOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectBulletOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    githubLink?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    githubLink?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    githubLink?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectTechCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectTechAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectTechMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectTechMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectTechSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectBulletCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectBulletAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectBulletMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectBulletMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectBulletSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type SkillAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type SkillSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AwardCreateNestedManyWithoutEducationInput = {
    create?: XOR<AwardCreateWithoutEducationInput, AwardUncheckedCreateWithoutEducationInput> | AwardCreateWithoutEducationInput[] | AwardUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: AwardCreateOrConnectWithoutEducationInput | AwardCreateOrConnectWithoutEducationInput[]
    createMany?: AwardCreateManyEducationInputEnvelope
    connect?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
  }

  export type RelevantCourseCreateNestedManyWithoutEducationInput = {
    create?: XOR<RelevantCourseCreateWithoutEducationInput, RelevantCourseUncheckedCreateWithoutEducationInput> | RelevantCourseCreateWithoutEducationInput[] | RelevantCourseUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: RelevantCourseCreateOrConnectWithoutEducationInput | RelevantCourseCreateOrConnectWithoutEducationInput[]
    createMany?: RelevantCourseCreateManyEducationInputEnvelope
    connect?: RelevantCourseWhereUniqueInput | RelevantCourseWhereUniqueInput[]
  }

  export type AwardUncheckedCreateNestedManyWithoutEducationInput = {
    create?: XOR<AwardCreateWithoutEducationInput, AwardUncheckedCreateWithoutEducationInput> | AwardCreateWithoutEducationInput[] | AwardUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: AwardCreateOrConnectWithoutEducationInput | AwardCreateOrConnectWithoutEducationInput[]
    createMany?: AwardCreateManyEducationInputEnvelope
    connect?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
  }

  export type RelevantCourseUncheckedCreateNestedManyWithoutEducationInput = {
    create?: XOR<RelevantCourseCreateWithoutEducationInput, RelevantCourseUncheckedCreateWithoutEducationInput> | RelevantCourseCreateWithoutEducationInput[] | RelevantCourseUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: RelevantCourseCreateOrConnectWithoutEducationInput | RelevantCourseCreateOrConnectWithoutEducationInput[]
    createMany?: RelevantCourseCreateManyEducationInputEnvelope
    connect?: RelevantCourseWhereUniqueInput | RelevantCourseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AwardUpdateManyWithoutEducationNestedInput = {
    create?: XOR<AwardCreateWithoutEducationInput, AwardUncheckedCreateWithoutEducationInput> | AwardCreateWithoutEducationInput[] | AwardUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: AwardCreateOrConnectWithoutEducationInput | AwardCreateOrConnectWithoutEducationInput[]
    upsert?: AwardUpsertWithWhereUniqueWithoutEducationInput | AwardUpsertWithWhereUniqueWithoutEducationInput[]
    createMany?: AwardCreateManyEducationInputEnvelope
    set?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
    disconnect?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
    delete?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
    connect?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
    update?: AwardUpdateWithWhereUniqueWithoutEducationInput | AwardUpdateWithWhereUniqueWithoutEducationInput[]
    updateMany?: AwardUpdateManyWithWhereWithoutEducationInput | AwardUpdateManyWithWhereWithoutEducationInput[]
    deleteMany?: AwardScalarWhereInput | AwardScalarWhereInput[]
  }

  export type RelevantCourseUpdateManyWithoutEducationNestedInput = {
    create?: XOR<RelevantCourseCreateWithoutEducationInput, RelevantCourseUncheckedCreateWithoutEducationInput> | RelevantCourseCreateWithoutEducationInput[] | RelevantCourseUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: RelevantCourseCreateOrConnectWithoutEducationInput | RelevantCourseCreateOrConnectWithoutEducationInput[]
    upsert?: RelevantCourseUpsertWithWhereUniqueWithoutEducationInput | RelevantCourseUpsertWithWhereUniqueWithoutEducationInput[]
    createMany?: RelevantCourseCreateManyEducationInputEnvelope
    set?: RelevantCourseWhereUniqueInput | RelevantCourseWhereUniqueInput[]
    disconnect?: RelevantCourseWhereUniqueInput | RelevantCourseWhereUniqueInput[]
    delete?: RelevantCourseWhereUniqueInput | RelevantCourseWhereUniqueInput[]
    connect?: RelevantCourseWhereUniqueInput | RelevantCourseWhereUniqueInput[]
    update?: RelevantCourseUpdateWithWhereUniqueWithoutEducationInput | RelevantCourseUpdateWithWhereUniqueWithoutEducationInput[]
    updateMany?: RelevantCourseUpdateManyWithWhereWithoutEducationInput | RelevantCourseUpdateManyWithWhereWithoutEducationInput[]
    deleteMany?: RelevantCourseScalarWhereInput | RelevantCourseScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AwardUncheckedUpdateManyWithoutEducationNestedInput = {
    create?: XOR<AwardCreateWithoutEducationInput, AwardUncheckedCreateWithoutEducationInput> | AwardCreateWithoutEducationInput[] | AwardUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: AwardCreateOrConnectWithoutEducationInput | AwardCreateOrConnectWithoutEducationInput[]
    upsert?: AwardUpsertWithWhereUniqueWithoutEducationInput | AwardUpsertWithWhereUniqueWithoutEducationInput[]
    createMany?: AwardCreateManyEducationInputEnvelope
    set?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
    disconnect?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
    delete?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
    connect?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
    update?: AwardUpdateWithWhereUniqueWithoutEducationInput | AwardUpdateWithWhereUniqueWithoutEducationInput[]
    updateMany?: AwardUpdateManyWithWhereWithoutEducationInput | AwardUpdateManyWithWhereWithoutEducationInput[]
    deleteMany?: AwardScalarWhereInput | AwardScalarWhereInput[]
  }

  export type RelevantCourseUncheckedUpdateManyWithoutEducationNestedInput = {
    create?: XOR<RelevantCourseCreateWithoutEducationInput, RelevantCourseUncheckedCreateWithoutEducationInput> | RelevantCourseCreateWithoutEducationInput[] | RelevantCourseUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: RelevantCourseCreateOrConnectWithoutEducationInput | RelevantCourseCreateOrConnectWithoutEducationInput[]
    upsert?: RelevantCourseUpsertWithWhereUniqueWithoutEducationInput | RelevantCourseUpsertWithWhereUniqueWithoutEducationInput[]
    createMany?: RelevantCourseCreateManyEducationInputEnvelope
    set?: RelevantCourseWhereUniqueInput | RelevantCourseWhereUniqueInput[]
    disconnect?: RelevantCourseWhereUniqueInput | RelevantCourseWhereUniqueInput[]
    delete?: RelevantCourseWhereUniqueInput | RelevantCourseWhereUniqueInput[]
    connect?: RelevantCourseWhereUniqueInput | RelevantCourseWhereUniqueInput[]
    update?: RelevantCourseUpdateWithWhereUniqueWithoutEducationInput | RelevantCourseUpdateWithWhereUniqueWithoutEducationInput[]
    updateMany?: RelevantCourseUpdateManyWithWhereWithoutEducationInput | RelevantCourseUpdateManyWithWhereWithoutEducationInput[]
    deleteMany?: RelevantCourseScalarWhereInput | RelevantCourseScalarWhereInput[]
  }

  export type EducationCreateNestedOneWithoutAwardsInput = {
    create?: XOR<EducationCreateWithoutAwardsInput, EducationUncheckedCreateWithoutAwardsInput>
    connectOrCreate?: EducationCreateOrConnectWithoutAwardsInput
    connect?: EducationWhereUniqueInput
  }

  export type EducationUpdateOneRequiredWithoutAwardsNestedInput = {
    create?: XOR<EducationCreateWithoutAwardsInput, EducationUncheckedCreateWithoutAwardsInput>
    connectOrCreate?: EducationCreateOrConnectWithoutAwardsInput
    upsert?: EducationUpsertWithoutAwardsInput
    connect?: EducationWhereUniqueInput
    update?: XOR<XOR<EducationUpdateToOneWithWhereWithoutAwardsInput, EducationUpdateWithoutAwardsInput>, EducationUncheckedUpdateWithoutAwardsInput>
  }

  export type EducationCreateNestedOneWithoutRelevantCoursesInput = {
    create?: XOR<EducationCreateWithoutRelevantCoursesInput, EducationUncheckedCreateWithoutRelevantCoursesInput>
    connectOrCreate?: EducationCreateOrConnectWithoutRelevantCoursesInput
    connect?: EducationWhereUniqueInput
  }

  export type EducationUpdateOneRequiredWithoutRelevantCoursesNestedInput = {
    create?: XOR<EducationCreateWithoutRelevantCoursesInput, EducationUncheckedCreateWithoutRelevantCoursesInput>
    connectOrCreate?: EducationCreateOrConnectWithoutRelevantCoursesInput
    upsert?: EducationUpsertWithoutRelevantCoursesInput
    connect?: EducationWhereUniqueInput
    update?: XOR<XOR<EducationUpdateToOneWithWhereWithoutRelevantCoursesInput, EducationUpdateWithoutRelevantCoursesInput>, EducationUncheckedUpdateWithoutRelevantCoursesInput>
  }

  export type ExperienceProjectCreateNestedManyWithoutExperienceInput = {
    create?: XOR<ExperienceProjectCreateWithoutExperienceInput, ExperienceProjectUncheckedCreateWithoutExperienceInput> | ExperienceProjectCreateWithoutExperienceInput[] | ExperienceProjectUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: ExperienceProjectCreateOrConnectWithoutExperienceInput | ExperienceProjectCreateOrConnectWithoutExperienceInput[]
    createMany?: ExperienceProjectCreateManyExperienceInputEnvelope
    connect?: ExperienceProjectWhereUniqueInput | ExperienceProjectWhereUniqueInput[]
  }

  export type ExperienceProjectUncheckedCreateNestedManyWithoutExperienceInput = {
    create?: XOR<ExperienceProjectCreateWithoutExperienceInput, ExperienceProjectUncheckedCreateWithoutExperienceInput> | ExperienceProjectCreateWithoutExperienceInput[] | ExperienceProjectUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: ExperienceProjectCreateOrConnectWithoutExperienceInput | ExperienceProjectCreateOrConnectWithoutExperienceInput[]
    createMany?: ExperienceProjectCreateManyExperienceInputEnvelope
    connect?: ExperienceProjectWhereUniqueInput | ExperienceProjectWhereUniqueInput[]
  }

  export type ExperienceProjectUpdateManyWithoutExperienceNestedInput = {
    create?: XOR<ExperienceProjectCreateWithoutExperienceInput, ExperienceProjectUncheckedCreateWithoutExperienceInput> | ExperienceProjectCreateWithoutExperienceInput[] | ExperienceProjectUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: ExperienceProjectCreateOrConnectWithoutExperienceInput | ExperienceProjectCreateOrConnectWithoutExperienceInput[]
    upsert?: ExperienceProjectUpsertWithWhereUniqueWithoutExperienceInput | ExperienceProjectUpsertWithWhereUniqueWithoutExperienceInput[]
    createMany?: ExperienceProjectCreateManyExperienceInputEnvelope
    set?: ExperienceProjectWhereUniqueInput | ExperienceProjectWhereUniqueInput[]
    disconnect?: ExperienceProjectWhereUniqueInput | ExperienceProjectWhereUniqueInput[]
    delete?: ExperienceProjectWhereUniqueInput | ExperienceProjectWhereUniqueInput[]
    connect?: ExperienceProjectWhereUniqueInput | ExperienceProjectWhereUniqueInput[]
    update?: ExperienceProjectUpdateWithWhereUniqueWithoutExperienceInput | ExperienceProjectUpdateWithWhereUniqueWithoutExperienceInput[]
    updateMany?: ExperienceProjectUpdateManyWithWhereWithoutExperienceInput | ExperienceProjectUpdateManyWithWhereWithoutExperienceInput[]
    deleteMany?: ExperienceProjectScalarWhereInput | ExperienceProjectScalarWhereInput[]
  }

  export type ExperienceProjectUncheckedUpdateManyWithoutExperienceNestedInput = {
    create?: XOR<ExperienceProjectCreateWithoutExperienceInput, ExperienceProjectUncheckedCreateWithoutExperienceInput> | ExperienceProjectCreateWithoutExperienceInput[] | ExperienceProjectUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: ExperienceProjectCreateOrConnectWithoutExperienceInput | ExperienceProjectCreateOrConnectWithoutExperienceInput[]
    upsert?: ExperienceProjectUpsertWithWhereUniqueWithoutExperienceInput | ExperienceProjectUpsertWithWhereUniqueWithoutExperienceInput[]
    createMany?: ExperienceProjectCreateManyExperienceInputEnvelope
    set?: ExperienceProjectWhereUniqueInput | ExperienceProjectWhereUniqueInput[]
    disconnect?: ExperienceProjectWhereUniqueInput | ExperienceProjectWhereUniqueInput[]
    delete?: ExperienceProjectWhereUniqueInput | ExperienceProjectWhereUniqueInput[]
    connect?: ExperienceProjectWhereUniqueInput | ExperienceProjectWhereUniqueInput[]
    update?: ExperienceProjectUpdateWithWhereUniqueWithoutExperienceInput | ExperienceProjectUpdateWithWhereUniqueWithoutExperienceInput[]
    updateMany?: ExperienceProjectUpdateManyWithWhereWithoutExperienceInput | ExperienceProjectUpdateManyWithWhereWithoutExperienceInput[]
    deleteMany?: ExperienceProjectScalarWhereInput | ExperienceProjectScalarWhereInput[]
  }

  export type ExperienceCreateNestedOneWithoutProjectsInput = {
    create?: XOR<ExperienceCreateWithoutProjectsInput, ExperienceUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ExperienceCreateOrConnectWithoutProjectsInput
    connect?: ExperienceWhereUniqueInput
  }

  export type ProjectTechnologyCreateNestedManyWithoutExperienceProjectInput = {
    create?: XOR<ProjectTechnologyCreateWithoutExperienceProjectInput, ProjectTechnologyUncheckedCreateWithoutExperienceProjectInput> | ProjectTechnologyCreateWithoutExperienceProjectInput[] | ProjectTechnologyUncheckedCreateWithoutExperienceProjectInput[]
    connectOrCreate?: ProjectTechnologyCreateOrConnectWithoutExperienceProjectInput | ProjectTechnologyCreateOrConnectWithoutExperienceProjectInput[]
    createMany?: ProjectTechnologyCreateManyExperienceProjectInputEnvelope
    connect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
  }

  export type ExperienceProjectBulletCreateNestedManyWithoutExperienceProjectInput = {
    create?: XOR<ExperienceProjectBulletCreateWithoutExperienceProjectInput, ExperienceProjectBulletUncheckedCreateWithoutExperienceProjectInput> | ExperienceProjectBulletCreateWithoutExperienceProjectInput[] | ExperienceProjectBulletUncheckedCreateWithoutExperienceProjectInput[]
    connectOrCreate?: ExperienceProjectBulletCreateOrConnectWithoutExperienceProjectInput | ExperienceProjectBulletCreateOrConnectWithoutExperienceProjectInput[]
    createMany?: ExperienceProjectBulletCreateManyExperienceProjectInputEnvelope
    connect?: ExperienceProjectBulletWhereUniqueInput | ExperienceProjectBulletWhereUniqueInput[]
  }

  export type ProjectTechnologyUncheckedCreateNestedManyWithoutExperienceProjectInput = {
    create?: XOR<ProjectTechnologyCreateWithoutExperienceProjectInput, ProjectTechnologyUncheckedCreateWithoutExperienceProjectInput> | ProjectTechnologyCreateWithoutExperienceProjectInput[] | ProjectTechnologyUncheckedCreateWithoutExperienceProjectInput[]
    connectOrCreate?: ProjectTechnologyCreateOrConnectWithoutExperienceProjectInput | ProjectTechnologyCreateOrConnectWithoutExperienceProjectInput[]
    createMany?: ProjectTechnologyCreateManyExperienceProjectInputEnvelope
    connect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
  }

  export type ExperienceProjectBulletUncheckedCreateNestedManyWithoutExperienceProjectInput = {
    create?: XOR<ExperienceProjectBulletCreateWithoutExperienceProjectInput, ExperienceProjectBulletUncheckedCreateWithoutExperienceProjectInput> | ExperienceProjectBulletCreateWithoutExperienceProjectInput[] | ExperienceProjectBulletUncheckedCreateWithoutExperienceProjectInput[]
    connectOrCreate?: ExperienceProjectBulletCreateOrConnectWithoutExperienceProjectInput | ExperienceProjectBulletCreateOrConnectWithoutExperienceProjectInput[]
    createMany?: ExperienceProjectBulletCreateManyExperienceProjectInputEnvelope
    connect?: ExperienceProjectBulletWhereUniqueInput | ExperienceProjectBulletWhereUniqueInput[]
  }

  export type ExperienceUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<ExperienceCreateWithoutProjectsInput, ExperienceUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ExperienceCreateOrConnectWithoutProjectsInput
    upsert?: ExperienceUpsertWithoutProjectsInput
    connect?: ExperienceWhereUniqueInput
    update?: XOR<XOR<ExperienceUpdateToOneWithWhereWithoutProjectsInput, ExperienceUpdateWithoutProjectsInput>, ExperienceUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectTechnologyUpdateManyWithoutExperienceProjectNestedInput = {
    create?: XOR<ProjectTechnologyCreateWithoutExperienceProjectInput, ProjectTechnologyUncheckedCreateWithoutExperienceProjectInput> | ProjectTechnologyCreateWithoutExperienceProjectInput[] | ProjectTechnologyUncheckedCreateWithoutExperienceProjectInput[]
    connectOrCreate?: ProjectTechnologyCreateOrConnectWithoutExperienceProjectInput | ProjectTechnologyCreateOrConnectWithoutExperienceProjectInput[]
    upsert?: ProjectTechnologyUpsertWithWhereUniqueWithoutExperienceProjectInput | ProjectTechnologyUpsertWithWhereUniqueWithoutExperienceProjectInput[]
    createMany?: ProjectTechnologyCreateManyExperienceProjectInputEnvelope
    set?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    disconnect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    delete?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    connect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    update?: ProjectTechnologyUpdateWithWhereUniqueWithoutExperienceProjectInput | ProjectTechnologyUpdateWithWhereUniqueWithoutExperienceProjectInput[]
    updateMany?: ProjectTechnologyUpdateManyWithWhereWithoutExperienceProjectInput | ProjectTechnologyUpdateManyWithWhereWithoutExperienceProjectInput[]
    deleteMany?: ProjectTechnologyScalarWhereInput | ProjectTechnologyScalarWhereInput[]
  }

  export type ExperienceProjectBulletUpdateManyWithoutExperienceProjectNestedInput = {
    create?: XOR<ExperienceProjectBulletCreateWithoutExperienceProjectInput, ExperienceProjectBulletUncheckedCreateWithoutExperienceProjectInput> | ExperienceProjectBulletCreateWithoutExperienceProjectInput[] | ExperienceProjectBulletUncheckedCreateWithoutExperienceProjectInput[]
    connectOrCreate?: ExperienceProjectBulletCreateOrConnectWithoutExperienceProjectInput | ExperienceProjectBulletCreateOrConnectWithoutExperienceProjectInput[]
    upsert?: ExperienceProjectBulletUpsertWithWhereUniqueWithoutExperienceProjectInput | ExperienceProjectBulletUpsertWithWhereUniqueWithoutExperienceProjectInput[]
    createMany?: ExperienceProjectBulletCreateManyExperienceProjectInputEnvelope
    set?: ExperienceProjectBulletWhereUniqueInput | ExperienceProjectBulletWhereUniqueInput[]
    disconnect?: ExperienceProjectBulletWhereUniqueInput | ExperienceProjectBulletWhereUniqueInput[]
    delete?: ExperienceProjectBulletWhereUniqueInput | ExperienceProjectBulletWhereUniqueInput[]
    connect?: ExperienceProjectBulletWhereUniqueInput | ExperienceProjectBulletWhereUniqueInput[]
    update?: ExperienceProjectBulletUpdateWithWhereUniqueWithoutExperienceProjectInput | ExperienceProjectBulletUpdateWithWhereUniqueWithoutExperienceProjectInput[]
    updateMany?: ExperienceProjectBulletUpdateManyWithWhereWithoutExperienceProjectInput | ExperienceProjectBulletUpdateManyWithWhereWithoutExperienceProjectInput[]
    deleteMany?: ExperienceProjectBulletScalarWhereInput | ExperienceProjectBulletScalarWhereInput[]
  }

  export type ProjectTechnologyUncheckedUpdateManyWithoutExperienceProjectNestedInput = {
    create?: XOR<ProjectTechnologyCreateWithoutExperienceProjectInput, ProjectTechnologyUncheckedCreateWithoutExperienceProjectInput> | ProjectTechnologyCreateWithoutExperienceProjectInput[] | ProjectTechnologyUncheckedCreateWithoutExperienceProjectInput[]
    connectOrCreate?: ProjectTechnologyCreateOrConnectWithoutExperienceProjectInput | ProjectTechnologyCreateOrConnectWithoutExperienceProjectInput[]
    upsert?: ProjectTechnologyUpsertWithWhereUniqueWithoutExperienceProjectInput | ProjectTechnologyUpsertWithWhereUniqueWithoutExperienceProjectInput[]
    createMany?: ProjectTechnologyCreateManyExperienceProjectInputEnvelope
    set?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    disconnect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    delete?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    connect?: ProjectTechnologyWhereUniqueInput | ProjectTechnologyWhereUniqueInput[]
    update?: ProjectTechnologyUpdateWithWhereUniqueWithoutExperienceProjectInput | ProjectTechnologyUpdateWithWhereUniqueWithoutExperienceProjectInput[]
    updateMany?: ProjectTechnologyUpdateManyWithWhereWithoutExperienceProjectInput | ProjectTechnologyUpdateManyWithWhereWithoutExperienceProjectInput[]
    deleteMany?: ProjectTechnologyScalarWhereInput | ProjectTechnologyScalarWhereInput[]
  }

  export type ExperienceProjectBulletUncheckedUpdateManyWithoutExperienceProjectNestedInput = {
    create?: XOR<ExperienceProjectBulletCreateWithoutExperienceProjectInput, ExperienceProjectBulletUncheckedCreateWithoutExperienceProjectInput> | ExperienceProjectBulletCreateWithoutExperienceProjectInput[] | ExperienceProjectBulletUncheckedCreateWithoutExperienceProjectInput[]
    connectOrCreate?: ExperienceProjectBulletCreateOrConnectWithoutExperienceProjectInput | ExperienceProjectBulletCreateOrConnectWithoutExperienceProjectInput[]
    upsert?: ExperienceProjectBulletUpsertWithWhereUniqueWithoutExperienceProjectInput | ExperienceProjectBulletUpsertWithWhereUniqueWithoutExperienceProjectInput[]
    createMany?: ExperienceProjectBulletCreateManyExperienceProjectInputEnvelope
    set?: ExperienceProjectBulletWhereUniqueInput | ExperienceProjectBulletWhereUniqueInput[]
    disconnect?: ExperienceProjectBulletWhereUniqueInput | ExperienceProjectBulletWhereUniqueInput[]
    delete?: ExperienceProjectBulletWhereUniqueInput | ExperienceProjectBulletWhereUniqueInput[]
    connect?: ExperienceProjectBulletWhereUniqueInput | ExperienceProjectBulletWhereUniqueInput[]
    update?: ExperienceProjectBulletUpdateWithWhereUniqueWithoutExperienceProjectInput | ExperienceProjectBulletUpdateWithWhereUniqueWithoutExperienceProjectInput[]
    updateMany?: ExperienceProjectBulletUpdateManyWithWhereWithoutExperienceProjectInput | ExperienceProjectBulletUpdateManyWithWhereWithoutExperienceProjectInput[]
    deleteMany?: ExperienceProjectBulletScalarWhereInput | ExperienceProjectBulletScalarWhereInput[]
  }

  export type ExperienceProjectCreateNestedOneWithoutTechnologiesInput = {
    create?: XOR<ExperienceProjectCreateWithoutTechnologiesInput, ExperienceProjectUncheckedCreateWithoutTechnologiesInput>
    connectOrCreate?: ExperienceProjectCreateOrConnectWithoutTechnologiesInput
    connect?: ExperienceProjectWhereUniqueInput
  }

  export type ExperienceProjectUpdateOneRequiredWithoutTechnologiesNestedInput = {
    create?: XOR<ExperienceProjectCreateWithoutTechnologiesInput, ExperienceProjectUncheckedCreateWithoutTechnologiesInput>
    connectOrCreate?: ExperienceProjectCreateOrConnectWithoutTechnologiesInput
    upsert?: ExperienceProjectUpsertWithoutTechnologiesInput
    connect?: ExperienceProjectWhereUniqueInput
    update?: XOR<XOR<ExperienceProjectUpdateToOneWithWhereWithoutTechnologiesInput, ExperienceProjectUpdateWithoutTechnologiesInput>, ExperienceProjectUncheckedUpdateWithoutTechnologiesInput>
  }

  export type ExperienceProjectCreateNestedOneWithoutBulletsInput = {
    create?: XOR<ExperienceProjectCreateWithoutBulletsInput, ExperienceProjectUncheckedCreateWithoutBulletsInput>
    connectOrCreate?: ExperienceProjectCreateOrConnectWithoutBulletsInput
    connect?: ExperienceProjectWhereUniqueInput
  }

  export type ExperienceProjectUpdateOneRequiredWithoutBulletsNestedInput = {
    create?: XOR<ExperienceProjectCreateWithoutBulletsInput, ExperienceProjectUncheckedCreateWithoutBulletsInput>
    connectOrCreate?: ExperienceProjectCreateOrConnectWithoutBulletsInput
    upsert?: ExperienceProjectUpsertWithoutBulletsInput
    connect?: ExperienceProjectWhereUniqueInput
    update?: XOR<XOR<ExperienceProjectUpdateToOneWithWhereWithoutBulletsInput, ExperienceProjectUpdateWithoutBulletsInput>, ExperienceProjectUncheckedUpdateWithoutBulletsInput>
  }

  export type ProjectTechCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectTechCreateWithoutProjectInput, ProjectTechUncheckedCreateWithoutProjectInput> | ProjectTechCreateWithoutProjectInput[] | ProjectTechUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTechCreateOrConnectWithoutProjectInput | ProjectTechCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectTechCreateManyProjectInputEnvelope
    connect?: ProjectTechWhereUniqueInput | ProjectTechWhereUniqueInput[]
  }

  export type ProjectBulletCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectBulletCreateWithoutProjectInput, ProjectBulletUncheckedCreateWithoutProjectInput> | ProjectBulletCreateWithoutProjectInput[] | ProjectBulletUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectBulletCreateOrConnectWithoutProjectInput | ProjectBulletCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectBulletCreateManyProjectInputEnvelope
    connect?: ProjectBulletWhereUniqueInput | ProjectBulletWhereUniqueInput[]
  }

  export type ProjectTechUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectTechCreateWithoutProjectInput, ProjectTechUncheckedCreateWithoutProjectInput> | ProjectTechCreateWithoutProjectInput[] | ProjectTechUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTechCreateOrConnectWithoutProjectInput | ProjectTechCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectTechCreateManyProjectInputEnvelope
    connect?: ProjectTechWhereUniqueInput | ProjectTechWhereUniqueInput[]
  }

  export type ProjectBulletUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectBulletCreateWithoutProjectInput, ProjectBulletUncheckedCreateWithoutProjectInput> | ProjectBulletCreateWithoutProjectInput[] | ProjectBulletUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectBulletCreateOrConnectWithoutProjectInput | ProjectBulletCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectBulletCreateManyProjectInputEnvelope
    connect?: ProjectBulletWhereUniqueInput | ProjectBulletWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectTechUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectTechCreateWithoutProjectInput, ProjectTechUncheckedCreateWithoutProjectInput> | ProjectTechCreateWithoutProjectInput[] | ProjectTechUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTechCreateOrConnectWithoutProjectInput | ProjectTechCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectTechUpsertWithWhereUniqueWithoutProjectInput | ProjectTechUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectTechCreateManyProjectInputEnvelope
    set?: ProjectTechWhereUniqueInput | ProjectTechWhereUniqueInput[]
    disconnect?: ProjectTechWhereUniqueInput | ProjectTechWhereUniqueInput[]
    delete?: ProjectTechWhereUniqueInput | ProjectTechWhereUniqueInput[]
    connect?: ProjectTechWhereUniqueInput | ProjectTechWhereUniqueInput[]
    update?: ProjectTechUpdateWithWhereUniqueWithoutProjectInput | ProjectTechUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectTechUpdateManyWithWhereWithoutProjectInput | ProjectTechUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectTechScalarWhereInput | ProjectTechScalarWhereInput[]
  }

  export type ProjectBulletUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectBulletCreateWithoutProjectInput, ProjectBulletUncheckedCreateWithoutProjectInput> | ProjectBulletCreateWithoutProjectInput[] | ProjectBulletUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectBulletCreateOrConnectWithoutProjectInput | ProjectBulletCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectBulletUpsertWithWhereUniqueWithoutProjectInput | ProjectBulletUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectBulletCreateManyProjectInputEnvelope
    set?: ProjectBulletWhereUniqueInput | ProjectBulletWhereUniqueInput[]
    disconnect?: ProjectBulletWhereUniqueInput | ProjectBulletWhereUniqueInput[]
    delete?: ProjectBulletWhereUniqueInput | ProjectBulletWhereUniqueInput[]
    connect?: ProjectBulletWhereUniqueInput | ProjectBulletWhereUniqueInput[]
    update?: ProjectBulletUpdateWithWhereUniqueWithoutProjectInput | ProjectBulletUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectBulletUpdateManyWithWhereWithoutProjectInput | ProjectBulletUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectBulletScalarWhereInput | ProjectBulletScalarWhereInput[]
  }

  export type ProjectTechUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectTechCreateWithoutProjectInput, ProjectTechUncheckedCreateWithoutProjectInput> | ProjectTechCreateWithoutProjectInput[] | ProjectTechUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTechCreateOrConnectWithoutProjectInput | ProjectTechCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectTechUpsertWithWhereUniqueWithoutProjectInput | ProjectTechUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectTechCreateManyProjectInputEnvelope
    set?: ProjectTechWhereUniqueInput | ProjectTechWhereUniqueInput[]
    disconnect?: ProjectTechWhereUniqueInput | ProjectTechWhereUniqueInput[]
    delete?: ProjectTechWhereUniqueInput | ProjectTechWhereUniqueInput[]
    connect?: ProjectTechWhereUniqueInput | ProjectTechWhereUniqueInput[]
    update?: ProjectTechUpdateWithWhereUniqueWithoutProjectInput | ProjectTechUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectTechUpdateManyWithWhereWithoutProjectInput | ProjectTechUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectTechScalarWhereInput | ProjectTechScalarWhereInput[]
  }

  export type ProjectBulletUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectBulletCreateWithoutProjectInput, ProjectBulletUncheckedCreateWithoutProjectInput> | ProjectBulletCreateWithoutProjectInput[] | ProjectBulletUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectBulletCreateOrConnectWithoutProjectInput | ProjectBulletCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectBulletUpsertWithWhereUniqueWithoutProjectInput | ProjectBulletUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectBulletCreateManyProjectInputEnvelope
    set?: ProjectBulletWhereUniqueInput | ProjectBulletWhereUniqueInput[]
    disconnect?: ProjectBulletWhereUniqueInput | ProjectBulletWhereUniqueInput[]
    delete?: ProjectBulletWhereUniqueInput | ProjectBulletWhereUniqueInput[]
    connect?: ProjectBulletWhereUniqueInput | ProjectBulletWhereUniqueInput[]
    update?: ProjectBulletUpdateWithWhereUniqueWithoutProjectInput | ProjectBulletUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectBulletUpdateManyWithWhereWithoutProjectInput | ProjectBulletUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectBulletScalarWhereInput | ProjectBulletScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutTechnologiesInput = {
    create?: XOR<ProjectCreateWithoutTechnologiesInput, ProjectUncheckedCreateWithoutTechnologiesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTechnologiesInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutTechnologiesNestedInput = {
    create?: XOR<ProjectCreateWithoutTechnologiesInput, ProjectUncheckedCreateWithoutTechnologiesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTechnologiesInput
    upsert?: ProjectUpsertWithoutTechnologiesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTechnologiesInput, ProjectUpdateWithoutTechnologiesInput>, ProjectUncheckedUpdateWithoutTechnologiesInput>
  }

  export type ProjectCreateNestedOneWithoutBulletsInput = {
    create?: XOR<ProjectCreateWithoutBulletsInput, ProjectUncheckedCreateWithoutBulletsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBulletsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutBulletsNestedInput = {
    create?: XOR<ProjectCreateWithoutBulletsInput, ProjectUncheckedCreateWithoutBulletsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBulletsInput
    upsert?: ProjectUpsertWithoutBulletsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutBulletsInput, ProjectUpdateWithoutBulletsInput>, ProjectUncheckedUpdateWithoutBulletsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AwardCreateWithoutEducationInput = {
    text: string
  }

  export type AwardUncheckedCreateWithoutEducationInput = {
    id?: number
    text: string
  }

  export type AwardCreateOrConnectWithoutEducationInput = {
    where: AwardWhereUniqueInput
    create: XOR<AwardCreateWithoutEducationInput, AwardUncheckedCreateWithoutEducationInput>
  }

  export type AwardCreateManyEducationInputEnvelope = {
    data: AwardCreateManyEducationInput | AwardCreateManyEducationInput[]
  }

  export type RelevantCourseCreateWithoutEducationInput = {
    name: string
  }

  export type RelevantCourseUncheckedCreateWithoutEducationInput = {
    id?: number
    name: string
  }

  export type RelevantCourseCreateOrConnectWithoutEducationInput = {
    where: RelevantCourseWhereUniqueInput
    create: XOR<RelevantCourseCreateWithoutEducationInput, RelevantCourseUncheckedCreateWithoutEducationInput>
  }

  export type RelevantCourseCreateManyEducationInputEnvelope = {
    data: RelevantCourseCreateManyEducationInput | RelevantCourseCreateManyEducationInput[]
  }

  export type AwardUpsertWithWhereUniqueWithoutEducationInput = {
    where: AwardWhereUniqueInput
    update: XOR<AwardUpdateWithoutEducationInput, AwardUncheckedUpdateWithoutEducationInput>
    create: XOR<AwardCreateWithoutEducationInput, AwardUncheckedCreateWithoutEducationInput>
  }

  export type AwardUpdateWithWhereUniqueWithoutEducationInput = {
    where: AwardWhereUniqueInput
    data: XOR<AwardUpdateWithoutEducationInput, AwardUncheckedUpdateWithoutEducationInput>
  }

  export type AwardUpdateManyWithWhereWithoutEducationInput = {
    where: AwardScalarWhereInput
    data: XOR<AwardUpdateManyMutationInput, AwardUncheckedUpdateManyWithoutEducationInput>
  }

  export type AwardScalarWhereInput = {
    AND?: AwardScalarWhereInput | AwardScalarWhereInput[]
    OR?: AwardScalarWhereInput[]
    NOT?: AwardScalarWhereInput | AwardScalarWhereInput[]
    id?: IntFilter<"Award"> | number
    text?: StringFilter<"Award"> | string
    educationId?: IntFilter<"Award"> | number
  }

  export type RelevantCourseUpsertWithWhereUniqueWithoutEducationInput = {
    where: RelevantCourseWhereUniqueInput
    update: XOR<RelevantCourseUpdateWithoutEducationInput, RelevantCourseUncheckedUpdateWithoutEducationInput>
    create: XOR<RelevantCourseCreateWithoutEducationInput, RelevantCourseUncheckedCreateWithoutEducationInput>
  }

  export type RelevantCourseUpdateWithWhereUniqueWithoutEducationInput = {
    where: RelevantCourseWhereUniqueInput
    data: XOR<RelevantCourseUpdateWithoutEducationInput, RelevantCourseUncheckedUpdateWithoutEducationInput>
  }

  export type RelevantCourseUpdateManyWithWhereWithoutEducationInput = {
    where: RelevantCourseScalarWhereInput
    data: XOR<RelevantCourseUpdateManyMutationInput, RelevantCourseUncheckedUpdateManyWithoutEducationInput>
  }

  export type RelevantCourseScalarWhereInput = {
    AND?: RelevantCourseScalarWhereInput | RelevantCourseScalarWhereInput[]
    OR?: RelevantCourseScalarWhereInput[]
    NOT?: RelevantCourseScalarWhereInput | RelevantCourseScalarWhereInput[]
    id?: IntFilter<"RelevantCourse"> | number
    name?: StringFilter<"RelevantCourse"> | string
    educationId?: IntFilter<"RelevantCourse"> | number
  }

  export type EducationCreateWithoutAwardsInput = {
    degree: string
    schoolName: string
    gpa: number
    startDate: string
    endDate: string
    relevantCourses?: RelevantCourseCreateNestedManyWithoutEducationInput
  }

  export type EducationUncheckedCreateWithoutAwardsInput = {
    id?: number
    degree: string
    schoolName: string
    gpa: number
    startDate: string
    endDate: string
    relevantCourses?: RelevantCourseUncheckedCreateNestedManyWithoutEducationInput
  }

  export type EducationCreateOrConnectWithoutAwardsInput = {
    where: EducationWhereUniqueInput
    create: XOR<EducationCreateWithoutAwardsInput, EducationUncheckedCreateWithoutAwardsInput>
  }

  export type EducationUpsertWithoutAwardsInput = {
    update: XOR<EducationUpdateWithoutAwardsInput, EducationUncheckedUpdateWithoutAwardsInput>
    create: XOR<EducationCreateWithoutAwardsInput, EducationUncheckedCreateWithoutAwardsInput>
    where?: EducationWhereInput
  }

  export type EducationUpdateToOneWithWhereWithoutAwardsInput = {
    where?: EducationWhereInput
    data: XOR<EducationUpdateWithoutAwardsInput, EducationUncheckedUpdateWithoutAwardsInput>
  }

  export type EducationUpdateWithoutAwardsInput = {
    degree?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    relevantCourses?: RelevantCourseUpdateManyWithoutEducationNestedInput
  }

  export type EducationUncheckedUpdateWithoutAwardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    degree?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    relevantCourses?: RelevantCourseUncheckedUpdateManyWithoutEducationNestedInput
  }

  export type EducationCreateWithoutRelevantCoursesInput = {
    degree: string
    schoolName: string
    gpa: number
    startDate: string
    endDate: string
    awards?: AwardCreateNestedManyWithoutEducationInput
  }

  export type EducationUncheckedCreateWithoutRelevantCoursesInput = {
    id?: number
    degree: string
    schoolName: string
    gpa: number
    startDate: string
    endDate: string
    awards?: AwardUncheckedCreateNestedManyWithoutEducationInput
  }

  export type EducationCreateOrConnectWithoutRelevantCoursesInput = {
    where: EducationWhereUniqueInput
    create: XOR<EducationCreateWithoutRelevantCoursesInput, EducationUncheckedCreateWithoutRelevantCoursesInput>
  }

  export type EducationUpsertWithoutRelevantCoursesInput = {
    update: XOR<EducationUpdateWithoutRelevantCoursesInput, EducationUncheckedUpdateWithoutRelevantCoursesInput>
    create: XOR<EducationCreateWithoutRelevantCoursesInput, EducationUncheckedCreateWithoutRelevantCoursesInput>
    where?: EducationWhereInput
  }

  export type EducationUpdateToOneWithWhereWithoutRelevantCoursesInput = {
    where?: EducationWhereInput
    data: XOR<EducationUpdateWithoutRelevantCoursesInput, EducationUncheckedUpdateWithoutRelevantCoursesInput>
  }

  export type EducationUpdateWithoutRelevantCoursesInput = {
    degree?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    awards?: AwardUpdateManyWithoutEducationNestedInput
  }

  export type EducationUncheckedUpdateWithoutRelevantCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    degree?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    awards?: AwardUncheckedUpdateManyWithoutEducationNestedInput
  }

  export type ExperienceProjectCreateWithoutExperienceInput = {
    name: string
    technologies?: ProjectTechnologyCreateNestedManyWithoutExperienceProjectInput
    bullets?: ExperienceProjectBulletCreateNestedManyWithoutExperienceProjectInput
  }

  export type ExperienceProjectUncheckedCreateWithoutExperienceInput = {
    id?: number
    name: string
    technologies?: ProjectTechnologyUncheckedCreateNestedManyWithoutExperienceProjectInput
    bullets?: ExperienceProjectBulletUncheckedCreateNestedManyWithoutExperienceProjectInput
  }

  export type ExperienceProjectCreateOrConnectWithoutExperienceInput = {
    where: ExperienceProjectWhereUniqueInput
    create: XOR<ExperienceProjectCreateWithoutExperienceInput, ExperienceProjectUncheckedCreateWithoutExperienceInput>
  }

  export type ExperienceProjectCreateManyExperienceInputEnvelope = {
    data: ExperienceProjectCreateManyExperienceInput | ExperienceProjectCreateManyExperienceInput[]
  }

  export type ExperienceProjectUpsertWithWhereUniqueWithoutExperienceInput = {
    where: ExperienceProjectWhereUniqueInput
    update: XOR<ExperienceProjectUpdateWithoutExperienceInput, ExperienceProjectUncheckedUpdateWithoutExperienceInput>
    create: XOR<ExperienceProjectCreateWithoutExperienceInput, ExperienceProjectUncheckedCreateWithoutExperienceInput>
  }

  export type ExperienceProjectUpdateWithWhereUniqueWithoutExperienceInput = {
    where: ExperienceProjectWhereUniqueInput
    data: XOR<ExperienceProjectUpdateWithoutExperienceInput, ExperienceProjectUncheckedUpdateWithoutExperienceInput>
  }

  export type ExperienceProjectUpdateManyWithWhereWithoutExperienceInput = {
    where: ExperienceProjectScalarWhereInput
    data: XOR<ExperienceProjectUpdateManyMutationInput, ExperienceProjectUncheckedUpdateManyWithoutExperienceInput>
  }

  export type ExperienceProjectScalarWhereInput = {
    AND?: ExperienceProjectScalarWhereInput | ExperienceProjectScalarWhereInput[]
    OR?: ExperienceProjectScalarWhereInput[]
    NOT?: ExperienceProjectScalarWhereInput | ExperienceProjectScalarWhereInput[]
    id?: IntFilter<"ExperienceProject"> | number
    name?: StringFilter<"ExperienceProject"> | string
    experienceId?: IntFilter<"ExperienceProject"> | number
  }

  export type ExperienceCreateWithoutProjectsInput = {
    title: string
    company: string
    location: string
    startDate: string
    endDate: string
  }

  export type ExperienceUncheckedCreateWithoutProjectsInput = {
    id?: number
    title: string
    company: string
    location: string
    startDate: string
    endDate: string
  }

  export type ExperienceCreateOrConnectWithoutProjectsInput = {
    where: ExperienceWhereUniqueInput
    create: XOR<ExperienceCreateWithoutProjectsInput, ExperienceUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectTechnologyCreateWithoutExperienceProjectInput = {
    name: string
  }

  export type ProjectTechnologyUncheckedCreateWithoutExperienceProjectInput = {
    id?: number
    name: string
  }

  export type ProjectTechnologyCreateOrConnectWithoutExperienceProjectInput = {
    where: ProjectTechnologyWhereUniqueInput
    create: XOR<ProjectTechnologyCreateWithoutExperienceProjectInput, ProjectTechnologyUncheckedCreateWithoutExperienceProjectInput>
  }

  export type ProjectTechnologyCreateManyExperienceProjectInputEnvelope = {
    data: ProjectTechnologyCreateManyExperienceProjectInput | ProjectTechnologyCreateManyExperienceProjectInput[]
  }

  export type ExperienceProjectBulletCreateWithoutExperienceProjectInput = {
    text: string
  }

  export type ExperienceProjectBulletUncheckedCreateWithoutExperienceProjectInput = {
    id?: number
    text: string
  }

  export type ExperienceProjectBulletCreateOrConnectWithoutExperienceProjectInput = {
    where: ExperienceProjectBulletWhereUniqueInput
    create: XOR<ExperienceProjectBulletCreateWithoutExperienceProjectInput, ExperienceProjectBulletUncheckedCreateWithoutExperienceProjectInput>
  }

  export type ExperienceProjectBulletCreateManyExperienceProjectInputEnvelope = {
    data: ExperienceProjectBulletCreateManyExperienceProjectInput | ExperienceProjectBulletCreateManyExperienceProjectInput[]
  }

  export type ExperienceUpsertWithoutProjectsInput = {
    update: XOR<ExperienceUpdateWithoutProjectsInput, ExperienceUncheckedUpdateWithoutProjectsInput>
    create: XOR<ExperienceCreateWithoutProjectsInput, ExperienceUncheckedCreateWithoutProjectsInput>
    where?: ExperienceWhereInput
  }

  export type ExperienceUpdateToOneWithWhereWithoutProjectsInput = {
    where?: ExperienceWhereInput
    data: XOR<ExperienceUpdateWithoutProjectsInput, ExperienceUncheckedUpdateWithoutProjectsInput>
  }

  export type ExperienceUpdateWithoutProjectsInput = {
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTechnologyUpsertWithWhereUniqueWithoutExperienceProjectInput = {
    where: ProjectTechnologyWhereUniqueInput
    update: XOR<ProjectTechnologyUpdateWithoutExperienceProjectInput, ProjectTechnologyUncheckedUpdateWithoutExperienceProjectInput>
    create: XOR<ProjectTechnologyCreateWithoutExperienceProjectInput, ProjectTechnologyUncheckedCreateWithoutExperienceProjectInput>
  }

  export type ProjectTechnologyUpdateWithWhereUniqueWithoutExperienceProjectInput = {
    where: ProjectTechnologyWhereUniqueInput
    data: XOR<ProjectTechnologyUpdateWithoutExperienceProjectInput, ProjectTechnologyUncheckedUpdateWithoutExperienceProjectInput>
  }

  export type ProjectTechnologyUpdateManyWithWhereWithoutExperienceProjectInput = {
    where: ProjectTechnologyScalarWhereInput
    data: XOR<ProjectTechnologyUpdateManyMutationInput, ProjectTechnologyUncheckedUpdateManyWithoutExperienceProjectInput>
  }

  export type ProjectTechnologyScalarWhereInput = {
    AND?: ProjectTechnologyScalarWhereInput | ProjectTechnologyScalarWhereInput[]
    OR?: ProjectTechnologyScalarWhereInput[]
    NOT?: ProjectTechnologyScalarWhereInput | ProjectTechnologyScalarWhereInput[]
    id?: IntFilter<"ProjectTechnology"> | number
    name?: StringFilter<"ProjectTechnology"> | string
    experienceProjectId?: IntFilter<"ProjectTechnology"> | number
  }

  export type ExperienceProjectBulletUpsertWithWhereUniqueWithoutExperienceProjectInput = {
    where: ExperienceProjectBulletWhereUniqueInput
    update: XOR<ExperienceProjectBulletUpdateWithoutExperienceProjectInput, ExperienceProjectBulletUncheckedUpdateWithoutExperienceProjectInput>
    create: XOR<ExperienceProjectBulletCreateWithoutExperienceProjectInput, ExperienceProjectBulletUncheckedCreateWithoutExperienceProjectInput>
  }

  export type ExperienceProjectBulletUpdateWithWhereUniqueWithoutExperienceProjectInput = {
    where: ExperienceProjectBulletWhereUniqueInput
    data: XOR<ExperienceProjectBulletUpdateWithoutExperienceProjectInput, ExperienceProjectBulletUncheckedUpdateWithoutExperienceProjectInput>
  }

  export type ExperienceProjectBulletUpdateManyWithWhereWithoutExperienceProjectInput = {
    where: ExperienceProjectBulletScalarWhereInput
    data: XOR<ExperienceProjectBulletUpdateManyMutationInput, ExperienceProjectBulletUncheckedUpdateManyWithoutExperienceProjectInput>
  }

  export type ExperienceProjectBulletScalarWhereInput = {
    AND?: ExperienceProjectBulletScalarWhereInput | ExperienceProjectBulletScalarWhereInput[]
    OR?: ExperienceProjectBulletScalarWhereInput[]
    NOT?: ExperienceProjectBulletScalarWhereInput | ExperienceProjectBulletScalarWhereInput[]
    id?: IntFilter<"ExperienceProjectBullet"> | number
    text?: StringFilter<"ExperienceProjectBullet"> | string
    experienceProjectId?: IntFilter<"ExperienceProjectBullet"> | number
  }

  export type ExperienceProjectCreateWithoutTechnologiesInput = {
    name: string
    experience: ExperienceCreateNestedOneWithoutProjectsInput
    bullets?: ExperienceProjectBulletCreateNestedManyWithoutExperienceProjectInput
  }

  export type ExperienceProjectUncheckedCreateWithoutTechnologiesInput = {
    id?: number
    name: string
    experienceId: number
    bullets?: ExperienceProjectBulletUncheckedCreateNestedManyWithoutExperienceProjectInput
  }

  export type ExperienceProjectCreateOrConnectWithoutTechnologiesInput = {
    where: ExperienceProjectWhereUniqueInput
    create: XOR<ExperienceProjectCreateWithoutTechnologiesInput, ExperienceProjectUncheckedCreateWithoutTechnologiesInput>
  }

  export type ExperienceProjectUpsertWithoutTechnologiesInput = {
    update: XOR<ExperienceProjectUpdateWithoutTechnologiesInput, ExperienceProjectUncheckedUpdateWithoutTechnologiesInput>
    create: XOR<ExperienceProjectCreateWithoutTechnologiesInput, ExperienceProjectUncheckedCreateWithoutTechnologiesInput>
    where?: ExperienceProjectWhereInput
  }

  export type ExperienceProjectUpdateToOneWithWhereWithoutTechnologiesInput = {
    where?: ExperienceProjectWhereInput
    data: XOR<ExperienceProjectUpdateWithoutTechnologiesInput, ExperienceProjectUncheckedUpdateWithoutTechnologiesInput>
  }

  export type ExperienceProjectUpdateWithoutTechnologiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    experience?: ExperienceUpdateOneRequiredWithoutProjectsNestedInput
    bullets?: ExperienceProjectBulletUpdateManyWithoutExperienceProjectNestedInput
  }

  export type ExperienceProjectUncheckedUpdateWithoutTechnologiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    experienceId?: IntFieldUpdateOperationsInput | number
    bullets?: ExperienceProjectBulletUncheckedUpdateManyWithoutExperienceProjectNestedInput
  }

  export type ExperienceProjectCreateWithoutBulletsInput = {
    name: string
    experience: ExperienceCreateNestedOneWithoutProjectsInput
    technologies?: ProjectTechnologyCreateNestedManyWithoutExperienceProjectInput
  }

  export type ExperienceProjectUncheckedCreateWithoutBulletsInput = {
    id?: number
    name: string
    experienceId: number
    technologies?: ProjectTechnologyUncheckedCreateNestedManyWithoutExperienceProjectInput
  }

  export type ExperienceProjectCreateOrConnectWithoutBulletsInput = {
    where: ExperienceProjectWhereUniqueInput
    create: XOR<ExperienceProjectCreateWithoutBulletsInput, ExperienceProjectUncheckedCreateWithoutBulletsInput>
  }

  export type ExperienceProjectUpsertWithoutBulletsInput = {
    update: XOR<ExperienceProjectUpdateWithoutBulletsInput, ExperienceProjectUncheckedUpdateWithoutBulletsInput>
    create: XOR<ExperienceProjectCreateWithoutBulletsInput, ExperienceProjectUncheckedCreateWithoutBulletsInput>
    where?: ExperienceProjectWhereInput
  }

  export type ExperienceProjectUpdateToOneWithWhereWithoutBulletsInput = {
    where?: ExperienceProjectWhereInput
    data: XOR<ExperienceProjectUpdateWithoutBulletsInput, ExperienceProjectUncheckedUpdateWithoutBulletsInput>
  }

  export type ExperienceProjectUpdateWithoutBulletsInput = {
    name?: StringFieldUpdateOperationsInput | string
    experience?: ExperienceUpdateOneRequiredWithoutProjectsNestedInput
    technologies?: ProjectTechnologyUpdateManyWithoutExperienceProjectNestedInput
  }

  export type ExperienceProjectUncheckedUpdateWithoutBulletsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    experienceId?: IntFieldUpdateOperationsInput | number
    technologies?: ProjectTechnologyUncheckedUpdateManyWithoutExperienceProjectNestedInput
  }

  export type ProjectTechCreateWithoutProjectInput = {
    name: string
  }

  export type ProjectTechUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
  }

  export type ProjectTechCreateOrConnectWithoutProjectInput = {
    where: ProjectTechWhereUniqueInput
    create: XOR<ProjectTechCreateWithoutProjectInput, ProjectTechUncheckedCreateWithoutProjectInput>
  }

  export type ProjectTechCreateManyProjectInputEnvelope = {
    data: ProjectTechCreateManyProjectInput | ProjectTechCreateManyProjectInput[]
  }

  export type ProjectBulletCreateWithoutProjectInput = {
    text: string
  }

  export type ProjectBulletUncheckedCreateWithoutProjectInput = {
    id?: number
    text: string
  }

  export type ProjectBulletCreateOrConnectWithoutProjectInput = {
    where: ProjectBulletWhereUniqueInput
    create: XOR<ProjectBulletCreateWithoutProjectInput, ProjectBulletUncheckedCreateWithoutProjectInput>
  }

  export type ProjectBulletCreateManyProjectInputEnvelope = {
    data: ProjectBulletCreateManyProjectInput | ProjectBulletCreateManyProjectInput[]
  }

  export type ProjectTechUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectTechWhereUniqueInput
    update: XOR<ProjectTechUpdateWithoutProjectInput, ProjectTechUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectTechCreateWithoutProjectInput, ProjectTechUncheckedCreateWithoutProjectInput>
  }

  export type ProjectTechUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectTechWhereUniqueInput
    data: XOR<ProjectTechUpdateWithoutProjectInput, ProjectTechUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectTechUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectTechScalarWhereInput
    data: XOR<ProjectTechUpdateManyMutationInput, ProjectTechUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectTechScalarWhereInput = {
    AND?: ProjectTechScalarWhereInput | ProjectTechScalarWhereInput[]
    OR?: ProjectTechScalarWhereInput[]
    NOT?: ProjectTechScalarWhereInput | ProjectTechScalarWhereInput[]
    id?: IntFilter<"ProjectTech"> | number
    name?: StringFilter<"ProjectTech"> | string
    projectId?: IntFilter<"ProjectTech"> | number
  }

  export type ProjectBulletUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectBulletWhereUniqueInput
    update: XOR<ProjectBulletUpdateWithoutProjectInput, ProjectBulletUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectBulletCreateWithoutProjectInput, ProjectBulletUncheckedCreateWithoutProjectInput>
  }

  export type ProjectBulletUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectBulletWhereUniqueInput
    data: XOR<ProjectBulletUpdateWithoutProjectInput, ProjectBulletUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectBulletUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectBulletScalarWhereInput
    data: XOR<ProjectBulletUpdateManyMutationInput, ProjectBulletUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectBulletScalarWhereInput = {
    AND?: ProjectBulletScalarWhereInput | ProjectBulletScalarWhereInput[]
    OR?: ProjectBulletScalarWhereInput[]
    NOT?: ProjectBulletScalarWhereInput | ProjectBulletScalarWhereInput[]
    id?: IntFilter<"ProjectBullet"> | number
    text?: StringFilter<"ProjectBullet"> | string
    projectId?: IntFilter<"ProjectBullet"> | number
  }

  export type ProjectCreateWithoutTechnologiesInput = {
    name: string
    date: string
    githubLink?: string | null
    bullets?: ProjectBulletCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTechnologiesInput = {
    id?: number
    name: string
    date: string
    githubLink?: string | null
    bullets?: ProjectBulletUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTechnologiesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTechnologiesInput, ProjectUncheckedCreateWithoutTechnologiesInput>
  }

  export type ProjectUpsertWithoutTechnologiesInput = {
    update: XOR<ProjectUpdateWithoutTechnologiesInput, ProjectUncheckedUpdateWithoutTechnologiesInput>
    create: XOR<ProjectCreateWithoutTechnologiesInput, ProjectUncheckedCreateWithoutTechnologiesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTechnologiesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTechnologiesInput, ProjectUncheckedUpdateWithoutTechnologiesInput>
  }

  export type ProjectUpdateWithoutTechnologiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    githubLink?: NullableStringFieldUpdateOperationsInput | string | null
    bullets?: ProjectBulletUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTechnologiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    githubLink?: NullableStringFieldUpdateOperationsInput | string | null
    bullets?: ProjectBulletUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutBulletsInput = {
    name: string
    date: string
    githubLink?: string | null
    technologies?: ProjectTechCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutBulletsInput = {
    id?: number
    name: string
    date: string
    githubLink?: string | null
    technologies?: ProjectTechUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutBulletsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutBulletsInput, ProjectUncheckedCreateWithoutBulletsInput>
  }

  export type ProjectUpsertWithoutBulletsInput = {
    update: XOR<ProjectUpdateWithoutBulletsInput, ProjectUncheckedUpdateWithoutBulletsInput>
    create: XOR<ProjectCreateWithoutBulletsInput, ProjectUncheckedCreateWithoutBulletsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutBulletsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutBulletsInput, ProjectUncheckedUpdateWithoutBulletsInput>
  }

  export type ProjectUpdateWithoutBulletsInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    githubLink?: NullableStringFieldUpdateOperationsInput | string | null
    technologies?: ProjectTechUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutBulletsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    githubLink?: NullableStringFieldUpdateOperationsInput | string | null
    technologies?: ProjectTechUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type AwardCreateManyEducationInput = {
    id?: number
    text: string
  }

  export type RelevantCourseCreateManyEducationInput = {
    id?: number
    name: string
  }

  export type AwardUpdateWithoutEducationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type AwardUncheckedUpdateWithoutEducationInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type AwardUncheckedUpdateManyWithoutEducationInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type RelevantCourseUpdateWithoutEducationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RelevantCourseUncheckedUpdateWithoutEducationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RelevantCourseUncheckedUpdateManyWithoutEducationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceProjectCreateManyExperienceInput = {
    id?: number
    name: string
  }

  export type ExperienceProjectUpdateWithoutExperienceInput = {
    name?: StringFieldUpdateOperationsInput | string
    technologies?: ProjectTechnologyUpdateManyWithoutExperienceProjectNestedInput
    bullets?: ExperienceProjectBulletUpdateManyWithoutExperienceProjectNestedInput
  }

  export type ExperienceProjectUncheckedUpdateWithoutExperienceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    technologies?: ProjectTechnologyUncheckedUpdateManyWithoutExperienceProjectNestedInput
    bullets?: ExperienceProjectBulletUncheckedUpdateManyWithoutExperienceProjectNestedInput
  }

  export type ExperienceProjectUncheckedUpdateManyWithoutExperienceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTechnologyCreateManyExperienceProjectInput = {
    id?: number
    name: string
  }

  export type ExperienceProjectBulletCreateManyExperienceProjectInput = {
    id?: number
    text: string
  }

  export type ProjectTechnologyUpdateWithoutExperienceProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTechnologyUncheckedUpdateWithoutExperienceProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTechnologyUncheckedUpdateManyWithoutExperienceProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceProjectBulletUpdateWithoutExperienceProjectInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceProjectBulletUncheckedUpdateWithoutExperienceProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceProjectBulletUncheckedUpdateManyWithoutExperienceProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTechCreateManyProjectInput = {
    id?: number
    name: string
  }

  export type ProjectBulletCreateManyProjectInput = {
    id?: number
    text: string
  }

  export type ProjectTechUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTechUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTechUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectBulletUpdateWithoutProjectInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectBulletUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectBulletUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
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