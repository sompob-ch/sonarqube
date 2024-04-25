const multiplyNumber = require('./multiply-number');

describe('multiplyNumber', () => {
    it('should multiply two numbers correctly', () => {
        // Arrange
        const num1 = 5;
        const num2 = 10;
        const expected = 50;

        // Act
        const result = multiplyNumber(num1, num2);

        // Assert
        expect(result).toBe(expected);
    });

    // Add more test cases if needed
});