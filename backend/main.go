package main

import (
	"encoding/json"
	"fmt"
	"github.com/golang-jwt/jwt/v4"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Headers", "Authorization")
}

func isTokenValid(tokenString string) bool {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		//// Don't forget to validate the alg is what you expect:
		//if _, ok := token.Method.(*jwt.SigningMethodRSA); !ok {
		//	return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		//}
		return []byte(os.Getenv("SECRET_KEY")), nil
	})

	if err != nil {
		fmt.Println("Error while token validation.", tokenString)
		fmt.Println(err.Error())
		return false
	}

	if token.Valid {
		return true
	}

	return false

}

func homePage(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)

	fmt.Println(r.Method)
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "Welcome to the HomePage!")
	fmt.Println("Endpoint Hit: homePage")
}

func sendUsers(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	if r.Method != "POST" {
		fmt.Println("not a POST request. ignored.")
		w.WriteHeader(http.StatusOK)
		return
	}
	//authHeader := r.Header.Get("Authorization")
	//if authHeader == "" {
	//	w.WriteHeader(http.StatusUnauthorized)
	//	fmt.Println("Authorization Header empty")
	//	return
	//}
	//token := strings.TrimPrefix(authHeader, "Bearer ")
	//
	//if !isTokenValid(token) {
	//	w.WriteHeader(http.StatusUnauthorized)
	//	return
	//}
	fmt.Println("serving users to client.")
	users := []string{"ACDC.mme", "ABBA.mme"}
	userJson, _ := json.Marshal(users)
	w.WriteHeader(http.StatusOK)

	fmt.Fprint(w, string(userJson))
}

func uploadFile(w http.ResponseWriter, r *http.Request) {
	fmt.Println("file upload")
	r.ParseMultipartForm(10 << 20)

	file, handler, err := r.FormFile("File")
	if err != nil {
		fmt.Println("Error Retrieving the File")
		fmt.Println(err)
		return
	}

	defer file.Close()

	uploadedFile, err := ioutil.TempFile("", handler.Filename)
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	defer uploadedFile.Close()

	fileBytes, err := ioutil.ReadAll(file)
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	fmt.Println("file content: ", string(fileBytes))
	uploadedFile.Write(fileBytes)
	fmt.Println("finished")
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "done")

}

func handleRequests() {
	http.HandleFunc("/", homePage)
	http.HandleFunc("/users", sendUsers)
	http.HandleFunc("/fileUpload", uploadFile)

	log.Fatal(http.ListenAndServe(":10000", nil))
}

func main() {

	handleRequests()
}
