<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️--><h1 align="center">Roadmap-for-Beginner</h1>
<p align="center">
	'Roadmap-for-Beginner'는 이제 막 개발을 시작한 사람들과 어떤 개발자가 될지 길을 정하지 못한 사람들을 위한 오픈소스 프로젝트입니다. 개발자라면 반드시 알아야 하지만 처음 개발을 시작할 땐 어려운 것들, 개발자는 어떤 직업을 얻을 수 있는지와 그 길을 가기 위해 배워야 할 것들을 보기 쉽게 정리해두었습니다. 이 프로젝트는 개발을 시작하려는 사람, 아직 직업을 정하지 못한 사람에게 도움이 될 것입니다.
</p> 
<br />
<details>
<summary>📖 목차</summary>
<br />

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

## ➤ 목차

* [➤ 참여하기](#-faq)
* [➤ Fundamentals](#-fundamentals)
	* [HTML](#html)
	* [Syntax](#syntax)
		* [Basic Tags](#basic-tags)
	* [Forms](#forms)
	* [SEO](#seo)
		* [Discoverable Content](#discoverable-content)
	* [Svg](#svg)
	* [Best Practices](#best-practices)
	* [CSS](#css)
	* [Syntax](#syntax-1)
	* [Selectors](#selectors)
		* [Specificity](#specificity)
		* [Pseudo Selectors](#pseudo-selectors)
	* [Box Model](#box-model)
		* [Margin Collapsing](#margin-collapsing)
	* [Colors](#colors)
	* [Calc](#calc)
	* [Layout](#layout)
		* [Flex](#flex)
		* [Grid](#grid)
	* [Transforms](#transforms)
		* [Animations](#animations)
	* [Responsive Design](#responsive-design)
		* [Media Queries](#media-queries)
		* [Relative Units](#relative-units)
		* [Images](#images)
	* [CSS Variables](#css-variables)
	* [Best Practices](#best-practices-1)
	* [Javascript](#javascript)
	* [Syntax](#syntax-2)
		* [Spread](#spread)
		* [Destructuring](#destructuring)
	* [DOM](#dom)
		* [DOM Manipulation](#dom-manipulation)
	* [Events](#events)
	* [Objects](#objects)
		* [Prototype](#prototype)
			* [Classes](#classes)
	* [Regex](#regex)
	* [Template Literals](#template-literals)
	* [Promises](#promises)
		* [Callbacks](#callbacks)
		* [Async/await](#asyncawait)
		* [Fetch](#fetch)
	* [Web Animations](#web-animations)
	* [Modules](#modules)
	* [Intl](#intl)
	* [Canvas](#canvas)
	* [Documentation](#documentation)
	* [Best Practices](#best-practices-2)
	* [The Browser](#the-browser)
	* [Standardization](#standardization)
		* [W3C](#w3c)
		* [TC39](#tc39)
		* [WHATWG](#whatwg)
		* [Specifications](#specifications)
	* [Browser Engines](#browser-engines)
		* [Webkit](#webkit)
		* [Blink](#blink)
		* [Gecko](#gecko)
	* [HTTP](#http)
	* [The Internet](#the-internet)
	* [Polyfills](#polyfills)
	* [Debugging](#debugging)
		* [Developer console](#developer-console)
* [➤ Frontend](#-frontend)
	* [HTML](#html)
	* [Semantic HTML](#semantic-html)
	* [Forms and Validations](#forms-and-validations)
	* [Accessibility](#accessibility)
	* [SEO](#seo)
	* [CSS](#css)
	* [Basics](#basics)
	* [Layouts](#layouts)
	* [Responsive design and Media Queries](#responsive-design-and-media-queries)
	* [CSS Architecture](#css-architecture)
	* [CSS Preprocessors](#css-preprocessors)
	* [Syntax and Constructs](#syntax-and-constructs)
	* [DOM Manipulation](#dom-manipulation)
	* [Fetch API / Ajax(XHR)](#fetch-api---ajax(xhr))
	* [ES6+ and modular JavaScript](#es6+-and-modular-javascript)
	* [Hoisting](#hoisting)
	* [Bubbling](#bubbling)
	* [Scope](#scope)
	* [Shadow DOM](#shadow-dom)
	* [Web-Assembly](#web-assembly)
	* [Package Managers](#package-managers)
	* [npm](#npm)
	* [yarn](#yarn)
	* [Build Tools](#build-tools)
	* [Task Runners](#task-runners)
		* [npm scripts](#npm-scripts)
	* [Linters and Formatters](#linters-and-formatters)
		* [Prettier](#prettier)
		* [ESLint](#eslint)
	* [Module Bundlers](#module-bundlers)
		* [Webpack](#webpack)
		* [Rollup](#rollup)
		* [Parcel](#parcel)
	* [Framework](#framework)
	* [React.js](#reactjs)
	* [Angular](#angular)
	* [Vue.js](#vuejs)
	* [Reactstrap](#reactstrap)
	* [Material UI](#material-ui)
	* [Bootstrap](#bootstrap)
	* [Static Site Generators](#static-site-generators)
	* [Next.js](#nextjs)
	* [GatasbyJS](#gatasbyjs)
* [➤ Web Components](#-web-components)
	* [Custom Elements](#custom-elements)
	* [HTML Templates](#html-templates)
	* [Shadow DOM](#shadow-dom)
		* [Shadow Parts](#shadow-parts)
		* [Slots](#slots)
	* [Best practices](#best-practices)
	* [Constructible Stylesheets](#constructible-stylesheets)
	* [Form Participation](#form-participation)
* [➤ Progressive Webapps](#-progressive-webapps)
	* [API's](#apis)
	* [Storage](#storage)
	* [Routing](#routing)
		* [History API](#history-api)
	* [Service Workers](#service-workers)
		* [Offline first](#offline-first)
		* [Push notifications](#push-notifications)
	* [Web App manifest](#web-app-manifest)
	* [Add to homescreen](#add-to-homescreen)
	* [Pointer Events](#pointer-events)
	* [Loading Performance](#loading-performance)
	* [App shell](#app-shell)
	* [Render-Blocking Resources](#render-blocking-resources)
	* [Compression](#compression)
	* [Performance metrics](#performance-metrics)
		* [Largest Contentful Paint](#largest-contentful-paint)
		* [Total Blocking Time](#total-blocking-time)
		* [Time to Interactive](#time-to-interactive)
	* [Lazy Loading](#lazy-loading)
		* [Dynamic Import](#dynamic-import)
		* [Offscreen images](#offscreen-images)
	* [Critical Request Chains](#critical-request-chains)
	* [Tree shaking](#tree-shaking)
	* [Codesplitting](#codesplitting)
	* [PRPL Pattern](#prpl-pattern)
	* [Resource Prioritization](#resource-prioritization)
	* [Caching](#caching)
	* [Rendering Performance](#rendering-performance)
	* [Rendering](#rendering)
	* [Event loop](#event-loop)
		* [Microtask](#microtask)
		* [Stack](#stack)
		* [Heap](#heap)
	* [RAIL Model](#rail-model)
		* [requestAnimationFrame](#requestanimationframe)
		* [requestIdleCallback](#requestidlecallback)
	* [Critical Rendering Path](#critical-rendering-path)
	* [The Pixel Pipeline](#the-pixel-pipeline)
		* [Style calculations](#style-calculations)
		* [Transforms](#transforms-1)
		* [Paint areas](#paint-areas)
		* [Layout Trashing](#layout-trashing)
		* [Layers](#layers)
		* [Debounce](#debounce)
	* [CSS Containment](#css-containment)
	* [Web Workers](#web-workers)
	* [Security](#security)
	* [HTTPS](#https)
	* [Browser Sandbox](#browser-sandbox)
	* [OWASP](#owasp)
		* [Cross-Site Scripting](#cross-site-scripting)
		* [Clickjacking](#clickjacking)
	* [Content Security Policy](#content-security-policy)
	* [Audits](#audits-1)
	* [Performance budgets](#performance-budgets)
	* [Lighthouse](#lighthouse)
	* [Chrome DevTools](#chrome-devtools)
* [➤ Android](#-android)
	* [Language](#language)
	* [Kotlin](#kotlin)
	* [Java](#java)
	* [The Fundamentals](#the-fundamentals)
	* [Android Studio](#android-studio)
	* [OOP](#oop)
	* [Data Structures](#data-structures)
	* [Algorithm](#algorithm)
	* [Gradle](#gradle)
	* [Build an Application](#build-an-application)
	* [Activities and Activity Lifecycles](#activities-and-activity-lifecycles)
	* [Building Flexible Interfaces using Fragments](#building-flexible-interfaces-using-fragments)
	* [Debugging using Android Studio Debugger](#debugging-using-android-studio-debugger)
	* [Content Providers](#content-providers)
	* [Handling App Configurations](#handling-app-configurations)
	* [Intents and Context](#intents-and-context)
	* [3rd Party Libraries](#3rd-party-libraries)
	* [Writing Robust Apps](#writing-robust-apps)
	* [Multithreading](#multithreading)
	* [Security](#security)
	* [Testing](#testing)
		* [JUnit](#junit)
		* [Espresso](#espresso)
	* [Dependency Management](#dependency-management)
		* [Dagger](#dagger)
		* [Koin](#koin)
	* [Concurrency](#concurrency)
		* [RxJava](#rxjava)
		* [Coroutines](#coroutines)
* [➤ Frameworks & Libraries](#-frameworks--libraries)
	* [lit-element](#lit-element)
	* [Vue](#vue)
	* [React](#react)
	* [Angular](#angular)
	* [Svelte](#svelte)
	* [Stencil](#stencil)
* [➤ Testing](#-testing)
	* [Testing Methodologies](#testing-methodologies)
		* [Unit Testing](#unit-testing)
		* [Integration Testing](#integration-testing)
		* [System Testing](#system-testing)
		* [Acceptance Testing](#acceptance-testing)
		* [Smoke Testing](#smoke-testing)
		* [Performance Testing](#performance-testing)
		* [Usability Testing](#usability-testing)
		* [White Box Testing](#white-box-testing)
		* [Black Box Testing](#black-box-testing)
		* [Automated Testing](#automated-testing)
		* [Manual Testing](#manual-testing)
	* [Continuous integration](#continuous-integration)
	* [A/B Testing](#ab-testing)
	* [Test Runners](#test-runners)
		* [Karma](#karma)
		* [Mocha](#mocha)
		* [Jasmine](#jasmine)
		* [Cypress](#cypress)
		* [Ava](#ava)
	* [Best Practices](#best-practices-3)
* [➤ Contributors](#-contributors)
* [➤ License](#-license)
</details>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#faq)

## ➤ 참여하기
본 저장소에 기여하고 싶다면 링크()를 참고해 주세요.
- 경어체를 사용합니다.

### What is Web Skills?

Web Skills is a visual overview of useful skills to learn as a web developer. It is useful for people who just started learning about web development and for people who have been in the field for years and want to learn new things. As a beginner, I would encourage you not to see this website as the definitive list of what you need to know but as an example of what you can learn and where you can start. The skills are arranged in chronological order based on what learning path I recommend you to take but feel free to jump around freely.

### How did you choose the skills?
		
The skills are derived from a combination of 10 years of experience, a bachelor in software engineering and what I personally find to be the most useful to know on a day-to-day basis. Therefore, you'll notice that it's missing a lot of things. For example, I am not a PHP developer - because of this, PHP is not included. If you were a PHP developer, this overview would probably look a lot different.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#fundamentals)

## ➤ Fundamentals

### HTML

### Syntax

Learn the basics of HTML and get comfortable with it's syntax and main concepts.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.codecademy.com" alt="Logo" /> Codecademy - Learn HTML](https://www.codecademy.com/learn/learn-html)

#### Basic Tags

Get familiar with the basic HTML tags

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com" alt="Logo" /> Tutorialspoint - Basic HTML tags](https://www.tutorialspoint.com/html/html_basic_tags.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.elated.com" alt="Logo" /> Elated - First 10 HTML tags](https://www.elated.com/first-10-html-tags/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com" alt="Logo" /> W3Schools - HTML tags](https://www.w3schools.com/tags/ref_byfunc.asp)

### Forms

Learn how to design efficient forms, validating them effectively and keeping the user informed along the way.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - HTML forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Web - Forms](https://developers.google.com/web/fundamentals/design-and-ux/input/forms/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com" alt="Logo" /> W3Schools - Forms](https://www.w3schools.com/html/html_forms.asp)

### SEO

Learn how to make your content search-friendly.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Discoverable](https://web.dev/discoverable)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Search - Get Started](https://developers.google.com/search/docs/guides/get-started)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Search - SEO basics](https://developers.google.com/search/docs/guides/javascript-seo-basics)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - SEO audits](https://web.dev/lighthouse-seo)

#### Discoverable Content

Learn how to structure your HTML in a way that provides a rich experience when sharing it online.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Web - Social Discovery](https://developers.google.com/web/fundamentals/discovery/social-discovery)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Search - Search Features](https://developers.google.com/search/docs/guides/search-features)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Search - Structured Data](https://developers.google.com/search/docs/guides/intro-structured-data)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Easily discoverable](https://web.dev/discoverable)

### Svg

Learn how to work with SVG files to make graphics look crisp across all screen resolutions.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Adding vector graphics to the Web](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsvgontheweb.com" alt="Logo" /> SVG on the web](https://svgontheweb.com/)

### Best Practices

Learn the best practices of writing HTML.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - HTML guidelines](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/HTML)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com" alt="Logo" /> W3Schools - HTML Coding Conventions](https://www.w3schools.com/html/html5_syntax.asp)


### CSS

### Syntax

Learn the basics of CSS and get comfortable with it's syntax and main concepts.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com" alt="Logo" /> W3Schools - CSS Tutorial](https://www.w3schools.com/css/default.asp)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com" alt="Logo" /> Supercharged - CSS Selectors](https://www.youtube.com/watch?v=IKho_xDKaLw)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - CSS first steps](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - CSS building blocks](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - CSS values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - CSS Syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax)

### Selectors

Learn about CSS selectors and how to effeciently target DOM elements.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - CSS selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - All selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> CSS Tricks - Child and Sibling Selectors](https://css-tricks.com/child-and-sibling-selectors/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> CSS Tricks - All Selectors](https://css-tricks.com/almanac/selectors/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com" alt="Logo" /> W3Schools - CSS Combinators](https://www.w3schools.com/css/css_combinators.asp)

#### Specificity

Learn what specificity means and how to use it when writing CSS.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> dev.to - CSS Specificity](https://dev.to/emmawedekind/css-specificity-1kca)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fspecificity.keegan.st" alt="Logo" /> Specificity Calculator](https://specificity.keegan.st/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com" alt="Logo" /> W3Schools - CSS Specificity](https://www.w3schools.com/css/css_specificity.asp)

#### Pseudo Selectors

Learn how to use pseudo selectors.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> CSS Tricks - Meet the Pseudo Class Selectors](https://css-tricks.com/pseudo-class-selectors/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fbitsofco.de" alt="Logo" /> When do the :hover, :focus, and :active pseudo-classes apply?](https://bitsofco.de/when-do-the-hover-focus-and-active-pseudo-classes-apply/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com" alt="Logo" /> W3Schools - CSS Pseudo-elements](https://www.w3schools.com/css/css_pseudo_elements.asp)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com" alt="Logo" /> W3Schools - CSS Pseudo-classes](https://www.w3schools.com/css/css_pseudo_classes.asp)

### Box Model

Learn what the CSS box model means.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Introduction to the CSS basic box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - The box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> CSS Tricks - Inheriting box-sizing](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)

#### Margin Collapsing

Learn about margin collapsing.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Mastering margin collapsing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Margin Collapse in CSS: What, Why, and How](https://medium.com/@joseph0crick/margin-collapse-in-css-what-why-and-how-328c10e37ca0)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> CSS Tricks - What You Should Know About Collapsing Margins](https://css-tricks.com/what-you-should-know-about-collapsing-margins/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fbitsofco.de" alt="Logo" /> What's the Deal with Collapsible Margins?](https://bitsofco.de/collapsible-margins/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjonathan-harrell.com" alt="Logo" /> What’s the Deal with Margin Collapse?](https://jonathan-harrell.com/whats-the-deal-with-margin-collapse/)

### Colors

Learn the different ways you can define colors in CSS.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - <color>](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com" alt="Logo" /> W3Schools - CSS Colors](https://www.w3schools.com/css/css_colors.asp)

### Calc

Learn how to use the CSS calc function.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Calc](https://developer.mozilla.org/en-US/docs/Web/CSS/calc)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> CSS Tricks - A Couple of Use Cases for Calc()](https://css-tricks.com/a-couple-of-use-cases-for-calc/)

### Layout

Learn the different layout types for web.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Chrome Dev - Basic Layout](https://developers.google.com/training/certification/mobile-web-specialist/study-guide/basic-layout)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com" alt="Logo" /> W3Schools - CSS Website Layout](https://www.w3schools.com/css/css_website_layout.asp)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Document and website structure](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - CSS layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)

#### Flex

Learn how to create layouts using flexbox.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fflexboxfroggy.com" alt="Logo" /> Flexbox Froggy](https://flexboxfroggy.com/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fflexboxdefense.com" alt="Logo" /> Flexbox Defense](http://flexboxdefense.com)

#### Grid

Learn how to create layouts using CSS Grid.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Grids](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> A Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcssgridgarden.com" alt="Logo" /> CSS Grid Garden](https://cssgridgarden.com/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com" alt="Logo" /> Supercharged - CSS Grids](https://www.youtube.com/watch?v=AqwPrR7hklE)

### Transforms

Learn the different ways to transform elements through CSS.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> CSS Tricks - Transform](https://css-tricks.com/almanac/properties/t/transform/)

#### Animations

Learn how to animate elements through CSS using keyframes.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Using CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> CSS Tricks - Animation](https://css-tricks.com/almanac/properties/a/animation/)

### Responsive Design

Learn how to make your website responsive so it works across different screen sizes.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Responsive design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.udacity.com" alt="Logo" /> Responsive Web Design Fundamentals by Google](https://www.udacity.com/course/responsive-web-design-fundamentals--ud893)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Dev - Responsive Design](https://developers.google.com/web/fundamentals/design-and-ux/responsive)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Dev - UX Patterns](https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Dev - Responsive Content](https://developers.google.com/web/fundamentals/design-and-ux/responsive/content)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodelabs.developers.google.com" alt="Logo" /> Codelabs - Responsive Design](https://codelabs.developers.google.com/codelabs/pwa-responsive-design/index.html?index=..%2F..dev-pwa-training#0)

#### Media Queries

Learn how use media queries to build responsive layout.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> CSS Tricks - CSS Media Queries & Using Available Space](https://css-tricks.com/css-media-queries/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Using Media Queries for Accessibility](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility)

#### Relative Units

Learn how to use relative units for properties such as font sizes and spacing.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Sizing items in CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - CSS values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fthecssworkshop.com" alt="Logo" /> The CSS Workshop - Relative Units](https://thecssworkshop.com/lessons/relative-units)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> CSS Tricks - Fun with Viewport Units](https://css-tricks.com/fun-viewport-units/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> dev.to - 15 CSS Relative units](https://dev.to/bytegasm/15-css-relative-units-how-many-do-you-know-em-rem-ex-cap-ch-ic-6m)

#### Images

Learn how to make images responsive, always showing the best possible version for the screen size.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Responsive Images](https://developers.google.com/web/fundamentals/design-and-ux/responsive/images)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

### CSS Variables

Learn how to define and use CSS variables.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - CSS Variables: Why Should You Care?](https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> dev.to - CSS Quickies: CSS Variables](https://dev.to/lampewebdev/css-quickies-css-variables-or-how-you-create-a-white-dark-theme-easily-1i0i)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodeburst.io" alt="Logo" /> CSS Variables explained with 5 examples](https://codeburst.io/css-variables-explained-with-5-examples-84adaffaa5bd)

### Best Practices

Learn the best practices of writing CSS.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - CSS guidelines](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/CSS)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Organizing your CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fspeckyboy.com" alt="Logo" /> Speckyboy - Good and bad CSS practices](https://speckyboy.com/good-bad-css-practices/)


### Javascript

### Syntax

Learn the basics of Javascript and get comfortable with it's syntax and main concepts.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Javascript First Steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Javascript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Javascript Building Blocks](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks)

#### Spread

Learn how the spread syntax can help you when working with arrays.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org" alt="Logo" /> Freecodecamp - An introduction to Spread syntax](https://www.freecodecamp.org/news/an-introduction-to-spread-syntax-in-javascript-fba39595922c/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fv8.dev" alt="Logo" /> Object rest and spread properties](https://v8.dev/features/object-rest-spread)

#### Destructuring

Learn how destructuring can help you when working with objects.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fhacks.mozilla.org" alt="Logo" /> MDN - ES6 In Depth: Destructuring](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info" alt="Logo" /> javascript.info - Destructuring assignment](https://javascript.info/destructuring-assignment)

### DOM

Learn how the HTML is represented as objects that comprise the structure and content of a document.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - DOM Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org" alt="Logo" /> Freecodecamp - What's the DOM](https://www.freecodecamp.org/news/whats-the-document-object-model-and-why-you-should-know-how-to-use-it-1a2d0bc5429d/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Flearn.co" alt="Logo" /> Introduction to the DOM](https://learn.co/lessons/introduction-to-the-dom)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fhtmldom.dev" alt="Logo" /> htmldom.dev](https://htmldom.dev/)

#### DOM Manipulation

Learn how to query HTML elements through Javascript and manipulate them.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Locating DOM elements using selectors](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com" alt="Logo" /> Supercharged - querySelector](https://www.youtube.com/watch?v=s0vg_H9hBuU)

### Events

Learn how to dispatch and listen for events.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Creating and triggering events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Event Bubbling and Event Capturing in JavaScript](https://medium.com/@vsvaibhav2016/event-bubbling-and-event-capturing-in-javascript-6ff38bec30e)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org" alt="Logo" /> Freecodecamp - A simplified explanation of event propagation](https://www.freecodecamp.org/news/a-simplified-explanation-of-event-propagation-in-javascript-f9de7961a06e/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fflaviocopes.com" alt="Logo" /> JavaScript Events Explained](https://flaviocopes.com/javascript-events/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - removeEventListener(](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.quirksmode.org" alt="Logo" /> Event order](https://www.quirksmode.org/js/events_order.html)

### Objects

Learn how to create and use objects.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Introducing JavaScript objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info" alt="Logo" /> javascript.info - Objects](https://javascript.info/object)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com" alt="Logo" /> W3Schools - The JavaScript this Keyword](https://www.w3schools.com/js/js_this.asp)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - new operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - new.target](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fscotch.io" alt="Logo" /> Data Structures: Objects and Arrays](https://scotch.io/courses/10-need-to-know-javascript-concepts/data-structures-objects-and-arrays)

#### Prototype

Learn how to extend objects and functions through its prototype.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> The prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Prototypes in JavaScript](https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> dev.to - JavaScript Visualized: Prototypal Inheritance](https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co)

##### Classes

Learn how to define and use classes. Get somewhat comfortable with some of the object oriented concepts such as inheritence and encapsulation.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Medium - ES6 Classes](https://medium.com/@luke_smaki/javascript-es6-classes-8a34b0a6720a)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Inheritance](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Object Oriented Programming](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - super](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)

### Regex

Learn how to use regex to extract information from strings.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info" alt="Logo" /> javascript.info - Regular expressions](https://javascript.info/regular-expressions)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

### Template Literals

Learn how template literals and tagged templates and help you manipulate strings.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fhacks.mozilla.org" alt="Logo" /> MDN - ES6 In Depth: Template strings](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Getting Literal With ES6 Template Strings](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings)

### Promises

Learn how to use promises and what asynchronous code means.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - JavaScript Promises: an Introduction](https://developers.google.com/web/fundamentals/primers/promises)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Master the JavaScript Interview: What is a Promise?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)

#### Callbacks

Learn how to use callbacks and why they are not always a good idea.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodeburst.io" alt="Logo" /> JavaScript: What the heck is a Callback?](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info" alt="Logo" /> javascript.info - Callbacks](https://javascript.info/callbacks)

#### Async/await

Learn how to use the async and await keywords to make it easier to write asynchronous code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Async functions](https://developers.google.com/web/fundamentals/primers/async-functions)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info" alt="Logo" /> javascript.info - Async/await](https://javascript.info/async-await)

#### Fetch

Learn how to use the fetch API to fetch data.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Introduction to fetch](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Networking](https://developers.google.com/training/certification/mobile-web-specialist/study-guide/networking)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org" alt="Logo" /> Freecodecamp - Fetch practical guide](https://www.freecodecamp.org/news/a-practical-es6-guide-on-how-to-perform-http-requests-using-the-fetch-api-594c3d91a547/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Falligator.io" alt="Logo" /> Alligator - Fetch API](https://alligator.io/js/fetch-api/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com" alt="Logo" /> Supercharged - Fetch](https://www.youtube.com/watch?v=GiI77ya60yk)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodelabs.developers.google.com" alt="Logo" /> Codelabs - Fetch ](https://codelabs.developers.google.com/codelabs/pwa-fetch/index.html?index=..%2F..dev-pwa-training#0)

### Web Animations

Learn how to use web animations to animate elements in the DOM.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Animations](https://developers.google.com/web/fundamentals/design-and-ux/animations)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Using The Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> CSS Tricks - CSS Animations vs Web Animations API](https://css-tricks.com/css-animations-vs-web-animations-api/)

### Modules

Learn how to modularize your code into ES6 modules using the export and import keywords.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fv8.dev" alt="Logo" /> V8 - Modules](https://v8.dev/features/modules)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org" alt="Logo" /> Freecodecamp - A Practical guide to ES6 modules](https://www.freecodecamp.org/news/how-to-use-es6-modules-and-why-theyre-important-a9b20b480773/)

### Intl

Learn how to localize your website using the Intl API.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Date Time Format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.bitsrc.io" alt="Logo" /> New Intl APIs in JavaScript](https://blog.bitsrc.io/new-intl-apis-in-javascript-c50dc89d2cf3)

### Canvas

Learn how to paint graphics onto a canvas.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Canvas tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> CSS Tricks - Manipulating Pixels Using Canvas](https://css-tricks.com/manipulating-pixels-using-canvas/)

### Documentation

Learn how to create good documentation and why it is important.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjsdoc.app" alt="Logo" /> Getting Started with JSDoc](https://jsdoc.app/about-getting-started.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.writethedocs.org" alt="Logo" /> A beginner’s guide to writing documentation](https://www.writethedocs.org/guide/writing/beginners-guide-to-docs/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fhackernoon.com" alt="Logo" /> Write Good Documentation](https://hackernoon.com/write-good-documentation-6caffb9082b4)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> The power of jsDoc](https://dev.to/gmartigny/the-power-of-jsdoc-272d)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> Document your Javascript code with JSDoc](https://dev.to/paulasantamaria/document-your-javascript-code-with-jsdoc-2fbf)

### Best Practices

Learn the best practices of writing Javascript.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - JavaScript guidelines](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/JavaScript)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com" alt="Logo" /> Airbnb - JavaScript Style Guide](https://github.com/airbnb/javascript)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com" alt="Logo" /> Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodeburst.io" alt="Logo" /> 5 JavaScript Style Guides](https://codeburst.io/5-javascript-style-guides-including-airbnb-github-google-88cbc6b2b7aa)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com" alt="Logo" /> JavaScript Style Guide and Coding Conventions](https://www.w3schools.com/js/js_conventions.asp)


### The Browser

### Standardization

Learn why web standards are important and how new specifications are standardised.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org" alt="Logo" /> Wikipedia - Web Standards](https://en.wikipedia.org/wiki/Web_standards)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.elcom.com.au" alt="Logo" /> What Are Web Standards?](https://www.elcom.com.au/resources/blog/web-standards)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Frobertnyman.com" alt="Logo" /> A Comprehensive Explanation of Web Standards](https://robertnyman.com/2007/05/21/what-are-web-standards-a-comprehensive-explanation-of-what-is-comprised-in-the-term/)

#### W3C

Learn what W3C are doing and how they are moving the web forward.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org" alt="Logo" /> W3C - About](https://www.w3.org/standards/about.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org" alt="Logo" /> W3C - Standards](https://www.w3.org/standards/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fwebdiy.org" alt="Logo" /> W3C - Process](http://webdiy.org/w3c/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.smashingmagazine.com" alt="Logo" /> Web Standards Guide](https://www.smashingmagazine.com/2019/01/web-standards-guide/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org" alt="Logo" /> W3C - Groups](https://www.w3.org/community/groups/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.smashingmagazine.com" alt="Logo" /> The W3C At Twenty-Five](https://www.smashingmagazine.com/2019/10/happy-birthday-w3c/)

#### TC39

Learn what TC39 are doing and how they are moving the web forward.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2F2ality.com" alt="Logo" /> The TC39 process for ECMAScript features](https://2ality.com/2015/11/tc39-process.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com" alt="Logo" /> Github - TC39](https://github.com/tc39)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.ecma-international.org" alt="Logo" /> Ecma International - Programme of work](https://www.ecma-international.org/memento/tc39.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org" alt="Logo" /> Wikipedia - Ecma International](https://en.wikipedia.org/wiki/Ecma_International)

#### WHATWG

Learn what WHATWG are doing and how they are moving the web forward.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwhatwg.org" alt="Logo" /> WHATWG - FAQ](https://whatwg.org/faq)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fspec.whatwg.org" alt="Logo" /> WHATWG - Standards](https://spec.whatwg.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - WHATWG](https://developer.mozilla.org/en-US/docs/Glossary/WHATWG)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdzone.com" alt="Logo" /> W3C vs. WHATWG HTML5 Specs](https://dzone.com/articles/w3c-vs-whatwg-html5-specs)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fhtml.spec.whatwg.org" alt="Logo" /> WHATWG - HTML](https://html.spec.whatwg.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org" alt="Logo" /> Wikipedia - WHATWG](https://en.wikipedia.org/wiki/WHATWG)

#### Specifications

Learn how to read specifications developed by the standards committees.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Ftimothygu.me" alt="Logo" /> How to Read the ECMAScript Specification](https://timothygu.me/es-howto/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Falistapart.com" alt="Logo" /> How to Read W3C Specs](https://alistapart.com/article/readspec/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.chenhuijing.com" alt="Logo" /> Learning CSS by reading specs](https://www.chenhuijing.com/blog/learning-css-by-reading-specifications/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org" alt="Logo" /> Understanding the CSS Specifications](https://www.w3.org/Style/CSS/read.en.html)

### Browser Engines

Learn what a browser engine is and get an overview of the browser landscape and market share.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Medium - Browser Engines](https://medium.com/@jonbiro/browser-engines-chromium-v8-blink-gecko-webkit-98d6b0490968)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org" alt="Logo" /> Wikipedia - Comparison](https://en.wikipedia.org/wiki/Comparison_of_browser_engines)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.html5rocks.com" alt="Logo" /> HTML5 Rocks - How Browsers Work](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Ftextslashplain.com" alt="Logo" /> Demystifying Browsers](https://textslashplain.com/2020/02/09/demystifying-browsers/)

#### Webkit

Learn about the Webkit browser engine.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebkit.org" alt="Logo" /> Webkit](https://webkit.org/)

#### Blink

Learn about the Blink browser engine.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org" alt="Logo" /> Blink](https://en.wikipedia.org/wiki/Blink_(browser_engine))

#### Gecko

Learn about the Gecko browser engine.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org" alt="Logo" /> Gecko](https://en.wikipedia.org/wiki/Gecko_(software))

### HTTP

Learn how data is distributed through the HTTP protocol.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - HTTP Glossary](https://developer.mozilla.org/en-US/docs/Glossary/HTTP)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org" alt="Logo" /> Wikipedia - Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

### The Internet

Learn the basics of how the internet works.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - How does the Internet work?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com" alt="Logo" /> Youtube - How the Internet Works in 5 Minutes](https://www.youtube.com/watch?v=7_LPdttKXPc)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.explainthatstuff.com" alt="Logo" /> Explain That Stuff - Internet](https://www.explainthatstuff.com/internet.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.stanford.edu" alt="Logo" /> Stanford - How Does the Internet Work?](https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.hubspot.com" alt="Logo" /> How the Internet Works](https://blog.hubspot.com/marketing/how-the-internet-works)

### Polyfills

Learn how it is possible to use polyfills to increase the browser support for your website.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Polyfill](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Introduction To Polyfills & Their Usage](https://medium.com/beginners-guide-to-mobile-web-development/introduction-to-polyfills-their-usage-9cd6db4b1923)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org" alt="Logo" /> W3C - Polyfills and the evolution of the Web](https://www.w3.org/2001/tag/doc/polyfills/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fcaniuse.com" alt="Logo" /> Can I use](http://caniuse.com/)

### Debugging

Learn about the basics concepts of debugging.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Inspect and Edit Pages and Styles](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Cross browser testing](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> 5 things to remember for better debugging of your code](https://medium.com/dev-bits/5-things-to-remember-for-better-debugging-of-your-code-94b9bc3fb3df)

#### Developer console

Learn how to use the developer console to debug your code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Console](https://developer.mozilla.org/en-US/docs/Web/API/Console)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Console API Reference](https://developers.google.com/web/tools/chrome-devtools/console/api)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Get Started with Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/javascript)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Console Utilities API Reference](https://developers.google.com/web/tools/chrome-devtools/console/utilities)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Debugging CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Debugging HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info" alt="Logo" /> javascript.info - Debugging in Chrome](https://javascript.info/debugging-chrome)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fraygun.com" alt="Logo" /> 14 JavaScript debugging tips](https://raygun.com/javascript-debugging-tips)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fflaviocopes.com" alt="Logo" /> The definitive guide to debugging JavaScript](https://flaviocopes.com/javascript-debugging/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com" alt="Logo" /> Youtube - Chrome DevTools 101](https://www.youtube.com/watch?v=H0XScE08hy8)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Chrome Devs - Quickly monitor events](https://developers.google.com/web/updates/2015/05/quickly-monitor-events-from-the-console-panel)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com" alt="Logo" /> Youtube - 14 Must Know Chrome Dev Tools Tricks](https://www.youtube.com/watch?v=xkzDaKwinA8)



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#accessibility)

## ➤ Accessibility

### The why

Learn what accessibility is and why it is important.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Accessibility Fundamentals](https://developers.google.com/web/fundamentals/accessibility/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com" alt="Logo" /> A11ycasts with Rob Dodson](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fudacity.github.io" alt="Logo" /> Udacity - Chromevox Lite](http://udacity.github.io/ud891/lesson3-semantics-built-in/02-chromevox-lite/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> Dev.to - Why Accessibility Matters](https://dev.to/lhoffmanwg1/why-accessibility-matters-39nl)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.abilitynet.org.uk" alt="Logo" /> Abilitynet - Why Accessibility Matters](https://www.abilitynet.org.uk/why-accessibility-matters)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.udacity.com" alt="Logo" /> Udacity - Web Accessibility](https://www.udacity.com/course/web-accessibility--ud891)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com" alt="Logo" /> Youtube - Headings, Landmarks, and Tabs](https://www.youtube.com/watch?v=HE2R86EZPMA)

### Screen Readers

Learn about assistive technology such as screen readers that reads sections of the page aloud based on the current focus.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com" alt="Logo" /> The A11Y Project - Screen Reader Myths](https://a11yproject.com/posts/people-who-use-screen-readers-dont-use-javascript/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com" alt="Logo" /> The A11Y Project - NVDA Screen Reader](https://a11yproject.com/posts/getting-started-with-nvda/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com" alt="Logo" /> The A11Y Project - OS X Voiceover](https://a11yproject.com/posts/getting-started-with-voiceover/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Webaim - Screen Reader Survey](https://webaim.org/projects/screenreadersurvey7/)

### Accessibility tree

Learn about the accessibility tree and how assistive technology uses it.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - The Accessibility Tree](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree)

#### ARIA

Learn how to use ARIA descriptions an labels to help assistive technology understanding your website.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - ARIA Labels](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Hiding and updating content](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/hiding-and-updating-content)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com" alt="Logo" /> The A11Y Project - ARIA States](https://a11yproject.com/posts/ARIA-states/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com" alt="Logo" /> The A11Y Project - ARIA Properties](https://a11yproject.com/posts/ARIA-properties/)

#### Accessible HTML

Learn how to write HTML in such as way that assistive technology better understands it.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Introduction to Semantics](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Accessibility HTML](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Webaim - Skip navigation](https://webaim.org/techniques/skipnav/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org" alt="Logo" /> w3c - Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fguide.freecodecamp.org" alt="Logo" /> Freecodecamp - Semantic Elements](https://guide.freecodecamp.org/html/html5-semantic-elements/)

##### Alt text

Learn how to use the alt attribute to provide a useful text alternative to this image.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Text Alternatives for Images](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/text-alternatives-for-images)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Webaim - Accessible Images](https://webaim.org/techniques/images/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Webaim - Alternative text](https://webaim.org/techniques/alttext/)

#### Accessible CSS

Learn how to write CSS in such as way that assistive technology better understands it.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Webaim - CSS](https://webaim.org/techniques/css/)

### Accessible forms

Learn how to build accessible forms that makes it usable to as many people as possible.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Webaim - Forms](https://webaim.org/techniques/forms/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fitnext.io" alt="Logo" /> Itnext - Form Accessibility Gudie](https://itnext.io/form-accessibility-a-practical-guide-4062b7e2dd14)

### UI States

Learn how to make the state of each UI element clear.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Accessible Styles](https://developers.google.com/web/fundamentals/accessibility/accessible-styles)

### Keyboard Accessibility

Learn how to make it easy for keyboard users to navigate your site.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Webaim - Keyboard](https://webaim.org/techniques/keyboard/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.smashingmagazine.com" alt="Logo" /> Smashing Magazine - Web with just a keyboard](https://www.smashingmagazine.com/2018/07/web-with-just-a-keyboard/)

#### Focus

Learn how to create a sensible tab order and how to make it easy for the users to locate the currently focused element.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Control focus with tabindex](https://web.dev/control-focus-with-tabindex/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Focus](https://developers.google.com/web/fundamentals/accessibility/focus/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Dom Order Matters](https://developers.google.com/web/fundamentals/accessibility/focus/dom-order-matters)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Using Tabindex](https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Track Focus](https://developers.google.com/web/tools/chrome-devtools/accessibility/focus)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - :focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - :focus-within](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within)

### Accessible Colors

Learn how to select colors in such a way that users, including those with visual disabilities, can perceive the content on the page.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Webaim - Contrast and Color](https://webaim.org/articles/contrast/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com" alt="Logo" /> The A11Y Project - Check contrast](https://a11yproject.com/posts/check-contrast-with-mobile-device/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com" alt="Logo" /> The A11Y Project - What is color contrast?](https://a11yproject.com/posts/what-is-color-contrast/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fstripe.com" alt="Logo" /> Designing accessible color systems](https://stripe.com/en-dk/blog/accessible-color-systems)

### Laws & Policies

Learn about the governmental policies related to web accessibility.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org" alt="Logo" /> W3C - Laws & Policies](https://www.w3.org/WAI/policies/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Webaim - Laws around the world](https://webaim.org/articles/laws/world/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Webaim - Section 508](https://webaim.org/standards/508/checklist)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Webaim - WCAG 2 Checklist](https://webaim.org/standards/wcag/checklist)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11y.dev" alt="Logo" /> A11Y.dev - Lawsuits](https://a11y.dev/470-digital-accessibility-cases-were-filed-in-q3-2018/)

#### Audits

Learn how to conduct an accessibility review to improve the overall experience of using your site. Remember, good accessibility equals good UX!

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Accessibility audits](https://web.dev/lighthouse-accessibility)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - How to review](https://developers.google.com/web/fundamentals/accessibility/how-to-review)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Webaim - Accessibility Tools](https://webaim.org/articles/tools/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Accessibility Reference](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fwave.webaim.org" alt="Logo" /> Webaim - Wave](http://wave.webaim.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fchrome.google.com" alt="Logo" /> Google Chrome - NoCoffee Extension](https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.digitala11y.com" alt="Logo" /> Digital A11Y - Accessibility Plugins](https://www.digitala11y.com/accessibility-plug-ins-ie-chrome-firefox-browsers/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Accessibility for teams](https://developers.google.com/web/fundamentals/accessibility/a11y-for-teams)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.wuhcag.com" alt="Logo" /> WCAG 2.0 checklists](https://www.wuhcag.com/wcag-checklist/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org" alt="Logo" /> How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG21/quickref/)



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#web-components)

## ➤ Web Components

### Custom Elements

Learn how to create new HTML tags with Custom Elements.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Custom Elements](https://developers.google.com/web/fundamentals/web-components/customelements)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Using Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> CSS Tricks - Creating a Custom Element from Scratch](https://css-tricks.com/creating-a-custom-element-from-scratch/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info" alt="Logo" /> Javascript.info - Custom Elements](https://javascript.info/custom-elements)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> dev.to - An introduction to Custom Elements](https://dev.to/jamesrweb/an-introduction-to-custom-elements-5327)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fitnext.io" alt="Logo" /> itnext - Introduction to Web Components](https://itnext.io/introduction-to-web-components-part-i-custom-elements-4de6713cef9d)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Web Components](https://web.dev/web-components-io-2019/)

### HTML Templates

Learn how to use HTML templates to create flexible templates that can then be used to populate the Shadow DOM.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Using Templates & Slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info" alt="Logo" /> Javascript.info - Template Element](https://javascript.info/template-element)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - The Content Template element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)

### Shadow DOM

Learn how to encapsulate your CSS using Shadow DOM.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Shadow DOM](https://developers.google.com/web/fundamentals/web-components/shadowdom)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Using Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Shadow Tree](https://developer.mozilla.org/en-US/docs/Glossary/Shadow_tree)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> CSS Tricks - Encapsulating Style and Structure](https://css-tricks.com/encapsulating-style-and-structure-with-shadow-dom/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fitnext.io" alt="Logo" /> itnext - Introduction to Web Components](https://itnext.io/introduction-to-web-components-part-ii-shadow-dom-8d1d8e126332)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmeowni.ca" alt="Logo" /> Monica - Shadow DOM: fast and encapsulated styles](https://meowni.ca/posts/shadow-dom/)

#### Shadow Parts

Learn how to style the inside of a shadow tree from outside of that Shadow Tree by using Shadow Parts.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com" alt="Logo" /> Fergald - CSS Shadow ::part and ::theme](https://github.com/fergald/docs/blob/master/explainers/css-shadow-parts-1.md)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - ::part](https://developer.mozilla.org/en-US/docs/Web/CSS/::part)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org" alt="Logo" /> W3C - CSS Shadow Parts](https://www.w3.org/TR/css-shadow-parts-1/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmeowni.ca" alt="Logo" /> Monica - ::part and ::theme, an explainer](https://meowni.ca/posts/part-theme-explainer/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com" alt="Logo" /> Youtube - CSS Shadow Parts](https://www.youtube.com/watch?v=yVrvOueeb3s)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.chromestatus.com" alt="Logo" /> Chrome Status - ::part and ::theme](https://www.chromestatus.com/features/5763933658939392)

#### Slots

Learn how to compose Custom Elements by using slots.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Falligator.io" alt="Logo" /> Alligator.io - Composing Custom Elements](https://alligator.io/web-components/composing-slots-named-slots/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info" alt="Logo" /> Javascript.info - Slots Composition](https://javascript.info/slots-composition)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - HTML <slot> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcomponent.kitchen" alt="Logo" /> Component.kitchen - A history of the HTML slot element](https://component.kitchen/blog/posts/a-history-of-the-html-slot-element)

### Best practices

Get familiar with best practices when it comes to building Web Components.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Custom Element Best Practices](https://developers.google.com/web/fundamentals/web-components/best-practices)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.webcomponents.org" alt="Logo" /> Webcomponents.org - Web Components Best Practices](https://www.webcomponents.org/community/articles/web-components-best-practices)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com" alt="Logo" /> mateusortiz - Web Components the Right Way](https://github.com/mateusortiz/webcomponents-the-right-way)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> dev.to - Making Web Components for Different Contexts](https://dev.to/equinusocio/making-web-components-for-different-contexts-25ed)

### Constructible Stylesheets

Learn how the Constructible Stylesheets proposal enables reusable styles when using shadow dom.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Constructable Stylesheets](https://developers.google.com/web/updates/2019/02/constructable-stylesheets)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwicg.github.io" alt="Logo" /> W3C - Constructable Stylesheet Objects](https://wicg.github.io/construct-stylesheets/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> dev.to - Why Would Anyone Use Constructible Stylesheets](https://dev.to/westbrook/why-would-anyone-use-constructible-stylesheets-anyways-19ng)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Benjamin Farrel - Adopt a Design System](https://medium.com/swlh/adopt-a-design-system-inside-your-web-components-with-constructable-stylesheets-dd24649261e)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com" alt="Logo" /> WICG - Constructable Stylesheet Objects](https://github.com/WICG/construct-stylesheets/blob/gh-pages/explainer.md)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.chromestatus.com" alt="Logo" /> Chrome Status - Constructible Stylesheets](https://www.chromestatus.com/feature/5394843094220800)

### Form Participation

Learn how the Form Participation API proposal enables elements, other than built-in form control elements, to participate in form submission and validation.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Form Participation API Explained](https://docs.google.com/document/d/1JO8puctCSpW-ZYGU8lF-h4FWRIDQNDVexzHoOQ2iQmY/edit)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.chromestatus.com" alt="Logo" /> Chrome Status - Form-associated custom elements](https://www.chromestatus.com/features/4708990554472448)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com" alt="Logo" /> web-platform-tests - Form Participation](https://github.com/web-platform-tests/wpt/tree/master/custom-elements/form-associated)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Form-associated custom elements](https://developers.google.com/web/updates/2019/09/nic77#form-associated_custom_elements)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - More capable form controls](https://web.dev/more-capable-form-controls/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fhtml.spec.whatwg.org" alt="Logo" /> W3C - Creating a form-associated custom element](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-face-example)



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#progressive-webapps)

## ➤ Progressive Webapps

### API's

### Storage

Learn how to store data for your web app.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - View And Edit Local Storage](https://developers.google.com/web/tools/chrome-devtools/storage/localstorage)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Client-side storage](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)

### Routing

Learn what routing means in single page applications.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.pshrmn.com" alt="Logo" /> How Single-Page Applications Work](https://blog.pshrmn.com/how-single-page-applications-work/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fstaticapps.org" alt="Logo" /> Static Apps - Routing URLs in Static Web Apps](https://staticapps.org/articles/routing-urls-in-static-apps/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fpennyforyourcode.com" alt="Logo" /> Routing With Single Page Applications or Client Side Routing](https://pennyforyourcode.com/tldr-routing-with-single-page-applications-or-client-side-routing-327626cdc5dd)

#### History API

Learn how to use the history API to add single page applicaiton routing to your web app.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Working with the History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Single-page application routing in vanilla JavaScript](https://medium.com/@george.norberg/history-api-getting-started-36bfc82ddefc)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> CSS Tricks - Using the HTML5 History API](https://css-tricks.com/using-the-html5-history-api/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fflaviocopes.com" alt="Logo" /> The History API](https://flaviocopes.com/history-api/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - History API: Scroll Restoration](https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - The Document Base URL element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)

### Service Workers

Learn how to register a service worker to provide a rich native-like experience.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - The Service Worker Lifecycle](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Service Worker Registration](https://developers.google.com/web/fundamentals/primers/service-workers/registration)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - High-performance service worker loading](https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodelabs.developers.google.com" alt="Logo" /> Codelabs - Scripting the service worker](https://codelabs.developers.google.com/codelabs/pwa-scripting-the-service-worker/index.html?index=..%2F..dev-pwa-training#0)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodelabs.developers.google.com" alt="Logo" /> Codelabs - Caching files with the service worker](https://codelabs.developers.google.com/codelabs/pwa-caching-service-worker/index.html?index=..%2F..dev-pwa-training#0)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Codelabs - Adding a Service Worker](https://developers.google.com/web/fundamentals/codelabs/offline)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Debugging Service Workers](https://developers.google.com/web/fundamentals/codelabs/debugging-service-workers)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjakearchibald.com" alt="Logo" /> Caching best practices](https://jakearchibald.com/2016/caching-best-practices/)

#### Offline first

Learn how to make your web app working offline with an offline first approach.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - The Offline Cookbook](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.udacity.com" alt="Logo" /> Udacity - Offline Web Applications](https://www.udacity.com/course/offline-web-applications--ud899)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fofflinefirst.org" alt="Logo" /> Offline First](http://offlinefirst.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Offline UX Considerations](https://developers.google.com/web/fundamentals/instant-and-offline/offline-ux)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Offline Storage for Progressive Web Apps](https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/offline-for-pwa)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodelabs.developers.google.com" alt="Logo" /> Codelabs - Offline quickstart](https://codelabs.developers.google.com/codelabs/pwa-offline-quickstart/index.html?index=..%2F..dev-pwa-training#0)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodelabs.developers.google.com" alt="Logo" /> Codelabs - Adding a Service Worker and Offline into your Web App](https://codelabs.developers.google.com/codelabs/offline/index.html?index=..%2F..%2Findex#0)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com" alt="Logo" /> Supercharged - Offline Links](https://www.youtube.com/watch?v=7fnpsF9tMXc)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Online and offline events](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/Online_and_offline_events)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Making PWAs work offline](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers)

#### Push notifications

Learn how to add push notifications to your web app.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Adding Push Notifications to a Web App](https://developers.google.com/web/fundamentals/codelabs/push-notifications/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - How to make PWAs re-engageable](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Re-engageable_Notifications_Push)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)

### Web App manifest

Learn how to tell the browser about your web app and how it should behave when 'installed' by creating a web app manifest.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Web App Manifest](https://developers.google.com/web/fundamentals/web-app-manifest/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Add a web app manifest](https://web.dev/add-manifest/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org" alt="Logo" /> W3C - Web App Manifest](https://www.w3.org/TR/appmanifest/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - How to make PWAs installable](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Installable_PWAs)

### Add to homescreen

Learn how to make your web app installable.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Installable](https://web.dev/installable)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - App Install Banners](https://developers.google.com/web/fundamentals/app-install-banners/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Add to Home screen](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen)

### Pointer Events

Learn how to handle inputs from pointing devices such as a mouse, pen/stylus or touch.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Pointer Events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Add Touch to Your Site](https://developers.google.com/web/fundamentals/design-and-ux/input/touch)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Pointing the Way Forward](https://developers.google.com/web/updates/2016/10/pointer-events)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Touch Action Options](https://developers.google.com/web/updates/2016/10/touch-action)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org" alt="Logo" /> W3C - Pointer Events](https://www.w3.org/TR/pointerevents/)


### Loading Performance

### App shell

Learn how to use an app shell to provide an instant and reliable experience to users on repeat visits

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - The App Shell Model](https://developers.google.com/web/fundamentals/architecture/app-shell)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Architecture of an app](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/App_structure)

### Render-Blocking Resources

Learn about render-blocking resources and why they are bad for the user-experience.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Render-blocking resources](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Loading#Render-blocking_resources)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Render-Blocking Resources](https://developers.google.com/web/tools/lighthouse/audits/blocking-resources)

### Compression

Learn how to minimize the overall download size by optimizing and compressing resources.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Optimizing Encoding and Transfer Size](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Replace Animated GIFs with Video](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/replace-animated-gifs-with-video/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsquoosh.app" alt="Logo" /> Squoosh](https://squoosh.app/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Text Content](https://developers.google.com/web/fundamentals/performance/get-started/textcontent-3)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Optimize Images](https://developers.google.com/web/tools/lighthouse/audits/optimize-images)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Reduce JavaScript execution time](https://web.dev/bootup-time/)

### Performance metrics

Learn why it is important to measure performance and which metrics you should prioritize.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - User-centric Performance Metrics](https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.udacity.com" alt="Logo" /> Udacity - Website Performance Optimization](https://www.udacity.com/course/website-performance-optimization--ud884)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.udacity.com" alt="Logo" /> Udacity - Browser Rendering Optimization](https://www.udacity.com/course/browser-rendering-optimization--ud860)

#### Largest Contentful Paint

Learn about Largest Contentful Paint and how it impacts the overall performance.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Largest Contentful Paint](https://web.dev/lcp/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Lighthouse Largest Contentful Paint](https://web.dev/lighthouse-largest-contentful-paint)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Medium - New Performance Metric: What is Largest Contentful Paint?](https://medium.com/speedrank-app/new-performance-metric-what-is-largest-contentful-paint-dc784a497dd5)

#### Total Blocking Time

Learn about Total Blocking Time and how it impacts the overall performance.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - First CPU Idle](https://web.dev/first-cpu-idle)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> Google Devs - Total Blocking Time](https://web.dev/tbt)

#### Time to Interactive

Learn about Time to Interactive and how it impacts the overall performance.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Total Blocking Time](https://web.dev/lighthouse-total-blocking-time/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Time to Interactive](https://developers.google.com/web/tools/lighthouse/audits/time-to-interactive)

### Lazy Loading

Learn how to use lazy loading to lower the initial page payload and load time.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Lazy Loading Images and Video](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Faddyosmani.com" alt="Logo" /> Addy Osmani - Lazy Loading Images](https://addyosmani.com/blog/lazy-loading/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Native lazy-loading for the web](https://web.dev/native-lazy-loading/)

#### Dynamic Import

Learn how to use dynamic import to lazy load javascript.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fv8.dev" alt="Logo" /> V8 - Dynamic import()](https://v8.dev/features/dynamic-import)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> JavaScript dynamic import() & export](https://medium.com/@WebReflection/javascript-dynamic-import-export-b0e8775a59d4)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Dynamic Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Dynamic_Imports)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com" alt="Logo" /> TC39 - proposal-dynamic-import](https://github.com/tc39/proposal-dynamic-import)

#### Offscreen images

Learn why offscreen images increase the load time and how to avoid them by lazy loading images.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Defer offscreen images](https://web.dev/offscreen-images/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Properly Size Images](https://developers.google.com/web/tools/lighthouse/audits/oversized-images)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Native lazy-loading for the web](https://web.dev/native-lazy-loading)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Faddyosmani.com" alt="Logo" /> Addy Osmani - Native image lazy-loading for the web!](https://addyosmani.com/blog/lazy-loading/)

### Critical Request Chains

Learn about the critical request chains and how to find them in your web app.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Critical Request Chains](https://developers.google.com/web/tools/lighthouse/audits/critical-request-chains)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Minimize critical requests depth](https://web.dev/critical-request-chains)

### Tree shaking

Learn how to use tree shaking to eliminate dead code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Reduce JavaScript Payloads](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.keycdn.com" alt="Logo" /> How to Clean Up Your JavaScript](https://www.keycdn.com/blog/tree-shaking)

### Codesplitting

Learn about codesplitting an how dividing your code into multiple chunks makes your web app faster.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Reduce JavaScript Payloads](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/code-splitting)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.creativebloq.com" alt="Logo" /> All you need to know about JavaScript code splitting](https://www.creativebloq.com/how-to/all-you-need-to-know-about-javascript-code-splitting)

### PRPL Pattern

Learn how to use the PRPL pattern to make web apps more performant.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - The PRPL Pattern](https://developers.google.com/web/fundamentals/performance/prpl-pattern/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - JavaScript Start-up Optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fbuilding.calibreapp.com" alt="Logo" /> Ben Schwarz - Real world performance](https://building.calibreapp.com/beyond-the-bubble-real-world-performance-9c991dcd5342?gi=76804aa8f46e)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> The Cost of Javascript](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4)

### Resource Prioritization

Learn about resource prioritization and how to inform the browser about the importance of a resource.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Resource Prioritization](https://developers.google.com/web/fundamentals/performance/resource-prioritization)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.igvita.com" alt="Logo" /> Eliminating Roundtrips with Preconnect](https://www.igvita.com/2015/08/17/eliminating-roundtrips-with-preconnect/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Addy Osmani - Preload, Prefetch And Priorities in Chrome](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Preconnect to required origins](https://web.dev/uses-rel-preconnect/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2F3perf.com" alt="Logo" /> Preload, prefetch and other <link> tags](https://3perf.com/blog/link-rels/)

### Caching

Learn about caching and how it can be uses to make web apps load faster.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - HTTP Caching](https://developers.google.com/web/fundamentals/performance/get-started/httpcaching-6)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)


### Rendering Performance

### Rendering

Learn about rendering, how a page is rendered and why it is important to keep your web app interactive and smooth running.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Constructing the Object Model](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Rendering Performance](https://developers.google.com/web/fundamentals/performance/rendering)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Render-tree Construction](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Render Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css)

### Event loop

Learn about the event loop and how Javascript simulate like it’s running our commands in a multi-thread environment.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fyoutu.be" alt="Logo" /> Youtube - Jake Archibald: In The Loop](https://youtu.be/cCOL7MC4Pl0)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Understanding JavaScript](https://medium.com/@muratcatal/understanding-javascript-heap-stack-event-loops-and-callback-queue-6fdec3cfe32e)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> JavaScript Event Loop Explained](https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com" alt="Logo" /> Youtube - What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fflaviocopes.com" alt="Logo" /> The JavaScript Event Loop](https://flaviocopes.com/javascript-event-loop/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> dev.to - JavaScript Visualized: Event Loop](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)

#### Microtask

Learn about microtasks and the microtask queue.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjakearchibald.com" alt="Logo" /> Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Using microtasks in JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info" alt="Logo" /> javascript.info - Microtasks and macrotasks](https://javascript.info/event-loop)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info" alt="Logo" /> javascript.info - Microtasks](https://javascript.info/microtask-queue)

#### Stack

Learn about the stack and how to investigate the staack trace when debugging.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.scalyr.com" alt="Logo" /> Javascript Stack Trade - Using it to debug](https://www.scalyr.com/blog/javascript-stack-trace-understanding-it-and-using-it-to-debug/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - console.trace()](https://developer.mozilla.org/en-US/docs/Web/API/Console/trace)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fv8.dev" alt="Logo" /> V8 - Stack trace API](https://v8.dev/docs/stack-trace-api)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Confused about Stack and Heap?](https://medium.com/fhinkel/confused-about-stack-and-heap-2cf3e6adb771)

#### Heap

Learn about the heap and how to investigate the heap snapshots when debugging.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Memory Problems](https://developers.google.com/web/tools/chrome-devtools/memory-problems/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Memory Terminology](https://developers.google.com/web/tools/chrome-devtools/memory-problems/memory-101)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - How to Record Heap Snapshots](https://developers.google.com/web/tools/chrome-devtools/memory-problems/heap-snapshots)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Confused about Stack and Heap?](https://medium.com/fhinkel/confused-about-stack-and-heap-2cf3e6adb771)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - How to Use the Allocation Profiler Tool](https://developers.google.com/web/tools/chrome-devtools/memory-problems/allocation-profiler)

### RAIL Model

Learn how to use the RAIL model to ensure a good user experience.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - RAIL](https://developers.google.com/web/fundamentals/performance/rail)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Why Performance Matters](https://developers.google.com/web/fundamentals/performance/why-performance-matters/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Get Started With Analyzing](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Animations and Performance](https://developers.google.com/web/fundamentals/design-and-ux/animations/animations-and-performance)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - CSS Versus JavaScript Animations](https://developers.google.com/web/fundamentals/design-and-ux/animations/css-vs-javascript)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Choosing the Right Easing](https://developers.google.com/web/fundamentals/design-and-ux/animations/choosing-the-right-easing)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Animating Modal Views](https://developers.google.com/web/fundamentals/design-and-ux/animations/animating-modal-views)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - CSS and JavaScript animation performance](https://developer.mozilla.org/en-US/docs/Web/Performance/CSS_JavaScript_animation_performance)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Performance fundamentals](https://developer.mozilla.org/en-US/docs/Web/Performance/Fundamentals)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com" alt="Logo" /> Youtube - Fast By Default](https://www.youtube.com/watch?v=_srJ7eHS3IM)

#### requestAnimationFrame

Learn how to use the requestAnimationFrame API to create butter-smooth animations.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Optimize JavaScript Execution](https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - requestAnimationFrame()](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

#### requestIdleCallback

Learn how to use the requestIdleCallback to defer heavy tasks.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Background Tasks API](https://developer.mozilla.org/en-US/docs/Web/API/Background_Tasks_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Dev - requestIdleCallback](https://developers.google.com/web/updates/2015/08/using-requestidlecallback?hl=en)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - requestIdleCallback()](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback)

### Critical Rendering Path

Learn about the critical rendering path and how to identify it.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Critical Rendering Path](https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Understanding the critical rendering path](https://medium.com/@luisvieira_gmr/understanding-the-critical-rendering-path-rendering-pages-in-1-second-735c6e45b47a)

### The Pixel Pipeline

Learn about the five key points in the pixels-to-screen pipeline.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - The pixel pipeline](https://developers.google.com/web/fundamentals/performance/rendering#the_pixel_pipeline)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Faerotwist.com" alt="Logo" /> Pixels are expensive](https://aerotwist.com/blog/pixels-are-expensive/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com" alt="Logo" /> Google Devs - The Applied Science of Runtime Performance](https://www.youtube.com/watch?v=RCFQu0hK6bU)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcsstriggers.com" alt="Logo" /> CSS Triggers](https://csstriggers.com/)

#### Style calculations

Learn how to optimize your CSS to avoid heavy style calculations.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Style Calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations)

#### Transforms

Learn about transforms and how it is possible to avoid both layout and paint.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Use transform and opacity for animations](https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count#use_transform_and_opacity_changes_for_animations)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Achieving 60 FPS Animations with CSS3](https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.html5rocks.com" alt="Logo" /> HTML5 Rocks - High Performance Animations](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)

#### Paint areas

Learn about paint areas and how it is possible to reduce them.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Paint Areas](https://developers.google.com/web/fundamentals/performance/rendering/simplify-paint-complexity-and-reduce-paint-areas)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> CSS Tricks - Browser painting](https://css-tricks.com/browser-painting-and-considerations-for-web-performance/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.html5rocks.com" alt="Logo" /> HTML5 Rocks - Avoiding Unnecessary Paints](https://www.html5rocks.com/en/tutorials/speed/unnecessary-paints/)

#### Layout Trashing

Learn about layout trashing and how to avoid it.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Layout Thrashing](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.idrsolutions.com" alt="Logo" /> Beware JavaScript Layout Thrashing!](https://blog.idrsolutions.com/2014/08/beware-javascript-layout-thrashing/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevhints.io" alt="Logo" /> Layout thrashing cheatsheet](https://devhints.io/layout-thrashing)

#### Layers

Learn about layers and how to promote an element to another layer.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Manage Layer Count](https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.html5rocks.com" alt="Logo" /> HTML5 Rocks - Accelerated Rendering in Chrome](https://www.html5rocks.com/en/tutorials/speed/layers/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdassur.ma" alt="Logo" /> Layers and how to force them](https://dassur.ma/things/forcing-layers/)

#### Debounce

Learn how to debounce computationally expensive code to avoid blocking the UI.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Debounce Your Input Handlers](https://developers.google.com/web/fundamentals/performance/rendering/debounce-your-input-handlers)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> What is Debouncing?](https://medium.com/@jamischarles/what-is-debouncing-2505c0648ff1)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Flevelup.gitconnected.com" alt="Logo" /> Level Up - Debounce in JavaScript](https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086)

### CSS Containment

Learn how to use CSS containment to improve the performance of your web app.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - CSS Containment](https://developers.google.com/web/updates/2016/06/css-containment)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org" alt="Logo" /> W3C - CSS Containment Module](https://www.w3.org/TR/css-contain-1/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblogs.igalia.com" alt="Logo" /> An introduction to CSS Containment](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Contain](https://developer.mozilla.org/en-US/docs/Web/CSS/contain)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> CSS Tricks - CSS containment](https://css-tricks.com/css-containment/)

### Web Workers

Learn how to use web workers to run a script operation in a background thread separate from the main execution thread.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.html5rocks.com" alt="Logo" /> HTML5 Rocks - The Basics of Web Workers](https://www.html5rocks.com/en/tutorials/workers/basics/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdassur.ma" alt="Logo" /> When should you be using Web Workers?](https://dassur.ma/things/when-workers/)


### Security

### HTTPS

Learn about HTTPS and why a website should always be protected with HTTPS.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Why HTTPS Matters](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Enabling HTTPS on Your Servers](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/enable-https)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Mixed Content](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com" alt="Logo" /> Youtube - Stories from the field](https://www.youtube.com/watch?v=GoXgl9r0Kjk)

### Browser Sandbox

Learn about the sandbox security mechanism and how it restricts the execution environment.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Browser sandbox](https://web.dev/browser-sandbox/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org" alt="Logo" /> Wikipedia - Sandbox (computer security)](https://en.wikipedia.org/wiki/Sandbox_(computer_security))
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.howtogeek.com" alt="Logo" /> Howtogeek - Sandboxes Explained](https://www.howtogeek.com/169139/sandboxes-explained-how-theyre-already-protecting-you-and-how-to-sandbox-any-program/)

### OWASP

Learn about the OWASP organization and how they help with web application security.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org" alt="Logo" /> Wikipedia - OWASP](https://en.wikipedia.org/wiki/OWASP)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.owasp.org" alt="Logo" /> OWASP - About](https://www.owasp.org/index.php/About_The_Open_Web_Application_Security_Project)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.owasp.org" alt="Logo" /> OWASP - OWASP Top 10](https://www.owasp.org/images/7/72/OWASP_Top_10-2017_%28en%29.pdf.pdf)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcheatsheetseries.owasp.org" alt="Logo" /> OWASP - Cheatsheets](https://cheatsheetseries.owasp.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com" alt="Logo" /> Youtube - OWASP](https://www.youtube.com/user/OWASPGLOBAL)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.sucuri.net" alt="Logo" /> OWASP Top 10 Security Risks](https://blog.sucuri.net/2018/10/owasp-top-10-security-risks-part-i.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org" alt="Logo" /> Wikipedia - Web application security](https://en.wikipedia.org/wiki/Web_application_security)

#### Cross-Site Scripting

Learn about cross-site scripting and how it is possible mitigate these kind of attacks.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Cross-site scripting](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.owasp.org" alt="Logo" /> OWASP - Cross-site Scripting (XSS)](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS))
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcheatsheetseries.owasp.org" alt="Logo" /> OWASP - XSS Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fexcess-xss.com" alt="Logo" /> Excess XSS](https://excess-xss.com/)

#### Clickjacking

Learn about clickjacking and how it is possible to mitigate these kind of attacks.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.owasp.org" alt="Logo" /> OWASP - Clickjacking](https://www.owasp.org/index.php/Clickjacking)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org" alt="Logo" /> Wikipedia - Clickjacking](https://en.wikipedia.org/wiki/Clickjacking)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Same-origin policy](https://web.dev/same-origin-policy/#how-to-prevent-clickjacking)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcheatsheetseries.owasp.org" alt="Logo" /> OWASP - Clickjacking Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html)

### Content Security Policy

Learn about content security policy and how it can help to detect and mitigate certain types of attacks.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - CSP](https://developers.google.com/web/fundamentals/security/csp)


### Audits

### Performance budgets

Learn about performance budgets and how you can create one for your web app.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Performance Budgets](https://web.dev/performance-budgets-101)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Performance Budget](https://developers.google.com/web/tools/lighthouse/audits/budgets)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Faddyosmani.com" alt="Logo" /> Addy Osmani - Start Performance Budgeting](https://addyosmani.com/blog/performance-budgets/)

### Lighthouse

Learn about lighthouse and how it can be used to audit your web app.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Lighthouse](https://developers.google.com/web/tools/lighthouse/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com" alt="Logo" /> Youtube - Staying off the Rocks](https://www.youtube.com/watch?v=NoRYn6gOtVo)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Measure](https://web.dev/measure)

### Chrome DevTools

Learn about the Chrome DevTools and how it can be used to audit your web app.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Inspect animations](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/animations)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcalibreapp.com" alt="Logo" /> Investigate animation performance with DevTools](https://calibreapp.com/blog/investigate-animation-performance-with-devtools/)



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#build-tools)

## ➤ Build tools

### Package Managers

Learn about package managers and how they make managing dependencies easier.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org" alt="Logo" /> Freecodecamp - How JavaScript package managers work](https://www.freecodecamp.org/news/javascript-package-managers-101-9afd926add0a/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.javascriptstuff.com" alt="Logo" /> Guide to JavaScript frontend package managers](https://www.javascriptstuff.com/javascript-frontend-package-managers/)

#### NPM

Learn about NPM and how it can be used to manage dependencies.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.npmjs.com" alt="Logo" /> npmjs - About npm](https://docs.npmjs.com/about-npm/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.npmjs.com" alt="Logo" /> npmjs - Getting started](https://docs.npmjs.com/getting-started/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Introduction to npm and basic npm commands](https://medium.com/beginners-guide-to-mobile-web-development/introduction-to-npm-and-basic-npm-commands-18aa16f69f6b)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fnodesource.com" alt="Logo" /> An Absolute Beginner's Guide to Using npm](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)

#### Yarn

Learn about Yarn and how it can be used to manage dependencies.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fyarnpkg.com" alt="Logo" /> Yarnpkg - Getting Started](https://yarnpkg.com/en/docs/getting-started)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fengineering.fb.com" alt="Logo" /> Facebook Engineering - Yarn](https://engineering.fb.com/web/yarn-a-new-package-manager-for-javascript/)

### Module Bundlers

Learn about module bundler and how they can help bundling your code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> dev.to - What is a module bundler?](https://dev.to/tanhauhau/what-is-module-bundler-and-how-does-it-work-3gp2)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org" alt="Logo" /> Freecodecamp - Let’s learn how module bundlers work](https://www.freecodecamp.org/news/lets-learn-how-module-bundlers-work-and-then-write-one-ourselves-b2e3fe6c88ae/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> JavaScript Bundlers, a Comparison](https://medium.com/@ajmeyghani/javascript-bundlers-a-comparison-e63f01f2a364)

#### Rollup

Learn how you can use Rollup to bundle your code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Frollupjs.org" alt="Logo" /> Rollup - Introduction](https://rollupjs.org/guide/en/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Flengstorf.com" alt="Logo" /> How to Bundle JavaScript With Rollup](https://lengstorf.com/learn-rollup-js/)

#### Webpack

Learn how you can use Webpack to bundle your code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebpack.js.org" alt="Logo" /> Webpack - Getting Started](https://webpack.js.org/guides/getting-started/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fauth0.com" alt="Logo" /> Webpack: A Gentle Introduction to the Module Bundler](https://auth0.com/blog/webpack-a-gentle-introduction/)

#### Parcel

Learn how you can use Parcel to bundle your code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fparceljs.org" alt="Logo" /> Parcel - Getting Started](https://parceljs.org/getting_started.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fflaviocopes.com" alt="Logo" /> Parcel, a simpler webpack](https://flaviocopes.com/parcel/)

#### Snowpack

Learn how Snowpack can replace the traditional app bundler during development.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.snowpack.dev" alt="Logo" /> Snowpack](https://www.snowpack.dev/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.snowpack.dev" alt="Logo" /> Snowpack - Quickstart](https://www.snowpack.dev/#quickstart)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com" alt="Logo" /> Github - Snowpack](https://github.com/pikapkg/snowpack)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.pika.dev" alt="Logo" /> Pika - About](https://www.pika.dev/about/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.pika.dev" alt="Logo" /> A Future Without Webpack](https://www.pika.dev/blog/pika-web-a-future-without-webpack/)

### Linters and formatters

Learn how you can improve your code quality with linters and formatters.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.gistia.com" alt="Logo" /> Improve Your JavaScript Code Quality With Linters](https://www.gistia.com/javascript-linters-formatter-prettier-eslint/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Why you should always use a Linter](https://medium.com/dailyjs/why-you-should-always-use-a-linter-and-or-pretty-formatter-bb5471115a76)

#### Prettier

Learn how you can use Prettier to format your code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fprettier.io" alt="Logo" /> Prettier - What is Prettier?](https://prettier.io/docs/en/index.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.bitsrc.io" alt="Logo" /> Let the computer do the formatting](https://blog.bitsrc.io/let-the-computer-do-the-formatting-ddb799e8a068)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fprettier.io" alt="Logo" /> Prettier - Playground](https://prettier.io/playground/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fprettier.io" alt="Logo" /> Prettier - Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html)

#### ESLint

Learn how you can use ESLint to lint your code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Feslint.org" alt="Logo" /> Eslint - Getting Started](https://eslint.org/docs/user-guide/getting-started)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Streamline Code Reviews with ESLint + Prettier](https://medium.com/javascript-scene/streamline-code-reviews-with-eslint-prettier-6fb817a6b51d)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.futurehosting.com" alt="Logo" /> Prettier vs ESLint: What’s The Difference?](https://www.futurehosting.com/blog/prettier-vs-eslint-whats-the-difference/)

### Task Runners

Learn about task runners and how you can automate code execution.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.dbswebsite.com" alt="Logo" /> The Advantages of Using Task Runners](https://www.dbswebsite.com/blog/the-advantages-of-using-task-runners/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.smashingmagazine.com" alt="Logo" /> Being Productive With Task Runners](https://www.smashingmagazine.com/2016/06/harness-machines-productive-task-runners/)

#### NPM Scripts

Learn about NPM scripts and how you can run your own.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> CSS Tricks - Why npm Scripts?](https://css-tricks.com/why-npm-scripts/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmichael-kuehnel.de" alt="Logo" /> Helpers and tips for npm run scripts](https://michael-kuehnel.de/tooling/2018/03/22/helpers-and-tips-for-npm-run-scripts.html)

### Transpilers

Learn what transpilers are and why we need them.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fscotch.io" alt="Logo" /> Scotch - Javascript Transpilers](https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fthenewstack.io" alt="Logo" /> What JavaScript Programmers Need to Know about Transpilers](https://thenewstack.io/javascript-transpilers-need-know/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org" alt="Logo" /> Wikipedia - Source-to-source compiler](https://en.wikipedia.org/wiki/Source-to-source_compiler)

#### Babel

Learn about Babel and how you can use it to transpile your code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Complete Babel 7 Guide for Beginners](https://medium.com/@onlykiosk/complete-babel-7-guide-for-beginners-in-2019-7dd78214c464)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fbabeljs.io" alt="Logo" /> Babel - What is Babel?](https://babeljs.io/docs/en/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fbabeljs.io" alt="Logo" /> Babel - Usage Guide](https://babeljs.io/docs/en/usage)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.sitepoint.com" alt="Logo" /> A Beginner’s Guide to Babel](https://www.sitepoint.com/babel-beginners-guide/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fhackernoon.com" alt="Logo" /> Moving to ES6 — Babel and Transpilers](https://hackernoon.com/moving-to-es6-babel-and-transpilers-337921c025b1)

#### Typescript

Learn how to use Typescript and how it can help making your code typesafe.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fwww.typescriptlang.org" alt="Logo" /> Typescript - Documentation](http://www.typescriptlang.org/docs/home.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Typescript: Why should one use i?](https://medium.com/tech-tajawal/typescript-why-should-one-use-it-a539faa92010)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Why TypeScript is the best way to write Front-end in 2019](https://medium.com/@jtomaszewski/why-typescript-is-the-best-way-to-write-front-end-in-2019-feb855f9b164)

### CSS Pre-processors

Learn about CSS pre-processors and why we need them.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - CSS preprocessor](https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Advantages of Using a Preprocessor](https://medium.com/swlh/advantages-of-using-a-preprocessor-sass-in-css-eb7310179944)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Deconfusing Pre- and Post-processing](https://medium.com/@ddprrt/deconfusing-pre-and-post-processing-d68e3bd078a3)

#### SASS

Learn about SASS and how you can use it to simplify your styles.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsass-lang.com" alt="Logo" /> SASS - Guide](https://sass-lang.com/guide)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fraygun.com" alt="Logo" /> 10 Reasons to Use a CSS Preprocessor in 2018](https://raygun.com/blog/10-reasons-css-preprocessor/)

#### PostCSS

Learn about PostCSS and how you can use its ecosystem of plugins to extend your CSS build pipeline.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fpostcss.org" alt="Logo" /> PostCSS](https://postcss.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.sitepoint.com" alt="Logo" /> What is PostCSS?](https://www.sitepoint.com/an-introduction-to-postcss/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fflaviocopes.com" alt="Logo" /> Introduction to PostCSS](https://flaviocopes.com/postcss/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.logrocket.com" alt="Logo" /> Getting started with PostCSS in 2019](https://blog.logrocket.com/getting-started-with-postcss-in-2019-484262a4d725/)

### Node.js

Learn how to use Node.js.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fnodejs.org" alt="Logo" /> Node.js](https://nodejs.org)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fnodejs.dev" alt="Logo" /> Introduction to Node.js](https://nodejs.dev/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fnodejs.org" alt="Logo" /> Node.js - Guides](https://nodejs.org/en/docs/guides/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com" alt="Logo" /> W3Schools - Node.js tutorial](https://www.w3schools.com/nodejs/)



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#frameworks--libraries)

## ➤ DBA

### Postgres

PostgreSQL is an object-relational database system (ORDBMS).

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Flit-element.polymer-project.org" alt="Logo" /> lit-element](https://lit-element.polymer-project.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Lightning-fast templates](https://developers.google.com/web/updates/2019/02/lit-element-and-lit-html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fvaadin.com" alt="Logo" /> Vaadin - Creating a LitElement project](https://vaadin.com/tutorials/lit-element/starting-a-lit-element-project)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> dev.to - Web Components: from zero to hero, part three](https://dev.to/thepassle/web-components-from-zero-to-hero-part-three-3c5h)

### Oracle

Learn about Vue and how you can use it for building web apps.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fvuejs.org" alt="Logo" /> Vue](https://vuejs.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcli.vuejs.org" alt="Logo" /> Vue - CLI](https://cli.vuejs.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.taniarascia.com" alt="Logo" /> Getting Started with Vue](https://www.taniarascia.com/getting-started-with-vue/)

### MYSQL

Learn about React and how you can use it for building web apps.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Freactjs.org" alt="Logo" /> React](https://reactjs.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - React](https://web.dev/react)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.taniarascia.com" alt="Logo" /> Getting Started with React](https://www.taniarascia.com/getting-started-with-react/)

### certificate

Learn about Angular and how you can use it for building web apps.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fangular.io" alt="Logo" /> Angular](https://angular.io/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Angular](https://web.dev/angular)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcli.angular.io" alt="Logo" /> Angular - CLI](https://cli.angular.io/)

### advice

Learn about Svelte and how it can convert your component into highly efficient imperative code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsvelte.dev" alt="Logo" /> Svelte](https://svelte.dev/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com" alt="Logo" /> Github - Svelte FAQ](https://github.com/sveltejs/svelte/wiki/FAQ)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsvelte.dev" alt="Logo" /> Svelte - Rethinking reactivity](https://svelte.dev/blog/svelte-3-rethinking-reactivity)



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#testing)

## ➤ Testing

### Testing Methodologies

Learn about various software testing methodologies and why it is important to test your code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org" alt="Logo" /> Wikipedia - Software testing](https://en.wikipedia.org/wiki/Software_testing)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsmartbear.com" alt="Logo" /> Software Testing Methodologies](https://smartbear.com/learn/automated-testing/software-testing-methodologies/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.inflectra.com" alt="Logo" /> Learn The Methods & Tools](https://www.inflectra.com/ideas/topic/testing-methodologies.aspx)

#### Unit Testing

Learn about unit testing and how it can be used to test individual units of code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com" alt="Logo" /> Unit Testing Tutorial](https://www.guru99.com/unit-testing-guide.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org" alt="Logo" /> Wikipedia - Unit testing](https://en.wikipedia.org/wiki/Unit_testing)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com" alt="Logo" /> What is Unit Testing?](https://www.tutorialspoint.com/software_testing_dictionary/unit_testing.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> The Arrange, Act and Assert (AAA) Pattern](https://medium.com/@pjbgf/title-testing-code-ocd-and-the-aaa-pattern-df453975ab80)

#### Integration Testing

Learn about integration testing and how it can be used to test modules as a group.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com" alt="Logo" /> Integration Testing Tutorial](https://www.guru99.com/integration-testing.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com" alt="Logo" /> What is Integration Testing?](https://www.tutorialspoint.com/software_testing_dictionary/integration_testing.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fsoftwaretestingfundamentals.com" alt="Logo" /> Integration Testing](http://softwaretestingfundamentals.com/integration-testing/)

#### System Testing

Learn about system testing and how it can be used to test the fully integrated software product.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com" alt="Logo" /> System Testing Tutorial](https://www.guru99.com/system-testing.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com" alt="Logo" /> What is System Testing?](https://www.tutorialspoint.com/software_testing_dictionary/system_testing.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fsoftwaretestingfundamentals.com" alt="Logo" /> System Testing](http://softwaretestingfundamentals.com/system-testing/)

#### Acceptance Testing

Learn about acceptance testing and how it can be used to test the software for acceptability

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com" alt="Logo" /> What is User Acceptance Testing?](https://www.guru99.com/user-acceptance-testing.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fsoftwaretestingfundamentals.com" alt="Logo" /> Acceptance Testing](http://softwaretestingfundamentals.com/acceptance-testing/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com" alt="Logo" /> What is Acceptance Testing?](https://www.tutorialspoint.com/software_testing_dictionary/acceptance_testing.htm)

#### Smoke Testing

Learn about smoke testing and how it can be used to ensure that critical functionalities of the program are working fine.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com" alt="Logo" /> Sanity Testing Vs Smoke Testing](https://www.guru99.com/smoke-sanity-testing.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fsoftwaretestingfundamentals.com" alt="Logo" /> Smoke Testing](http://softwaretestingfundamentals.com/smoke-testing/)

#### Performance Testing

Learn about performance testing and how it can be used to determine the responsiveness and stability of a program.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com" alt="Logo" /> Performance Testing Tutorial](https://www.guru99.com/performance-testing.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fsoftwaretestingfundamentals.com" alt="Logo" /> Performance Testing](http://softwaretestingfundamentals.com/performance-testing/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org" alt="Logo" /> Wikipedia - Software performance testing](https://en.wikipedia.org/wiki/Software_performance_testing)

#### Usability Testing

Learn about usability testing and how it can be used to determine if the system is easily usable for the end-user.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com" alt="Logo" /> What is Usability Testing?](https://www.guru99.com/usability-testing.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fsoftwaretestingfundamentals.com" alt="Logo" /> Usability Testing](http://softwaretestingfundamentals.com/usability-testing/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org" alt="Logo" /> Wikipedia - Usability testing](https://en.wikipedia.org/wiki/Usability_testing)

#### White Box Testing

Learn about white box testing and how it can be used to test the software's internal structure, design, and coding.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com" alt="Logo" /> What is White Box Testing?](https://www.guru99.com/white-box-testing.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fsoftwaretestingfundamentals.com" alt="Logo" /> White Box Testing](http://softwaretestingfundamentals.com/white-box-testing/)

#### Black Box Testing

Learn about black box testing and how a test can be carried out without looking at the internal code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com" alt="Logo" /> What is Black Box Testing?](https://www.guru99.com/black-box-testing.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fsoftwaretestingfundamentals.com" alt="Logo" /> Black Box Testing](http://softwaretestingfundamentals.com/black-box-testing/)

#### Automated Testing

Learn about automated testing and when it should be applied.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsmartbear.com" alt="Logo" /> What is Automated Testing?](https://smartbear.com/learn/automated-testing/what-is-automated-testing/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com" alt="Logo" /> Automated Testing Tutorial](https://www.guru99.com/automation-testing.html)

#### Manual Testing

Learn about manual testing and when it should be applied.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com" alt="Logo" /> Manual Testing Tutorial](https://www.guru99.com/manual-testing.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org" alt="Logo" /> Wikipedia - Manual Testing](https://en.wikipedia.org/wiki/Manual_testing)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com" alt="Logo" /> What is Manual Testing?](https://www.tutorialspoint.com/software_testing_dictionary/manual_testing.htm)

### Continuous integration

Learn about continuous integration and it can enable iterative software development.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> dev.to - Continuous Integration Explained](https://dev.to/markoa/continuous-integration-explained-59f9)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com" alt="Logo" /> Continuous Integration Tutorial](https://www.tutorialspoint.com/continuous_integration/index.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org" alt="Logo" /> Wikipedia - Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration)

### A/B Testing

Learn about A/B testing and how it can be used to optimize your web app.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> dev.to - A/B testing: introduction](https://dev.to/ice_lenor/ab-testing-introduction-3jpd)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> dev.to - When Not To A/B Test](https://dev.to/ice_lenor/when-not-to-ab-test-4cc7)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.optimizely.com" alt="Logo" /> A/B Testing](https://www.optimizely.com/optimization-glossary/ab-testing/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org" alt="Logo" /> Wikipedia - A/B testing](https://en.wikipedia.org/wiki/A/B_testing)

### Test Runners

Learn about test runners and how they can help running tests.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Famzotti.github.io" alt="Logo" /> Classifications of Testing Software](https://amzotti.github.io/testing/2015/03/16/what-is-the-difference-between-a-test-runner-testing-framework-assertion-library-and-a-testing-plugin/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.udacity.com" alt="Logo" /> Udacity - Javascript Testing](https://www.udacity.com/course/javascript-testing--ud549)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com" alt="Logo" /> JavaScript Unit Testing Frameworks](https://www.guru99.com/javascript-unit-testing-frameworks.html)

#### Karma

Learn about the Karma test runner.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fkarma-runner.github.io" alt="Logo" /> Karma](https://karma-runner.github.io/latest/index.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Getting started with Karma and Mocha](https://medium.com/@jazcodes/getting-started-with-karma-and-mocha-for-automated-browser-tests-5ebb6cd02edf)

#### Mocha

Learn about the Mocha testing framework.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmochajs.org" alt="Logo" /> Mocha](https://mochajs.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.logrocket.com" alt="Logo" /> A quick and complete guide to Mocha testing](https://blog.logrocket.com/a-quick-and-complete-guide-to-mocha-testing-d0e0ea09f09d/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodeburst.io" alt="Logo" /> How to test JavaScript with Mocha](https://codeburst.io/how-to-test-javascript-with-mocha-the-basics-80132324752e)
	


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#contributors)

## ➤ 기여자	

 ![image](https://user-images.githubusercontent.com/64728336/187239388-1aac1641-a4cc-4b0d-9753-5e5f373a5d0e.png)
 ![image](https://user-images.githubusercontent.com/64728336/187239338-3ec943f4-b150-4139-aea2-b19402d615f8.png)
 ![image](https://user-images.githubusercontent.com/64728336/187239293-35e212ec-803a-4b21-a0fa-c734df7c5845.png)
 ![image](https://user-images.githubusercontent.com/64728336/187239257-6082cbb0-a4d0-46d9-89f4-59ed4d524d10.png)



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#license)

## ➤ 라이선스
	
[MIT](https://opensource.org/licenses/MIT)에 따라 라이선스가 부여되었습니다.
