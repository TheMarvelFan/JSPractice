// JavaScript is synchronous language by default (sequential execution only)
// JavaScript is single threaded language

// Blocking code - Block flow of program while some operation is performed
// Non-blocking code - Allows flow of program while some operation is performed

// JS Engine is simple and is not found anywhere by itself
// It has only heap memory and stack memory
// Based on what environment JS is running in, methods and properties are accessible by JS
// In browser environment, Web API (with DOM access) works, and in Node environment other methods and properties are accessible
// Whenever a call to any API method is made, the API responds by placing this call into a "Task Queue" using a "Register CALL BACK" system call
// This task queue is responsible for the quick functioning of JS
// This task queue adds the API function calls to the default call stack of JS one by one
// Recently, another API has been introduced named Fetch API
// This also uses the Task Queue concept, but its task queue is at a higher priority than the usual task queue
// This fetch API also introduces the concept of "promise" in JS