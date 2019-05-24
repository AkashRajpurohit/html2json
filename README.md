# html2json converts a website into its equivalent JSON format

Sample input HTML file server at ```http://localhost:4000```

Website:
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Hello World</title>
</head>
<body class="body-color">
	<nav>
		<ul>
			<li><a href="/index.html">Home</a></li>
			<li><a href="/about.html">About</a></li>
			<li><a href="/contact.html">Contact</a></li>
			<li><a href="/blog.html">Blogs</a></li>
		</ul>
	</nav>
	<section class="main">
		<h1 class="red full-width">Hello</h1>
		<h3 class="blue full-width">World</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, laudantium, omnis. Ea quaerat minima, nostrum doloremque repellendus! Ratione quasi, non eligendi quidem at culpa animi vitae id eius corrupti deleniti.
			<img src="https://fakeimg.pl/300/" alt="Some image" />
		</p>
	</section>
	<main class="container">
		<p>This is some more dummy text</p>
		<h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat vitae dolor, atque, excepturi numquam cumque ut iusto, odio perferendis cum rem saepe eveniet voluptatum fuga debitis et illo distinctio eligendi!</h4>
	</main>
	<div class="div_content">
		Hi there, this is empty div with no children :(
	</div>
	<section class="different">
		<p id="p-id" data-attr="custom-attribute">Different section</p>
	</section>
</body>
</html>
```

Output: 
```
{
    "tag": "html",
    "attributes": {
        "lang": "en"
    },
    "child": [
        {
            "tag": "head",
            "attributes": {},
            "child": [
                {
                    "tag": "meta",
                    "attributes": {
                        "charset": "UTF-8"
                    },
                    "content": null,
                    "child": []
                },
                {
                    "tag": "title",
                    "attributes": {},
                    "content": "Hello World",
                    "child": []
                }
            ]
        },
        {
            "tag": "body",
            "attributes": {
                "class": "body-color"
            },
            "child": [
                {
                    "tag": "nav",
                    "attributes": {},
                    "child": [
                        {
                            "tag": "ul",
                            "attributes": {},
                            "child": [
                                {
                                    "tag": "li",
                                    "attributes": {},
                                    "child": [
                                        {
                                            "tag": "a",
                                            "attributes": {
                                                "href": "/index.html"
                                            },
                                            "content": "Home",
                                            "child": []
                                        }
                                    ]
                                },
                                {
                                    "tag": "li",
                                    "attributes": {},
                                    "child": [
                                        {
                                            "tag": "a",
                                            "attributes": {
                                                "href": "/about.html"
                                            },
                                            "content": "About",
                                            "child": []
                                        }
                                    ]
                                },
                                {
                                    "tag": "li",
                                    "attributes": {},
                                    "child": [
                                        {
                                            "tag": "a",
                                            "attributes": {
                                                "href": "/contact.html"
                                            },
                                            "content": "Contact",
                                            "child": []
                                        }
                                    ]
                                },
                                {
                                    "tag": "li",
                                    "attributes": {},
                                    "child": [
                                        {
                                            "tag": "a",
                                            "attributes": {
                                                "href": "/blog.html"
                                            },
                                            "content": "Blogs",
                                            "child": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "tag": "section",
                    "attributes": {
                        "class": "main"
                    },
                    "child": [
                        {
                            "tag": "h1",
                            "attributes": {
                                "class": "red full-width"
                            },
                            "content": "Hello",
                            "child": []
                        },
                        {
                            "tag": "h3",
                            "attributes": {
                                "class": "blue full-width"
                            },
                            "content": "World",
                            "child": []
                        },
                        {
                            "tag": "p",
                            "attributes": {},
                            "child": [
                                {
                                    "tag": "img",
                                    "attributes": {
                                        "src": "https://fakeimg.pl/300/",
                                        "alt": "Some image"
                                    },
                                    "content": null,
                                    "child": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "tag": "main",
                    "attributes": {
                        "class": "container"
                    },
                    "child": [
                        {
                            "tag": "p",
                            "attributes": {},
                            "content": "This is some more dummy text",
                            "child": []
                        },
                        {
                            "tag": "h4",
                            "attributes": {},
                            "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat vitae dolor, atque, excepturi numquam cumque ut iusto, odio perferendis cum rem saepe eveniet voluptatum fuga debitis et illo distinctio eligendi!",
                            "child": []
                        }
                    ]
                },
                {
                    "tag": "div",
                    "attributes": {
                        "class": "div_content"
                    },
                    "content": null,
                    "child": []
                },
                {
                    "tag": "section",
                    "attributes": {
                        "class": "different"
                    },
                    "child": [
                        {
                            "tag": "p",
                            "attributes": {
                                "id": "p-id",
                                "data-attr": "custom-attribute"
                            },
                            "content": "Different section",
                            "child": []
                        }
                    ]
                }
            ]
        }
    ]
}
```

## Output is stored in a file in ```outputs``` directory