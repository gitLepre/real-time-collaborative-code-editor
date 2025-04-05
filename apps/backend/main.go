package main

import (
	"encoding/json"
	"log"
	"net/http"
)

/*
Returns a JSON response with the message "Hello World"
*/
func hello(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
	log.Println("Hello World")
	json.NewEncoder(w).Encode(map[string]string{"message": "Hello World"})
}

func main() {
	http.HandleFunc("/", hello)

	log.Println("Server is running on port 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}