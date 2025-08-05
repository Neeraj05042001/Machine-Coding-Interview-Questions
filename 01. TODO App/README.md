<div align="center">

# Machine Coding Series 
## 01:  Todo List App

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![Beginner](https://img.shields.io/badge/Level-Beginner-green?style=flat-square)
![DOM](https://img.shields.io/badge/Focus-DOM_Manipulation-blue?style=flat-square)
![Vanilla JS](https://img.shields.io/badge/Type-Vanilla_JavaScript-yellow?style=flat-square)
![Series](https://img.shields.io/badge/Series-Question_1-red?style=flat-square)

**🎯 Beginner-Friendly | Vanilla JavaScript | DOM Manipulation**

</div>

A simple, interactive todo list application built with vanilla JavaScript. This app allows users to add, edit, and delete tasks with an intuitive user interface. Perfect for learning fundamental JavaScript concepts and DOM manipulation techniques.

## Features

- ✅ **Add Tasks** - Create new todo items
- ✏️ **Edit Tasks** - Modify existing todo items inline
- ❌ **Delete Tasks** - Remove completed or unwanted tasks
- 🔄 **Dynamic UI** - Button text changes during edit mode
- ⚡ **Real-time Updates** - Instant task management without page refresh
- 📱 **Event Delegation** - Efficient event handling for dynamic content

## Demo & Live Links

### 📹 Demo Video
[Watch Demo Video](your-demo-video-link-here)
*Replace with your actual demo video link*

### 🌐 Live Demo
[View Live Demo](your-live-demo-link-here)
*Replace with your actual live demo link*

## Important Concepts Used

### 🎯 Core JavaScript Concepts

**1. DOM Manipulation**
- `document.querySelector()` - Selecting elements
- `document.createElement()` - Creating new elements
- `appendChild()` - Adding elements to DOM
- `remove()` - Removing elements from DOM
- `innerHTML` and `textContent` - Updating element content

**2. Event Handling**
- `addEventListener()` - Attaching event listeners
- `preventDefault()` - Preventing default form submission
- **Event Delegation** - Single listener for multiple dynamic elements
- Event object (`event.target`) - Identifying clicked elements

**3. State Management**
- Boolean flags (`editMode`) for application state
- Object references (`editItem`) for tracking elements
- Conditional logic for different modes

**4. Form Handling**
- Form submission events
- Input validation with `.trim()`
- Dynamic form behavior (changing button text)

**5. String Methods**
- `.trim()` - Removing whitespace
- Template literals for dynamic content

### 🔧 Advanced Techniques

**Event Delegation Pattern**
```javascript
// Instead of adding listeners to each button
todoList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    // Handle all button clicks from one listener
  }
});
```

**State-Based UI Updates**
```javascript
if (editMode) {
  todoSubmit.innerText = "Edit Todo";
} else {
  todoSubmit.innerText = "Add Todo";
}
```

## Rebuild Revision Guide

### 🚀 Quick Setup Checklist

**Step 1: HTML Structure**
- [ ] Create form with `.todo-form` class
- [ ] Add input with `.todo-input` class
- [ ] Add submit button with `.todo-submit` class
- [ ] Create empty ul with `.todo-list` class

**Step 2: JavaScript Variables**
- [ ] Declare `editMode = false`
- [ ] Declare `editItem = null`
- [ ] Get all DOM element references

**Step 3: Event Listeners**
- [ ] Form submit listener (add/edit logic)
- [ ] Click delegation listener on todo list

**Step 4: Core Functions**
- [ ] `addTodoItem()` function
- [ ] Edit mode logic
- [ ] Delete functionality
- [ ] Input validation

### 🎯 Key Implementation Points

**Form Submission Logic:**
```javascript
if (editMode) {
  // Update existing item
  editItem.firstChild.textContent = todoText;
  // Reset edit mode
} else {
  // Add new item
  addTodoItem(todoText);
}
```

**Button Click Handling:**
```javascript
if (target.innerText === "❌") {
  todoItem.remove();
} else if (target.innerText === "✏️") {
  // Enter edit mode
}
```

### ⚠️ Common Mistakes to Avoid

1. **Forgetting `preventDefault()`** - Form will reload page
2. **Missing `.trim()`** - Empty spaces count as valid input
3. **Not resetting edit mode** - App gets stuck in edit state
4. **Individual button listeners** - Use event delegation instead
5. **Wrong element selection** - Use `firstChild` for span content

### 🧪 Testing Checklist

- [ ] Add multiple todos
- [ ] Edit existing todos
- [ ] Delete todos
- [ ] Try submitting empty input
- [ ] Edit one todo, then add another (should exit edit mode)
- [ ] Check button text changes during edit mode

This project demonstrates essential JavaScript concepts: DOM manipulation, event handling, state management, and dynamic user interfaces!