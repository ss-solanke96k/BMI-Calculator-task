# BMI-Calculator-task

A simple and interactive **BMI (Body Mass Index) Calculator** built using **HTML, CSS, and JavaScript (DOM Manipulation)**.

This project calculates your BMI based on height and weight and tells whether you are healthy or not.


## 🚀 Features

* 📏 Takes Height (in CM)
* ⚖️ Takes Weight (in KG)
* 🧠 Calculates BMI using JavaScript
* 🎯 Displays result inside input field
* ❤️ Shows health status (Healthy / Underweight / Overweight / Obese)
* 🎨 Styled using CSS
* 🖱️ Uses DOM Manipulation & Event Listeners


## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* DOM Manipulation


## 📌 How It Works

1. User enters height and weight.
2. Clicks on **Calculate BMI** button.
3. JavaScript:

   * Gets input values using `getElementById()`
   * Converts height from cm to meters
   * Applies BMI formula:

     ```
     BMI = weight / (height × height)
     ```
   * Uses conditional statements (`if-else`) to determine health category.
4. Result is displayed dynamically using DOM.


## 📂 Project Structure

```
BMI-Calculator/
│
├── index.html
├── style.css
└── script.js
```



## 💡 Learning Outcome

Through this project, I learned:

* DOM Selection (`getElementById`, `querySelector`)
* Event Handling (`addEventListener`)
* Form Validation
* JavaScript Logic & Conditional Statements
* Connecting JS with HTML


## 📈 Future Improvements

* Add BMI chart visualization
* Add color-based health indicators
* Add reset button
* Make it fully responsive

---

⭐ If you like this project, feel free to give it a star!
