const Spiderman = require("./../app/spiderman");

describe("Unit Test for Spiderman Class", () => {
  test("Case 1 Create an Spiderman Object", () => {
    const andrewGarfield = new Spiderman(
      "Amazing Spiderman",
      32,
      "Andrew Garfield",
      3,
      "Sony Pictures"
    );
    expect(andrewGarfield.name).toBe("Amazing Spiderman");
    expect(andrewGarfield.age).toBe(32);
    expect(andrewGarfield.actor).toBe("Andrew Garfield");
    expect(andrewGarfield.movies).toBe(3);
    expect(andrewGarfield.studio).toBe("Sony Pictures");
  });

  test("Case 2 Use the method getInfo()", () => {
    const tomHolland = new Spiderman(
      "Spiderman Marvel",
      20,
      "Tom Holland",
      3,
      "Marvel studio"
    );
    expect(tomHolland.getInfo()).toBe(
      "Hey, I'm Tom Holland from Marvel studio"
    );
  });
});
