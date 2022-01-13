import unittest
from solution import iq_test


class TestSolution(unittest.TestCase):

    def test_even_inbetween(self):
        self.assertEqual(iq_test("1 5 1 9 7 2 31 41"), 6)

    def test_odd_inbetween(self):
        self.assertEqual(iq_test("8 20 10 6 3 2 4 12 18"), 5)

    def test_even_end(self):
        self.assertEqual(iq_test("1 3 5 7 9 11 13 15 17 19 20"), 11)

    def test_odd_end(self):
        self.assertEqual(iq_test("2 4 6 8 10 12 14 16 18 20 22 24 26 28 29"), 15)

    def test_even_start(self):
        self.assertEqual(iq_test("90 31 41 51 61 71 81"), 1)

    def test_odd_start(self):
        self.assertEqual(iq_test("31 32 42 62 72 82 102"), 1)


if __name__ == "__main__":
    unittest.main()
