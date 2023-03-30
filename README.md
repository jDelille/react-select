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

### Single Select (when you just want to select one value at a time)

#### 1. Create your array of objects 

example:

```
const options = [
 { label: 'First', value: 1 },
 { label: 'Second', value: 2 },
 { label: 'Third', value: 3 },
 { label: 'Fourth', value: 4 },
 { label: 'Fifth', value: 5 },
];
```

#### 2. Ceate a useState to set the selected value

example: 

```
const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);
```
If you want to have a default value be selected when you component initializes, you can set the default state to (options[0]) to have the initial value of the select component be the first value in the options array.

###


```jsx
<Select
 options={options}
 value={value}
 onChange={(value) => setValue(value)}
/>
```

<hr />

### Multi Select (when you want to select multiple elements)

#### 1. Create your array of objects 

example:

```
const options = [
 { label: 'First', value: 1 },
 { label: 'Second', value: 2 },
 { label: 'Third', value: 3 },
 { label: 'Fourth', value: 4 },
 { label: 'Fifth', value: 5 },
];
```

#### 2. Ceate a useState to set the selected value

example: 

```
const [value, setValue] = useState<SelectOption[]>([options[0]]);
```
If you want to have a default value be selected when you component initializes, you can set the default state to (options[0]) to have the initial value of the select component be the first value in the options array.

###

```jsx
<Select
 multiple
 options={options}
 value={value}
 onChange={(value) => setValue(value)}
/>
```

To let the component know you want to have multiple selected values, pass in the multiple parameter.

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

example:
```
.container
// Overwrite the select container 
```

Since there are a lot of classnames, instead of writing them all here, inspect the select component in your DevTools to see all the classes!



## 👀 Examples

⚡️
<a href="https://codesandbox.io/s/jd-react-select-v8fkfe?file=/src/App.tsx">jd-react-select on CodeSandbox</a>





