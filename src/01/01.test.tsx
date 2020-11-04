import {mult, splitIntoWords, sum} from './01';

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 3;
    b = 2;
    c = 6;
})

test('sum should be correct', () => {
    //data
    // const a=3;
    // const b=2;
    // const c=6;

    //action
    const result1 = sum(a, b);
    const result2 = sum(c, b);

    //expect result
    expect(result1).toBe(5);
    expect(result2).toBe(8);
})

test('multiply should be correct', () => {
    //data
    // const a=3;
    // const b=2;
    // const c=6;

    //action
    const result1 = mult(a, b);
    const result2 = mult(c, b);

    //expect result
    expect(result1).toBe(6);
    expect(result2).toBe(12);
})

test("splitting in to words should be correct", () => {
    const sent1 = "Hello my friends!"
    const sent2 = "Js - is cool!"

    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe("hello");
    expect(result1[1]).toBe("my");
    expect(result1[2]).toBe("friends");

    expect(result2.length).toBe(3);
    expect(result2[0]).toBe("js");
    expect(result2[1]).toBe("is");
    expect(result2[2]).toBe("cool");

})