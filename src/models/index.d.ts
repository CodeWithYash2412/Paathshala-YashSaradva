import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUserModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Fullname?: string | null;
  readonly Email?: string | null;
  readonly Phone?: string | null;
  readonly Jobtitle?: string | null;
  readonly Jobtype?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Fullname?: string | null;
  readonly Email?: string | null;
  readonly Phone?: string | null;
  readonly Jobtitle?: string | null;
  readonly Jobtype?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserModel = LazyLoading extends LazyLoadingDisabled ? EagerUserModel : LazyUserModel

export declare const UserModel: (new (init: ModelInit<UserModel>) => UserModel) & {
  copyOf(source: UserModel, mutator: (draft: MutableModel<UserModel>) => MutableModel<UserModel> | void): UserModel;
}