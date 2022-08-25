## Using
Example
```javascript
const textKey = 'home.menu'
const options = { /* i18n options */ }
const nameSpace = 'USER'
textI18n(textKey, options, nameSpace)
// return 'User Home'
```
Example
```javascript
const textKey = 'home.menu'
const options = { /* i18n options */ }
const nameSpace = 'ADMIN'
textI18n(textKey, options, nameSpace)
// return 'Admin Home'
```

i18n language file example
```javascript
{
    home: {
        menu: 'Home'
    },
    USER: {
        home: {
            menu: 'User Home'
        }
    },
    ADMIN: {
        home: {
            menu: 'Admin Home'
        }
    },
}
```

