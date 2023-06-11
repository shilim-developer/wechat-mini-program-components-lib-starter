Component({
  /**
   * 组件的属性列表
   */
  properties: {
    checked: {
      type: Boolean,
      value: false,
    },
    type: {
      type: String, // "circle","square","line"
      value: 'circle',
    },
    activeColor: {
      type: String,
      value: '#5ad0c2',
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    handleSwitchChange() {
      this.triggerEvent('change', { value: !this.properties.checked });
    },
  },
});
