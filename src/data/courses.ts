import { Course } from '../types';

export const courses: Course[] = [
  {
    id: 'html',
    title: 'HTML Mastery',
    description: 'From Zero to Web Developer',
    logo: '🌐',
    color: '#e34c26',
    modules: [
      {
        id: 'html-module-1',
        title: 'HTML Fundamentals - Building Blocks of the Web',
        completed: false,
        lessons: [
          {
            id: 'html-1-1',
            title: 'Introduction to HTML',
            content: 'What is HTML? (HyperText Markup Language). How HTML works with CSS and JavaScript. The role of HTML in web development. Web browsers and rendering HTML. HTML is the standard markup language for creating web pages.',
            videoUrl: 'https://www.youtube.com/watch?v=UB1O30fR-EE',
            completed: false
          },
          {
            id: 'html-1-2',
            title: 'Basic HTML Document Structure',
            content: '<!DOCTYPE html> declaration. <html> element. <head> element (metadata, title, links to CSS/JS). <body> element (visible content). Understanding the basic structure is crucial for all web development.',
            videoUrl: 'https://www.youtube.com/watch?v=salY_Sm6mv4',
            completed: false
          },
          {
            id: 'html-1-3',
            title: 'Core HTML Elements',
            content: 'Headings: <h1> to <h6> (semantic use). Paragraphs: <p>. Text Formatting: <strong>, <em>, <mark>, <small>, <sub>, <sup>, <del>, <ins>. Line Breaks & Horizontal Rules: <br>, <hr>.',
            videoUrl: 'https://www.youtube.com/watch?v=MDLn5-zSQQI',
            completed: false
          },
          {
            id: 'html-1-4',
            title: 'Lists and Links',
            content: 'Unordered Lists: <ul>, <li>. Ordered Lists: <ol>, <li>. Description Lists: <dl>, <dt>, <dd>. Links: <a> element and href attribute. Internal vs. External links.',
            videoUrl: 'https://www.youtube.com/watch?v=09oErCBjVns',
            completed: false
          },
          {
            id: 'html-1-5',
            title: 'Images and Attributes',
            content: '<img> element and src attribute. alt attribute (accessibility and SEO). width and height attributes. Image formats (JPG, PNG, GIF, SVG, WebP). HTML Attributes: id, class, style, title.',
            videoUrl: 'https://www.youtube.com/watch?v=Hh_se2Zqsdk',
            completed: false
          },
          {
            id: 'html-1-6',
            title: 'HTML Comments and Best Practices',
            content: '<!-- comment --> for documentation and debugging. Best practices for writing clean HTML. Accessibility considerations from the start.',
            videoUrl: 'https://www.youtube.com/watch?v=88PXJAA6szs',
            completed: false
          }
        ]
      },
      {
        id: 'html-module-2',
        title: 'Structuring Content & Forms',
        completed: false,
        lessons: [
          {
            id: 'html-2-1',
            title: 'Semantic HTML5',
            content: 'The importance of semantic elements. Layout Elements: <header>, <nav>, <main>, <article>, <section>, <aside>, <footer>. When to use <div> vs. semantic elements. Benefits for accessibility and SEO.',
            videoUrl: 'https://www.youtube.com/watch?v=ZThq93Yuwd0',
            completed: false
          },
          {
            id: 'html-2-2',
            title: 'HTML Tables',
            content: '<table>, <thead>, <tbody>, <tfoot>. <tr> (table row), <th> (table header), <td> (table data). colspan and rowspan attributes. Table captions <caption>. Accessibility for tables.',
            videoUrl: 'https://www.youtube.com/watch?v=dK8L7HvLcVE',
            completed: false
          },
          {
            id: 'html-2-3',
            title: 'Forms - User Input',
            content: '<form> element and action, method attributes. Input Types: text, password, email, number, checkbox, radio, submit, reset, button, date, time, url, tel, file. Attributes for Inputs: name, id, value, placeholder, required.',
            videoUrl: 'https://www.youtube.com/watch?v=fNcJuPIZ2WE',
            completed: false
          },
          {
            id: 'html-2-4',
            title: 'Advanced Form Elements',
            content: 'Labels: <label> element. Textarea: <textarea>. Select (Dropdowns): <select>, <option>, <optgroup>. Buttons: <button>. Fieldset and Legend: <fieldset>, <legend>. Form validation.',
            videoUrl: 'https://www.youtube.com/watch?v=2O8pkybH6po',
            completed: false
          },
          {
            id: 'html-2-5',
            title: 'Multimedia Embedding',
            content: 'Audio: <audio> element (controls, autoplay, loop, src, <source>). Video: <video> element (controls, autoplay, loop, src, poster, <source>). Iframes: <iframe>.',
            videoUrl: 'https://www.youtube.com/watch?v=ysEN5RaKOlA',
            completed: false
          }
        ]
      },
      {
        id: 'html-module-3',
        title: 'Advanced HTML & Best Practices',
        completed: false,
        lessons: [
          {
            id: 'html-3-1',
            title: 'Web Accessibility (A11y)',
            content: 'What is web accessibility and why is it crucial? WAI-ARIA roles, states, and properties. Keyboard navigation considerations. Screen reader compatibility. Semantic structure as foundation.',
            videoUrl: 'https://www.youtube.com/watch?v=aqM6rV5IBlg',
            completed: false
          },
          {
            id: 'html-3-2',
            title: 'Meta Information & SEO',
            content: '<meta> tags (description, keywords, viewport, charset). Open Graph Protocol for social media sharing. Favicon: <link rel="icon" ...>. SEO best practices.',
            videoUrl: 'https://www.youtube.com/watch?v=RBTBEfd7z_E',
            completed: false
          },
          {
            id: 'html-3-3',
            title: 'Performance & Optimization',
            content: 'Minimizing HTML size. Lazy loading images and iframes (loading="lazy"). Preloading resources. Asynchronous script loading (async, defer). Impact of DOM size on performance.',
            videoUrl: 'https://www.youtube.com/watch?v=AQqFZ5t8uNc',
            completed: false
          }
        ]
      }
    ]
  },
  {
    id: 'css',
    title: 'CSS Mastery',
    description: 'From Basics to Advanced Styling',
    logo: '🎨',
    color: '#1572b6',
    modules: [
      {
        id: 'css-module-1',
        title: 'The Foundations of Styling',
        completed: false,
        lessons: [
          {
            id: 'css-1-1',
            title: 'What is CSS?',
            content: 'Introduction to Cascading Style Sheets. The purpose of CSS in web development. Separation of concerns (HTML for structure, CSS for style). How CSS transforms plain HTML into beautiful websites.',
            videoUrl: 'https://www.youtube.com/watch?v=yfoY53QXEnI',
            completed: false
          },
          {
            id: 'css-1-2',
            title: 'CSS Syntax and Selectors',
            content: 'Rulesets: selectors, properties, values. Types of selectors: Universal (*), Type (element), Class (.my-class), ID (#my-id). Attribute selectors. Combinators (descendant, child, adjacent sibling).',
            videoUrl: 'https://www.youtube.com/watch?v=l1mER1bV0N0',
            completed: false
          },
          {
            id: 'css-1-3',
            title: 'How to Include CSS',
            content: 'Inline styles. Internal stylesheets (<style>). External stylesheets (<link rel="stylesheet">). The @import rule. Best practices for including CSS.',
            videoUrl: 'https://www.youtube.com/watch?v=I-rTKuEhrCM',
            completed: false
          },
          {
            id: 'css-1-4',
            title: 'The Cascade, Specificity, and Inheritance',
            content: 'Understanding the "C" in CSS. Specificity calculation rules. The !important declaration. Inheritable vs. non-inheritable properties. How CSS rules are applied.',
            videoUrl: 'https://www.youtube.com/watch?v=zHZeHZ5w7lY',
            completed: false
          },
          {
            id: 'css-1-5',
            title: 'Basic CSS Properties',
            content: 'Text Styling: font-family, font-size, font-weight, color, text-align. Box Model: width, height, padding, border, margin. Backgrounds: background-color, background-image.',
            videoUrl: 'https://www.youtube.com/watch?v=Icf5D3fEKbM',
            completed: false
          },
          {
            id: 'css-1-6',
            title: 'Developer Tools for CSS',
            content: 'Inspecting elements. Modifying styles in real-time. Debugging CSS issues. Using browser developer tools effectively for CSS development.',
            videoUrl: 'https://www.youtube.com/watch?v=wcFnnxfA70g',
            completed: false
          }
        ]
      },
      {
        id: 'css-module-2',
        title: 'Layout and Positioning',
        completed: false,
        lessons: [
          {
            id: 'css-2-1',
            title: 'Display Property',
            content: 'block, inline, inline-block. none (hiding elements). Understanding how different display values affect element behavior and layout.',
            videoUrl: 'https://www.youtube.com/watch?v=9T8uxp5dMtQ',
            completed: false
          },
          {
            id: 'css-2-2',
            title: 'The Box Model in Depth',
            content: 'box-sizing: content-box vs. border-box. Understanding collapsed margins. How padding, border, and margin affect element size and spacing.',
            videoUrl: 'https://www.youtube.com/watch?v=rIO5326FgPE',
            completed: false
          },
          {
            id: 'css-2-3',
            title: 'Positioning Schemes',
            content: 'static, relative, absolute, fixed, sticky. Properties: top, right, bottom, left, z-index. Creating overlays and complex layering. Understanding positioning context.',
            videoUrl: 'https://www.youtube.com/watch?v=jx5jmI0UlXU',
            completed: false
          },
          {
            id: 'css-2-4',
            title: 'Introduction to Flexbox',
            content: 'The concept of a flex container and flex items. display: flex. Main axis and cross axis. Container properties: flex-direction, flex-wrap, justify-content, align-items.',
            videoUrl: 'https://www.youtube.com/watch?v=JJSoEo8JSnc',
            completed: false
          },
          {
            id: 'css-2-5',
            title: 'Advanced Flexbox',
            content: 'Item properties: order, flex-grow, flex-shrink, flex-basis, align-self. Building responsive navigation bars and card layouts with flexbox.',
            videoUrl: 'https://www.youtube.com/watch?v=u044iM9xsWU',
            completed: false
          },
          {
            id: 'css-2-6',
            title: 'CSS Grid Layout',
            content: 'Introduction to CSS Grid. Grid container and grid items. Grid lines, tracks, and areas. Creating complex layouts with CSS Grid.',
            videoUrl: 'https://www.youtube.com/watch?v=jV8B24rSN5o',
            completed: false
          }
        ]
      }
    ]
  },
  {
    id: 'javascript',
    title: 'JavaScript Mastery',
    description: 'From Fundamentals to Full-Stack',
    logo: '⚡',
    color: '#f7df1e',
    modules: [
      {
        id: 'js-module-1',
        title: 'JavaScript Fundamentals',
        completed: false,
        lessons: [
          {
            id: 'js-1-1',
            title: 'Introduction to JavaScript',
            content: 'What is JavaScript? (History, purpose, where it runs). Setting up your development environment (Browser console, VS Code, Node.js installation). Basic syntax overview.',
            videoUrl: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
            completed: false
          },
          {
            id: 'js-1-2',
            title: 'Variables and Data Types',
            content: 'var, let, const (scope and hoisting). Primitive data types (String, Number, Boolean, Null, Undefined, Symbol, BigInt). Type coercion and strict equality (== vs ===).',
            videoUrl: 'https://www.youtube.com/watch?v=9ridXaRt6ag',
            completed: false
          },
          {
            id: 'js-1-3',
            title: 'Operators and Control Flow',
            content: 'Arithmetic, Assignment, Comparison, Logical, Ternary operators. Operator precedence. if/else statements, switch statements, ternary operator for conditional logic.',
            videoUrl: 'https://www.youtube.com/watch?v=IsG4Xd6LlsM',
            completed: false
          },
          {
            id: 'js-1-4',
            title: 'Loops and Iteration',
            content: 'for loop, while loop, do...while loop. for...in and for...of loops. break and continue statements. Understanding when to use each type of loop.',
            videoUrl: 'https://www.youtube.com/watch?v=s9wW2PpJsmQ',
            completed: false
          },
          {
            id: 'js-1-5',
            title: 'Functions',
            content: 'Defining and calling functions. Parameters and arguments. Return values. Function expressions vs. function declarations. Arrow functions (ES6). Scope and Closures introduction.',
            videoUrl: 'https://www.youtube.com/watch?v=N8ap4k_1QEQ',
            completed: false
          },
          {
            id: 'js-1-6',
            title: 'Arrays',
            content: 'Creating and accessing arrays. Common array methods (push, pop, shift, unshift, splice, slice, indexOf, includes). Iterating over arrays (loops, forEach, map, filter, reduce).',
            videoUrl: 'https://www.youtube.com/watch?v=7W4pQQ20nJg',
            completed: false
          },
          {
            id: 'js-1-7',
            title: 'Objects',
            content: 'Creating objects (object literals). Accessing and modifying properties (dot notation vs. bracket notation). Object methods. this keyword (basic understanding).',
            videoUrl: 'https://www.youtube.com/watch?v=PFmuCDHHpwk',
            completed: false
          },
          {
            id: 'js-1-8',
            title: 'ES6+ Features',
            content: 'Template literals. Destructuring (arrays and objects). Spread and Rest operators. Default parameters. Modern JavaScript syntax and features.',
            videoUrl: 'https://www.youtube.com/watch?v=nZ1DMMsyVyI',
            completed: false
          }
        ]
      },
      {
        id: 'js-module-2',
        title: 'Intermediate JavaScript & DOM Manipulation',
        completed: false,
        lessons: [
          {
            id: 'js-2-1',
            title: 'Higher-Order Functions',
            content: 'Functions as first-class citizens. map, filter, reduce in depth. Custom higher-order functions. Understanding functional programming concepts.',
            videoUrl: 'https://www.youtube.com/watch?v=rRgD1yVwIvE',
            completed: false
          },
          {
            id: 'js-2-2',
            title: 'Closures Deep Dive',
            content: 'Deep dive into closures and their practical applications. Private variables, currying. Understanding lexical scope and closure patterns.',
            videoUrl: 'https://www.youtube.com/watch?v=3a0I8ICR1Vg',
            completed: false
          },
          {
            id: 'js-2-3',
            title: 'The Document Object Model (DOM)',
            content: 'What is the DOM? (Tree structure). Selecting elements (getElementById, querySelector, querySelectorAll). Manipulating elements (textContent, innerHTML, style, attributes).',
            videoUrl: 'https://www.youtube.com/watch?v=0ik6X4DJKCc',
            completed: false
          },
          {
            id: 'js-2-4',
            title: 'Event Handling',
            content: 'Event listeners (addEventListener). Event objects. Event bubbling and capturing. preventDefault(), stopPropagation(). Common events (click, submit, keydown, mouseover).',
            videoUrl: 'https://www.youtube.com/watch?v=XF1_MlZ5l6M',
            completed: false
          },
          {
            id: 'js-2-5',
            title: 'Forms and Input Handling',
            content: 'Accessing form elements and values. Form submission and validation. Preventing default form behavior. Creating interactive forms with JavaScript.',
            videoUrl: 'https://www.youtube.com/watch?v=In0nB0ABaUk',
            completed: false
          },
          {
            id: 'js-2-6',
            title: 'Asynchronous JavaScript Introduction',
            content: 'Understanding the event loop (brief overview). Callbacks. Error handling with callbacks. Introduction to asynchronous programming concepts.',
            videoUrl: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ',
            completed: false
          }
        ]
      },
      {
        id: 'js-module-3',
        title: 'Advanced JavaScript Concepts',
        completed: false,
        lessons: [
          {
            id: 'js-3-1',
            title: 'Prototypes and Inheritance',
            content: 'Prototype chain. __proto__ and prototype. Constructor functions. Object.create(). Prototypal inheritance patterns. Understanding JavaScript\'s inheritance model.',
            videoUrl: 'https://www.youtube.com/watch?v=wstwjQ1yqWQ',
            completed: false
          },
          {
            id: 'js-3-2',
            title: 'Classes (ES6)',
            content: 'Class declarations and expressions. Constructors. Methods. extends and super (class inheritance). Static methods. Modern class syntax in JavaScript.',
            videoUrl: 'https://www.youtube.com/watch?v=2ZphE5HcQPQ',
            completed: false
          },
          {
            id: 'js-3-3',
            title: 'Promises and Async/Await',
            content: 'Understanding Promise objects (pending, fulfilled, rejected). then(), catch(), finally(). Promise.all(), Promise.race(). async/await syntax. Error handling with try...catch.',
            videoUrl: 'https://www.youtube.com/watch?v=PoRJizFvM7s',
            completed: false
          },
          {
            id: 'js-3-4',
            title: 'Error Handling',
            content: 'try...catch...finally. Throwing custom errors. Error types (ReferenceError, TypeError, etc.). Best practices for error handling in JavaScript.',
            videoUrl: 'https://www.youtube.com/watch?v=cFTFtuEQ-10',
            completed: false
          },
          {
            id: 'js-3-5',
            title: 'Web APIs',
            content: 'fetch API for HTTP requests. localStorage and sessionStorage. Geolocation API. Intersection Observer API. Working with browser APIs.',
            videoUrl: 'https://www.youtube.com/watch?v=cuEtnrL9-H0',
            completed: false
          },
          {
            id: 'js-3-6',
            title: 'Modules (ESM)',
            content: 'import and export statements. Default vs. named exports. Module bundling concepts. Organizing code with ES6 modules.',
            videoUrl: 'https://www.youtube.com/watch?v=cRHQNNcYf6s',
            completed: false
          }
        ]
      },
      {
        id: 'js-module-4',
        title: 'Building with JavaScript',
        completed: false,
        lessons: [
          {
            id: 'js-4-1',
            title: 'Interactive To-Do List Project',
            content: 'Applying DOM manipulation, event handling, local storage. Features: Add, delete, mark as complete, filter tasks. Building a complete interactive application.',
            videoUrl: 'https://www.youtube.com/watch?v=Ttf3CEsEwMQ',
            completed: false
          },
          {
            id: 'js-4-2',
            title: 'Asynchronous Data Fetching Application',
            content: 'Consuming a public API (e.g., Star Wars API, Jokes API). Displaying data, handling loading states and errors. Implementing search/filter functionality.',
            videoUrl: 'https://www.youtube.com/watch?v=tc8DU14qX6I',
            completed: false
          },
          {
            id: 'js-4-3',
            title: 'Introduction to Build Tools',
            content: 'Why build tools? (Minification, bundling, transpilation). Brief mention of Webpack/Vite/Parcel. Understanding modern JavaScript development workflow.',
            videoUrl: 'https://www.youtube.com/watch?v=5IG4UmULyoA',
            completed: false
          },
          {
            id: 'js-4-4',
            title: 'Introduction to Testing',
            content: 'Why test? Basic concepts of unit testing. Introduction to a testing framework (e.g., Jest). Writing simple tests for functions.',
            videoUrl: 'https://www.youtube.com/watch?v=FgnxcUQ5vho',
            completed: false
          }
        ]
      },
      {
        id: 'js-module-5',
        title: 'Modern JavaScript Ecosystem',
        completed: false,
        lessons: [
          {
            id: 'js-5-1',
            title: 'Node.js Fundamentals',
            content: 'What is Node.js? (Runtime environment). NPM (Node Package Manager). package.json. Building a simple HTTP server. Introduction to Express.js.',
            videoUrl: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
            completed: false
          },
          {
            id: 'js-5-2',
            title: 'Frontend Frameworks Overview',
            content: 'Why frameworks? (Component-based architecture, state management). Brief introduction to React, Angular, Vue.js. Virtual DOM concept. Declarative vs. Imperative programming.',
            videoUrl: 'https://www.youtube.com/watch?v=cuHDQhDhvPE',
            completed: false
          },
          {
            id: 'js-5-3',
            title: 'Performance Optimization',
            content: 'Lazy loading. Code splitting. Memoization. Minification and compression. Browser dev tools for performance analysis. Optimizing JavaScript applications.',
            videoUrl: 'https://www.youtube.com/watch?v=kwUfeWe7DCw',
            completed: false
          },
          {
            id: 'js-5-4',
            title: 'Security Best Practices',
            content: 'Preventing XSS, CSRF attacks. Input validation. Secure coding principles. Understanding common security vulnerabilities in JavaScript applications.',
            videoUrl: 'https://www.youtube.com/watch?v=zv0kZKC6GAM',
            completed: false
          },
          {
            id: 'js-5-5',
            title: 'TypeScript Introduction',
            content: 'What is TypeScript? (Superset of JavaScript). Benefits of static typing. Basic types. Interfaces and Type Aliases. Compiling TypeScript.',
            videoUrl: 'https://www.youtube.com/watch?v=BwuLxPH8IDs',
            completed: false
          },
          {
            id: 'js-5-6',
            title: 'Best Practices & Clean Code',
            content: 'Code style (ESLint, Prettier). Naming conventions. DRY principle. Readability and maintainability. Version control (Git/GitHub) workflow.',
            videoUrl: 'https://www.youtube.com/watch?v=hdI2bqOjy3c',
            completed: false
          }
        ]
      }
    ]
  }
];