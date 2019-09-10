// GET-Request to get the HTML Page at the given URI
GET /wiki/Spezial:Search?search=Katzen&go=Artikel HTTP/1.1
Host: de.wikipedia.org


// Post-Request to send data
POST /wiki/Spezial:Search HTTP/1.1
Host: de.wikipedia.org
Content-Type: application/json
Content-Length: 20

{ "search": "cats" }
