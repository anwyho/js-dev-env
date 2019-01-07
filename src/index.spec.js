import {
    expect
} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should say hello', (done) => {
        // read in index.html
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        // Test runs asynchronously with a callback
        jsdom.env(index, function (err, window) {
            // Get reference to first h1 on page
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal('hello');
            // Test runs asynchronously
            // Need to tell Mocha test is done
            done();
            window.close();
        });
    });
});