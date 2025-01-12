# Type Error in TypeScript Greeter Function

This repository demonstrates a common type error in TypeScript and provides a solution.

## Problem
The `greeter` function is defined to accept a single string argument and return a greeting. However, the code attempts to pass an array of strings to the function, resulting in a type error.

## Solution
The solution modifies the `greeter` function to accept an array of strings and iterates over the array to create greetings for each person.  Alternatively,  the code could call `greeter` multiple times, once for each name in the array.