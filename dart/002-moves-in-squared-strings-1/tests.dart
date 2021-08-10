import "package:test/test.dart";
import "solution.dart";

void main() {
  void testing(String act, String exp) => expect(act, equals(exp));
  group("Moves in Squared Strings 1 -", () {
    test("Test 1: vertMirror", () {
      testing(
          oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"),
          "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw");
      testing(
          oper(vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx"),
          "EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP");
    });
    test("Test 2: horMirror", () {
      testing(
          oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt"), "yeCt\nCSbg\nJVhv\nlVHt");
      testing(
          oper(horMirror, "njMK\ndbrZ\nLPKo\ncEYz"), "cEYz\nLPKo\ndbrZ\nnjMK");
    });
  });
}
