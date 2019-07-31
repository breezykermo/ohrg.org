import './styles.scss';
import showdown from 'showdown';
import posts from './posts.yaml';

/**
 * The CHI framework. A tiny JS framework for basic blogs in markdown.
**/
// SETUP
// https://github.com/showdownjs/showdown
const SHOWDOWN = new showdown.Converter();
const DIV = 'div';
const H3 = 'h3';

// FUNCTIONS
const t = txt => document.createTextNode(txt);

const md = txt => {
  const div = document.createElement('div');
  div.innerHTML = SHOWDOWN.makeHtml(txt);
  return div;
}

const blog = post => {
  const cont = document.createElement(DIV)
  const header = document.createElement(H3)
  header.appendChild(t(post.title))

  cont.appendChild(header)
  cont.appendChild(md(post.content));
  return cont;
}

// PUBLIC
const get = id => {
  const ROOT = document.getElementById(id);

  return {
    postify: _post => ROOT.appendChild(blog(_post)),
  }
}
/** end of the CHI framework **/

// application code
const chi = get("o-posts");
posts.forEach(post => {
  chi.postify(post);
})

