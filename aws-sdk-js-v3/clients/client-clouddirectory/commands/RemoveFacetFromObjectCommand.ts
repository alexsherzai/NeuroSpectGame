import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { RemoveFacetFromObjectRequest, RemoveFacetFromObjectResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RemoveFacetFromObjectCommand,
  serializeAws_restJson1RemoveFacetFromObjectCommand,
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

export type RemoveFacetFromObjectCommandInput = RemoveFacetFromObjectRequest;
export type RemoveFacetFromObjectCommandOutput = RemoveFacetFromObjectResponse & __MetadataBearer;

/**
 * <p>Removes the specified facet from the specified object.</p>
 */
export class RemoveFacetFromObjectCommand extends $Command<
  RemoveFacetFromObjectCommandInput,
  RemoveFacetFromObjectCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveFacetFromObjectCommandInput) {
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
  ): Handler<RemoveFacetFromObjectCommandInput, RemoveFacetFromObjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "RemoveFacetFromObjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveFacetFromObjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveFacetFromObjectResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveFacetFromObjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RemoveFacetFromObjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveFacetFromObjectCommandOutput> {
    return deserializeAws_restJson1RemoveFacetFromObjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
