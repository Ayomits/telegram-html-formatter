function link<D extends string, T extends string>(display: D, url: T): string {
  return `<a href="${url}">${display}</a>`;
}

function mention<T extends string | number>(usr: T) {
  if (typeof usr === "string") {
    return `t.me/${usr}`;
  }
  return `tg://user?id=${usr}`;
}

function bold<T extends string>(text: T): `<b>${T}</b>` {
  return `<b>${withEscape(text)}</b>`;
}

function cursive<T extends string>(text: T): `<i>${T}</i>` {
  return `<i>${withEscape(text)}</i>`;
}

function code<T extends string>(text: T): `<code>${T}</code>`;

function code<T extends string, L extends string>(
  text: T,
  lang: L
): `<pre language="${L}">${T}</pre>`;

function code<T extends string, L extends string | undefined = undefined>(
  text: T,
  lang?: L
) {
  if (lang) {
    return `<pre language="${lang}">${withEscape(text)}</pre>`;
  }

  return `<code>${withEscape(text)}</code>`;
}

function strike<T extends string>(text: T): `<s>${T}</s>` {
  return `<s>${withEscape(text)}</s>`;
}

function underline<T extends string>(text: T): `<u>${T}</u>` {
  return `<u>${withEscape(text)}</u>`;
}

function withEscape<T extends string>(s: T): T {
  const allowedTags = [
    // bold
    "b",
    "strong",

    // underline
    "u",

    // strike
    "s",
    "del",
    "strike",

    // code
    "pre",
    "code",

    // cursive
    "em,",
    "i",
  ];

  const allowedPattern = allowedTags.join("|");
  const pattern = new RegExp(`</?(?!(${allowedPattern})\\b)[^>]+>`, "g");

  return s.replaceAll(pattern, (match) => {
    return match.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }) as T;
}

export { bold, code, cursive, link, mention, strike, underline };
