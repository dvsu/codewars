package main

import (
	"fmt"

	"github.com/dvsu/codewars/go/002-vasya-clerk/solution"
)

func main() {
	// quick print debug here
	// Otherwise, run the test using 'go test' in 'solution' module
	fmt.Println(solution.Tickets([]int{25, 25, 25, 25, 25, 100, 100})) // "NO"
}