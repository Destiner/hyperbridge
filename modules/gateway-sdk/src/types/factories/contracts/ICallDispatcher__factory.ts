/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ICallDispatcher,
  ICallDispatcherInterface,
} from "../../contracts/ICallDispatcher";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "dispatch",
    outputs: [
      {
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ICallDispatcher__factory {
  static readonly abi = _abi;
  static createInterface(): ICallDispatcherInterface {
    return new Interface(_abi) as ICallDispatcherInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ICallDispatcher {
    return new Contract(address, _abi, runner) as unknown as ICallDispatcher;
  }
}