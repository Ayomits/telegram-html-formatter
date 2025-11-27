## Formatter

Inspired by @discordjs/formatters library <br>
You can use it with `grammy` or `telegraf`

```ts
import {
  bold,
  code,
  cursive,
  link,
  underline,
  strike,
  escape,
} from "grammy-formatters";

// simple tags
bold("hello world"); // <b></b>
code("inline"); // <code></code>
code('const hello = "hello world"', "JavaScript"); // <pre language="JavaScript"></pre>
cursive("hello world"); // <i></i>
underline("underlined"); // <u></u>
strike("striked"); // <s></s>
link("display", "https://example.com")

// combined
bold(cursive("hello world"));

// escape

escape("<2></2>") // <2></2> -> telegram will not throw an Error

```