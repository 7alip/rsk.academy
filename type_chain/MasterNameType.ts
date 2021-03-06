/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

export interface MasterNameInterface extends ethers.utils.Interface {
  functions: {
    'DEFAULT_ADMIN_ROLE()': FunctionFragment
    'getRoleAdmin(bytes32)': FunctionFragment
    'getRoleMember(bytes32,uint256)': FunctionFragment
    'getRoleMemberCount(bytes32)': FunctionFragment
    'grantRole(bytes32,address)': FunctionFragment
    'hasRole(bytes32,address)': FunctionFragment
    'renounceRole(bytes32,address)': FunctionFragment
    'revokeRole(bytes32,address)': FunctionFragment
    'studentList()': FunctionFragment
    'addName(address,string)': FunctionFragment
    'addNameBySC(address,address,string)': FunctionFragment
    'deleteName()': FunctionFragment
    'deleteNameBySC(address)': FunctionFragment
    'updateStudentList(address)': FunctionFragment
    'existsOwner(address)': FunctionFragment
    'existsScName(address)': FunctionFragment
    'checkName(address,string)': FunctionFragment
    'listNameInfo()': FunctionFragment
    'countNames()': FunctionFragment
    'getOwnerSc(address)': FunctionFragment
    'getName(address)': FunctionFragment
    'getNameInfoByOwner(address)': FunctionFragment
    'getNameInfoByNameSC(address)': FunctionFragment
    'getNameInfoByIndex(uint256)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'DEFAULT_ADMIN_ROLE', values?: undefined): string
  encodeFunctionData(functionFragment: 'getRoleAdmin', values: [BytesLike]): string
  encodeFunctionData(functionFragment: 'getRoleMember', values: [BytesLike, BigNumberish]): string
  encodeFunctionData(functionFragment: 'getRoleMemberCount', values: [BytesLike]): string
  encodeFunctionData(functionFragment: 'grantRole', values: [BytesLike, string]): string
  encodeFunctionData(functionFragment: 'hasRole', values: [BytesLike, string]): string
  encodeFunctionData(functionFragment: 'renounceRole', values: [BytesLike, string]): string
  encodeFunctionData(functionFragment: 'revokeRole', values: [BytesLike, string]): string
  encodeFunctionData(functionFragment: 'studentList', values?: undefined): string
  encodeFunctionData(functionFragment: 'addName', values: [string, string]): string
  encodeFunctionData(functionFragment: 'addNameBySC', values: [string, string, string]): string
  encodeFunctionData(functionFragment: 'deleteName', values?: undefined): string
  encodeFunctionData(functionFragment: 'deleteNameBySC', values: [string]): string
  encodeFunctionData(functionFragment: 'updateStudentList', values: [string]): string
  encodeFunctionData(functionFragment: 'existsOwner', values: [string]): string
  encodeFunctionData(functionFragment: 'existsScName', values: [string]): string
  encodeFunctionData(functionFragment: 'checkName', values: [string, string]): string
  encodeFunctionData(functionFragment: 'listNameInfo', values?: undefined): string
  encodeFunctionData(functionFragment: 'countNames', values?: undefined): string
  encodeFunctionData(functionFragment: 'getOwnerSc', values: [string]): string
  encodeFunctionData(functionFragment: 'getName', values: [string]): string
  encodeFunctionData(functionFragment: 'getNameInfoByOwner', values: [string]): string
  encodeFunctionData(functionFragment: 'getNameInfoByNameSC', values: [string]): string
  encodeFunctionData(functionFragment: 'getNameInfoByIndex', values: [BigNumberish]): string

  decodeFunctionResult(functionFragment: 'DEFAULT_ADMIN_ROLE', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getRoleAdmin', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getRoleMember', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getRoleMemberCount', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'grantRole', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'hasRole', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'renounceRole', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'revokeRole', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'studentList', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'addName', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'addNameBySC', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'deleteName', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'deleteNameBySC', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'updateStudentList', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'existsOwner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'existsScName', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'checkName', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'listNameInfo', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'countNames', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getOwnerSc', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getName', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getNameInfoByOwner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getNameInfoByNameSC', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getNameInfoByIndex', data: BytesLike): Result

  events: {
    'NameAdded(address,address,string)': EventFragment
    'NameDeleted(address,address)': EventFragment
    'RoleAdminChanged(bytes32,bytes32,bytes32)': EventFragment
    'RoleGranted(bytes32,address,address)': EventFragment
    'RoleRevoked(bytes32,address,address)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'NameAdded'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NameDeleted'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'RoleAdminChanged'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'RoleGranted'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'RoleRevoked'): EventFragment
}

export interface MasterNameType extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: MasterNameInterface

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>

