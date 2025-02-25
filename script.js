let equation = '';
        let isResultDisplayed = false;

        // Append number to the equation
        function appendNumber(number) {
            if (isResultDisplayed) {
                equation = '';  // Reset equation if a result was displayed
                isResultDisplayed = false;
            }
            equation += number;
            updateDisplay();
        }

        // Append operator to the equation
        function appendOperator(op) {
            if (isResultDisplayed) {
                isResultDisplayed = false;
            }

            if (equation === '' || /[\+\-\*\/] $/.test(equation)) {
                return; // Prevent multiple operators in a row
            }

            equation += ' ' + op + ' ';
            updateDisplay();
        }

        // Calculate the result
        function calculate() {
            try {
                let result = eval(equation); // Evaluate the math expression
                equation += ' = ' + result;
                isResultDisplayed = true;
                updateDisplay();
            } catch (error) {
                equation = 'Error';
                updateDisplay();
                isResultDisplayed = true;
            }
        }

        // Clear the display
        function clearDisplay() {
            equation = '';
            isResultDisplayed = false;
            updateDisplay();
        }

        // Update the display
        function updateDisplay() {
            document.getElementById('display').textContent = equation || '0';
        }