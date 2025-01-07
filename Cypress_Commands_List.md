# List of Cypress Commands

## **1. Basic Commands**

### `cy.visit(url, options)`

- Visit a remote URL.

```javascript
cy.visit('https://example.com');
```

### `cy.get(selector)`

- Get one or more DOM elements by **selector** or **alias**.

```javascript
cy.get('button').click();
```

### `cy.contains(text, options)`

- Finds an element containing specific text.

```javascript
cy.contains('Submit').click();
```

### `cy.reload(options)`

- Reloads the current page.

```javascript
cy.reload();
```

---

## **2. Interaction Commands**

### `cy.click(options)`

- Clicks an element.

```javascript
cy.get('#login-button').click();
```

### `cy.type(text, options)`

- Types text into an input or textarea.

```javascript
cy.get('#username').type('test_user');
```

### `cy.select(value, options)`

- Selects an option from a dropdown.

```javascript
cy.get('#country-select').select('Vietnam');
```

### `cy.check(options)`

- Checks a checkbox or radio button.

```javascript
cy.get('#accept-terms').check();
```

### `cy.uncheck(options)`

- Unchecks a checkbox.

```javascript
cy.get('#accept-terms').uncheck();
```

---

## **3. Assertions**

### `cy.should(chainers, value)`

- Asserts the state or value of an element.

```javascript
cy.get('#login-button').should('be.visible');
cy.get('#username').should('have.value', 'test_user');
```

### `cy.and(chainers)`

- Combines multiple assertions.

```javascript
cy.get('#login-button').should('be.visible').and('be.enabled');
```

### `cy.expect(value)`

- Used for custom assertions.

```javascript
expect(2 + 2).to.equal(4);
```

---

## **4. Wait Commands**

### `cy.wait(time)`

- Pauses execution for a specific time (ms).

```javascript
cy.wait(1000);
```

### `cy.wait(alias)`

- Waits for a named API request or event.

```javascript
cy.intercept('GET', '/api/users').as('getUsers');
cy.wait('@getUsers');
```

---

## **5. Network Handling Commands**

### `cy.intercept(method, url, response)`

- Intercepts and mocks an API request.

```javascript
cy.intercept('GET', '/api/data', { data: [] }).as('mockData');
```

### `cy.request(method, url, body)`

- Sends an HTTP request.

```javascript
cy.request('POST', '/api/login', { username: 'test', password: '123' });
```

---

## **6. Navigation Commands**

### `cy.go(direction)`

- Navigates forward or backward in browser history.

```javascript
cy.go('back');
cy.go('forward');
```

### `cy.url()`

- Gets the current URL.

```javascript
cy.url().should('include', '/dashboard');
```

---

## **7. Local Storage and Cookies**

### `cy.clearLocalStorage()`

- Clears local storage.

```javascript
cy.clearLocalStorage();
```

### `cy.setCookie(name, value)`

- Sets a cookie.

```javascript
cy.setCookie('session_id', '12345');
```

### `cy.getCookie(name)`

- Retrieves a cookie value.

```javascript
cy.getCookie('session_id').should('have.property', 'value', '12345');
```

---

## **8. File and Data Handling**

### `cy.readFile(filePath)`

- Reads the content of a file.

```javascript
cy.readFile('data.json').then((data) => {
    expect(data.username).to.equal('test_user');
});
```

### `cy.writeFile(filePath, data)`

- Writes data to a file.

```javascript
cy.writeFile('output.json', { success: true });
```

---

## **9. Execution Commands**

### `cy.exec(command)`

- Executes a terminal command.

```javascript
cy.exec('ls -la');
```

---

## **10. Custom Commands**

You can create custom commands in `commands.js`.

```javascript
Cypress.Commands.add('login', (username, password) => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
});
```

Usage:

```javascript
cy.login('test_user', '123456');
```
