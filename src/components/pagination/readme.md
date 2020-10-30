# is-pagination



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                                                                      | Type               | Default                   |
| ------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------------- |
| `color`       | `color`        | The color options are: `"primary"`, `"secondary"`, `"success"`, `"warning"`, `"error"`, `"light"`, `"info"`, `"white"`, `"black"`, and `"dark"`. | `string`           | `'success'`               |
| `currentPage` | `current-page` | Current page number, starting from 1                                                                                                             | `number \| string` | `this.localNumberOfPages` |
| `perPage`     | `per-page`     | Number of rows per page                                                                                                                          | `number \| string` | `this.DEFAULT_PER_PAGE`   |
| `totalRows`   | `total-rows`   | Total number of rows in the dataset                                                                                                              | `number \| string` | `this.DEFAULT_TOTAL_ROWS` |


## Events

| Event        | Description                       | Type               |
| ------------ | --------------------------------- | ------------------ |
| `changePage` | Emitted when the page is changed. | `CustomEvent<any>` |


## CSS Custom Properties

| Name                 | Description                  |
| -------------------- | ---------------------------- |
| `--background-color` | Active page background color |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
