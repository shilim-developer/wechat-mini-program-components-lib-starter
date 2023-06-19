Page({
  data: {
    checked: false,
  },
  onLoad() {},
  handleSwitchChange(e) {
    const { value } = e.detail;
    this.setData({
      checked: value,
    });
  },
});
