import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DeleteDirectoryRequest, DeleteDirectoryResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteDirectoryCommand,
  serializeAws_json1_1DeleteDirectoryCommand,
} from "../protocols/Aws_json1_1";
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

export type DeleteDirectoryCommandInput = DeleteDirectoryRequest;
export type DeleteDirectoryCommandOutput = DeleteDirectoryResult & __MetadataBearer;

/**
 * <p>Deletes an AWS Directory Service directory.</p>
 *          <p>Before you call <code>DeleteDirectory</code>, ensure that all of the required permissions
 *       have been explicitly granted through a policy. For details about what permissions are required
 *       to run the <code>DeleteDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions
 *       Reference</a>.</p>
 */
export class DeleteDirectoryCommand extends $Command<
  DeleteDirectoryCommandInput,
  DeleteDirectoryCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDirectoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDirectoryCommandInput, DeleteDirectoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "DeleteDirectoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDirectoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDirectoryResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDirectoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteDirectoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDirectoryCommandOutput> {
    return deserializeAws_json1_1DeleteDirectoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}