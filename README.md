<h2 align="center">
 :dizzy: useItJS :sparkles:<br><br>
</h2>

<p align="center">A small loading script for fragments, stylesheets, and scripts.</p>

- 🐱 Easy To Use
- 💾 Lightweight
- 🌐 Fragment Loading
- 🔧 Frequent Updates

## Usage

#### Fragments

__ui.set(_template_, _domID_, _create_)__
```javacript
ui(); // Initalize useItJS
ui.set('blogArticle.html', 'blogpostbody'); // Grab blogArticle.html from the server then apply it to the (existing) element with the id of 'blogpostbody'
```

The `set()` function works by either applying a fragment to an existing element or creating an element and applying the fragment.
#### CSS

__ui.css(_src_)__
```javacript
ui(); // Initalize useItJS
ui.css('blogArticle.css'); // Apply styles to document.
```
The `css()` function works by creating a `link` element and applying it to the document's `head`.
#### JS

__ui.js(_src_, _callback_)__

```javacript
ui(); // Initalize useItJS
ui.js('blogArticleCounter.js', showCounter();); // Apply script to document and execute showCounter() afterwards.
```
The `js()` function works by creating a `script` element and applying it to the document's `head`.

## Coming Soon
* Target comment for location of fragment rendering.
* More examples.
* npm hosting.
* Compatibility Check.
