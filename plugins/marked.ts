import marked from 'marked';
import Hljs from './highlight';


marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight(code) {
    return Hljs.highlightAuto(code).value
  }
})

const renderer = new marked.Renderer()

export default (content) => {
  console.log('marked(content, { renderer })', marked(content, { renderer }))
  // 返回解析内容
  return marked(content, { renderer })
}