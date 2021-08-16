package solution

func Multiple3And5(n int) int {
	if n <= 0 {
		return 0
	}

	t := 0
	for i := 0; i < n; i++ {
		if i%3 == 0 || i%5 == 0 {
			t += i
		}

	}
	return t
}
