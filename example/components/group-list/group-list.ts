Component({
  properties: {
    name: {
      type: String,
      value: '',
    },
    children: {
      type: Array,
      value: [],
    },
  },

  methods: {
    toExample(event: WechatMiniprogram.CustomEvent<unknown, { path: string }>) {
      const { path } = event.currentTarget.dataset;
      wx.navigateTo({
        url: path,
      });
    },
  },
});
