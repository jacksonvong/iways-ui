import IwTable from './src/table';

/* istanbul ignore next */
IwTable.install = function(Vue) {
  Vue.component(IwTable.name, IwTable);
};

export default IwTable;
