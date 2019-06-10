// TypeScript (TS) is a superset of JS. All JS code is valid TS code.
// It's goal is to add type checking to JS.
//
// https://www.typescriptlang.org
//
// > TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
//
// Basic types

const str: string = 'foo'
const num: number = 123
const bool: boolean = true

const arr1: number[] = [1, 2, 3]
const arr2: Array<number> = [1, 2, 3] // use only when `x[]` doesn't work

// Tuples: are arrays with a set lenght and potentially types for each element
const tuple1: [number, number] = [1, 2]
const tuple2: [number, string, boolean] = [1, 'foo', false]

const tupleErr: [number, number] = [1, 2, 3] // Error!
// This ^ gives the following error:
//
// Type '[number, number, number]' is not assignable to type '[number, number]'.
//  Types of property 'length' are incompatible.
//    Type '3' is not assignable to type '2'.
//
// 21 const tupleErr: [number, number] = [1, 2, 3] // Error!

// Enums: sets of numeric (or string) values
enum Color {
  Red, // 0
  Green, // 1
  Blue, // 2
}
const color: Color = Color.Green

// can be assigned
enum Color2 {
  Red, // 0
  Green, // 1
  Blue = 5,
}

// you can go from the number to the name
const colorName: string = Color[1] // 'Green' (key of the value 1 of Color)

// enums also work with string values
enum Foo {
  foo = 'foo',
  bar = 'bar',
}

// `any` - a way to type things we don't know it's type
let anyValue: any = 4
anyValue = 'any'
anyValue = {}
// TS knows nothing about it so it can't prevent this kind of things either
anyValue.someMethod()

// 99.99% of the time there's no reason to use `any`

// `void` - a type for when you don't have a type :thinking:
// usually used as return type of functions that don't return
function logFoo(): void {
  console.log('foo')
}
// only `undefined` can be assigned to it
let voidValue: void = undefined

// `null` & `undefined` (as other literals) can be used as types
const nullValue: null = null
const undefinedValue: undefined = undefined

// > By default `null` and `undefined` are subtypes of all other types.
// > That means you can assign `null` and `undefined` to something like `number`.
//
// > However, when using the `--strictNullChecks` flag, `null` and `undefined`
// > are only assignable to `void` and their respective types.
//
// Without `strictNullChecks` the following is valid (try changing `tsconfig.json`)
let ups: number = null
ups = undefined

// Always set `strictNullChecks` (or `strict`) to avoid these problems !!!
