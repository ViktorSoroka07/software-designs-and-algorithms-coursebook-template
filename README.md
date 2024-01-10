# 📚 Home Task

The home task must be done using TypeScript.

## Requirements

1. Create a `Point` class, which creates a 2-dimensional point with coordinates. It must contain:
- two instance variables `x` and `y`;
- default constructor which creates a point at the location of `(0, 0)`;
- overloaded constructor (use multiple constructors declaration for TypeScript) which creates a point with `(x, y)` coordinates;
- `toString(): string` method must return string in format: `(x, y)`;
- `getDistance(): number` method must be overloaded (use multiple methods declaration for TypeScript) with the next implementations:
  - `getDistance()` distance from point to the point with (0, 0) coordinates;
  - `getDistance(other: Point)`: distance from point to a provided `Point` point;
  - `getDistance(x, y)`: distance from point to a point with provided (x, y) coordinates;
  - The result must have the precision of two for floating numbers `(e.g for 27.254534 it should yield 27.2)`;

2. Create abstract superclass called `Shape`, which contains:
- protected instance variables: `points` (Point[]), `color` (string), and `isFilled` (boolean);
- overloaded constructor (use multiple constructors declaration for TypeScript):
  - constructor that accepts a list of `points`, and initializes the `color` to `green` and `isFilled` to `true` by default;
  - constructor that accepts a list of `points`, the `color`, and `isFilled` properties;
- `Shape must have at least three points` error must be thrown if `Shape` does not have at least three points;
- `toString(): string` method that
  - for filled shape with color=`$color`, points=`[(x1, y1), (x2, y2), (x3, y3)]` must return `"A $color color shape, filled. Points: (x1, y1), (x2, y2), (x3, y3)."`;
  - for not filled shape with same color and points as shape above, must return `"A $color color shape, not filled. Points: (x1, y1), (x2, y2), (x3, y3)."`;
  - must utilize explicitly the point' `toString()` method to format the individual point;
- `getDistances(): number` method that calculates distances between sibling points in the shape with the help of point' `getDistance()` method. For points=`[(x1, y1), (x2, y2), (x3, y3)]` it should return the `[distance between point 1 and point 2, distance between point 2 and point 3, distance between point 1 and point 3]`. Order matters.
- `getPerimeter(): number` method that calculates the perimeter of the shape;

3. Create class `Triangle` that inherits `Shape` abstract class and must contain:
- constructor that accepts three points and optionally `color` and `isFilled` properties (e.g. `new Triangle(point1, point2, point3, color, isFilled)` when all arguments are provided);
- logic to check that provided points form the triangle. Otherwise, the error with `Invalid triangle` message must be thrown;
- override `toString()` method so it returns a string in format `"Triangle[v1=(x1, y1),v2=(x2, y2),v3=(x3, y3)]"`;
- implement `getType()` method that must return:
  - `equilateral` if all the three sides are equal
  - `isosceles` if any two of the three sides are equal
  - `scalene` if all sides are different
