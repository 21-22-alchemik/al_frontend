test('IsItBiggerThan1000', () => {
    expect(checkingWindowSize(1001)).toBe(true);
});
  
test('IsItEgualTo1000', () => {
    expect(checkingWindowSize(1000)).toBe(false);
});

test('IsItSmallerThan1000', () => {
    expect(checkingWindowSize(999)).toBe(false);
});

function checkingWindowSize(width){
    if(width <= 1000){
        return false
    } else {
        return true 
    }
}