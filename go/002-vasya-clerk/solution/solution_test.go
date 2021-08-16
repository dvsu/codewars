package solution

import "testing"


func TestYes(t *testing.T) {
	v := []int{25, 25, 50}
	if r, expected := Tickets(v), "YES"; r != expected {
		t.Fatalf(`Multiple3And5(%d) = %q. expected %#q`, v, r, expected)
	}
}

func TestNo1(t *testing.T) {
	v := []int{25, 100}
	if r, expected := Tickets(v), "NO"; r != expected {
		t.Fatalf(`Multiple3And5(%d) = %q. expected %#q`, v, r, expected)
	}
}

func TestNo2(t *testing.T) {
	v := []int{25, 25, 50, 50, 100}
	if r, expected := Tickets(v), "NO"; r != expected {
		t.Fatalf(`Multiple3And5(%d) = %q. expected %#q`, v, r, expected)
	}
}

func TestNo3(t *testing.T) {
	v := []int{25, 25, 25, 25, 25, 100, 100}
	if r, expected := Tickets(v), "NO"; r != expected {
		t.Fatalf(`Multiple3And5(%d) = %q. expected %#q`, v, r, expected)
	}
}

func TestEmpty(t *testing.T) {
	v := []int{}
	if r, expected := Tickets(v), "YES"; r != expected {
		t.Fatalf(`Multiple3And5(%d) = %q. expected %#q`, v, r, expected)
	}
}

func Test25(t *testing.T) {
	v := []int{25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25}
	if r, expected := Tickets(v), "YES"; r != expected {
		t.Fatalf(`Multiple3And5(%d) = %q. expected %#q`, v, r, expected)
	}
}