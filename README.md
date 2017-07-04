Swagger Express Validator
=========================

`swagger-resolve-file` - CLI wrapper around [swagger-tools](https://github.com/apigee-127/swagger-tools)) 
that resolves [OpenAPI v2.0](http://swagger.io/specification/) (aka swagger) definitions to file. 

## Installation
Start using this library with `npm install swagger-resolve-file --save`

## Sample use
To generate resolved file from swagger definition with $ref's:
```bash
node swagger-resolve-file definition.json resolved.json
```

## Licence
[MIT](https://github.com/gargol/swagger-resolve-file/blob/master/LICENSE)

