test('Czy jest wieksze niz 1000px', () => {
    expect(sprawdzenie(1001)).toBe(true);
});
  
test('Czy jest rowne 1000px', () => {
    expect(sprawdzenie(1000)).toBe(false);
});

test('Czy jest mniejsze 1000px', () => {
    expect(sprawdzenie(999)).toBe(false);
});

function sprawdzenie(width){
    if(width <= 1000){
        return false
    } else {
        return true 
    }
}