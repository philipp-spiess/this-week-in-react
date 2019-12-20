
import universal, { setHasBabelPlugin } from '/Users/philippspiess/dev/this-week-in-react/node_modules/react-static/node_modules/react-universal-component/dist/index.js'


setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
}

const t_0 = universal(import('../src/containers/404'), universalOptions)
const t_1 = universal(import('../src/containers/Issue'), universalOptions)


// Template Map
export default {
  '../src/containers/404': t_0,
'../src/containers/Issue': t_1
}

export const notFoundTemplate = "../src/containers/404"
