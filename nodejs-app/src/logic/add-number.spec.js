const addNumbers = require('./add-number');
describe('addNumbers', () => {
    it('should add two numbers correctly', () => {
        // Arrange
        const num1 = 5;
        const num2 = 10;

        // Act
        const result = addNumbers(num1, num2);

        // Assert
        expect(result).toBe(15);
    });

    it('should handle negative numbers correctly', () => {
        // Arrange
        const num1 = -5;
        const num2 = -10;

        // Act
        const result = addNumbers(num1, num2);

        // Assert
        expect(result).toBe(-15);
    });

    // Add more test cases as needed
});