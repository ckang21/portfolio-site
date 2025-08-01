package main

import (
	"encoding/json"
	"log"
	"net/http"
	"time"
)

type RiskScoreResponse struct {
	Name  string `json:"name"`
	Score int    `json:"score"`
}

func riskScoreHandler(w http.ResponseWriter, r *http.Request) {
	name := r.URL.Query().Get("name")
	if name == "" {
		http.Error(w, "Missing 'name' parameter", http.StatusBadRequest)
		return
	}

	score := 42 // TODO: Replace with real logic if needed

	resp := RiskScoreResponse{
		Name:  name,
		Score: score,
	}
	log.Println("[INFO]", time.Now().Format("2006-01-02 15:04:05"), "Served /api/risk-score for:", name)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)
}

func main() {
	http.HandleFunc("/api/risk-score", riskScoreHandler)
	log.Println("[INFO]", time.Now().Format("2006-01-02 15:04:05"), "Server running on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
