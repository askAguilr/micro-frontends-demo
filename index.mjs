import mergedirs from 'merge-dirs';
const mergeDirs = mergedirs.default;

mergeDirs('./angularjs-app/dist', './dist', 'overwrite');
mergeDirs('./react-app/dist', './dist', 'overwrite');