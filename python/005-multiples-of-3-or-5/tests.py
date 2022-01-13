import unittest
from solution import solution
# from alternative import move_zeros


class TestSolution(unittest.TestCase):

    def test_normal_1(self):
        self.assertEqual(solution(4), 3)

    def test_normal_2(self):
        self.assertEqual(solution(6), 8)

    def test_normal_3(self):
        self.assertEqual(solution(16), 60)

    def test_normal_4(self):
        self.assertEqual(solution(3), 0)

    def test_normal_5(self):
        self.assertEqual(solution(5), 3)

    def test_normal_6(self):
        self.assertEqual(solution(3), 0)

    def test_normal_7(self):
        self.assertEqual(solution(15), 45)

    def test_zero(self):
        self.assertEqual(solution(0), 0)

    def test_negative(self):
        self.assertEqual(solution(-1), 0)

    def test_normal_10(self):
        self.assertEqual(solution(10), 23)

    def test_normal_11(self):
        self.assertEqual(solution(20), 78)

    def test_large(self):
        self.assertEqual(solution(200), 9168)


if __name__ == "__main__":
    unittest.main()
