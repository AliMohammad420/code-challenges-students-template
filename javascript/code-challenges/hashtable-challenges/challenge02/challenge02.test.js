'use strict';


const { repeated } = require('./challenge02.js');

describe('Repeated Word', () => {
    it('should return the first repeated word', () => {
        expect(repeated("I am learning programming at ASAC")).toStrictEqual("No Repetition");
        expect(repeated("ASAC is a department at LTUC. ASAC teaches programming in LTUC.")).toStrictEqual("ASAC");
    });
});