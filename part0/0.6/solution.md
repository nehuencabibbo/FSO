```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 Created
    deactivate server

    Note left of server: New submission is stored in the server's notes list

    activate browser
    browser->>browser: Local notes list is actualized using the coresponding<br>callback function for the save button
    deactivate browser

```