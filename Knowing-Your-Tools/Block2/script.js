// 1.
// <div id="header"></div>
// <!-- 
```js
div#header
```


// -->
// 2.
// <div class="header"></div>
// <!-- 
```js
div.header
```


// -->
// 3.
// <div id="header" class="header"></div>
// <!--
```js
div#header.header
```


// -->
// 4.
// <div class="header main container" id="root"></div>
// <!-- 
```js
div.header.main.container#root
```

// 5.
// <ul>
//   <li></li>
//   <li></li>
//   <li></li>
//   <li></li>
//   <li></li>
// </ul>
// <!-- 
```js
ul>li*5
```


// -->
// 6.
// <ul>
//   <li class="item">Header 1</li>
//   <li class="item">Header 2</li>
//   <li class="item">Header 3</li>
//   <li class="item">Header 4</li>
//   <li class="item">Header 5</li>
// </ul>
// <!-- 
```js
ul>li*5.header{herder $}
```


// -->
// 7.
// <nav>
//   <ul>
//     <li></li>
//   </ul>
// </nav>
// <!-- 
```js
nav>ul>li
```


// -->
// 8.
// <div></div>
// <p></p>
// <blockquote></blockquote>
// <!-- 
```js
div+p+blockquote
```


// -->
// 9.
// <div></div>
// <div>
//   <p><span></span><em></em></p>
//   <blockquote></blockquote>
// </div>
// <!-- 
```js
div+div>p>span+em^^bq
```


// -->
// 10.
// <div>
//   <header>
//     <ul>
//       <li><a href=""></a></li>
//       <li><a href=""></a></li>
//     </ul>
//   </header>
//   <footer>
//     <p></p>
//   </footer>
// </div>
// <!-- 
```js
div>header>ul>li*2>a^^^footer>p
```

