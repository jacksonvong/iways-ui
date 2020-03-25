(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('iways/locale/en', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.IwaysUi.lang = global.IwaysUi.lang || {}; 
    global.IwaysUi.lang.en = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    iw: {
      colorpicker: {
        confirm: 'OK',
        clear: 'Clear'
      },
      datepicker: {
        now: 'Now',
        today: 'Today',
        cancel: 'Cancel',
        clear: 'Clear',
        confirm: 'OK',
        selectDate: 'Select date',
        selectTime: 'Select time',
        startDate: 'Start Date',
        startTime: 'Start Time',
        endDate: 'End Date',
        endTime: 'End Time',
        prevYear: 'Previous Year',
        nextYear: 'Next Year',
        prevMonth: 'Previous Month',
        nextMonth: 'Next Month',
        year: '',
        month1: 'January',
        month2: 'February',
        month3: 'March',
        month4: 'April',
        month5: 'May',
        month6: 'June',
        month7: 'July',
        month8: 'August',
        month9: 'September',
        month10: 'October',
        month11: 'November',
        month12: 'December',
        week: 'week',
        weeks: {
          sun: 'Sun',
          mon: 'Mon',
          tue: 'Tue',
          wed: 'Wed',
          thu: 'Thu',
          fri: 'Fri',
          sat: 'Sat'
        },
        months: {
          jan: 'Jan',
          feb: 'Feb',
          mar: 'Mar',
          apr: 'Apr',
          may: 'May',
          jun: 'Jun',
          jul: 'Jul',
          aug: 'Aug',
          sep: 'Sep',
          oct: 'Oct',
          nov: 'Nov',
          dec: 'Dec'
        },
        quarters: {
          Q1: 'Q1',
          Q2: 'Q2',
          Q3: 'Q3',
          Q4: 'Q4'
        }
      },
      common: {
        noMatch: 'No matching data',
        loading: 'Loading',
        placeholder: 'Select',
        search: 'Search',
        selected: 'Selected',
        checkColumnAll: 'Check All',
        reset: 'Reset',
        confirm: 'Confirm',
        checkAll: 'Check All',
        noData: 'No data',
        atLeast: 'Select {count} Items At Least',
        atMost: 'Select Less Than {count} Items'
      },
      select: {
        loading: 'Loading',
        noMatch: 'No matching data',
        noData: 'No data',
        placeholder: 'Select',
        checkAll: 'Check All'
      },
      empty: {
        wait: 'Wait',
        exception: 'Exception',
        unknow: 'Unknow'
      },
      manfbrand: {
        quickppositioning: 'Quick Position'
      },
      submodel: {
        quickppositioning: 'Quick Position',
        local: 'Local',
        import: 'Import'
      },
      version: {
        submodel: 'Submodel',
        version: 'Version',
        msrp: 'MSRP',
        hot: 'Hot',
        dataSource: 'DataSource'
      },
      favorite: {
        subModel: 'SubModel',
        manfBrand: 'ManfBrand',
        segment: 'Segment',
        placeholder: 'Input',
        folder: 'Folder',
        operation: 'Operat',
        select: 'Select',
        del: 'Delete',
        copy: 'Copy',
        edit: 'Edit',
        confirm: 'Comfirm',
        create: 'Create',
        cancel: 'Cancel',
        save: 'Save',
        saveFirst: 'Save First',
        customFolder: 'Custom Folder',
        maxFolders: 'No more than {maxLength}',
        maxFolderName: 'The name cannot exceed {maxLength} words',
        nameExist: 'Name is duplicated',
        outOfRange: 'Out of range'
      },
      pagination: {
        goto: 'Go to',
        pagesize: '/page',
        total: 'Total {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Message',
        confirm: 'OK',
        cancel: 'Cancel',
        error: 'Illegal input'
      },
      upload: {
        deleteTip: 'press delete to remove',
        delete: 'Delete',
        preview: 'Preview',
        continue: 'Continue'
      },
      table: {
        emptyText: 'No Data',
        confirmFilter: 'Confirm',
        resetFilter: 'Reset',
        clearFilter: 'All',
        sumText: 'Sum'
      },
      tree: {
        emptyText: 'No Data'
      },
      transfer: {
        noMatch: 'No matching data',
        noData: 'No data',
        titles: ['List 1', 'List 2'], // to be translated
        filterPlaceholder: 'Enter keyword', // to be translated
        noCheckedFormat: '{total} items', // to be translated
        hasCheckedFormat: '{checked}/{total} checked' // to be translated
      },
      image: {
        error: 'FAILED'
      },
      pageHeader: {
        title: 'Back' // to be translated
      }
    }
  };
  module.exports = exports['default'];
});