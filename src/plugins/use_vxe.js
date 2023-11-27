import 'vxe-table/styles/cssvar.scss';

import {
  Column,
  // Colgroup,
  Grid,
  // 表格功能
  // Filter,
  // Edit,
  // Menu,
  // Export,
  // Keyboard,
  // Validator,
  // 可选组件
  Icon,
  // Tooltip,
  // Toolbar,
  // Pager,
  // Form,
  // FormItem,
  // FormGather,
  // Checkbox,
  // CheckboxGroup,
  // Radio,
  // RadioGroup,
  // RadioButton,
  // Switch,
  // Input,
  // Select,
  // Optgroup,
  // Option,
  // Textarea,
  // Button,
  // Modal,
  // List,
  // Pulldown,
  // 表格
  Table,
  // 全局对象
  VXETable,
} from 'vxe-table';
import zhCN from 'vxe-table/es/locale/lang/zh-CN';
import XEUtils from 'xe-utils';

// 按需加载的方式默认是不带国际化的，自定义国际化需要自行解析占位符 '{0}'，例如：
VXETable.config({
  i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args),
});

export function useVXETable(app) {
  // 表格功能
  // app.use(Filter)
  // .use(Edit)
  // .use(Menu)
  // .use(Export)
  // .use(Keyboard)
  // .use(Validator)

  // 可选组件
  app
    .use(Icon)
    .use(Column)
    // .use(Colgroup)
    .use(Grid)
    // .use(Tooltip)
    // .use(Toolbar)
    // .use(Pager)
    // .use(Form)
    // .use(FormItem)
    // .use(FormGather)
    // .use(Checkbox)
    // .use(CheckboxGroup)
    // .use(Radio)
    // .use(RadioGroup)
    // .use(RadioButton)
    // .use(Switch)
    // .use(Input)
    // .use(Select)
    // .use(Optgroup)
    // .use(Option)
    // .use(Textarea)
    // .use(Button)
    // .use(Modal)
    // .use(List)
    // .use(Pulldown)

    // 安装表格
    .use(Table);
}
