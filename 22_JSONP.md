## JSONP

- JSONP only works GET.

- In case you're on domain example.com, and you want to make a request to domain example.net, it is CORD(Cross Origin Resource Sharing) and a browser block and won't work correctly.

- When you make your request to a server that is JSONP enabled, 
you pass a special parameter that tells the server a little bit about your page. That way, the server is able to nicely wrap up its response in a way that your page can handle.
For example, say the server expects a parameter called `callback` to enable its JSONP capabilities. Then your request would look like:


- These days (2015), CORS is the recommended approach vs. JSONRequest. JSONP is still useful for older browser support, but given the security implications, unless you have no choice CORS is the better choice.
**callback=callback**
```js
http://www.example.net/sample.aspx?callback=mycallback
```



**JSONP enable**
```js
mycallback({ foo: 'bar' });
```
### References:

https://stackoverflow.com/questions/2067472/what-is-jsonp-all-about
