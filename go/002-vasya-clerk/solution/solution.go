package solution

func Tickets(peopleInLine []int) string {
	if len(peopleInLine) == 0 {
		return "YES"
	}

	c := map[int]int{
		25:  0,
		50:  0,
		100: 0,
	}
	r := 0

	for _, p := range peopleInLine {
		c[p]++
		if p == 25 {
			continue
		}
		r = p - 25
		switch {
		case r >= 50 && c[50] > 0:
			r -= 50
			c[50]--
			fallthrough
		default:
			c[25] -= r / 25
			r %= 25
		}

		if r != 0 || c[25] < 0 {
			return "NO"
		}
	}
	return "YES"
}

func Tickets2(peopleInLine []int) string {
	if len(peopleInLine) == 0 {
		return "YES"
	}

	c := map[int]int{
		25:  0,
		50:  0,
		100: 0,
	}
	r := 0

	for _, p := range peopleInLine {
		c[p]++
		if p == 25 {
			continue
		}
		r = p - 25
		switch {
		case r >= 50 && c[50] > 0:
			r -= 50
			c[50]--
			fallthrough
		default:
			c[25] -= r / 25
			r %= 25
		}

		if r != 0 || c[25] < 0 {
			return "NO"
		}
	}
	return "YES"
}
