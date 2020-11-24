// One of TypeScript’s core principles is that type checking focuses on the
// shape that values have.
//
// This is sometimes called “duck typing” or “structural subtyping”.
//
// In TypeScript, interfaces fill the role of naming these types,
// and are a powerful way of defining contracts within your code as well as
// contracts with code outside of your project.
//
// https://www.typescriptlang.org/docs/handbook/interfaces.html

function getFoo(obj: {foo: string}) {
  return obj.foo
}

interface Interface {
  foo: string
  bar: string
  baz: number
}

function getFoo2(obj: Interface) {
  return obj.foo
}

getFoo2({foo: 'foo', bar: '', baz: 1})
