import 'dart:math';

import "package:test/test.dart";
// import "solution.dart";
import "alternative.dart";

void main() {
  test('Test 1: Small integer', () {
    expect(triangular(2), equals(3));
    expect(triangular(4), equals(10));
    expect(triangular(9), equals(45));
  });

  test('Test 2: Negative values', () {
    expect(triangular(-9), equals(0));
    expect(triangular(-9999999), equals(0));
  });

  test('Test 3: Large integer (up to 64-bit)', () {
    expect(triangular(5811501), equals(16886774842251));
    expect(triangular(54560421), equals(1488419797128831));
    expect(triangular(999999999), equals(499999999500000000));
  });

}
