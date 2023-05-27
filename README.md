# Amharic Converter

[![npm version](https://img.shields.io/npm/v/amharic-converter.svg)](https://www.npmjs.com/package/amharic-converter)
[![license](https://img.shields.io/npm/l/amharic-converter.svg)](https://github.com/girumgizachew1/Amharic-converter/blob/main/LICENSE)

This is a Typer that helps you write in Amharic in your application. It provides a simple way to convert English letters to Amharic letter using predefined transcription rules.

## Installation

You can install the package via npm:

```shell
npm install amharic-converter
```


## Usage with Example
To enable the conversion of English text to Amharic in real-time, you need to create a state variable that will hold the Amharic text. Additionally, you should implement an event handler that updates the state variable whenever the input text changes.

Here's an example of how you can accomplish this in JavaScript:

```javascript
import { convertToAmharic } from 'amharic-converter';

// Create a state variable to hold the Amharic text
const [amharicText, setAmharicText] = useState('');

// Define an event handler to update the state when the input changes
const handleInputChange = (event) => {
    const englishText = event.target.value;
    const convertedText = convertToAmharic(englishText);
    setAmharicText(convertedText);
};
```

In the code snippet above, we import the convertToAmharic function from the amharic-converter package. Then, we create a state variable called amharicText using the useState hook, which initializes it with an empty string.

The handleInputChange function is responsible for updating the state variable whenever the input text changes. It extracts the English text from the event's target value, passes it to the convertToAmharic function to obtain the corresponding Amharic text, and sets the amharicText state with the converted text.

To integrate this functionality into your application, you can use the amharicText state variable to display the converted Amharic text within an input element. Here's an example of how you can achieve this in JSX:

```javascript
<input
    type="text"
    value={amharicText}
    onChange={handleInputChange}
/>
```

In the above code, the value attribute of the input element is bound to the amharicText state variable, ensuring that it reflects the current converted Amharic text. The onChange event is connected to the handleInputChange function, so any changes to the input will trigger the conversion and update the state accordingly.

## Usage with Node
#### Step 1: create node project
``` npm init ```
#### Step 2: add amharic-converter as dependency
```npm install amharic-converter```
#### Step 3: 
```javascript
# index.js
const { convertToAmharic } = require("amharic-converter");

const amharicString = "Selam new"
const result = convertToAmharic(amharicString)

console.log(result)
```

#### Step 4: run the code in your terminal
``` node index.js ```
#### Expected output
``` ሠላም ነው```

## Authors

- [@girumgizachew1](https://www.github.com/girumgizachew)


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

