import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { DeleteSignalingChannelInput, DeleteSignalingChannelOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteSignalingChannelCommand,
  serializeAws_restJson1DeleteSignalingChannelCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DeleteSignalingChannelCommandInput = DeleteSignalingChannelInput;
export type DeleteSignalingChannelCommandOutput = DeleteSignalingChannelOutput & __MetadataBearer;

/**
 * <p>Deletes a specified signaling channel. <code>DeleteSignalingChannel</code> is an
 *             asynchronous operation. If you don't specify the channel's current version, the most
 *             recent version is deleted.</p>
 */
export class DeleteSignalingChannelCommand extends $Command<
  DeleteSignalingChannelCommandInput,
  DeleteSignalingChannelCommandOutput,
  KinesisVideoClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSignalingChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSignalingChannelCommandInput, DeleteSignalingChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "DeleteSignalingChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSignalingChannelInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteSignalingChannelOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSignalingChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteSignalingChannelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSignalingChannelCommandOutput> {
    return deserializeAws_restJson1DeleteSignalingChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
