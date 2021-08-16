import unittest
from solution import move_zeros
# from alternative import move_zeros


class TestSolution(unittest.TestCase):

    def test_normal_1(self):
        self.assertEqual(move_zeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]),
        [1, 2, 1, 1, 3, 1, 0, 0, 0, 0])

    def test_normal_2(self):
        self.assertEqual(move_zeros(
        [9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]),
        [9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

    def test_zeros(self):
        self.assertEqual(move_zeros([0, 0]), [0, 0])

    def test_single_zero(self):
        self.assertEqual(move_zeros([0]), [0])

    def test_empty(self):
        self.assertEqual(move_zeros([]), [])


if __name__ == "__main__":
    unittest.main()
