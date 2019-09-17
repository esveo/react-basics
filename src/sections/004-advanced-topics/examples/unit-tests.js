import sum from './sum';

describe('sum', () => {
  it('should return 3 when adding 1 and 2', () => {
    // Arrange
    const inputs = [1, 2];
    const expectedOutput = 3;

    // Act
    const output = sum(inputs[0], inputs[2]);

    // Assert
    expect(output).toBe(expectedOutput);
  });

  it('should throw when passed a string', () => {
    expect(() => sum('one', 'two')).toThrow();
  });
});
