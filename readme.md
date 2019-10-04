
# Is-Web-Component

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square) [![Netlify Status](https://api.netlify.com/api/v1/badges/4ad79586-5e59-43cc-ba9f-3de9fc05045a/deploy-status)](https://app.netlify.com/sites/is-web-component/deploys) ![Downloads](https://img.shields.io/npm/dm/is-web-component.svg)
 ![Version](https://img.shields.io/npm/v/is-web-component.svg) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/is-web-component) ![License](https://img.shields.io/npm/l/is-web-component.svg)
 
Open source web components for building web applications. Build on top [StencilJS](https://stenciljs.com).

## Installation

You can install using NPM:

```bash
npm i is-web-component --save
```

You can install using unpkg cdn:

```html
https://unpkg.com/is-web-component
```

## Usage

Script tag

- Put a script tag similar to this

  ```html
    <script src="https://unpkg.com/is-web-component@1.0.1/dist/is-web-component.js"></script>
  ```
  
  in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc.

  ```html
    <h3>is-badge</h3>
    <is-badge text="is-badge" rounded></is-badge>

    <h3>is-multiselect</h3>
    <is-multiselect id="select"></is-multiselect>
  
    <script>
      var select = document.getElementById("select");
      var data = [{
        id: 1,
        name: 'Data 1'
      }, {
        id: 2,
        name: 'Data 2'
      }, {
        id: 3,
        name: 'Data 3'
      }];
      select.items = data;
    </script>
  ```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Components

- [ ] is-alert
- [x] [is-badge](src/components/badge/readme.md)
- [ ] is-modal
- [x] [is-multiselect](src/components/multiselect/readme.md)
- [ ] is-pagination
- [ ] is-table
- [ ] is-tabs
