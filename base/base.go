package base

import "fmt"

// Define an interface
type BaseInterface interface {
    PrintName() // Method that must be implemented
}

// Define a base struct
type Base struct {
    Name string
}

// Implement the interface method for the base struct
func (b *Base) PrintName() {
    fmt.Println("Name:", b.Name)
}

// Define a derived struct that embeds the base struct
type Derived struct {
    Base
    Level int
}


