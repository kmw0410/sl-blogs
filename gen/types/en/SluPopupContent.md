# **SluPopupContent**
{
  type: `"text"`
  value: `string`
  styles: [`CssStyles`](./CssStyles) | `null`
} | {
  type: `"icon"`
  name: `string`
  styles: [`CssStyles`](./CssStyles) | `null`
} | {
  type: `"image"`
  href: `string`
  styles: [`CssStyles`](./CssStyles) | `null`
} | {
  type: `"button"`
  inner: `Array`<[`SluPopupContent`](./SluPopupContent)>
  styles: [`CssStyles`](./CssStyles) | `null`
  onClick: `string`
} | {
  type: `"group"`
  items: `Array`<[`SluPopupContent`](./SluPopupContent)>
  styles: [`CssStyles`](./CssStyles) | `null`
}