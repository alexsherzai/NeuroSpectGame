import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { GetDataRetrievalPolicyInput, GetDataRetrievalPolicyOutput } from "../models/models_0";
import {
  deserializeAws_restJson1GetDataRetrievalPolicyCommand,
  serializeAws_restJson1GetDataRetrievalPolicyCommand,
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

export type GetDataRetrievalPolicyCommandInput = GetDataRetrievalPolicyInput;
export type GetDataRetrievalPolicyCommandOutput = GetDataRetrievalPolicyOutput & __MetadataBearer;

/**
 * <p>This operation returns the current data retrieval policy for the account and region
 *          specified in the GET request. For more information about data retrieval policies, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/data-retrieval-policy.html">Amazon Glacier Data Retrieval Policies</a>.</p>
 */
export class GetDataRetrievalPolicyCommand extends $Command<
  GetDataRetrievalPolicyCommandInput,
  GetDataRetrievalPolicyCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDataRetrievalPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDataRetrievalPolicyCommandInput, GetDataRetrievalPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "GetDataRetrievalPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDataRetrievalPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetDataRetrievalPolicyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDataRetrievalPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDataRetrievalPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDataRetrievalPolicyCommandOutput> {
    return deserializeAws_restJson1GetDataRetrievalPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
