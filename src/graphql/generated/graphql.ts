/* eslint-disable */
// @ts-nocheck
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any };
  /** A local date string (i.e., with no associated timezone) in `YYYY-MM-DD` format, e.g. `2020-01-01`. */
  LocalDate: { input: any; output: any };
  /** A string that cannot be passed as an empty value */
  NonEmptyString: { input: any; output: any };
  /** Integers that will have a value greater than 0. */
  PositiveInt: { input: any; output: any };
};

export type AuthData = {
  token: Scalars["String"]["output"];
  user: Usuario;
};

export type Mutation = {
  auth: AuthData;
};

export type MutationAuthArgs = {
  cpf: Scalars["String"]["input"];
};

export enum OrderType {
  Asc = "ASC",
  Desc = "DESC",
}

export type Pagination = {
  currentPage: Scalars["Int"]["output"];
  limit: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type PaginationFilter = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Query = {
  getUsersBySlug: Array<Usuario>;
  me: Usuario;
  ping: Scalars["String"]["output"];
  selectUser: Array<Usuario>;
  usuarioGet?: Maybe<Usuario>;
  usuarioGetByRegistration?: Maybe<Usuario>;
};

export type QueryGetUsersBySlugArgs = {
  slug: Scalars["String"]["input"];
};

export type QueryUsuarioGetArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUsuarioGetByRegistrationArgs = {
  matricula: Scalars["ID"]["input"];
};

export type Usuario = {
  administrador?: Maybe<Scalars["Boolean"]["output"]>;
  cpf?: Maybe<Scalars["String"]["output"]>;
  funcionarioMatricula?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  nome?: Maybe<Scalars["String"]["output"]>;
};
