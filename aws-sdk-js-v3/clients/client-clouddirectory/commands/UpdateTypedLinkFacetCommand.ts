import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { UpdateTypedLinkFacetRequest, UpdateTypedLinkFacetResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateTypedLinkFacetCommand,
  serializeAws_restJson1UpdateTypedLinkFacetCommand,
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

export type UpdateTypedLinkFacetCommandInput = UpdateTypedLinkFacetRequest;
export type UpdateTypedLinkFacetCommandOutput = UpdateTypedLinkFacetResponse & __MetadataBearer;

/**
 * <p>Updates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 */
export class UpdateTypedLinkFacetCommand extends $Command<
  UpdateTypedLinkFacetCommandInput,
  UpdateTypedLinkFacetCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateTypedLinkFacetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTypedLinkFacetCommandInput, UpdateTypedLinkFacetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "UpdateTypedLinkFacetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTypedLinkFacetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateTypedLinkFacetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTypedLinkFacetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateTypedLinkFacetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTypedLinkFacetCommandOutput> {
    return deserializeAws_restJson1UpdateTypedLinkFacetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
