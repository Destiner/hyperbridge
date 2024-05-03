import assert from "assert";
import { SupportedChain } from "../../../types";
import { getEvmChainFromTransaction } from "../../../utils/chain.helpers";
import { PostRequestEventLog } from "../../../types/abi-interfaces/EthereumHostAbi";
import { HyperBridgeService } from "../../../services/hyperbridge.service";

/**
 * Handles the PostRequest event from Evm Hosts
 */
export async function handlePostRequestEvent(
  event: PostRequestEventLog,
): Promise<void> {
  assert(event.args, "No handlePostRequestEvent args");
  logger.info("Handling PostRequest event");

  const { transaction } = event;

  const chain: SupportedChain = getEvmChainFromTransaction(transaction);

  await HyperBridgeService.handlePostRequestOrResponseEvent(chain, event);
}
