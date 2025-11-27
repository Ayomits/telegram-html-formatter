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
  return `<b>${escape(text)}</b>`;
}

function cursive<T extends string>(text: T): `<i>${T}</i>` {
  return `<i>${escape(text)}</i>`;
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
    return `<pre language="${lang}">${escape(text)}</pre>`;
  }

  return `<code>${escape(text)}</code>`;
}

function strike<T extends string>(text: T): `<s>${T}</s>` {
  return `<s>${escape(text)}</s>`;
}

function underline<T extends string>(text: T): `<u>${T}</u>` {
  return `<u>${escape(text)}</u>`;
}

function escape<T extends string>(s: T): T {
  const allowedTags = [
    "b",
    "strong",
    "u",
    "s",
    "del",
    "strike",
    "pre",
    "code",
    "em",
    "i",
  ];

  const tagPattern = /<(\/?)([a-zA-Z][^>]*)>/g;

  const result = s.replaceAll(tagPattern, (match, _, tagName) => {
    const cleanTagName = tagName.split(/\s/)[0].toLowerCase();

    if (allowedTags.includes(cleanTagName)) {
      return match;
    } else {
      return match.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
  });

  return result as T;
}

export { bold, code, cursive, link, mention, strike, underline };
