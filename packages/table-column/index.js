import IwTableColumn from '../table/src/table-column';

/* istanbul ignore next */
IwTableColumn.install = function(Vue) {
  Vue.component(IwTableColumn.name, IwTableColumn);
};

export default IwTableColumn;
