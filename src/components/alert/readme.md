# is-alert



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                                                                                      | Type      | Default     |
| ----------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ----------- |
| `autoClose` | `auto-close` | If `true` alert will close automatically.                                                                                                        | `boolean` | `true`      |
| `closeSecs` | `close-secs` | Number of seconds to close alert automatically if autoClose `true`.                                                                              | `number`  | `3`         |
| `closeText` | `close-text` | Customized close button text.                                                                                                                    | `string`  | `'\u2573'`  |
| `closeable` | `closeable`  | If closable or not.                                                                                                                              | `boolean` | `true`      |
| `color`     | `color`      | The color options are: `"primary"`, `"secondary"`, `"success"`, `"warning"`, `"error"`, `"light"`, `"info"`, `"white"`, `"black"`, and `"dark"`. | `string`  | `undefined` |
| `rounded`   | `rounded`    | If `true`, make the alert rounded.                                                                                                               | `boolean` | `false`     |


## Events

| Event    | Description                       | Type               |
| -------- | --------------------------------- | ------------------ |
| `closed` | Emitted when the alert is closed. | `CustomEvent<any>` |


## CSS Custom Properties

| Name                 | Description                              |
| -------------------- | ---------------------------------------- |
| `--background-color` | Background color of the alert            |
| `--border-radius`    | Border radius of the badge if is rounded |
| `--color`            | Text color of the alert                  |
| `--font-family`      | Font family of the alert text            |
| `--font-size`        | Font size of the alert text              |
| `--font-weight`      | Font weight of the alert text            |
| `--padding-bottom`   | Padding bottom of the alert              |
| `--padding-left`     | Padding left of the alert                |
| `--padding-right`    | Padding right of the alert               |
| `--padding-top`      | Padding top of the alert                 |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
