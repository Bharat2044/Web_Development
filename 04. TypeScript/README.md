# Getting Started with TypeScript

**TypeScript is a superset of JavaScript that adds static typing and other features to help developers write more maintainable and scalable code.**


##  Here's a basic guide on how to use TypeScript:

## 1. Install TypeScript:
First, you need to install TypeScript globally on your machine using npm (Node Package Manager). Open your terminal or command prompt and run:
```bash
npm install -g typescript
```

## 2. Create a TypeScript file:
Create a file with a `.ts` extension. This file will contain your TypeScript code. For example, create a file named `app.ts`:
```typescript
// app.ts
function greet(name: string) {
  return `Hello, ${name}!`;
}

const result = greet("TypeScript");
console.log(result);
```

## 3. Compile TypeScript to JavaScript:
Compile the TypeScript file to JavaScript using the `tsc` command:
```bash
tsc app.ts
```
This will generate a corresponding `app.js` file.

## 4. Run the JavaScript code:
Run the compiled JavaScript code using Node.js or in your preferred JavaScript environment:
```bash
node app.js
```
You should see the output of your TypeScript program.

### 5. Type Annotations:
One of the main features of TypeScript is static typing. You can add type annotations to variables, parameters, and return types:
```typescript
function add(a: number, b: number): number {
  return a + b;
}

const sum: number = add(3, 5);
console.log(sum);
```

### 6. Interfaces and Classes:
TypeScript supports interfaces and classes for better code organization and reusability:
```typescript
interface Person {
  name: string;
  age: number;
}

class Student implements Person {
  constructor(public name: string, public age: number) {}

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const student = new Student("John", 25);
student.greet();
```

## 7. Configure TypeScript (Optional):
You can create a `tsconfig.json` file to configure TypeScript options. This file can include settings such as the target ECMAScript version, module system, and other compiler options. 
Here's a basic example:
```typescript
// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
```

## 8. Using TypeScript with Frameworks:
If you're working with frameworks like Angular or React, there are specific TypeScript configurations and patterns to follow. Refer to the documentation for each framework.