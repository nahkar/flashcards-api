# API

```
npx prettier . --write
```

- To Upload a file we need to set header

```
apollo-require-preflight: true
```

```
yarn add sharp --ignore-engines
```

<!-- GQL -->

- #### Create User
```gql
mutation {
  createUser(
      first_name: "John"
      last_name: "Doe"
      age: 30
      email: "john.doe@example.com"
  ) {
    user_id
    first_name
    last_name
    age
    email
  }
}
```