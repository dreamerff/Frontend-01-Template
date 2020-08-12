let htmlParser = require("../src/parser.js");

let assert = require('assert');

console.log(htmlParser.parseHTML)

it('parse a singe element width text content', () => {
    let doc = htmlParser.parseHTML("<div>hello</div>")
    let text = doc.children[0].children[0];

    assert.equal(text.content, "hello");
    assert.equal(text.type, "text");
    console.log(text);

})

it("tag mismatch", () => {
    try {
        let doc = htmlParser.parseHTML("<div></vid>")
    } catch (e) {
        assert.equal(e.message, "Tag start end doesn't match");
    }
})

it("test with < ", () => {
    let doc = htmlParser.parseHTML("<div>a < b</div>")
    let text = doc.children[0].children[0];
    assert.equal(text.content, "a < b");
    assert.equal(text.type, 'text')
})

it("with property", () => {
    let doc = htmlParser.parseHTML('<div id="a" class="cls" data=\'abc\'></div>');
    let div = doc.children[0];

    let count = 0;

    for (let attr of div.attributes) {
        if (attr.name === "id") {
            count++;
            assert.equal(attr.value, "a");
        }
        if (attr.name === "class") {
            count++;
            assert.equal(attr.value, "cls");
        }
        if (attr.name === "data") {
            count++;
            assert.equal(attr.value, "abc");
        }
    }
    assert.ok(count === 3);
})


it("with property 2", () => {
    let doc = htmlParser.parseHTML("<div id='a' class='cls' data=\"abc\"></div>");
    let div = doc.children[0];

    let count = 0;

    for (let attr of div.attributes) {
        if (attr.name === "id") {
            count++;
            assert.equal(attr.value, "a");
        }
        if (attr.name === "class") {
            count++;
            assert.equal(attr.value, "cls");
        }
        if (attr.name === "data") {
            count++;
            assert.equal(attr.value, "abc");
        }
    }
    assert.ok(count === 3);
})


it('with property 3', function () {
    let doc = htmlParser.parseHTML('<div id=a class="cls"data="abc"/>');
    let div = doc.children[0];

    let count = 0;

    for (const attr of div.attributes) {
        if (attr.name === 'id') {
            count++;
            assert.equal(attr.value, 'a');
        }
        if (attr.name === 'class') {
            count++;
            assert.equal(attr.value, 'cls');
        }
        if (attr.name === 'data') {
            count++;
            assert.equal(attr.value, 'abc');
        }
    }

    assert.ok(count === 3);
});

it('attribute with no value', function () {
    let doc = htmlParser.parseHTML('<div class />');
    let div = doc.children[0];

    let count = 0;

    for (const attr of div.attributes) {
        if (attr.name === 'class') {
            count++;
            assert.equal(attr.value, '');
        }
    }

    assert.ok(count === 1);
});

it('attribute with no value2', function () {
    let doc = htmlParser.parseHTML('<div class id data = />');
    let div = doc.children[0];

    let count = 0;

    for (const attr of div.attributes) {
        if (attr.name === 'id') {
            count++;
            assert.equal(attr.value, '');
        }
        if (attr.name === 'class') {
            count++;
            assert.equal(attr.value, '');
        }
        if (attr.name === 'data') {
            count++;
            assert.equal(attr.value, '');
        }
    }

    assert.ok(count === 3);
});

it('attribute with no value3', function () {
    let doc = htmlParser.parseHTML('<div id = ></div>');
    let div = doc.children[0];

    let count = 0;

    for (const attr of div.attributes) {
        if (attr.name === 'id') {
            count++;
            assert.equal(attr.value, '');
        }
    }

    assert.ok(count === 1);
});

it('self closed single element', function () {
    let doc = htmlParser.parseHTML('<div/>');
    let div = doc.children[0];

    assert.equal(div.tagName, 'div');
    assert.equal(div.children.length, 0);
    assert.equal(div.type, 'element');
    assert.equal(div.attributes.length, 3);
});

it('uppercase tagname element', function () {
    let doc = htmlParser.parseHTML('<DIV/>');
    let div = doc.children[0];

    assert.equal(div.tagName, 'DIV');
    assert.equal(div.children.length, 0);
    assert.equal(div.type, 'element');
    assert.equal(div.attributes.length, 3);
});

it('multiple spaces single element', function () {
    let doc = htmlParser.parseHTML('<div     />');
    let div = doc.children[0];

    assert.equal(div.tagName, 'div');
    assert.equal(div.children.length, 0);
    assert.equal(div.type, 'element');
    assert.equal(div.attributes.length, 3);
});

it('empty tagname element', function () {
    let doc = htmlParser.parseHTML('</>');
    let div = doc.children[0];

    assert.equal(div.tagName, '');
    assert.equal(div.children.length, 0);
    assert.equal(div.type, 'element');
    assert.equal(div.attributes.length, 3);
});

it('script', function () {
    let content = `
    <div>abcd</div>
    <span>x</span>
    /script
    <script
    <
    </
    </s
    </sc
    </scr
    </scri
    </scrip
    </script 
  `;
    let doc = htmlParser.parseHTML(`<script>${content}</script>`);
    let text = doc.children[0].children[0];

    assert.equal(text.content, content);
    assert.equal(text.type, 'text');
});