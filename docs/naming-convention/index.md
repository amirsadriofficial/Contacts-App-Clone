# Naming Conventions

## Internal Naming Conventions:

1. all **_folders_** follow the kebab-case convention for naming.
2. all **_variables_** and **_functions_** follow the camelCase convention for naming.
3. all **_interfaces_** and **_types_** follow the PascalCase convention for naming.
4. all **_function props_** follow the camelCase convention for naming.

## General Naming Conventions

### **1- Use Descriptive and Meaningful Names:**

When naming variables, functions, or classes, use words that have clear meanings and accurately describe the role of that element in the code. Meaningful names help other developers quickly understand what each part of the code does without needing additional explanations.

**_Bad Example: (This name provides no information about the variable's purpose or role.)_**

```javascript
let xyz;
```

**_Good Example: (This name clearly indicates that the variable is related to the total price.)_**

```javascript
let totalPrice;
```

### **2- Avoid Generic Names**

Avoid using generic and vague names that do not provide much information about the purpose of the variable or function. Instead, choose names that clearly reveal the intention and purpose of the element.

**_Bad Example: (This name is too generic and does not specify what kind of result it refers to.)_**

```javascript
let result;
```

**_Good Example: (This name clearly indicates that the variable contains information about users.)_**

```javascript
let userInfo;
```

### **3- Avoid Numbers in Names**

Avoid using numbers in names unless they logically belong there. Numbers can create confusion and make it harder to understand the role of each variable or table.

**_Bad Example: (These names do not provide any insight into the contents of the tables.)_**

```javascript
let table1, table2;
```

**_Good Example: (These names clearly indicate the type of data stored in each table.)_**

```javascript
let customerTable, adminTable;
```

### **4- Avoid Noise Words**

Avoid using unnecessary words in names. Redundant words like Data, List, Handler, and others add no value and only make names longer and more complex.

**_Bad Example: (Adding "List" is unnecessary.)_**

```javascript
let userList;
```

**_Good Example: (This name is simple and clear, with no unnecessary words.)_**

```javascript
let users;
```

### **5- Use Pronounceable Names**

Use names that are easy to pronounce. This improves communication and discussion about the code, especially in team environments.

**_Bad Example: (This name is difficult to pronounce and understand.)_**

```javascript
let ddmmyy;
```

**_Good Example: (This name is pronounceable and clearly conveys the concept of the current date.)_**

```javascript
let currentDate;
```

### **6- Don’t Make Your Names Too Long or Too Short**

Names should not be too long or too short. Long names may be hard to read, and short names may lack sufficient meaning. The goal should be to choose a name that strikes a good balance between length and clarity.

**_Bad Example: (This name is too long and complex.)_**

```javascript
let userAgeAtLastWebsiteVisitBeforeNewYear2024;
```

**_Good Example: (This name is shorter and sufficiently descriptive.)_**

```javascript
let ageLastVisit;
```

### **7- Use Consistent Formatting**

Use consistent formatting for naming variables and functions. Common formats include snake_case and camelCase. The chosen format should be applied consistently throughout the code.

**_Bad Example: (Using two different formats in the same codebase creates inconsistency.)_**

```javascript
let first_name, isUserLoggedIn;
```

**_Good Example: (Using camelCase format consistently.)_**

```javascript
let firstName, isUserLoggedIn;
```

### **8- Avoid Abbreviations and Acronyms**

Avoid using abbreviations and acronyms in names unless they are widely recognized. Abbreviations can cause confusion and make the code harder to understand.

**_Bad Example: (This abbreviation may be unclear.)_**

```javascript
let sAge;
```

**_Good Example: (This name is complete and clear.)_**

```javascript
let studentAge;
```

### **9- Use English for Universality and Clarity**

Use English for naming variables and functions, as this makes the code more accessible and understandable to a global audience. This is especially important in projects with international teams.

**_Bad Example: (Using a local language might be confusing to others. In Persian, "Mizan Maliat" means "amount of tax")_**

```javascript
let mizanMaliat;
```

**_Good Example: (This English name is easily understood by all developers.)_**

```javascript
let taxAmount;
```

### **10- Avoid Special Characters in Names**

While most programming languages allow special characters (such as @, #, $, %, etc.) in variable names, it's best to avoid them in the middle or end of names. Using special characters can reduce code readability and make the code harder to maintain or understand, especially when working in teams. Stick to letters, numbers, and underscores to create clear and consistent names.

**_Bad Example: (The # symbol reduces readability and can be confusing.)_**

```javascript
let user#id;
```

**_Good Example: (This id is clear and easy to read.)_**

```javascript
let userId;
```
