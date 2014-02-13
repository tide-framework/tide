I implement the 'dynamic variable' pattern, taken from Seaside.

API:

Use TDDynamicVariable >> #use:during: to register a value for a variable while evaluating a block. During the block evaluation, TDDynamicVariable >> value will answer the registered value.