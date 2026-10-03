import { parseMarkdown, inline } from "./markdown";

function Inline({ text }) {
  return (
    <>
      {inline(text).map((p, k) => {
        if (p.t === "b")
          return (
            <strong key={k} className="font-semibold text-heading">
              {p.x}
            </strong>
          );
        if (p.t === "code")
          return (
            <code
              key={k}
              className="rounded bg-heading/10 px-1.5 py-0.5 font-mono text-[0.9em] text-heading"
            >
              {p.x}
            </code>
          );
        if (p.t === "i") return <em key={k}>{p.x}</em>;
        return <span key={k}>{p.x}</span>;
      })}
    </>
  );
}

// Renders parsed markdown blocks with brand tokens.
// font-display / font-body / text-heading / text-supportive come from globals.css
export default function Markdown({ text }) {
  const blocks = parseMarkdown(text);
  return (
    <div className="font-body text-base leading-7 text-heading/80 md:text-lg md:leading-8">
      {blocks.map((b, k) => {
        switch (b.type) {
          case "h2":
            return (
              <h2
                key={k}
                className="font-display mt-12 mb-4 text-3xl text-heading md:text-4xl"
              >
                <Inline text={b.text} />
              </h2>
            );
          case "h3":
            return (
              <h3
                key={k}
                className="font-display mt-8 mb-3 text-2xl text-heading"
              >
                <Inline text={b.text} />
              </h3>
            );
          case "p":
            return (
              <p key={k} className="mb-5">
                <Inline text={b.text} />
              </p>
            );
          case "ul":
            return (
              <ul key={k} className="mb-5 list-disc space-y-2 pl-6">
                {b.items.map((it, j) => (
                  <li key={j}>
                    <Inline text={it} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={k} className="mb-5 list-decimal space-y-2 pl-6">
                {b.items.map((it, j) => (
                  <li key={j}>
                    <Inline text={it} />
                  </li>
                ))}
              </ol>
            );
          case "table":
            return (
              <div
                key={k}
                className="mb-6 overflow-x-auto rounded-2xl border border-heading/10"
              >
                <table className="w-full text-left text-sm md:text-base">
                  <thead>
                    <tr className="bg-button/40">
                      {b.head.map((h, j) => (
                        <th
                          key={j}
                          className="font-label px-4 py-3 font-medium text-heading"
                        >
                          <Inline text={h} />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j} className="border-t border-heading/10">
                        {r.map((c, q) => (
                          <td key={q} className="px-4 py-3 align-top">
                            <Inline text={c} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "quote":
            return (
              <blockquote
                key={k}
                className="mb-5 border-l-4 border-button pl-4 italic text-heading"
              >
                <Inline text={b.text} />
              </blockquote>
            );
          case "hr":
            return <hr key={k} className="my-8 border-heading/10" />;
          default:
            return null;
        }
      })}
    </div>
  );
}
