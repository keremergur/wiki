
# Nesting

::: code-group

```scss [scss]
nav {
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }  
    li { 
		display: inline-block; 
	}
}
```

```sass [sass]
nav 
    ul 
        margin: 0;
        padding: 0;
        list-style: none;
      
    li 
		display: inline-block; 
	

```

:::

```scss
.button {
    a {     // .button a {}
        font-weight: bold;
    }
    
    .success {      // .button.success {}
        color: green;
    }

    &:hover {       // .button:hover {}
        color: blue;
    }
}
```