describe("within index.html", () => {
  it("contains a <body> tag", () => {
    expect(document.querySelector("body")).to.exist;
  });

  it("contains a </body> tag", () => {
    expect(document.querySelector("body")).to.exist;
  });

  it("contains an <h1> tag", () => {
    expect(document.querySelector("h1")).to.exist;
  });

  it("contains a <p> tag", () => {
    expect(document.querySelector("p")).to.exist;
  });

  it("within the <p>, it contains a <strong> tag", () => {
    expect(document.querySelector("p strong")).to.exist;
  });

  it("within the <p>, it contains an <em> tag", () => {
    expect(document.querySelector("p em")).to.exist;
  });

  it("within the <p>, it contains an <a> tag with correct href", () => {
    const link = document.querySelector("p a");
    expect(link).to.exist;
    expect(link.getAttribute("href")).to.equal(
      "https://developer.mozilla.org/en-US/docs/Web/HTML"
    );
  });

  it("within the <body>, it contains a <table> tag", () => {
    expect(document.querySelector("body table")).to.exist;
  });
});
