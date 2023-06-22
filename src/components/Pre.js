/* eslint-disable react/function-component-definition */
import {Highlight, themes} from 'prism-react-renderer';
// eslint-disable-next-line import/no-unresolved
// import theme from 'prism-react-renderer/themes/dracula';
import stripIndent from 'strip-indent';


const removeIndent = (code = '') => {
  return stripIndent(code).trim();
};

export const Pre = ({ children, lang }) => {
  return (
    <Highlight
      theme={themes.dracula}
      code={removeIndent(children)}
      language={lang}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

