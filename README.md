## 🔧 Installation

```
$ npm i jd-react-select --save
```

## 📖 Usage

Import the component

```js
import { Select } from 'jd-react-select';
import '@/../jd-react-select/dist/components/Select.css'
import { SelectOption } from '@/../jd-react-select/dist/components/Select'
```

Now, you can use it:

#### Single Select (when you just want to select one value at a time)

```jsx
<Select
 options={options}
 value={value}
 onChange={(value) => setValue(value)}
/>
```

#### Multi Select (when you want to select multiple elements)

```jsx
<Select
 multiple
 options={options}
 value={value}
 onChange={(value) => setValue(value)}
/>
```

## Props

#### `options: {Array}`

**Default:** `[]`

**Description:** An array of strings or objects to be used as dropdown items. If
you are using an array of objects, ensure you have a `label` key. e.g
`[{label: 'Label', value: 'Value'}])`.

#### `value: {String|Object}`

**Default:** `null`

**Description:** Specifies the currently selected item. `value` can be from
`list` or manually set.

#### `multiple: boolean`
**Default:** `false`

**Description:** Specifies the if the select component can have multiple values selected at once.

## 🖌️ Add custom styles

You can fully customize the styles for the select component by targeting the class names in your stylesheet.

```
.container
// Overwrite the select container 
```

To view all the class names, inspect the select component in your DevTools!



## 👀 Examples

⚡️
<a href="https://codesandbox.io/s/jd-react-select-v8fkfe?file=/src/App.tsx">jd-react-select on CodeSandbox</a>





