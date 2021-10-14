
# Is-Web-Component

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square) [![Netlify Status](https://api.netlify.com/api/v1/badges/4ad79586-5e59-43cc-ba9f-3de9fc05045a/deploy-status)](https://app.netlify.com/sites/is-web-component/deploys) ![Downloads](https://img.shields.io/npm/dm/is-web-component.svg)
 [![Version](https://img.shields.io/npm/v/is-web-component.svg)](https://www.npmjs.com/package/is-web-component) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/is-web-component) ![License](https://img.shields.io/npm/l/is-web-component.svg) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v1.4%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)


Open source web components for building web applications. Build on top [StencilJS](https://stenciljs.com).

## Demonstration

[https://is-web-component.isnur.com/](https://is-web-component.isnur.com/)

## Documentation

[https://is-web-component.isnur.com/docs/](https://is-web-component.isnur.com/docs/)

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

Use Script tag

- Put a script tag similar to this one

  ```html
    <script type="module" src="https://unpkg.com/is-web-component@latest/dist/is-web-component/is-web-component.esm.js"></script>
    <script nomodule="" src="https://unpkg.com/is-web-component@latest/dist/is-web-component/is-web-component.js"></script>
  ```
  
  in the head of your index.html file
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

* Read the project [Code of Conduct](CODE_OF_CONDUCT.md) and remember to be nice to one another.
* See [CONTRIBUTING.md](CONTRIBUTING.md) for information about how to contribute to this project.

## Components

- [x] [is-alert](src/components/alert/readme.md)
- [x] [is-badge](src/components/badge/readme.md)
- [x] [is-modal](src/components/modal/readme.md)
- [x] [is-multiselect](src/components/multiselect/readme.md)
- [x] [is-pagination](src/components/pagination/readme.md)
- [x] [is-readmore](src/components/readmore/readme.md)
- [x] [is-button](src/components/button/readme.md)
- [x] [is-divider](src/components/divider/readme.md)
- [x] [is-breadcrumb](src/components/breadcrumb/readme.md)
  - [x] [is-breadcrumb-item](src/components/breadcrumb-item/readme.md)
- [x] [is-card](src/components/card/readme.md)
  - [x] [is-card-header](src/components/card-header/readme.md)
  - [x] [is-card-title](src/components/card-title/readme.md)
  - [x] [is-card-image](src/components/card-image/readme.md)
  - [x] [is-card-body](src/components/card-body/readme.md)
- [ ] is-table
- [ ] is-tabs
