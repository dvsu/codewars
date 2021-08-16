package solution

import "testing"


func TestNormal1(t *testing.T) {
	v := 10
	if r, expected := Multiple3And5(v), 23; r != expected {
		t.Fatalf(`Multiple3And5(%d) = %q. expected %#q`, v, r, expected)
	}
}

func TestNormalLarge(t *testing.T) {
	v := 200
	if r, expected := Multiple3And5(v), 9168; r != expected {
		t.Fatalf(`Multiple3And5(%d) = %q. expected %#q`, v, r, expected)
	}
}

func TestZeroInput(t *testing.T) {
	v := 0
	if r, expected := Multiple3And5(v), 0; r != expected {
		t.Fatalf(`Multiple3And5(%d) = %q. expected %#q`, v, r, expected)
	}
}

func TestNegativeInput(t *testing.T) {
	v := -123
	if r, expected := Multiple3And5(v), 0; r != expected {
		t.Fatalf(`Multiple3And5(%d) = %q. expected %#q`, v, r, expected)
	}
}