    /**
     * Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.
     */
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>

    /**
     * Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.
     */
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string]>

    /**
     * Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.
     */
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>

    /**
     * Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.
     */
    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    /**
     * Returns `true` if `account` has been granted `role`.
     */
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>

    /**
     * Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.
     */
    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    /**
     * Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.
     */
    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    studentList(overrides?: CallOverrides): Promise<[string]>

    addName(
      scNameAddress: string,
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    addNameBySC(
      scOwner: string,
      scNameAddress: string,
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    deleteName(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    deleteNameBySC(
      scOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    updateStudentList(
      addressStudentList: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    existsOwner(account: string, overrides?: CallOverrides): Promise<[boolean]>

    existsScName(scAddress: string, overrides?: CallOverrides): Promise<[boolean]>

    checkName(scNameAddress: string, name: string, overrides?: CallOverrides): Promise<[boolean]>

    listNameInfo(
      overrides?: CallOverrides,
    ): Promise<
      [
        ([string, string, string] & {
          owner: string
          scName: string
          name: string
        })[],
      ]
    >

    countNames(overrides?: CallOverrides): Promise<[BigNumber]>

    getOwnerSc(scNameAddress: string, overrides?: CallOverrides): Promise<[string]>

    getName(scNameAddress: string, overrides?: CallOverrides): Promise<[string]>

    getNameInfoByOwner(
      account: string,
      overrides?: CallOverrides,
    ): Promise<
      [
        [string, string, string] & {
          owner: string
          scName: string
          name: string
        },
      ]
    >

    getNameInfoByNameSC(
      scNameAddress: string,
      overrides?: CallOverrides,
    ): Promise<
      [
        [string, string, string] & {
          owner: string
          scName: string
          name: string
        },
      ]
    >

    getNameInfoByIndex(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [
        [string, string, string] & {
          owner: string
          scName: string
          name: string
        },
      ]
    >
  }

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>

  /**
   * Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.
   */
  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>

  /**
   * Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.
   */
  getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>

  /**
   * Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.
   */
  getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>

  /**
   * Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.
   */
  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  /**
   * Returns `true` if `account` has been granted `role`.
   */
  hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>

  /**
   * Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.
   */
  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  /**
   * Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.
   */
  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  studentList(overrides?: CallOverrides): Promise<string>

  addName(
    scNameAddress: string,
    name: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  addNameBySC(
    scOwner: string,
    scNameAddress: string,
    name: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  deleteName(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  deleteNameBySC(
    scOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  updateStudentList(
    addressStudentList: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  existsOwner(account: string, overrides?: CallOverrides): Promise<boolean>

  existsScName(scAddress: string, overrides?: CallOverrides): Promise<boolean>

  checkName(scNameAddress: string, name: string, overrides?: CallOverrides): Promise<boolean>

  listNameInfo(
    overrides?: CallOverrides,
  ): Promise<
    ([string, string, string] & {
      owner: string
      scName: string
      name: string
    })[]
  >

  countNames(overrides?: CallOverrides): Promise<BigNumber>

  getOwnerSc(scNameAddress: string, overrides?: CallOverrides): Promise<string>

  getName(scNameAddress: string, overrides?: CallOverrides): Promise<string>

  getNameInfoByOwner(
    account: string,
    overrides?: CallOverrides,
  ): Promise<[string, string, string] & { owner: string; scName: string; name: string }>

  getNameInfoByNameSC(
    scNameAddress: string,
    overrides?: CallOverrides,
  ): Promise<[string, string, string] & { owner: string; scName: string; name: string }>

  getNameInfoByIndex(
    index: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<[string, string, string] & { owner: string; scName: string; name: string }>

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>

    /**
     * Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.
     */
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>

    /**
     * Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.
     */
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>

    /**
     * Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.
     */
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>

    /**
     * Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.
     */
    grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>

    /**
     * Returns `true` if `account` has been granted `role`.
     */
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>

    /**
     * Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.
     */
    renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>

    /**
     * Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.
     */
    revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>

    studentList(overrides?: CallOverrides): Promise<string>

    addName(scNameAddress: string, name: string, overrides?: CallOverrides): Promise<boolean>

    addNameBySC(scOwner: string, scNameAddress: string, name: string, overrides?: CallOverrides): Promise<boolean>

    deleteName(overrides?: CallOverrides): Promise<boolean>

    deleteNameBySC(scOwner: string, overrides?: CallOverrides): Promise<boolean>

    updateStudentList(addressStudentList: string, overrides?: CallOverrides): Promise<boolean>

    existsOwner(account: string, overrides?: CallOverrides): Promise<boolean>

    existsScName(scAddress: string, overrides?: CallOverrides): Promise<boolean>

    checkName(scNameAddress: string, name: string, overrides?: CallOverrides): Promise<boolean>

    listNameInfo(
      overrides?: CallOverrides,
    ): Promise<
      ([string, string, string] & {
        owner: string
        scName: string
        name: string
      })[]
    >

    countNames(overrides?: CallOverrides): Promise<BigNumber>

    getOwnerSc(scNameAddress: string, overrides?: CallOverrides): Promise<string>

    getName(scNameAddress: string, overrides?: CallOverrides): Promise<string>

    getNameInfoByOwner(
      account: string,
      overrides?: CallOverrides,
    ): Promise<[string, string, string] & { owner: string; scName: string; name: string }>

    getNameInfoByNameSC(
      scNameAddress: string,
      overrides?: CallOverrides,
    ): Promise<[string, string, string] & { owner: string; scName: string; name: string }>

    getNameInfoByIndex(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string, string, string] & { owner: string; scName: string; name: string }>
  }

  filters: {
    NameAdded(
      owner?: string | null,
      scName?: string | null,
      name?: null,
    ): TypedEventFilter<[string, string, string], { owner: string; scName: string; name: string }>

    NameDeleted(
      owner?: string | null,
      scName?: string | null,
    ): TypedEventFilter<[string, string], { owner: string; scName: string }>

    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null,
    ): TypedEventFilter<[string, string, string], { role: string; previousAdminRole: string; newAdminRole: string }>

    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null,
    ): TypedEventFilter<[string, string, string], { role: string; account: string; sender: string }>

    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null,
    ): TypedEventFilter<[string, string, string], { role: string; account: string; sender: string }>
  }

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>

    /**
     * Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.
     */
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>

    /**
     * Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.
     */
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    /**
     * Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.
     */
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>

    /**
     * Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.
     */
    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    /**
     * Returns `true` if `account` has been granted `role`.
     */
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>

    /**
     * Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.
     */
    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    /**
     * Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.
     */
    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    studentList(overrides?: CallOverrides): Promise<BigNumber>

    addName(
      scNameAddress: string,
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    addNameBySC(
      scOwner: string,
      scNameAddress: string,
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    deleteName(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    deleteNameBySC(scOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    updateStudentList(
      addressStudentList: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    existsOwner(account: string, overrides?: CallOverrides): Promise<BigNumber>

    existsScName(scAddress: string, overrides?: CallOverrides): Promise<BigNumber>

    checkName(scNameAddress: string, name: string, overrides?: CallOverrides): Promise<BigNumber>

    listNameInfo(overrides?: CallOverrides): Promise<BigNumber>

    countNames(overrides?: CallOverrides): Promise<BigNumber>

    getOwnerSc(scNameAddress: string, overrides?: CallOverrides): Promise<BigNumber>

    getName(scNameAddress: string, overrides?: CallOverrides): Promise<BigNumber>

    getNameInfoByOwner(account: string, overrides?: CallOverrides): Promise<BigNumber>

    getNameInfoByNameSC(scNameAddress: string, overrides?: CallOverrides): Promise<BigNumber>

    getNameInfoByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>

    /**
     * Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.
     */
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>

    /**
     * Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.
     */
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    /**
     * Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.
     */
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>

    /**
     * Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.
     */
    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    /**
     * Returns `true` if `account` has been granted `role`.
     */
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    /**
     * Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.
     */
    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    /**
     * Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.
     */
    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    studentList(overrides?: CallOverrides): Promise<PopulatedTransaction>

    addName(
      scNameAddress: string,
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    addNameBySC(
      scOwner: string,
      scNameAddress: string,
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    deleteName(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    deleteNameBySC(
      scOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    updateStudentList(
      addressStudentList: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    existsOwner(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    existsScName(scAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    checkName(scNameAddress: string, name: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    listNameInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>

    countNames(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getOwnerSc(scNameAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getName(scNameAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getNameInfoByOwner(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getNameInfoByNameSC(scNameAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getNameInfoByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
