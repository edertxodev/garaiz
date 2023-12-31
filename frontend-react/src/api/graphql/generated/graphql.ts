import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Conversation = {
  __typename?: 'Conversation';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  messages?: Maybe<MessageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  uuid?: Maybe<Scalars['String']['output']>;
};


export type ConversationMessagesArgs = {
  filters?: InputMaybe<MessageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ConversationUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ConversationEntity = {
  __typename?: 'ConversationEntity';
  attributes?: Maybe<Conversation>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ConversationEntityResponse = {
  __typename?: 'ConversationEntityResponse';
  data?: Maybe<ConversationEntity>;
};

export type ConversationEntityResponseCollection = {
  __typename?: 'ConversationEntityResponseCollection';
  data: Array<ConversationEntity>;
  meta: ResponseCollectionMeta;
};

export type ConversationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ConversationFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  messages?: InputMaybe<MessageFiltersInput>;
  not?: InputMaybe<ConversationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ConversationFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
  uuid?: InputMaybe<StringFilterInput>;
};

export type ConversationInput = {
  messages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type ConversationRelationResponseCollection = {
  __typename?: 'ConversationRelationResponseCollection';
  data: Array<ConversationEntity>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Userspermissionsuser_Color {
  Blue = 'Blue',
  Green = 'Green',
  Orange = 'Orange',
  Pink = 'Pink',
  Red = 'Red',
  Yellow = 'Yellow'
}

export enum Enum_Userspermissionsuser_Gender {
  Female = 'Female',
  Male = 'Male',
  Other = 'Other'
}

export enum Enum_Userspermissionsuser_Locale {
  En = 'En',
  Es = 'Es'
}

export type Feature = {
  __typename?: 'Feature';
  chat?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  login?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FeatureEntity = {
  __typename?: 'FeatureEntity';
  attributes?: Maybe<Feature>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type FeatureEntityResponse = {
  __typename?: 'FeatureEntityResponse';
  data?: Maybe<FeatureEntity>;
};

export type FeatureInput = {
  chat?: InputMaybe<Scalars['Boolean']['input']>;
  login?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Conversation | Feature | I18NLocale | Message | Note | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Message = {
  __typename?: 'Message';
  content: Scalars['String']['output'];
  conversation?: Maybe<ConversationEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  timestamp: Scalars['DateTime']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type MessageEntity = {
  __typename?: 'MessageEntity';
  attributes?: Maybe<Message>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type MessageEntityResponse = {
  __typename?: 'MessageEntityResponse';
  data?: Maybe<MessageEntity>;
};

export type MessageEntityResponseCollection = {
  __typename?: 'MessageEntityResponseCollection';
  data: Array<MessageEntity>;
  meta: ResponseCollectionMeta;
};

export type MessageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MessageFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  conversation?: InputMaybe<ConversationFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<MessageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MessageFiltersInput>>>;
  timestamp?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type MessageInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  conversation?: InputMaybe<Scalars['ID']['input']>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
};

export type MessageRelationResponseCollection = {
  __typename?: 'MessageRelationResponseCollection';
  data: Array<MessageEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createConversation?: Maybe<ConversationEntityResponse>;
  createMessage?: Maybe<MessageEntityResponse>;
  createNote?: Maybe<NoteEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteConversation?: Maybe<ConversationEntityResponse>;
  deleteFeature?: Maybe<FeatureEntityResponse>;
  deleteMessage?: Maybe<MessageEntityResponse>;
  deleteNote?: Maybe<NoteEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateConversation?: Maybe<ConversationEntityResponse>;
  updateFeature?: Maybe<FeatureEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateMessage?: Maybe<MessageEntityResponse>;
  updateNote?: Maybe<NoteEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateConversationArgs = {
  data: ConversationInput;
};


export type MutationCreateMessageArgs = {
  data: MessageInput;
};


export type MutationCreateNoteArgs = {
  data: NoteInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteConversationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMessageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteNoteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateConversationArgs = {
  data: ConversationInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFeatureArgs = {
  data: FeatureInput;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateMessageArgs = {
  data: MessageInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateNoteArgs = {
  data: NoteInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Note = {
  __typename?: 'Note';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type NoteEntity = {
  __typename?: 'NoteEntity';
  attributes?: Maybe<Note>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type NoteEntityResponse = {
  __typename?: 'NoteEntityResponse';
  data?: Maybe<NoteEntity>;
};

export type NoteEntityResponseCollection = {
  __typename?: 'NoteEntityResponseCollection';
  data: Array<NoteEntity>;
  meta: ResponseCollectionMeta;
};

export type NoteFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NoteFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<NoteFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NoteFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type NoteInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  conversation?: Maybe<ConversationEntityResponse>;
  conversations?: Maybe<ConversationEntityResponseCollection>;
  feature?: Maybe<FeatureEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  message?: Maybe<MessageEntityResponse>;
  messages?: Maybe<MessageEntityResponseCollection>;
  note?: Maybe<NoteEntityResponse>;
  notes?: Maybe<NoteEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryConversationArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryConversationsArgs = {
  filters?: InputMaybe<ConversationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMessageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMessagesArgs = {
  filters?: InputMaybe<MessageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNoteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryNotesArgs = {
  filters?: InputMaybe<NoteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  avatar_url?: Maybe<Scalars['String']['output']>;
  birthdate?: Maybe<Scalars['Date']['output']>;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  color: Enum_Userspermissionsuser_Color;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  conversations?: Maybe<ConversationRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  gender?: Maybe<Enum_Userspermissionsuser_Gender>;
  lastname?: Maybe<Scalars['String']['output']>;
  locale: Enum_Userspermissionsuser_Locale;
  name?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};


export type UsersPermissionsUserConversationsArgs = {
  filters?: InputMaybe<ConversationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  avatar_url?: InputMaybe<StringFilterInput>;
  birthdate?: InputMaybe<DateFilterInput>;
  blocked?: InputMaybe<BooleanFilterInput>;
  color?: InputMaybe<StringFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  conversations?: InputMaybe<ConversationFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  gender?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lastname?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  birthdate?: InputMaybe<Scalars['Date']['input']>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  color?: InputMaybe<Enum_Userspermissionsuser_Color>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  conversations?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  email?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Enum_Userspermissionsuser_Gender>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Enum_Userspermissionsuser_Locale>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type ConversationsPropsFragment = { __typename?: 'ConversationEntityResponseCollection', data: Array<{ __typename?: 'ConversationEntity', id?: string | null, attributes?: { __typename?: 'Conversation', uuid?: string | null, users?: { __typename?: 'UsersPermissionsUserRelationResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, name?: string | null, lastname?: string | null, avatar_url?: string | null, email: string, color: Enum_Userspermissionsuser_Color, locale: Enum_Userspermissionsuser_Locale } | null }> } | null } | null }> };

export type PaginationPropsFragment = { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } };

export type UserPropsFragment = { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, email: string, name?: string | null, lastname?: string | null, birthdate?: any | null, gender?: Enum_Userspermissionsuser_Gender | null, avatar_url?: string | null, color: Enum_Userspermissionsuser_Color, locale: Enum_Userspermissionsuser_Locale } | null } | null };

export type UsersPropsFragment = { __typename?: 'UsersPermissionsUserEntityResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, email: string, name?: string | null, lastname?: string | null, birthdate?: any | null, gender?: Enum_Userspermissionsuser_Gender | null, avatar_url?: string | null, color: Enum_Userspermissionsuser_Color, locale: Enum_Userspermissionsuser_Locale } | null }> };

export type CreateConversationMutationVariables = Exact<{
  data: ConversationInput;
}>;


export type CreateConversationMutation = { __typename?: 'Mutation', createConversation?: { __typename?: 'ConversationEntityResponse', data?: { __typename?: 'ConversationEntity', id?: string | null, attributes?: { __typename?: 'Conversation', uuid?: string | null } | null } | null } | null };

export type DeleteConversationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteConversationMutation = { __typename?: 'Mutation', deleteConversation?: { __typename?: 'ConversationEntityResponse', data?: { __typename?: 'ConversationEntity', id?: string | null } | null } | null };

export type CreateMessageMutationVariables = Exact<{
  data: MessageInput;
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage?: { __typename?: 'MessageEntityResponse', data?: { __typename?: 'MessageEntity', id?: string | null } | null } | null };

export type DeleteMessageMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteMessageMutation = { __typename?: 'Mutation', deleteMessage?: { __typename?: 'MessageEntityResponse', data?: { __typename?: 'MessageEntity', id?: string | null } | null } | null };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: UsersPermissionsUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUsersPermissionsUser: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, email: string, name?: string | null, lastname?: string | null, birthdate?: any | null, gender?: Enum_Userspermissionsuser_Gender | null, avatar_url?: string | null, color: Enum_Userspermissionsuser_Color, locale: Enum_Userspermissionsuser_Locale } | null } | null } };

export type GetConversationQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetConversationQuery = { __typename?: 'Query', conversation?: { __typename?: 'ConversationEntityResponse', data?: { __typename?: 'ConversationEntity', id?: string | null, attributes?: { __typename?: 'Conversation', uuid?: string | null, users?: { __typename?: 'UsersPermissionsUserRelationResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, email: string, name?: string | null, lastname?: string | null, avatar_url?: string | null, color: Enum_Userspermissionsuser_Color, locale: Enum_Userspermissionsuser_Locale } | null }> } | null } | null } | null } | null };

export type GetConversationsQueryVariables = Exact<{
  filters?: InputMaybe<ConversationFiltersInput>;
}>;


export type GetConversationsQuery = { __typename?: 'Query', conversations?: { __typename?: 'ConversationEntityResponseCollection', data: Array<{ __typename?: 'ConversationEntity', id?: string | null, attributes?: { __typename?: 'Conversation', uuid?: string | null, users?: { __typename?: 'UsersPermissionsUserRelationResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, name?: string | null, lastname?: string | null, avatar_url?: string | null, email: string, color: Enum_Userspermissionsuser_Color, locale: Enum_Userspermissionsuser_Locale } | null }> } | null } | null }> } | null };

export type GetFeaturesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeaturesQuery = { __typename?: 'Query', feature?: { __typename?: 'FeatureEntityResponse', data?: { __typename?: 'FeatureEntity', attributes?: { __typename?: 'Feature', chat?: boolean | null, login?: boolean | null } | null } | null } | null };

export type GetMessagesQueryVariables = Exact<{
  filters?: InputMaybe<MessageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetMessagesQuery = { __typename?: 'Query', messages?: { __typename?: 'MessageEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } }, data: Array<{ __typename?: 'MessageEntity', id?: string | null, attributes?: { __typename?: 'Message', content: string, timestamp: any, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, email: string, name?: string | null, lastname?: string | null, birthdate?: any | null, gender?: Enum_Userspermissionsuser_Gender | null, avatar_url?: string | null, color: Enum_Userspermissionsuser_Color, locale: Enum_Userspermissionsuser_Locale } | null } | null } | null } | null }> } | null };

export type GetUsersQueryVariables = Exact<{
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
}>;


export type GetUsersQuery = { __typename?: 'Query', usersPermissionsUsers?: { __typename?: 'UsersPermissionsUserEntityResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, email: string, name?: string | null, lastname?: string | null, birthdate?: any | null, gender?: Enum_Userspermissionsuser_Gender | null, avatar_url?: string | null, color: Enum_Userspermissionsuser_Color, locale: Enum_Userspermissionsuser_Locale } | null }> } | null };

export const ConversationsPropsFragmentDoc = `
    fragment ConversationsProps on ConversationEntityResponseCollection {
  data {
    id
    attributes {
      uuid
      users {
        data {
          id
          attributes {
            username
            name
            lastname
            avatar_url
            email
            color
            locale
          }
        }
      }
    }
  }
}
    `;
export const PaginationPropsFragmentDoc = `
    fragment PaginationProps on ResponseCollectionMeta {
  pagination {
    total
    page
    pageSize
    pageCount
  }
}
    `;
export const UserPropsFragmentDoc = `
    fragment UserProps on UsersPermissionsUserEntityResponse {
  data {
    id
    attributes {
      username
      email
      name
      lastname
      birthdate
      gender
      avatar_url
      color
      locale
    }
  }
}
    `;
export const UsersPropsFragmentDoc = `
    fragment UsersProps on UsersPermissionsUserEntityResponseCollection {
  data {
    id
    attributes {
      username
      email
      name
      lastname
      birthdate
      gender
      avatar_url
      color
      locale
    }
  }
}
    `;
export const CreateConversationDocument = `
    mutation CreateConversation($data: ConversationInput!) {
  createConversation(data: $data) {
    data {
      id
      attributes {
        uuid
      }
    }
  }
}
    `;
export const useCreateConversationMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateConversationMutation, TError, CreateConversationMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateConversationMutation, TError, CreateConversationMutationVariables, TContext>(
      ['CreateConversation'],
      (variables?: CreateConversationMutationVariables) => fetcher<CreateConversationMutation, CreateConversationMutationVariables>(client, CreateConversationDocument, variables, headers)(),
      options
    );
export const DeleteConversationDocument = `
    mutation DeleteConversation($id: ID!) {
  deleteConversation(id: $id) {
    data {
      id
    }
  }
}
    `;
export const useDeleteConversationMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteConversationMutation, TError, DeleteConversationMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteConversationMutation, TError, DeleteConversationMutationVariables, TContext>(
      ['DeleteConversation'],
      (variables?: DeleteConversationMutationVariables) => fetcher<DeleteConversationMutation, DeleteConversationMutationVariables>(client, DeleteConversationDocument, variables, headers)(),
      options
    );
export const CreateMessageDocument = `
    mutation CreateMessage($data: MessageInput!) {
  createMessage(data: $data) {
    data {
      id
    }
  }
}
    `;
export const useCreateMessageMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateMessageMutation, TError, CreateMessageMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateMessageMutation, TError, CreateMessageMutationVariables, TContext>(
      ['CreateMessage'],
      (variables?: CreateMessageMutationVariables) => fetcher<CreateMessageMutation, CreateMessageMutationVariables>(client, CreateMessageDocument, variables, headers)(),
      options
    );
export const DeleteMessageDocument = `
    mutation DeleteMessage($id: ID!) {
  deleteMessage(id: $id) {
    data {
      id
    }
  }
}
    `;
export const useDeleteMessageMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteMessageMutation, TError, DeleteMessageMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteMessageMutation, TError, DeleteMessageMutationVariables, TContext>(
      ['DeleteMessage'],
      (variables?: DeleteMessageMutationVariables) => fetcher<DeleteMessageMutation, DeleteMessageMutationVariables>(client, DeleteMessageDocument, variables, headers)(),
      options
    );
export const UpdateUserDocument = `
    mutation UpdateUser($id: ID!, $data: UsersPermissionsUserInput!) {
  updateUsersPermissionsUser(id: $id, data: $data) {
    ...UserProps
  }
}
    ${UserPropsFragmentDoc}`;
export const useUpdateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateUserMutation, TError, UpdateUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateUserMutation, TError, UpdateUserMutationVariables, TContext>(
      ['UpdateUser'],
      (variables?: UpdateUserMutationVariables) => fetcher<UpdateUserMutation, UpdateUserMutationVariables>(client, UpdateUserDocument, variables, headers)(),
      options
    );
export const GetConversationDocument = `
    query GetConversation($id: ID) {
  conversation(id: $id) {
    data {
      id
      attributes {
        uuid
        users {
          data {
            id
            attributes {
              username
              email
              name
              lastname
              avatar_url
              color
              locale
            }
          }
        }
      }
    }
  }
}
    `;
export const useGetConversationQuery = <
      TData = GetConversationQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetConversationQueryVariables,
      options?: UseQueryOptions<GetConversationQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetConversationQuery, TError, TData>(
      variables === undefined ? ['GetConversation'] : ['GetConversation', variables],
      fetcher<GetConversationQuery, GetConversationQueryVariables>(client, GetConversationDocument, variables, headers),
      options
    );
export const GetConversationsDocument = `
    query GetConversations($filters: ConversationFiltersInput) {
  conversations(filters: $filters) {
    ...ConversationsProps
  }
}
    ${ConversationsPropsFragmentDoc}`;
export const useGetConversationsQuery = <
      TData = GetConversationsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetConversationsQueryVariables,
      options?: UseQueryOptions<GetConversationsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetConversationsQuery, TError, TData>(
      variables === undefined ? ['GetConversations'] : ['GetConversations', variables],
      fetcher<GetConversationsQuery, GetConversationsQueryVariables>(client, GetConversationsDocument, variables, headers),
      options
    );
export const GetFeaturesDocument = `
    query GetFeatures {
  feature {
    data {
      attributes {
        chat
        login
      }
    }
  }
}
    `;
export const useGetFeaturesQuery = <
      TData = GetFeaturesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetFeaturesQueryVariables,
      options?: UseQueryOptions<GetFeaturesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetFeaturesQuery, TError, TData>(
      variables === undefined ? ['GetFeatures'] : ['GetFeatures', variables],
      fetcher<GetFeaturesQuery, GetFeaturesQueryVariables>(client, GetFeaturesDocument, variables, headers),
      options
    );
export const GetMessagesDocument = `
    query GetMessages($filters: MessageFiltersInput, $pagination: PaginationArg, $sort: [String]) {
  messages(filters: $filters, pagination: $pagination, sort: $sort) {
    meta {
      ...PaginationProps
    }
    data {
      id
      attributes {
        content
        timestamp
        user {
          ...UserProps
        }
      }
    }
  }
}
    ${PaginationPropsFragmentDoc}
${UserPropsFragmentDoc}`;
export const useGetMessagesQuery = <
      TData = GetMessagesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetMessagesQueryVariables,
      options?: UseQueryOptions<GetMessagesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetMessagesQuery, TError, TData>(
      variables === undefined ? ['GetMessages'] : ['GetMessages', variables],
      fetcher<GetMessagesQuery, GetMessagesQueryVariables>(client, GetMessagesDocument, variables, headers),
      options
    );
export const GetUsersDocument = `
    query GetUsers($filters: UsersPermissionsUserFiltersInput) {
  usersPermissionsUsers(filters: $filters) {
    ...UsersProps
  }
}
    ${UsersPropsFragmentDoc}`;
export const useGetUsersQuery = <
      TData = GetUsersQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetUsersQueryVariables,
      options?: UseQueryOptions<GetUsersQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetUsersQuery, TError, TData>(
      variables === undefined ? ['GetUsers'] : ['GetUsers', variables],
      fetcher<GetUsersQuery, GetUsersQueryVariables>(client, GetUsersDocument, variables, headers),
      options
    );