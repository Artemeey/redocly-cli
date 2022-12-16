// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint merge-lint-configs 1`] = `

validating /openapi.yaml...
[1] openapi.yaml:2:1 at #/info/contact

Info object should contain \`contact\` field.

1 | openapi: 3.1.0
2 | info:
  | ^^^^
3 |   title: Example OpenAPI 3 definition.
4 |   version: 1.0.0

Warning was generated by the info-contact rule.


/openapi.yaml: validated in <test>ms

Woohoo! Your OpenAPI definition is valid. 🎉
You have 1 warning.


`;
