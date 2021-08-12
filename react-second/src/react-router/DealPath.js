import { pathToRegexp } from 'path-to-regexp'

const dealPath = (path, options) => {
  const pathName = window.location.pathname;
  const keys = [];
  let result = pathToRegexp(path, keys, getOptions(options));
  const matchResult = result.exec(pathName);
  if (!matchResult) {
    //没有匹配上
    return null;
  }
  const matchArr = Array.from(matchResult);
  const group = matchArr.slice(1);
  const params = getParams(group, keys);
  return {
    isExact: pathName === matchArr[0],
    params,
    path,
    url: matchArr[0]
  };
}

function getOptions(options = {}) {
  const defaultOption = {
    sensitive: false,
    strict: false,
    exact: false,
  }
  const opts = { ...defaultOption, ...options }
  return {
    sensitive: opts.sensitive,
    strict: opts.strict,
    end: opts.exact
  }
}

const getParams = (group, keys) => {
  const obj = {};
  for (let i = 0; i < group.length; i++) {
    obj[keys[i].name] = group[i];
  }
  return obj;
}

// dealPath('/new/:id/:page', '/new/123/1')

export default dealPath;